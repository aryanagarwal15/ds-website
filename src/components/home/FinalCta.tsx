import Link from "next/link";
import Mark from "@/components/Mark";
import Reveal from "@/components/Reveal";
import StoreButtons from "@/components/StoreButtons";

export default function FinalCta() {
  return (
    <section className="ds-section" aria-labelledby="final-cta-heading">
      <div className="ds-container">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[var(--ds-radius-xl)] px-7 py-14 sm:px-12"
            style={{ background: "var(--ds-indigo-deep)" }}
          >
            {/* mark watermark */}
            <div
              className="pointer-events-none absolute -left-16 -top-16 opacity-[0.07]"
              style={{ color: "#d9b65c" }}
              aria-hidden="true"
            >
              <Mark size={300} className="!text-inherit" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="text-center lg:text-left">
                <h2
                  id="final-cta-heading"
                  className="text-[clamp(1.9rem,4vw,2.8rem)]"
                  style={{ color: "#fffdf8" }}
                >
                  Begin tonight, before sleep
                </h2>
                <p
                  className="mx-auto mt-4 max-w-md text-[1.02rem] leading-relaxed lg:mx-0"
                  style={{ color: "rgba(255, 253, 248, 0.78)" }}
                >
                  Download the app, say what is on your mind, and hear what
                  Krishna ji has to say.
                </p>

                <div className="mt-8 flex flex-col items-center gap-5 lg:items-start">
                  <Link href="/download" className="btn btn-primary btn-lg">
                    Get DivineSarathi free
                  </Link>
                  <StoreButtons height={42} />
                  <p className="text-[0.88rem]" style={{ color: "rgba(255, 253, 248, 0.7)" }}>
                    <span style={{ color: "#d9b65c" }} aria-hidden="true">★</span> 4.8
                    · 120+ reviews
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-[0.85rem]" style={{ color: "rgba(255, 253, 248, 0.55)" }}>
                    An hour with Krishna, every day, free.
                  </p>
                  <p className="mt-1 font-serif text-[1.05rem]" style={{ color: "#d9b65c" }}>
                    Your charioteer, always. सदा आपका सारथी
                  </p>
                </div>
              </div>

              {/* the app itself, rising from the panel edge */}
              <div className="relative hidden self-end lg:block" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/phone.webp"
                  alt=""
                  loading="lazy"
                  className="mx-auto -mb-14 w-full max-w-[290px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
