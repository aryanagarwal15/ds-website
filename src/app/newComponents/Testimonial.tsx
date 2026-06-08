"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionHeader from "./SectionHeader";

const equalHeightStyle = `
  .testimonial-swiper .swiper-wrapper { align-items: stretch; }
  .testimonial-swiper .swiper-slide   { height: auto; }
`;

const testimonials = [
  {
    video: "/videos/testimonials/women_1.mp4",
    parts: [
      { t: "\u201cAfter 3 minutes with Krishna\u2011AI, I finally ", b: false },
      { t: "paused instead of reacting.", b: true },
      { t: " My 1:1 meeting at work went so much better.\u201d", b: false },
    ],
    name: "Ananya, 29",
  },
  {
    video: "/videos/testimonials/man_1.mp4",
    parts: [
      { t: "\u201cFive minutes with a story and ", b: false },
      { t: "I\u2019m calmer for the whole day.", b: true },
      { t: "\u201d", b: false },
    ],
    name: "Rahul, 33",
  },
  {
    video: "/videos/testimonials/women_3.mp4",
    parts: [
      { t: "\u201cMy 10-year-old asked what karma meant. ", b: false },
      { t: "We listened together.", b: true },
      { t: "\u201d", b: false },
    ],
    name: "Neha, 37",
  },
  {
    video: "/videos/testimonials/man_3.mp4",
    parts: [
      { t: "\u201cThe Gita never felt this ", b: false },
      { t: "relevant to my life before.", b: true },
      { t: "\u201d", b: false },
    ],
    name: "Arjun, 41",
  },
  {
    video: "/videos/testimonials/women_4.mp4",
    parts: [
      { t: "\u201cI open the app every morning. It\u2019s become ", b: false },
      { t: "my moment of stillness.", b: true },
      { t: "\u201d", b: false },
    ],
    name: "Priya, 31",
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

function TestimonialCard({
  t,
  layout,
}: {
  t: (typeof testimonials)[0];
  layout: "mobile" | "desktop";
}) {
  if (layout === "mobile") {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-ds-navy/[0.06] bg-ds-cream">
        <div className="mx-3 mt-3 overflow-hidden rounded-2xl" style={{ aspectRatio: "1/1" }}>
          <video
            src={t.video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-5">
          <p className="font-inter mb-3 text-[16px] leading-relaxed text-ds-text">
            <Quote parts={t.parts} />
          </p>
          <p className="font-inter text-[14px] text-ds-text-muted">&mdash; {t.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="ds-card flex h-full gap-5 rounded-3xl p-6"
      style={{ minHeight: 280 }}
    >
      <div
        className="flex-shrink-0 self-center overflow-hidden rounded-2xl"
        style={{ width: 220, height: 220 }}
      >
        <video
          src={t.video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p
          className="font-inter mb-4 leading-relaxed text-ds-text"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
        >
          <Quote parts={t.parts} />
        </p>
        <p className="font-inter text-[15px] text-ds-text-muted">&mdash; {t.name}</p>
      </div>
    </div>
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
            eyebrow="Real stories"
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
          <SectionHeader eyebrow="Real stories" title="Voices of trust" />
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
