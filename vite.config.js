import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // This replaces manual PostCSS!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})