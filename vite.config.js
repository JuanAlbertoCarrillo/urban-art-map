import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.jsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setUpTests.js',
  },
})
