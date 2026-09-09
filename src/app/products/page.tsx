import type { Metadata } from "next";
import { CategoryGrid } from "@/components/CategoryGrid";
import { PageHero } from "@/components/PageHero";
import { StoreCallout } from "@/components/StoreCallout";
import { getAllProducts } from "@/lib/catalog";

const count = getAllProducts().length;

export const metadata: Metadata = {
  title: "Trailer Parts Catalog",
  description:
    "Browse trailer parts near you in Michigan: axle, brake, lighting, wheel, towing, and trailer equipment. Call Flint, Grand Rapids, or Traverse City for stock and pricing.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Trailer and RV parts"
        description={`${count} listed items across six families. No online cart — call the nearest store to confirm stock, fitment, and price.`}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <CategoryGrid />
        <div className="mt-12">
          <StoreCallout />
        </div>
      </div>
    </>
  );
}
