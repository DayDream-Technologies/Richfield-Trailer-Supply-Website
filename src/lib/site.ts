export const site = {
  name: "Richfield Trailer Supply",
  legalName: "Richfield Trailer Supply",
  tagline: "Trailer parts are our specialty.",
  description:
    "Family-owned since 1955. Wholesale and retail trailer and RV parts at three Michigan locations: Flint, Grand Rapids, and Traverse City.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.richfieldtrailer.com",
  founded: 1955,
  areaServed: "Michigan",
  keywords: [
    "trailer parts Michigan",
    "RV parts Flint",
    "trailer hubs and drums",
    "trailer tires Grand Rapids",
    "trailer lighting Traverse City",
    "Dexter axle parts",
  ],
};

export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
