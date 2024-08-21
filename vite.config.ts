import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "",
  plugins: [
    react(),
    VitePWA({
      devOptions: { enabled: true },
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Simple QR Scanner",
        short_name: "QR Scanner",
        start_url: ".",
        display: "standalone",
        theme_color: "#838996",
        background_color: "#989898",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "512x512 256x256 64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
        ],
      },
      registerType: "autoUpdate",
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    assetsDir: "",
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].[ext]",
      },
    },
  },
});
