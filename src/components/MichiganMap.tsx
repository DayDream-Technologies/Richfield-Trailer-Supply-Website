import { stores, type Store } from "@/data/stores";

const basePath =
  process.env.GITHUB_PAGES === "true" ? "/Richfield-Trailer-Supply-Website" : "";

const LON_W = -86.9;
const LON_E = -82.3;
const LAT_S = 41.68;
const LAT_N = 45.84;
const WIDTH = 360;
const HEIGHT = 430;

function project(lon: number, lat: number) {
  return {
    x: ((lon - LON_W) / (LON_E - LON_W)) * WIDTH,
    y: ((LAT_N - lat) / (LAT_N - LAT_S)) * HEIGHT,
  };
}

const outline: [number, number][] = [
  [-84.73, 45.78],
  [-84.55, 45.72],
  [-83.9, 45.42],
  [-83.43, 45.06],
  [-83.33, 44.42],
  [-83.5, 44.22],
  [-83.88, 44.02],
  [-83.95, 43.72],
  [-83.88, 43.58],
  [-83.45, 43.78],
  [-82.99, 44.05],
  [-82.65, 43.84],
  [-82.42, 42.98],
  [-82.52, 42.55],
  [-83.05, 42.33],
  [-83.4, 41.76],
  [-84.85, 41.7],
  [-86.08, 41.76],
  [-86.76, 41.8],
  [-86.52, 42.18],
  [-86.28, 42.78],
  [-86.25, 43.24],
  [-86.45, 43.96],
  [-86.32, 44.26],
  [-86.22, 44.64],
  [-86.07, 44.9],
  [-85.78, 44.86],
  [-85.62, 44.76],
  [-85.52, 45.12],
  [-85.26, 45.32],
  [-84.96, 45.38],
  [-84.73, 45.78],
];

const outlinePath = outline
  .map(([lon, lat], index) => {
    const { x, y } = project(lon, lat);
    return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  })
  .join(" ");

const pinOffset: Record<Store["slug"], { dx: number; dy: number; anchor: "start" | "end" | "middle" }> = {
  "traverse-city": { dx: 14, dy: -10, anchor: "start" },
  "grand-rapids": { dx: -14, dy: 18, anchor: "end" },
  flint: { dx: 14, dy: 18, anchor: "start" },
};

export function MichiganMap() {
  return (
    <figure className="rounded-sm border border-line bg-white p-4 md:p-6">
      <figcaption className="font-display text-lg uppercase tracking-wide text-navy">
        Lower Peninsula stores
      </figcaption>
      <p className="mt-1 text-sm text-steel">
        Three counters across Michigan. Select a pin for hours and directions.
      </p>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Map of Michigan’s Lower Peninsula with Richfield Trailer Supply stores in Traverse City, Grand Rapids, and Flint"
        className="mx-auto mt-4 h-auto w-full max-w-md"
      >
        <text x="48" y="210" className="fill-steel/70 text-[11px]" style={{ fontFamily: "inherit" }}>
          Lake Michigan
        </text>
        <text x="250" y="90" className="fill-steel/70 text-[11px]" style={{ fontFamily: "inherit" }}>
          Lake Huron
        </text>
        <path
          d={`${outlinePath} Z`}
          className="fill-cream stroke-navy"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {stores.map((store) => {
          const { x, y } = project(store.lon, store.lat);
          const label = pinOffset[store.slug];
          return (
            <a
              key={store.slug}
              href={`${basePath}/locations/${store.slug}/`}
              className="map-pin"
            >
              <g className="cursor-pointer">
                <title>{`${store.name}: ${store.address}`}</title>
                <circle cx={x} cy={y} r="11" className="fill-brand/15" />
                <circle cx={x} cy={y} r="6" className="fill-brand stroke-white" strokeWidth="2" />
                <text
                  x={x + label.dx}
                  y={y + label.dy}
                  textAnchor={label.anchor}
                  className="fill-navy text-[13px] font-semibold"
                  style={{ fontFamily: "inherit" }}
                >
                  {store.name}
                </text>
              </g>
            </a>
          );
        })}
      </svg>
    </figure>
  );
}
