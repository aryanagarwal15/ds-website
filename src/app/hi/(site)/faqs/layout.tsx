import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqsHi } from "@/lib/faqs-hi";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "अक्सर पूछे जाने वाले प्रश्न — भगवद गीता ऐप",
  description:
    "DivineSarathi के बारे में सामान्य प्रश्नों के उत्तर: Krishna AI कैसे काम करता है, गोपनीयता, धर्मग्रंथ स्रोत, और यह भगवद गीता के साथ कैसे जुड़ता है।",
  pageKey: "faqs",
  locale: "hi",
  keywords: [
    "DivineSarathi FAQ Hindi",
    "कृष्ण AI प्रश्न",
    "भगवद गीता ऐप गोपनीयता",
  ],
});

export default function HiFAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "होम", path: "/hi" },
            { name: "प्रश्न", path: "/hi/faqs" },
          ]),
          faqPageJsonLd(faqsHi),
        ]}
      />
      {children}
    </>
  );
}
