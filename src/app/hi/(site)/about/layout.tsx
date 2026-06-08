import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "हमारे बारे में — मिशन और संस्थापक",
  description:
    "जानें कि DivineSarathi भगवद गीता की बुद्धि को आवाज़-आधारित बातचीत, दैनिक कथाओं और चिंतन के माध्यम से रोज़मर्रा की ज़िंदगी में कैसे लाता है। मोहित महादेवन और आर्यन अग्रवाल द्वारा निर्मित।",
  pageKey: "about",
  locale: "hi",
  keywords: [
    "DivineSarathi संस्थापक",
    "भगवद गीता मिशन",
    "हिंदू आध्यात्मिक तकनीक",
  ],
});

export default function HiAboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "होम", path: "/hi" },
          { name: "हमारे बारे में", path: "/hi/about" },
        ])}
      />
      {children}
    </>
  );
}
