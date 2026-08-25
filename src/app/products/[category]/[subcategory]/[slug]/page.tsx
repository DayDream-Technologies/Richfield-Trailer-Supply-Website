import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { StoreCallout } from "@/components/StoreCallout";
import {
  getAllProducts,
  getCategory,
  getProduct,
  getSubcategory,
} from "@/lib/catalog";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ category: string; subcategory: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({
    category: product.category,
    subcategory: product.subcategory,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subcategory, slug } = await params;
  const product = getProduct(category, subcategory, slug);
  if (!product) return {};
  return {
    title: `${product.sku} — ${product.name}`,
    description:
      product.summary ??
      `${product.name} (${product.sku}) at Richfield Trailer Supply. Call for stock and pricing in Michigan.`,
    alternates: {
      canonical: `/products/${category}/${subcategory}/${slug}/`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category: categorySlug, subcategory: subcategorySlug, slug } = await params;
  const product = getProduct(categorySlug, subcategorySlug, slug);
  const category = getCategory(categorySlug);
  const subcategory = getSubcategory(categorySlug, subcategorySlug);
  if (!product || !category || !subcategory) notFound();

  const path = `/products/${categorySlug}/${subcategorySlug}/${slug}/`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Parts", path: "/products/" },
          { name: category.name, path: `/products/${category.slug}/` },
          {
            name: subcategory.name,
            path: `/products/${category.slug}/${subcategory.slug}/`,
          },
          { name: product.name, path },
        ])}
      />
      <JsonLd data={productJsonLd(product, path)} />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Parts", href: "/products/" },
            { name: category.name, href: `/products/${category.slug}/` },
            {
              name: subcategory.name,
              href: `/products/${category.slug}/${subcategory.slug}/`,
            },
            { name: product.sku },
          ]}
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-sm tracking-wide text-steel">{product.sku}</p>
            <h1 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide text-navy">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              {product.summary}
            </p>
            <p className="mt-4 text-steel">
              Listed under {category.name} / {subcategory.name}. Fitment varies by
              axle rating, bolt pattern, and manufacturer. Bring the old part or
              a photo of the tag when you call.
            </p>
            <p className="mt-6 text-sm text-steel">
              We do not display prices or inventory online. Availability differs
              by store.
            </p>
            <Link
              href={`/products/${category.slug}/${subcategory.slug}/`}
              className="mt-6 inline-block text-sm font-medium text-navy underline-offset-2 hover:underline"
            >
              ← More {subcategory.name.toLowerCase()}
            </Link>
          </div>
          <div className="flex min-h-[240px] items-center justify-center rounded-sm border border-line bg-cream">
            {product.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`/products/${product.image}`}
                alt={product.name}
                className="max-h-80 w-full object-contain p-6"
              />
            ) : (
              <div className="text-center">
                <p className="font-display text-6xl uppercase tracking-wide text-navy/20">
                  {product.sku.slice(0, 4)}
                </p>
                <p className="mt-2 text-sm text-steel">Photo can be added in /public/products</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-12">
          <StoreCallout heading={`Ask about ${product.sku}`} />
        </div>
      </div>
    </>
  );
}
