import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
