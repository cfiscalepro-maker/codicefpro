import { decode, candidateYears, daysInMonth, type Decoded } from './engine';
import type { Place } from './places';

export type CheckId = 'length' | 'charset' | 'month' | 'day' | 'placeFormat' | 'control' | 'omocodia' | 'placeKnown';
/** Language-free check result. The UI turns id + vars into text from its dictionary. */
export interface Check { id: CheckId; status: 'ok' | 'fail' | 'info'; vars?: Record<string, string | number | boolean> }
export interface Analysis {
  decoded: Decoded; checks: Check[]; formalOk: boolean;
  /** Possible birth dates; the code holds only 2 year digits, so more than one may fit. */
  birthDates: string[]; place?: Place;
}

export function analyze(input: string, places: Place[] | null, now = new Date()): Analysis {
  const d = decode(input);
  const has = (i: string) => d.issues.includes(i as never);
  const checks: Check[] = [];
  const add = (id: CheckId, bad: boolean, vars?: Check['vars']) => checks.push({ id, status: bad ? 'fail' : 'ok', vars });

  add('length', has('length'));
  if (has('length')) return { decoded: d, checks, formalOk: false, birthDates: [] };
  add('charset', has('charset'));
  if (has('charset')) return { decoded: d, checks, formalOk: false, birthDates: [] };

  add('month', has('month'));
  add('day', has('day'), { day: d.day ?? 0, sex: d.sex ?? 'M' });
  add('placeFormat', has('place-format'), { code: d.placeCode ?? '' });
  add('control', has('control'), { expected: d.expectedControl ?? '', found: input.replace(/\s/g, '').toUpperCase()[15] ?? '' });
  checks.push({ id: 'omocodia', status: 'info', vars: { omo: d.isOmocode } });

  let birthDates: string[] = [];
  if (d.month && d.day && d.yy !== undefined) {
    birthDates = candidateYears(d.yy, now).filter((y) => y >= 1900 && d.day! <= daysInMonth(y, d.month!))
      .map((y) => `${y}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`);
  }
  let place: Place | undefined;
  if (places && d.placeCode && !has('place-format')) {
    place = places.find((p) => p.code === d.placeCode);
    checks.push({ id: 'placeKnown', status: 'info', vars: { found: !!place } });
  }
  return { decoded: d, checks, formalOk: d.formatOk, birthDates, place };
}
