import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build work on any host (Netlify, Vercel, GitHub Pages, etc.)
export default defineConfig({
  base: './',
  plugins: [react()],
})
