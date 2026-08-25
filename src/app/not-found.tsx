import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-dark">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-wide text-navy">
        Page not found
      </h1>
      <p className="mt-4 text-steel">
        That address is not on this site. Try the parts catalog or call the store.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/"
          className="rounded-sm bg-copper px-5 py-3 font-display text-sm uppercase tracking-wide text-navy-deep"
        >
          Home
        </Link>
        <Link
          href="/products/"
          className="rounded-sm border border-navy px-5 py-3 font-display text-sm uppercase tracking-wide text-navy"
        >
          Parts
        </Link>
      </div>
    </div>
  );
}
