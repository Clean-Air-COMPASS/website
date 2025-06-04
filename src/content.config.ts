import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const whoweare = defineCollection({
  loader: glob({ pattern: ['*.md'], base: 'src/content/whoweare' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      openaqLogo: image(),
      nrdcLogo: image(),
      sonomaTechLogo: image(),
    }),
});

const community = defineCollection({
  loader: glob({ pattern: ['*.md'], base: 'src/content/community' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      allinWayraLogo: image(),
      cleanAirAsiaLogo: image(),
      eciLogo: image(),
      scicanLogo: image(),
      ygpeLogo: image(),
    }),
});

const roadmap = defineCollection({
  loader: glob({ pattern: ['*.md'], base: 'src/content/roadmap' }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const hero = defineCollection({
  loader: glob({ pattern: ['*.md'], base: 'src/content/hero' }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const origin = defineCollection({
  loader: glob({ pattern: ['*.md'], base: 'src/content/origin' }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});


const events = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/events' }),
  schema: () =>
    z.object({
      title: z.string(),
      location: z.string(),
      date: z.string(),
      url: z.string().url()
    }),
});

const eventsIndex = defineCollection({
  loader: glob({ pattern: ['events_index.md'], base: 'src/content'}),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const participate = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/participate' }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const support = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/support' }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

export const collections = {
  whoweare,
  community,
  roadmap,
  hero,
  origin,
  eventsIndex,
  events,
  participate,
  support
};
