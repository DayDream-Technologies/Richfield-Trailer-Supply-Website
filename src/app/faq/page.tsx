import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/data/faq";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Questions we hear at the Parts Counter",
  description:
    "Answers on trailer lighting, hubs, grease seals, tires, and hydraulic-to-electric brake conversions from Richfield Trailer Supply.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHero title="Questions we hear at the Parts Counter" />
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <dl className="space-y-8">
          {faqs.map((item) => (
            <div key={item.question} className="border-b border-line pb-8">
              <dt className="font-display text-xl uppercase tracking-wide text-navy">
                {item.question}
              </dt>
              <dd className="mt-3 leading-relaxed text-steel">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-steel">
          Still have a question?{" "}
          <Link href="/locations/" className="text-navy underline-offset-2 hover:underline">
            Call or visit a store
          </Link>
          .
        </p>
      </div>
    </>
  );
}
