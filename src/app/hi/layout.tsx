import { Noto_Sans_Devanagari } from "next/font/google";
import SetHtmlLang from "@/components/SetHtmlLang";

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function HiRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      lang="hi"
      className={`${notoSansDevanagari.variable} font-[family-name:var(--font-devanagari)]`}
    >
      <SetHtmlLang lang="hi" />
      {children}
    </div>
  );
}
