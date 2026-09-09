export const site = {
  name: "Richfield Trailer Supply",
  legalName: "Richfield Trailer Supply",
  tagline: "Trailer parts are our specialty.",
  description:
    "Looking for trailer parts near you? Family-owned since 1955. Wholesale and retail trailer and RV parts at three Michigan stores in Flint, Grand Rapids, and Traverse City.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.richfieldtrailer.com",
  founded: 1955,
  areaServed: "Michigan",
  keywords: [
    "trailer parts near me",
    "trailer parts Michigan",
    "trailer parts Flint MI",
    "trailer parts Grand Rapids",
    "trailer parts Traverse City",
    "RV parts near me",
    "trailer hubs and drums",
    "trailer tires Michigan",
    "Dexter axle parts",
  ],
  social: {
    facebook: "https://www.facebook.com/richfieldtrailer",
    linkedin: "https://www.linkedin.com/company/richfield-trailer-supply",
  },
};

export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
