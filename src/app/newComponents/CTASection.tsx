"use client";

import React from "react";

export default function CTASection() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="md:hidden bg-[#ffffff] px-6 pt-12 pb-16 text-center">
        <h2 className="font-crimson font-semibold text-[#053466] leading-tight mb-4 mx-auto"
            style={{ fontSize: "clamp(24px, 7vw, 32px)", maxWidth: 340 }}>
          Start with a simple step toward clarity and spiritual growth
        </h2>
        <p className="font-inter text-[#4c4a48] text-[16px] leading-normal mb-8 max-w-[340px] mx-auto">
          Speak with Krishna AI, explore the Gita, or begin with a short story. Start wherever
          you feel most drawn. Your path to spiritual wellness begins here.
        </p>
        <a href="https://www.divinesarathi.in/download"
           className="inline-flex items-center justify-center bg-[#053466] text-white font-inter rounded-[60px] no-underline mb-10 shadow-[0_4px_10px_rgba(0,0,0,.15)]"
           style={{ fontSize: 18, height: 52, padding: "0 36px" }}>
          Download Now
        </a>
        <p className="font-inter text-[#4c4a48] text-[16px] mb-6">Scan to open the app on your phone</p>
        <div className="flex justify-center">
          <img src="/images/qr/qr_mobile.webp" alt="QR Code" style={{ width: 180, height: 180, objectFit: "contain", filter: "invert(11%) sepia(94%) saturate(1534%) hue-rotate(207deg) brightness(96%) contrast(105%)" }} />
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <section id="download" className="hidden md:block bg-[#ffffff] py-24 px-6">
        <div className="max-w-[882px] mx-auto text-center">
          <h2 className="font-crimson font-semibold text-[#053466] leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}>
            Start with a simple step toward clarity and spiritual growth
          </h2>
          <p className="font-inter text-[#4c4a48] text-[18px] leading-normal mb-10 max-w-[644px] mx-auto">
            Speak with Krishna AI, explore the Gita, or begin with a short story. Start wherever
            you feel most drawn. Your path to spiritual wellness begins here.
          </p>
          <a href="https://www.divinesarathi.in/download"
             className="inline-flex items-center justify-center bg-[#053466] text-white font-inter text-[20px] leading-6 rounded-[60px] px-10 py-[14px] mb-12 no-underline shadow-[0_4px_10px_rgba(0,0,0,.15)] hover:opacity-90 transition-opacity">
            Download Now
          </a>
          <p className="font-inter text-[#4c4a48] text-[18px] mb-6">Scan to open the app on your phone</p>
          <div className="flex justify-center">
            <img src="/images/qr/qr_desktop.webp" alt="QR Code" style={{ width: 200, height: 200, objectFit: "contain", filter: "invert(11%) sepia(94%) saturate(1534%) hue-rotate(207deg) brightness(96%) contrast(105%)" }} />
          </div>
        </div>
      </section>
    </>
  );
}
