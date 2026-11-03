// Tells Bing (and other IndexNow engines) that pages changed, right after a deploy is live.
// Usage: npm run indexnow            -> every URL in the live sitemap
//        npm run indexnow -- /a /b   -> just these paths
// The key is public by design: it lives at /104022bddeb114239d7367ebc002a09e.txt so engines can check we own the site.

const HOST = "www.divinesarathi.in";
const KEY = "104022bddeb114239d7367ebc002a09e";

const paths = process.argv.slice(2);
let urls;
if (paths.length) {
  urls = paths.map((p) => `https://${HOST}${p.startsWith("/") ? p : "/" + p}`);
} else {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URLs`);
if (res.status >= 400) process.exit(1);
