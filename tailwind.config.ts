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
