import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({ script: true })],
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        'script-src': ['self']
      }
    }
  }
};

export default config;
