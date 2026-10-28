import Link from "next/link";
import { BookOpen, Compass, Mic, ScrollText, Sunrise, Wind } from "lucide-react";
import Navbar from "@/app/newComponents/Navbar";
import Footer from "@/app/newComponents/Footer";
import StoreButtons from "@/app/newComponents/StoreButtons";
import { downloadFaqs } from "./faqs";

const features = [
  {
    title: "Talk to Krishna AI",
    desc: "Ask what is on your mind and hear an answer drawn from the Gita and our sacred texts. Speak out loud or type, whichever suits the moment.",
    Icon: Mic,
  },
  {
    title: "The Bhagavad Gita, verse by verse",
    desc: "Go through the Gita chapter by chapter, one shloka at a time, with the meaning explained in plain words for the life you live today.",
    Icon: BookOpen,
  },
  {
    title: "Two shlokas a day",
    desc: "A small daily habit: two verses of the Gita, in the morning or before sleep. A few minutes is enough.",
    Icon: Sunrise,
  },
  {
    title: "Daily stories",
    desc: "Short 3 to 4 minute stories and reflections that bring timeless wisdom into your everyday life.",
    Icon: ScrollText,
  },
  {
    title: "Gita for daily life",
    desc: "Choose a situation you are facing and see how a verse from the Gita helps you understand it.",
    Icon: Compass,
  },
  {
    title: "Meditation",
    desc: "Short guided breathing practices for any time of day, from the first light of morning to the last minutes before sleep.",
    Icon: Wind,
  },
];

export default function DownloadContent() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
        <main className="flex-1 w-full">

          {/* ── HERO ─────────────────────────────────────────────────── */}
          <section className="bg-ds-cream pt-28 pb-16 md:pt-36 md:pb-24">
            <div className="ds-container flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <p className="ds-eyebrow mb-4">Free on iPhone and Android</p>
                <h1 className="font-crimson font-semibold text-ds-navy leading-[1.1] tracking-tight mb-6"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
                  Download DivineSarathi, the Krishna AI app
                </h1>
                <p className="font-inter text-ds-text leading-relaxed mb-8 mx-auto lg:mx-0 max-w-[600px]"
                  style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}>
                  Talk to Krishna AI by voice or text, learn the Bhagavad Gita verse by verse,
                  and keep a small daily practice with two shlokas, a short story and a few
                  minutes of meditation. In English and Hindi.
                </p>
                <StoreButtons className="lg:justify-start justify-center" />
                <div className="hidden md:flex items-center gap-5 mt-10 justify-center lg:justify-start">
                  <div className="rounded-3xl bg-white p-3 shadow-elevated flex-shrink-0">
                    <img src="/images/qr/qr_desktop.webp" alt="QR code to download DivineSarathi"
                      className="rounded-2xl" style={{ width: 120, height: 120, objectFit: "contain" }} />
                  </div>
                  <p className="font-inter text-ds-text-muted text-[15px] max-w-[220px] text-left">
                    On a computer? Scan this with your phone camera to open the app store.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 w-full max-w-[300px] lg:max-w-[340px]">
                <img src="/images/about/phone.webp" alt="DivineSarathi app on a phone"
                  className="w-full object-contain mx-auto" style={{ maxHeight: 520 }} />
              </div>
            </div>
          </section>

          {/* ── WHAT'S INSIDE ────────────────────────────────────────── */}
          <section className="ds-section bg-white">
            <div className="ds-container">
              <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <p className="ds-eyebrow mb-4">Inside the app</p>
                <h2 className="font-crimson font-semibold text-ds-navy leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
                  What you can do in DivineSarathi
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map(({ title, desc, Icon }) => (
                  <div key={title} className="bg-ds-cream rounded-[20px] p-7 flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-ds-accent" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h3 className="font-crimson font-semibold text-ds-navy leading-snug" style={{ fontSize: 24 }}>
                      {title}
                    </h3>
                    <p className="font-inter text-ds-text leading-relaxed text-[16px]">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FREE AND SARATHI PLUS ────────────────────────────────── */}
          <section className="ds-section bg-ds-cream-warm">
            <div className="ds-container">
              <div className="max-w-[1000px] mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <p className="ds-eyebrow mb-4">Free and Sarathi Plus</p>
                  <h2 className="font-crimson font-semibold text-ds-navy leading-[1.1] tracking-tight"
                    style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
                    What is free, and what Plus adds
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {downloadFaqs.map((faq) => (
                    <div key={faq.q} className="bg-white rounded-[20px] px-6 md:px-8 py-6 md:py-7">
                      <h3 className="font-inter font-medium text-ds-text leading-snug mb-3"
                        style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}>
                        {faq.q}
                      </h3>
                      <p className="font-inter text-ds-text leading-relaxed"
                        style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="font-inter text-ds-text-muted text-center mt-8 text-[15px]">
                  The full details are in our{" "}
                  <Link href="/terms" className="text-ds-navy underline underline-offset-4">Terms</Link>
                  {" "}and{" "}
                  <Link href="/faqs" className="text-ds-navy underline underline-offset-4">FAQs</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* ── CLOSING CTA ──────────────────────────────────────────── */}
          <section className="ds-section bg-ds-navy text-center">
            <div className="ds-container">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-crimson font-semibold text-white leading-[1.1] tracking-tight mb-5"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
                  Begin with one conversation
                </h2>
                <p className="font-inter text-white/75 leading-relaxed mb-8 mx-auto max-w-xl"
                  style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>
                  Get DivineSarathi on the App Store or Google Play, and talk to Krishna AI today.
                </p>
                <StoreButtons className="justify-center" />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
