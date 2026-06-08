// GuidanceSection.tsx
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StoreButtons from "./StoreButtons";

const guidanceCards = [
  {
    question: "Stressed after a tough day?",
    image: "/images/guidance/Guide1.webp",
    answer: "Krishna-AI shows you a 2-minute steadiness practice.",
  },
  {
    question: "Feeling unseen in your relationship?",
    image: "/images/guidance/Guide2.webp",
    answer:
      "Hear a story from Krishna-AI and learn to stay grounded when you feel invisible.",
  },
  {
    question: "Feeling stuck or anxious?",
    image: "/images/guidance/Guide3.webp",
    answer: "Krishna-AI helps you build discipline and clarity.",
  },
];

const AUTO_SLIDE_INTERVAL = 6500;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function GuidanceSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const totalDesktopPages = Math.ceil(guidanceCards.length / 2);

    const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
        setDirection(1);
        setCurrentPage((prev) => {
        const isMobile = window.innerWidth < 768;
        const total = isMobile ? guidanceCards.length : totalDesktopPages;
        return (prev + 1) % total;
        });
    }, AUTO_SLIDE_INTERVAL);
    }, [totalDesktopPages]);

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [resetAutoSlide]);

  const changePage = (newPage: number, dir: number) => {
    setDirection(dir);
    setCurrentPage(newPage);
    resetAutoSlide();
  };



  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handlePrev = () => {
  const isMobile = window.innerWidth < 768;
  const total = isMobile ? guidanceCards.length : totalDesktopPages;
  const prev = (currentPage - 1 + total) % total;
  changePage(prev, -1);
};

const handleNext = () => {
  const isMobile = window.innerWidth < 768;
  const total = isMobile ? guidanceCards.length : totalDesktopPages;
  const next = (currentPage + 1) % total;
  changePage(next, 1);
};

const handleTouchEnd = () => {
  const diff = touchStartX.current - touchEndX.current;
  const threshold = 50;
  const total = guidanceCards.length;

  if (diff > threshold) {
    changePage((currentPage + 1) % total, 1);
  } else if (diff < -threshold) {
    changePage((currentPage - 1 + total) % total, -1);
  }
};
  return (
    <section id="guidance" className="py-8 px-4 max-md:py-8">
      <h2 className="font-garamond text-[clamp(1.6rem,4vw,3rem)] text-[#D9712C] text-center mb-2 max-md:mb-2 max-md:px-4 font-bold">
        When life gets hard, here&apos;s help from the Gita &amp; our
        scriptures
      </h2>

      {/* Desktop */}
      <div className="hidden md:block relative max-w-[1100px] mx-auto">
        <div className="relative">
          <img src="/images/web_scroll.svg" alt="" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center px-[12%] py-[8%] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full flex items-start justify-center gap-8"
              >
                {guidanceCards
                  .slice(currentPage * 2, currentPage * 2 + 2)
                  .map((card, i) => (
                    <div
                      key={i}
                      className="w-[280px] shrink-0 flex flex-col items-center text-center gap-3"
                    >
                      <p className="font-garamond text-[1.2rem] text-[#491F04] font-medium h-[56px] flex items-center">
                        {card.question}
                      </p>
                      <img
                        src={card.image}
                        alt={card.question}
                        className="w-[220px] h-[220px] object-cover rounded-sm shrink-0"
                      />
                      <p className="font-garamond text-[1.1rem] font-bold text-[#053466] max-w-[260px] h-[56px] flex items-center">
                        {card.answer}
                      </p>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handlePrev}
            className={`absolute left-[6%] top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-7xl transition-colors ${
              currentPage === 0 ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-[6%] top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-7xl transition-colors ${
              currentPage >= totalDesktopPages - 1
                ? "opacity-30 pointer-events-none"
                : ""
            }`}
          >
            ›
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="md:hidden relative max-w-[360px] mx-auto touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative">
          <img
            src="/images/mobile_scroll.svg"
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[15%] py-[10%] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <p className="font-garamond text-[1.05rem] text-[#3d3226] text-center mb-0 h-[48px] flex items-center shrink-0">
                  {guidanceCards[currentPage].question}
                </p>
                <p className="font-garamond text-[0.95rem] font-semibold text-[#053466] text-center mb-2 max-w-[220px] h-[48px] flex items-center shrink-0">
                  {guidanceCards[currentPage].answer}
                </p>
                <img
                  src={guidanceCards[currentPage].image}
                  alt={guidanceCards[currentPage].question}
                  className="w-[160px] h-[160px] object-cover rounded-sm mb-4 shrink-0"
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-1 items-center shrink-0">
              {guidanceCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i !== currentPage) {
                      changePage(i, i > currentPage ? 1 : -1);
                    }
                  }}
                  className={`transition-all duration-300 ${
                    i === currentPage
                      ? "w-4 h-2 rounded-full bg-[#491F04]"
                      : "w-2.5 h-2 rounded-full bg-[#491F04]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <StoreButtons className="mb-8 max-md:mb-5 justify-center mt-8" />
    </section>
  );
}
