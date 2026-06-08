"use client";

import React from "react";
import Reveal from "./Reveal";

const ellipseM = "/images/return/ellipse_m.webp";
const micM = "/images/return/mic_m.webp";
const knowledgeM = "/images/return/knowledge_m.webp";
const bookM = "/images/return/book_m.webp";
const replayM = "/images/return/replay_m.webp";

const ellipseD = "/images/return/ellipse_d.webp";
const micD = "/images/return/mic_d.webp";
const knowledgeD = "/images/return/knowledge_d.webp";
const bookD = "/images/return/book_d.webp";
const replayD = "/images/return/replay_d.webp";

type RitualStep = {
  step: string;
  title: string;
  desc: string;
  iconM: string;
  iconD: string;
};

const steps: RitualStep[] = [
  {
    step: "01",
    title: "Speak",
    desc: "Share what's on your mind with Krishna AI — as you would with a trusted friend.",
    iconM: micM,
    iconD: micD,
  },
  {
    step: "02",
    title: "Reflect",
    desc: "Receive personalised insights rooted in the wisdom of the Bhagavad Gita.",
    iconM: knowledgeM,
    iconD: knowledgeD,
  },
  {
    step: "03",
    title: "Apply",
    desc: "Turn ancient scripture into clear, actionable guidance for everyday life.",
    iconM: bookM,
    iconD: bookD,
  },
  {
    step: "04",
    title: "Revisit",
    desc: "Build a daily habit of clarity. Return whenever you need stillness.",
    iconM: replayM,
    iconD: replayD,
  },
];

function RitualBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="ritual-orb ritual-orb--1" />
      <div className="ritual-orb ritual-orb--2" />
      <div className="ritual-orb ritual-orb--3" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(5,52,102,0.07) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Flowing path — desktop only, sits above card row */}
      <svg
        className="ritual-flow-line absolute top-[72%] left-[8%] hidden h-px w-[84%] lg:block"
        preserveAspectRatio="none"
        viewBox="0 0 1000 2"
      >
        <line
          x1="0"
          y1="1"
          x2="1000"
          y2="1"
          stroke="rgba(5,52,102,0.08)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <line
          className="ritual-flow-pulse"
          x1="0"
          y1="1"
          x2="120"
          y2="1"
          stroke="rgba(193,86,15,0.35)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function StepIcon({
  ellipse,
  icon,
  size = "md",
}: {
  ellipse: string;
  icon: string;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "h-11 w-11" : "h-14 w-14";
  return (
    <div className={`relative flex-shrink-0 ${dim}`}>
      <img
        src={ellipse}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
      />
      <img
        src={icon}
        alt=""
        className="absolute object-contain"
        style={{ inset: "25%", width: "50%", height: "50%" }}
      />
    </div>
  );
}

function RitualCard({
  step,
  ellipse,
  icon,
  layout,
}: {
  step: RitualStep;
  ellipse: string;
  icon: string;
  layout: "mobile" | "desktop";
}) {
  if (layout === "mobile") {
    return (
      <article className="ritual-card ritual-card--mobile flex h-full items-center gap-4 px-5 py-5">
        <div className="flex flex-col items-center gap-1">
          <span className="font-inter text-[11px] font-medium tracking-widest text-ds-accent/80">
            {step.step}
          </span>
          <StepIcon ellipse={ellipse} icon={icon} size="sm" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-crimson mb-1 text-[19px] leading-none text-ds-navy">
            {step.title}
          </h3>
          <p className="font-inter text-[14px] leading-5 text-ds-text">
            {step.desc}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="ritual-card ritual-card--desktop flex h-[320px] w-full flex-col p-7">
      <div className="mb-6 flex items-start justify-between">
        <span className="font-inter text-[12px] font-medium tracking-[0.14em] text-ds-accent">
          {step.step}
        </span>
        <StepIcon ellipse={ellipse} icon={icon} />
      </div>

      <h3 className="font-crimson mb-4 h-7 text-[26px] leading-none text-ds-navy">
        {step.title}
      </h3>

      <p className="font-inter min-h-[5.5rem] flex-1 text-[15px] leading-relaxed text-ds-text">
        {step.desc}
      </p>

      <div className="ritual-card-accent mt-auto h-px w-full pt-8" />
    </article>
  );
}

export default function ReturnSection() {
  return (
    <section className="relative overflow-hidden bg-ds-cream">
      <RitualBackground />

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="ds-section relative md:hidden">
        <div className="ds-container">
          <Reveal>
            <p className="ds-eyebrow mb-3">Your daily ritual</p>
            <h2
              className="font-crimson font-semibold tracking-tight text-ds-navy"
              style={{ fontSize: "clamp(1.75rem, 6vw, 2rem)" }}
            >
              Not just something you use.
              <br />
              <span className="text-ds-text">Something you return to.</span>
            </h2>
            <p className="font-inter mt-4 max-w-sm text-[16px] leading-relaxed text-ds-text">
              A simple, consistent part of your life — something you come back
              to every day.
            </p>
          </Reveal>

          <div className="relative mt-8 flex flex-col gap-3">
            {/* Vertical timeline */}
            <div
              className="absolute top-6 bottom-6 left-[22px] w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(5,52,102,0.12) 10%, rgba(5,52,102,0.12) 90%, transparent)",
              }}
              aria-hidden
            />

            {steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08} className="h-full">
                <RitualCard
                  step={step}
                  ellipse={ellipseM}
                  icon={step.iconM}
                  layout="mobile"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="ds-section relative hidden md:block">
        <div className="ds-container">
          <Reveal className="mb-14 max-w-3xl">
            <p className="ds-eyebrow mb-4">Your daily ritual</p>
            <h2
              className="font-crimson font-semibold tracking-tight text-ds-navy"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Not just something you use.
              <br />
              <span className="text-ds-text">Something you return to.</span>
            </h2>
            <p className="font-inter mt-5 max-w-2xl text-lg leading-relaxed text-ds-text">
              Built to be a sustainable part of your lifestyle — giving you
              long-term value for your spiritual journey.
            </p>
          </Reveal>

          <div className="ritual-grid grid grid-cols-2 gap-5 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1} className="w-full">
                <RitualCard
                  step={step}
                  ellipse={ellipseD}
                  icon={step.iconD}
                  layout="desktop"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
