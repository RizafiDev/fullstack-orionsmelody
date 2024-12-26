import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build", // Ubah output folder ke 'build'
  },
  plugins: [react()],
  server: {
    host: true,
    port: 8000, // Sesuaikan port jika perlu
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
