import type { Metadata } from "next";
import { headers } from "next/headers";
import JsonLd from "@/components/JsonLd";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  mobileAppJsonLd,
} from "@/lib/seo";
import DownloadContent from "./DownloadContent";
import DownloadRedirect from "./DownloadRedirect";
import DownloadVisitTracker from "./DownloadVisitTracker";
import { downloadFaqs } from "./faqs";
import { parseDownloadTracking } from "./tracking";

export const metadata: Metadata = createPageMetadata({
  title: "Download the Krishna AI Gita App for iPhone and Android",
  description:
    "Get DivineSarathi free on the App Store and Google Play. Talk to Krishna AI by voice or text, learn the Bhagavad Gita verse by verse, two shlokas a day, daily stories and meditation.",
  pageKey: "download",
  keywords: [
    "download DivineSarathi",
    "Krishna AI app",
    "Krishna AI Gita",
    "Bhagavad Gita app download",
    "Krishna app iOS",
    "Krishna app Android",
    "Bhagavad Gita app Google Play",
  ],
});

// Search crawlers get the full page instead of the store redirect, so the
// content gets indexed (Googlebot indexes with an Android user agent).
// AdsBot is deliberately not listed: ads landing checks keep today's redirect.
const CRAWLER_UA =
  /googlebot|google-inspectiontool|bingbot|applebot|duckduckbot|yandexbot|baiduspider|slurp/;

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function DownloadPage({ searchParams }: PageProps) {
  const headersList = await headers();
  const userAgent = (headersList.get("user-agent") || "").toLowerCase();
  const ipAddress =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const referrer = headersList.get("referer") || "";
  const tracking = parseDownloadTracking(await searchParams);

  const isAndroid = userAgent.includes("android");
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isCrawler = CRAWLER_UA.test(userAgent);

  const redirectUrl = isCrawler
    ? null
    : isIOS
      ? APP_STORE_URL
      : isAndroid
        ? PLAY_STORE_URL
        : null;

  if (redirectUrl) {
    return (
      <>
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Download", path: "/download" },
            ]),
            mobileAppJsonLd,
          ]}
        />
        <DownloadRedirect
          redirectUrl={redirectUrl}
          platform={isIOS ? "ios" : "android"}
          serverIp={ipAddress}
          serverUserAgent={userAgent}
          serverReferrer={referrer}
          tracking={tracking}
        />
      </>
    );
  }

  // Desktop fallback (and search crawlers)
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Download", path: "/download" },
          ]),
          mobileAppJsonLd,
          faqPageJsonLd(downloadFaqs),
        ]}
      />
      <DownloadVisitTracker
        tracking={tracking}
        platform="desktop"
        serverIp={ipAddress}
        serverReferrer={referrer}
      />
      <DownloadContent />
    </>
  );
}
