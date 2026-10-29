"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/testimonials";

/** Scroll-snap testimonial rail. No carousel library, no autoplay pressure. */
export default function TestimonialRail() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : 360;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div ref={railRef} className="snap-rail ds-container" role="list">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            role="listitem"
            className="dcard w-[82vw] max-w-sm overflow-hidden sm:w-[360px]"
          >
            <div className="m-3 overflow-hidden rounded-xl" style={{ aspectRatio: "1 / 1" }}>
              <video
                src={t.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="px-5 pb-5 pt-1">
              <blockquote className="text-[1rem] leading-relaxed text-ink-soft">
                &ldquo;{t.quote}
                <strong className="font-medium text-indigo">{t.highlight}</strong>
                {t.after}&rdquo;
              </blockquote>
              <p className="mt-3 text-[0.88rem] text-ink-muted">{t.name}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="ds-container mt-5 flex justify-center gap-3 md:justify-end">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous testimonial"
          className="btn btn-secondary h-11 w-11 !min-h-0 !p-0"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next testimonial"
          className="btn btn-secondary h-11 w-11 !min-h-0 !p-0"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
