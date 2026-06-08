"use client";

import React, { useState, useRef, useEffect } from "react";

const phoneBgM   = "/images/features/phone_bg_m.webp";
const screenM    = "/images/features/screen_m.webp";
const maskMLight = "/images/features/mask_m_light.webp";

const compassIcon = "/images/icons/compass.svg";
const omIcon = "/images/icons/om.svg";
const literatureIcon = "/images/icons/literature.svg";
const krishnaAiIcon = "/images/icons/krishna_ai.svg";

const rightCards = [
  { title: "Krishna AI", desc: "Talk through what's on your mind and receive clear, grounded guidance.", icon: krishnaAiIcon },
  { title: "Gita for Daily Life", desc: "Choose a situation from your daily life and see how a verse from the Gita helps you understand and navigate it.", icon: compassIcon },
  { title: "Daily stories", desc: "Short 3-4 minute stories and reflections that bring timeless wisdom into your everyday life.", icon: literatureIcon },
  { title: "Bhagavad Gita", desc: "Learn the Gita verse by verse in a clear and structured way, with meaning explained for the life you live today.", icon: omIcon },
];

const mobileCards = [
  { title: "Krishna AI", desc: "Talk through what's on your mind and receive clear, grounded guidance.", bg: "#fbf7ef", tc: "#4c4a48", mask: maskMLight },
  { title: "Daily Stories", desc: "Short 3-4 minute stories and reflections that bring timeless wisdom into your everyday life.", bg: "#fbf7ef", tc: "#4c4a48", mask: maskMLight },
  { title: "Gita For Daily Life", desc: "Choose a situation from your daily life and see how a verse from the Gita helps you understand and navigate it.", bg: "#fbf7ef", tc: "#4c4a48", mask: maskMLight },
  { title: "Bhagavad Gita", desc: "Learn the Gita verse by verse in a clear and structured way, with meaning explained for the life you live today.", bg: "#fbf7ef", tc: "#4c4a48", mask: maskMLight },
];

// ── MOBILE TUNABLES ────────────────────────────────────────────
const PER_CARD_VH = 80;   // scroll distance per card arrival (vh)

/**
 * STACK_BG_PALETTE
 * ----------------
 * Background color for a card based on how many other cards are stacked ON TOP of it.
 *   index 0 → card is the frontmost (no cards on top)        → lightest
 *   index 1 → one card on top                                 → slight shade
 *   index 2 → two cards on top                                → more shade
 *   index 3 → three cards on top (deepest in the stack)       → darkest
 *
 * The interpolation is continuous (done via RGB lerp below), so as a new
 * card slides in, the cards beneath smoothly shift toward their next shade.
 * Tune these hex values to taste — they should all read as "in the same family"
 * so the stack looks cohesive.
 */
const STACK_BG_PALETTE = [
  "#FBF7EF", // 0 cards on top — front (innermost)
  "#C6C1B8", // 1 card on top
  "#89857E", // 2 cards on top
  "#4C4A48", // 3 cards on top — deepest (outermost)
];

/**
 * Text color palette — matches each bg for readability.
 * Dark text on the two lighter bgs, light text on the two darker bgs.
 */
const STACK_TC_PALETTE = [
  "#4c4a48", // on #FBF7EF — dark text
  "#4c4a48", // on #C6C1B8 — dark text (still enough contrast)
  "#f0ece3", // on #89857E — light text
  "#f0ece3", // on #4C4A48 — light text
];
// ───────────────────────────────────────────────────────────────

