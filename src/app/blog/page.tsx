import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "More From The Parts Counter",
  description:
    "Practical articles on trailer tires, hubs, lighting, and maintenance from Richfield Trailer Supply in Michigan.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero title="More From The Parts Counter" />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-line pb-8">
              <p className="text-xs uppercase tracking-wide text-steel">
                {post.date} · {post.readingMinutes} min
              </p>
              <h2 className="mt-2 font-display text-2xl uppercase tracking-wide text-navy">
                <Link href={`/blog/${post.slug}/`} className="hover:text-copper-dark">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-steel">{post.description}</p>
              <Link
                href={`/blog/${post.slug}/`}
                className="mt-3 inline-block text-sm font-medium text-copper-dark"
              >
                Read article →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
