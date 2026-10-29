import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import MalaDivider from "@/components/MalaDivider";
import PhoneShot from "@/components/PhoneShot";
import ClosePanel from "@/components/ClosePanel";
import Reviews from "@/components/Reviews";
import StoreButtons, { RatingLine } from "@/components/StoreButtons";
import { ShieldIcon } from "@/components/icons";
import { HOME } from "@/content/home";
import { homeFaqs } from "@/content/faqs";
import { UI } from "@/content/ui";
import { pathFor, type Locale } from "@/lib/routes";
import { faqLd, mobileAppLd, webPageLd } from "@/lib/seo";

export default function HomeView({ locale }: { locale: Locale }) {
  const c = HOME[locale];
  const t = UI[locale];
  const faqs = homeFaqs(locale);

  return (
    <>
      <JsonLd data={[webPageLd("home", locale), mobileAppLd, faqLd(faqs)]} />

      {/* Hero: what it is, then the stores */}
      <section className="relative overflow-hidden">
        <div className="ds-container grid items-center gap-12 pb-16 pt-[clamp(2.5rem,6vh,5rem)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-center lg:text-left">
            <p className="eyebrow">{c.hero.eyebrow}</p>
            <h1 className="mt-5 text-[clamp(2.5rem,5.6vw,4.1rem)] tracking-[-0.01em] text-indigo">{c.hero.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ink-soft lg:mx-0">{c.hero.lede}</p>
            <div className="mt-9 flex flex-col items-center gap-5 lg:items-start">
              <StoreButtons locale={locale} page="home" spot="hero" height={52} />
              <RatingLine locale={locale} className="justify-center lg:justify-start" />
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[460px] justify-center" aria-hidden={false}>
            <div className="absolute left-0 top-10 hidden -rotate-6 opacity-90 sm:block">
              <PhoneShot src={c.hero.screenBack} alt={c.hero.altBack} width={230} />
            </div>
            <div className="relative sm:ml-24">
              <PhoneShot src={c.hero.screenFront} alt={c.hero.altFront} width={280} priority />
            </div>
          </div>
        </div>
      </section>

      <MalaDivider />

      {/* Why: the stigma, named gently */}
      <section className="ds-section">
        <div className="ds-container max-w-3xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.7rem)] text-indigo">{c.why.title}</h2>
          {c.why.body.map((p) => (
            <p key={p} className="mx-auto mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-ink-soft">{p}</p>
          ))}
        </div>
      </section>

      {/* Inside the app: real screens, one row per feature */}
      <section className="ds-section pt-0">
        <div className="ds-container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{c.inside.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] text-indigo">{c.inside.title}</h2>
          </header>
          <div className="mt-16 flex flex-col gap-20 lg:gap-28">
            {c.inside.items.map((it, i) => (
              <article key={it.key} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={`flex justify-center ${i % 2 ? "md:order-2" : ""}`}>
                  <PhoneShot src={it.screen} alt={it.alt} width={270} />
                </div>
                <div className="text-center md:text-left">
                  <p className="eyebrow">{it.eyebrow}</p>
                  <h3 className="mt-3 text-[clamp(1.7rem,3vw,2.3rem)] text-indigo">{it.title}</h3>
                  <p className="mx-auto mt-4 max-w-md text-[1.05rem] leading-relaxed text-ink-soft md:mx-0">{it.body}</p>
                  <Link href={pathFor(it.key, locale)} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-indigo hover:text-saffron">
                    {t.learnMore}: {it.eyebrow}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MalaDivider />

      <Reviews locale={locale} eyebrow={c.reviews.eyebrow} title={c.reviews.title} />

      {/* Privacy, in three true lines */}
      <section className="ds-section">
        <div className="ds-container">
          <div className="dcard mx-auto max-w-5xl px-6 py-10 sm:px-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="pillar-badge text-indigo"><ShieldIcon size={24} /></span>
              <p className="eyebrow">{c.privacy.eyebrow}</p>
              <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] text-indigo">{c.privacy.title}</h2>
            </div>
            <ul className="mt-10 grid gap-8 sm:grid-cols-3">
              {c.privacy.items.map((p) => (
                <li key={p.title} className="text-center">
                  <p className="font-serif text-[1.3rem] font-semibold text-ink">{p.title}</p>
                  <p className="mt-2 text-[0.95rem] text-ink-soft">{p.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.95rem]">
              {c.privacy.links.map((l) => (
                <Link key={l.key} href={pathFor(l.key, locale)} className="font-semibold text-indigo underline decoration-[var(--ds-line)] underline-offset-4 hover:text-saffron">
                  {l.label}
                </Link>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="ds-section pt-0">
        <div className="ds-container max-w-3xl">
          <header className="text-center">
            <p className="eyebrow">{c.faq.eyebrow}</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] text-indigo">{c.faq.title}</h2>
          </header>
          <FaqAccordion faqs={faqs} className="mt-8" />
          <p className="mt-6 text-center">
            <Link href={pathFor("faqs", locale)} className="font-semibold text-indigo hover:text-saffron">
              {c.faq.all} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      <ClosePanel locale={locale} page="home" title={c.close.title} body={c.close.body} />
    </>
  );
}
