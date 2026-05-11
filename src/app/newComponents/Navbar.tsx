"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/about#contact" },
  { label: "FAQs", href: "/faqs" },
];

const SECONDARY_LINKS = [
  { label: "Terms of use", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
];

const logoIconWhite = "/images/navbar/logo_icon_white.webp";
const logoTextWhite = "/images/navbar/logo_text_white.webp";
const logoIconColor = "/images/navbar/logo_icon_color.webp";
const logoTextColor = "/images/navbar/logo_text_color.webp";
const menuIcon = "/images/navbar/menu_icon.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Track whether the #contact section is visible on screen
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    // Reset whenever we navigate away from /about
    if (pathname !== "/about") { setContactVisible(false); return; }

    const el = document.getElementById("contact");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/about#contact") return pathname === "/about" && contactVisible;
    if (href === "/about") return pathname === "/about" && !contactVisible;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── DESKTOP (≥ 1024px) ──────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-between px-8 py-3"
        style={{ animation: "hero-nav-in 0.8s ease-out 1s both" }}>
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img src={logoIconColor} alt="" className="h-10 w-10 object-contain" />
          <img src={logoTextColor} alt="DivineSarathi" className="h-7 w-auto object-contain" />
        </Link>

        {/* Nav pill */}
        <div className="flex items-center glassmorphism-25 rounded-full px-6 xl:px-8 py-3 gap-5 xl:gap-8">
          {NAV_LINKS.map(link => (
            <Link key={link.label} href={link.href}
              className={`font-inter text-[17px] xl:text-[18px] font-normal leading-6 no-underline transition-colors duration-200 whitespace-nowrap ${isActive(link.href) ? "text-[#053466]" : "text-[#c1560f] hover:text-[#053466]"
                }`}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="https://www.divinesarathi.in/download"
          className="flex items-center justify-center bg-[rgba(193,86,15,0.4)] glass text-white font-inter text-[17px] xl:text-[18px] font-normal rounded-[28px] px-5 xl:px-6 h-12 no-underline hover:bg-[rgba(193,86,15,0.6)] transition-colors whitespace-nowrap">
          Get DivineSarathi
        </Link>
      </nav>

      {/* ── MOBILE (< 1024px) ───────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex lg:hidden items-center justify-between px-5 py-3 bg-white/10 backdrop-blur-md"
        style={{ animation: "hero-nav-in 0.8s ease-out 1s both" }}>
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img src={logoIconWhite} alt="" className="h-10 w-10 object-contain" />
          <img src={logoTextWhite} alt="DivineSarathi" className="h-7 w-auto object-contain" />
        </Link>
        <button onClick={() => setOpen(true)} className="bg-transparent border-none cursor-pointer p-1" aria-label="Open menu">
          <img src={menuIcon} alt="menu" className="w-9 h-9 object-contain" />
        </button>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <div className={`fixed inset-0 z-[110] lg:hidden flex flex-col transition-opacity duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "#ede8dc" }}>

        <div className="flex items-center justify-between px-5 pt-5 pb-2">
          <div className="flex items-center gap-2">
            <img src={logoIconColor} alt="" className="h-10 w-10 object-contain" />
            <img src={logoTextColor} alt="DivineSarathi" className="h-7 w-auto object-contain" />
          </div>
          <button onClick={() => setOpen(false)} className="bg-transparent border-none cursor-pointer p-1" aria-label="Close">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="list-none p-0 m-0 flex flex-col px-6 mt-8">
          {NAV_LINKS.map(link => (
            <li key={link.label} style={{ marginTop: 36 }}>
              <Link href={link.href} onClick={() => setOpen(false)}
                className="font-inter no-underline block transition-colors duration-200"
                style={{
                  fontSize: 20,
                  fontWeight: isActive(link.href) ? 600 : 400,
                  color: isActive(link.href) ? "#053466" : "#4C4A48",
                  lineHeight: 1.3,
                }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="list-none p-0 m-0 flex flex-col px-6">
          {SECONDARY_LINKS.map(link => (
            <li key={link.label} style={{ marginTop: link.label === "Terms of use" ? 72 : 36 }}>
              <Link href={link.href} onClick={() => setOpen(false)}
                className="font-inter no-underline block"
                style={{ fontSize: 20, fontWeight: 400, color: "#4C4A48", lineHeight: 1.3 }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-6 pb-10">
          <Link href="https://www.divinesarathi.in/download" onClick={() => setOpen(false)}
            className="flex items-center justify-center no-underline"
            style={{
              background: "#0d2145",
              color: "#ffffff",
              fontSize: 18,
              fontWeight: 500,
              borderRadius: 32,
              height: 56,
              width: "100%",
            }}>
            Download Now
          </Link>
        </div>
      </div>
    </>
  );
}
