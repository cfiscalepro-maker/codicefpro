import { useEffect, useId, useRef, useState } from 'react';
import { analyze, type Analysis } from '../lib/cf/analyze';
import { placeName, renderCheck } from '../lib/cf/place-i18n';
import type { Place, PlaceDataset } from '../lib/cf/places';
import { fmt, type Dict } from '../i18n/ui';

export default function Decoder({ mode, t, locale, intl }: { mode: 'inverse' | 'verify'; t: Dict['dec']; locale: string; intl: string }) {
  const id = useId();
  const [value, setValue] = useState('');
  const [res, setRes] = useState<Analysis | null>(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const places = useRef<Place[] | null>(null);
  const outRef = useRef<HTMLElement>(null);
  // Bring the result into view after submit (mobile: it renders below the fold).
  useEffect(() => {
    if (!res) return;
    const el = outRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top >= 0 && r.bottom <= window.innerHeight) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }, [res]);

  const fmtDate = (iso: string) => new Date(iso + 'T00:00:00Z').toLocaleDateString(intl, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const cf = value.replace(/\s/g, '').toUpperCase();
    if (!cf) { setError(t.errEmpty); setRes(null); setStatus(t.stEmpty); return; }
    setError('');
    if (!places.current) {
      try { places.current = ((await import('../data/places.json')).default as PlaceDataset).places; }
      catch { setStatus(t.stNoPlaces); }
    }
    const a = analyze(cf, places.current);
    setRes(a);
    setStatus(a.formalOk ? t.stOk : t.stBad);
  }
  const reset = () => { setValue(''); setRes(null); setError(''); setStatus(t.stReset); };
  const d = res?.decoded;
  const pName = res?.place ? placeName(res.place, locale) + (res.place.province ? ` (${res.place.province})` : '') : '';

  return (
    <form onSubmit={submit} noValidate className="rounded-md border border-hairline bg-elevated p-6">
      <label htmlFor={`${id}-cf`} className="mb-1 block text-sm font-medium text-ink">{t.label}</label>
      <input id={`${id}-cf`} value={value} onChange={(e) => { setValue(e.target.value); setRes(null); }} maxLength={20}
        autoCapitalize="characters" autoCorrect="off" spellCheck={false} autoComplete="off" inputMode="text"
        aria-invalid={!!error} aria-describedby={error ? `${id}-e` : `${id}-h`}
        className="h-12 w-full rounded-sm border border-hairline bg-elevated px-3 font-mono text-lg uppercase tracking-wider text-ink" />
      <p id={`${id}-h`} className="mt-1 text-sm">{t.hint}</p>
      {error && <p id={`${id}-e`} className="mt-1 text-sm text-error">{error}</p>}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="h-12 rounded-full bg-ink px-5 text-base font-medium text-on-primary">{mode === 'verify' ? t.submitVerify : t.submitDecode}</button>
        <button type="button" onClick={reset} className="h-12 rounded-full border border-hairline bg-elevated px-5 text-base font-medium text-ink">{t.reset}</button>
      </div>
      <p role="status" aria-live="polite" className="sr-only">{status}</p>
      {res && d && (
        <section ref={outRef} className="mt-6 scroll-mt-4 rounded-md border border-hairline p-5" aria-labelledby={`${id}-r`}>
          <h2 id={`${id}-r`} className="eyebrow">{mode === 'verify' ? t.headVerify : t.headDecode}</h2>
          <p className="mt-2 text-lg font-semibold text-ink">{res.formalOk ? t.okLabel : t.badLabel}</p>
          {mode === 'inverse' && res.formalOk && (
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div><dt>{t.sex}</dt><dd className="text-ink">{d.sex === 'F' ? t.female : t.male}</dd></div>
              <div><dt>{t.birth}</dt><dd className="text-ink">{res.birthDates.length ? res.birthDates.map(fmtDate).join(t.or) : t.birthUnknown}
                {res.birthDates.length > 1 && <span className="block text-body">{t.century}</span>}</dd></div>
              <div><dt>{t.place}</dt><dd className="text-ink">{res.place ? pName : t.placeUnknown}</dd></div>
              <div><dt>{t.belfiore}</dt><dd className="font-mono text-ink">{d.placeCode}</dd></div>
              <div><dt>{t.omocodia}</dt><dd className="text-ink">{d.isOmocode ? t.yes : t.no}</dd></div>
              <div><dt>{t.letters}</dt><dd className="font-mono text-ink">{d.surnameChars} · {d.nameChars}</dd></div>
            </dl>)}
          <ul className="mt-4 divide-y divide-hairline text-sm">
            {res.checks.map((c) => { const r = renderCheck(c, t, fmt, pName); return (
              <li key={c.id} className="flex gap-3 py-2"><span className={`w-14 shrink-0 font-mono text-xs font-medium ${c.status === 'fail' ? 'text-error' : 'text-ink'}`}>{t.marks[c.status]}</span>
                <span><span className="font-medium text-ink">{r.label}.</span> {r.detail}</span></li>); })}
          </ul>
          <p className="mt-4 text-sm">{t.disclaimer}{' '}
            <a className="text-link underline" href="https://telematici.agenziaentrate.gov.it/VerificaCF" rel="noopener noreferrer">{t.official}</a> {t.external}.</p>
        </section>)}
    </form>
  );
}
