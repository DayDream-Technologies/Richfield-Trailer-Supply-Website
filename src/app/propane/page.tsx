import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import propaneFillStation from "@/images/propane-fill-station.jpg";

export const metadata: Metadata = {
  title: "Propane",
  description:
    "LP cylinder refills at Richfield Trailer Supply stores in Flint, Grand Rapids, and Traverse City. We fill 20, 30, 40, and 100 pound cylinders.",
  alternates: { canonical: "/propane/" },
};

export default function PropanePage() {
  return (
    <>
      <PageHero title="Propane" />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <figure className="overflow-hidden border border-line">
          <Image
            src={propaneFillStation}
            alt="Propane tank and fill cabinet at a Richfield Trailer Supply store"
            className="h-auto w-full"
            sizes="(min-width: 768px) 48rem, 100vw"
            priority
          />
        </figure>
        <p className="mt-8 text-lg leading-relaxed text-ink">
          LP cylinder refills are available at our stores. We fill 20, 30, 40,
          and 100 pound cylinders.
        </p>
      </div>
    </>
  );
}
