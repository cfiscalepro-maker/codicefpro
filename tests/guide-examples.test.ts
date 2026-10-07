import { describe, it, expect } from 'vitest';
import { surnameCode as S, nameCode as N, calculate } from '../src/lib/cf/engine';
// Every example printed in the calculation guides, in every language.
describe('guide examples are what the engine computes', () => {
  const sur: [string, string][] = [['Smith','SMT'],['Brown','BRW'],['Müller','MLL'],['Fo','FOX'],['Ai','AIX'],['Wu','WUX'],['Schmidt','SCH'],['Meyer','MYR'],['von Arx','VNR'],
    ['Dupont','DPN'],['Martin','MRT'],['Lefèvre','LFV'],['Le Gall','LGL'],['García','GRC'],['López','LPZ'],['Martínez','MRT'],['Peña','PNE'],['García López','GRC'],['Gil','GLI'],
    ['Bernasconi','BRN'],['Keller','KLL'],['Zürcher','ZRC']];
  it.each(sur)('surname %s -> %s', (i, o) => expect(S(i)).toBe(o));
  const nam: [string, string][] = [['John','JHN'],['Emily','MLY'],['Christopher','CRS'],['Ann','NNA'],['Jo','JOX'],['Katharina','KHR'],['Johannes','JNN'],['Anna','NNA'],['Max','MXA'],['Ida','DIA'],['Ute','TUE'],['Hans-Peter','HSP'],
    ['Jean','JNE'],['Françoise','FNC'],['Marie','MRA'],['Pierre','PRR'],['Léa','LEA'],['Jean-Pierre','JPR'],['José','JSO'],['María','MRA'],['Alejandro','LND'],['Carlos','CLS'],['Ana','NAA'],['Luz','LZU'],
    ['Marco','MRC'],['Giuseppe','GPP'],['Luca','LCU'],['Jean-Claude','JCL']];
  it.each(nam)('name %s -> %s', (i, o) => expect(N(i)).toBe(o));
  const full: [string, string, 'M' | 'F', number, number, number, string, string][] = [
    ['John','Brown','M',3,11,1985,'Z404','BRWJHN85S03Z404I'], ['Katharina','Müller','F',21,9,1988,'Z112','MLLKHR88P61Z112O'],
    ['Jean','Dupont','M',8,6,1983,'Z110','DPNJNE83H08Z110E'], ['José','García López','M',30,10,1980,'Z131','GRCJSO80R30Z131B'],
    ['Marco','Bernasconi','M',5,9,1975,'Z133','BRNMRC75P05Z133C'],
    ['Emily','Smith','F',14,4,1992,'Z114','SMTMLY92D54Z114B'], ['Françoise','Martin','F',17,2,1995,'Z110','MRTFNC95B57Z110V'], ['María','Martínez','F',12,12,1999,'Z131','MRTMRA99T52Z131V'],
    ['Anna','Müller','F',12,3,1990,'Z133','MLLNNA90C52Z133H'], ['Johannes','Schmidt','M',5,1,1979,'Z102','SCHJNN79A05Z102N'] ];
  it.each(full)('%s %s', (n, s, x, d, m, y, p, cf) => expect(calculate({ name: n, surname: s, sex: x, day: d, month: m, year: y, placeCode: p })).toBe(cf));
  it('date encodings used in the text', () => {
    expect(calculate({ name: 'Anna', surname: 'Smith', sex: 'F', day: 14, month: 4, year: 1992, placeCode: 'H501' }).slice(6, 11)).toBe('92D54');
    expect(calculate({ name: 'Anna', surname: 'Smith', sex: 'M', day: 3, month: 11, year: 1985, placeCode: 'H501' }).slice(6, 11)).toBe('85S03');
  });
});
