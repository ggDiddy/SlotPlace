const CACHE_VERSION = 'v3';
const CACHE_NAME = `slotplace-static-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/styles.css',
  '/styles.min.css',
  '/animations.css',
  '/main.js',
  '/main.min.js',
  '/animations.js',
  '/assets/logo-vegasino.webp',
  '/assets/BC-Game-Logo.webp',
  '/assets/Casina-logo.webp',
  '/assets/zinkra-casino.webp',
  '/assets/slot-place-logo.webp'
];

// External resources to cache (with longer TTL)
const EXTERNAL_CACHE_NAME = `slotplace-external-${CACHE_VERSION}`;
const EXTERNAL_RESOURCES = [
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS)),
      caches.open(EXTERNAL_CACHE_NAME).then(cache => 
        cache.addAll(EXTERNAL_RESOURCES).catch(err => console.log('External cache failed:', err))
      )
    ])
  );
  self.skipWaiting(); // Force new service worker to activate immediately
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME && key !== EXTERNAL_CACHE_NAME)
           .map(key => caches.delete(key))
      )
    )
  );
  return self.clients.claim(); // Take control of all pages immediately
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  // Handle external CDN resources with cache-first strategy
  if (url.origin !== self.location.origin) {
    if (url.hostname.includes('cdn.jsdelivr.net') || url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
      event.respondWith(cacheFirst(request, EXTERNAL_CACHE_NAME));
    }
    return;
  }

  // Handle navigation requests with network-first
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(networkFirst(request));
    return;
  }

  // Handle static assets with stale-while-revalidate  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});

function networkFirst(request) {
  return fetch(request)
    .then(response => {
      if (response && response.status === 200) {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
      }cacheFirst(request, cacheName = CACHE_NAME) {
  return caches.match(request).then(cached => {
    if (cached) {
      return cached;
    }
    return fetch(request).then(response => {
      if (response && response.status === 200) {
        const responseClone = response.clone();
        caches.open(cacheName).then(cache => cache.put(request, responseClone));
      }
      return response;
    }).catch(() => null);
  });
}

function 
      return response;
    })
    .catch(() => caches.match(request).then(cached => cached || caches.match('/index.html')));
}

function staleWhileRevalidate(request) {
  return caches.match(request).then(cached => {
    const fetchPromise = fetch(request)
      .then(response => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
        }
        return response;
      })
      .catch(() => null);

    return cached || fetchPromise;
  });
}
