"use client";

import React from "react";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <Reveal className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`font-inter text-[13px] font-medium tracking-[0.12em] uppercase mb-4 ${
            light ? "text-white/70" : "text-ds-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-crimson font-semibold tracking-tight leading-[1.1] ${
          light ? "text-white" : "text-ds-navy"
        }`}
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-inter mt-5 leading-relaxed ${
            light ? "text-white/80" : "text-ds-text"
          }`}
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
