import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/animated_website/",
  build: {
    copyPublicDir: true,   // forces real copy, not symlinks
    rollupOptions: {
      preserveSymlinks: false,  // prevents symlink creation
    }
  }
})

  

