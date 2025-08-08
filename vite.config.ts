import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    // ✅ Base path chuẩn cho GitHub Pages
    base: '/qlhs/',

    plugins: [
      react(),

      // ✅ Nén GZIP
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240,
        deleteOriginFile: false
      }),

      // ✅ Nén Brotli
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 10240,
        deleteOriginFile: false
      })
    ],

    define: {
      // ✅ Bắt buộc thêm nếu dùng Firebase SDK v9+
      'process.env': {},

      // ✅ Biến môi trường tùy chỉnh
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.')
      }
    },

    optimizeDeps: {
      // ✅ Pre-bundle Firebase modules
      include: [
        'firebase/app',
        'firebase/auth',
        'firebase/firestore'
      ]
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom']
          }
        }
      },
      chunkSizeWarningLimit: 1000
    }
  }
})
