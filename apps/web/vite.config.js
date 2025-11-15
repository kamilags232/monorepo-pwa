import { defineConfig } from "vite";

export default defineConfig({
  server: {
    // Obrigatório para o service worker conseguir controlar a raiz "/"
    headers: {
      "Service-Worker-Allowed": "/"
    }
  },

  build: {
    // Garante que o manifest seja gerado corretamente no build
    manifest: true
  },

  // Serve arquivos da pasta public/ corretamente
  publicDir: "public",
});
