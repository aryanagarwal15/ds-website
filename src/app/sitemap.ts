import type { MetadataRoute } from "next";
import { ROUTES, hindiPath, type RouteKey } from "@/lib/routes";
import { abs, hreflang } from "@/lib/seo";
import { PLUS_PUBLIC } from "@/lib/site";

/** Built from the route list: every indexable page, its Hindi twin, and the date its content last changed. */
export default function sitemap(): MetadataRoute.Sitemap {
  const keys = (Object.keys(ROUTES) as RouteKey[]).filter((k) => ROUTES[k].index && (k !== "plus" || PLUS_PUBLIC));
  return keys.flatMap((k) => {
    const r = ROUTES[k];
    const entry = (path: string) => ({
      url: abs(path),
      lastModified: new Date(r.updated + "T00:00:00+05:30"),
      priority: r.priority,
      alternates: { languages: hreflang(k) },
    });
    const hi = hindiPath(k);
    return hi ? [entry(r.en), entry(hi)] : [entry(r.en)];
  });
}
