const CACHE_NAME = 'me-archive-v1';
const urlsToCache = [
  '/Mirrors-Edge-Archive/',
  '/Mirrors-Edge-Archive/index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
