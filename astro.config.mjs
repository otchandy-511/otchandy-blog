import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://otchandy.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
