"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const floating = scrolled && !open;

  return (
    <header className="sticky top-0 z-50 flow-root">
      <div className={`nav-shell ${floating ? "is-floating" : ""} ${open ? "is-open" : ""}`}>
        <nav
          className="ds-container flex items-center justify-between"
          style={{ height: floating ? 56 : 64, transition: "height 0.35s var(--ds-ease-settle)" }}
          aria-label="Main"
        >
          <Logo markSize={floating ? 28 : 32} />

          {/* desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-150 ${
                    active ? "text-saffron" : "text-ink-soft hover:bg-gold-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/download" className={`btn btn-primary ml-3 ${floating ? "!min-h-[38px] !py-1.5" : ""}`}>
              Get the app
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {/* mobile sheet */}
        {open && (
          <div
            className="border-t md:hidden"
            style={{ borderColor: "var(--ds-line-soft)", background: "var(--ds-paper)" }}
          >
            <div className="ds-container flex flex-col gap-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-[1rem] font-medium ${
                    pathname === link.href ? "text-saffron" : "text-ink-soft"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/download" className="btn btn-primary mt-2 w-full">
                Get the app
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
