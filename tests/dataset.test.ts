import { describe, it, expect } from 'vitest';
import { createRequire } from 'node:module';
import data from '../src/data/places.json';
import { validateDataset, createPlaceIndex, type PlaceDataset } from '../src/lib/cf/places';
import { calculate } from '../src/lib/cf/engine';
const ds = data as PlaceDataset;
const require = createRequire(import.meta.url);
const { CodiceFiscale } = require('codice-fiscale-js');

describe('AdE dataset', () => {
  it('passes validation', () => expect(validateDataset(ds)).toEqual([]));
  it('has expected well-known codes', () => {
    const idx = createPlaceIndex(ds.places);
    expect(idx.byCode('H501')[0].name).toBe('ROMA');
    expect(idx.byCode('F205')[0].name).toBe('MILANO');
    expect(idx.byCode('Z404')[0].name).toMatch(/STATI UNITI/);
  });
  it('finds bilingual names', () => expect(createPlaceIndex(ds.places).search('tscherm')[0].name).toBe('CERMES'));
  it('every comune code agrees with the reference library where it resolves', () => {
    let checked = 0; const diffs: string[] = [];
    for (const p of ds.places.filter((x) => x.kind === 'comune')) {
      let ref; try { ref = new CodiceFiscale({ name: 'Mario', surname: 'Rossi', gender: 'M', day: 1, month: 1, year: 1990, birthplace: p.name, birthplaceProvincia: p.province }); } catch { continue; }
      checked++;
      if (ref.code.slice(11, 15) !== p.code) diffs.push(`${p.name} ${p.province} ${p.code} vs ${ref.code.slice(11, 15)}`);
    }
    console.log('checked', checked, 'diffs', diffs.length, diffs.slice(0, 10));
    expect(checked).toBeGreaterThan(7000);
    expect(diffs.length).toBeLessThan(25);
  });
  it('end to end with a foreign state', () => {
    const us = createPlaceIndex(ds.places).byCode('Z404')[0];
    expect(calculate({ name: 'Mario', surname: 'Rossi', sex: 'M', day: 1, month: 1, year: 1990, placeCode: us.code })).toMatch(/Z404.$/);
  });
});
