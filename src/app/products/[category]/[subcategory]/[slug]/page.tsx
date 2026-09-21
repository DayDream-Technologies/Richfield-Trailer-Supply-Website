import type { Metadata } from "next";
import { ClientRedirect } from "@/components/ClientRedirect";
import { getAllProducts } from "@/lib/catalog";

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

export const metadata: Metadata = {
  title: "Parts",
  alternates: { canonical: "/products/" },
  robots: { index: false, follow: true },
};

export default async function ProductRedirectPage({ params }: Props) {
  await params;
  return <ClientRedirect href="/products/" />;
}
