import Link from "next/link";
import type { Store } from "@/data/stores";

export function StoreCard({ store }: { store: Store }) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-line bg-paper p-6 shadow-sm">
      <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-navy">
        {store.name}
      </h2>
      <p className="mt-3 text-steel">
        {store.street}
        <br />
        {store.cityStateZip}
      </p>
      <p className="mt-3 text-sm text-steel">{store.description}</p>
      <ul className="mt-4 space-y-1 text-sm text-ink">
        <li>{store.hours.weekday}</li>
        <li>{store.hours.saturday}</li>
        <li>{store.hours.sunday}</li>
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={`tel:${store.phoneTel}`}
          className="rounded-sm bg-copper px-4 py-2 font-display text-sm uppercase tracking-wide text-navy-deep hover:bg-[#c9843c]"
        >
          {store.phone}
        </a>
        <a
          href={`mailto:${store.email}`}
          className="rounded-sm border border-navy px-4 py-2 font-display text-sm uppercase tracking-wide text-navy hover:bg-cream"
        >
          Email
        </a>
      </div>
      <Link
        href={`/locations/${store.slug}/`}
        className="mt-4 text-sm font-medium text-navy underline-offset-2 hover:underline"
      >
        Hours, map, and directions →
      </Link>
    </article>
  );
}
