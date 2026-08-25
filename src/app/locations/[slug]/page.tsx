import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getStore, stores } from "@/data/stores";
import { breadcrumbJsonLd, localBusinessNode } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const store = getStore(slug);
  if (!store) return {};
  return {
    title: `${store.name} Store`,
    description: `Richfield Trailer Supply in ${store.city}, MI. ${store.address}. ${store.phone}. Hours, directions, and email.`,
    alternates: { canonical: `/locations/${store.slug}/` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const store = getStore(slug);
  if (!store) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations/" },
    { name: store.name },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs.map((c) => ({ name: c.name, path: c.href ?? `/locations/${store.slug}/` })))} />
      <JsonLd data={{ "@context": "https://schema.org", ...localBusinessNode(store) }} />
      <div className="border-b border-line bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {site.name}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide md:text-5xl">
            {store.name} location
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80">{store.description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide text-navy">
              Address & hours
            </h2>
            <p className="mt-3 text-ink">
              {store.street}
              <br />
              {store.cityStateZip}
            </p>
            <ul className="mt-4 space-y-1 text-steel">
              <li>{store.hours.weekday}</li>
              <li>{store.hours.saturday}</li>
              <li>{store.hours.sunday}</li>
            </ul>
            {store.hoursNote && <p className="mt-2 text-sm text-steel">{store.hoursNote}</p>}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${store.phoneTel}`}
                className="rounded-sm bg-copper px-5 py-3 font-display text-sm uppercase tracking-wide text-navy-deep hover:bg-[#c9843c]"
              >
                Call {store.phone}
              </a>
              <a
                href={`mailto:${store.email}`}
                className="rounded-sm border border-navy px-5 py-3 font-display text-sm uppercase tracking-wide text-navy hover:bg-cream"
              >
                {store.email}
              </a>
              <a
                href={store.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-line px-5 py-3 font-display text-sm uppercase tracking-wide text-navy hover:bg-cream"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="min-h-[280px] overflow-hidden rounded-sm border border-line bg-cream">
            <iframe
              title={`Map of ${store.name} store`}
              src={store.mapsEmbed}
              className="h-full min-h-[280px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}
