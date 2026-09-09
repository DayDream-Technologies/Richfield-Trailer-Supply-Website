import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClientRedirect } from "@/components/ClientRedirect";
import { getStore, stores, storeHashPath } from "@/data/stores";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const store = getStore(slug);
  if (!store) return {};
  return {
    title: `${store.name} Store`,
    description: `Richfield Trailer Supply in ${store.city}, MI. Hours, phone, email, and directions are on the locations page.`,
    alternates: { canonical: "/locations/" },
    robots: { index: false, follow: true },
  };
}

export default async function LocationRedirectPage({ params }: Props) {
  const { slug } = await params;
  const store = getStore(slug);
  if (!store) notFound();
  return <ClientRedirect href={storeHashPath(store.slug)} />;
}
