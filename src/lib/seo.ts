import { site, absoluteUrl } from "@/lib/site";
import { stores } from "@/data/stores";
import { faqs } from "@/data/faq";
import type { Product } from "@/lib/catalog";
import type { Store } from "@/data/stores";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    foundingDate: String(site.founded),
    slogan: site.tagline,
    description: site.description,
    areaServed: site.areaServed,
    email: stores[0].email,
    telephone: stores[0].phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: stores[0].street,
      addressLocality: "Flint",
      addressRegion: "MI",
      postalCode: "48506",
      addressCountry: "US",
    },
    department: stores.map(localBusinessNode),
  };
}

export function localBusinessNode(store: Store) {
  const [weekdayOpen, weekdayClose] = hoursToSpec(store.hours.weekday);
  const [satOpen, satClose] = hoursToSpec(store.hours.saturday);

  return {
    "@type": "AutoPartsStore",
    "@id": absoluteUrl(`/locations/${store.slug}/`),
    name: `${site.name} — ${store.name}`,
    url: absoluteUrl(`/locations/${store.slug}/`),
    telephone: store.phone,
    email: store.email,
    image: absoluteUrl("/og.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: store.street,
      addressLocality: store.city,
      addressRegion: "MI",
      postalCode: store.cityStateZip.replace(/.*(\d{5}).*/, "$1"),
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: weekdayOpen,
        closes: weekdayClose,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: satOpen,
        closes: satClose,
      },
    ],
  };
}

function hoursToSpec(label: string): [string, string] {
  const match = label.match(
    /(\d{1,2}:\d{2})(am|pm)\s*[–-]\s*(\d{1,2}:\d{2})(am|pm)/i,
  );
  if (!match) return ["08:00", "17:30"];
  return [to24(match[1], match[2]), to24(match[3], match[4])];
}

function to24(time: string, meridian: string): string {
  const [rawHour, minute] = time.split(":");
  let hour = Number(rawHour);
  const isPm = meridian.toLowerCase() === "pm";
  if (isPm && hour < 12) hour += 12;
  if (!isPm && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd(product: Product, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    description:
      product.summary ??
      `${product.name} from Richfield Trailer Supply. Call for stock and pricing.`,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    url: absoluteUrl(path),
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
