"use client";

import { useEffect, useRef, useState } from "react";
import BansuriWave from "@/components/BansuriWave";

/**
 * An animated recreation of the app's Krishna AI session screen.
 * Cycles through three real examples, each moving through listening, the
 * user speaking, Krishna answering, and the verse settling in. Ceremony
 * tempo, ~16s loop per example. Under reduced motion it holds the first
 * example's answer state as a still frame.
 */

const EXAMPLES = [
  {
    user: "My appraisal is tomorrow. My mind will not slow down.",
    krishna:
      "Arjuna felt this before the battle too. Do your work well tomorrow. The result is not yours to carry tonight.",
    citation: "Bhagavad Gita 2.47",
  },
  {
    user: "I keep comparing my life to everyone else's.",
    krishna:
      "Your own path, walked imperfectly, is worth more than someone else's, walked well. Keep to what is yours.",
    citation: "Bhagavad Gita 3.35",
  },
  {
    user: "I can't sleep. My thoughts will not stop.",
    krishna:
      "The mind is restless, hard to hold still. But little by little, with steady practice, it settles.",
    citation: "Bhagavad Gita 6.35",
  },
];

type Phase = "listening" | "user" | "krishna" | "verse";

const PHASES: { phase: Phase; ms: number }[] = [
  { phase: "listening", ms: 2600 },
  { phase: "user", ms: 3800 },
  { phase: "krishna", ms: 6200 },
  { phase: "verse", ms: 3400 },
];

function useTypewriter(text: string, active: boolean, speed: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);

  return active ? text.slice(0, count) : "";
}

export default function KrishnaSession() {
  const [reduced, setReduced] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [exampleIndex, setExampleIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    timerRef.current = setTimeout(() => {
      const next = (phaseIndex + 1) % PHASES.length;
      if (next === 0) {
        setExampleIndex((e) => (e + 1) % EXAMPLES.length);
      }
      setPhaseIndex(next);
    }, PHASES[phaseIndex].ms);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phaseIndex, reduced]);

  const phase: Phase = reduced ? "krishna" : PHASES[phaseIndex].phase;
  const example = EXAMPLES[reduced ? 0 : exampleIndex];

  const userText = useTypewriter(example.user, phase === "user", 42);
  const krishnaText = useTypewriter(example.krishna, phase === "krishna" && !reduced, 40);

  const showUser = phase === "user" || phase === "krishna" || phase === "verse";
  const showKrishna = phase === "krishna" || phase === "verse";
  const speaking = phase === "krishna";

  const status =
    phase === "listening"
      ? "Krishna is listening…"
      : phase === "user"
        ? "Listening to you"
        : speaking
          ? "Krishna is speaking"
          : "Session continues";

  return (
    <div
      className="dcard relative mx-auto w-full max-w-[380px] overflow-hidden px-5 pb-5 pt-4"
      role="img"
      aria-label="A conversation in the DivineSarathi app: you speak your worry, Krishna answers with wisdom from the Gita"
    >
      {/* session header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* mor pankh: the Krishna AI glyph */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21c0-6 1-12 6-16"
              stroke="var(--ds-indigo)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <ellipse cx="16.5" cy="6.5" rx="4.2" ry="5.4" transform="rotate(35 16.5 6.5)" stroke="var(--ds-indigo)" strokeWidth="1.6" />
            <circle cx="16.8" cy="6.2" r="1.5" fill="var(--ds-gold-raw)" />
          </svg>
          <span className="text-[0.85rem] font-semibold text-ink">Krishna AI</span>
        </div>
        <span className="text-[0.75rem] text-ink-muted" aria-live="polite">
          {status}
        </span>
      </div>

      {/* the wave */}
      <BansuriWave live={speaking || phase === "listening"} className="mt-3 h-10 w-full" />

      {/* captions */}
      <div className="mt-2 flex min-h-[230px] flex-col justify-start gap-3">
        <div
          className="self-end rounded-2xl rounded-br-md px-4 py-2.5 text-[0.88rem] leading-relaxed text-ink transition-opacity duration-500"
          style={{
            background: "var(--ds-gold-soft)",
            opacity: showUser ? 1 : 0,
            maxWidth: "88%",
          }}
        >
          {phase === "user" ? userText : example.user}
        </div>

        <div
          className="self-start rounded-2xl rounded-bl-md border px-4 py-2.5 text-[0.88rem] leading-relaxed text-ink-soft transition-opacity duration-500"
          style={{
            background: "var(--ds-surface)",
            borderColor: "var(--ds-line-soft)",
            opacity: showKrishna ? 1 : 0,
            maxWidth: "92%",
          }}
        >
          {reduced || phase === "verse" ? example.krishna : krishnaText}
        </div>

        <div
          className="flex items-center gap-2 self-start transition-all duration-700"
          style={{
            opacity: phase === "verse" || reduced ? 1 : 0,
            transform: phase === "verse" || reduced ? "none" : "translateY(8px)",
          }}
        >
          <span
            className="rounded-full px-3 py-1 text-[0.72rem] font-semibold text-gold"
            style={{ background: "var(--ds-gold-soft)" }}
          >
            {example.citation}
          </span>
          <span className="text-[0.72rem] text-ink-muted">Saved to your History</span>
        </div>
      </div>
    </div>
  );
}
