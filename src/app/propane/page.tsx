import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { stores } from "@/data/stores";

export const metadata: Metadata = {
  title: "Propane",
  description:
    "LP cylinder refills at Richfield Trailer Supply. Call Flint, Grand Rapids, or Traverse City for hours and tank sizes.",
  alternates: { canonical: "/propane/" },
};

export default function PropanePage() {
  return (
    <>
      <PageHero title="Propane" />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg leading-relaxed text-ink">
          LP cylinder refills are available at our stores. Call the location
          closest to you to confirm hours and accepted tank sizes.
        </p>
        <ul className="mt-8 space-y-3">
          {stores.map((store) => (
            <li key={store.slug}>
              <a
                href={`tel:${store.phoneTel}`}
                className="font-display text-lg uppercase tracking-wide text-navy hover:text-copper-dark"
              >
                {store.name}
              </a>
              <span className="ml-2 text-steel">{store.phone}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-steel">
          <Link href="/locations/" className="text-navy underline-offset-2 hover:underline">
            Store hours and directions
          </Link>
        </p>
      </div>
    </>
  );
}
