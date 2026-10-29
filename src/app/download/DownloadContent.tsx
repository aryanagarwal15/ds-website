import Link from "next/link";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import Navbar from "@/components/Navbar";
import PhoneShot from "@/components/PhoneShot";
import QrCode from "@/components/QrCode";
import StoreButtons, { RatingLine } from "@/components/StoreButtons";
import { FEATURES, type FeatureKey } from "@/content/features";
import { ROUTES, pathFor } from "@/lib/routes";
import { downloadFaqs } from "./faqs";

const FEATURE_KEYS: FeatureKey[] = ["krishnaAi", "gita", "dailyPuja", "dhyana"];

/** What desktop visitors and search crawlers see at /download. Phones are sent straight to their store. */
export default function DownloadContent() {
  return (
    <>
      <Navbar locale="en" />
      <main id="main">
        <section className="ds-container grid items-center gap-12 pb-16 pt-[clamp(2.5rem,6vh,4.5rem)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <p className="eyebrow">Download</p>
            <h1 className="mt-4 text-[clamp(2.3rem,5vw,3.6rem)] text-indigo">Get DivineSarathi free on iPhone and Android</h1>
            <p className="mx-auto mt-5 max-w-xl text-[1.1rem] leading-relaxed text-ink-soft lg:mx-0">
              Talk to Krishna AI by voice or text in English or Hindi, learn the Bhagavad Gita verse by verse, hear a story every morning and meditate. Scan the code with your phone, or pick your store.
            </p>
            <div className="mt-9 flex flex-col items-center gap-6 lg:flex-row lg:items-center">
              <QrCode label="Scan with your phone camera" size={150} />
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <StoreButtons locale="en" page="download" spot="hero" height={50} />
                <RatingLine locale="en" />
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="hero-glow" aria-hidden="true" />
            <PhoneShot src="/images/app/krishna-greet-en.webp" alt="Krishna AI greeting you in the DivineSarathi app" width={280} priority />
          </div>
        </section>

        <section className="ds-section pt-4">
          <div className="ds-container">
            <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">What you get</h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURE_KEYS.map((k) => (
                <li key={k}>
                  <Link href={pathFor(k, "en")} className="dcard dcard-lift flex h-full flex-col gap-2 p-6">
                    <span className="font-serif text-[1.35rem] font-semibold text-indigo">{ROUTES[k].name.en}</span>
                    <span className="text-[0.95rem] text-ink-soft">{FEATURES[k].en.lede.split(". ")[0]}.</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ds-section pt-0">
          <div className="ds-container max-w-3xl">
            <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">Questions</h2>
            <FaqAccordion faqs={downloadFaqs} className="mt-8" />
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
