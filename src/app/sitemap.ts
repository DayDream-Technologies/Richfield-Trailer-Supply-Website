import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { stores } from "@/data/stores";
import { categories, getAllProducts } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/about/", "/contact/", "/faq/", "/products/", "/locations/", "/blog/"];

  const categoryRoutes = categories.flatMap((category) => [
    `/products/${category.slug}/`,
    ...category.subcategories.map((sub) => `/products/${category.slug}/${sub.slug}/`),
  ]);

  const productRoutes = getAllProducts().map(
    (product) =>
      `/products/${product.category}/${product.subcategory}/${product.slug}/`,
  );

  const locationRoutes = stores.map((store) => `/locations/${store.slug}/`);
  const blogRoutes = posts.map((post) => `/blog/${post.slug}/`);

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...locationRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
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
