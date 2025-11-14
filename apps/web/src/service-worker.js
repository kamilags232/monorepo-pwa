const CACHE = 'bootcamp-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // API requests -> Network-first with fallback to cache
  if (url.pathname.startsWith('/api') || url.origin !== location.origin) {
    e.respondWith(
      fetch(req)
        .then(res => { 
          // cache copy
          if (res && res.status === 200 && req.method === 'GET') {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(req, clone));
          }
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Static assets -> Cache-first
  e.respondWith(
    caches.match(req).then(res => res || fetch(req))
  );
});
