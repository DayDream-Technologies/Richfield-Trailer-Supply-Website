import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { StoreCard } from "@/components/StoreCard";
import { JsonLd } from "@/components/JsonLd";
import { brands } from "@/data/brands";
import { faqs } from "@/data/faq";
import { stores } from "@/data/stores";
import { faqJsonLd } from "@/lib/seo";
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
      <JsonLd data={faqJsonLd()} />
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
              Since 1955 · Flint · Grand Rapids · Traverse City
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-wide md:text-6xl">
              Trailer parts near you in Michigan
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/90">
              Family-owned wholesale and retail counters in Flint, Grand Rapids,
              and Traverse City. Axle, brake, lighting, wheel, and towing parts
              in stock when we can — special-ordered when we cannot. Call the
              store closest to you. No online checkout.
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

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-dark">
              Catalog
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-navy">
              Parts by category
            </h2>
          </div>
          <Link href="/products/" className="hidden text-sm font-medium text-navy underline-offset-2 hover:underline sm:inline">
            All categories
          </Link>
        </div>
        <div className="mt-8">
          <CategoryGrid />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-dark">
            Visit
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-navy">
            Trailer parts near Flint, Grand Rapids & Traverse City
          </h2>
          <p className="mt-3 max-w-2xl text-steel">
            Searching for trailer parts near you? Bring the old part when you
            can — trailer manufacturers mix vendors, and matching is faster in person.
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-dark">
              Why Richfield
            </p>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-navy">
              Knowledgeable counter, deep inventory
            </h2>
            <p className="mt-4 leading-relaxed text-steel">
              We supply trailer dealers, fleets, and owners who need the correct
              hub, spring, lamp, or coupler — not a guess from a photo. Prices
              are quoted at the store because stock and cost move. Call us.
            </p>
            <ul className="mt-6 space-y-3 text-ink">
              <li className="border-l-2 border-brand pl-4">In-stock axle, brake, lighting, and towing parts</li>
              <li className="border-l-2 border-brand pl-4">Special order when the number is not on the shelf</li>
              <li className="border-l-2 border-brand pl-4">Wholesale accounts — call the store that serves you</li>
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

      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl uppercase tracking-wide text-navy">
              Common questions
            </h2>
            <Link href="/faq/" className="text-sm font-medium text-navy underline-offset-2 hover:underline">
              All FAQs
            </Link>
          </div>
          <dl className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.slice(0, 4).map((item) => (
              <div key={item.question}>
                <dt className="font-medium text-navy">{item.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-steel">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
