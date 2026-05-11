"use client";

import React from "react";

const ellipseM   = "/images/return/ellipse_m.webp";
const micM       = "/images/return/mic_m.webp";
const knowledgeM = "/images/return/knowledge_m.webp";
const bookM      = "/images/return/book_m.webp";
const replayM    = "/images/return/replay_m.webp";

const ellipseD   = "/images/return/ellipse_d.webp";
const micD       = "/images/return/mic_d.webp";
const knowledgeD = "/images/return/knowledge_d.webp";
const bookD      = "/images/return/book_d.webp";
const replayD    = "/images/return/replay_d.webp";

const mobileCards = [
  { title: "Speak", desc: "Just as you would to a trusted friend, share your thoughts, doubts or anxieties with Krishna AI.", icon: micM },
  { title: "Reflect", desc: "Receive personalised insights rooted in the timeless wisdom of the Bhagavad Gita and Indian scriptures.", icon: knowledgeM },
  { title: "Practical wisdom", desc: "Ancient scriptures, translated into actionable guidance for modern life.", icon: bookM },
  { title: "Revisit", desc: "Build a daily habit of clarity. Come back whenever you need it.", icon: replayM },
];

const desktopCards = [
  { title: "Speak", desc: "Just as you would to a trusted friend, share your thoughts, doubts or anxieties with Krishna AI.", icon: micD },
  { title: "Reflect", desc: "Receive personalised insights rooted in the timeless wisdom of the Bhagavad Gita and Indian scriptures.", icon: knowledgeD },
  { title: "Practical Wisdom", desc: "Ancient scriptures, translated into actionable guidance for modern life.", icon: bookD },
  { title: "Revisit", desc: "Build a daily habit of clarity. Come back whenever you need it.", icon: replayD },
];

export default function ReturnSection() {
  return (
    <section className="bg-[#fbf7ef]">

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="md:hidden px-4 pt-10 pb-6" style={{ minHeight: "100svh" }}>
        {/* Heading */}
        <div className="mb-5 text-center">
          <p className="font-crimson text-[#4c4a48]" style={{ fontSize: "clamp(22px, 7vw, 28px)" }}>
            Not just something you use.
          </p>
          <p className="font-crimson font-semibold text-[#053466]" style={{ fontSize: "clamp(22px, 7vw, 28px)" }}>
            Something you return to.
          </p>
          <p className="font-inter text-[#4c4a48] text-[16px] leading-normal mt-3 max-w-[361px] mx-auto">
            DivineSarathi will be a simple, consistent part of your life, something you come back to every day.
          </p>
        </div>

        {/* 4 horizontal-row cards — w-full so they fit any screen width */}
        <div className="flex flex-col gap-[10px]">
          {mobileCards.map((card, i) => (
            <div key={i} className="bg-white rounded-[20px] flex items-center gap-3 px-4 w-full"
              style={{ minHeight: 120, maxHeight: 134 }}>
              <div className="relative flex-shrink-0" style={{ width: 32, height: 32 }}>
                <img src={ellipseM} alt="" className="absolute inset-0 w-full h-full object-contain" />
                <img src={card.icon} alt="" className="absolute object-contain"
                  style={{ inset: "25%", width: "50%", height: "50%" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-crimson text-black text-[20px] leading-normal mb-1">{card.title}</p>
                <p className="font-inter text-[#4c4a48] text-[14px] leading-5">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="hidden md:block py-16 px-6">
        <div className="max-w-[1360px] mx-auto">
          <div className="mb-10">
            <p className="font-crimson text-[#4c4a48]" style={{ fontSize: "clamp(28px, 3.8vw, 52px)", lineHeight: 1.15 }}>
              Not just something you use.
            </p>
            <p className="font-crimson font-semibold text-[#053466]" style={{ fontSize: "clamp(28px, 3.8vw, 52px)", lineHeight: 1.15 }}>
              Something you return to.
            </p>
            <p className="font-inter text-[#4c4a48] text-[18px] leading-6 mt-4 max-w-[1052px]">
              We&apos;ve built DivineSarathi to be a sustainable part of your lifestyle, to give you
              long term value for your spiritual journey.
            </p>
          </div>

          {/* 2-col on md, 4-col on lg+ */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {desktopCards.map((card, i) => (
              <div key={i} className="bg-white rounded-[24px] p-6 lg:p-7 flex flex-col justify-between"
                style={{ minHeight: 260 }}>
                <div>
                  <h3 className="font-crimson text-[#4c4a48] text-[28px] lg:text-[32px] leading-normal mb-3">
                    {card.title}
                  </h3>
                  <p className="font-inter text-[#4c4a48] text-[16px] lg:text-[18px] leading-6">
                    {card.desc}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <div className="relative flex-shrink-0" style={{ width: 44, height: 44 }}>
                    <img src={ellipseD} alt="" className="absolute inset-0 w-full h-full object-contain" />
                    <img src={card.icon} alt="" className="absolute object-contain"
                      style={{ inset: "25%", width: "50%", height: "50%" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
