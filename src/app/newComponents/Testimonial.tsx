"use client";

import React from "react";
import StoreButtons from "./StoreButtons";

const testimonials = [
  {
    parts: [
      { text: "“After 3 minutes with Krishna-AI, I finally ", bold: false },
      { text: "paused instead of reacting.", bold: true },
      { text: " My 1:1 meeting at work went so much better.”", bold: false },
    ],
    name: "Ananya",
    age: 29,
  },
  {
    parts: [
      { text: "“Five minutes with a story and ", bold: false },
      { text: "I’m calmer for the whole day.", bold: true },
      { text: "”", bold: false },
    ],
    name: "Rahul",
    age: 33,
  },
  {
    parts: [
      { text: "“My 10-year-old asked what karma meant. ", bold: false },
      { text: "We listened together.", bold: true },
      { text: "”", bold: false },
    ],
    name: "Neha",
    age: 37,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#f7efe6] overflow-observable"
    >
      {/* Tree Background (LEFT only) */}
      <div className="absolute left-0 bottom-0 w-[55%] hidden md:block pointer-events-none">
        <img
          src="/images/testimonial_tree.svg"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative z-10 px-[6%] pt-12 pb-0 max-md:px-6 max-md:pt-14">
        {/* Heading */}
        <h2 className=" hidden md:block font-garamond text-[clamp(2.2rem,4vw,3.4rem)] text-[#D9712C] text-center mb-4 font-semibold">
          Voices of Trust
        </h2>

        {/* Desktop Cards */}
        <div className="hidden md:flex justify-center gap-5 mx-auto max-w-[1200px]">
          {testimonials.map((t, i) => (
            <div
            key={i}
           className="flex-1
            border border-[#C86A2B]/50
            rounded-[28px] rounded-tl-[56px]
            px-12 py-8
            bg-[#EFE6D8]/20
            backdrop-blur-md
            text-center
            flex flex-col justify-center
            min-h-[360px]"
            >
            <p className="font-garamond text-[1.6rem] font-semibold text-[#5A2A0A] leading-relaxed italic mb-8">
                {t.parts.map((part, j) =>
                part.bold ? (
                    <span key={j} className="text-[#0B3D6B] font-bold">
                    {part.text}
                    </span>
                ) : (
                    <span key={j}>{part.text}</span>
                )
                )}
            </p>

            <p className="font-garamond text-[1.6rem] font-semibold text-[#5A2A0A]">
                — {t.name}, {t.age}
            </p>
            </div>

          ))}
        </div>

        {/* Mobile - stacked with sacred geometry bg */}
        <div className="md:hidden relative max-w-[380px] mx-auto mb-14">
        <div className="relative 
        bg-[#E6DCCB]/80
        backdrop-blur-md
        border border-[#C86A2B]/40
        rounded-[28px]
        px-6 py-10"
        >
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
            src="/images/logo_without_text.png"
            alt=""
            className="w-[95%] opacity-[0.15]"
        />
        </div>
            <h3 className="relative z-10 font-garamond text-[1.6rem] text-[#D9712C] text-center font-semibold mb-8">
            Voices of Trust
            </h3>

            <div className="relative z-10 flex flex-col gap-10">
            {testimonials.map((t, i) => (
                <div
                key={i}
                className={i === 1 ? "text-right" : "text-left"}
                >
                <p className="font-garamond text-[1.1rem] text-[#D9712C] font-semibold leading-[1.6] italic">
                    {t.parts.map((part, j) =>
                    part.bold ? (
                        <span key={j} className="text-[#053466] font-bold">
                        {part.text}
                        </span>
                    ) : (
                        <span key={j}>{part.text}</span>
                    )
                    )}
                </p>

                <p className="font-garamond text-[1.1rem] text-[#D9712C] font-semibold mt-2">
                    — {t.name}, {t.age}
                </p>
                </div>
            ))}
            </div>
        </div>
        </div>


        {/* CTA */}
        <div className="flex flex-col items-center pt-24 pb-12 max-md:pt-2">
          <h3 className="font-garamond text-[clamp(1.6rem,4vw,3rem)] text-[#D9712C] font-bold mb-10 text-center">
            Begin your journey today
          </h3>

          <StoreButtons
            className="justify-center"
            badgeHeight="h-16"
            mobileBadgeHeight="max-md:h-[46px]"
          />
        </div>
      </div>
    </section>
  );
}
