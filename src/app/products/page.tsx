import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollToHash } from "@/components/ScrollToHash";
import { StoreCallout } from "@/components/StoreCallout";
import { categories } from "@/data/taxonomy";

export const metadata: Metadata = {
  title: "Trailer and RV Parts",
  description:
    "Classes of trailer, RV, marine, and towing parts stocked at Richfield Trailer Supply in Flint, Grand Rapids, and Traverse City. Call for stock and pricing.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <ScrollToHash />
      <PageHero title="Parts" />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <section key={category.slug} id={category.slug} className="scroll-mt-28">
              <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-navy">
                {category.name}
              </h2>
              <ul className="mt-3 space-y-1.5 text-steel">
                {category.subcategories.map((sub) => (
                  <li key={sub.slug}>{sub.name}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="mt-12">
          <StoreCallout />
        </div>
      </div>
    </>
  );
}
