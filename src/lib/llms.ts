import { FAQS } from "@/content/faqs";
import { FEATURES, type FeatureKey } from "@/content/features";
import { ROUTES, hindiPath, routesInGroup, type RouteKey } from "./routes";
import { abs } from "./seo";
import { APP_STORE_URL, CONTACT_EMAIL, FOUNDERS, PLAY_STORE_URL, RATINGS, SITE_NAME, SOCIAL } from "./site";

/**
 * llms.txt and llms-full.txt, generated from the same route list and content
 * as the pages, so what AI assistants read is always what the site says.
 */

const SUMMARY = `${SITE_NAME} is a free app for iPhone and Android where people talk with Krishna AI, an AI voice grounded in the Bhagavad Gita, by voice or text, in English or Hindi. It also has a sacred story every morning, the Bhagavad Gita verse by verse (18 chapters, 700 shlokas), Daily Sadhana and guided breath meditation. Made in India by ${FOUNDERS.map((f) => f.name).join(" and ")}.`;

const line = (k: RouteKey) => `- [${ROUTES[k].name.en}](${abs(ROUTES[k].en)}): ${ROUTES[k].description.en}`;
const FEATURE_KEYS: FeatureKey[] = ["krishnaAi", "gita", "dailyPuja", "dhyana"];

export function generateLlmsTxt(): string {
  const hindi = (Object.keys(ROUTES) as RouteKey[]).filter((k) => hindiPath(k) && ROUTES[k].index);
  return `# ${SITE_NAME}

> ${SUMMARY}

Key facts: free to download; text chat with Krishna, the daily story, the Gita and meditation are free; languages English and Hindi; ${RATINGS.appStore.value.toFixed(1)} on the App Store and ${RATINGS.googlePlay.value.toFixed(1)} on Google Play (as of ${RATINGS.asOf}); ${RATINGS.downloads} downloads on Google Play. Krishna AI is an AI, not Krishna, and is not meant for medical, legal or financial advice. No audio of your voice is saved; written transcripts are kept, never sold, and deleted with the account. Contact: ${CONTACT_EMAIL}.

## In the app

${line("home")}
${FEATURE_KEYS.map(line).join("\n")}

## Get the app

- [App Store](${APP_STORE_URL}): DivineSarathi for iPhone and iPad.
- [Google Play](${PLAY_STORE_URL}): DivineSarathi for Android.
${line("download")}

## Company

${routesInGroup("company").map(line).join("\n")}

## Trust and legal

${routesInGroup("legal").map(line).join("\n")}

## Hindi (हिंदी)

${hindi.map((k) => `- [${ROUTES[k].name.hi}](${abs(hindiPath(k) as string)}): ${ROUTES[k].description.hi}`).join("\n")}

## More

- [Full text for AI assistants](${abs("/llms-full.txt")}): the pages above as plain text in one file.
- [Sitemap](${abs("/sitemap.xml")})
${Object.values(SOCIAL).map((u) => `- ${u}`).join("\n")}
`;
}

export function generateLlmsFullTxt(): string {
  const features = FEATURE_KEYS.map((k) => {
    const f = FEATURES[k].en;
    return `## ${ROUTES[k].name.en}

URL: ${abs(ROUTES[k].en)}

${f.lede}

${f.points.map((p) => `- **${p.title}.** ${p.body}`).join("\n")}

${f.detail.listTitle}:
${f.detail.list.map((x) => `- ${x}`).join("\n")}

${f.faqs.map((q) => `### ${q.q}\n\n${q.a}`).join("\n\n")}`;
  }).join("\n\n");
  const faqs = FAQS.en.map((g) => `## FAQs: ${g.title}\n\n${g.items.map((q) => `### ${q.q}\n\n${q.a}`).join("\n\n")}`).join("\n\n");
  return `${generateLlmsTxt()}

---

# ${SITE_NAME}, in full

${features}

${faqs}
`;
}
