import { OGImageRoute } from 'astro-og-canvas';
import nodePath from 'node:path';

const logoPath = nodePath.resolve(process.cwd(), 'src/assets/img/logo.png');


export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages: {
   'home': {
     title: 'Clean Air COMPASS',
     description: 'A collaborative, community-informed initiative to develop an open-source data management system for air quality measurement data.',
   },
   'about': {
     title: 'Clean Air COMPASS - About',
     description: 'Learn more bout the Clean Air COMPASS initiative',
   },
   'participate': {
     title: 'Clean Air COMPASS - Participate',
     description: 'Participate in the Clean Air COMPASS initiative',
   }
  },

  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: logoPath,
    },
    fonts: [
      'https://fonts.gstatic.com/s/oxygen/v15/2sDfZG1Wl4LcnbuKjk0m.woff2',
      'https://fonts.gstatic.com/s/oswald/v53/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUZiYySUhiCXAA.woff2',
    ],
    font: {
      title: {
        color: [0, 0, 0],
        size: 55,
        families: ["Oxygen"],
        lineHeight: 1.3,
      },
      description: {
        color: [0, 0, 0],
        size: 35,
        families: ["Oswald"],
        lineHeight: 1.3,
      },
    },
    bgGradient: [[255,255,255]],
    border: {
      width: 20,
      color: [6,71,137]
    }
  }),
});