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
        now: path.resolve(__dirname, './now/index.html'),
        poems: path.resolve(__dirname, './poems/index.html'),
        projects: path.resolve(__dirname, './projects/index.html'),
        work: path.resolve(__dirname, './work/index.html'),
        games: path.resolve(__dirname, './games/index.html'),
        slashes: path.resolve(__dirname, './slashes/index.html'),
      }
    }
  }
})
