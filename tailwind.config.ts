import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      garamond: ['var(--font-garamond)', 'Georgia', 'serif'],
      cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
      crimson: ['var(--font-crimson)', 'Georgia', 'serif'],
      inter: ['var(--font-inter)', 'sans-serif'],
      sans: ['var(--font-body)', 'sans-serif'],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "ds-navy": "#053466",
        "ds-navy-deep": "#031f3d",
        "ds-cream": "#fbf7ef",
        "ds-cream-warm": "#f5efe4",
        "ds-text": "#4c4a48",
        "ds-text-muted": "#7a7876",
        "ds-accent": "#c1560f",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(5, 52, 102, 0.06)",
        elevated: "0 12px 40px rgba(5, 52, 102, 0.1)",
        glow: "0 0 60px rgba(193, 86, 15, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require('tailwind-glassmorphism'),
    require('tailwindcss/plugin')(({ addUtilities }: { addUtilities: (u: Record<string, Record<string, string>>) => void }) => {
      addUtilities({
        '.glass': {
          backdropFilter: 'blur(10px)',
          backgroundClip: 'padding-box',
          border: '1px solid rgba(255,255,255,0.3)',
        },
      });
    }),
  ],
} satisfies Config;
