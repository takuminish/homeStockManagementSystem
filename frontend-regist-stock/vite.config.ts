import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    outDir: '../public',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@src':`${__dirname}/src/`
    }
  }
});
