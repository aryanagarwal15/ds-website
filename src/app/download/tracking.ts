export type DownloadTracking = {
    /** Influencer or campaign id, e.g. InstaUser1234 */
    ref: string | null;
    utm: {
        source: string | null;
        medium: string | null;
        campaign: string | null;
        content: string | null;
        term: string | null;
    };
};

function first(value: string | string[] | undefined): string | null {
    if (value == null) return null;
    const v = (Array.isArray(value) ? value[0] : value).trim();
    return v || null;
}

/** Parse ?ref= and standard utm_* params from /download URLs. */
export function parseDownloadTracking(
    searchParams: Record<string, string | string[] | undefined> | undefined,
): DownloadTracking | null {
    if (!searchParams) return null;

    const utm = {
        source: first(searchParams.utm_source),
        medium: first(searchParams.utm_medium),
        campaign: first(searchParams.utm_campaign),
        content: first(searchParams.utm_content),
        term: first(searchParams.utm_term),
    };

    const ref =
        first(searchParams.ref) ??
        first(searchParams.track) ??
        utm.campaign;

    const hasUtm = Object.values(utm).some(Boolean);
    if (!ref && !hasUtm) return null;

    return { ref, utm };
}

export function hasDownloadTracking(tracking: DownloadTracking | null): tracking is DownloadTracking {
    return tracking !== null;
}
