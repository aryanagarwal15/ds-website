import { UI } from "@/content/ui";
import type { Locale } from "@/lib/routes";
import { RATINGS, storeLink } from "@/lib/site";

type Props = {
  locale: Locale;
  /** Page key and spot, recorded with the install as utm_medium and utm_content. */
  page: string;
  spot: string;
  height?: number;
  className?: string;
  align?: "start" | "center";
};

/**
 * The site's main action: the two official store badges, always both, always
 * in the same order, so nothing shifts once the page loads. Each goes through
 * /download, which sends phones to their own store and counts the visit.
 */
export default function StoreButtons({ locale, page, spot, height = 48, className = "", align = "start" }: Props) {
  const t = UI[locale];
  const h = `min(${height}px, 12vw)`;
  return (
    <div className={`flex flex-nowrap items-center gap-3 ${align === "center" ? "justify-center" : ""} ${className}`}>
      <a href={storeLink("ios", page, spot)} aria-label={t.appStoreAlt} className="store-badge">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/appstore.svg" alt={t.appStoreAlt} style={{ height: h, width: "auto" }} />
      </a>
      <a href={storeLink("android", page, spot)} aria-label={t.playAlt} className="store-badge">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/GooglePlay.svg" alt={t.playAlt} style={{ height: h, width: "auto" }} />
      </a>
    </div>
  );
}

/** "4.9 on the App Store · 4.7 on Google Play · 10K+ downloads", from the store listings. */
export function RatingLine({ locale, className = "" }: { locale: Locale; className?: string }) {
  const parts = UI[locale].ratings(
    RATINGS.appStore.value.toFixed(1),
    RATINGS.googlePlay.value.toFixed(1),
    RATINGS.downloads,
  );
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.88rem] text-ink-soft ${className}`}>
      <span className="text-gold" aria-hidden="true">★</span>
      {parts.map((p, i) => (
        <span key={p} className={`items-center gap-2 ${i === 2 ? "hidden sm:inline-flex" : "inline-flex"}`}>
          {i > 0 && <span aria-hidden="true" className="text-ink-muted">·</span>}
          {p}
        </span>
      ))}
    </p>
  );
}
