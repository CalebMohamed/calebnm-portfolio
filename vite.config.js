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
  build: {
    manifest: true,
    outDir: 'hugo/static',
    rollupOptions: {
      input: {
        home: 'src/home.js',
        main: 'src/main.js',
        light: 'src/light.js',
        poem: 'src/poem.js',
        error: 'src/error.js',
      }
    }
  }
})
