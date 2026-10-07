import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import Calculator from '../src/components/Calculator';
import Decoder from '../src/components/Decoder';
import { locales, localeMeta } from '../src/i18n/config';
import { ui } from '../src/i18n/ui';

// Regression test: the Italian pages once rendered these components without their dictionary and crashed.
describe('server render of the tools', () => {
  it.each(locales)('%s: calculator renders with its dictionary', (l) => {
    const html = renderToString(createElement(Calculator, { t: ui[l].calc, locale: l, omoHref: '/x/' }));
    expect(html).toContain(ui[l].calc.submit);
    expect(html).not.toMatch(/undefined|NaN/);
  });
  it.each(locales)('%s: decoder renders in both modes', (l) => {
    for (const mode of ['inverse', 'verify'] as const) {
      const html = renderToString(createElement(Decoder, { mode, t: ui[l].dec, locale: l, intl: localeMeta[l].intl }));
      expect(html.length).toBeGreaterThan(500);
      expect(html).not.toMatch(/undefined|NaN/);
    }
  });
});
