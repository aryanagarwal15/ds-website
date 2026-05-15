"use client";

import { useEffect } from "react";
import type { DownloadTracking } from "./tracking";

interface Props {
    tracking: DownloadTracking | null;
    platform: "ios" | "android" | "desktop";
    serverIp: string;
    serverReferrer: string;
    redirectUrl?: string;
}

export default function DownloadVisitTracker({
    tracking,
    platform,
    serverIp,
    serverReferrer,
    redirectUrl,
}: Props) {
    useEffect(() => {
        if (!tracking) return;

        const payload = {
            platform,
            redirectUrl: redirectUrl ?? null,
            timestamp: new Date().toISOString(),
            serverIp,
            referrer: document.referrer || serverReferrer || "Unknown",
            tracking,
        };

        fetch("/api/generic/download-analytics", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        }).catch((e) => console.error("Analytics failed:", e));
    }, [tracking, platform, serverIp, serverReferrer, redirectUrl]);

    return null;
}
