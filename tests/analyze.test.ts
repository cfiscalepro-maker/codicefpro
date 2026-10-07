import { describe, it, expect } from 'vitest';
import { analyze } from '../src/lib/cf/analyze';
import { calculate, omocodiaVariants } from '../src/lib/cf/engine';
const places = [{ kind: 'comune' as const, name: 'ROMA', province: 'RM', code: 'H501' }];
const cf = calculate({ name: 'Mario', surname: 'Rossi', sex: 'M', day: 10, month: 12, year: 1985, placeCode: 'H501' });
const now = new Date('2026-10-04');
describe('analyze', () => {
  it('valid code', () => { const a = analyze(cf, places, now); expect(a.formalOk).toBe(true); expect(a.place?.name).toBe('ROMA'); expect(a.birthDates).toEqual(['1985-12-10']); });
  it('century stays ambiguous when both fit', () => expect(analyze(calculate({ name: 'A', surname: 'B', sex: 'M', day: 1, month: 1, year: 2005, placeCode: 'H501' }), places, now).birthDates).toEqual(['2005-01-01', '1905-01-01']));
  it('29 Feb 00 means 2000 only', () => expect(analyze(calculate({ name: 'A', surname: 'B', sex: 'M', day: 29, month: 2, year: 2000, placeCode: 'H501' }), places, now).birthDates).toEqual(['2000-02-29']));
  it('omocodia is valid, not an error', () => { const a = analyze(omocodiaVariants(cf)[127], places, now); expect(a.formalOk).toBe(true); expect(a.decoded.isOmocode).toBe(true); expect(a.place?.name).toBe('ROMA'); });
  it('bad control fails and says what was expected', () => { const a = analyze(cf.slice(0, 15) + (cf[15] === 'A' ? 'B' : 'A'), places, now); expect(a.formalOk).toBe(false); expect(a.checks.find((c) => c.id === 'control')?.vars?.expected).toBeTruthy(); });
  it('unknown place is informational, not a failure', () => { const a = analyze(calculate({ name: 'A', surname: 'B', sex: 'F', day: 1, month: 1, year: 1950, placeCode: 'A001' }), places, now); expect(a.formalOk).toBe(true); expect(a.checks.find((c) => c.id === 'placeKnown')?.status).toBe('info'); });
  it('short input stops early', () => expect(analyze('RSSMRA', null, now).checks).toHaveLength(1));
});
