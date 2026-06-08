"use client";

import React from "react";
import { Linkedin } from "lucide-react";

const usefulLinks = [
  { label: "About Us",       href: "/about" },
  { label: "Contact Us",     href: "/about#contact" },
  { label: "FAQs",           href: "/faqs" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

const socials = [
  {
    alt: "Instagram",
    href: "https://www.instagram.com/divinesarathi",
    src: "/images/footer/social_ig.webp",
  },
  {
    alt: "X",
    href: "https://x.com/DivineSarathi",
    src: "/images/footer/social_x.webp",
  },
  {
    alt: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578551830799",
    src: "/images/footer/social_fb.webp",
  },
  {
    alt: "YouTube",
    href: "https://www.youtube.com/@DivineSarathi",
    src: "/images/footer/social_yt.webp",
  },
  {
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/divinesarathi",
    icon: "linkedin" as const,
  },
];

const footerLogoEmblem = "/images/navbar/logo_emblem_color.png";

function FooterLogoMark() {
  return (
    <img
      src={footerLogoEmblem}
      alt=""
      aria-hidden
      className="block h-10 w-10 flex-shrink-0 object-contain"
    />
  );
}

function SocialLink({
  social,
  size,
  rounded,
}: {
  social: (typeof socials)[number];
  size: number;
  rounded: string;
}) {
  if (social.icon === "linkedin") {
    return (
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.alt}
        className={`flex items-center justify-center bg-[#0A66C2] ${rounded} transition-opacity hover:opacity-90`}
        style={{ width: size, height: size }}
      >
        <Linkedin
          className="text-white"
          style={{ width: size * 0.46, height: size * 0.46 }}
          strokeWidth={1.75}
        />
      </a>
    );
  }

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.alt}
      className={`block overflow-hidden ${rounded}`}
      style={{ width: size, height: size }}
    >
      <img src={social.src} alt="" className="h-full w-full object-cover" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ds-navy-deep">

      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="md:hidden px-5 pt-10 pb-8 flex flex-col gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <FooterLogoMark />
            <img src="/images/footer/logo_text_m.webp" alt="DivineSarathi" style={{ height: 22 }} className="object-contain" />
          </div>
          <p className="font-inter text-[16px] leading-relaxed text-white/85">
            Bridging ancient wisdom with artificial intelligence to guide you through daily life.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-inter font-semibold text-white text-[18px]">Useful Links</h4>
          {usefulLinks.map(link => (
            <a key={link.label} href={link.href}
               className="font-inter text-white/85 text-[16px] leading-5 no-underline hover:opacity-100">
              {link.label}
            </a>
          ))}
        </div>

        {/* Store + Download */}
        <div className="flex items-center gap-3">
          <a href="https://play.google.com/store/apps/details?id=in.divinesarathi" target="_blank" rel="noopener noreferrer">
            <img src="/images/footer/google_play_m.webp" alt="Google Play" style={{ width: 36, height: 36 }} className="object-contain" />
          </a>
          <a href="https://apps.apple.com/in/app/divinesarathi/id6752269118" target="_blank" rel="noopener noreferrer">
            <img src="/images/footer/apple_m.webp" alt="App Store" style={{ width: 36, height: 36 }} className="object-contain" />
          </a>
          <div className="w-px h-8 bg-white/30" />
          <a href="https://www.divinesarathi.in/download"
             className="flex-1 flex items-center justify-center bg-white text-[#053466] font-inter font-semibold text-[16px] rounded-full no-underline"
             style={{ height: 48 }}>
            Get DivineSarathi
          </a>
        </div>

        {/* Stay connected */}
        <div className="flex flex-col gap-3">
          <h4 className="font-inter font-semibold text-white text-[18px]">Stay connected</h4>
          <div className="flex gap-3">
            {socials.map((s) => (
              <SocialLink
                key={s.alt}
                social={s}
                size={48}
                rounded="rounded-[10px]"
              />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="font-inter text-white/60 text-[14px]">© DivineSarathi 2026.</p>
      </div>

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <div className="hidden md:flex items-start justify-between max-w-[1360px] mx-auto px-10 py-14 gap-12">

        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-5 max-w-[300px]">
          <div className="flex items-center gap-2.5">
            <FooterLogoMark />
            <img src="/images/footer/logo_text_d.webp" alt="DivineSarathi" style={{ height: 24 }} className="object-contain" />
          </div>
          <p className="font-inter text-[18px] leading-relaxed text-white/85">
            Bridging ancient wisdom with artificial intelligence to guide you through daily life.
          </p>
          <p className="font-inter text-white/70 text-[16px] mt-auto">© DivineSarathi 2026.</p>
        </div>

        {/* Col 2 — Useful Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-inter font-semibold text-white text-[20px]">Useful Links</h4>
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {usefulLinks.map(link => (
              <li key={link.label}>
                <a href={link.href}
                   className="font-inter text-white/85 text-[16px] no-underline hover:opacity-100 transition-opacity">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Stay connected + Download */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h4 className="font-inter font-semibold text-white text-[20px]">Stay connected</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <SocialLink
                  key={s.alt}
                  social={s}
                  size={52}
                  rounded="rounded-[12px]"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://play.google.com/store/apps/details?id=in.divinesarathi" target="_blank" rel="noopener noreferrer">
              <img src="/images/footer/google_play_d.webp" alt="Google Play" style={{ width: 36, height: 36 }} className="object-contain" />
            </a>
            <a href="https://apps.apple.com/in/app/divinesarathi/id6752269118" target="_blank" rel="noopener noreferrer">
              <img src="/images/footer/apple_d.webp" alt="App Store" style={{ width: 36, height: 36 }} className="object-contain" />
            </a>
            <div className="w-px h-9 bg-white/30" />
            <a href="https://www.divinesarathi.in/download"
               className="flex items-center justify-center bg-white text-[#053466] font-inter font-semibold text-[18px] rounded-full px-7 h-11 no-underline hover:bg-white/90 transition-colors whitespace-nowrap">
              Download Now
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
