export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-line bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold uppercase tracking-wide md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
