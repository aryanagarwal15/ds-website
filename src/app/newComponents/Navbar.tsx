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

const SECONDARY_LINKS = [{ label: "Privacy policy", href: "/privacy" }];

const logoEmblem = "/images/navbar/logo_emblem.png";

function MenuIcon({ light = false }: { light?: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={light ? "#ffffff" : "#053466"}
      strokeWidth="2"
      strokeLinecap="round"
      className={light ? "drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]" : undefined}
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function LogoMark() {
  return (
    <img
      src={logoEmblem}
      alt=""
      aria-hidden
      className="h-9 w-9 flex-shrink-0 object-contain"
    />
  );
}

function BrandLogo({ lightText = false }: { lightText?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex h-10 items-center gap-2.5 no-underline"
    >
      <LogoMark />
      <span
        className={`font-crimson text-[20px] font-semibold leading-none tracking-tight transition-opacity duration-300 group-hover:opacity-90 lg:text-[22px] ${
          lightText
            ? "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
            : "text-ds-navy drop-shadow-[0_1px_8px_rgba(255,255,255,0.7)]"
        }`}
      >
        DivineSarathi
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/about") {
      setContactVisible(false);
      return;
    }

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
    if (href === "/about#contact")
      return pathname === "/about" && contactVisible;
    if (href === "/about") return pathname === "/about" && !contactVisible;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHome = pathname === "/";

  return (
    <>
      {/* ── DESKTOP (≥ 1024px) ──────────────────────────────────── */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 hidden items-center justify-between px-8 py-3 transition-all duration-500 lg:flex ${
          scrolled
            ? "bg-white/80 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={{ animation: "hero-nav-in 0.8s ease-out 1s both" }}
      >
        <BrandLogo />

        <div
          className={`flex items-center gap-5 rounded-full px-6 py-2.5 xl:gap-8 xl:px-8 xl:py-3 transition-all duration-500 ${
            scrolled
              ? "border border-ds-navy/[0.06] bg-ds-cream/60"
              : "glassmorphism-25"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-inter text-[17px] leading-6 font-normal whitespace-nowrap no-underline transition-colors duration-200 xl:text-[18px] ${
                isActive(link.href)
                  ? "font-medium text-ds-navy"
                  : "text-ds-accent hover:text-ds-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="https://www.divinesarathi.in/download"
          className={`flex h-12 items-center justify-center rounded-full px-5 font-inter text-[17px] font-medium whitespace-nowrap text-white no-underline transition-all duration-300 xl:px-6 xl:text-[18px] ${
            scrolled
              ? "bg-ds-navy shadow-soft hover:bg-ds-navy-deep"
              : "bg-ds-accent/80 backdrop-blur-sm hover:bg-ds-accent"
          }`}
        >
          Get DivineSarathi
        </Link>
      </nav>

      {/* ── MOBILE (< 1024px) ───────────────────────────────────── */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-5 py-3 transition-all duration-500 lg:hidden ${
          scrolled || !isHome
            ? "border-b border-ds-navy/[0.06] bg-white/85 shadow-soft backdrop-blur-xl"
            : "bg-white/10 backdrop-blur-md"
        }`}
        style={{ animation: "hero-nav-in 0.8s ease-out 1s both" }}
      >
        <BrandLogo lightText={isHome && !scrolled} />
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer border-none bg-transparent p-1"
          aria-label="Open menu"
        >
          <MenuIcon light={isHome && !scrolled} />
        </button>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[110] flex flex-col transition-opacity duration-300 ease-in-out lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ background: "#f5efe4" }}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-2">
          <BrandLogo />
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer border-none bg-transparent p-1"
            aria-label="Close menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2d2d2d"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="m-0 mt-8 flex list-none flex-col px-6 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.label} style={{ marginTop: 36 }}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-inter block no-underline transition-colors duration-200"
                style={{
                  fontSize: 20,
                  fontWeight: isActive(link.href) ? 600 : 400,
                  color: isActive(link.href) ? "#053466" : "#4C4A48",
                  lineHeight: 1.3,
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="m-0 flex list-none flex-col px-6 p-0">
          {SECONDARY_LINKS.map((link) => (
            <li key={link.label} style={{ marginTop: 72 }}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-inter block no-underline"
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#4C4A48",
                  lineHeight: 1.3,
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-6 pb-10">
          <Link
            href="https://www.divinesarathi.in/download"
            onClick={() => setOpen(false)}
            className="flex h-14 w-full items-center justify-center rounded-full bg-ds-navy font-inter text-lg font-medium text-white no-underline"
          >
            Download Now
          </Link>
        </div>
      </div>
    </>
  );
}
