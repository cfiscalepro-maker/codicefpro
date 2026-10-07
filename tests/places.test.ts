import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { createPlaceIndex, validateDataset, type Place, type PlaceDataset } from '../src/lib/cf/places';

const meta = { version: 't', source: { name: 'fixture', url: 'x', retrieved: '2026-10-04', license: 'test' } };
const sample: Place[] = [
  { kind: 'comune', name: 'Roma', province: 'RM', code: 'H501' },
  { kind: 'comune', name: 'Romano di Lombardia', province: 'BG', code: 'H509' },
  { kind: 'comune', name: "Sant'Agata", province: 'XX', code: 'A001' },
  { kind: 'estero', name: 'Perù', code: 'Z611' },
];
describe('place search', () => {
  const idx = createPlaceIndex(sample);
  it('ranks exact before prefix', () => expect(idx.search('roma')[0].code).toBe('H501'));
  it('ignores accents and apostrophes', () => { expect(idx.search('peru')[0].name).toBe('Perù'); expect(idx.search('sant agata')).toHaveLength(1); expect(idx.search("sant'agata")).toHaveLength(1); });
  it('needs 2+ chars', () => expect(idx.search('r')).toEqual([]));
  it('looks up by code', () => expect(idx.byCode('z611')[0].name).toBe('Perù'));
});
describe('dataset validation', () => {
  it('accepts good data', () => expect(validateDataset({ ...meta, places: sample })).toEqual([]));
  it('flags bad codes, missing Z, missing provenance', () => {
    const bad = { version: '', source: { name: '', url: '', retrieved: '', license: '' }, places: [
      { kind: 'estero', name: 'Nowhere', code: 'A123' }, { kind: 'comune', name: 'Oops', code: '12' }] } as PlaceDataset;
    expect(validateDataset(bad).length).toBe(3);
  });
  it('scales: 7900 rows searched quickly', () => {
    const rows = JSON.parse(readFileSync('src/data/places.json', 'utf8')).places;
    const idx = createPlaceIndex(rows); const t = performance.now(); idx.search('san'); expect(performance.now() - t).toBeLessThan(50);
  });
});
