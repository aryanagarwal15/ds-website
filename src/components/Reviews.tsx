import { RatingLine } from "./StoreButtons";
import { REVIEWS } from "@/content/home";
import type { Locale } from "@/lib/routes";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";

const STORE_REVIEWS = {
  "App Store": `${APP_STORE_URL}?see-all=reviews`,
  "Google Play": `${PLAY_STORE_URL}&showAllReviews=true`,
};

function Stars() {
  return (
    <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

/** Real store reviews, word for word, each linking back to the store it came from. */
export default function Reviews({ locale, eyebrow, title, limit = 6 }: { locale: Locale; eyebrow: string; title: string; limit?: number }) {
  return (
    <section className="ds-section">
      <div className="ds-container">
        <header className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] text-indigo">{title}</h2>
          <RatingLine locale={locale} className="mt-4 justify-center" />
        </header>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.slice(0, limit).map((r) => (
            <li key={r.name} lang="en">
              <figure className="dcard flex h-full flex-col p-6">
                <Stars />
                <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink">“{r.quote}”</blockquote>
                <figcaption className="mt-5 text-[0.88rem] text-ink-muted">
                  <span className="font-medium text-ink-soft">{r.name}</span>
                  {" · "}
                  <a href={STORE_REVIEWS[r.store]} target="_blank" rel="noopener" className="underline decoration-[var(--ds-line)] underline-offset-4 hover:text-ink">
                    {r.store}
                  </a>
                  {" · "}
                  {r.date}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
