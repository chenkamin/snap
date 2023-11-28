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
      name: 'snapgram',
      short_name: 'Sanp',
      description: 'Your Progressive Web App Description',
      "start_url": "https://snap-rttn.vercel.app/",
      "display": "standalone",
      icons: [
        {
          src: 'assets/images/icon-192.jpg',
          "sizes": "512x512 192x192",
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
