import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.{jsx,tsx}",
    fastRefresh: false,
    refresh: false,
    babel: {
      plugins: []
    }
  })],
  server: {
    port: 3000,
    host: true
  }
})

