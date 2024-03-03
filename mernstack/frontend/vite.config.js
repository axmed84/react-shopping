import path from 'path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    proxy:{
      '/api': "http://localhost:8000"
    }
    
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
