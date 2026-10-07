import { describe, it, expect } from 'vitest';
import { locales, pagePath, SITE, type PageKey } from '../src/i18n/config';
import { localeGuides } from '../src/i18n/content';
import { guideKeys, guidePath } from '../src/data/guides';
import { buildPageGraph, schemaLang, ORG_ID, FOUNDING_DATE } from '../src/lib/seo/schema';

const keys: PageKey[] = ['home', 'inverse', 'verify', 'guides', 'about', 'contact', 'privacy', 'terms'];
const faq = [{ q: 'Q?', a: 'A.' }, { q: 'Q2?', a: 'A2.' }, { q: 'Q3?', a: 'A3.' }];
const types = (g: any[]) => g.map((n) => n['@type']);
const forbidden = ['GovernmentOrganization', 'LocalBusiness', 'Product', 'Review', 'AggregateRating', 'Dataset', 'QAPage', 'Person'];

describe('structured data', () => {
  it('has no schema on noindex pages and unknown paths', () => {
    expect(buildPageGraph({ path: '/404/', title: 't', description: 'd', noindex: true })).toBeNull();
    expect(buildPageGraph({ path: '/500/', title: 't', description: 'd', noindex: true })).toBeNull();
    expect(buildPageGraph({ path: '/nope/', title: 't', description: 'd' })).toBeNull();
  });

  it.each(locales)('%s: page types follow the page map', (l) => {
    const t = (k: PageKey) => types(buildPageGraph({ path: pagePath(l, k), title: 't', description: 'd' })!);
    expect(t('home')).toEqual(['Organization', 'WebSite', 'WebPage', 'WebApplication']);
    expect(t('inverse')).toEqual(['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList']);
    expect(t('verify')).toEqual(['Organization', 'WebSite', 'WebPage', 'WebApplication', 'BreadcrumbList']);
    expect(t('about')).toEqual(['Organization', 'WebSite', 'AboutPage', 'BreadcrumbList']);
    expect(t('contact')).toEqual(['Organization', 'WebSite', 'ContactPage', 'BreadcrumbList']);
    for (const k of ['privacy', 'terms', 'guides'] as PageKey[]) expect(t(k)).toEqual(['Organization', 'WebSite', 'WebPage', 'BreadcrumbList']);
  });

  it.each(locales)('%s: ids unique, urls absolute, language correct, nothing forbidden, references resolve', (l) => {
    const paths = [
      ...keys.map((k) => ({ path: pagePath(l, k), guide: false })),
      ...Object.values(localeGuides(l)).map((g) => ({ path: `/${l}/${pagePath(l, 'guides').split('/')[2]}/${g.slug}/`, guide: true })),
    ];
    if (l === 'it') paths.push(...guideKeys.map((k) => ({ path: guidePath(k), guide: true })));
    for (const { path, guide } of paths) {
      const g = buildPageGraph({ path, title: 'T', description: 'D', headline: 'H', published: '2026-10-05', faq: guide ? faq : undefined })!;
      expect(g, path).toBeTruthy();
      const ids = g.map((n) => n['@id'] as string);
      expect(new Set(ids).size, path).toBe(ids.length);
      const json = JSON.stringify(g);
      expect(() => JSON.parse(json)).not.toThrow();
      for (const id of ids) expect(id.startsWith(SITE), `${path} ${id}`).toBe(true);
      for (const ref of json.match(/"@id":"[^"]+"/g)!) { const v = ref.slice(7, -1); if (v.includes('#')) expect(ids, `${path} dangling ${v}`).toContain(v); }
      for (const n of g) {
        if (n['@type'] !== 'Organization') expect(n.inLanguage ?? 'n/a', `${path} ${n['@type']}`).toBe(n['@type'] === 'BreadcrumbList' ? 'n/a' : schemaLang[l]);
        expect(forbidden).not.toContain(n['@type']);
      }
      expect(json).not.toMatch(/ratingValue|reviewCount|SearchAction/);
    }
  });

  it('guides carry Article, Breadcrumb (3 levels) and FAQPage from visible FAQs', () => {
    const p = `/it/guide/${guideKeys[0]}/`;
    const g = buildPageGraph({ path: p, title: 'T', description: 'D', headline: 'H', published: '2026-10-05', modified: '2026-10-06', faq })!;
    expect(types(g)).toEqual(['Organization', 'WebSite', 'Article', 'BreadcrumbList', 'FAQPage']);
    const a: any = g.find((n) => n['@type'] === 'Article');
    expect(a.datePublished).toBe('2026-10-05'); expect(a.dateModified).toBe('2026-10-06'); expect(a.author['@id']).toBe(ORG_ID);
    expect((g.find((n) => n['@type'] === 'BreadcrumbList') as any).itemListElement).toHaveLength(3);
  });

  it('home page adds FAQPage only when it has visible FAQs', () => {
    const g = buildPageGraph({ path: '/de/', title: 't', description: 'd', faq })!;
    expect(types(g)).toEqual(['Organization', 'WebSite', 'WebPage', 'WebApplication', 'FAQPage']);
    expect((g[4] as any)['@id']).toBe(SITE + '/de/#faq');
    expect((g[4] as any).inLanguage).toBe('de-DE');
  });

  it('organization has the founding date and no invented properties', () => {
    const o: any = buildPageGraph({ path: '/it/', title: 't', description: 'd' })![0];
    expect(o.foundingDate).toBe(FOUNDING_DATE);
    for (const bad of ['address', 'telephone', 'sameAs', 'numberOfEmployees', 'award', 'aggregateRating']) expect(o[bad]).toBeUndefined();
  });

  it('the Swiss locale is gone', () => { expect(locales).not.toContain('it-ch' as never); });
});
