import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/seo";

type StoreButtonsProps = {
  className?: string;
  height?: number;
};

export default function StoreButtons({ className = "", height = 52 }: StoreButtonsProps) {
  // Badges scale down on narrow screens so the pair always shares one row.
  const badgeHeight = `min(${height}px, 11vw)`;
  return (
    <div className={`flex flex-nowrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download DivineSarathi on the App Store"
        className="transition-transform duration-150 hover:-translate-y-0.5"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/appstore.svg"
          alt="Download on the App Store"
          className="w-auto"
          style={{ height: badgeHeight }}
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get DivineSarathi on Google Play"
        className="transition-transform duration-150 hover:-translate-y-0.5"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/GooglePlay.svg"
          alt="Get it on Google Play"
          className="w-auto"
          style={{ height: badgeHeight }}
        />
      </a>
    </div>
  );
}
