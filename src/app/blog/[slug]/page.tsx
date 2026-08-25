import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { StoreCallout } from "@/components/StoreCallout";
import { getPost, posts } from "@/data/blog";
import { breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          description: post.description,
          author: { "@type": "Organization", name: site.name },
        }}
      />
      <article className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog/" },
            { name: post.title },
          ]}
        />
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-copper-dark">
          {post.date} · {post.readingMinutes} min read
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-wide text-navy">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-steel">{post.description}</p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-ink">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 text-sm text-steel">
          <Link href="/blog/" className="underline-offset-2 hover:underline">
            ← All articles
          </Link>
        </p>
        <div className="mt-10">
          <StoreCallout heading="Need the part that article mentioned?" />
        </div>
      </article>
    </>
  );
}
