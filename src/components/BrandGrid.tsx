import Image from "next/image";
import { brands } from "@/data/brands";

export function BrandGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {brands.map((brand) => (
        <li
          key={brand.name}
          className="flex h-24 items-center justify-center rounded-sm border border-line bg-white px-4 py-3"
        >
          {brand.logo ? (
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={180}
              height={56}
              className="max-h-14 w-auto max-w-full object-contain"
            />
          ) : (
            <span className="text-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy">
              {brand.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
