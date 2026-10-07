export const locales = ['it', 'de', 'fr', 'es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'it';
export const isLocale = (s: string): s is Locale => (locales as readonly string[]).includes(s);

export const localeMeta: Record<Locale, { hreflang: string; htmlLang: string; og: string; label: string; intl: string }> = {
  it: { hreflang: 'it', htmlLang: 'it', og: 'it_IT', label: 'Italiano', intl: 'it' },
  de: { hreflang: 'de', htmlLang: 'de', og: 'de_DE', label: 'Deutsch', intl: 'de' },
  fr: { hreflang: 'fr', htmlLang: 'fr', og: 'fr_FR', label: 'Français', intl: 'fr' },
  es: { hreflang: 'es', htmlLang: 'es', og: 'es_ES', label: 'Español', intl: 'es' },
  en: { hreflang: 'en', htmlLang: 'en', og: 'en_GB', label: 'English', intl: 'en' },
};

export type PageKey = 'home' | 'inverse' | 'verify' | 'guides' | 'about' | 'contact' | 'privacy' | 'terms';
export const pageKeys: PageKey[] = ['home', 'inverse', 'verify', 'guides', 'about', 'contact', 'privacy', 'terms'];

/** Localized URL segments. Keywords follow how people in each language search for the tool. */
export const pageSlugs: Record<Locale, Record<Exclude<PageKey, 'home'>, string>> = {
  it: { inverse: 'codice-fiscale-inverso', verify: 'verifica-codice-fiscale', guides: 'guide', about: 'chi-siamo', contact: 'contatti', privacy: 'privacy', terms: 'termini' },
  de: { inverse: 'codice-fiscale-entschluesseln', verify: 'codice-fiscale-pruefen', guides: 'ratgeber', about: 'ueber-uns', contact: 'kontakt', privacy: 'datenschutz', terms: 'nutzungsbedingungen' },
  fr: { inverse: 'decoder-codice-fiscale', verify: 'verifier-codice-fiscale', guides: 'guides', about: 'a-propos', contact: 'contact', privacy: 'confidentialite', terms: 'conditions-utilisation' },
  es: { inverse: 'descifrar-codice-fiscale', verify: 'verificar-codice-fiscale', guides: 'guias', about: 'sobre-nosotros', contact: 'contacto', privacy: 'privacidad', terms: 'condiciones-de-uso' },
  en: { inverse: 'decode-codice-fiscale', verify: 'check-codice-fiscale', guides: 'guides', about: 'about', contact: 'contact', privacy: 'privacy', terms: 'terms' },
};

export const pagePath = (l: Locale, k: PageKey) => (k === 'home' ? `/${l}/` : `/${l}/${pageSlugs[l][k]}/`);
export const SITE = 'https://codicefiscalepro.com';
