import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MichiganMap } from "@/components/MichiganMap";
import { StoreSection } from "@/components/StoreSection";
import { ScrollToHash } from "@/components/ScrollToHash";
import { JsonLd } from "@/components/JsonLd";
import { stores } from "@/data/stores";
import { localBusinessNode } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Locations | Flint, Grand Rapids & Traverse City",
  description:
    "Experienced Parts Specialists are available to get you the right part the first time. Visit, call, or email Richfield Trailer Supply in Flint, Grand Rapids, or Traverse City.",
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
      <PageHero title="Locations" />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <MichiganMap />
        <div className="mt-4">
          {stores.map((store) => (
            <StoreSection key={store.slug} store={store} />
          ))}
        </div>
      </div>
    </>
  );
}
