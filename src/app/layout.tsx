import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_Devanagari, Noto_Serif_Devanagari } from "next/font/google";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { GOOGLE_ANALYTICS_ID, GOOGLE_SITE_VERIFICATION, SITE_NAME, SITE_URL } from "@/lib/site";
import { organizationLd, websiteLd } from "@/lib/seo";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Devanagari faces only download when Devanagari text is on the page (unicode-range).
const devaSans = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva-sans",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

const devaSerif = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva-serif",
  weight: ["500", "600"],
  display: "swap",
  preload: false,
});

const DEFAULT_TITLE = "DivineSarathi: Talk to Krishna AI, Bhagavad Gita app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  authors: [{ name: "Mohith Mahadevan" }, { name: "Aryan Agarwal" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Spirituality",
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcf9f2" },
    { media: "(prefers-color-scheme: dark)", color: "#111826" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable} ${devaSans.variable} ${devaSerif.variable}`}>
      <body className="antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        <JsonLd data={[organizationLd, websiteLd]} />
        {children}
      </body>
    </html>
  );
}
