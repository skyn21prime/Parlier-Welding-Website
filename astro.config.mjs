import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  redirects: {
    '/Home': '/',
 },
 buildOptions: {
  publicPath: '/Parlier-Welding-Website/',
},
});
import { defineConfig } from 'astro/config';

