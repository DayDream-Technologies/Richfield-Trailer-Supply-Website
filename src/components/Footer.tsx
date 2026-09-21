import Link from "next/link";
import { Logo } from "@/components/Logo";
import { stores, storeHashPath } from "@/data/stores";
import { categories } from "@/data/taxonomy";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <div className="inline-block rounded-sm bg-white px-3 py-2">
            <Logo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">
            Founded in Flint, MI in 1955. 100% Veteran Owned.
          </p>
          <ul className="mt-5 flex gap-3">
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-cream/20 text-cream hover:border-copper hover:text-copper"
                aria-label="Richfield Trailer Supply on Facebook"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3.2L17 11h-4V9c0-.6.4-1 1-1z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-cream/20 text-cream hover:border-copper hover:text-copper"
                aria-label="Richfield Trailer Supply on LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.5 9H3.7v11.3h2.8V9zM5.1 3.8C4.1 3.8 3.3 4.6 3.3 5.6s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zM20.3 13.2c0-3.3-1.8-4.8-4.1-4.8-1.9 0-2.7 1-3.2 1.7V9H10.2c0 1.8 0 11.3 0 11.3h2.8v-6.3c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6v6.1h2.8V13.2z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-copper">
            Parts
          </h2>
          <ul className="mt-3 columns-1 text-sm sm:columns-2">
            {categories.map((category) => (
              <li key={category.slug} className="break-inside-avoid pb-2">
                <a href={`/products/#${category.slug}`} className="hover:text-copper">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-copper">
            Company
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products/" className="hover:text-copper">
                Parts
              </Link>
            </li>
            <li>
              <Link href="/propane/" className="hover:text-copper">
                Propane
              </Link>
            </li>
            <li>
              <Link href="/locations/" className="hover:text-copper">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/faq/" className="hover:text-copper">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-copper">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about/" className="hover:text-copper">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-copper">
            Stores
          </h2>
          <ul className="mt-3 space-y-4 text-sm">
            {stores.map((store) => (
              <li key={store.slug}>
                <a href={storeHashPath(store.slug)} className="font-medium hover:text-copper">
                  {store.name}
                </a>
                <p className="text-cream/70">
                  {store.street}
                  <br />
                  {store.cityStateZip}
                </p>
                <a href={`tel:${store.phoneTel}`} className="text-copper">
                  {store.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-cream/60 md:px-6">
          © {new Date().getFullYear()} Richfield Trailer Supply. Trailer parts are
          our specialty. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
