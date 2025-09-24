import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    manifest: true,
    outDir: 'blogs/static',
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, './index.html'),
        personal: path.resolve(__dirname, './personal/index.html'),
        about: path.resolve(__dirname, './about/index.html'),
      }
    }
  }
})
