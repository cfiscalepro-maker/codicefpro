// Post-build audit of multilingual SEO: canonicals, hreflang existence and reciprocity, sitemap, lang attributes.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const dist = 'dist', SITE = 'https://codicefiscalepro.com';
const pages = []; (function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : f === 'index.html' && pages.push(p); } })(dist);
const urlOf = (f) => SITE + '/' + f.replace(/^dist\//, '').replace(/index\.html$/, '');
const data = new Map();
for (const f of pages) {
  const h = readFileSync(f, 'utf8'); const url = urlOf(f);
  if (/name="robots" content="noindex/.test(h)) continue;
  const canon = [...h.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
  const alts = new Map([...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
  data.set(url, { canon, alts, lang: (h.match(/<html lang="([^"]+)"/) || [])[1], title: (h.match(/<title>(.*?)<\/title>/) || [])[1], desc: (h.match(/name="description" content="([^"]*)"/) || [])[1], h1: (h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) || []).length });
}
const errs = [];
for (const [url, d] of data) {
  if (!url.match(/\/(it|de|fr|es|en)\/$/) && !url.match(/\/(it|de|fr|es|en)\//)) continue;
  if (d.canon.length !== 1 || d.canon[0] !== url) errs.push(`canonical ${url} -> ${d.canon}`);
  if (d.h1 !== 1) errs.push(`h1 count ${d.h1} on ${url}`);
  if (!d.desc || d.desc.length > 165) errs.push(`description length ${d.desc?.length} on ${url}`);
  const self = [...d.alts.values()].includes(url);
  if (d.alts.size && !self) errs.push(`no self hreflang ${url}`);
  for (const [hl, href] of d.alts) {
    const t = data.get(href);
    if (!t) { errs.push(`hreflang ${hl} from ${url} points to missing/noindex ${href}`); continue; }
    if (hl !== 'x-default' && ![...t.alts.values()].includes(url)) errs.push(`not reciprocal: ${url} -> ${href}`);
    if (hl !== 'x-default' && t.alts.size !== d.alts.size) errs.push(`alternate set differs: ${url} vs ${href}`);
  }
}
// unique titles / descriptions within a locale
const seen = { t: new Map(), d: new Map() };
for (const [url, d] of data) { for (const [k, v] of [['t', d.title], ['d', d.desc]]) { const key = url.split('/')[3] + '|' + v; if (seen[k].has(key)) errs.push(`duplicate ${k} ${url} = ${seen[k].get(key)}`); seen[k].set(key, url); } }
const sm = readFileSync(`${dist}/sitemap-0.xml`, 'utf8'); const locs = [...sm.matchAll(/<loc>([^<]+)/g)].map((m) => m[1]);
for (const l of locs) if (!data.has(l)) errs.push(`sitemap URL not a built indexable page: ${l}`);
for (const u of data.keys()) if (/\/(it|de|fr|es|en)\//.test(u) && !locs.includes(u)) errs.push(`indexable page missing from sitemap: ${u}`);
console.log(`${data.size} indexable pages, ${locs.length} sitemap URLs, ${errs.length} problems`); errs.slice(0, 40).forEach((e) => console.log(' -', e));
process.exit(errs.length ? 1 : 0);
