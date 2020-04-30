const staticIdesign = "idesign-cart-siteV1";
const assets = [
  "/",
  "/index.html",
  "/products.json",
  "/dist/css/all.css",
  "/dist/css/font-awesome.min.css",
  "/dist/css/main.min.css",
  "/dist/css/style.min.css",
  "/dist/webfonts/fa-brands-400.svg",
  "/dist/webfonts/fa-brands-400.woff",
  "/dist/webfonts/fa-brands-400.woff2",
  "/dist/webfonts/fa-regular-400.svg",
  "/dist/webfonts/fa-regular-400.woff",
  "/dist/webfonts/fa-regular-400.woff2",
  "/dist/webfonts/fa-solid-900.woff",
  "/dist/webfonts/fa-solid-900.woff2",
  "/dist/webfonts/fa-solid-900.svg",
  "/img/icon-192.png",
  "/img/icon-512.png",
  "/img/logo-white.png",
  "/img/logo-white.svg",
  "/img/logo.png",
  "/img/logo.svg",
  "/img/product-1.jpg",
  "/img/product-2.jpg",
  "/img/product-3.jpg",
  "/img/product-4.jpg",
  "/img/product-5.jpg",
  "/img/product-6.jpg",
  "/img/product-7.jpg",
  "/img/product-8.jpg",
  "/img/product-9.jpg",
  "/img/product-10.jpg",
  "/img/product-11.jpg",
  "/img/product-12.jpg",
  "/js/app.js",
  "/scss/_cart.scss",
  "/scss/_footer.scss",
  "/scss/_menu.scss",
  "/scss/main.scss",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticIdesign).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
