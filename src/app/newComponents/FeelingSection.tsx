"use client";

import React, { useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const desktopCards = [
  {
    title: "Overthinking?",
    img: "/images/feeling-cards/overthinking.webp",
    bg: "/images/feeling-cards/overthinking_bg.webp",
    points: [
      "Thinking about the same thing again and again?",
      "Finding it hard to make even simple decisions?",
      "Feeling mentally exhausted?",
    ],
  },
  {
    title: "Feeling stuck?",
    img: "/images/feeling-cards/feeling_stuck.webp",
    bg: "/images/feeling-cards/feeling_stuck_bg.webp",
    points: [
      "Not making the progress you expected?",
      "Feeling like you're trying, but not moving forward?",
      "Unsure what your next step should be?",
    ],
  },
  {
    title: "Seeking Purpose?",
    img: "/images/feeling-cards/seeking_purpose.webp",
    bg: "/images/feeling-cards/seeking_purpose_bg.webp",
    points: [
      "Wondering if there's something more to life?",
      "Looking for deeper meaning in what you do?",
      "Wanting a stronger sense of direction?",
    ],
  },
];

const mobileCards = [desktopCards[1], desktopCards[0], desktopCards[2]];

function FeelCard({
  card,
  compact = false,
}: {
  card: (typeof desktopCards)[0];
  compact?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] transition-transform duration-500 ease-out hover:scale-[1.02]">
      <img
        src={card.bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/55" />

      <div className="relative flex flex-1 flex-col">
        <div className="mx-3.5 mt-3.5 aspect-[4/3] flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/20">
          <img
            src={card.img}
            alt={card.title}
            className="block h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col p-4 pb-6">
          {compact && (
            <p className="font-inter mb-1 text-[13px] leading-4 text-white/80">
              Have you ever felt you are
            </p>
          )}
          <div className="mb-3 inline-flex flex-col self-start">
            <h3
              className="font-crimson font-semibold leading-tight text-white"
              style={{ fontSize: compact ? 28 : 36 }}
            >
              {card.title}
            </h3>
            <div className="mt-2 h-px w-full bg-white/50" />
          </div>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {card.points.map((pt, j) => (
              <li key={j} className="flex items-start gap-2.5 pl-1">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white/90" />
                <span className="font-inter text-[15px] leading-5 text-white/90">
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function FeelingSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goTo = (idx: number) =>
    setActiveIdx(Math.max(0, Math.min(idx, mobileCards.length - 1)));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < 40) return;
    goTo(dx > 0 ? activeIdx + 1 : activeIdx - 1);
  };

  return (
    <section className="overflow-hidden bg-white">
      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="lg:hidden">
        <div className="ds-container pt-12 pb-2">
          <SectionHeader
            eyebrow="Sound familiar?"
            title="Have you ever felt you are"
            align="left"
          />
        </div>

        <div
          className="overflow-hidden pb-4"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex gap-3 pl-6 pb-2"
            style={{
              transform: `translateX(calc(${-activeIdx} * (82vw + 12px)))`,
              transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
          >
            {mobileCards.map((card, i) => (
              <div key={i} className="w-[82vw] flex-shrink-0">
                <FeelCard card={card} compact />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-8">
          {mobileCards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="border-none p-0 transition-all duration-300"
              style={{
                height: 6,
                width: i === activeIdx ? 20 : 6,
                borderRadius: 3,
                background:
                  i === activeIdx ? "var(--ds-navy)" : "rgba(5, 52, 102, 0.15)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="ds-section hidden lg:block">
        <div className="ds-container">
          <SectionHeader
            eyebrow="Sound familiar?"
            title="Have you ever felt you are"
            className="mb-16"
          />

          <div className="grid grid-cols-3 gap-5">
            {desktopCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <FeelCard card={card} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Unified "not alone" bridge ─────────────────────────── */}
      <div className="relative overflow-hidden bg-ds-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(193,86,15,0.08), transparent)",
          }}
        />
        <div className="ds-container relative py-16 text-center md:py-20">
          <Reveal>
            <p className="ds-eyebrow mb-4">You&apos;re not alone</p>
            <h3
              className="font-crimson font-semibold tracking-tight text-ds-navy"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Guidance hasn&apos;t kept up with how we live today.
            </h3>
            <p
              className="font-inter mx-auto mt-5 max-w-2xl leading-relaxed text-ds-text"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
            >
              In today&apos;s fast-moving world, many of us feel this way.
              DivineSarathi brings timeless wisdom into the rhythm of your
              everyday life.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
