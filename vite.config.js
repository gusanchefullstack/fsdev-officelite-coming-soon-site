import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: resolve(__dirname, 'assets'),
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        signup: resolve(__dirname, 'src/sign-up.html'),
      },
    },
  },
});
