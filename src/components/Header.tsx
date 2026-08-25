"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { categories } from "@/data/taxonomy";
import { stores } from "@/data/stores";

const links = [
  { href: "/about/", label: "About" },
  { href: "/locations/", label: "Locations" },
  { href: "/faq/", label: "FAQ" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [partsOpen, setPartsOpen] = useState(false);

  function close() {
    setOpen(false);
    setPartsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy-deep text-cream">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs tracking-wide md:px-6">
          <p className="text-copper">Family-owned since 1955 · Michigan</p>
          <ul className="hidden items-center gap-4 md:flex">
            {stores.map((store) => (
              <li key={store.slug}>
                <a href={`tel:${store.phoneTel}`} className="hover:text-copper">
                  {store.city} {store.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-b border-line bg-white text-navy shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 md:px-6">
          <Logo priority />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div className="relative">
              <button
                type="button"
                className="rounded-sm px-3 py-2 font-display text-sm uppercase tracking-[0.14em] hover:bg-cream"
                aria-expanded={partsOpen}
                onClick={() => setPartsOpen((value) => !value)}
              >
                Parts
              </button>
              {partsOpen && (
                <>
                  <button
                    type="button"
                    className="fixed inset-0 z-10 cursor-default bg-transparent"
                    aria-label="Close parts menu"
                    onClick={() => setPartsOpen(false)}
                  />
                  <div className="absolute left-0 top-full z-20 w-[min(36rem,calc(100vw-2rem))] rounded-sm border border-line bg-paper p-4 text-ink shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      {categories.map((category) => (
                        <div key={category.slug}>
                          <Link
                            href={`/products/${category.slug}/`}
                            className="font-display text-sm uppercase tracking-wide text-navy hover:text-copper-dark"
                            onClick={close}
                          >
                            {category.name}
                          </Link>
                          <ul className="mt-2 space-y-1 text-sm text-steel">
                            {category.subcategories.slice(0, 4).map((sub) => (
                              <li key={sub.slug}>
                                <Link
                                  href={`/products/${category.slug}/${sub.slug}/`}
                                  className="hover:text-navy"
                                  onClick={close}
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/products/"
                      className="mt-4 inline-block text-sm font-medium text-copper-dark"
                      onClick={close}
                    >
                      View all parts →
                    </Link>
                  </div>
                </>
              )}
            </div>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-3 py-2 font-display text-sm uppercase tracking-[0.14em] hover:bg-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${stores[0].phoneTel}`}
              className="rounded-sm bg-brand px-3 py-2 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-dark md:px-4"
            >
              Call
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-navy/25 text-navy lg:hidden"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">Menu</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-cream/15 bg-navy-mid px-4 py-4 lg:hidden" aria-label="Mobile">
            <Link href="/products/" className="block py-2 font-display uppercase tracking-wide" onClick={close}>
              All parts
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}/`}
                className="block py-2 text-cream/90"
                onClick={close}
              >
                {category.name}
              </Link>
            ))}
            <div className="my-3 h-px bg-cream/20" />
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2 font-display uppercase tracking-wide" onClick={close}>
                {link.label}
              </Link>
            ))}
            <ul className="mt-4 space-y-2 text-sm">
              {stores.map((store) => (
                <li key={store.slug}>
                  <a href={`tel:${store.phoneTel}`} className="text-copper">
                    {store.city}: {store.phone}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
