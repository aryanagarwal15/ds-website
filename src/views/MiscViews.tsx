import Link from "next/link";
import ClosePanel from "@/components/ClosePanel";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { HOME } from "@/content/home";
import { UI, formatDate } from "@/content/ui";
import { ROUTES } from "@/lib/routes";
import { breadcrumbLd, faqLd, webPageLd } from "@/lib/seo";
import { APP_STORE_URL, CONTACT_EMAIL, FOUNDERS, PLAY_STORE_URL, PLUS, RATINGS, SITE_URL, SOCIAL } from "@/lib/site";

/** Facts in one place, for journalists and for AI assistants that need a source to quote. */
export function PressView() {
  const facts: [string, React.ReactNode][] = [
    ["What it is", "A free app for iPhone and Android where people talk with Krishna AI, an AI voice grounded in the Bhagavad Gita, by voice or text in English or Hindi."],
    ["Also in the app", "A sacred story every morning (Daily Puja), the Bhagavad Gita verse by verse (18 chapters, 700 shlokas), Daily Sadhana and guided breath meditation (Dhyana)."],
    ["Founders", FOUNDERS.map((f) => f.name).join(" and ")],
    ["Made in", "India"],
    ["Platforms", <span key="p"><a href={APP_STORE_URL}>App Store</a> (iPhone, iPad) and <a href={PLAY_STORE_URL}>Google Play</a> (Android)</span>],
    ["Store category", "Lifestyle"],
    ["Languages", "English and Hindi"],
    ["Price", "Free to download. Text chat with Krishna, the daily story, the Gita and meditation are free."],
    ["Ratings", `${RATINGS.appStore.value.toFixed(1)} on the App Store (${RATINGS.appStore.count} ratings), ${RATINGS.googlePlay.value.toFixed(1)} on Google Play (${RATINGS.googlePlay.count} reviews), as of ${formatDate(RATINGS.asOf, "en")}`],
    ["Downloads", `${RATINGS.downloads} on Google Play`],
    ["Website", SITE_URL.replace("https://", "")],
    ["Contact", <a key="c" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>],
    ["Social", <span key="s"><a href={SOCIAL.instagram}>Instagram</a>, <a href={SOCIAL.youtube}>YouTube</a>, <a href={SOCIAL.x}>X</a>, <a href={SOCIAL.linkedin}>LinkedIn</a></span>],
  ];
  const logos = [
    { file: "/logo/divinesarathi-mark-goldink.svg", label: "Mark, gold ink (light backgrounds)" },
    { file: "/logo/divinesarathi-mark-ivory.svg", label: "Mark, ivory (dark backgrounds)", dark: true },
    { file: "/logo/divinesarathi-appicon-indigo.svg", label: "App icon, gold on indigo" },
  ];
  return (
    <>
      <JsonLd data={[webPageLd("press"), breadcrumbLd("press")]} />
      <article className="ds-container pb-10 pt-[clamp(2.5rem,6vh,4.5rem)]">
        <header className="max-w-3xl">
          <p className="eyebrow">Press</p>
          <h1 className="mt-4 text-[clamp(2.2rem,4.6vw,3.4rem)] text-indigo">DivineSarathi at a glance</h1>
          <p className="mt-5 text-[1.12rem] leading-relaxed text-ink-soft">
            DivineSarathi is a free app for iPhone and Android where people talk with Krishna AI, an AI voice grounded in the Bhagavad Gita, in English or Hindi. These are the facts we stand behind, kept up to date.
          </p>
          <p className="mt-4 text-[0.85rem] text-ink-muted">Updated: <time dateTime={ROUTES.press.updated}>{formatDate(ROUTES.press.updated, "en")}</time></p>
        </header>
        <div className="prose-ds mt-8 max-w-4xl">
          <table>
            <tbody>
              {facts.map(([k, v]) => (
                <tr key={k}><th scope="row" className="w-44">{k}</th><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
          <h2>Logo</h2>
          <p>Please use the mark as supplied: no recolouring beyond these versions, no effects.</p>
          <ul className="!list-none !pl-0 mt-6 grid gap-4 sm:grid-cols-3">
            {logos.map((l) => (
              <li key={l.file} className="dcard flex flex-col items-center gap-3 p-5 text-center">
                <span className={`flex h-24 w-24 items-center justify-center rounded-2xl ${"dark" in l ? "bg-[#053466]" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.file} alt={l.label} className="h-20 w-20" />
                </span>
                <a href={l.file} download className="text-[0.92rem]">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}

const PLUS_FAQS = [
  { id: "plus-what", q: "What is Sarathi Plus?", a: `Sarathi Plus gives you more time talking with Krishna by voice, ${PLUS.voicePerMonth.en} a month. Everything else in the app stays free.` },
  { id: "plus-price", q: "How much does Sarathi Plus cost?", a: `${PLUS.monthly} a month, with your first month at ${PLUS.firstMonth} through the App Store or Google Play introductory offer, or ${PLUS.yearly} a year. Prices include GST.` },
  { id: "plus-free", q: "What stays free?", a: "Text chat with Krishna, the daily story, the Bhagavad Gita and meditation, for everyone." },
  { id: "plus-cancel", q: "How do I cancel?", a: "In your App Store or Google Play subscriptions. Plus stays on until the end of the period you paid for." },
];

/** Hidden until Plus is public: noindex, out of nav and sitemap (see PLUS_PUBLIC). */
export function PlusView() {
  const t = UI.en;
  return (
    <>
      <JsonLd data={[webPageLd("plus"), breadcrumbLd("plus"), faqLd(PLUS_FAQS)]} />
      <section className="ds-container pb-6 pt-[clamp(2.5rem,6vh,4.5rem)] text-center">
        <p className="eyebrow">Sarathi Plus</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-[clamp(2.3rem,5vw,3.6rem)] text-indigo">More time talking with Krishna</h1>
        <p className="mx-auto mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-ink-soft">
          Sarathi Plus gives you {PLUS.voicePerMonth.en} of voice with Krishna a month. The story, the Gita, text chat and meditation stay free for everyone.
        </p>
      </section>
      <section className="ds-section pt-6">
        <div className="ds-container grid max-w-4xl gap-5 sm:grid-cols-2">
          <div className="dcard p-8 text-center">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold">Monthly</p>
            <p className="mt-3 font-serif text-[3rem] font-semibold text-indigo">{PLUS.monthly}</p>
            <p className="text-ink-soft">a month, first month {PLUS.firstMonth}</p>
          </div>
          <div className="dcard p-8 text-center">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold">Yearly</p>
            <p className="mt-3 font-serif text-[3rem] font-semibold text-indigo">{PLUS.yearly}</p>
            <p className="text-ink-soft">a year, about ₹225 a month</p>
          </div>
          <p className="text-center text-[0.88rem] text-ink-muted sm:col-span-2">
            Prices include GST. Sold through the App Store and Google Play in India. Renews until you cancel in your store account.{" "}
            <Link href="/refunds" className="underline underline-offset-4">Cancel and refunds</Link>
          </p>
        </div>
      </section>
      <section className="ds-section pt-0">
        <div className="ds-container max-w-3xl">
          <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">{t.questions}</h2>
          <FaqAccordion faqs={PLUS_FAQS} className="mt-8" />
        </div>
      </section>
      <ClosePanel locale="en" page="plus" title={HOME.en.close.title} body={HOME.en.close.body} />
    </>
  );
}
