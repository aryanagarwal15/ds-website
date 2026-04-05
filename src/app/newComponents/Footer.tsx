"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-0 py-8 px-6 bg-[#f7efe6] border-t border-[#DA8852]/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

        {/* Copyright */}
        <p className="text-[#DA8852] text-sm font-roboto">
          © {new Date().getFullYear()} DivineSarathi. All rights reserved.
        </p>

        {/* Privacy Policy */}
        <a
          href="/privacy-policy"
          className="text-[#053466] text-sm font-roboto hover:underline"
        >
          Privacy Policy
        </a>

      </div>
    </footer>
  );
}
