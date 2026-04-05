"use client";

import React, { useState, useEffect } from "react";
import StoreButtons from "./StoreButtons";

const rotatingWords = [
  "Relationships?",
  "Career?",
  "Purpose?",
  "Anxiety?",
  "Decisions?",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
  id="home"
  className="relative flex items-center justify-center min-h-screen px-16 pt-24 pb-12 overflow-hidden
    max-md:flex-col max-md:text-center max-md:px-6 max-md:pt-20 max-md:pb-6"
>
<div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 max-lg:gap-8">
      <div className="flex-1 max-w-[600px] text-center lg:text-left
        max-md:pl-0 max-md:max-w-full max-md:flex max-md:flex-col max-md:items-center max-md:order-2">
        <h1 className="font-garamond leading-[1.1] mb-10 max-md:mb-4">
          <span className="block text-[clamp(2.8rem,5vw,4.2rem)] font-semibold text-[#FF611B] whitespace-nowrap max-md:text-[1.7rem]">
            Need help with
          </span>
          <span
            className={`block text-[clamp(3.2rem,5.5vw,4.8rem)] font-semibold text-[#053466] transition-all duration-400 max-md:text-[2rem] ${
              isAnimating
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {rotatingWords[currentIndex]}
          </span>
        </h1>

        <div className="mb-10 max-md:mb-6">
          <p className="font-cormorant text-[1.5rem] font-medium text-[#FF611B] mb-1.5 max-md:text-[1.2rem]">
            Talk to{" "}
            <span className="text-[#053466] font-semibold">Krishna-AI</span>
          </p>
          <p className="font-cormorant text-[1.15rem] text-[#FF611B] leading-relaxed max-w-[400px] max-md:text-[0.95rem] max-md:max-w-[300px]">
            Let the wisdom of the Gita and our scriptures guide you through life
          </p>
        </div>

       
          <StoreButtons className="flex gap-4 mb-8 max-md:justify-center max-md:gap-3 max-md:mb-5"></StoreButtons>
      

        <p className="font-cormorant text-[1rem] text-[#DA8852] leading-relaxed max-md:text-center max-md:text-[0.85rem] max-md:leading-snug">
          1,000+ users · Wisdom from Gita &amp; Itihāsas · Voice-first ·
          Non-judgmental
        </p>
      </div>

<div className="flex-1 flex items-center justify-center max-w-[500px] w-full relative">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square rounded-full bg-[#FFEFA2] opacity-80 blur-[40px]" />
  <img
    src="/images/Krishna.svg"
    alt="Krishna AI"
    className="relative z-10 w-full max-w-[500px] h-auto object-contain"
  />
</div>
      </div>
    </section>
  );
}

