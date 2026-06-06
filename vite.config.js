import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        femora: resolve(__dirname, 'pages/femora.html'),
        realTimeFem: resolve(__dirname, 'pages/real-time-fem.html'),
      },
    },
  },
});
