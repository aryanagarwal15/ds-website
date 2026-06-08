"use client";

import React from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function MeetSection() {
  return (
    <section id="meet" className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(5,52,102,0.04), transparent)",
        }}
      />

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="ds-section lg:hidden">
        <div className="ds-container flex flex-col items-center">
          <SectionHeader
            eyebrow="The companion"
            title="Meet DivineSarathi"
            description="Your personalised, voice-first spiritual companion that brings the wisdom of the Bhagavad Gita and Indian scriptures into your everyday life — simply and clearly, whenever you need it."
            className="mb-10"
          />
          <Reveal delay={0.15}>
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(193,86,15,0.12), transparent 70%)",
                }}
              />
              <img
                src="/images/meet_DS/meet_ds_mobile.webp"
                alt="DivineSarathi app"
                className="relative w-full max-w-[300px] object-contain drop-shadow-elevated"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="ds-section hidden lg:block">
        <div className="ds-container">
          <SectionHeader
            eyebrow="The companion"
            title="Meet DivineSarathi"
            description="Your personalised, voice-first spiritual companion that brings the wisdom of the Bhagavad Gita and Indian scriptures into your everyday life — simply and clearly, whenever you need it."
            className="mb-14"
          />

          <Reveal delay={0.2}>
            <div className="relative mx-auto flex justify-center">
              <div
                className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(193,86,15,0.1), transparent 70%)",
                }}
              />
              <img
                src="/images/meet_DS/meet_ds.webp"
                alt="DivineSarathi app"
                className="relative max-w-[460px] object-contain drop-shadow-elevated"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
