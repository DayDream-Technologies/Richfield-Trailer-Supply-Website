"use client";

import { useEffect } from "react";

const basePath =
  process.env.GITHUB_PAGES === "true" ? "/Richfield-Trailer-Supply-Website" : "";

export function ClientRedirect({ href }: { href: string }) {
  const target = `${basePath}${href}`;

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <p className="text-steel">
        This page has moved.{" "}
        <a href={target} className="text-navy underline-offset-2 hover:underline">
          Continue here
        </a>
        .
      </p>
    </div>
  );
}
