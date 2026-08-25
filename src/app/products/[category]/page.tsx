import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { StoreCallout } from "@/components/StoreCallout";
import { categories, getCategory, getProductsByCategory, getProductsBySubcategory } from "@/lib/catalog";
import { breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.seoTitle,
    description: category.description,
    alternates: { canonical: `/products/${category.slug}/` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const total = getProductsByCategory(slug).length;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Parts", href: "/products/" },
    { name: category.name },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Parts", path: "/products/" },
          { name: category.name, path: `/products/${category.slug}/` },
        ])}
      />
      <div className="border-b border-line bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {total} parts listed
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold uppercase tracking-wide md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80">{category.description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.subcategories.map((sub) => {
            const count = getProductsBySubcategory(category.slug, sub.slug).length;
            return (
              <Link
                key={sub.slug}
                href={`/products/${category.slug}/${sub.slug}/`}
                className="rounded-sm border border-line bg-paper p-5 hover:border-copper"
              >
                <h2 className="font-display text-xl uppercase tracking-wide text-navy">
                  {sub.name}
                </h2>
                <p className="mt-2 text-sm text-steel">{sub.summary}</p>
                <p className="mt-3 text-sm text-copper-dark">{count} items →</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-12">
          <StoreCallout />
        </div>
      </div>
    </>
  );
}
