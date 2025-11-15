const CACHE_NAME = 'bootcamp-cache-v2';

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

/* -----------------------------
   INSTALL → Pre-cache estático
-------------------------------- */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // ativa imediatamente
});

/* -----------------------------
   ACTIVATE → limpa versões antigas
-------------------------------- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

/* -----------------------------
   FETCH → API (Network-first)
             Arquivos estáticos (Cache-first)
-------------------------------- */
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // 🔹 1. API → Network First
  if (url.pathname.startsWith('/api')) {
    event.respondWith(networkFirst(req));
    return;
  }

  // 🔹 2. Outros domínios (CDNs, fontes, etc.)
  if (url.origin !== location.origin) {
    event.respondWith(networkFirst(req));
    return;
  }

  // 🔹 3. Conteúdo estático → Cache First
  event.respondWith(cacheFirst(req));
});

/* ------------------ HELPERS ------------------- */

async function cacheFirst(req) {
  const cached = await caches.match(req);
  return cached || fetch(req);
}

async function networkFirst(req) {
  try {
    const res = await fetch(req);

    // somente cacheia respostas válidas
    if (res && res.status === 200 && req.method === 'GET') {
      const clone = res.clone();
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, clone);
    }

    return res;
  } catch (err) {
    return caches.match(req);
  }
}
