"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { BansuriIcon, DiyaIcon, FeatherIcon, LotusIcon, MalaIcon } from "@/components/icons";

const features = [
  { label: "Daily Puja", Icon: DiyaIcon, image: "/images/screens/daily-puja.png" },
  { label: "Krishna AI", Icon: FeatherIcon, image: "/images/screens/krishna-ai.png" },
  { label: "Read Bhagavad Gita", Icon: MalaIcon, image: "/images/screens/read-gita.png" },
  { label: "Meditation", Icon: BansuriIcon, image: "/images/screens/meditation.png" },
  { label: "Gita for Daily Life", Icon: LotusIcon, image: "/images/screens/gita-daily-life.png" },
];

/** A quick tour of what is inside the app, between Why and the testimonials. */
export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section className="ds-section" aria-labelledby="features-heading">
      <div className="ds-container">
        <Reveal>
          <SectionHeader eyebrow="Inside DivineSarathi" title="Everything in one companion" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-[230px]">
            <div
              className="feature-phone relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] border bg-surface"
              style={{ borderColor: "var(--ds-line)", boxShadow: "var(--ds-shadow-3)" }}
            >
              {features.map((feature, i) => (
                <Image
                  key={feature.image}
                  src={feature.image}
                  alt={`${feature.label} screen in the DivineSarathi app`}
                  fill
                  sizes="230px"
                  className="feature-screen object-cover"
                  style={{ opacity: i === active ? 1 : 0 }}
                  priority={i === 0}
                />
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.label} delay={i * 70}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="feature-tab flex w-full flex-col items-center gap-3 rounded-2xl border px-4 py-5 text-center"
                  style={{
                    borderColor: i === active ? "var(--ds-gold-raw)" : "var(--ds-line-soft)",
                    background: i === active ? "var(--ds-gold-soft)" : "transparent",
                  }}
                >
                  <span className="feature-badge inline-flex items-center justify-center text-indigo">
                    <feature.Icon size={24} />
                  </span>
                  <span className="text-[0.95rem] font-medium text-indigo">{feature.label}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
