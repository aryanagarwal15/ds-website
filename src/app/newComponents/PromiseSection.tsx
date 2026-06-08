"use client";

import React from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const items = [
  { icon: "/images/promise/block_mic_d.webp", label: "No recordings saved" },
  { icon: "/images/promise/user_shield_d.webp", label: "Private & secure" },
  { icon: "/images/promise/scales_d.webp", label: "Unbiased guidance" },
  { icon: "/images/promise/scroll_d.webp", label: "Rooted in scripture" },
];

export default function PromiseSection() {
  return (
    <section className="ds-section bg-white">
      <div className="ds-container">
        <SectionHeader
          eyebrow="Our commitment"
          title="The DivineSarathi Promise"
          className="mb-12 md:mb-16"
        />

        {/* Mobile: infinite ticker */}
        <div
          className="overflow-hidden md:hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="promise-ticker flex gap-10" style={{ width: "max-content" }}>
            {[...items, ...items, ...items].map((item, i) => (
              <div key={i} className="flex flex-shrink-0 items-center gap-3">
                <img
                  src={item.icon}
                  alt=""
                  className="h-6 w-6 object-contain opacity-80"
                />
                <span className="font-inter whitespace-nowrap text-[15px] text-ds-text">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: refined grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group flex flex-col items-center rounded-3xl border border-ds-navy/[0.06] bg-ds-cream/50 px-6 py-10 text-center transition-colors duration-300 hover:bg-ds-cream">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={item.icon}
                    alt=""
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <p className="font-inter text-[17px] leading-snug font-medium text-ds-navy">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