// Helper: interpolate between two hex colors. t in [0,1].
function lerpHex(a: string, b: string, t: number): string {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ar = (pa >> 16) & 0xff, ag = (pa >> 8) & 0xff, ab = pa & 0xff;
  const br = (pb >> 16) & 0xff, bg = (pb >> 8) & 0xff, bb = pb & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${((r << 16) | (g << 8) | bl).toString(16).padStart(6, "0")}`;
}

/** Pick a color from palette based on continuous "cards above" count (0..N-1) */
function colorForDepth(palette: string[], depth: number): string {
  const clamped = Math.max(0, Math.min(palette.length - 1, depth));
  const lo = Math.floor(clamped);
  const hi = Math.min(palette.length - 1, lo + 1);
  const t = clamped - lo;
  return lerpHex(palette[lo], palette[hi], t);
}

function FeatureCard({
  title, desc, icon, isSelected, onSelect,
}: {
  title: string; desc: string; icon: string; isSelected: boolean; onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const bg = isSelected ? "#4C4A48" : hovered ? "#89857E" : "#F0ECE3";
  const tc = (isSelected || hovered) ? "#f0ece3" : "#4C4A48";

  return (
    <div
      className="relative rounded-[20px] p-7 flex flex-col justify-between cursor-pointer select-none"
      style={{ minHeight: 280, background: bg, transition: "background 0.2s ease" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
    >
      <div className="absolute top-7 right-7" style={{ width: 44, height: 44 }}>
        <img src={icon} alt="" className="w-full h-full object-contain"
          style={{
            filter: (isSelected || hovered) ? "brightness(0) invert(1)" : "brightness(0)",
            transition: "filter 0.2s",
          }} />
      </div>
      <div className="mt-auto">
        <h3 className="font-crimson leading-normal mb-2"
          style={{ fontSize: 20, color: tc }}>
          {title}
        </h3>
        <p className="font-inter leading-6"
          style={{ fontSize: 16, color: tc }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Three pieces of state that drive the mobile render:
  //   phase: 'before' (cards at top, normal flow) | 'pinned' (cards fixed, animating) | 'after' (cards at bottom, normal flow)
  //   progress: 0 → cards-1, continuous float, how many cards have landed
  const [phase, setPhase] = useState<"before" | "pinned" | "after">("before");
  const [progress, setProgress] = useState(0);

  /**
   * THE ALGORITHM
   * =============
   * No sticky. No Framer Motion useScroll. We manually decide the render
   * mode based on the wrapper's position relative to the viewport.
   *
   * Let:
   *   wrapperTop  = wrapper.getBoundingClientRect().top (y in viewport coords)
   *   stackBudget = (cards - 1) * PER_CARD_VH * vh   (total scroll consumed by pinning)
   *
   * The wrapper has height = 100vh + stackBudget. Inside it sits a "stage"
   * area for the cards (taking 100vh conceptually).
   *
   * Phase logic (using wrapperTop):
   *   • wrapperTop > 0   → 'before': cards rendered absolute at TOP of wrapper
   *                         (they scroll up naturally with the page)
   *   • -stackBudget ≤ wrapperTop ≤ 0 → 'pinned': cards rendered FIXED at
   *                         viewport center. progress = -wrapperTop / perCardPx.
   *   • wrapperTop < -stackBudget → 'after': cards rendered absolute at BOTTOM
   *                         of pin range (they scroll up and out with the page)
   *
   * This means the stage SLOT in the wrapper occupies the first 100vh of the
   * wrapper's height. When the wrapper's top is at 0, that slot starts at
   * viewport top. As scrolling continues, the fixed cards stay at viewport
   * center while the wrapper's top goes negative — this is the "pinned"
   * illusion, achieved via position:fixed, not position:sticky.
   */
  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;

      const vh = window.innerHeight;
      const perCardPx = (PER_CARD_VH / 100) * vh;
      const stackBudget = (mobileCards.length - 1) * perCardPx;

      const rect = el.getBoundingClientRect();
      const wrapperTop = rect.top;

      if (wrapperTop > 0) {
        // Section approaching from below — cards scroll up with the page
        setPhase("before");
        setProgress(0);
      } else if (wrapperTop >= -stackBudget) {
        // Section engaged — cards are pinned, scroll drives stacking
        setPhase("pinned");
        const scrolled = -wrapperTop; // 0 → stackBudget
        const raw = scrolled / perCardPx;
        setProgress(Math.max(0, Math.min(raw, mobileCards.length - 1)));
      } else {
        // Section completed — cards fully stacked, scroll up and out with page
        setPhase("after");
        setProgress(mobileCards.length - 1);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /**
   * SCROLL SNAPPING (one scroll = one card)
   * =======================================
   * When the section is in the pinned phase, we intercept wheel/touch events,
   * ignore their magnitude, and programmatically animate window.scrollY to the
   * next (or previous) card's snap point. This guarantees:
   *   • A single scroll gesture always lands exactly one card
   *   • Fast flicks don't skip past multiple cards
   *   • Slow scrolls don't leave cards half-landed
   *
   * SNAP POINTS
   * -----------
   * Let wrapperAbsTop = wrapper's offsetTop from document top.
   * Each card i (for i = 0..cards-1) has a snap scrollY of:
   *   snap(i) = wrapperAbsTop + i * perCardPx
   *
   * At snap(0), wrapperTop in viewport = 0 → progress = 0 (card 0 landed, alone)
   * At snap(1), progress = 1 (card 1 landed on card 0)
   * At snap(i), progress = i (card i landed)
   *
   * RELEASE
   * -------
   * If user scrolls DOWN at card cards-1 (last card), let it through → page
   * scrolls normally into the next section.
   * If user scrolls UP at card 0 (first card), let it through → page scrolls
   * back to prior content.
   * Otherwise: preventDefault, animate to next/prev snap.
   *
   * LOCK DURING ANIMATION
   * ---------------------
   * While a snap animation is in flight, all scroll attempts are blocked.
   * This is what stops fast multi-scrolls from queuing up and skipping cards.
   */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Only hijack on mobile viewport — desktop layout is entirely different
    const mql = window.matchMedia("(max-width: 767px)");
    let isMobile = mql.matches;
    const onMqlChange = (e: MediaQueryListEvent) => { isMobile = e.matches; };
    mql.addEventListener("change", onMqlChange);

    let isAnimating = false;
    let currentSnapIdx = 0;
    let touchStartY = 0;

    const getMetrics = () => {
      const vh = window.innerHeight;
      const perCardPx = (PER_CARD_VH / 100) * vh;
      const wrapperAbsTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const snapCount = mobileCards.length;
      return { vh, perCardPx, wrapperAbsTop, snapCount };
    };

    // Compute current snap index based on where the page is right now.
    const computeCurrentSnap = () => {
      const { perCardPx, wrapperAbsTop, snapCount } = getMetrics();
      const scrolledIn = window.scrollY - wrapperAbsTop;
      const raw = scrolledIn / perCardPx;
      return Math.max(0, Math.min(snapCount - 1, Math.round(raw)));
    };

    // Is the user currently within the hijack-able range?
    const isInPinRange = () => {
      const { perCardPx, wrapperAbsTop, snapCount } = getMetrics();
      const stackBudget = (snapCount - 1) * perCardPx;
      const scrolledIn = window.scrollY - wrapperAbsTop;
      return scrolledIn >= 0 && scrolledIn <= stackBudget;
    };

    /** Animate window.scrollY to targetY with a smooth ease. */
    const animateTo = (targetY: number, duration = 500) => {
      return new Promise<void>((resolve) => {
        const startY = window.scrollY;
        const delta = targetY - startY;
        if (Math.abs(delta) < 1) { resolve(); return; }

        const startTime = performance.now();
        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const t = Math.min(1, elapsed / duration);
          const eased = easeInOutCubic(t);
          window.scrollTo(0, startY + delta * eased);
          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            resolve();
          }
        };
        requestAnimationFrame(tick);
      });
    };

    /** Snap to the snap point at index `i` (clamped). */
    const snapTo = async (i: number) => {
      const { perCardPx, wrapperAbsTop, snapCount } = getMetrics();
      const clamped = Math.max(0, Math.min(snapCount - 1, i));
      const targetY = wrapperAbsTop + clamped * perCardPx;
      isAnimating = true;
      await animateTo(targetY, 550);
      currentSnapIdx = clamped;
      // Brief cooldown prevents the same gesture's residual events from firing another snap
      setTimeout(() => { isAnimating = false; }, 80);
    };

    // ── WHEEL (desktop trackpad / mouse wheel) ───────────────────────
    // Wheel bursts fire many events per gesture — we collapse them via
    // the `isAnimating` lock. First event triggers snap; rest are blocked.
    const onWheel = (e: WheelEvent) => {
      if (!isMobile) return; // don't hijack desktop layout
      if (!isInPinRange()) return;
      if (isAnimating) { e.preventDefault(); return; }

      const dir = e.deltaY > 0 ? 1 : -1;
      currentSnapIdx = computeCurrentSnap();
      const next = currentSnapIdx + dir;

      // Release control at boundaries
      if (next < 0 || next > mobileCards.length - 1) return;

      e.preventDefault();
      snapTo(next);
    };

    // ── TOUCH (mobile) ───────────────────────────────────────────────
    // One swipe = one card. We read touchstart Y, compare to touchend Y,
    // snap in that direction. Magnitude is ignored entirely.
    const onTouchStart = (e: TouchEvent) => {
      if (!isMobile) return;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isMobile) return;
      if (!isInPinRange()) return;
      if (isAnimating) { e.preventDefault(); return; }

      const currentY = e.touches[0].clientY;
      const delta = touchStartY - currentY;
      // Wait until user has moved at least 15px before committing
      if (Math.abs(delta) < 15) { e.preventDefault(); return; }

      const dir = delta > 0 ? 1 : -1;
      currentSnapIdx = computeCurrentSnap();
      const next = currentSnapIdx + dir;

      if (next < 0 || next > mobileCards.length - 1) return; // release at edges

      e.preventDefault();
      snapTo(next);
      touchStartY = currentY; // reset so further movement in same swipe doesn't re-trigger
    };

    // ── KEYBOARD (arrow keys, page up/down) ──────────────────────────
    // Not strictly required but keeps UX consistent.
    const onKey = (e: KeyboardEvent) => {
      if (!isMobile) return;
      if (!isInPinRange()) return;
      if (isAnimating) return;

      const downKeys = ["ArrowDown", "PageDown", " "];
      const upKeys = ["ArrowUp", "PageUp"];
      let dir = 0;
      if (downKeys.includes(e.key)) dir = 1;
      else if (upKeys.includes(e.key)) dir = -1;
      else return;

      currentSnapIdx = computeCurrentSnap();
      const next = currentSnapIdx + dir;
      if (next < 0 || next > mobileCards.length - 1) return;

      e.preventDefault();
      snapTo(next);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);

    return () => {
      mql.removeEventListener("change", onMqlChange);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const activeIdx = Math.round(progress);

  // Compute the stage's position based on phase:
  //   'before': at top of wrapper (absolute top:0, height:100vh)
  //   'pinned': fixed to viewport (position:fixed, top:0, height:100vh)
  //   'after':  at bottom of stage slot in wrapper (absolute top: stackBudget-px, height:100vh)
  // We'll use CSS classes via inline style since positions must be exact.
  const stageStyle: React.CSSProperties = (() => {
    if (phase === "before") {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
      };
    }
    if (phase === "pinned") {
      return {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
      };
    }
    // 'after': parked at the end of the stack budget
    return {
      position: "absolute",
      top: `${(mobileCards.length - 1) * PER_CARD_VH}vh`,
      left: 0,
      right: 0,
      height: "100vh",
    };
  })();

  return (
    <section className="bg-[#ffffff]" style={{ position: "relative" }}>

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      {/*
        Wrapper height = stage (100vh) + stacking budget ((cards-1) × PER_CARD_VH vh)
        The stage is absolutely positioned inside it, and switches to fixed
        during the pinned phase.
      */}
      <div
        ref={wrapperRef}
        className="md:hidden"
        style={{
          position: "relative",
          height: `calc(100vh + ${(mobileCards.length - 1) * PER_CARD_VH}vh)`,
          background: "#fff",

        }}
      >
        {/* THE STAGE — position switches based on phase */}
        <div
          style={{
            ...stageStyle,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          {/* Meta */}
          <div style={{ padding: "40px 20px 16px", flexShrink: 0 }}>

            <p className="font-inter text-[#4c4a48] text-[14px] leading-normal text-center pt-3 max-w-[340px] mx-auto">
              Daily stories, reflections, and structured learning that make the Gita and Indian
              scriptures easier to understand and apply in your life.
            </p>
          </div>

          {/* Card area */}
          <div
            style={{
              flex: 1,
              position: "relative",
              margin: "0 16px 56px",

              minHeight: 0,
            }}
          >
            {mobileCards.map((card, i) => {
              // localProgress: 0 (offscreen right) → 1 (landed center)
              // Card 0 always at 1. Card i animates from 0→1 as progress goes (i-1)→i.
              const localProgress =
                i === 0 ? 1 : Math.max(0, Math.min(1, progress - (i - 1)));

              // Incoming from the right: 110% off → 0 landed
              const translateXPct = (1 - localProgress) * 110;

              // STACKED LOOK: each card lands slightly lower than the previous.
              //   Card 0 → 0px offset
              //   Card 1 → 10px offset
              //   Card 2 → 20px offset ... etc.
              // Multiplied by localProgress so it animates in smoothly as the
              // card arrives (doesn't "pop" into the offset position).
              const STACK_OFFSET_PX = 10; // tighter = smaller, looser = larger
              const translateYPx = i * STACK_OFFSET_PX * localProgress;

              const scale = 0.94 + 0.06 * localProgress;
              const opacity = localProgress === 0 ? 0 : 1;

              /**
               * DEPTH-BASED COLOR
               * -----------------
               * `cardsAbove` counts how many cards are landed ON TOP of this one.
               * A card is "landed on top" of card i when its own localProgress is
               * well past the midway point — we treat it as fully landed only in
               * the final stretch of its arrival animation.
               *
               * For each card j > i, we compute its "landed-ness" from this card's
               * perspective. If card j's localProgress >= 0.7, it counts as 1 (landed).
               * Between 0.7 and 1.0, it counts as a partial (smooth transition).
               * Below 0.7, it counts as 0 — meaning card i stays at its current color
               * while card j is still mid-flight.
               *
               * Net effect:
               *   • Every card is #FBF7EF when it first lands and is still topmost.
               *   • When the NEXT card starts sliding in, the buried card STAYS
               *     #FBF7EF for most of that slide.
               *   • In the last 30% of the new card's landing, the buried card
               *     smoothly shifts to its new depth color.
               *   • This avoids mid-flight color blending, which felt wrong.
               */
              const SHIFT_START = 0.7; // new card must be 70% landed before buried colors shift
              let cardsAbove = 0;
              for (let j = i + 1; j < mobileCards.length; j++) {
                const jLocal = Math.max(0, Math.min(1, progress - (j - 1)));
                // Map jLocal from [SHIFT_START, 1] → [0, 1]; below SHIFT_START → 0
                const contrib = Math.max(0, Math.min(1, (jLocal - SHIFT_START) / (1 - SHIFT_START)));
                cardsAbove += contrib;
              }
              const dynamicBg = colorForDepth(STACK_BG_PALETTE, cardsAbove);
              const dynamicTc = colorForDepth(STACK_TC_PALETTE, cardsAbove);

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 20,
                    overflow: "hidden",
                    background: dynamicBg,
                    boxShadow:
                      "0 -8px 24px rgba(0,0,0,0.06), 0 14px 32px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    transform: `translateX(${translateXPct}%) translateY(${translateYPx}px) scale(${scale})`,
                    opacity,
                    zIndex: 10 + i,
                    willChange: "transform, opacity",
                    transition: "none",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "24px 24px 0",
                      minHeight: 0,
                    }}
                  >
                    <div style={{ position: "relative", width: "100%", maxWidth: 220 }}>
                      <img src={phoneBgM} alt="" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />
                      <img src={screenM} alt={card.title}
                        style={{ position: "absolute", inset: "8%", width: "84%", height: "84%", objectFit: "contain" }} />
                      <img src={card.mask} alt=""
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", pointerEvents: "none" }} />
                    </div>
                  </div>
                  <div style={{ padding: "16px 20px 24px", flexShrink: 0 }}>
                    <p className="font-crimson" style={{ fontSize: 20, lineHeight: 1.3, color: dynamicTc, marginBottom: 4 }}>
                      {card.title}
                    </p>
                    <p className="font-inter" style={{ fontSize: 14, lineHeight: "20px", color: dynamicTc }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Progress dots */}
            <div
              style={{
                position: "absolute",
                right: -4,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                zIndex: 500,
              }}
            >
              {mobileCards.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 5,
                    height: i === activeIdx ? 18 : 5,
                    borderRadius: 3,
                    background: i === activeIdx ? "#4c4a48" : "rgba(76,74,72,0.3)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="hidden md:block py-16 px-6">
        <div className="max-w-[1360px] mx-auto">
          <p className="font-inter text-[#4C4A48] text-center mb-10 max-w-[1190px] mx-auto"
            style={{ fontSize: 18, lineHeight: 1.5 }}>
            Daily stories, reflections, and structured learning that make the Gita and Indian
            scriptures easier to understand and apply in your life.
          </p>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="relative bg-[#f0ece3] rounded-[20px] overflow-hidden flex-shrink-0"
              style={{ width: "100%", maxWidth: 392, minHeight: 480 }}>
              <p className="font-crimson text-[#4c4a48] text-[28px] lg:text-[32px] leading-normal pt-7 pl-7"
                style={{ transition: "all 0.3s" }}>
                {rightCards[selectedIdx].title}
              </p>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center px-6 pb-0">
                <img
                  src="/images/meet_DS/meet_ds_mobile.webp"
                  alt={rightCards[selectedIdx].title}
                  style={{ width: "100%", maxHeight: 380, objectFit: "contain", objectPosition: "bottom" }}
                />
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-5">
              {rightCards.map((card, i) => (
                <FeatureCard
                  key={i}
                  {...card}
                  isSelected={selectedIdx === i}
                  onSelect={() => setSelectedIdx(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
