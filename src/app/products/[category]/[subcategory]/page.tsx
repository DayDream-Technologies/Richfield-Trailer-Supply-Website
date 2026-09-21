import type { Metadata } from "next";
import { ClientRedirect } from "@/components/ClientRedirect";
import { categories } from "@/lib/catalog";

type Props = { params: Promise<{ category: string; subcategory: string }> };

export function generateStaticParams() {
  return categories.flatMap((category) =>
    category.subcategories.map((sub) => ({
      category: category.slug,
      subcategory: sub.slug,
    })),
  );
}

export const metadata: Metadata = {
  title: "Parts",
  alternates: { canonical: "/products/" },
  robots: { index: false, follow: true },
};

export default async function SubcategoryRedirectPage({ params }: Props) {
  await params;
  return <ClientRedirect href="/products/" />;
}
