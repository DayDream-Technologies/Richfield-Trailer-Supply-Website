# Improvements over the live site

This rebuild is compared against the current public site at [richfieldtrailer.com](https://www.richfieldtrailer.com/). The goal is a professional, mobile-friendly brochure site that matches the live catalog in substance, sends people to the counter (not a cart), and is straightforward to host and update.

## What stayed the same

- Family-owned since 1955; trailer and RV parts as the specialty
- Three Michigan stores: Flint, Grand Rapids, Traverse City
- Name, address, phone, email, and hours copied from the live store pages
- Catalog coverage in the same categories (axle & suspension, brakes & hubs, lighting, wheel & tire, towing, trailer equipment)
- FAQ topics from the live FAQ page
- Blog subjects from the live blog, rewritten rather than copied wholesale

## Customer experience

- **No login wall.** The live catalog repeats “Log in to see price” on every product. Retail and wholesale customers can browse SKUs here without an account.
- **No cart, checkout, or online pricing.** The live site is set up as a store (quantity discounts, “purchase this item,” empty review forms). This site states that stock and price are confirmed by phone or in person.
- **Direct contact.** Location pages on the live site use a website form. This site uses click-to-call and mailto only, so messages go to the store that has the inventory.
- **Click-to-call in the header.** Flint, Grand Rapids, and Traverse City numbers are one tap on desktop and in the mobile menu.
- **A real locations hub.** The live site has three separate location URLs and no overview map. `/locations/` lists all three stores and includes a Lower Peninsula map with pins.
- **Consistent store facts.** Hours, phones, and emails are defined once and reused in the header, footer, location pages, and contact page (including Traverse City’s later weekday/Saturday open time).
- **Clear “no online checkout” messaging** on the home page so visitors are not hunting for a cart.

## Design and usability

- Official wordmark and a branded parts-trailer hero instead of a generic template homepage.
- Sticky header, skip-to-content link, and a parts mega-menu with categories and subcategories.
- Layouts built for phone and desktop (store cards, catalog, and the Michigan map).
- Light page-change and scroll motion (disabled when the OS asks for reduced motion).
- Copy cleaned up from the live site (for example “Buisness Hours,” “there’s n better place,” extra spaces in the Flint address).
- Brand names as text, not a logo strip.

## Catalog

- **347 SKUs** imported from the live catalog, grouped into six categories and 40 subcategories.
- **Readable URLs** such as `/products/brakes-hubs/hubs-and-drums/10kit-10-in-drum-kit/` instead of `/product/1771`.
- Product pages with SKU, name, short description, breadcrumbs, and a prompt to call a store — no “SKU: …_old”, empty review blocks, or Pinterest buttons.
- **JSON source of truth** under `data/products/`. Edit a subcategory file, run `npm run catalog:sync`, commit. No CMS login required for routine catalog edits.

## Content

- About page rewritten for all three cities, not Flint-only SEO copy pasted statewide.
- Dedicated `/contact/` page that points at the three counters.
- Nine blog articles rewritten in the company’s voice, with dates, reading time, and internal links to stores.
- FAQ answers tightened and marked up for search (see SEO below).

## Search, sharing, and local SEO

- Canonical URLs, Open Graph, Twitter cards, `robots.txt`, and a generated `sitemap.xml` covering pages, stores, categories, products, and posts.
- JSON-LD for Organization, each store as a local auto-parts business (NAP + hours), FAQ, breadcrumbs, and products (no prices).
- Per-page titles and descriptions instead of thin or duplicated template titles.
- Semantic headings and a single NAP source so Google sees the same Flint / Grand Rapids / Traverse City facts everywhere.

## Technical

| Live site | This rebuild |
| --- | --- |
| Hosted e-commerce template (accounts, prices, reviews, numeric product IDs) | Static Next.js export |
| Backend required for login and “purchase” | No application server, cart, or customer database |
| Catalog edits through the live CMS | JSON files in git |
| Tied to the current host | GitHub Pages workflow (`site/` export) |

## Intentionally not rebuilt

These live-site features were dropped on purpose, not forgotten:

- Customer login and “log in to see price”
- Add to cart, quantity discounts, and checkout
- Product review forms
- Website contact forms
- Homepage “On Sale” / “New Arrivals” merchandising

When this site replaces [richfieldtrailer.com](https://www.richfieldtrailer.com/), point DNS at GitHub Pages (or another static host) and keep the three store phone numbers and emails as the conversion path.
