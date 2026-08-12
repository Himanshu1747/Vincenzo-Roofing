// // @ts-check

// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
// import node from '@astrojs/node';
// import vercel from '@astrojs/vercel';
// import netlify from '@astrojs/netlify';
// import { defineConfig, fontProviders } from 'astro/config';

// // Pick the right adapter automatically depending on where the build is running.
// // Vercel sets process.env.VERCEL, Netlify sets process.env.NETLIFY during their builds.
// // Locally (or on any other host) it falls back to the standalone Node server.
// function getAdapter() {
// 	if (process.env.VERCEL) return vercel();
// 	if (process.env.NETLIFY) return netlify();
// 	return node({ mode: 'standalone' });
// }

// // https://astro.build/config
// export default defineConfig({
// 	site: 'https://example.com',
// 	output: 'static', // pages are static by default
// 	adapter: getAdapter(),
// 	integrations: [mdx(), sitemap()],
// 	fonts: [
// 		{
// 			provider: fontProviders.local(),
// 			name: 'Atkinson',
// 			cssVariable: '--font-atkinson',
// 			fallbacks: ['sans-serif'],
// 			options: {
// 				variants: [
// 					{
// 						src: ['./src/assets/fonts/atkinson-regular.woff'],
// 						weight: 400,
// 						style: 'normal',
// 						display: 'swap',
// 					},
// 					{
// 						src: ['./src/assets/fonts/atkinson-bold.woff'],
// 						weight: 700,
// 						style: 'normal',
// 						display: 'swap',
// 					},
// 				],
// 			},
// 		},
// 	],
// });


// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import netlify from '@astrojs/netlify';
import { defineConfig, fontProviders } from 'astro/config';

// Pick the right adapter automatically depending on where the build is running.
function getAdapter() {
  if (process.env.VERCEL) return vercel();
  if (process.env.NETLIFY) return netlify();
  return node({ mode: 'standalone' });
}

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server', // <-- Fixed: Serverless API routes (Forms) chalane ke liye zaroori hai
  adapter: getAdapter(),
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/atkinson-regular.woff'],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/atkinson-bold.woff'],
            weight: 700,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
});