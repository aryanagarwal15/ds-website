import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { faqs, homeFaqs } from "@/lib/faqs";

export default function FaqPreview() {
  return (
    <section className="ds-section" aria-labelledby="faq-heading">
      <div className="ds-container">
        <Reveal>
          <SectionHeader eyebrow="Good questions" title="Asked often, answered plainly" />
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-10 max-w-2xl">
          <FaqAccordion faqs={homeFaqs} />
          <p className="mt-6 text-center">
            <Link
              href="/faqs"
              className="text-[0.95rem] font-medium text-indigo-bright hover:underline"
            >
              See all {faqs.length} questions
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
