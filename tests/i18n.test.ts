import { describe, it, expect } from 'vitest';
import { ui } from '../src/i18n/ui';
import { locales, pageSlugs, pagePath } from '../src/i18n/config';
import { localeContent, localeGuides } from '../src/i18n/content';
import { alternatesFor, resolvePath, resolveLinks, guideList } from '../src/i18n/alternates';
import { placeName, extraNames } from '../src/lib/cf/place-i18n';
import { prettyName, createPlaceIndex } from '../src/lib/cf/places';
import { surnameCode } from '../src/lib/cf/engine';
import data from '../src/data/places.json';

const shape = (o: any, p = ''): string[] => Object.entries(o).flatMap(([k, v]) => typeof v === 'object' ? shape(v, p + k + '.') : [p + k]);
const ph = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort().join(',');
const flat = (o: any, p = ''): [string, string][] => Object.entries(o).flatMap(([k, v]) => typeof v === 'object' ? flat(v, p + k + '.') : [[p + k, v as string]]);

describe('UI dictionaries', () => {
  const base = shape(ui.it).sort();
  it.each(locales)('%s has exactly the keys of the Italian dictionary', (l) => expect(shape(ui[l]).sort()).toEqual(base));
  it.each(locales)('%s keeps the same placeholders as Italian', (l) => {
    const it = Object.fromEntries(flat(ui.it)); for (const [k, v] of flat(ui[l])) expect(ph(v), `${l}:${k}`).toBe(ph(it[k]));
  });
  it.each(locales)('%s has no empty strings or em dashes', (l) => { for (const [k, v] of flat(ui[l])) { expect(v.trim(), `${l}:${k}`).not.toBe(''); expect(v.includes('—'), `${l}:${k}`).toBe(false); } });
});
describe('routes', () => {
  it.each(locales)('%s slugs are unique and clean', (l) => {
    const v = Object.values(pageSlugs[l]); expect(new Set(v).size).toBe(v.length);
    v.forEach((s) => expect(s).toMatch(/^[a-z0-9-]+$/));
  });
  it('paths resolve back to their page', () => { for (const l of locales) for (const k of Object.keys(pageSlugs[l])) expect(resolvePath(pagePath(l, k as any))?.locale).toBe(l); });
  it('every non-Italian locale has content for all pages', () => {
    for (const l of locales.filter((x) => x !== 'it')) { const c = localeContent(l)!; expect(c, l).toBeTruthy(); for (const k of ['home', 'inverse', 'verify', 'about', 'contact', 'privacy', 'terms', 'guides']) expect((c as any)[k], `${l}.${k}`).toBeTruthy(); }
  });
  it('hreflang is reciprocal and only lists existing pages', () => {
    for (const l of locales) for (const k of ['home', 'inverse', 'verify', 'about', 'contact', 'privacy', 'terms']) {
      const p = pagePath(l, k as any); const a = alternatesFor(p).filter((x) => x.hreflang !== 'x-default');
      expect(a.map((x) => x.href)).toContain('https://codicefiscalepro.com' + p);
      for (const x of a) expect(alternatesFor(x.href.replace('https://codicefiscalepro.com', '')).map((y) => y.href).sort()).toEqual(alternatesFor(p).map((y) => y.href).sort());
    }
  });
  it('guide links to missing guides collapse to plain text', () => {
    const out = resolveLinks('<a class="x" href="{{g:nonexistent-guide}}">text</a> {{p:home}}', 'de'); expect(out).toBe('text /de/');
  });
});
describe('content rules', () => {
  const dash = /[—–]/;
  for (const l of locales.filter((x) => x !== 'it')) {
    const c = localeContent(l)!;
    it(`${l}: descriptions fit, no dashes, verify page carries the formal-vs-official statement`, () => {
      for (const [k, v] of Object.entries(c) as [string, any][]) {
        if (v.description) expect(v.description.length, `${l}.${k} description`).toBeLessThanOrEqual(160);
        for (const s of [v.title, v.h1, v.intro, v.body, v.afterTool, v.extra].filter(Boolean)) expect(dash.test(s), `${l}.${k}`).toBe(false);
      }
      expect(c.verify.intro).toMatch(/Agenzia delle Entrate/);
      expect(c.privacy.body).toContain('contact@codicefiscalepro.com');
    });
    it(`${l}: guides are complete and consistent`, () => {
      for (const [key, g] of Object.entries(localeGuides(l))) {
        expect(g.faq.length, `${l}/${key}`).toBeGreaterThanOrEqual(3);
        expect(g.description.length, `${l}/${key}`).toBeLessThanOrEqual(160);
        expect(dash.test(g.body + g.summary + g.h1), `${l}/${key}`).toBe(false);
        expect(g.slug).toMatch(/^[a-z0-9-]+$/);
      }
      expect(guideList(l).length).toBe(Object.keys(localeGuides(l)).length);
    });
  }
});
describe('place names in the visitor language', () => {
  it('shows country names per language', () => {
    expect(placeName({ kind: 'estero', name: 'GERMANIA', code: 'Z112' }, 'de')).toBe('Deutschland');
    expect(placeName({ kind: 'estero', name: "STATI UNITI D'AMERICA", code: 'Z404' }, 'en')).toBe('United States');
    expect(placeName({ kind: 'estero', name: 'SVIZZERA', code: 'Z133' }, 'fr')).toBe('Suisse');
    expect(placeName({ kind: 'estero', name: 'SPAGNA', code: 'Z131' }, 'es')).toBe('España');
  });
  it('finds countries and cities by their local names', () => {
    const places = (data as any).places; const norm = (loc: string) => createPlaceIndex(places, (p: any) => extraNames(p, loc));
    expect(norm('de').search('Deutschland')[0].code).toBe('Z112');
    expect(norm('de').search('Mailand')[0].code).toBe('F205');
    expect(norm('en').search('Germany')[0].code).toBe('Z112');
    expect(norm('fr').search('Allemagne')[0].code).toBe('Z112');
    expect(norm('es').search('Alemania')[0].code).toBe('Z112');
    expect(norm('en').search('germania')[0].code).toBe('Z112');
  });
  it('formats comune names for display', () => {
    expect(prettyName('REGGIO NELL\'EMILIA')).toBe("Reggio nell'Emilia"); expect(prettyName("SANT'AGATA DE' GOTI")).toBe("Sant'Agata de' Goti");
    expect(prettyName('FORLÌ-CESENA')).toBe('Forlì-Cesena'); expect(prettyName('ROMA')).toBe('Roma');
  });
  it('Swiss example: Müller gives MLL', () => expect(surnameCode('Müller')).toBe('MLL'));
});

