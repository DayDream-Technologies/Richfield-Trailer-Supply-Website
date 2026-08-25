import Link from "next/link";
import { stores } from "@/data/stores";

export function StoreCallout({
  heading = "Call for stock and pricing",
}: {
  heading?: string;
}) {
  return (
    <section className="rounded-sm border border-line bg-cream px-5 py-6 md:px-8">
      <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-navy">
        {heading}
      </h2>
      <p className="mt-2 max-w-2xl text-steel">
        We do not publish prices online. Call the store closest to you — we will
        check the shelf and special-order anything we do not have in stock.
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
        {stores.map((store) => (
          <li key={store.slug}>
            <a
              href={`tel:${store.phoneTel}`}
              className="flex h-full flex-col rounded-sm border border-navy/15 bg-paper px-4 py-3 hover:border-copper"
            >
              <span className="font-display text-lg uppercase tracking-wide text-navy">
                {store.name}
              </span>
              <span className="text-copper-dark">{store.phone}</span>
              <span className="mt-1 text-sm text-steel">{store.hours.weekday}</span>
            </a>
            <Link
              href={`/locations/${store.slug}/`}
              className="mt-1 inline-block text-sm text-navy underline-offset-2 hover:underline"
            >
              Store details
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
