import { stores, type Store } from "@/data/stores";
import { michiganMap, projectMichigan } from "@/data/michigan-map";

const pinLayout: Record<
  Store["slug"],
  { dx: number; dy: number; anchor: "start" | "end" | "middle" }
> = {
  "traverse-city": { dx: 16, dy: -18, anchor: "start" },
  "grand-rapids": { dx: 16, dy: 6, anchor: "start" },
  flint: { dx: 16, dy: 6, anchor: "start" },
};

const lakeLabels = [
  { name: "Lake Michigan", lon: -86.48, lat: 43.5 },
  { name: "Lake Huron", lon: -82.7, lat: 44.55 },
] as const;

export function MichiganMap() {
  return (
    <figure className="overflow-hidden rounded-sm border border-line bg-white">
      <div className="border-b border-line px-4 py-4 md:px-6">
        <figcaption className="font-display text-lg uppercase tracking-wide text-navy">
          Lower Peninsula stores
        </figcaption>
        <p className="mt-1 text-sm text-steel">
          Three counters across Michigan. Select a pin to scroll to hours and contact.
        </p>
      </div>
      <svg
        viewBox={`0 0 ${michiganMap.width} ${michiganMap.height}`}
        role="img"
        aria-label="Map of Michigan’s Lower Peninsula with Richfield Trailer Supply stores in Traverse City, Grand Rapids, and Flint"
        className="mx-auto h-auto w-full max-w-xl"
      >
        <defs>
          <linearGradient id="great-lakes" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0%" stopColor="#16355c" />
            <stop offset="100%" stopColor="#0b1f3a" />
          </linearGradient>
          <filter id="land-shadow" x="-3%" y="-3%" width="110%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#071526" floodOpacity="0.45" />
          </filter>
          <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.15" floodColor="#071526" floodOpacity="0.45" />
          </filter>
        </defs>
        <rect width={michiganMap.width} height={michiganMap.height} fill="url(#great-lakes)" />
        {michiganMap.neighbors ? (
          <path d={michiganMap.neighbors} className="fill-[#cfc6b6] stroke-[#8a8176]" strokeWidth="0.7" />
        ) : null}
        <path
          d={michiganMap.land}
          className="fill-[#f4efe6] stroke-[#071526]"
          strokeWidth="1.2"
          strokeLinejoin="round"
          filter="url(#land-shadow)"
        />
        {lakeLabels.map((lake) => {
          const { x, y } = projectMichigan(lake.lon, lake.lat);
          return (
            <text
              key={lake.name}
              x={x}
              y={y}
              textAnchor="middle"
              className="fill-[#d7e4ee]/80 text-[12px] tracking-[0.16em]"
              style={{ fontFamily: "inherit", fontStyle: "italic" }}
            >
              {lake.name}
            </text>
          );
        })}
        {stores.map((store) => {
          const { x, y } = projectMichigan(store.lon, store.lat);
          const label = pinLayout[store.slug];
          return (
            <a key={store.slug} href={`#${store.slug}`} className="map-pin">
              <g className="cursor-pointer">
                <title>{`${store.name}: ${store.address}`}</title>
                <g transform={`translate(${x} ${y})`} filter="url(#pin-shadow)">
                  <g className="pin-mark">
                    <path
                      d="M0 0c0 0-8.2-11.4-8.2-18.2A8.2 8.2 0 0 1 0-26.4a8.2 8.2 0 0 1 8.2 8.2C8.2-11.4 0 0 0 0z"
                      className="fill-brand stroke-white"
                      strokeWidth="1.4"
                    />
                    <circle cx="0" cy="-18.2" r="3.1" className="fill-white" />
                  </g>
                </g>
                <text
                  x={x + label.dx}
                  y={y + label.dy}
                  textAnchor={label.anchor}
                  className="fill-navy text-[14px] font-semibold"
                  style={{ fontFamily: "inherit" }}
                  paintOrder="stroke"
                  stroke="#f4efe6"
                  strokeWidth="4"
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
