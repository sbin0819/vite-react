import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages/'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components/'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks/'),
      },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, 'src/components/ui'),
      },
    ],
  },
});
