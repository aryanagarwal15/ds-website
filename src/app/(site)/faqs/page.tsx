"use client";

import React, { useState } from "react";
import Footer from "@/app/newComponents/Footer";
import { faqs } from "@/lib/faqs";

function FAQItem({ q, a, isOpen, onToggle }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div
      className="bg-[#fbf7ef] rounded-[20px] cursor-pointer select-none overflow-hidden transition-all duration-300"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-6 md:py-7">
        <h2 className="font-inter font-medium text-[#4c4a48] leading-snug m-0"
           style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}>
          {q}
        </h2>
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#4c4a48]">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="11" width="16" height="2" rx="1" fill="#4c4a48" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="11" width="16" height="2" rx="1" fill="#4c4a48" />
              <rect x="11" y="4" width="2" height="16" rx="1" fill="#4c4a48" />
            </svg>
          )}
        </div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? "600px" : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.25s ease",
          overflow: "hidden",
        }}
      >
        <p className="font-inter font-normal text-[#4c4a48] leading-relaxed px-6 md:px-8 pb-7"
           style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 w-full">
        <div className="text-center px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <h1 className="font-crimson font-semibold text-[#053466] leading-tight"
              style={{ fontSize: "clamp(28px, 5.5vw, 80px)" }}>
            Frequently asked questions
          </h1>
        </div>

        <div className="max-w-[1000px] mx-auto px-4 md:px-6 pb-20 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
