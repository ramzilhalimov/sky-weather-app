import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  server: {
    port: '5173',
  },
  base: '/my-weather-app',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, '/src/index.jsx'),
    },
  },
})
