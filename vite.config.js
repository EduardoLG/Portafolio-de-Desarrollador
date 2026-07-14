import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portafolio-de-Desarrollador/',
  plugins: [react(), tailwindcss()],
})
