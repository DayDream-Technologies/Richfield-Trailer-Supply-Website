import type { Store } from "@/data/stores";

export function StoreSection({ store }: { store: Store }) {
  return (
    <section
      id={store.slug}
      className="scroll-mt-28 border-t border-line py-10 md:scroll-mt-32 md:py-12"
    >
      <h2 className="font-display text-3xl font-semibold uppercase tracking-wide text-navy">
        {store.name}
      </h2>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-xl uppercase tracking-wide text-navy">
            Address & hours
          </h3>
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
              {`Call ${store.phone}`}
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
    </section>
  );
}
