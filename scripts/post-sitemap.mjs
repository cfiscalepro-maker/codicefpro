// Runs after `astro build`. Adds xhtml:link hreflang alternates to sitemap-0.xml, read from the built pages themselves,
// so the sitemap can never disagree with the <link rel="alternate"> tags that are actually served.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const dist = 'dist';
const file = `${dist}/sitemap-0.xml`;
if (!existsSync(file)) { console.error('sitemap-0.xml not found'); process.exit(1); }
let xml = readFileSync(file, 'utf8');
if (!xml.includes('xmlns:xhtml')) xml = xml.replace('<urlset ', '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml" ');
let withAlt = 0;
xml = xml.replace(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g, (m, loc, rest) => {
  const path = new URL(loc).pathname;
  const f = `${dist}${path}index.html`;
  if (!existsSync(f)) return m;
  const html = readFileSync(f, 'utf8');
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((x) => `<xhtml:link rel="alternate" hreflang="${x[1]}" href="${x[2]}"/>`);
  if (!alts.length) return m;
  withAlt++;
  return `<url><loc>${loc}</loc>${alts.join('')}${rest.replace(/<xhtml:link[^>]*\/>/g, '')}</url>`;
});
writeFileSync(file, xml);
console.log(`sitemap: hreflang alternates added to ${withAlt} URLs`);
