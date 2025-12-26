import { defineConfig } from 'vite'
import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator'
import path from 'path'

export default defineConfig({
  plugins: [
      obfuscatorPlugin({
        options: {
          // your javascript-obfuscator options
          compact: true,
          controlFlowFlattening: false,
          // ...  [See more options](https://github.com/javascript-obfuscator/javascript-obfuscator)
        },
      }),
    ],
  server: {
    open: '/test.html'
  },
  build: {
    manifest: true,
    outDir: '../static',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: 'src/home.js',
        main: 'src/main.js',
        display: 'src/display.js',
        light: 'src/light.js',
        poem: 'src/poem.js',
        error: 'src/error.js',
      }
    }
  }
})
