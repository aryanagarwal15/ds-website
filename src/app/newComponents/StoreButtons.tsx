"use client";

import React from "react";

interface StoreButtonsProps {
  className?: string;
  badgeHeight?: string;
  mobileBadgeHeight?: string;
}

export default function StoreButtons({
  className = "",
  badgeHeight = "h-14",
  mobileBadgeHeight = "max-md:h-[46px]",
}: StoreButtonsProps) {
  return (
    <div
      className={`flex gap-4 max-md:justify-center max-md:gap-3 ${className}`}
    >
      <a
        href="https://play.google.com/store/apps/details?id=in.divinesarathi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/GooglePlay.svg"
          alt="Get it on Google Play"
          className={`${badgeHeight} ${mobileBadgeHeight} rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200`}
        />
      </a>
      <a
        href="https://apps.apple.com/in/app/divinesarathi/id6752269118"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/appstore.svg"
          alt="Download on the App Store"
          className={`${badgeHeight} ${mobileBadgeHeight} rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200`}
        />
      </a>
    </div>
  );
}
