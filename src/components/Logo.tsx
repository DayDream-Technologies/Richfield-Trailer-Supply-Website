import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.avif";

export function Logo({
  compact = false,
  priority = false,
}: {
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src={logo}
        alt="Richfield Trailer Supply"
        className={compact ? "h-9 w-auto" : "h-10 w-auto md:h-12"}
        height={compact ? 36 : 48}
        width={compact ? 177 : 236}
        priority={priority}
      />
    </Link>
  );
}
