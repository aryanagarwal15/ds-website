import type { Metadata } from "next";
import { headers } from "next/headers";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, faqLd, mobileAppLd, pageMetadata } from "@/lib/seo";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";
import DownloadContent from "./DownloadContent";
import DownloadRedirect from "./DownloadRedirect";
import DownloadVisitTracker from "./DownloadVisitTracker";
import { downloadFaqs } from "./faqs";
import { parseDownloadTracking } from "./tracking";

export const metadata: Metadata = pageMetadata("download", "en");

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
  const params = await searchParams;
  const tracking = parseDownloadTracking(params);
  // A store badge clicked on desktop says which store it wants; phones always go to their own.
  const storeParam = Array.isArray(params.store) ? params.store[0] : params.store;

  const isAndroid = userAgent.includes("android");
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isCrawler = CRAWLER_UA.test(userAgent);

  const redirectUrl = isCrawler
    ? null
    : isIOS
      ? APP_STORE_URL
      : isAndroid
        ? PLAY_STORE_URL
        : storeParam === "ios"
          ? APP_STORE_URL
          : storeParam === "android"
            ? PLAY_STORE_URL
            : null;

  if (redirectUrl) {
    return (
      <>
        <JsonLd
          data={[
            breadcrumbLd("download"),
            mobileAppLd,
          ]}
        />
        <DownloadRedirect
          redirectUrl={redirectUrl}
          platform={isIOS || (!isAndroid && storeParam === "ios") ? "ios" : "android"}
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
          breadcrumbLd("download"),
          mobileAppLd,
          faqLd(downloadFaqs),
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
