import Link from "next/link";
import Mark from "./Mark";

type LogoProps = {
  className?: string;
  markSize?: number;
};

/** Horizontal lockup: the mark plus the wordmark in Cormorant Garamond. */
export default function Logo({ className = "", markSize = 34 }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="DivineSarathi home"
    >
      <Mark size={markSize} />
      <span
        className="font-serif font-semibold tracking-wide text-ink"
        style={{ fontSize: markSize * 0.62 }}
      >
        DivineSarathi
      </span>
    </Link>
  );
}
