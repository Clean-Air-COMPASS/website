// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import purgecss from 'astro-purgecss';

export default defineConfig({
  site: 'https://cleanaircompass.org',
  experimental: {
    responsiveImages: true,
  },
  integrations: [sitemap(), purgecss()],
});
