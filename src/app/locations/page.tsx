import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MichiganMap } from "@/components/MichiganMap";
import { StoreSection } from "@/components/StoreSection";
import { ScrollToHash } from "@/components/ScrollToHash";
import { JsonLd } from "@/components/JsonLd";
import { stores } from "@/data/stores";
import { localBusinessNode } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trailer Parts Near You | Flint, Grand Rapids & Traverse City",
  description:
    "Looking for trailer parts near you in Michigan? Call or visit Richfield Trailer Supply in Flint, Grand Rapids, or Traverse City. Hours, phone, email, and directions.",
  alternates: { canonical: "/locations/" },
};

export default function LocationsPage() {
  return (
    <>
      <ScrollToHash />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Richfield Trailer Supply locations",
          itemListElement: stores.map((store, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: localBusinessNode(store),
          })),
        }}
      />
      <PageHero
        eyebrow="Michigan"
        title="Trailer parts near you"
        description={`Three ${site.name} counters in Flint, Grand Rapids, and Traverse City. Call or email the store closest to you — we do not use a website form.`}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <MichiganMap />
        <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Jump to a store">
          {stores.map((store) => (
            <a
              key={store.slug}
              href={`#${store.slug}`}
              className="font-display uppercase tracking-wide text-navy underline-offset-2 hover:text-copper-dark hover:underline"
            >
              {store.name}
            </a>
          ))}
        </nav>
        <p className="mt-6 max-w-2xl text-sm text-steel">
          Phone and email go straight to the counter that has your inventory. For
          wholesale pricing, existing dealer accounts, or a special order, call
          during business hours. Include the part number, axle capacity, or a
          photo of the old part when you email.
        </p>
        <div className="mt-4">
          {stores.map((store) => (
            <StoreSection key={store.slug} store={store} />
          ))}
        </div>
      </div>
    </>
  );
}
