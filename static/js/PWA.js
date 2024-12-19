// Service worker file: sw.js

const cacheName = 'image-cache-v1';
const resourcesToCache = [
    '/static/Images/FemaleDocktorNew.jpg',
    '/static/Images/hStat.jpg',
    '/static/Images/OnlineHelpeNew.jpg'
];

// Install service worker and cache the images
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(resourcesToCache);
        })
    );
});

// Fetch the images from cache if available, otherwise fetch from network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Activate service worker and clear old caches if needed
self.addEventListener('activate', event => {
    const cacheWhitelist = [cacheName];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (!cacheWhitelist.includes(cache)) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
