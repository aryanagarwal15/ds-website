"use client";

import React, { useRef, useState } from "react";

const desktopCards = [
  { title: "Overthinking?", img: "/images/feeling-cards/overthinking.webp", bg: "/images/feeling-cards/overthinking_bg.webp", points: ["Thinking about the same thing again and again?", "Finding it hard to make even simple decisions?", "Feeling mentally exhausted?"] },
  { title: "Feeling stuck?", img: "/images/feeling-cards/feeling_stuck.webp", bg: "/images/feeling-cards/feeling_stuck_bg.webp", points: ["Not making the progress you expected?", "Feeling like you're trying, but not moving forward?", "Unsure what your next step should be?"] },
  { title: "Seeking Purpose?", img: "/images/feeling-cards/seeking_purpose.webp", bg: "/images/feeling-cards/seeking_purpose_bg.webp", points: ["Wondering if there's something more to life?", "Looking for deeper meaning in what you do?", "Wanting a stronger sense of direction?"] },
];

const mobileCards = [desktopCards[1], desktopCards[0], desktopCards[2]];

const BAND = 178;

function FeelCard({ card, compact = false }: { card: typeof desktopCards[0]; compact?: boolean }) {
  return (
    <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Full-card background — no blur, just the _bg image */}
      <img src={card.bg} alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />

      {/* In-flow content — flex: 1 so it fills the grid-stretched height */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Inner sharp image — aspect ratio scales with card width */}
        <div style={{
          margin: "16px 13px 0 13px",
          aspectRatio: "4 / 3",
          borderRadius: 16,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <img src={card.img} alt={card.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>

        {/* Text */}
        <div style={{ padding: "14px 16px 24px 16px", display: "flex", flexDirection: "column" }}>
          {compact && (
            <p className="font-inter text-white"
              style={{ fontSize: 13, lineHeight: "16px", margin: "0 0 4px 0", opacity: 0.85 }}>
              Have you ever felt you are
            </p>
          )}
          <div style={{ display: "inline-flex", flexDirection: "column", alignSelf: "flex-start", marginBottom: 12 }}>
            <h3 className="font-crimson font-semibold text-white"
              style={{ fontSize: compact ? 28 : 36, lineHeight: 1.2, margin: "0 0 8px 0" }}>
              {card.title}
            </h3>
            <div style={{ width: "100%", height: 1.5, background: "rgba(255,255,255,0.6)" }} />
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: compact ? 10 : 14 }}>
            {card.points.map((pt, j) => (
              <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, paddingLeft: 4 }}>
                <span style={{ color: "#fff", fontSize: 6, marginTop: 7, flexShrink: 0 }}>●</span>
                <span className="font-inter" style={{ color: "#e8e8e8", fontSize: 16, lineHeight: "20px" }}>
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function FeelingSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goTo = (idx: number) => setActiveIdx(Math.max(0, Math.min(idx, mobileCards.length - 1)));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    // Only respond to horizontal swipes, ignore vertical scrolls
    if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < 40) return;
    goTo(dx > 0 ? activeIdx + 1 : activeIdx - 1);
  };

  return (
    <section className="overflow-hidden">

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="lg:hidden bg-white">

        {/* Carousel viewport — overflow hidden, touch handlers here */}
        <div
          style={{ overflow: "hidden", paddingTop: 32 }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Slide track — shifts left by activeIdx cards */}
          <div style={{
            display: "flex",
            gap: 12,
            paddingLeft: 24,
            paddingBottom: 16,
            transform: `translateX(calc(${-activeIdx} * (85vw + 12px)))`,
            transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}>
            {mobileCards.map((card, i) => (
              <div key={i} style={{ flex: "0 0 85vw" }}>
                <FeelCard card={card} compact />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, paddingBottom: 24 }}>
          {mobileCards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                height: 8,
                width: i === activeIdx ? 24 : 8,
                borderRadius: 4,
                background: i === activeIdx ? "#1a1a1a" : "rgba(0,0,0,0.2)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>

        {/* Cream band */}
        <div className="bg-[#fbf7ef] flex flex-col items-center justify-center px-5 text-center"
          style={{ height: BAND }}>
          <h3 className="font-crimson font-semibold text-[#053466] text-[28px] leading-tight mb-1">
            You&apos;re not alone
          </h3>
          <p className="font-inter text-[#4c4a48] text-[15px] leading-5 max-w-[340px]">
            In today&apos;s fast-moving world, many of us feel this way. But the way we seek guidance
            hasn&apos;t kept up with how we live today. That&apos;s where DivineSarathi comes in.
          </p>
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="hidden lg:block bg-white py-20 px-10">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div className="text-center mb-14" style={{ paddingTop: 40 }}>
            <h2 className="font-crimson font-semibold"
              style={{ fontSize: 36, lineHeight: 1.2, color: "#1a1a1a", margin: "0 0 16px 0" }}>
              Have you ever felt you are
            </h2>
            <div style={{ width: 120, height: 2, background: "#1a1a1a", margin: "0 auto" }} />
          </div>

          {/* No fixed aspect ratio — card height driven by content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {desktopCards.map((card, i) => (
              <FeelCard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
