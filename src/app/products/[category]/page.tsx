import type { Metadata } from "next";
import { ClientRedirect } from "@/components/ClientRedirect";
import { categories } from "@/lib/catalog";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export const metadata: Metadata = {
  title: "Parts",
  alternates: { canonical: "/products/" },
  robots: { index: false, follow: true },
};

export default async function CategoryRedirectPage({ params }: Props) {
  await params;
  return <ClientRedirect href="/products/" />;
}
