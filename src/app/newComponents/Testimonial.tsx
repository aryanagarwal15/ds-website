"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        p.b
          ? <span key={i} className="text-[#053466] font-semibold">{p.t}</span>
          : <span key={i}>{p.t}</span>
      )}
    </>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#ffffff]">
      <style>{equalHeightStyle}</style>

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="md:hidden pt-10 pb-6">
        <h2 className="font-crimson font-semibold text-[#4c4a48] text-center mb-6 px-6"
          style={{ fontSize: "clamp(22px, 7vw, 28px)" }}>
          Voices of trust
        </h2>

        <Swiper
          className="testimonial-swiper"
          loop={true}
          slidesPerView={1.15}
          centeredSlides={true}
          spaceBetween={40}
          pagination={false}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#FBF7EF] rounded-[20px] overflow-hidden flex flex-col h-full">
                <div className="mx-3 mt-3 rounded-[14px] overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <video
                    src={t.video}
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-inter text-[#4c4a48] text-[16px] leading-relaxed mb-3">
                    <Quote parts={t.parts} />
                  </p>
                  <p className="font-inter text-[#4c4a48] text-[14px]">&mdash; {t.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="hidden md:block py-16">
        <div className="max-w-[1360px] mx-auto px-6">
          <h2 className="font-crimson font-semibold text-[#4c4a48] text-center mb-10"
            style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}>
            Voices of trust
          </h2>
        </div>

        <Swiper
          className="testimonial-swiper"
          loop={true}
          slidesPerView={1.4}
          centeredSlides={true}
          spaceBetween={48}
          breakpoints={{
            1024: { slidesPerView: 1.6, spaceBetween: 48 },
            1280: { slidesPerView: 2.1, spaceBetween: 48 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#FBF7EF] rounded-[20px] overflow-hidden flex gap-5 p-6 h-full"
                style={{ border: "1px solid rgba(76,74,72,.12)", minHeight: 280 }}>
                <div className="flex-shrink-0 rounded-[12px] overflow-hidden"
                  style={{ width: 220, height: 220, alignSelf: "center" }}>
                  <video
                    src={t.video}
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-inter text-[#4c4a48] leading-normal mb-4"
                    style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}>
                    <Quote parts={t.parts} />
                  </p>
                  <p className="font-inter text-[#4c4a48] text-[15px]">&mdash; {t.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
