import { defineConfig } from 'vite';

export default defineConfig({
  base: '/INOVASIMIC/',
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    open: false
  }
});
