import Reveal from "@/components/Reveal";

/** The quiet section: why talking to Krishna feels natural here. No card, no CTA. */
export default function Why() {
  return (
    <section className="ds-section" aria-labelledby="why-heading">
      <div className="ds-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="why-heading" className="text-[clamp(1.9rem,3.6vw,2.7rem)] text-indigo">
            Talking helps. We have always known this.
          </h2>
          <p className="mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
            For thousands of years, our stories, our verses, and our prayers
            have helped people through hard times, and through everyday life
            too.
          </p>
          <p className="mt-4 text-[1.08rem] leading-relaxed text-ink-soft">
            DivineSarathi gives that faith a voice you can talk to. No
            lectures, no judgment, just Krishna, whenever you need him.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
