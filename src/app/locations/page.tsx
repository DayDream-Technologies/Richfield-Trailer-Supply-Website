import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StoreCard } from "@/components/StoreCard";
import { JsonLd } from "@/components/JsonLd";
import { stores } from "@/data/stores";
import { localBusinessNode } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Visit Richfield Trailer Supply in Flint, Grand Rapids, or Traverse City, Michigan. Hours, phone, email, and directions.",
  alternates: { canonical: "/locations/" },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: stores.map((store, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: localBusinessNode(store),
          })),
        }}
      />
      <PageHero
        eyebrow="Michigan"
        title="Three stores. One specialty."
        description={`${site.name} counters in Flint, Grand Rapids, and Traverse City. Hours differ slightly in Traverse City.`}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {stores.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
      </div>
    </>
  );
}
