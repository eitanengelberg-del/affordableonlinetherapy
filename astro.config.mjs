import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://affordableonlinetherapy.xyz',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
