"use client";

import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Daily Life Guidance", href: "#guidance" },
  { label: "Build Your Practice", href: "#daily-practice" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
  const sections = navLinks.map(link =>
    document.querySelector(link.href)
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    },
    {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // controls trigger area
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      if (section) observer.unobserve(section);
    });
  };
}, []);


  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-[#fdf6ee]/85 backdrop-blur-md max-md:px-6 max-md:py-4">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="DivineSarathi"
            className="h-12 w-auto"
          />
        </div>

        <ul className="flex list-none gap-10 max-md:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`font-roboto text-[0.95rem] font-medium no-underline transition-colors duration-250 ${
                  activeLink === link.href
                    ? "text-[#053466]"
                    : "text-[#DA8852] hover:text-[#053466]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
            <span className="block w-6 h-0.5 bg-[#D9712C] rounded-sm" />
            <span className="block w-6 h-0.5 bg-[#D9712C] rounded-sm" />
            <span className="block w-6 h-0.5 bg-[#D9712C] rounded-sm" />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-white/60"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 right-0 z-[110] bg-[#C8894F] rounded-b-3xl px-6 pt-5 pb-10 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="DivineSarathi"
              className="h-12 w-auto brightness-0 invert"
            />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="bg-transparent border-none cursor-pointer p-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="list-none flex flex-col gap-4 pl-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMenuOpen(false);
                }}
                className={`font-garamond text-[1.3rem] no-underline transition-colors duration-200 ${
                  activeLink === link.href
                    ? "text-[#053466] font-bold"
                    : "text-white/80 font-medium"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
