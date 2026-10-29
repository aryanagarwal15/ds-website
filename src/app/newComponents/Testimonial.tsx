"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionHeader from "./SectionHeader";

const equalHeightStyle = `
  .testimonial-swiper .swiper-wrapper { align-items: stretch; }
  .testimonial-swiper .swiper-slide   { height: auto; }
`;

const APP_STORE_URL = "https://apps.apple.com/in/app/divinesarathi/id6752269118?see-all=reviews";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=in.divinesarathi&showAllReviews=true";

// Real reviews, quoted word for word from the stores ("…" marks a cut).
// Play shows full names, so we use first name and initial; App Store names are as shown there.
const testimonials = [
  {
    parts: [
      { t: "“I just felt peace, happy and calm. … ", b: false },
      { t: "Talking with Krishna even though it is AI I felt that I was really talking to Krishna ji.", b: true },
      { t: "”", b: false },
    ],
    name: "Ganga P.",
    store: "Google Play",
    date: "Oct 2026",
  },
  {
    parts: [
      { t: "“This Krishna AI is just perfect for me to ", b: false },
      { t: "speak about my day, my fears and learn about Bhagavad Gita.", b: true },
      { t: "”", b: false },
    ],
    name: "mac chavan",
    store: "App Store",
    date: "Jun 2026",
  },
  {
    parts: [
      { t: "“The stories, Gita learnings, and Krishna AI conversations feel ", b: false },
      { t: "very very simple, soothing, and meaningful.", b: true },
      { t: "”", b: false },
    ],
    name: "Naman G.",
    store: "Google Play",
    date: "May 2026",
  },
  {
    parts: [
      { t: "“The best app to explore spirituality. ", b: false },
      { t: "I never realised Gita can be taught like this.", b: true },
      { t: "”", b: false },
    ],
    name: "Anitamanish92",
    store: "App Store",
    date: "Apr 2026",
  },
  {
    parts: [
      { t: "“Sarathi Krishna AI is truly a beautiful support. ", b: false },
      { t: "It gives me peace, guidance and positive energy whenever I need it.", b: true },
      { t: "”", b: false },
    ],
    name: "Sakshi K.",
    store: "Google Play",
    date: "Aug 2026",
  },
];

function Quote({ parts }: { parts: { t: string; b: boolean }[] }) {
  return (
    <>
      {parts.map((p, i) =>
        p.b ? (
          <span key={i} className="font-medium text-ds-navy">
            {p.t}
          </span>
        ) : (
          <span key={i}>{p.t}</span>
        )
      )}
    </>
  );
}

function Stars() {
  return (
    <div className="mb-4 flex gap-1 text-[#8A6D1F]" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  layout,
}: {
  t: (typeof testimonials)[0];
  layout: "mobile" | "desktop";
}) {
  const href = t.store === "App Store" ? APP_STORE_URL : PLAY_STORE_URL;
  const mobile = layout === "mobile";
  return (
    <figure
      className={
        mobile
          ? "flex h-full flex-col rounded-[1.25rem] border border-ds-navy/[0.06] bg-ds-cream p-6"
          : "ds-card flex h-full flex-col rounded-3xl p-8"
      }
    >
      <Stars />
      <blockquote
        className={`font-inter flex-1 leading-relaxed text-ds-text ${mobile ? "text-[17px]" : ""}`}
        style={mobile ? undefined : { fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)" }}
      >
        <Quote parts={t.parts} />
      </blockquote>
      <figcaption className={`font-inter mt-5 text-ds-text-muted ${mobile ? "text-[14px]" : "text-[15px]"}`}>
        <span className="text-ds-text">{t.name}</span>
        {" · "}
        <a href={href} target="_blank" rel="noopener" className="underline decoration-ds-navy/20 underline-offset-4 hover:text-ds-navy">
          {t.store}
        </a>
        {" · "}
        {t.date}
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white">
      <style>{equalHeightStyle}</style>

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="ds-section md:hidden">
        <div className="ds-container mb-8">
          <SectionHeader
            eyebrow="From the App Store and Google Play"
            title="Voices of trust"
            align="left"
          />
        </div>

        <Swiper
          className="testimonial-swiper"
          loop
          slidesPerView={1.12}
          centeredSlides
          spaceBetween={16}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard t={t} layout="mobile" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="ds-section hidden md:block">
        <div className="ds-container mb-12">
          <SectionHeader eyebrow="From the App Store and Google Play" title="Voices of trust" />
        </div>

        <Swiper
          className="testimonial-swiper"
          loop
          slidesPerView={1.4}
          centeredSlides
          spaceBetween={32}
          breakpoints={{
            1024: { slidesPerView: 1.6, spaceBetween: 40 },
            1280: { slidesPerView: 2.1, spaceBetween: 48 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard t={t} layout="desktop" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
