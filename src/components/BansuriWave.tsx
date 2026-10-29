"use client";

import { useEffect, useState } from "react";

type BansuriWaveProps = {
  className?: string;
  /** When true the wave lifts higher, as if Krishna is speaking. */
  live?: boolean;
};

const REST =
  "M0,32 C120,32 180,22 300,22 S480,42 600,42 S780,26 900,26 S1080,36 1200,32";
const PEAK_A =
  "M0,32 C120,32 180,8 300,8 S480,56 600,56 S780,14 900,14 S1080,44 1200,32";
const PEAK_B =
  "M0,32 C120,32 180,52 300,52 S480,10 600,10 S780,48 900,48 S1080,20 1200,32";

/**
 * The bansuri wave: a horizontal line that lifts into gentle peaks while
 * Krishna speaks and settles to stillness while listening. Uses SMIL so it
 * breathes in every browser; goes still under prefers-reduced-motion.
 */
export default function BansuriWave({ className = "", live = false }: BansuriWaveProps) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const dur = live ? "3.6s" : "7.2s";

  return (
    <svg
      viewBox="0 0 1200 64"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d={REST}
        stroke="var(--ds-gold-raw)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={live ? 0.95 : 0.7}
      >
        {!reduced && (
          <animate
            attributeName="d"
            dur={dur}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            values={`${REST}; ${PEAK_A}; ${REST}; ${PEAK_B}; ${REST}`}
          />
        )}
      </path>
    </svg>
  );
}
