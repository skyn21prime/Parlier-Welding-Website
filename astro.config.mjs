import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [ react()],
  redirects: {
    '/Home': "/Parlier-Welding-Website/",
 },
 site: "https://cyborgnetical.github.io/Parlier-Welding-Website/",
 base:"/Parlier-Welding-Website/"
});

