// Usage: node scripts/build-globe-dots.mjs [land.json] [out.bin]
// Samples a Fibonacci sphere, keeps points on land, shuffles them with a fixed seed (so any prefix is an even subset),
// and packs them as Uint16 pairs: (lon + 180) * 100, (lat + 90) * 100, little-endian.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export function ringContains(ring, x, y) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
export function buildLand(geojson) {
  const polys = [];
  for (const f of geojson.features) {
    const g = f.geometry;
    for (const p of g.type === 'Polygon' ? [g.coordinates] : g.coordinates) {
      const xs = p[0].map((c) => c[0]), ys = p[0].map((c) => c[1]);
      polys.push({ rings: p, minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) });
    }
  }
  return (lon, lat) => polys.some((p) => lon >= p.minX && lon <= p.maxX && lat >= p.minY && lat <= p.maxY
    && ringContains(p.rings[0], lon, lat) && !p.rings.slice(1).some((h) => ringContains(h, lon, lat)));
}
export function landDots(isLand, candidates = 24000, seed = 1) {
  const pts = [], ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < candidates; i++) {
    const lat = Math.asin(1 - (2 * (i + 0.5)) / candidates) * (180 / Math.PI);
    let lon = ((i * ga * 180) / Math.PI) % 360; if (lon > 180) lon -= 360; if (lon < -180) lon += 360;
    if (isLand(lon, lat)) pts.push([lon, lat]);
  }
  let s = seed >>> 0; const rnd = () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 2 ** 32);
  for (let i = pts.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [pts[i], pts[j]] = [pts[j], pts[i]]; }
  return pts;
}
export function pack(pts) {
  const buf = new Uint16Array(pts.length * 2);
  pts.forEach(([lon, lat], i) => { buf[2 * i] = Math.round((lon + 180) * 100); buf[2 * i + 1] = Math.round((lat + 90) * 100); });
  return Buffer.from(buf.buffer);
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [src = 'data/natural-earth/ne_110m_land.json', out = 'public/globe/land-dots.bin'] = process.argv.slice(2);
  const pts = landDots(buildLand(JSON.parse(readFileSync(src, 'utf8'))));
  writeFileSync(out, pack(pts));
  console.log(`${pts.length} dots, ${pts.length * 4} bytes -> ${out}`);
}
