import { describe, it, expect } from 'vitest';
import { createRequire } from 'node:module';
import { calculate, decode, surnameCode, nameCode, dateCode, omocodiaVariants, controlChar } from '../src/lib/cf/engine';
const require = createRequire(import.meta.url);
const { CodiceFiscale } = require('codice-fiscale-js');

describe('surname', () => {
  it.each([['Rossi','RSS'],['Bianchi','BNC'],['Fo','FOX'],['De Luca','DLC'],["D'Angelo",'DNG'],['Nuñez','NNZ'],['Ai','AIX'],['Öztürk','ZTR']])('%s -> %s', (i,o) => expect(surnameCode(i)).toBe(o));
});
describe('transliteration (AdE circolare 34/2011)', () => {
  it.each([['Üs','SUE'],['Öz','ZOE'],['Äh','HAE'],['Zoë','ZOE'],['Straße','STR'],['Æ','AEX'],['Müller','MLL'],['Öztürk','ZTR']])('surname %s -> %s', (i, o) => expect(surnameCode(i)).toBe(o));
  it('ß counts as SS', () => expect(nameCode('SSa')).toBe('SSA'));
  it('decomposed and precomposed input agree', () => expect(surnameCode('U\u0308s')).toBe(surnameCode('Üs')));
});
describe('name', () => {
  it.each([['Mario','MRA'],['Francesco','FNC'],['Gianluca','GLC'],['Lu','LUX'],['Anna Maria','NMR'],['Ugo','GUO']])('%s -> %s', (i,o) => expect(nameCode(i)).toBe(o));
});
describe('date', () => {
  it('encodes sex and month', () => { expect(dateCode(1985,12,10,'M')).toBe('85T10'); expect(dateCode(1985,12,10,'F')).toBe('85T50'); });
  it('leap years', () => { expect(dateCode(2000,2,29,'M')).toBe('00B29'); expect(() => dateCode(1900,2,29,'M')).toThrow(); expect(() => dateCode(2023,2,29,'M')).toThrow(); });
  it('rejects bad month/day', () => { expect(() => dateCode(1990,13,1,'M')).toThrow(); expect(() => dateCode(1990,4,31,'M')).toThrow(); });
});
describe('oracle: matches codice-fiscale-js', () => {
  const cases = [
    ['Mario','Rossi','M',10,12,1985,'Roma','RM'],
    ['Anna Maria',"D'Angelo",'F',29,2,2000,'Milano','MI'],
    ['Gianluca','Bianchi','M',1,1,1970,'Torino','TO'],
    ['Lu','Fo','F',31,12,1999,'Napoli','NA'],
    ['Niccolò','Müller','M',15,6,2012,'Firenze','FI'],
  ] as const;
  it.each(cases)('%s %s', (name, surname, g, day, month, year, bp, prov) => {
    const ref = new CodiceFiscale({ name, surname, gender: g, day, month, year, birthplace: bp, birthplaceProvincia: prov });
    const code = ref.code.slice(11, 15);
    expect(calculate({ name, surname, sex: g, day, month, year, placeCode: code })).toBe(ref.code);
  });
});
describe('omocodia', () => {
  const base = calculate({ name:'Mario', surname:'Rossi', sex:'M', day:10, month:12, year:1985, placeCode:'H501' });
  it('has 128 distinct valid forms', () => {
    const v = omocodiaVariants(base);
    expect(new Set(v).size).toBe(128);
    v.forEach((c) => expect(decode(c).formatOk).toBe(true));
  });
  it('decodes to the same data as the base', () => {
    for (const c of omocodiaVariants(base)) { const d = decode(c); expect(d.base.slice(0,15)).toBe(base.slice(0,15)); expect(d.placeCode).toBe('H501'); }
    expect(decode(omocodiaVariants(base)[127]).isOmocode).toBe(true);
    expect(decode(base).isOmocode).toBe(false);
  });
  it('agrees with the reference library on omocodia detection', () => {
    for (const c of omocodiaVariants(base).slice(0, 20)) expect(CodiceFiscale.check(c)).toBe(true);
  });
});
describe('validation', () => {
  const ok = calculate({ name:'Mario', surname:'Rossi', sex:'M', day:10, month:12, year:1985, placeCode:'H501' });
  it('accepts valid', () => expect(decode(ok).formatOk).toBe(true));
  it('wrong control char', () => { const bad = ok.slice(0,15) + (ok[15]==='A'?'B':'A'); const d = decode(bad); expect(d.controlOk).toBe(false); expect(d.issues).toContain('control'); });
  it('wrong length / charset', () => { expect(decode(ok.slice(0,15)).issues).toContain('length'); expect(decode('RSSMRA85T10H50!S').issues).toContain('charset'); });
  it('impossible month letter / day', () => {
    const f = (s: string) => decode(s.slice(0,15) + controlChar(s.slice(0,15)));
    expect(f('RSSMRA85F10H501X').issues).toContain('month');
    expect(f('RSSMRA85T32H501X').issues).toContain('day');
    expect(f('RSSMRA85B30H501X').issues).toContain('day');
  });
  it('female day offset decodes', () => expect(decode(calculate({ name:'Mario', surname:'Rossi', sex:'F', day:10, month:12, year:1985, placeCode:'H501' })).sex).toBe('F'));
});
