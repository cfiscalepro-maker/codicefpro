import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
// @ts-expect-error plain JS module
import { buildLand, landDots, pack } from '../scripts/build-globe-dots.mjs';
const land = buildLand(JSON.parse(readFileSync('data/natural-earth/ne_110m_land.json', 'utf8')));
describe('globe land data', () => {
  it.each([['Rome', 12.5, 41.9], ['Sahara', 15, 23], ['Amazon', -60, -5], ['Kathmandu', 85.3, 27.7], ['Antarctica', 0, -80]])('%s is land', (_n, lon, lat) => expect(land(lon, lat)).toBe(true));
  it.each([['mid Pacific', -150, 0], ['mid Atlantic', -30, 30], ['Indian Ocean', 80, -30]])('%s is ocean', (_n, lon, lat) => expect(land(lon, lat)).toBe(false));
  it('produces a sensible dot count, deterministic and packed in range', () => {
    const a = landDots(land), b = landDots(land);
    expect(a.length).toBeGreaterThan(5000); expect(a.length).toBeLessThan(9000);
    expect(a.slice(0, 50)).toEqual(b.slice(0, 50));
    const buf = pack(a); expect(buf.length).toBe(a.length * 4);
    const u = new Uint16Array(buf.buffer, buf.byteOffset, a.length * 2);
    expect(Math.max(...u)).toBeLessThanOrEqual(36000);
  });
  it('a prefix is spread across hemispheres, not clustered', () => {
    const p = landDots(land).slice(0, 1500);
    const east = p.filter(([lon]: number[]) => lon > 0).length, north = p.filter(([, lat]: number[]) => lat > 0).length;
    expect(east).toBeGreaterThan(300); expect(east).toBeLessThan(1200); expect(north).toBeGreaterThan(300);
  });
});
