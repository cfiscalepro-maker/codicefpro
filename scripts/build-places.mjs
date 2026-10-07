// Usage: node scripts/build-places.mjs <comuni.csv> <stati-esteri.csv> <out.json>
// Input: Agenzia delle Entrate "Elenco comuni attuali" / "Elenco stati esteri attuali" (semicolon CSV).
// The Belfiore code is the "Codice Nazionale" column. "Codice Catastale" is a different code and is NOT used.
import { readFileSync, writeFileSync } from 'node:fs';
const [,, comuniPath, esteriPath, outPath] = process.argv;
const rows = (p) => readFileSync(p, 'utf8').split(/\r?\n/).filter(Boolean).map((l) => l.split(';'));
const idx = (h, n) => { const i = h.indexOf(n); if (i < 0) throw new Error(`Colonna mancante: ${n}`); return i; };

const [ch, ...cr] = rows(comuniPath);
const C = { code: idx(ch, 'Codice Nazionale'), prov: idx(ch, 'Sigla Provincia'), name: idx(ch, 'Denominazione Italiana'), alt: idx(ch, 'Denominazione Estera'), date: idx(ch, 'Data Costituzione') };
const [eh, ...er] = rows(esteriPath);
const E = { code: idx(eh, 'Codice Nazionale'), name: idx(eh, 'Denominazione') };

const places = [
  ...cr.map((r) => ({ kind: 'comune', name: r[C.name], ...(r[C.alt] ? { altName: r[C.alt] } : {}), province: r[C.prov], code: r[C.code] })),
  ...er.map((r) => ({ kind: 'estero', name: r[E.name], code: r[E.code] })),
];
const toIso = (d) => d.split('/').reverse().join('-');
const latest = cr.map((r) => toIso(r[C.date])).sort().at(-1);
const ds = {
  version: `ade-attuali-${latest}`,
  source: {
    name: 'Agenzia delle Entrate, Elenco comuni attuali e Elenco stati esteri attuali (export CSV)',
    url: 'https://arcom.agenziaentrate.gov.it/CitizenArCom/',
    retrieved: new Date().toISOString().slice(0, 10),
    license: 'Dati pubblici forniti dall\'Agenzia delle Entrate; condizioni di riuso da verificare. Solo entità attuali, nessun comune soppresso.',
  },
  places,
};
writeFileSync(outPath, JSON.stringify(ds));
console.log(`${places.length} luoghi (${cr.length} comuni, ${er.length} stati), ultima costituzione ${latest}`);
