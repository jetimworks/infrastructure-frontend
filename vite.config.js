import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/infrastructure-frontend/',
  build: {
    outDir: 'docs',
  },
  server: {
    port: 7777,
  },
})
