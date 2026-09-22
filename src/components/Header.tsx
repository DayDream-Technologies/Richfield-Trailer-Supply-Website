"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { stores } from "@/data/stores";

const links = [
  { href: "/products/", label: "Parts" },
  { href: "/propane/", label: "Propane" },
  { href: "/locations/", label: "Locations" },
  { href: "/faq/", label: "FAQ" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy-deep text-cream">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs tracking-wide md:px-6">
          <p className="text-copper">
            Founded in Flint, MI in 1955.
            <br />
            100% Veteran Owned.
          </p>
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
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-navy/25 text-navy lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="border-t border-cream/15 bg-navy-mid px-4 py-4 lg:hidden" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 font-display uppercase tracking-wide"
                onClick={() => setOpen(false)}
              >
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
