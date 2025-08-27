import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, './index.html'),
        personal: path.resolve(__dirname, './personal/index.html'),
        professional: path.resolve(__dirname, './professional/index.html'),
        forums: path.resolve(__dirname, './forums/index.html')
      }
    }
  }
})
