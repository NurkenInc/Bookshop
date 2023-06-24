import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({ exportAsDefault: true }),
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __APP__: JSON.stringify('http://localhost:5173'),
    __PROJECT__: JSON.stringify('frontend'),
    VITE_AUTH0_DOMAIN: process.env.VITE_AUTH0_DOMAIN,
    VITE_CLIENT_ID: process.env.VITE_AUTH0_DOMAIN,
    VITE_GOOGLE_BOOKS_API_BASE_URL: process.env.VITE_GOOGLE_BOOKS_API_BASE_URL,
    VITE_GOOGLE_BOOKS_API_KEY: process.env.VITE_GOOGLE_BOOKS_API_KEY,
  },
});
