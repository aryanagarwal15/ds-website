"use client";

import React from "react";
import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";

export default function CTASection() {
  return (
    <section id="download" className="relative overflow-hidden bg-ds-navy">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(193,86,15,0.15), transparent), radial-gradient(ellipse 40% 50% at 80% 20%, rgba(255,255,255,0.04), transparent)",
        }}
      />

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="ds-section relative md:hidden">
        <div className="ds-container text-center">
          <Reveal>
            <p className="mb-4 font-inter text-[13px] font-medium tracking-[0.12em] text-white/60 uppercase">
              Begin your journey
            </p>
            <h2
              className="font-crimson mx-auto mb-5 max-w-[340px] font-semibold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(1.75rem, 7vw, 2rem)" }}
            >
              A simple step toward clarity and spiritual growth
            </h2>
            <p className="font-inter mx-auto mb-8 max-w-[340px] text-[16px] leading-relaxed text-white/75">
              Speak with Krishna AI, explore the Gita, or begin with a short
              story. Start wherever you feel most drawn.
            </p>
            <a
              href="https://www.divinesarathi.in/download"
              className="mb-6 inline-flex items-center justify-center rounded-full bg-white font-inter font-medium text-ds-navy no-underline transition-transform duration-200 hover:scale-[1.02]"
              style={{ fontSize: 17, height: 52, padding: "0 36px" }}
            >
              Download Now
            </a>
            <div className="mb-8 flex justify-center">
              <StoreButtons badgeHeight="h-12" mobileBadgeHeight="h-11" />
            </div>
            <p className="font-inter mb-5 text-[15px] text-white/60">
              Or scan to open on your phone
            </p>
            <div className="flex justify-center">
              <div className="rounded-3xl bg-white p-3 shadow-elevated">
                <img
                  src="/images/qr/qr_mobile.webp"
                  alt="QR Code"
                  className="rounded-2xl"
                  style={{ width: 160, height: 160, objectFit: "contain" }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────── */}
      <div className="ds-section relative hidden md:block">
        <div className="ds-container mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-5 font-inter text-[13px] font-medium tracking-[0.12em] text-white/60 uppercase">
              Begin your journey
            </p>
            <h2
              className="font-crimson mb-6 font-semibold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
            >
              A simple step toward clarity and spiritual growth
            </h2>
            <p className="font-inter mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/75">
              Speak with Krishna AI, explore the Gita, or begin with a short
              story. Start wherever you feel most drawn. Your path to spiritual
              wellness begins here.
            </p>
            <a
              href="https://www.divinesarathi.in/download"
              className="mb-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-3.5 font-inter text-xl font-medium text-ds-navy no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              Download Now
            </a>
            <div className="mb-10 flex justify-center">
              <StoreButtons />
            </div>
            <p className="font-inter mb-6 text-lg text-white/60">
              Or scan to open on your phone
            </p>
            <div className="flex justify-center">
              <div className="rounded-3xl bg-white p-4 shadow-elevated">
                <img
                  src="/images/qr/qr_desktop.webp"
                  alt="QR Code"
                  className="rounded-2xl"
                  style={{ width: 180, height: 180, objectFit: "contain" }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
