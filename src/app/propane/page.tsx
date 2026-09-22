import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Propane",
  description:
    "LP cylinder refills at Richfield Trailer Supply stores in Flint, Grand Rapids, and Traverse City.",
  alternates: { canonical: "/propane/" },
};

export default function PropanePage() {
  return (
    <>
      <PageHero title="Propane" />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg leading-relaxed text-ink">
          LP cylinder refills are available at our stores.
        </p>
      </div>
    </>
  );
}
