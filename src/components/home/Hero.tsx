import Link from "next/link";
import StoreButtons from "@/components/StoreButtons";
import KrishnaSession from "./KrishnaSession";

const chips = [
  { label: "English · हिंदी", className: "-top-4 -left-3 -rotate-3", delay: "0s" },
  { label: "Private by design", className: "top-[42%] -right-4 rotate-2", delay: "1.2s" },
  { label: "★ 4.8", className: "-bottom-4 -left-4 rotate-3", delay: "2.4s" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="ds-container grid items-center gap-12 pb-14 pt-[clamp(3rem,7vh,5.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* words */}
        <div className="text-center lg:text-left">
          <p className="eyebrow">Krishna AI · a voice you can talk to</p>

          <h1 className="mt-5 text-[clamp(2.5rem,5.6vw,4rem)] tracking-[-0.01em] text-indigo">
            Whatever is on your mind, talk with Krishna.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft lg:mx-0">
            Say it out loud, in English or Hindi. Krishna listens and answers
            with wisdom from the Gita.
          </p>

          <div className="mt-8 flex flex-col items-center gap-5 lg:items-start">
            <Link href="/download" className="btn btn-primary btn-lg">
              Download free
            </Link>
            <StoreButtons height={44} />
            <p className="text-[0.88rem] text-ink-soft">
              <span className="text-gold" aria-hidden="true">★</span> 4.8 ·
              120+ reviews on the App Store and Google Play
            </p>
          </div>
        </div>

        {/* the product, with Krishna behind it */}
        <div className="relative mx-auto w-full max-w-[440px]">
          {/* breathing glow, the DS hero-moment treatment */}
          <div className="hero-glow" aria-hidden="true" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/krishna_mobile.webp"
            alt=""
            width={1024}
            height={1536}
            fetchPriority="high"
            className="pointer-events-none absolute -top-6 left-1/2 w-[66%] -translate-x-1/2 opacity-95"
            aria-hidden="true"
          />

          <div className="relative mt-[58%]">
            <KrishnaSession />
            {chips.map((chip) => (
              <span
                key={chip.label}
                aria-hidden="true"
                className={`chip-float absolute ${chip.className}`}
                style={{ animationDelay: chip.delay }}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
