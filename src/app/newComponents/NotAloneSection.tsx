"use client";

import React from "react";

export default function NotAloneSection() {
  return (
    // Desktop-only: mobile handled inside FeelingSection's bottom cream band
    <section className="hidden md:block bg-[#fbf7ef] py-14 px-6">
      <div className="max-w-[1360px] mx-auto text-center">
        <h2 className="font-crimson font-semibold text-[#053466] leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
          You&apos;re not alone in this
        </h2>
        <p className="font-inter text-[#4c4a48] leading-snug max-w-[1280px] mx-auto"
           style={{ fontSize: "clamp(16px, 1.8vw, 24px)" }}>
          In today&apos;s fast-moving world, many of us feel this way. But the way we seek guidance
          hasn&apos;t kept up with how we live today. That&apos;s what we&apos;re building.
        </p>
      </div>
    </section>
  );
}
