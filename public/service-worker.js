importScripts("workbox-sw.prod.v2.1.3.js");
const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute(
  /.*(?:googleapis|gstatic)\.com.*$/,
  workboxSW.strategies.staleWhileRevalidate({
    cacheName: "google-fonts",
    cacheExpiration: {
      maxEntries: 3,
      maxAgeSeconds: 60 * 60 * 24 * 30,
    },
  })
);

workboxSW.router.registerRoute(
  "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css",
  workboxSW.strategies.staleWhileRevalidate({
    cacheName: "google-fonts",
  })
);

workboxSW.router.registerRoute(
  /.*(?:firebasestorage\.googleapis)\.com.*$/,
  workboxSW.strategies.staleWhileRevalidate({
    cacheName: "post-images",
  })
);

workboxSW.precache([
  {
    url: "404.html",
    revision: "0a27a4163254fc8fce870c8cc3a3f94f",
  },
  {
    url: "favicon.ico",
    revision: "2cab47d9e04d664d93c8d91aec59e812",
  },
  {
    url: "index.html",
    revision: "de6f12b4c1b2e98ffbaf1ffb4bed9d92",
  },
  {
    url: "manifest.json",
    revision: "d11c7965f5cfba711c8e74afa6c703d7",
  },
  {
    url: "offline.html",
    revision: "45352e71a80a5c75d25e226e7330871b",
  },
  {
    url: "service-worker.js",
    revision: "f5163466f2a1ce74a5f7bdaf1488158b",
  },
  {
    url: "src/css/app.css",
    revision: "f27b4d5a6a99f7b6ed6d06f6583b73fa",
  },
  {
    url: "src/css/feed.css",
    revision: "edb6851fd7f76aec67d4ca36a09b166d",
  },
  {
    url: "src/css/help.css",
    revision: "1c6d81b27c9d423bece9869b07a7bd73",
  },
  {
    url: "src/images/icons/app-icon-144x144.png",
    revision: "83011e228238e66949f0aa0f28f128ef",
  },
  {
    url: "src/images/icons/app-icon-192x192.png",
    revision: "f927cb7f94b4104142dd6e65dcb600c1",
  },
  {
    url: "src/images/icons/app-icon-256x256.png",
    revision: "86c18ed2761e15cd082afb9a86f9093d",
  },
  {
    url: "src/images/icons/app-icon-384x384.png",
    revision: "fbb29bd136322381cc69165fd094ac41",
  },
  {
    url: "src/images/icons/app-icon-48x48.png",
    revision: "45eb5bd6e938c31cb371481b4719eb14",
  },
  {
    url: "src/images/icons/app-icon-512x512.png",
    revision: "d42d62ccce4170072b28e4ae03a8d8d6",
  },
  {
    url: "src/images/icons/app-icon-96x96.png",
    revision: "56420472b13ab9ea107f3b6046b0a824",
  },
  {
    url: "src/images/icons/apple-icon-114x114.png",
    revision: "74061872747d33e4e9f202bdefef8f03",
  },
  {
    url: "src/images/icons/apple-icon-120x120.png",
    revision: "abd1cfb1a51ebe8cddbb9ada65cde578",
  },
  {
    url: "src/images/icons/apple-icon-144x144.png",
    revision: "b4b4f7ced5a981dcd18cb2dc9c2b215a",
  },
  {
    url: "src/images/icons/apple-icon-152x152.png",
    revision: "841f96b69f9f74931d925afb3f64a9c2",
  },
  {
    url: "src/images/icons/apple-icon-180x180.png",
    revision: "2e5e6e6f2685236ab6b0c59b0faebab5",
  },
  {
    url: "src/images/icons/apple-icon-57x57.png",
    revision: "cc93af251fd66d09b099e90bfc0427a8",
  },
  {
    url: "src/images/icons/apple-icon-60x60.png",
    revision: "18b745d372987b94d72febb4d7b3fd70",
  },
  {
    url: "src/images/icons/apple-icon-72x72.png",
    revision: "b650bbe358908a2b217a0087011266b5",
  },
  {
    url: "src/images/icons/apple-icon-76x76.png",
    revision: "bf10706510089815f7bacee1f438291c",
  },
  {
    url: "src/images/main-image-lg.jpg",
    revision: "31b19bffae4ea13ca0f2178ddb639403",
  },
  {
    url: "src/images/main-image-sm.jpg",
    revision: "c6bb733c2f39c60e3c139f814d2d14bb",
  },
  {
    url: "src/images/main-image.jpg",
    revision: "5c66d091b0dc200e8e89e56c589821fb",
  },
  {
    url: "src/images/sf-boat.jpg",
    revision: "0f282d64b0fb306daf12050e812d6a19",
  },
  {
    url: "src/js/app.js",
    revision: "17d0fcc0653795cd01bbe20c7dba5274",
  },
  {
    url: "src/js/feed.js",
    revision: "180e2db73e0dfa27a074d06cd64e9c30",
  },
  {
    url: "src/js/fetch.js",
    revision: "6b82fbb55ae19be4935964ae8c338e92",
  },
  {
    url: "src/js/idb.js",
    revision: "017ced36d82bea1e08b08393361e354d",
  },
  {
    url: "src/js/material.min.js",
    revision: "713af0c6ce93dbbce2f00bf0a98d0541",
  },
  {
    url: "src/js/promise.js",
    revision: "10c2238dcd105eb23f703ee53067417f",
  },
  {
    url: "src/js/utility.js",
    revision: "4853a87685922cdf08b8bc5ed3f6f85e",
  },
  {
    url: "sw-base.js",
    revision: "d15cd23948e379927b424d455a380515",
  },
  {
    url: "sw.js",
    revision: "478f479738fb631a34e8ff9de1170170",
  },
  {
    url: "workbox-sw.prod.v2.1.3.js",
    revision: "a9890beda9e5f17e4c68f42324217941",
  },
  {
    url: "workbox-sw.prod.v2.1.3.js.map",
    revision: "1cbd1bf8f8f05f7504355e0f7674b67e",
  },
]);
