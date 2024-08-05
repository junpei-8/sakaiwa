import cloudflare from '@astrojs/cloudflare';
import swup from '@swup/astro';
import { defineConfig } from 'astro/config';

/** @see {@link https://astro.build/config} */
export default defineConfig({
  output: 'hybrid',

  adapter: cloudflare(),

  integrations: [
    swup({
      theme: /** @type {any} */ ('slide'),
      animationClass: 'swup-',
      containers: ['#layout-main'],
      reloadScripts: true,
      globalInstance: true,
    }),
  ],
});
