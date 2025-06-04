import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
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
      path: './src/assets/img/logo.png',
    },
    fonts: ["src/assets/fonts/Oxygen-Regular.ttf","src/assets/fonts/Oswald-VariableFont_wght.ttf"],
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