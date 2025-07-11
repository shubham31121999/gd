

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(),
    visualizer({ open: true })
  ],
  base: '/dentistry/',
  build: {
    cssCodeSplit: true,
  chunkSizeWarningLimit: 500,
  minify: 'esbuild',
  target: 'es2015',
    
    
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thankyou: resolve(__dirname, 'thankyou.html'),
      },
    },
  },
});