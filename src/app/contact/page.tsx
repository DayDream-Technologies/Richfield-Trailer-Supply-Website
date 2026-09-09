import type { Metadata } from "next";
import { ClientRedirect } from "@/components/ClientRedirect";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or email Richfield Trailer Supply in Flint, Grand Rapids, or Traverse City. Reach the store directly from the locations page.",
  alternates: { canonical: "/locations/" },
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return <ClientRedirect href="/locations/" />;
}
