var cacheName = 'helpful-questions';
var dataCacheName = 'weatherData-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/scripts/index.js',
  '/scripts/add.js',
  '/scripts/refresh.js',
  '/styles/inline.css',
  '/assets/cornell-logo.png',
  '/assets/ic_add_white_24px.svg',
  '/assets/ic_refresh_white_24px.svg',
  '/__/firebase/4.7.0/firebase-app.js',
  '/__/firebase/4.7.0/firebase-database.js',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] installed');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  )
})

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache ');
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
})

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response) {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    )
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});
