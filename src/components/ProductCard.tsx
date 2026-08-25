import Link from "next/link";
import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.category}/${product.subcategory}/${product.slug}/`;
  return (
    <Link
      href={href}
      className="flex flex-col rounded-sm border border-line bg-paper p-4 hover:border-copper"
    >
      <span className="font-mono text-xs tracking-wide text-steel">{product.sku}</span>
      <span className="mt-1 font-medium text-navy">{product.name}</span>
      {product.summary && (
        <span className="mt-2 line-clamp-2 text-sm text-steel">{product.summary}</span>
      )}
      <span className="mt-3 text-sm text-copper-dark">Call for stock →</span>
    </Link>
  );
}
