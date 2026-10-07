/**
 * Place lookup over a swappable dataset. The engine only needs `code`.
 * Dataset files must follow PlaceDataset; provenance is mandatory so it ships with the data.
 */
export type PlaceKind = 'comune' | 'estero';

export interface Place {
  kind: PlaceKind;
  name: string;
  /** Second official name, e.g. German name of South Tyrol comuni. */
  altName?: string;
  /** Province abbreviation for comuni (e.g. "RM"); omitted for foreign states. */
  province?: string;
  /** Belfiore / cadastral code: 1 letter + 3 digits. Foreign states start with Z. */
  code: string;
  validFrom?: string;
  validTo?: string;
}

export interface PlaceDataset {
  version: string;
  source: { name: string; url: string; retrieved: string; license: string };
  places: Place[];
}

export const fold = (s: string) =>
  s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const SMALL = new Set(['di', 'del', 'dello', 'della', 'dei', 'degli', 'delle', 'da', 'dal', 'dalla', 'in', 'nel', 'nella', 'sul', 'sulla', 'sui', 'su', 'al', 'alla', 'e', 'ed', 'con', 'a', 'le', 'la', 'il', 'lo', 'i', 'o', 'sotto', 'sopra', 'tra', 'fra', 'per', 'presso']);
const ELIDED = new Set(['d', 'l', 'dell', 'nell', 'all', 'sull', 'dall', 'un', 'quell', 'coll', 'de']);
const cap = (p: string) => p.charAt(0).toUpperCase() + p.slice(1);
/** "REGGIO NELL'EMILIA" -> "Reggio nell'Emilia". Display only; the data stays as exported. */
export function prettyName(raw: string): string {
  return raw.toLowerCase().split(/(\s+|-)/).map((w, i) => {
    if (!w.trim() || w === '-') return w;
    return w.split(/(['’])/).map((p, j) => {
      if (p === `'` || p === '’' || p === '') return p;
      if (j > 0) return cap(p);
      return i > 0 && (SMALL.has(p) || ELIDED.has(p)) ? p : cap(p);
    }).join('');
  }).join('');
}

export function validateDataset(d: PlaceDataset): string[] {
  const errors: string[] = [];
  if (!d.version || !d.source?.name || !d.source.retrieved || !d.source.license) errors.push('Provenienza incompleta');
  const seen = new Set<string>();
  for (const p of d.places) {
    if (!/^[A-Z]\d{3}$/.test(p.code)) errors.push(`Codice non valido: ${p.name} ${p.code}`);
    if (p.kind === 'estero' && !p.code.startsWith('Z')) errors.push(`Stato estero senza Z: ${p.name}`);
    if (p.kind === 'comune' && p.code.startsWith('Z')) errors.push(`Comune con Z: ${p.name}`);
    const key = `${p.code}|${p.validFrom ?? ''}|${fold(p.name)}`;
    if (seen.has(key)) errors.push(`Duplicato: ${p.name} ${p.code}`);
    seen.add(key);
  }
  return errors;
}

/** extraNames adds searchable names per place (for example country names in the visitor's language). */
export function createPlaceIndex(places: Place[], extraNames?: (p: Place) => string[]) {
  const rows = places.flatMap((p) => {
    const names = [p.name, ...(p.altName ? [p.altName] : []), ...(extraNames ? extraNames(p) : [])];
    return names.map((n) => ({ p, f: fold(n) }));
  });
  return {
    byCode(code: string): Place[] {
      return places.filter((p) => p.code === code.toUpperCase());
    },
    /** Prefix matches first, then word-start, then substring. Same-name comuni stay separate (use province). */
    search(query: string, limit = 8): Place[] {
      const q = fold(query);
      if (q.length < 2) return [];
      const rank = (f: string) => (f === q ? 0 : f.startsWith(q) ? 1 : f.includes(' ' + q) ? 2 : f.includes(q) ? 3 : 9);
      return rows
        .map((r) => ({ r, k: rank(r.f) }))
        .filter((x) => x.k < 9)
        .sort((a, b) => a.k - b.k || a.r.f.length - b.r.f.length || a.r.f.localeCompare(b.r.f))
        .map((x) => x.r.p)
        .filter((p, i, a) => a.indexOf(p) === i)
        .slice(0, limit);
    },
  };
}
