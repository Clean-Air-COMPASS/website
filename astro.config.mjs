// @ts-check
import { defineConfig,fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import purgecss from 'astro-purgecss';

export default defineConfig({
  build: {
    concurrency: 1,
  },
  site: 'https://cleanaircompass.org',
  image: {
    responsiveStyles: true,
  },
  fonts: [{
    provider: fontProviders.google(),
    name: "Oxygen",
    cssVariable: "--font-oxygen",
  },
{
    provider: fontProviders.google(),
    name: "Oswald",
    cssVariable: "--font-oswald",
    weights: [300]
  }
],
  integrations: [sitemap(), purgecss()],
});
