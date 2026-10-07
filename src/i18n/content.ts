import type { Locale } from './config';
import type { Dict } from './ui/it';

export interface GuideContent {
  slug: string; title: string; h1: string; description: string; summary: string; audience: string;
  faq: { q: string; a: string }[]; body: string; related: string[]; datePublished: string; indexDesc: string;
}
export interface PageContent { title: string; description: string; h1: string; eyebrow?: string; intro?: string; body: string }
export interface LocaleContent {
  home: { title: string; description: string; h1: string; eyebrow: string; intro: string; afterTool: string };
  inverse: PageContent; verify: PageContent; about: PageContent; contact: PageContent; privacy: PageContent; terms: PageContent;
  guides: { title: string; description: string; h1: string; intro: string; other?: string };
}

const pageMods = import.meta.glob('../content/*/index.ts', { eager: true }) as Record<string, { default: LocaleContent }>;
const guideMods = import.meta.glob('../content/*/guides/*.ts', { eager: true }) as Record<string, { default: GuideContent }>;

export function localeContent(l: Locale): LocaleContent | undefined {
  return pageMods[`../content/${l}/index.ts`]?.default;
}
/** Guides written for a locale, keyed by the canonical (Italian) guide key, which is the file name. */
export function localeGuides(l: Locale): Record<string, GuideContent> {
  const out: Record<string, GuideContent> = {};
  for (const [p, m] of Object.entries(guideMods)) {
    const mt = p.match(/\.\.\/content\/([^/]+)\/guides\/([^/]+)\.ts$/);
    if (mt && mt[1] === l) out[mt[2]] = m.default;
  }
  return out;
}
export type { Dict };
