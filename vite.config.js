import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {//获取路径中包含了api请求
        target: 'http://localhost:8080/start',
        changeOrigin: true,//修改请求头中的host
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
