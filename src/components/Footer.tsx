import Link from "next/link";
import { Logo } from "@/components/Logo";
import { stores } from "@/data/stores";
import { categories } from "@/data/taxonomy";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <div className="inline-block rounded-sm bg-white px-3 py-2">
            <Logo />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">
            Family-owned since 1955. Wholesale distributor and retail counter for
            trailer and RV parts across Michigan.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.2em] text-copper">
            Parts
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/products/${category.slug}/`} className="hover:text-copper">
                  {category.name}
                </Link>
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
              <Link href="/about/" className="hover:text-copper">
                About us
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
              <Link href="/contact/" className="hover:text-copper">
                Contact
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
                <Link href={`/locations/${store.slug}/`} className="font-medium hover:text-copper">
                  {store.name}
                </Link>
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
