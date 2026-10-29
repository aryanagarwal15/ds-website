import Link from "next/link";
import Mark from "./Mark";
import type { Locale } from "@/lib/routes";

/** Horizontal lockup: the mark plus the wordmark in Cormorant Garamond. Same size in every state. */
export default function Logo({ locale = "en", markSize = 30 }: { locale?: Locale; markSize?: number }) {
  return (
    <Link href={locale === "hi" ? "/hi" : "/"} className="inline-flex items-center gap-2.5" aria-label="DivineSarathi home">
      <Mark size={markSize} />
      <span className="font-serif font-semibold tracking-wide text-ink" style={{ fontSize: markSize * 0.66 }}>
        DivineSarathi
      </span>
    </Link>
  );
}
