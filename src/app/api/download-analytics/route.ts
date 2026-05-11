import { NextRequest, NextResponse } from "next/server";

const ANALYTICS_API = process.env.DOWNLOAD_ANALYTICS_API || "";

export async function POST(req: NextRequest) {
    const body = await req.json();

    if (!ANALYTICS_API) {
        return NextResponse.json({ ok: true });
    }

    try {
        await fetch(ANALYTICS_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Analytics forward failed:", error);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
