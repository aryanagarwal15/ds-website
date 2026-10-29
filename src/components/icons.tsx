/**
 * The in-house sacred icon set from the design system: 1.6px stroke on a
 * 24px grid, rounded caps, at most one gold fill accent per glyph.
 * Icons inherit currentColor for the stroke; the accent uses the gold token.
 */

type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  "aria-hidden": true as const,
});

/** Mor Pankh, the Krishna AI glyph. */
export function FeatherIcon({ size = 28, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 21c1.5-7 4-13 12-17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M18 4c1.8 2.6 1.6 6.4-.6 8.6-2 2-5 2.6-7.6 1.6C10.6 9 13.4 5.4 18 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="15.6" cy="8.4" r="1.6" fill="var(--ds-gold-raw)" />
    </svg>
  );
}

export function LotusIcon({ size = 28, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 20c-2.8 0-5-2.6-5-6.2 0-3 1.8-6.2 5-8.8 3.2 2.6 5 5.8 5 8.8 0 3.6-2.2 6.2-5 6.2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 13.5C4.8 13 3.2 11.4 2.5 9c2.4-.4 4.6.2 6.2 1.6M17 13.5c2.2-.5 3.8-2.1 4.5-4.5-2.4-.4-4.6.2-6.2 1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="1.4" fill="var(--ds-gold-raw)" />
    </svg>
  );
}

export function DiyaIcon({ size = 28, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M4 14h16c0 3.3-3.6 6-8 6s-8-2.7-8-6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M2.5 14h19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        className="diya-flame"
        d="M12 11c-1.4-1.2-2-2.4-2-3.6C10 5.6 11 4.4 12 3.5c1 .9 2 2.1 2 3.9 0 1.2-.6 2.4-2 3.6z"
        fill="var(--ds-gold-raw)"
      />
    </svg>
  );
}

export function MalaIcon({ size = 28, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" strokeDasharray="0.1 3.4" strokeLinecap="round" />
      <circle cx="12" cy="20.2" r="1.8" fill="var(--ds-gold-raw)" />
      <path d="M12 22v1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BansuriIcon({ size = 28, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="9.8" width="19" height="4.4" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="12" r="0.9" fill="currentColor" />
      <circle cx="12.5" cy="12" r="0.9" fill="currentColor" />
      <circle cx="16" cy="12" r="0.9" fill="currentColor" />
      <circle cx="5.8" cy="12" r="1" fill="var(--ds-gold-raw)" />
    </svg>
  );
}

export function BookIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 6c-1.8-1.1-4.2-1.6-6.5-1.3v13c2.3-.3 4.7.2 6.5 1.3 1.8-1.1 4.2-1.6 6.5-1.3v-13c-2.3-.3-4.7.2-6.5 1.3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 6v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="6" r="1.3" fill="var(--ds-gold-raw)" />
    </svg>
  );
}

export function ShieldIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 3.5l6.5 2.6v4.4c0 4.6-2.8 7.9-6.5 9.4-3.7-1.5-6.5-4.8-6.5-9.4V6.1L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.2l2.1 2.1L15.5 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="4.6" r="1" fill="var(--ds-gold-raw)" />
    </svg>
  );
}

export function WaveIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M3 10.5c1.6-1.4 3.2-1.4 4.8 0s3.2 1.4 4.8 0 3.2-1.4 4.8 0 3.2 1.4 4.8 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 15.5c1.6-1.4 3.2-1.4 4.8 0s3.2 1.4 4.8 0 3.2-1.4 4.8 0 3.2 1.4 4.8 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="12" cy="5.4" r="1.3" fill="var(--ds-gold-raw)" />
    </svg>
  );
}

export function SunriseIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 16.5h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M7 16.5a5 5 0 0110 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.5v2.2M6.8 10l1.5 1.5M17.2 10l-1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12.3" r="1.2" fill="var(--ds-gold-raw)" />
    </svg>
  );
}

/* ── social ─────────────────────────────────────────────── */

export function InstagramIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function YouTubeIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="6" width="19" height="12.5" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.2 9.7l4.6 2.6-4.6 2.6V9.7z" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 10.5V17M7.5 7.3v.2M11.5 17v-3.8c0-1.3 1-2.4 2.3-2.4 1.3 0 2.2 1 2.2 2.4V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14.8 8.2h-1.6c-.9 0-1.4.5-1.4 1.5v1.4h2.8l-.4 2.4h-2.4V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
