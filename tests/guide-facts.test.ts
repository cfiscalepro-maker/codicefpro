import { describe, it, expect } from 'vitest';
import { surnameCode, nameCode, calculate, omocodiaVariants, controlChar, toBase, OMO_POSITIONS } from '../src/lib/cf/engine';
import { analyze } from '../src/lib/cf/analyze';
describe('facts used in the guides', () => {
  it('different surnames share the same three letters', () => { for (const s of ['Rossi', 'Rosso', 'Ross']) expect(surnameCode(s)).toBe('RSS'); });
  it('different names share the same three letters', () => { for (const n of ['Mario', 'Mauro', 'Maria']) expect(nameCode(n)).toBe('MRA'); });
  const base = calculate({ name: 'Mario', surname: 'Rossi', sex: 'M', day: 10, month: 12, year: 1985, placeCode: 'H501' });
  it('sequential omocodia from the right', () => {
    const OMO = 'LMNPQRSTUV'; const order = [...OMO_POSITIONS].reverse(); const out: string[] = [base]; let chars = [...base];
    for (const p of order) { chars[p] = OMO[+toBase(base)[p]]; const f15 = chars.slice(0, 15).join(''); chars = [...f15 + controlChar(f15)]; out.push(chars.join('')); }
    console.log('OMO', out.join(' '));
    out.forEach((c) => expect(analyze(c, null).formalOk).toBe(true));
    expect(out[1]).toBe(base.slice(0, 14) + 'M' + controlChar(base.slice(0, 14) + 'M'));
  });
  it('female day is plus 40, sex from 41', () => expect(calculate({ name: 'Mario', surname: 'Rossi', sex: 'F', day: 5, month: 1, year: 1990, placeCode: 'H501' }).slice(9, 11)).toBe('45'));
  it('month letters skip F G I N O Q U V W X Y Z', () => { const m = 'ABCDEHLMPRST'; for (const ch of 'FGINOQUVWXYZ') expect(m.includes(ch)).toBe(false); });
});
