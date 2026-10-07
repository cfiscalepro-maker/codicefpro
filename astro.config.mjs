import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://codicefiscalepro.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  redirects: { '/': '/it/' },
  i18n: { defaultLocale: 'it', locales: ['it', 'de', 'fr', 'es', 'en'], routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false } },
  integrations: [react(), sitemap({ filter: (p) => !/\/(404|500)\/?$/.test(p) })],
  vite: { plugins: [tailwindcss()] },
});
