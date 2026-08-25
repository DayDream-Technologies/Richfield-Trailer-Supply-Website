import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { StoreCallout } from "@/components/StoreCallout";
import { faqs } from "@/data/faq";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trailer Parts FAQ",
  description:
    "Answers on trailer lighting, hubs, grease seals, tires, and hydraulic-to-electric brake conversions from Richfield Trailer Supply.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHero
        eyebrow="FAQ"
        title="Trailer questions we hear at the counter"
        description="Have a trailer-related question? Start here, then call any store for a part number."
      />
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
        <div className="mt-10">
          <StoreCallout />
        </div>
      </div>
    </>
  );
}
