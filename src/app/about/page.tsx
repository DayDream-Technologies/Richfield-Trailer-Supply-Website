import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import flint1970s from "@/images/rts-flint-1970s.jpg";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Richfield Trailer Supply was founded in Flint, Michigan in 1955. Veteran-owned trailer and RV parts stores in Flint, Grand Rapids, and Traverse City.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Richfield Trailer Supply" />
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <figure className="overflow-hidden border border-line">
          <Image
            src={flint1970s}
            alt="Richfield Trailer Supplies & Dist. storefront in Flint in the 1970s"
            className="h-auto w-full"
            sizes="(min-width: 768px) 48rem, 100vw"
            priority
          />
          <figcaption className="bg-cream px-4 py-3 text-sm text-steel">
            Our Flint store on Richfield Road in the 1970s.
          </figcaption>
        </figure>
        <p className="mt-8 text-lg leading-relaxed text-ink">
          Richfield Trailer Supply was founded in Flint, Michigan in 1955 as a
          distributor and retailer of parts and accessories for utility trailers
          and RV’s. The company’s name was chosen because the business was located
          on Richfield Road. In 1971, our current store/warehouse/office was built
          across the street from our original location, still on Richfield Road
          after more than 70 years!
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          In the 1980’s, the company added retail stores in Traverse City and Grand
          Rapids. In its history, the company sold snowmobile parts, was an RV
          dealer, and has carried various brands of parts and accessories that have
          changed over time. The one item that has remained a constant is our
          dedication to helping our customers keep their trailers on the road,
          safely and reliably.
        </p>
      </article>
    </>
  );
}
