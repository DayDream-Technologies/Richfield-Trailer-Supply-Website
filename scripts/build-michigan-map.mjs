/**
 * Builds src/data/michigan-map.ts from public-domain cartography:
 * - U.S. Census Bureau Cartographic Boundary states (5m, 2010)
 * - Natural Earth 50m lakes
 *
 * Sources are expected in .tmp-map/ (not committed).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tmp = path.join(root, ".tmp-map");
const outFile = path.join(root, "src/data/michigan-map.ts");

const LON_W = -86.92;
const LON_E = -82.28;
const LAT_S = 41.64;
const LAT_N = 45.95;
const WIDTH = 560;
const PAD = 18;

const meanLat = ((LAT_N + LAT_S) / 2) * (Math.PI / 180);
const COS = Math.cos(meanLat);

function projectRaw(lon, lat) {
  return {
    x: (lon - LON_W) * COS,
    y: LAT_N - lat,
  };
}

const fit = (() => {
  const a = projectRaw(LON_W, LAT_N);
  const b = projectRaw(LON_E, LAT_S);
  const spanX = b.x - a.x;
  const spanY = b.y - a.y;
  const innerW = WIDTH - PAD * 2;
  const scale = innerW / spanX;
  const height = spanY * scale + PAD * 2;
  return {
    scale,
    height,
    originX: a.x,
    originY: a.y,
  };
})();

function project(lon, lat) {
  const p = projectRaw(lon, lat);
  return {
    x: PAD + (p.x - fit.originX) * fit.scale,
    y: PAD + (p.y - fit.originY) * fit.scale,
  };
}

function round(n) {
  return Math.round(n * 10) / 10;
}

function ringToPath(ring) {
  if (!ring || ring.length < 4) return "";
  const pts = ring.map(([lon, lat]) => project(lon, lat));
  let d = `M${round(pts[0].x)} ${round(pts[0].y)}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const cur = pts[i];
    if (round(cur.x) === round(prev.x) && round(cur.y) === round(prev.y)) continue;
    d += `L${round(cur.x)} ${round(cur.y)}`;
  }
  return `${d}Z`;
}

function polygonsToPath(polygons) {
  return polygons
    .flatMap((polygon) => polygon.map(ringToPath).filter(Boolean))
    .join("");
}

function inside(p, edge, min, max) {
  const [x, y] = p;
  if (edge === "left") return x >= min;
  if (edge === "right") return x <= max;
  if (edge === "bottom") return y >= min;
  return y <= max;
}

function intersect(a, b, edge, min, max) {
  const [x1, y1] = a;
  const [x2, y2] = b;
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (edge === "left" || edge === "right") {
    const x = edge === "left" ? min : max;
    const t = dx === 0 ? 0 : (x - x1) / dx;
    return [x, y1 + t * dy];
  }
  const y = edge === "bottom" ? min : max;
  const t = dy === 0 ? 0 : (y - y1) / dy;
  return [x1 + t * dx, y];
}

function clipRing(ring, lonW, lonE, latS, latN) {
  const edges = [
    ["left", lonW, lonE],
    ["right", lonW, lonE],
    ["bottom", latS, latN],
    ["top", latS, latN],
  ];
  let output = ring.map((p) => [p[0], p[1]]);
  if (output.length > 1) {
    const first = output[0];
    const last = output[output.length - 1];
    if (first[0] !== last[0] || first[1] !== last[1]) output.push(first);
  }
  for (const [edge, min, max] of edges) {
    if (!output.length) break;
    const input = output;
    output = [];
    for (let i = 0; i < input.length; i++) {
      const cur = input[i];
      const prev = input[(i + input.length - 1) % input.length];
      const curIn = inside(cur, edge, min, max);
      const prevIn = inside(prev, edge, min, max);
      if (curIn) {
        if (!prevIn) output.push(intersect(prev, cur, edge, min, max));
        output.push(cur);
      } else if (prevIn) {
        output.push(intersect(prev, cur, edge, min, max));
      }
    }
  }
  if (output.length && (output[0][0] !== output[output.length - 1][0] || output[0][1] !== output[output.length - 1][1])) {
    output.push(output[0]);
  }
  return output.length >= 4 ? output : null;
}

function clipPolygon(polygon, pad = 0.15) {
  const clipped = [];
  for (const ring of polygon) {
    const next = clipRing(ring, LON_W - pad, LON_E + pad, LAT_S - pad, LAT_N + pad);
    if (next) clipped.push(next);
  }
  return clipped.length ? clipped : null;
}

function geomPolygons(geometry) {
  if (geometry.type === "Polygon") return [geometry.coordinates];
  if (geometry.type === "MultiPolygon") return geometry.coordinates;
  return [];
}

const states = JSON.parse(fs.readFileSync(path.join(tmp, "census5m.json"), "utf8"));

const mi = states.features.find((f) => f.properties.NAME === "Michigan");
const lpLand = [];
const neighborLand = [];

for (const polygon of geomPolygons(mi.geometry)) {
  const ring = polygon[0];
  let minLon = Infinity;
  let maxLon = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;
  let cy = 0;
  for (const [lon, lat] of ring) {
    minLon = Math.min(minLon, lon);
    maxLon = Math.max(maxLon, lon);
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
    cy += lat;
  }
  cy /= ring.length;
  const hitsView =
    maxLon >= LON_W && minLon <= LON_E && maxLat >= LAT_S && minLat <= LAT_N;
  if (!hitsView) continue;

  const isLower = maxLat < 45.92 && minLon > -87.05;
  const isUp = cy > 45.85 || (minLon < -86.4 && cy > 45.2);
  const clipped = clipPolygon(polygon);
  if (!clipped) continue;
  if (isLower && !isUp) lpLand.push(clipped);
  else if (isUp) neighborLand.push(clipped);
}

const landPath = polygonsToPath(lpLand);
const neighborPath = polygonsToPath(neighborLand);

const stores = [
  { slug: "traverse-city", lon: -85.6412, lat: 44.7318 },
  { slug: "grand-rapids", lon: -85.6618, lat: 42.8874 },
  { slug: "flint", lon: -83.6372, lat: 43.0625 },
];
console.log(
  "pins",
  stores.map((s) => ({ slug: s.slug, ...project(s.lon, s.lat) })),
);
console.log("view", WIDTH, fit.height.toFixed(1), "land", landPath.length, "neighbors", neighborPath.length);

const file = `/* Generated by scripts/build-michigan-map.mjs from U.S. Census Bureau
 * Cartographic Boundary files (public domain). Do not edit by hand.
 */

export const michiganMap = {
  width: ${WIDTH},
  height: ${Math.round(fit.height * 10) / 10},
  lonW: ${LON_W},
  lonE: ${LON_E},
  latS: ${LAT_S},
  latN: ${LAT_N},
  pad: ${PAD},
  cos: ${COS},
  scale: ${fit.scale},
  originX: ${fit.originX},
  originY: ${fit.originY},
  land: "${landPath}",
  neighbors: "${neighborPath}",
} as const;

export function projectMichigan(lon: number, lat: number) {
  const x = (lon - michiganMap.lonW) * michiganMap.cos;
  const y = michiganMap.latN - lat;
  return {
    x: michiganMap.pad + (x - michiganMap.originX) * michiganMap.scale,
    y: michiganMap.pad + (y - michiganMap.originY) * michiganMap.scale,
  };
}
`;

fs.writeFileSync(outFile, file);
console.log("wrote", outFile, fs.statSync(outFile).size);
