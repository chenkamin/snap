import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { resolve } from 'path'
import { VitePWA } from "vite-plugin-pwa";

 
export default defineConfig({
  plugins: [react(),VitePWA({
    registerType: 'autoUpdate', // Choose 'prompt' or 'autoUpdate' based on your preference
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Your App Name',
      short_name: 'App',
      description: 'Your Progressive Web App Description',
      icons: [
        {
          src: '/assets/images/profile.png',
          "sizes": "512x512",
          type: 'image/png',
          purpose: 'maskable any',
        },
      ],
      theme_color: '#ffffff',
      // ... other manifest properties
    },
  }),
],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
})
