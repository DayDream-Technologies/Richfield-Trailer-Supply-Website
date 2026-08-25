import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StoreCallout } from "@/components/StoreCallout";
import { stores } from "@/data/stores";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Richfield Trailer Supply has been family-owned since 1955, supplying trailer and RV parts from Flint, Grand Rapids, and Traverse City, Michigan.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 1955"
        title="About Richfield Trailer Supply"
        description="A family-owned wholesale distributor and retail operation. Trailer parts are our specialty."
      />
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg leading-relaxed text-ink">
          Richfield Trailer Supply has been family-owned since it was founded in
          1955. We supply trailer and RV parts from the industry’s leading
          manufacturers to dealers, fleets, and owners across Michigan.
        </p>
        <p className="mt-4 leading-relaxed text-steel">
          We operate three stores — Flint, Grand Rapids, and Traverse City — so
          more of the state can walk in, call, or send a driver for the part they
          need. Large in-stock inventory is the point of the business. When we do
          not have the exact number, we special-order it.
        </p>
        <h2 className="mt-10 font-display text-2xl uppercase tracking-wide text-navy">
          In-stock and special-order trailer parts
        </h2>
        <p className="mt-4 leading-relaxed text-steel">
          Axles, springs, hubs, drums, electric brakes, LED lighting, ST tires
          and wheels, hitches, pintles, couplers, and cargo equipment are everyday
          counter work. Our staff is here to identify the part from a tag, a
          measurement, or the piece you bring in. That is how we have earned a
          reputation as a trusted source for trailer tires, wheels, and running
          gear in Flint and the surrounding communities — and it is how we work
          in Grand Rapids and Traverse City as well.
        </p>
        <p className="mt-4 leading-relaxed text-steel">
          Whether you need a replacement bearing, a new drum kit, or a complete
          lighting package, we would rather get you the correct part than a close
          one. Call the store that serves you, or{" "}
          <Link href="/locations/" className="text-navy underline-offset-2 hover:underline">
            visit the counter
          </Link>
          .
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {stores.map((store) => (
            <li key={store.slug} className="rounded-sm border border-line bg-cream p-4">
              <p className="font-display uppercase tracking-wide text-navy">{store.name}</p>
              <p className="mt-1 text-sm text-steel">{store.cityStateZip}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <StoreCallout heading="Talk to a parts specialist" />
        </div>
      </article>
    </>
  );
}
