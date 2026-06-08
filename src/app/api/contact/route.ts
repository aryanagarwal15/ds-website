import { NextRequest, NextResponse } from "next/server";

const CONTACT_API = "https://api.divinesarathi.in/generic/contact";

export async function POST(req: NextRequest) {
    const body = await req.json();

    try {
        const response = await fetch(CONTACT_API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            return NextResponse.json(
                { ok: false, error: data.error || "Failed to send message" },
                { status: response.status }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Contact forward failed:", error);
        return NextResponse.json(
            { ok: false, error: "Failed to send message" },
            { status: 500 }
        );
    }
}
