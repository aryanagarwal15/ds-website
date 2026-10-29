import Link from "next/link";
import ClosePanel from "@/components/ClosePanel";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import MalaDivider from "@/components/MalaDivider";
import { ABOUT, SUPPORT } from "@/content/company";
import { FAQS, allFaqs } from "@/content/faqs";
import { HOME } from "@/content/home";
import { UI, formatDate } from "@/content/ui";
import { ROUTES, pathFor, type Locale, type RouteKey } from "@/lib/routes";
import { breadcrumbLd, faqLd, webPageLd } from "@/lib/seo";
import { CONTACT_EMAIL, FOUNDERS } from "@/lib/site";

function PageHeader({ routeKey, locale, eyebrow, title, lede, center = false }: { routeKey: RouteKey; locale: Locale; eyebrow: string; title: string; lede: string; center?: boolean }) {
  const t = UI[locale];
  return (
    <header className={`ds-container pb-6 pt-[clamp(2.5rem,6vh,4.5rem)] ${center ? "text-center" : ""}`}>
      <nav aria-label="Breadcrumb" className="text-[0.85rem] text-ink-muted">
        <Link href={pathFor("home", locale)} className="hover:text-ink">{t.breadcrumbHome}</Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{ROUTES[routeKey].name[locale]}</span>
      </nav>
      <p className="eyebrow mt-6">{eyebrow}</p>
      <h1 className={`mt-4 max-w-3xl text-[clamp(2.3rem,5vw,3.6rem)] text-indigo ${center ? "mx-auto" : ""}`}>{title}</h1>
      <p className={`mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-ink-soft ${center ? "mx-auto" : ""}`}>{lede}</p>
    </header>
  );
}

function Monogram({ name }: { name: string }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <span aria-hidden="true" className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--ds-line)] bg-[var(--ds-gold-soft)] font-serif text-[1.8rem] font-semibold text-indigo">
      {initials}
    </span>
  );
}

export function AboutView({ locale }: { locale: Locale }) {
  const c = ABOUT[locale];
  const personLd = FOUNDERS.map((f) => ({ "@context": "https://schema.org", "@type": "Person", name: f.name, jobTitle: f.role, alumniOf: "BITS Pilani", worksFor: { "@id": "https://www.divinesarathi.in/#organization" } }));
  return (
    <>
      <JsonLd data={[webPageLd("about", locale), breadcrumbLd("about", locale), ...personLd]} />
      <PageHeader routeKey="about" locale={locale} eyebrow={c.eyebrow} title={c.title} lede={c.lede} />

      <section className="ds-section pt-8">
        <div className="ds-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">{c.story.title}</h2>
          <div className="space-y-5 text-[1.08rem] leading-relaxed text-ink-soft">
            {c.story.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      <MalaDivider />

      <section className="ds-section">
        <div className="ds-container">
          <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">{c.principles.title}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.principles.items.map((p) => (
              <li key={p.title} className="dcard p-6">
                <p className="font-serif text-[1.35rem] font-semibold text-indigo">{p.title}</p>
                <p className="mt-2 text-[0.98rem] text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ds-section pt-0">
        <div className="ds-container">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">{c.founders.title}</h2>
            <p className="mt-3 text-[1.05rem] text-ink-soft">{c.founders.lede}</p>
          </header>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {c.founders.people.map((f, i) => (
              <li key={f.name} className="dcard flex flex-col gap-4 p-7 sm:flex-row">
                <Monogram name={FOUNDERS[i].name} />
                <div>
                  <p className="font-serif text-[1.5rem] font-semibold text-indigo">{f.name}</p>
                  <p className="text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-gold">{f.role}</p>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">{f.bio}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-xl text-center text-[1rem] text-ink-soft">
            {c.contact.body}{" "}
            <Link href={pathFor("support", locale)} className="font-semibold text-indigo underline decoration-[var(--ds-line)] underline-offset-4">{c.contact.cta}</Link>
          </p>
        </div>
      </section>

      <ClosePanel locale={locale} page="about" title={HOME[locale].close.title} body={HOME[locale].close.body} />
    </>
  );
}

export function FaqsView({ locale }: { locale: Locale }) {
  const groups = FAQS[locale];
  const title = ROUTES.faqs.title[locale];
  return (
    <>
      <JsonLd data={[webPageLd("faqs", locale), breadcrumbLd("faqs", locale), faqLd(allFaqs(locale))]} />
      <PageHeader routeKey="faqs" locale={locale} eyebrow={ROUTES.faqs.name[locale]} title={title} lede={ROUTES.faqs.description[locale]} />
      <div className="ds-container max-w-3xl pb-10">
        <p className="text-[0.85rem] text-ink-muted">
          {UI[locale].updated}: <time dateTime={ROUTES.faqs.updated}>{formatDate(ROUTES.faqs.updated, locale)}</time>
        </p>
        {groups.map((g) => (
          <section key={g.title} className="mt-12">
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] text-indigo">{g.title}</h2>
            <FaqAccordion faqs={g.items} className="mt-4" />
          </section>
        ))}
      </div>
      <ClosePanel locale={locale} page="faqs" title={HOME[locale].close.title} body={HOME[locale].close.body} />
    </>
  );
}

export function SupportView({ locale }: { locale: Locale }) {
  const c = SUPPORT[locale];
  return (
    <>
      <JsonLd data={[webPageLd("support", locale), breadcrumbLd("support", locale)]} />
      <PageHeader routeKey="support" locale={locale} eyebrow={c.eyebrow} title={c.title} lede={c.lede} />

      <section className="ds-section pt-6">
        <div className="ds-container grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] text-indigo">{c.help.title}</h2>
            <ul className="mt-6 grid gap-4">
              {c.help.items.map((h) => (
                <li key={h.key}>
                  <Link href={pathFor(h.key, locale)} className="dcard dcard-lift flex items-center justify-between gap-4 p-5">
                    <span>
                      <span className="block font-semibold text-ink">{h.title}</span>
                      <span className="mt-1 block text-[0.95rem] text-ink-soft">{h.body}</span>
                    </span>
                    <span aria-hidden="true" className="text-gold">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <h2 className="text-[clamp(1.4rem,2.6vw,1.8rem)] text-indigo">{c.stores.title}</h2>
              <p className="mt-2 text-[0.98rem] text-ink-soft">{c.stores.body}</p>
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.98rem]">
                <a href="https://support.apple.com/en-in/118223" target="_blank" rel="noopener" className="font-semibold text-indigo underline decoration-[var(--ds-line)] underline-offset-4">{c.stores.apple}</a>
                <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener" className="font-semibold text-indigo underline decoration-[var(--ds-line)] underline-offset-4">{c.stores.google}</a>
              </p>
            </div>
          </div>

          <div className="dcard p-6 sm:p-8">
            <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] text-indigo">{c.form.title}</h2>
            <p className="mt-2 text-[0.98rem] text-ink-soft">{c.form.body}</p>
            <p className="mt-2 text-[0.98rem]">
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-indigo">{CONTACT_EMAIL}</a>
            </p>
            <div className="mt-6">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
