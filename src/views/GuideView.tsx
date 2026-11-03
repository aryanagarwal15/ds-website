import Link from "next/link";
import { Fragment } from "react";
import ClosePanel from "@/components/ClosePanel";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import MalaDivider from "@/components/MalaDivider";
import PhoneShot from "@/components/PhoneShot";
import StoreButtons, { RatingLine } from "@/components/StoreButtons";
import { GUIDES, type GuideKey } from "@/content/guides";
import { UI } from "@/content/ui";
import { ROUTES, pathFor, type Locale } from "@/lib/routes";
import { breadcrumbLd, faqLd, mobileAppLd, webPageLd } from "@/lib/seo";
import { renderBlock } from "./LongformView";

/** A guide answers one search in full: the answer and the stores first, then the detail, questions and what to read next. */
export default function GuideView({ guide, locale }: { guide: GuideKey; locale: Locale }) {
  const c = GUIDES[guide][locale];
  if (!c) throw new Error(`No ${locale} copy for guide ${guide}`);
  const t = UI[locale];

  return (
    <>
      <JsonLd data={[webPageLd(guide, locale), breadcrumbLd(guide, locale), mobileAppLd, faqLd(c.faqs)]} />

      <section className="relative overflow-hidden">
        <div className="ds-container grid items-center gap-12 pb-16 pt-[clamp(2.5rem,6vh,4.5rem)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <nav aria-label="Breadcrumb" className="text-[0.85rem] text-ink-muted">
              <Link href={pathFor("home", locale)} className="hover:text-ink">{t.breadcrumbHome}</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{ROUTES[guide].name[locale]}</span>
            </nav>
            <p className="eyebrow mt-6">{c.eyebrow}</p>
            <h1 className="mt-4 text-[clamp(2.3rem,5vw,3.6rem)] tracking-[-0.01em] text-indigo">{c.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ink-soft lg:mx-0">{c.lede}</p>
            <div className="mt-9 flex flex-col items-center gap-5 lg:items-start">
              <StoreButtons locale={locale} page={guide} spot="hero" height={50} />
              <RatingLine locale={locale} className="justify-center lg:justify-start" />
            </div>
          </div>
          <div className="relative flex justify-center">
            <PhoneShot src={c.hero.src} alt={c.hero.alt} width={290} priority />
          </div>
        </div>
      </section>

      <MalaDivider />

      <section className="ds-section">
        <div className="ds-container">
          <div className="prose-ds mx-auto">{c.blocks.map((b, i) => <Fragment key={i}>{renderBlock(b, i)}</Fragment>)}</div>
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
          <h2 className="text-center text-[clamp(1.6rem,3vw,2.2rem)] text-indigo">{t.readNext}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {c.reads.map((r) => (
              <li key={r.key}>
                <Link href={pathFor(r.key, locale)} className="dcard dcard-lift flex h-full flex-col gap-2 p-6">
                  <span className="font-serif text-[1.3rem] font-semibold text-indigo">{r.label}</span>
                  <span className="text-[0.95rem] text-ink-soft">{ROUTES[r.key].description[locale]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosePanel locale={locale} page={guide} title={c.close.title} body={c.close.body} />
    </>
  );
}
