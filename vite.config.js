import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/animated_website/",
  build: {
    assetsInlineLimit: 0,         // disables automatic bundling of fonts
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.woff2$/.test(assetInfo.name)) {
            return 'fonts/[name][extname]';  // put fonts in a separate folder
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})
