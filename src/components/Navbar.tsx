"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { UI } from "@/content/ui";
import { ROUTES, hindiPath, pathFor, type Locale, type RouteKey } from "@/lib/routes";
import { storeLink } from "@/lib/site";

/** The same page in the other language, or that language's home if it has no twin. */
function otherLanguagePath(pathname: string, locale: Locale): string {
  const key = (Object.keys(ROUTES) as RouteKey[]).find(
    (k) => ROUTES[k].en === pathname || hindiPath(k) === pathname,
  );
  if (locale === "en") return key && hindiPath(key) ? (hindiPath(key) as string) : "/hi";
  return key ? ROUTES[key].en : "/";
}

/**
 * One fixed-height bar, the same in every state: no shrinking, no detaching on
 * scroll. Only the hairline under it appears once the page has scrolled.
 */
export default function Navbar({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = t.nav.map((k) => ({ key: k, href: pathFor(k, locale), label: ROUTES[k].name[locale] }));
  const switchHref = otherLanguagePath(pathname, locale);

  return (
    <header className={`site-nav ${scrolled || open ? "is-scrolled" : ""}`}>
      <a href="#main" className="skip-link">{t.skip}</a>
      <nav className="ds-container flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Logo locale={locale} />

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`nav-link ${pathname === l.href ? "is-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href={switchHref} hrefLang={locale === "en" ? "hi" : "en"} aria-label={t.language.aria} className="nav-link">
            {t.language.label}
          </Link>
          <span className="hidden sm:inline-flex">
            <a href={storeLink(null, "nav", "get-app")} className="btn btn-primary !min-h-[40px] !px-5 !py-2">
              {t.getApp}
            </a>
          </span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-[var(--ds-line-soft)] bg-[var(--ds-paper)] lg:hidden">
        <div className="ds-container flex flex-col py-3">
          {links.map((l) => (
            <Link key={l.key} href={l.href} className={`rounded-xl px-2 py-3 text-[1.05rem] font-medium ${pathname === l.href ? "text-saffron" : "text-ink"}`}>
              {l.label}
            </Link>
          ))}
          <a href={storeLink(null, "nav", "get-app-menu")} className="btn btn-primary mt-3 w-full">
            {t.getApp}
          </a>
        </div>
      </div>
    </header>
  );
}
