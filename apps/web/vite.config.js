import { defineConfig } from "vite";

export default defineConfig({
  base: "/monorepo-pwa/",

  server: {
    headers: {
      "Service-Worker-Allowed": "/monorepo-pwa/"
    }
  },

  build: {
    manifest: true
  },

  publicDir: "public",
});
