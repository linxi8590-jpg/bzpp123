// bazi PWA service worker
// 版本号策略：每次你更新 index/app/styles 或新增模块时
// 只要改一下 VERSION（或直接改 CACHE_NAME）即可强制所有设备拉取新缓存。
const VERSION = "2025-12-10-08";
const CACHE_NAME = `bazi-tool-${VERSION}`;

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

// 安装：预缓存核心资源，并让新 SW 尽快进入 waiting/active 流程
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 激活：清理旧缓存并立刻接管页面
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))))
      )
      .then(() => self.clients.claim())
  );
});

// 取资源：
// - 同源 GET：优先缓存命中，缺失则拉网并写入缓存
// - 非同源：直接走网络（避免缓存第三方不稳定资源）
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }

  // 只处理同源资源
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req)
        .then((res) => {
          // 仅缓存成功的 basic 响应
          if (res && res.status === 200 && res.type === "basic") {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});
