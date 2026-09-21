import Link from "next/link";
import { categories } from "@/data/taxonomy";

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/products/${category.slug}/`}
          className="group rounded-sm border border-line bg-paper p-5 shadow-sm transition hover:border-copper hover:shadow-md"
        >
          <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-navy group-hover:text-copper-dark md:text-2xl">
            {category.name}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-steel">{category.summary}</p>
          <p className="mt-4 text-sm font-medium text-copper-dark">
            {category.subcategories.length} classes →
          </p>
        </Link>
      ))}
    </div>
  );
}
