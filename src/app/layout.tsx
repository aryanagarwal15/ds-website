import type { Metadata } from "next";
import { Cormorant, Cormorant_Garamond, Roboto, DM_Sans, Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talk to krishna",
  description: "God Reincarcination",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.webp",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${roboto.className} ${cormorantGaramond.variable} ${dmSans.variable} ${inter.variable} ${crimsonText.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
