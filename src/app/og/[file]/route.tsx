import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { ROUTES, type RouteKey } from "@/lib/routes";

export const dynamic = "force-static";

export function generateStaticParams() {
  return (Object.keys(ROUTES) as RouteKey[]).map((k) => ({ file: `${k}.png` }));
}

/** 1200x630 share image per page: indigo night, the mark, the page title. */
export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const key = file.replace(/\.png$/, "") as RouteKey;
  const r = ROUTES[key] ?? ROUTES.home;
  const svg = await readFile(path.join(process.cwd(), "public/logo/divinesarathi-mark-ivory.svg"));
  const mark = `data:image/svg+xml;base64,${svg.toString("base64")}`;
  const serif = await readFile(path.join(process.cwd(), "src/app/og/fonts/CormorantGaramond-SemiBold.ttf"));
  const title = key === "home" ? "Whatever is on your mind, talk with Krishna." : r.title.en;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(120% 140% at 85% 0%, #0d4a8a 0%, #053466 55%, #031f3d 100%)",
          color: "#f5ead0",
          fontFamily: "Cormorant",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={64} height={64} alt="" />
          <span style={{ fontSize: 34, letterSpacing: 1 }}>DivineSarathi</span>
        </div>
        <div style={{ display: "flex", fontSize: title.length > 48 ? 64 : 76, lineHeight: 1.1, maxWidth: 980 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#d8cdb4" }}>
          <span>Krishna AI · Bhagavad Gita · English and Hindi</span>
          <span>Free on iPhone and Android</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: [{ name: "Cormorant", data: serif, weight: 600, style: "normal" }] },
  );
}
