import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { categories, getAllProducts } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/about/", "/faq/", "/products/", "/locations/", "/blog/"];

  const categoryRoutes = categories.flatMap((category) => [
    `/products/${category.slug}/`,
    ...category.subcategories.map((sub) => `/products/${category.slug}/${sub.slug}/`),
  ]);

  const productRoutes = getAllProducts().map(
    (product) =>
      `/products/${product.category}/${product.subcategory}/${product.slug}/`,
  );

  const blogRoutes = posts.map((post) => `/blog/${post.slug}/`);

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : path === "/locations/" ? 0.95 : 0.8,
    })),
    ...categoryRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...productRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...blogRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
