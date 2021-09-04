self.addEventListener("install", (e) => {
  console.log("[Service Worker] Installing Service Worker ...", e);
});
self.addEventListener("activated", (e) => {
  console.log("[Service Worker] Activated Service Worker ...", e);
  return self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] fetching Something...", e);
  e.respondWith(fetch(e.request));
});
