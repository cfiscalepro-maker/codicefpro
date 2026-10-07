import { SITE, pagePath, type Locale, type PageKey } from '../../i18n/config';
import { ui } from '../../i18n/ui';
import { resolvePath } from '../../i18n/alternates';

type Node = Record<string, unknown>;
export type Faq = { q: string; a: string };

/** Organization founding date (ISO 8601). */
export const FOUNDING_DATE = '2026-10-04';
export const SITE_NAME = 'Codice Fiscale Pro';
export const ORG_ID = `${SITE}/#organization`;

/** Value for schema.org inLanguage, per site locale. */
export const schemaLang: Record<Locale, string> = { it: 'it-IT', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', en: 'en' };

const abs = (path: string) => SITE + path;
const websiteId = (l: Locale) => abs(pagePath(l, 'home')) + '#website';

export function buildOrganizationSchema(): Node {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    alternateName: ['Codice Fiscale Pro Team', 'Calcolo Codice Fiscale'],
    url: SITE + '/',
    logo: { '@type': 'ImageObject', url: SITE + '/icon-512.png', width: 512, height: 512 },
    email: 'contact@codicefiscalepro.com',
    foundingDate: FOUNDING_DATE,
  };
}

/** One WebSite per locale, so each language version has its own entity and language. */
export function buildWebsiteSchema(locale: Locale): Node {
  return {
    '@type': 'WebSite',
    '@id': websiteId(locale),
    url: abs(pagePath(locale, 'home')),
    name: SITE_NAME,
    publisher: { '@id': ORG_ID },
    inLanguage: schemaLang[locale],
  };
}

export type WebPageType = 'WebPage' | 'AboutPage' | 'ContactPage';
export function buildWebPageSchema(o: {
  url: string; name: string; description: string; locale: Locale; type?: WebPageType;
  about?: boolean; mainEntityId?: string; breadcrumb?: boolean;
}): Node {
  return {
    '@type': o.type ?? 'WebPage',
    '@id': o.url + '#webpage',
    url: o.url,
    name: o.name,
    description: o.description,
    isPartOf: { '@id': websiteId(o.locale) },
    ...(o.about ? { about: { '@id': ORG_ID } } : {}),
    ...(o.mainEntityId ? { mainEntity: { '@id': o.mainEntityId } } : {}),
    ...(o.breadcrumb ? { breadcrumb: { '@id': o.url + '#breadcrumb' } } : {}),
    inLanguage: schemaLang[o.locale],
  };
}
export const buildAboutPageSchema = (o: Omit<Parameters<typeof buildWebPageSchema>[0], 'type'>) => buildWebPageSchema({ ...o, type: 'AboutPage' });
export const buildContactPageSchema = (o: Omit<Parameters<typeof buildWebPageSchema>[0], 'type'>) => buildWebPageSchema({ ...o, type: 'ContactPage' });

/** Only for pages that are real, interactive tools. No ratings or reviews, none exist. */
export function buildWebApplicationSchema(o: { url: string; name: string; description: string; locale: Locale }): Node {
  return {
    '@type': 'WebApplication',
    '@id': o.url + '#application',
    name: o.name,
    url: o.url,
    description: o.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    publisher: { '@id': ORG_ID },
    inLanguage: schemaLang[o.locale],
  };
}

export function buildBreadcrumbSchema(url: string, items: { name: string; url: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': url + '#breadcrumb',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

export function buildArticleSchema(o: {
  url: string; locale: Locale; headline: string; description: string; datePublished: string; dateModified?: string;
}): Node {
  return {
    '@type': 'Article',
    '@id': o.url + '#article',
    headline: o.headline,
    description: o.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': o.url },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': websiteId(o.locale) },
    datePublished: o.datePublished,
    dateModified: o.dateModified ?? o.datePublished,
    inLanguage: schemaLang[o.locale],
  };
}

/** Call only with FAQs that are visible on the page. */
export function buildFAQSchema(o: { url: string; locale: Locale; faq: Faq[] }): Node {
  return {
    '@type': 'FAQPage',
    '@id': o.url + '#faq',
    url: o.url,
    inLanguage: schemaLang[o.locale],
    mainEntity: o.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/**
 * Builds the JSON-LD graph for a page from its path. Returns null for pages that must not carry
 * SEO structured data (noindex pages such as 404 and 500, or paths that are not site pages).
 */
export function buildPageGraph(o: {
  path: string; title: string; description: string; noindex?: boolean;
  headline?: string; published?: string; modified?: string; faq?: Faq[];
}): Node[] | null {
  if (o.noindex) return null;
  const r = resolvePath(o.path);
  if (!r) return null;
  const { locale } = r;
  const url = abs(o.path);
  const t = ui[locale];
  const graph: Node[] = [buildOrganizationSchema(), buildWebsiteSchema(locale)];
  const home = { name: t.guide.home, url: abs(pagePath(locale, 'home')) };

  if (r.kind === 'guide') {
    graph.push(
      buildArticleSchema({ url, locale, headline: o.headline ?? o.title, description: o.description, datePublished: o.published!, dateModified: o.modified }),
      buildBreadcrumbSchema(url, [home, { name: t.guide.guides, url: abs(pagePath(locale, 'guides')) }, { name: o.headline ?? o.title, url }]),
    );
    if (o.faq?.length) graph.push(buildFAQSchema({ url, locale, faq: o.faq }));
    return graph;
  }

  const key: PageKey = r.key;
  const common = { url, name: o.title, description: o.description, locale };
  if (key === 'home') {
    // The home page is the calculator.
    graph.push(
      buildWebPageSchema({ ...common, about: true, mainEntityId: url + '#application' }),
      buildWebApplicationSchema({ url, locale, name: t.guide.calcName, description: o.description }),
    );
    if (o.faq?.length) graph.push(buildFAQSchema({ url, locale, faq: o.faq }));
    return graph;
  }

  const label: Record<Exclude<PageKey, 'home'>, string> = {
    inverse: t.footer.inverseLink, verify: t.footer.verifyLink, guides: t.footer.guides,
    about: t.footer.about, contact: t.footer.contact, privacy: t.footer.privacy, terms: t.footer.terms,
  };
  const crumb = buildBreadcrumbSchema(url, [home, { name: label[key], url }]);
  if (key === 'inverse' || key === 'verify') {
    graph.push(
      buildWebPageSchema({ ...common, mainEntityId: url + '#application', breadcrumb: true }),
      buildWebApplicationSchema({ url, locale, name: key === 'inverse' ? t.guide.inverseName : t.guide.verifyName, description: o.description }),
      crumb,
    );
  } else if (key === 'about') {
    graph.push(buildAboutPageSchema({ ...common, about: true, breadcrumb: true }), crumb);
  } else if (key === 'contact') {
    graph.push(buildContactPageSchema({ ...common, breadcrumb: true }), crumb);
  } else {
    graph.push(buildWebPageSchema({ ...common, breadcrumb: true }), crumb);
  }
  return graph;
}
