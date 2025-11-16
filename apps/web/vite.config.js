import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/monorepo-pwa/", // 👈 OBRIGATÓRIO PARA GITHUB PAGES

  server: {
    headers: {
      "Service-Worker-Allowed": "/"
    }
  },

  build: {
    manifest: true,
  },

  publicDir: "public",

  plugins: [react()],
});
