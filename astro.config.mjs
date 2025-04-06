// @ts-check
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [],
    },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },

  experimental: {
    clientPrerender: true,
  },

  integrations: [],
});