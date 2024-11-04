import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const HOSTEndPoint = "https://api.postgait.com"
export default defineConfig({
  plugins: [react()],
  base: "/postgait/",
  server: {
    proxy: {
      '/api': {
        target: HOSTEndPoint,
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => {console.log(path); return path}
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
