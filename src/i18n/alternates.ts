import { locales, isLocale, pageKeys, pageSlugs, pagePath, localeMeta, SITE, type Locale, type PageKey } from './config';
import { guides, guideKeys } from '../data/guides';
import { localeGuides } from './content';

export type Resolved = { locale: Locale; kind: 'page'; key: PageKey } | { locale: Locale; kind: 'guide'; key: string };

export const localeOf = (path: string): Locale => { const s = path.split('/')[1]; return isLocale(s) ? s : 'it'; };

const guideSlug = (l: Locale, key: string): string | undefined => (l === 'it' ? (guideKeys.includes(key) ? key : undefined) : localeGuides(l)[key]?.slug);
export const guidePathFor = (l: Locale, key: string): string | undefined => { const s = guideSlug(l, key); return s ? `/${l}/${pageSlugs[l].guides}/${s}/` : undefined; };

export function resolvePath(path: string): Resolved | null {
  const segs = path.split('/').filter(Boolean);
  if (!segs.length || !isLocale(segs[0])) return null;
  const locale = segs[0];
  if (segs.length === 1) return { locale, kind: 'page', key: 'home' };
  if (segs.length === 2) { const k = pageKeys.find((p) => p !== 'home' && pageSlugs[locale][p] === segs[1]); return k ? { locale, kind: 'page', key: k } : null; }
  if (segs.length === 3 && segs[1] === pageSlugs[locale].guides) {
    const key = guideKeys.find((k) => guideSlug(locale, k) === segs[2]);
    return key ? { locale, kind: 'guide', key } : null;
  }
  return null;
}
const pathIn = (r: Resolved, l: Locale): string | undefined => (r.kind === 'page' ? (r.key === 'guides' && l !== 'it' && !Object.keys(localeGuides(l)).length ? undefined : pagePath(l, r.key)) : guidePathFor(l, r.key));

/** hreflang entries for a page: itself and every locale where an equivalent really exists. */
export function alternatesFor(path: string) {
  const r = resolvePath(path); if (!r) return [];
  const out = locales.flatMap((l) => { const p = pathIn(r, l); return p ? [{ locale: l, hreflang: localeMeta[l].hreflang, href: SITE + p }] : []; });
  const it = pathIn(r, 'it');
  return it ? [...out, { locale: 'it' as Locale, hreflang: 'x-default', href: SITE + it }] : out;
}
/** Language selector: the equivalent page when it exists, otherwise that language's home page. */
export function selectorLinks(path: string) {
  const r = resolvePath(path);
  return locales.map((l) => { const p = r ? pathIn(r, l) : undefined; return { locale: l, label: localeMeta[l].label, hreflang: localeMeta[l].hreflang, href: p ?? pagePath(l, 'home'), exact: !!p }; });
}
/** Guides available in a locale, in canonical order. */
export function guideList(l: Locale) {
  if (l === 'it') return guides.map((g) => ({ key: g.slug, title: g.title, desc: g.desc, path: `/it/${pageSlugs.it.guides}/${g.slug}/` }));
  const lg = localeGuides(l);
  return guideKeys.filter((k) => lg[k]).map((k) => ({ key: k, title: lg[k].title, desc: lg[k].indexDesc, path: guidePathFor(l, k)! }));
}
/** Resolve {{p:key}} and {{g:key}} tokens. A link to a guide that does not exist in this locale is reduced to its text. */
export function resolveLinks(html: string, l: Locale): string {
  return html
    .replace(/<a\s([^>]*?)href="\{\{g:([\w-]+)\}\}"([^>]*)>([\s\S]*?)<\/a>/g, (_, pre, k, post, inner) => { const p = guidePathFor(l, k); return p ? `<a ${pre}href="${p}"${post}>${inner}</a>` : inner; })
    .replace(/\{\{p:(\w+)\}\}/g, (_, k) => pagePath(l, k as PageKey));
}
