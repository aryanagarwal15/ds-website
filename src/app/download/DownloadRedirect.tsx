// src/app/download/DownloadRedirect.tsx
"use client";

import { useEffect } from "react";
import type { DownloadTracking } from "./tracking";

interface Props {
    redirectUrl: string;
    platform: "ios" | "android";
    serverIp: string;
    serverUserAgent: string;
    serverReferrer: string;
    tracking: DownloadTracking | null;
}

function getDeviceName(ua: string): { deviceName: string; osVersion: string } {
    if (/iPhone/.test(ua)) {
        return {
            deviceName: "iPhone",
            osVersion: ua.match(/OS (\d+_\d+)/)?.[1]?.replace("_", ".") || "Unknown",
        };
    } else if (/iPad/.test(ua)) {
        return {
            deviceName: "iPad",
            osVersion: ua.match(/OS (\d+_\d+)/)?.[1]?.replace("_", ".") || "Unknown",
        };
    } else if (/Android/.test(ua)) {
        return {
            deviceName: ua.match(/\(.*?\)/)?.[0]?.replace(/[()]/g, "") || "Android Device",
            osVersion: ua.match(/Android (\d+(\.\d+)*)/)?.[1] || "Unknown",
        };
    }
    return { deviceName: "Unknown", osVersion: "Unknown" };
}

async function getLocationInfo() {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        return {
            ip: data.ip || "Unknown",
            country: data.country_name || "Unknown",
            city: data.city || "Unknown",
            region: data.region || "Unknown",
        };
    } catch {
        return { ip: "Unknown", country: "Unknown", city: "Unknown", region: "Unknown" };
    }
}

async function getBatteryInfo() {
    try {
        const nav = navigator as any;
        if (nav.getBattery) {
            const battery = await nav.getBattery();
            return {
                level: Math.round(battery.level * 100),
                charging: battery.charging,
            };
        }
    } catch { }
    return null;
}

export default function DownloadRedirect({
    redirectUrl,
    platform,
    serverIp,
    serverUserAgent,
    serverReferrer,
    tracking,
}: Props) {
    useEffect(() => {
        async function collectAndRedirect() {
            const ua = navigator.userAgent;
            const device = getDeviceName(ua);
            const location = await getLocationInfo();
            const battery = await getBatteryInfo();
            const conn = (navigator as any).connection;

            const deviceInfo = {
                // Device
                userAgent: ua,
                platform,
                deviceName: device.deviceName,
                osVersion: device.osVersion,
                redirectUrl,
                timestamp: new Date().toISOString(),

                // Screen
                screen: {
                    width: window.screen.width,
                    height: window.screen.height,
                    orientation: window.screen.orientation?.type || "Unknown",
                    pixelRatio: window.devicePixelRatio || 1,
                },

                // Browser
                browser: {
                    language: navigator.language || "Unknown",
                    platform: navigator.platform || "Unknown",
                    onLine: navigator.onLine,
                    cookiesEnabled: navigator.cookieEnabled,
                    vendor: navigator.vendor || "Unknown",
                },

                // Hardware
                hardware: {
                    memory: (navigator as any).deviceMemory || "Unknown",
                    cores: navigator.hardwareConcurrency || "Unknown",
                },

                // Battery
                battery,

                // Connection
                connection: {
                    type: conn?.type || "Unknown",
                    effectiveType: conn?.effectiveType || "Unknown",
                    downlink: conn?.downlink || "Unknown",
                    rtt: conn?.rtt || "Unknown",
                },

                // Location (from IP)
                location,

                // Server-side info
                serverIp,
                referrer: document.referrer || serverReferrer || "Unknown",
                ...(tracking ? { tracking } : {}),
            };

            // Send analytics if API is configured
            try {
                await fetch("/api/generic/download-analytics", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(deviceInfo),
                });
            } catch (e) {
                console.error("Analytics failed:", e);
            }

            // Always redirect
            window.location.href = redirectUrl;
        }

        collectAndRedirect();
    }, [redirectUrl, platform, serverIp, serverUserAgent, serverReferrer, tracking]);

    return (
        <div className="min-h-screen bg-[#fdf6ee] flex flex-col items-center justify-center">
            <img src="/images/logo.png" alt="DivineSarathi" className="h-12 mb-6 animate-pulse" />
            <p className="font-cormorant text-[1.2rem] text-[#D9712C]">
                Redirecting you to the app...
            </p>
        </div>
    );
}
