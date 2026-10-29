import Link from "next/link";
import ClosePanel from "@/components/ClosePanel";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import MalaDivider from "@/components/MalaDivider";
import PhoneShot from "@/components/PhoneShot";
import StoreButtons, { RatingLine } from "@/components/StoreButtons";
import { BookIcon, DiyaIcon, FeatherIcon, LotusIcon } from "@/components/icons";
import { FEATURES, FEATURE_ICONS, type FeatureKey } from "@/content/features";
import { UI } from "@/content/ui";
import { ROUTES, pathFor, type Locale } from "@/lib/routes";
import { breadcrumbLd, faqLd, mobileAppLd, webPageLd } from "@/lib/seo";

const ICONS = { feather: FeatherIcon, book: BookIcon, diya: DiyaIcon, lotus: LotusIcon };
const ORDER: FeatureKey[] = ["krishnaAi", "gita", "dailyPuja", "dhyana"];

/** One page per feature that is in the app: what it is, the real screens, then the stores. */
export default function FeatureView({ feature, locale }: { feature: FeatureKey; locale: Locale }) {
  const c = FEATURES[feature][locale];
  const t = UI[locale];
  const others = ORDER.filter((k) => k !== feature);

  return (
    <>
      <JsonLd data={[webPageLd(feature, locale), breadcrumbLd(feature, locale), mobileAppLd, faqLd(c.faqs)]} />

      <section className="relative overflow-hidden">
        <div className="ds-container grid items-center gap-12 pb-16 pt-[clamp(2.5rem,6vh,4.5rem)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <nav aria-label="Breadcrumb" className="text-[0.85rem] text-ink-muted">
              <Link href={pathFor("home", locale)} className="hover:text-ink">{t.breadcrumbHome}</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{ROUTES[feature].name[locale]}</span>
            </nav>
            <p className="eyebrow mt-6">{c.eyebrow}</p>
            <h1 className="mt-4 text-[clamp(2.3rem,5vw,3.6rem)] tracking-[-0.01em] text-indigo">{c.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ink-soft lg:mx-0">{c.lede}</p>
            <div className="mt-9 flex flex-col items-center gap-5 lg:items-start">
              <StoreButtons locale={locale} page={feature} spot="hero" height={50} />
              <RatingLine locale={locale} className="justify-center lg:justify-start" />
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="hero-glow" aria-hidden="true" />
            <PhoneShot src={c.hero.src} alt={c.hero.alt} width={290} priority />
          </div>
        </div>
      </section>

      <MalaDivider />

      <section className="ds-section">
        <div className="ds-container">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.points.map((p) => (
              <li key={p.title} className="dcard arch flex flex-col items-center px-6 pb-8 pt-12 text-center">
                <p className="font-serif text-[1.45rem] font-semibold text-indigo">{p.title}</p>
                <span className="pillar-rule" aria-hidden="true" />
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ds-section pt-0">
        <div className="ds-container grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:order-2">
            <PhoneShot src={c.detail.src} alt={c.detail.alt} width={270} />
          </div>
          <div>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">{c.detail.title}</h2>
            <p className="mt-4 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">{c.detail.body}</p>
            <p className="mt-8 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gold">{c.detail.listTitle}</p>
            <ul className="mt-4 space-y-3">
              {c.detail.list.map((x) => (
                <li key={x} className="flex gap-3 text-[1.02rem] text-ink">
                  <span aria-hidden="true" className="mt-[0.62em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--ds-saffron)]" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            {c.note && (
              <p className="mt-8 rounded-2xl bg-[var(--ds-gold-soft)] px-5 py-4 text-[0.95rem] text-ink">
                {c.note.text}{" "}
                <Link href={pathFor(c.note.link.key, locale)} className="font-semibold text-indigo underline decoration-[var(--ds-line)] underline-offset-4">
                  {c.note.link.label}
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="ds-section pt-0">
        <div className="ds-container max-w-3xl">
          <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">{t.questions}</h2>
          <FaqAccordion faqs={c.faqs} className="mt-8" />
        </div>
      </section>

      <section className="ds-section pt-0">
        <div className="ds-container">
          <h2 className="text-center text-[clamp(1.6rem,3vw,2.2rem)] text-indigo">{c.related.title}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {others.map((k) => {
              const o = FEATURES[k][locale];
              const Icon = ICONS[FEATURE_ICONS[k]];
              return (
                <li key={k}>
                  <Link href={pathFor(k, locale)} className="dcard dcard-lift flex h-full flex-col gap-3 p-6">
                    <span className="pillar-badge text-indigo"><Icon size={24} /></span>
                    <span className="font-serif text-[1.35rem] font-semibold text-indigo">{ROUTES[k].name[locale]}</span>
                    <span className="text-[0.95rem] text-ink-soft">{o.points[0].body}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ClosePanel locale={locale} page={feature} title={c.close.title} body={c.close.body} />
    </>
  );
}
