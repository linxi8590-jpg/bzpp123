// bazi PWA service worker
// 版本号策略：每次你更新 index/app/styles 或新增模块时
// 只要改一下 VERSION（或直接改 CACHE_NAME）即可强制所有设备拉取新缓存。
const VERSION = "2025-12-19-01";
const CACHE_NAME = `bazi-tool-${VERSION}`;

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./data.js",
  "./qiming.js",
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


// 支持页面主动触发“立刻接管”（配合客户端的强制更新按钮）
self.addEventListener("message", (event) => {
  const data = event.data;
  if (data === "SKIP_WAITING" || (data && data.type === "SKIP_WAITING")) {
    self.skipWaiting();
  }
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

  // 特例：启明补丁字库需要“热更新”
  // - 在线：优先拉最新并写入缓存（用无 query 的 canonical key 防止缓存膨胀）
  // - 离线：回退到缓存
  const path = url.pathname || "";
  const isQimingPatch = path.endsWith("/qiming_patch.json") || path.endsWith("qiming_patch.json");
  const isPatchEditor =
    path.endsWith("/patch-editor.html") ||
    path.endsWith("/patch-editor.js") ||
    path.endsWith("/patch-editor.css");

  if (isQimingPatch) {
    event.respondWith(
      (async () => {
        const keyReq = new Request(url.origin + url.pathname, { method: "GET" });
        try {
          const res = await fetch(req, { cache: "no-store" });
          if (res && res.status === 200 && res.type === "basic") {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(keyReq, resClone));
          }
          return res;
        } catch (e) {
          const cached = await caches.match(keyReq);
          if (cached) return cached;
          throw e;
        }
      })()
    );
    return;
  }

  // 特例：补丁编辑器尽量走网络，避免老版本页面被缓存“卡住”
  if (isPatchEditor) {
    event.respondWith(
      (async () => {
        const keyReq = new Request(url.origin + url.pathname, { method: "GET" });
        try {
          const res = await fetch(req, { cache: "no-store" });
          if (res && res.status === 200 && res.type === "basic") {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(keyReq, resClone));
          }
          return res;
        } catch (e) {
          const cached = await caches.match(keyReq);
          if (cached) return cached;
          throw e;
        }
      })()
    );
    return;
  }


  // qiming_patch.json：网络优先（热更新），失败再回退缓存；不参与预缓存
  if (url.pathname.endsWith("/qiming_patch.json") || url.pathname.endsWith("qiming_patch.json")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => {
            return (
              cached ||
              new Response('{"chars":{}}', {
                headers: { "Content-Type": "application/json" },
              })
            );
          })
        )
    );
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