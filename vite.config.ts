import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'LexiPad',
      formats: ['es'],
      fileName: 'lexi-pad',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
});
