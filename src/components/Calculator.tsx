import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { calculate, daysInMonth, type Sex } from '../lib/cf/engine';
import { createPlaceIndex, type Place, type PlaceDataset } from '../lib/cf/places';
import { extraNames, placeLabel } from '../lib/cf/place-i18n';
import { fmt, type Dict } from '../i18n/ui';

type Index = ReturnType<typeof createPlaceIndex>;
const field = 'h-12 w-full rounded-sm border border-hairline bg-elevated px-3 text-base text-ink';
const btn = 'h-12 rounded-full px-5 text-base font-medium';
/** Today in the visitor's own timezone as YYYY-MM-DD (toISOString would use UTC and block same-day births east of UTC). */
const todayLocal = () => { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`; };

export default function Calculator({ t, locale, omoHref }: { t: Dict['calc']; locale: string; omoHref?: string }) {
  const id = useId();
  const [v, setV] = useState({ surname: '', name: '', date: '', sex: '' as '' | Sex, q: '' });
  const [place, setPlace] = useState<Place | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const index = useRef<Index | null>(null);
  const [, bump] = useState(0);
  const outRef = useRef<HTMLElement>(null);
  // Set after mount: the page is prerendered, so a value computed at build time would go stale and cause a hydration mismatch.
  const [maxDate, setMaxDate] = useState<string | undefined>(undefined);
  useEffect(() => { setMaxDate(todayLocal()); }, []);
  // Bring the result into view after submit (mobile: it renders below the fold).
  useEffect(() => {
    if (!result) return;
    const el = outRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top >= 0 && r.bottom <= window.innerHeight) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }, [result]);
  const label = (p: Place) => placeLabel(p, locale, t.foreignState);

  // The places list is fetched only when the user focuses the place field. Nothing personal is sent anywhere.
  async function ensureIndex() {
    if (index.current) return;
    try {
      const mod = await import('../data/places.json');
      index.current = createPlaceIndex((mod.default as PlaceDataset).places, (p) => extraNames(p, locale));
      setLoadError(false); bump((n) => n + 1);
    } catch { setLoadError(true); }
  }
  const options = useMemo(() => (index.current && !place ? index.current.search(v.q, 8) : []), [v.q, place, index.current]);
  useEffect(() => { setActive(0); }, [v.q]);

  const set = (k: keyof typeof v) => (e: { target: { value: string } }) => { setV((s) => ({ ...s, [k]: e.target.value })); setResult(null); };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!/\p{L}/u.test(v.surname)) err.surname = t.errSurname;
    if (!/\p{L}/u.test(v.name)) err.name = t.errName;
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v.date);
    const [y, mo, d] = m ? [+m[1], +m[2], +m[3]] : [0, 0, 0];
    if (!m || y < 1800 || mo < 1 || mo > 12 || d < 1 || d > daysInMonth(y, mo) || v.date > todayLocal()) err.date = t.errDate;
    if (!v.sex) err.sex = t.errSex;
    if (!place) err.place = t.errPlace;
    setErrors(err);
    if (Object.keys(err).length) { setResult(null); setStatus(t.stFix); return; }
    const cf = calculate({ surname: v.surname, name: v.name, year: y, month: mo, day: d, sex: v.sex as Sex, placeCode: place!.code });
    setResult(cf); setStatus(fmt(t.stDone, { code: cf.split('').join(' ') }));
  }
  function reset() { setV({ surname: '', name: '', date: '', sex: '', q: '' }); setPlace(null); setErrors({}); setResult(null); setStatus(t.stReset); }
  async function copy() { try { await navigator.clipboard.writeText(result!); setStatus(t.stCopied); } catch { setStatus(t.stCopyFail); } }
  async function share() {
    // Shares the tool page only, never the personal data.
    const data = { title: t.shareTitle, url: location.origin + location.pathname };
    try { if (navigator.share) await navigator.share(data); else { await navigator.clipboard.writeText(data.url); setStatus(t.stShared); } } catch {}
  }
  function download() {
    const blob = new Blob([fmt(t.fileText, { code: result! })], { type: 'text/plain' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = t.fileName; a.click(); URL.revokeObjectURL(a.href);
  }
  function onKey(e: React.KeyboardEvent) {
    if (!options.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive((a) => (a + 1) % options.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => (a - 1 + options.length) % options.length); }
    else if (e.key === 'Enter' && open) { e.preventDefault(); pick(options[active]); }
    else if (e.key === 'Escape') setOpen(false);
  }
  function pick(p: Place) { setPlace(p); setV((s) => ({ ...s, q: label(p) })); setOpen(false); setResult(null); }

  const err = (k: string) => (errors[k] ? <p id={`${id}-${k}-e`} className="mt-1 text-sm text-error">{errors[k]}</p> : null);
  const aria = (k: string) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${id}-${k}-e` : undefined });

  return (
    <form onSubmit={submit} noValidate className="rounded-md border border-hairline bg-elevated p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div><label htmlFor={`${id}-s`} className="mb-1 block text-sm font-medium text-ink">{t.surname}</label>
          <input id={`${id}-s`} className={field} autoComplete="family-name" value={v.surname} onChange={set('surname')} {...aria('surname')} />{err('surname')}</div>
        <div><label htmlFor={`${id}-n`} className="mb-1 block text-sm font-medium text-ink">{t.name}</label>
          <input id={`${id}-n`} className={field} autoComplete="given-name" value={v.name} onChange={set('name')} {...aria('name')} />{err('name')}</div>
        <div><label htmlFor={`${id}-d`} className="mb-1 block text-sm font-medium text-ink">{t.date}</label>
          <input id={`${id}-d`} type="date" className={field} value={v.date} min="1800-01-01" max={maxDate} onChange={set('date')} {...aria('date')} />{err('date')}</div>
        <fieldset><legend className="mb-1 text-sm font-medium text-ink">{t.sex}</legend>
          <div className="flex gap-3">{(['M', 'F'] as const).map((s) => (
            <label key={s} className="flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm border border-hairline bg-elevated text-ink has-[:checked]:border-ink has-[:focus-visible]:outline-2">
              <input type="radio" name={`${id}-sex`} value={s} checked={v.sex === s} onChange={set('sex')} className="accent-current" />{s === 'M' ? t.male : t.female}</label>))}</div>{err('sex')}</fieldset>
        <div className="relative md:col-span-2">
          <label htmlFor={`${id}-p`} className="mb-1 block text-sm font-medium text-ink">{t.place}</label>
          <input id={`${id}-p`} className={field} role="combobox" aria-expanded={open && options.length > 0} aria-controls={`${id}-list`} aria-autocomplete="list"
            aria-activedescendant={open && options.length ? `${id}-o${active}` : undefined} autoComplete="off" value={v.q} placeholder={t.placeholder}
            onFocus={() => { ensureIndex(); setOpen(true); }} onBlur={() => setTimeout(() => setOpen(false), 120)} onKeyDown={onKey}
            onChange={(e) => { setPlace(null); setResult(null); setV((s) => ({ ...s, q: e.target.value })); setOpen(true); }} {...aria('place')} />
          {open && options.length > 0 && (
            <ul id={`${id}-list`} role="listbox" className="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md border border-hairline bg-elevated shadow-lg">
              {options.map((p, i) => (
                <li key={p.code + p.name} id={`${id}-o${i}`} role="option" aria-selected={i === active} onMouseDown={(e) => { e.preventDefault(); pick(p); }}
                  className={`cursor-pointer px-3 py-3 text-ink ${i === active ? 'bg-canvas' : ''}`}>{label(p)}</li>))}
            </ul>)}
          {err('place')}
          {loadError && <p className="mt-1 text-sm text-error" role="alert">{t.loadError}</p>}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className={`${btn} bg-ink text-on-primary`}>{t.submit}</button>
        <button type="button" onClick={reset} className={`${btn} border border-hairline bg-elevated text-ink`}>{t.reset}</button>
      </div>
      <p role="status" aria-live="polite" className="sr-only">{status}</p>
      {result && (
        <section ref={outRef} aria-labelledby={`${id}-r`} className="mt-6 scroll-mt-4 rounded-md border border-hairline p-5">
          <h2 id={`${id}-r`} className="eyebrow">{t.result}</h2>
          <p className="mt-2 break-all font-mono text-2xl font-medium tracking-wider text-ink sm:text-3xl" data-testid="result">{result}</p>
          <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-4">
            <div><dt>{t.partSurname}</dt><dd className="font-mono text-ink">{result.slice(0, 3)}</dd></div>
            <div><dt>{t.partName}</dt><dd className="font-mono text-ink">{result.slice(3, 6)}</dd></div>
            <div><dt>{t.partDateSex}</dt><dd className="font-mono text-ink">{result.slice(6, 11)}</dd></div>
            <div><dt>{t.partPlaceCheck}</dt><dd className="font-mono text-ink">{result.slice(11)}</dd></div>
          </dl>
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={copy} className="h-10 rounded-sm border border-hairline bg-elevated px-3 text-sm font-medium text-ink">{t.copy}</button>
            <button type="button" onClick={download} className="h-10 rounded-sm border border-hairline bg-elevated px-3 text-sm font-medium text-ink">{t.download}</button>
            <button type="button" onClick={share} className="h-10 rounded-sm border border-hairline bg-elevated px-3 text-sm font-medium text-ink">{t.share}</button>
          </div>
          <p className="mt-4 text-sm">{t.note}</p>
          <p className="mt-2 text-sm">{t.omoNote}{omoHref && <> <a className="text-link underline" href={omoHref}>{t.omoLink}</a></>}</p>
        </section>)}
    </form>
  );
}
