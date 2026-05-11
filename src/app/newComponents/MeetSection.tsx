"use client";

import React from "react";

export default function MeetSection() {
  return (
    <section id="meet" className="bg-white overflow-hidden">

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="lg:hidden flex flex-col items-center px-6 pt-14 pb-0">
        <h2 className="font-crimson font-semibold text-[#053466] text-center mb-4"
            style={{ fontSize: "clamp(26px, 7vw, 32px)" }}>
          Meet DivineSarathi
        </h2>
        <p className="font-inter text-[#4c4a48] text-[16px] leading-6 text-center max-w-[340px] mb-8">
          Your personalised, voice-first spiritual companion that brings the wisdom of the Bhagavad
          Gita and Indian scriptures into your everyday life, simply and clearly, whenever you need it.
        </p>
        {/* Phone image — flush to bottom, no padding below */}
        <img
          src="/images/meet_DS/meet_ds_mobile.webp"
          alt="DivineSarathi app"
          className="w-full max-w-[320px] object-contain"
        />
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-col items-center px-10 pt-20 pb-0">
        <h2 className="font-crimson font-semibold text-[#053466] text-center mb-5"
            style={{ fontSize: "clamp(36px, 3.5vw, 52px)" }}>
          Meet DivineSarathi
        </h2>
        <p className="font-inter text-[#4c4a48] text-center mb-12"
           style={{ fontSize: 18, lineHeight: "28px", maxWidth: 640 }}>
          Your personalised, voice-first spiritual companion that brings the wisdom of the
          Bhagavad Gita and Indian scriptures into your everyday life, simply and clearly,
          whenever you need it.
        </p>
        {/* Phone image — flush to bottom */}
        <img
          src="/images/meet_DS/meet_ds.webp"
          alt="DivineSarathi app"
          className="object-contain"
          style={{ maxWidth: 480, width: "100%" }}
        />
      </div>
    </section>
  );
}
