/**
 * Codice fiscale engine. Pure functions, no I/O, no DOM.
 * Place data (Belfiore codes) is passed in, so the dataset can be swapped without touching this file.
 */
export type Sex = 'M' | 'F';

const VOWELS = 'AEIOU';
const MONTHS = 'ABCDEHLMPRST';
const OMO = 'LMNPQRSTUV';
/** 0-based indexes of the 7 digits that omocodia can replace. */
export const OMO_POSITIONS = [6, 7, 9, 10, 12, 13, 14] as const;

const ODD: Record<string, number> = {};
'1 0 5 7 9 13 15 17 19 21'.split(' ').forEach((v, i) => { ODD[String(i)] = +v; });
'1 0 5 7 9 13 15 17 19 21 2 4 18 20 11 3 6 8 12 14 16 10 22 25 24 23'
  .split(' ').forEach((v, i) => { ODD[String.fromCharCode(65 + i)] = +v; });

/**
 * Uppercase and reduce to the 26 letters A-Z (drops spaces, apostrophes, hyphens, digits).
 * Ä/Æ, Ö/Œ, Ü and ß become AE, OE, UE and SS, as in the Ministry of the Interior transliteration table
 * used by the Agenzia delle Entrate (circolare 34/E of 20 July 2011). Other accented letters become the base letter.
 */
export function normalizeName(s: string): string {
  return s.normalize('NFC').toUpperCase()
    .replace(/[ÄÆ]/g, 'AE').replace(/[ÖŒ]/g, 'OE').replace(/Ü/g, 'UE').replace(/ẞ/g, 'SS')
    .normalize('NFD').replace(/\p{M}/gu, '').replace(/[^A-Z]/g, '');
}

const split = (s: string) => ({
  c: [...s].filter((ch) => !VOWELS.includes(ch)),
  v: [...s].filter((ch) => VOWELS.includes(ch)),
});

export function surnameCode(surname: string): string {
  const { c, v } = split(normalizeName(surname));
  return [...c, ...v, 'X', 'X', 'X'].slice(0, 3).join('');
}

export function nameCode(name: string): string {
  const { c, v } = split(normalizeName(name));
  const pick = c.length >= 4 ? [c[0], c[2], c[3]] : [...c, ...v, 'X', 'X', 'X'].slice(0, 3);
  return pick.join('');
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

export function dateCode(year: number, month: number, day: number, sex: Sex): string {
  if (!Number.isInteger(year) || year < 1800 || year > 2999) throw new RangeError('Anno non valido');
  if (!Number.isInteger(month) || month < 1 || month > 12) throw new RangeError('Mese non valido');
  if (!Number.isInteger(day) || day < 1 || day > daysInMonth(year, month)) throw new RangeError('Giorno non valido');
  const yy = String(year % 100).padStart(2, '0');
  const dd = String(sex === 'F' ? day + 40 : day).padStart(2, '0');
  return yy + MONTHS[month - 1] + dd;
}

export function controlChar(first15: string): string {
  let sum = 0;
  for (let i = 0; i < 15; i++) {
    const ch = first15[i];
    if (i % 2 === 0) sum += ODD[ch];
    else sum += /\d/.test(ch) ? +ch : ch.charCodeAt(0) - 65;
  }
  return String.fromCharCode(65 + (sum % 26));
}

export interface CalcInput {
  surname: string; name: string; year: number; month: number; day: number; sex: Sex;
  /** Belfiore code, e.g. H501 or Z404. Resolved by the caller from the dataset. */
  placeCode: string;
}

export function calculate(i: CalcInput): string {
  if (!normalizeName(i.surname)) throw new Error('Cognome mancante o senza lettere');
  if (!normalizeName(i.name)) throw new Error('Nome mancante o senza lettere');
  if (!/^[A-Z]\d{3}$/.test(i.placeCode)) throw new Error('Codice catastale non valido');
  const f15 = surnameCode(i.surname) + nameCode(i.name) + dateCode(i.year, i.month, i.day, i.sex) + i.placeCode;
  return f15 + controlChar(f15);
}

/** All 128 omocodia variants, base form first. */
export function omocodiaVariants(cf: string): string[] {
  const base = toBase(cf.toUpperCase());
  const out: string[] = [];
  for (let mask = 0; mask < 128; mask++) {
    const chars = [...base];
    OMO_POSITIONS.forEach((p, bit) => {
      if (mask & (1 << bit)) chars[p] = OMO[+base[p]];
    });
    const f15 = chars.slice(0, 15).join('');
    out.push(f15 + controlChar(f15));
  }
  return out;
}

/** Replace omocodia letters with their digits (positions only). */
export function toBase(cf: string): string {
  const chars = [...cf];
  for (const p of OMO_POSITIONS) {
    const k = OMO.indexOf(chars[p]);
    if (k >= 0) chars[p] = String(k);
  }
  return chars.join('');
}

export type Issue =
  | 'length' | 'charset' | 'name-letters' | 'month' | 'day' | 'place-format' | 'control';

export interface Decoded {
  formatOk: boolean;
  issues: Issue[];
  controlOk: boolean;
  isOmocode: boolean;
  /** Digits restored from omocodia letters. */
  base: string;
  surnameChars: string; nameChars: string;
  sex?: Sex; month?: number; day?: number;
  /** Two-digit year; the century cannot be derived from the code. */
  yy?: number;
  placeCode?: string;
  expectedControl?: string;
}

export function decode(input: string): Decoded {
  const cf = input.replace(/\s/g, '').toUpperCase();
  const issues: Issue[] = [];
  const r: Decoded = { formatOk: false, issues, controlOk: false, isOmocode: false, base: '', surnameChars: cf.slice(0, 3), nameChars: cf.slice(3, 6) };
  if (cf.length !== 16) { issues.push('length'); return r; }
  if (!/^[A-Z]{6}[0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$/.test(cf)) {
    issues.push('charset'); return r;
  }
  if (!/^[A-Z]{6}$/.test(cf.slice(0, 6))) issues.push('name-letters');
  const base = toBase(cf);
  r.base = base;
  // Any subset of the 7 positions may be substituted (128 forms), so no ordering check.
  r.isOmocode = OMO_POSITIONS.some((p) => cf[p] !== base[p]);
  r.yy = +base.slice(6, 8);
  const m = MONTHS.indexOf(base[8]);
  if (m < 0) issues.push('month'); else r.month = m + 1;
  let d = +base.slice(9, 11);
  r.sex = d > 40 ? 'F' : 'M';
  if (d > 40) d -= 40;
  r.day = d;
  if (m >= 0) {
    // 29 Feb is valid only if some candidate century has a leap year; 00 is leap in 2000 but not 1900.
    const maxDay = Math.max(daysInMonth(1904 + (r.yy % 4 === 0 ? 0 : 1), m + 1), daysInMonth(2000 + r.yy, m + 1));
    if (d < 1 || d > maxDay) issues.push('day');
  } else if (d < 1 || d > 31) issues.push('day');
  r.placeCode = base.slice(11, 15);
  if (!/^[A-Z]\d{3}$/.test(r.placeCode)) issues.push('place-format');
  r.expectedControl = controlChar(cf.slice(0, 15));
  r.controlOk = r.expectedControl === cf[15];
  if (!r.controlOk) issues.push('control');
  r.formatOk = issues.length === 0;
  return r;
}

/** Candidate full years for a two-digit year, newest first, never in the future. */
export function candidateYears(yy: number, now = new Date()): number[] {
  return [2000 + yy, 1900 + yy, 1800 + yy].filter((y) => y <= now.getUTCFullYear());
}
