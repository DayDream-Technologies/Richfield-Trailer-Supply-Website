import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StoreCard } from "@/components/StoreCard";
import { stores } from "@/data/stores";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or email Richfield Trailer Supply in Flint, Grand Rapids, or Traverse City. No online form — reach the store directly.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call or email the store that serves you"
        description="We do not use a website form. Phone and email go straight to the counter that has your inventory."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {stores.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-steel">
          For wholesale pricing, existing dealer accounts, or a special order,
          call during business hours and ask for the counter. Please include the
          part number, axle capacity, or a photo of the old part when you email.
        </p>
      </div>
    </>
  );
}
