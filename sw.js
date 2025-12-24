// bazi PWA service worker
// 版本号策略：每次你更新 index/app/styles 或新增模块时
// 只要改一下 VERSION（或直接改 CACHE_NAME）即可强制所有设备拉取新缓存。
const VERSION = "2025-12-24-02";
const CACHE_NAME = `bazi-tool-${VERSION}`;

// 同源核心资源（可离线）
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./boot.js",
  "./data.js",
  "./qiming.js",
  "./app.js",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./patch-editor.html",
  "./patch-editor.js",
  "./patch-editor.css"
];

// 第三方脚本（跨域）
// 说明：目前主页依赖 lunar-javascript（CDN）。为了离线可用，这里在 SW 层做预缓存与命中回放。
const EXTERNAL_ASSETS = [
  "https://cdn.jsdelivr.net/npm/lunar-javascript/lunar.js"
];

async function cacheSameOrigin(cache, url) {
  try {
    // cache:reload 让 install 时尽量拿到最新资源
    await cache.add(new Request(url, { cache: "reload" }));
  } catch (e) {
    // 单个资源失败不应拖垮整个安装
  }
}

async function cacheExternal(cache, url) {
  try {
    // no-cors 会得到 opaque response，但可以缓存供离线回放
    const res = await fetch(new Request(url, { mode: "no-cors", cache: "reload" }));
    if (res) await cache.put(url, res);
  } catch (e) {
    // 忽略
  }
}

function isCacheBusterOnly(searchParams) {
  // 常见的“强刷”参数：?v=timestamp 或 ?_=timestamp
  const keys = Array.from(searchParams.keys());
  if (!keys.length) return false;
  return keys.every((k) => k === "v" || k === "_" || k === "cb");
}

function canonicalizeRequest(req, url) {
  try {
    // 仅对静态资源去掉 cache-buster，避免 cache 因为 ?v=xxx 无限膨胀
    const p = url.pathname || "";
    const looksStatic =
      p.endsWith("/") ||
      p.endsWith(".html") ||
      p.endsWith(".js") ||
      p.endsWith(".css") ||
      p.endsWith(".json") ||
      p.endsWith(".png") ||
      p.endsWith(".svg") ||
      p.endsWith(".ico") ||
      p.endsWith(".webp");

    if (looksStatic && url.search && isCacheBusterOnly(url.searchParams)) {
      const clean = new URL(url.origin + url.pathname);
      return new Request(clean.toString(), { method: "GET" });
    }
  } catch (e) {}
  return req;
}

// 安装：预缓存核心资源，并让新 SW 尽快进入 waiting/active 流程
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await Promise.all(CORE_ASSETS.map((u) => cacheSameOrigin(cache, u)));
      await Promise.all(EXTERNAL_ASSETS.map((u) => cacheExternal(cache, u)));
      await self.skipWaiting();
    })()
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

  // 向页面回传当前 SW 的版本号（用于“我的”页展示与自检）
  if (data === "GET_VERSION" || (data && data.type === "GET_VERSION")) {
    const payload = { type: "SW_VERSION", version: VERSION, cacheName: CACHE_NAME };
    const reply = (client) => {
      try {
        client && client.postMessage && client.postMessage(payload);
      } catch (e) {}
    };
    if (event.source) {
      reply(event.source);
      return;
    }
    if (event.clientId) {
      self.clients.get(event.clientId).then(reply).catch(() => null);
    }
  }
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }

  // 1) 跨域：lunar.js（CDN）缓存回放
  if (EXTERNAL_ASSETS.includes(url.href)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(url.href);
        if (cached) return cached;
        try {
          const res = await fetch(new Request(url.href, { mode: "no-cors" }));
          if (res) cache.put(url.href, res.clone());
          return res;
        } catch (e) {
          return cached;
        }
      })()
    );
    return;
  }

  // 2) 导航请求：网络优先，失败回退到缓存主页
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).catch(async () => {
        const cached = await caches.match("./index.html");
        return cached || caches.match("./");
      })
    );
    return;
  }

  // 3) 只处理同源资源
  if (url.origin !== self.location.origin) {
    return;
  }

  const path = url.pathname || "";
  const isQimingPatch = path.endsWith("/qiming_patch.json") || path.endsWith("qiming_patch.json");
  const isPatchEditor =
    path.endsWith("/patch-editor.html") ||
    path.endsWith("/patch-editor.js") ||
    path.endsWith("/patch-editor.css");

  // 3.1) qiming_patch.json：网络优先（热更新），失败再回退缓存；离线兜底为空补丁
  if (isQimingPatch) {
    event.respondWith(
      (async () => {
        const keyReq = new Request(url.origin + url.pathname, { method: "GET" });
        try {
          const res = await fetch(req, { cache: "no-store" });
          if (res && res.ok && res.type === "basic") {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(keyReq, res.clone());
          }
          return res;
        } catch (e) {
          const cached = await caches.match(keyReq);
          return (
            cached ||
            new Response('{"chars":{}}', {
              headers: { "Content-Type": "application/json" },
            })
          );
        }
      })()
    );
    return;
  }

  // 3.2) 补丁编辑器：尽量走网络拿最新（避免被旧版本“卡住”），失败回退缓存
  if (isPatchEditor) {
    event.respondWith(
      (async () => {
        const keyReq = new Request(url.origin + url.pathname, { method: "GET" });
        try {
          const res = await fetch(req, { cache: "no-store" });
          if (res && res.ok && res.type === "basic") {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(keyReq, res.clone());
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

  // 3.3) 其他同源资源：缓存优先，缺失则拉网并写入缓存（对 ?v=xxx 做 canonical，防膨胀）
  event.respondWith(
    (async () => {
      const keyReq = canonicalizeRequest(req, url);
      const cached = await caches.match(keyReq);
      if (cached) return cached;

      try {
        const res = await fetch(req);
        if (res && res.status === 200 && res.type === "basic") {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(keyReq, res.clone());
        }
        return res;
      } catch (e) {
        // 网络失败：最后再试一次缓存
        const fallback = await caches.match(keyReq);
        return fallback || Promise.reject(e);
      }
    })()
  );
});
