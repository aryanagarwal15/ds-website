"use client";

import React from "react";

const desktopItems = [
  { icon: "/images/promise/block_mic_d.webp", label: "No recordings saved" },
  { icon: "/images/promise/user_shield_d.webp", label: "Private & secure" },
  { icon: "/images/promise/scales_d.webp", label: "Unbiased guidance" },
  { icon: "/images/promise/scroll_d.webp", label: "Rooted in scripture" },
];

const mobileItems = desktopItems;

export default function PromiseSection() {
  return (
    <section className="bg-[#ffffff] py-16 px-6">
      <div className="max-w-[1360px] mx-auto text-center">
        <h2 className="font-crimson font-semibold text-[#4c4a48] mb-10 md:mb-16"
          style={{ fontSize: "clamp(22px, 4vw, 52px)" }}>
          The DivineSarathi Promise
        </h2>

        {/* Mobile: infinite ticker */}
        <div className="md:hidden overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)" }}>
          <div
            className="flex gap-8 promise-ticker"
            style={{ width: "max-content" }}
          >
            {/* Duplicate for seamless loop */}
            {[...mobileItems, ...mobileItems, ...mobileItems].map((item, i) => (
              <div key={i} className="flex items-center gap-2 flex-shrink-0">
                <img src={item.icon} alt={item.label} style={{ width: 24, height: 24, objectFit: "contain" }} />
                <span className="font-inter text-[#4c4a48] text-[16px] whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 4-col row, 80px icons */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-[1360px] mx-auto">
          {desktopItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div style={{ width: 80, height: 80 }}>
                <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
              </div>
              <p className="font-inter  text-[#4c4a48] leading-tight text-center"
                style={{ fontSize: 28 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .promise-ticker {
          animation: promise-scroll 18s linear infinite;
        }
        @keyframes promise-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
