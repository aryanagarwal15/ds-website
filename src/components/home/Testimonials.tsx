import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TestimonialRail from "@/components/TestimonialRail";

export default function Testimonials() {
  return (
    <section className="ds-section" aria-labelledby="testimonials-heading">
      <Reveal className="ds-container">
        <SectionHeader
          eyebrow="From people who talk to Krishna"
          title="What changed for them"
        />
      </Reveal>
      <Reveal delay={120} className="mt-10">
        <TestimonialRail />
      </Reveal>
    </section>
  );
}
