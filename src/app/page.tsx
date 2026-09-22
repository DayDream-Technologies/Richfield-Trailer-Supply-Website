import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoreCard } from "@/components/StoreCard";
import { brands } from "@/data/brands";
import { stores } from "@/data/stores";
import { site } from "@/lib/site";
import hero from "@/images/hero.avif";

export const metadata: Metadata = {
  title: "Trailer Parts Near You in Flint, Grand Rapids & Traverse City",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[28rem] overflow-hidden bg-navy text-cream md:min-h-[36rem]">
        <Image
          src={hero}
          alt="Richfield Trailer Supply parts trailer showing axles, wheels, lights, and hitches"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35 md:to-navy/15"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[28rem] max-w-6xl items-center px-4 py-16 md:min-h-[36rem] md:px-6 md:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              Founded in 1955 in Flint, Michigan.
              <br />
              100% Veteran Owned.
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-wide md:text-6xl">
              Trailer parts near
              <br />
              you in Michigan
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/90">
              Our Parts Specialists are available to help you at our stores in
              Flint, Grand Rapids, and Traverse City. Axles, brakes, lights, tires
              & wheels, towing accessories, RV parts, and more are in stock for
              purchase. We’ll special order parts as needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products/"
                className="rounded-sm bg-brand px-5 py-3 font-display text-sm uppercase tracking-[0.16em] text-white hover:bg-brand-dark"
              >
                Browse parts
              </Link>
              <Link
                href="/locations/"
                className="rounded-sm border border-cream/50 px-5 py-3 font-display text-sm uppercase tracking-[0.16em] hover:bg-white/10"
              >
                Find a store
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-display text-3xl uppercase tracking-wide text-navy">
            Our Locations
          </h2>
          <p className="mt-3 max-w-2xl text-steel">
            Searching for trailer parts near you? Bring the old parts when you
            can. Matching is faster in person, especially because trailer
            manufacturers use different brands of parts over time when building
            their trailers. Therefore, there is much less consistency in trailer
            parts than in automobiles.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {stores.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-wide text-navy">
              Knowledgeable counter,
              <br />
              deep inventory
            </h2>
            <p className="mt-4 leading-relaxed text-steel">
              Visit our stores or call us to talk to a Parts Specialist about your
              needs. Our people have years of experience with utility trailers and
              RV’s and will ensure you get the right parts the first time.
            </p>
            <ul className="mt-6 space-y-3 text-ink">
              <li className="border-l-2 border-brand pl-4">In-stock trailer, RV, marine, and towing parts</li>
              <li className="border-l-2 border-brand pl-4">Special order when the item is not on the shelf.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-navy">
              Brands we carry
            </h3>
            <p className="mt-2 text-sm text-steel">
              Availability varies by location. Ask the counter.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <li
                  key={brand}
                  className="rounded-sm border border-line bg-paper px-3 py-1.5 text-sm text-steel"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
