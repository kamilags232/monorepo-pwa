// service-worker.js

self.addEventListener("install", () => {
  console.log("SW instalado");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("SW ativado");
  self.clients.claim();
});

// Handler simples (não interfere em nada)
self.addEventListener("fetch", (event) => {});
