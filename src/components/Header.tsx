"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { categories } from "@/data/taxonomy";
import { stores } from "@/data/stores";

const links = [
  { href: "/locations/", label: "Locations" },
  { href: "/faq/", label: "FAQ" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [partsOpen, setPartsOpen] = useState(false);
  const [openClass, setOpenClass] = useState<string | null>(null);

  function close() {
    setOpen(false);
    setPartsOpen(false);
    setOpenClass(null);
  }

  function toggleClass(slug: string) {
    setOpenClass((current) => (current === slug ? null : slug));
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
                aria-haspopup="true"
                onClick={() => {
                  setPartsOpen((value) => !value);
                  setOpenClass(null);
                }}
              >
                Parts
              </button>
              {partsOpen && (
                <>
                  <button
                    type="button"
                    className="fixed inset-0 z-10 cursor-default bg-transparent"
                    aria-label="Close parts menu"
                    onClick={() => {
                      setPartsOpen(false);
                      setOpenClass(null);
                    }}
                  />
                  <div className="absolute left-0 top-full z-20 w-72 rounded-sm border border-line bg-paper py-2 text-ink shadow-lg">
                    {categories.map((category) => {
                      const expanded = openClass === category.slug;
                      return (
                        <div key={category.slug} className="border-b border-line/70 last:border-b-0">
                          <div className="flex items-stretch">
                            <Link
                              href={`/products/${category.slug}/`}
                              className="flex-1 px-3 py-2 font-display text-sm uppercase tracking-wide text-navy hover:bg-cream hover:text-copper-dark"
                              onClick={close}
                            >
                              {category.name}
                            </Link>
                            <button
                              type="button"
                              className="px-3 text-steel hover:bg-cream hover:text-navy"
                              aria-expanded={expanded}
                              aria-label={`${expanded ? "Hide" : "Show"} ${category.name} classes`}
                              onClick={() => toggleClass(category.slug)}
                            >
                              <svg
                                className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                              >
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            </button>
                          </div>
                          {expanded && (
                            <ul className="bg-cream/60 pb-2 pl-3 pr-2">
                              {category.subcategories.map((sub) => (
                                <li key={sub.slug}>
                                  <Link
                                    href={`/products/${category.slug}/${sub.slug}/`}
                                    className="block py-1.5 text-sm text-steel hover:text-navy"
                                    onClick={close}
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                    <Link
                      href="/products/"
                      className="mt-1 block px-3 py-2 text-sm font-medium text-copper-dark hover:bg-cream"
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
            <Link href="/products/" className="block py-2 font-display uppercase tracking-wide" onClick={close}>
              All parts
            </Link>
            {categories.map((category) => {
              const expanded = openClass === category.slug;
              return (
                <div key={category.slug}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/products/${category.slug}/`}
                      className="block flex-1 py-2 text-cream/90"
                      onClick={close}
                    >
                      {category.name}
                    </Link>
                    <button
                      type="button"
                      className="px-2 py-2 text-cream/80"
                      aria-expanded={expanded}
                      aria-label={`${expanded ? "Hide" : "Show"} ${category.name} classes`}
                      onClick={() => toggleClass(category.slug)}
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  {expanded && (
                    <ul className="mb-2 ml-3 border-l border-cream/20 pl-3">
                      {category.subcategories.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/products/${category.slug}/${sub.slug}/`}
                            className="block py-1.5 text-sm text-cream/75"
                            onClick={close}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
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
