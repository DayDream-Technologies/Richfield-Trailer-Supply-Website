# Richfield Trailer Supply website

Static [Next.js](https://nextjs.org/) site for [Richfield Trailer Supply](https://www.richfieldtrailer.com/) — family-owned trailer and RV parts stores in Flint, Grand Rapids, and Traverse City, Michigan.

There is **no shopping cart, login, or live pricing**. Visitors browse the catalog and call or email a store for stock.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Produces a static site in `site/` (`output: 'export'`).

## GitHub Pages

This repo deploys with [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on push to `main`.

1. Push the project to GitHub (repository name should stay `Richfield-Trailer-Supply-Website` so `basePath` matches).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the workflow succeeds, the site is at:

   `https://<github-username>.github.io/Richfield-Trailer-Supply-Website/`

The production build sets `GITHUB_PAGES=true`, which enables:

- `basePath`: `/Richfield-Trailer-Supply-Website`
- `assetPrefix`: `/Richfield-Trailer-Supply-Website/`

Local `npm run dev` and `npm run build` omit `basePath` so paths work on localhost.

### Custom domain (richfieldtrailer.com)

When DNS is ready:

1. Remove or empty `basePath` and `assetPrefix` in [`next.config.ts`](next.config.ts) (custom domains do not use a repo subpath).
2. Add a file `public/CNAME` containing `www.richfieldtrailer.com` (or the apex you choose).
3. Point the domain’s DNS to GitHub Pages ([GitHub custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. Set `NEXT_PUBLIC_SITE_URL` in the GitHub Actions build environment to `https://www.richfieldtrailer.com` so sitemap, canonical, and Open Graph URLs stay correct.

## Updating the product catalog

Source of truth: one JSON file per subcategory in [`data/products/`](data/products/).

Each product object:

```json
{
  "sku": "10KIT",
  "name": "10 in Drum Kit",
  "slug": "10kit-10-in-drum-kit",
  "category": "brakes-hubs",
  "subcategory": "hubs-and-drums",
  "summary": "10 in hub-and-drum kit for common 3,500 lb electric-brake axles."
}
```

Optional field: `"image": "10kit.jpg"` (file lives in `public/products/`).

After editing JSON files:

```bash
npm run catalog:sync
```

That rebuilds [`src/data/catalog.json`](src/data/catalog.json) for the site. Then commit both the per-subcategory files and `catalog.json`.

To regenerate the starter catalog from [`scripts/generate-catalog.mjs`](scripts/generate-catalog.mjs) (overwrites JSON):

```bash
npm run catalog:generate
```

## Pages

| Path | Content |
|---|---|
| `/` | Home |
| `/about/` | Company |
| `/products/` | Catalog |
| `/locations/` | All stores |
| `/locations/flint/` | Flint NAP, hours, map |
| `/contact/` | Phone and email only |
| `/faq/` | Counter FAQs |
| `/blog/` | Maintenance articles |

## Stack

- Next.js App Router, TypeScript, Tailwind CSS v4
- Static export for GitHub Pages
- JSON-LD for Organization, local stores, FAQ, breadcrumbs, and products (no prices)
