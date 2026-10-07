import iso from '../../data/state-iso.json';
import exo from '../../data/city-exonyms.json';
import { prettyName, type Place } from './places';
import type { Check } from './analyze';

const dnCache = new Map<string, Intl.DisplayNames | null>();
function dn(locale: string) {
  if (!dnCache.has(locale)) {
    try { dnCache.set(locale, new Intl.DisplayNames([locale], { type: 'region' })); } catch { dnCache.set(locale, null); }
  }
  return dnCache.get(locale)!;
}
const regionName = (code: string, locale: string): string | undefined => {
  const r = (iso as Record<string, string>)[code]; if (!r) return;
  try { const n = dn(locale)?.of(r); return n && n !== r ? n : undefined; } catch { return undefined; }
};
const exonyms = (code: string, loc: string): string[] => {
  const e = (exo as Record<string, Record<string, string[]>>)[code]; return e?.[loc] ?? [];
};

/** Name to show for a place in a given interface locale (Italian names for comuni, localized names for countries). */
export function placeName(p: Place, locale: string): string {
  if (p.kind === 'estero') return regionName(p.code, locale) ?? prettyName(p.name);
  return exonyms(p.code, locale)[0] ?? prettyName(p.name);
}
/** Names a visitor may type: Italian, English and the interface language. */
export function extraNames(p: Place, locale: string): string[] {
  const out = new Set<string>();
  for (const l of ['en', locale]) {
    if (p.kind === 'estero') { const n = regionName(p.code, l); if (n) out.add(n); }
    else for (const n of exonyms(p.code, l.slice(0, 2))) out.add(n);
  }
  return [...out];
}
export function placeLabel(p: Place, locale: string, foreignWord: string): string {
  return `${placeName(p, locale)} (${p.kind === 'comune' ? p.province : foreignWord})`;
}

/** Turn a language-free check into text using the dictionary. */
export function renderCheck(c: Check, t: Record<string, any>, f: (s: string, v?: Record<string, string | number>) => string, placeText?: string) {
  const k = t.checks[c.id];
  const v = (c.vars ?? {}) as Record<string, any>;
  let detail = '';
  if (c.id === 'omocodia') detail = v.omo ? k.yes : k.no;
  else if (c.id === 'placeKnown') detail = v.found ? f(k.found, { name: placeText ?? '' }) : k.unknown;
  else if (c.id === 'day' && c.status === 'ok') detail = f(k.ok, { day: v.day, sex: v.sex === 'F' ? k.sexF : k.sexM });
  else detail = f(c.status === 'fail' ? k.fail : k.ok, v as Record<string, string | number>);
  return { label: k.label as string, detail };
}
