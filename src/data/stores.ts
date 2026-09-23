export type Store = {
  slug: "flint" | "grand-rapids" | "traverse-city";
  name: string;
  city: string;
  shortName: string;
  street: string;
  cityStateZip: string;
  address: string;
  phone: string;
  phoneTel: string;
  email: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  mapsUrl: string;
  mapsEmbed: string;
  description: string;
  lat: number;
  lon: number;
};

export const stores: Store[] = [
  {
    slug: "flint",
    name: "Flint",
    city: "Flint",
    shortName: "Flint",
    street: "2535 Richfield Rd",
    cityStateZip: "Flint, MI 48506",
    address: "2535 Richfield Rd, Flint, MI 48506",
    phone: "(810) 736-2680",
    phoneTel: "+18107362680",
    email: "RTSFlint@richfieldts.com",
    hours: {
      weekday: "Mon–Fri 8:00am – 5:30pm",
      saturday: "Sat 8:00am – 1:00pm",
      sunday: "Sun Closed",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2535+Richfield+Rd+Flint+MI+48506",
    mapsEmbed:
      "https://maps.google.com/maps?q=2535%20Richfield%20Rd%2C%20Flint%2C%20MI%2048506&output=embed",
    description:
      "Our original Michigan location stocks a deep selection of axle, brake, lighting, and towing parts for retail and wholesale customers across Genesee County.",
    lat: 43.0625,
    lon: -83.6372,
  },
  {
    slug: "grand-rapids",
    name: "Grand Rapids",
    city: "Grand Rapids",
    shortName: "Grand Rapids",
    street: "7245 Division Ave S",
    cityStateZip: "Grand Rapids, MI 49548",
    address: "7245 Division Ave S, Grand Rapids, MI 49548",
    phone: "(616) 281-3220",
    phoneTel: "+16162813220",
    email: "RTSGR@richfieldts.com",
    hours: {
      weekday: "Mon–Fri 8:00am – 5:30pm",
      saturday: "Sat 8:00am – 1:00pm",
      sunday: "Sun Closed",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=7245+Division+Ave+S+Grand+Rapids+MI+49548",
    mapsEmbed:
      "https://maps.google.com/maps?q=7245%20Division%20Ave%20S%2C%20Grand%20Rapids%2C%20MI%2049548&output=embed",
    description:
      "West Michigan’s source for trailer and RV parts, serving dealers, fleets, and owner-operators from our Division Avenue store.",
    lat: 42.8874,
    lon: -85.6618,
  },
  {
    slug: "traverse-city",
    name: "Traverse City",
    city: "Traverse City",
    shortName: "Traverse City",
    street: "470 US-31 South",
    cityStateZip: "Traverse City, MI 49685",
    address: "470 US-31 South, Traverse City, MI 49685",
    phone: "(231) 943-4700",
    phoneTel: "+12319434700",
    email: "RTSTC@richfieldts.com",
    hours: {
      weekday: "Mon–Fri 8:30am – 5:30pm",
      saturday: "Sat 8:30am – 1:00pm",
      sunday: "Sun Closed",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Richfield+Trailer+Supply+Traverse+City&query_place_id=ChIJue3ev48yHogRbhiJ_lMqUKE",
    mapsEmbed:
      "https://maps.google.com/maps?q=44.6934179%2C-85.6555516&z=17&output=embed",
    description:
      "Northern Michigan’s trailer parts counter on US-31, stocked for boat trailers, utility trailers, RVs, and year-round repair work.",
    lat: 44.6934179,
    lon: -85.6555516,
  },
];

export function getStore(slug: string): Store | undefined {
  return stores.find((store) => store.slug === slug);
}

export function storeHashPath(slug: string): string {
  return `/locations/#${slug}`;
}

export const primaryStore = stores[0];
