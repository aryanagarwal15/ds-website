"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPagePath, type PageKey } from "@/lib/seo";

function resolvePageKey(pathname: string): PageKey {
  const normalized = pathname.replace(/^\/hi/, "") || "/";
  if (normalized === "/") return "home";
  if (normalized.startsWith("/about")) return "about";
  if (normalized.startsWith("/faqs")) return "faqs";
  if (normalized.startsWith("/download")) return "download";
  if (normalized.startsWith("/privacy-policy")) return "privacy";
  return "home";
}

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const pathname = usePathname();
  const isHindi = pathname.startsWith("/hi");
  const pageKey = resolvePageKey(pathname);
  const enPath = getPagePath(pageKey, "en");
  const hiPath = getPagePath(pageKey, "hi");

  const baseClass = light
    ? "text-white/80 hover:text-white"
    : "text-ds-accent hover:text-ds-navy";
  const activeClass = light ? "text-white font-medium" : "text-ds-navy font-medium";

  if (!hiPath) return null;

  return (
    <div
      className={`flex items-center gap-1 font-inter text-[14px] ${baseClass}`}
      aria-label="Language switcher"
    >
      <Link
        href={enPath}
        className={`px-1.5 py-0.5 no-underline transition-colors ${!isHindi ? activeClass : ""}`}
        hrefLang="en-IN"
      >
        EN
      </Link>
      <span aria-hidden className="opacity-40">
        |
      </span>
      <Link
        href={hiPath}
        className={`px-1.5 py-0.5 no-underline transition-colors ${isHindi ? activeClass : ""}`}
        hrefLang="hi-IN"
      >
        हिं
      </Link>
    </div>
  );
}
