import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { StoreCallout } from "@/components/StoreCallout";
import {
  categories,
  getCategory,
  getProductsBySubcategory,
  getSubcategory,
} from "@/lib/catalog";
import { breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ category: string; subcategory: string }> };

export function generateStaticParams() {
  return categories.flatMap((category) =>
    category.subcategories.map((sub) => ({
      category: category.slug,
      subcategory: sub.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const category = getCategory(categorySlug);
  const subcategory = getSubcategory(categorySlug, subcategorySlug);
  if (!category || !subcategory) return {};
  return {
    title: `${subcategory.name} | ${category.name}`,
    description: `${subcategory.summary} Available at Richfield Trailer Supply in Flint, Grand Rapids, and Traverse City. Call for stock.`,
    alternates: { canonical: `/products/${categorySlug}/${subcategorySlug}/` },
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const category = getCategory(categorySlug);
  const subcategory = getSubcategory(categorySlug, subcategorySlug);
  if (!category || !subcategory) notFound();
  const products = getProductsBySubcategory(categorySlug, subcategorySlug);

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
        ])}
      />
      <div className="border-b border-line bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {category.name}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide">
            {subcategory.name}
          </h1>
          <p className="mt-3 max-w-2xl text-cream/80">{subcategory.summary}</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Parts", href: "/products/" },
            { name: category.name, href: `/products/${category.slug}/` },
            { name: subcategory.name },
          ]}
        />
        <p className="mt-6 text-sm text-steel">{products.length} listed items. Prices quoted by phone.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-12">
          <StoreCallout />
        </div>
      </div>
    </>
  );
}
