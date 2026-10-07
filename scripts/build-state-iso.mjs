// Usage: node scripts/build-state-iso.mjs
// Maps Agenzia delle Entrate foreign-state codes (Z###) to ISO 3166-1 alpha-2, so the UI can show and search
// country names in the visitor's language through Intl.DisplayNames. States with no ISO equivalent
// (dependencies, dissolved states, disputed territories) are left unmapped and stay searchable by their Italian name.
import { readFileSync, writeFileSync } from 'node:fs';
const fold = (s) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const places = JSON.parse(readFileSync('src/data/places.json', 'utf8')).places.filter((p) => p.kind === 'estero');
const dn = new Intl.DisplayNames(['it'], { type: 'region' });
const byName = {};
for (let a = 65; a < 91; a++) for (let b = 65; b < 91; b++) {
  const c = String.fromCharCode(a, b); let n; try { n = dn.of(c); } catch { continue; }
  if (n && n !== c) byName[fold(n)] = c;
}
// Names where the Agenzia wording differs from CLDR's Italian name. Each pair was checked by hand.
const manual = { Z110: 'FR', Z106: 'VA', Z108: 'FO', Z140: 'MD', Z153: 'BA', Z154: 'RU', Z156: 'CZ', Z161: 'PS', Z206: 'MM', Z210: 'CN',
  Z212: 'CC', Z213: 'KR', Z214: 'KP', Z231: 'MO', Z242: 'TL', Z255: 'KZ', Z311: 'CG', Z312: 'CD', Z347: 'ZA', Z404: 'US',
  Z518: 'PR', Z520: 'VI', Z609: 'FK', Z702: 'CX', Z706: 'GU', Z710: 'MP', Z715: 'NF', Z723: 'PF', Z725: 'AS', Z727: 'TK',
  Z729: 'WF', Z735: 'FM' };
const dead = new Set(['YU', 'CS', 'SU', 'AN', 'FX', 'DD', 'ZR', 'TP', 'BU']);
const map = {};
for (const p of places) { const iso = manual[p.code] ?? byName[fold(p.name)]; if (iso && !dead.has(iso)) map[p.code] = iso; }
writeFileSync('src/data/state-iso.json', JSON.stringify(map));
console.log(`${Object.keys(map).length} of ${places.length} states mapped`);
