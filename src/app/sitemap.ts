import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/about/",
    "/faq/",
    "/products/",
    "/propane/",
    "/locations/",
    "/blog/",
  ];
  const blogRoutes = posts.map((post) => `/blog/${post.slug}/`);

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : path === "/locations/" ? 0.95 : 0.8,
    })),
    ...blogRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