describe('guide sets stay in step across languages', () => {
  const others = locales.filter((l) => l !== 'it');
  const keys = (l: any) => Object.keys(localeGuides(l)).sort();
  it('every non-Italian language has the same guides', () => { for (const l of others) expect(keys(l), l).toEqual(keys('en')); });
  it('related keys point to real guide keys', async () => {
    const { guideKeys } = await import('../src/data/guides');
    for (const l of others) for (const [k, g] of Object.entries(localeGuides(l))) { expect(guideKeys, `${l}/${k}`).toContain(k); g.related.forEach((r) => expect(guideKeys, `${l}/${k} related ${r}`).toContain(r)); }
  });
  it('guide slugs are unique within a language', () => { for (const l of others) { const s = Object.values(localeGuides(l)).map((g) => g.slug); expect(new Set(s).size).toBe(s.length); } });
  it('each guide carries the required AEO parts', () => {
    for (const l of others) for (const [k, g] of Object.entries(localeGuides(l))) {
      expect(g.summary.length, `${l}/${k} summary`).toBeGreaterThan(120); expect(g.audience.length, `${l}/${k} audience`).toBeGreaterThan(60);
      expect((g.body.match(/<h2>[^<]*\?<\/h2>\s*<(p|ul|ol|div)/g) ?? []).length, `${l}/${k} question headings with direct answers`).toBeGreaterThanOrEqual(3);
      expect(g.body, `${l}/${k} sources`).toMatch(/<h2>(Sources|Quellen|Fuentes|Fonti)<\/h2>/);
    }
  });
});

import { homeExtra, homeFaq } from '../src/content/home';
describe('home page copy', () => {
  const words = (h: string) => (h.replace(/<[^>]+>/g, ' ').replace(/\{\{[^}]+\}\}/g, '').match(/[\p{L}\p{N}’'-]+/gu) ?? []).length;
  it.each(locales)('%s has 600+ words of body copy with a visible FAQ', (l) => {
    const faqWords = homeFaq[l].reduce((n, f) => n + words(f.q) + words(f.a), 0);
    expect(words(homeExtra[l]) + faqWords).toBeGreaterThan(600);
    expect(homeFaq[l].length).toBeGreaterThanOrEqual(5);
  });
  it.each(locales)('%s copy has no em dashes and no unresolved tokens', (l) => {
    const all = homeExtra[l] + JSON.stringify(homeFaq[l]);
    expect(all).not.toMatch(/—|–/);
    expect(all.replace(/\{\{[gp]:[\w-]+\}\}/g, '')).not.toMatch(/\{\{|\}\}/);
  });
});
