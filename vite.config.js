import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    manifest: true,
    outDir: 'blogs/static',
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, './index.html'),
        newhome: path.resolve(__dirname, './newhome/index.html'),
        personal: path.resolve(__dirname, './personal/index.html'),
        professional: path.resolve(__dirname, './professional/index.html'),
        forums: path.resolve(__dirname, './forums/index.html'),
      }
    }
  }
})
