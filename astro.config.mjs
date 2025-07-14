// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import purgecss from 'astro-purgecss';

export default defineConfig({
  site: 'https://cleanaircompass.org',
  image: {
    responsiveStyles: true,
  },
  integrations: [sitemap(), purgecss()],
});
