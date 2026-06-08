import type { Metadata } from "next";
import { headers } from "next/headers";
import JsonLd from "@/components/JsonLd";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  breadcrumbJsonLd,
  createPageMetadata,
  mobileAppJsonLd,
} from "@/lib/seo";
import DownloadRedirect from "./DownloadRedirect";
import DownloadVisitTracker from "./DownloadVisitTracker";
import { parseDownloadTracking } from "./tracking";

export const metadata: Metadata = createPageMetadata({
  title: "Download DivineSarathi — Bhagavad Gita App for iOS & Android",
  description:
    "Download DivineSarathi free on the App Store and Google Play. A voice-first Bhagavad Gita devotional app with Krishna AI, daily stories, and Gita for daily life guidance.",
  pageKey: "download",
  keywords: [
    "download DivineSarathi",
    "Bhagavad Gita app download",
    "Krishna app iOS",
    "Krishna app Android",
    "Bhagavad Gita app Google Play",
  ],
});

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

  const redirectUrl = isIOS ? APP_STORE_URL : isAndroid ? PLAY_STORE_URL : null;

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

  // Desktop fallback
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
      <DownloadVisitTracker
        tracking={tracking}
        platform="desktop"
        serverIp={ipAddress}
        serverReferrer={referrer}
      />
      <div className="min-h-screen bg-[#fdf6ee] flex flex-col items-center justify-center px-6 text-center">
        <img src="/images/logo.webp" alt="DivineSarathi" className="h-16 mb-8" />

        <h1 className="font-garamond text-[2.5rem] text-[#D9712C] mb-4 font-semibold">
          Download DivineSarathi
        </h1>
        <p className="font-cormorant text-[1.2rem] text-[#053466] mb-10 max-w-[400px]">
          Let the wisdom of the Gita and our scriptures guide you through life
        </p>
        <div className="flex gap-6">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <img
              src="/images/appstore.svg"
              alt="Download on the App Store"
              className="h-14 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            />
          </a>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <img
              src="/images/GooglePlay.svg"
              alt="Get it on Google Play"
              className="h-14 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            />
          </a>
        </div>
      </div>
    </>
  );
}
