import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { breadcrumbJsonLd, createPageMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQs: Krishna AI, Privacy, and How DivineSarathi Works",
  description:
    "Answers to common questions about DivineSarathi: how Krishna AI works, where its wisdom comes from, what stays private, and how it relates to scripture and tradition.",
  pageKey: "faqs",
  keywords: ["DivineSarathi FAQ", "Krishna AI questions", "is DivineSarathi private"],
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
          faqPageJsonLd(faqs),
        ]}
      />

      <section className="ds-section">
        <div className="ds-container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Good questions</p>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.4rem)] text-indigo">
              Asked often, answered plainly
            </h1>
            <p className="mt-5 text-[1.05rem] text-ink-soft">
              Everything people usually want to know before they begin. If
              your question is not here,{" "}
              <Link href="/about#contact" className="text-indigo-bright hover:underline">
                write to us
              </Link>{" "}
              and we will answer it ourselves.
            </p>
          </header>

          <FaqAccordion faqs={faqs} className="mx-auto mt-12 max-w-2xl" />

          <p className="mt-12 text-center">
            <Link href="/download" className="btn btn-primary btn-lg">
              Try it yourself, free
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
