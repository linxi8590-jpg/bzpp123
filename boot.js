// boot.js - 轻量启动器：版本显示 + 兜底维护按钮 + 全局错误提示
// 设计目标：即使 app.js 加载/解析失败，“我的”页的救命按钮也能工作。

(function(){
  'use strict';

  // 与 sw.js 的 VERSION 保持一致（交付时同时更新）
  const UI_VERSION = 'v12.3-2025-12-24-01';
  const SW_EXPECTED_VERSION = '2025-12-24-01';

  const qs = (s) => document.querySelector(s);
  const safeText = (el, text) => { try{ if(el) el.textContent = String(text ?? ''); }catch(e){} };

  function showToast(text){
    const t = qs('#toast');
    if(!t) return;
    t.textContent = text;
    t.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove('show'), 1600);
  }

  function setRuntimeStatus(ok, shortMsg){
    const statusEl = qs('#runtimeStatus');
    const shortEl = qs('#runtimeErrorShort');
    const alertEl = qs('#runtimeAlert');
    safeText(statusEl, ok ? '正常' : '异常');
    safeText(shortEl, ok ? '—' : (shortMsg || '脚本异常'));
    try{
      if(alertEl){
        alertEl.classList.toggle('show', !ok);
      }
    }catch(e){}
  }

  function renderVersions(){
    safeText(qs('#uiVersion'), UI_VERSION);
    safeText(qs('#buildTime'), UI_VERSION.replace(/^v/i,''));
  }

  async function detectCacheVersion(){
    const cacheEl = qs('#cacheVersion');
    if(!cacheEl) return;

    // 1) 先尝试从 SW 主动回传
    const fromSW = await requestSWVersion(800);
    if(fromSW){
      safeText(cacheEl, `sw:${fromSW}`);
      return;
    }

    // 2) 兜底：从 Cache Storage 的 key 猜
    try{
      if(!('caches' in window)) return;
      const keys = await caches.keys();
      const hit = keys.find(k => String(k).startsWith('bazi-tool-'));
      if(hit){
        safeText(cacheEl, hit.replace('bazi-tool-','sw:'));
      }else{
        safeText(cacheEl, `sw:${SW_EXPECTED_VERSION}`);
      }
    }catch(e){
      safeText(cacheEl, `sw:${SW_EXPECTED_VERSION}`);
    }
  }

  function bustReload(){
    const v = Date.now();
    const url = new URL(location.href);
    url.searchParams.set('v', String(v));
    location.replace(url.toString());
  }

  async function deleteAllCaches(){
    try{
      if(!('caches' in window)) return;
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
    }catch(e){}
  }

  async function unregisterAllSW(){
    try{
      if(!('serviceWorker' in navigator)) return;
      if(!navigator.serviceWorker.getRegistrations) return;
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r => r.unregister().catch(()=>null)));
    }catch(e){}
  }

  async function tryUpdateAndActivateSW(){
    try{
      if(!('serviceWorker' in navigator)) return;
      const reg = await navigator.serviceWorker.getRegistration();
      if(reg){
        try{ await reg.update(); }catch(e){}
        const postSkip = (sw) => { try{ sw && sw.postMessage && sw.postMessage('SKIP_WAITING'); }catch(e){} };
        if(reg.waiting) postSkip(reg.waiting);
        if(reg.installing){
          reg.installing.addEventListener('statechange', () => {
            try{ if(reg.installing.state === 'installed' && reg.waiting) postSkip(reg.waiting); }catch(e){}
          });
        }
      }
    }catch(e){}
  }

  function bindMeButtons(){
    const softBtn = qs('#btnSoftReload');
    const hardBtn = qs('#btnHardRefresh');
    const nukeBtn = qs('#btnNukeUpdate');
    const fixBtn = qs('#runtimeFixBtn');

    // 避免与 app.js 重复绑定
    const mark = (btn) => { try{ if(btn) btn.dataset.meBound = '1'; }catch(e){} };
    const already = (btn) => { try{ return !!(btn && btn.dataset.meBound === '1'); }catch(e){ return false; } };

    if(softBtn && !already(softBtn)){
      softBtn.addEventListener('click', () => bustReload());
      mark(softBtn);
    }

    const hardAction = async () => {
      showToast('正在清理缓存…');
      await tryUpdateAndActivateSW();
      await deleteAllCaches();
      await unregisterAllSW();
      bustReload();
    };

    if(hardBtn && !already(hardBtn)){
      hardBtn.addEventListener('click', hardAction);
      mark(hardBtn);
    }
    if(fixBtn && !already(fixBtn)){
      fixBtn.addEventListener('click', hardAction);
      mark(fixBtn);
    }

    if(nukeBtn && !already(nukeBtn)){
      nukeBtn.addEventListener('click', async () => {
        showToast('强制更新中…');
        await tryUpdateAndActivateSW();
        await deleteAllCaches();
        // 不注销 SW，让它重新安装并接管
        bustReload();
      });
      mark(nukeBtn);
    }
  }

  // 全局错误兜底：尽量给出“怎么自救”的按钮
  function installGlobalErrorGuards(){
    const onErr = (msg, src, line, col, err) => {
      const m = String(msg || '脚本错误');
      setRuntimeStatus(false, m);
      showToast('脚本异常：建议点“清理缓存并刷新”');
      // 控制台留详细信息
      try{ console.error('[runtime error]', { msg, src, line, col, err }); }catch(e){}
    };

    window.addEventListener('error', (e) => {
      try{
        const m = e && e.message ? e.message : '脚本错误';
        onErr(m, e && e.filename, e && e.lineno, e && e.colno, e && e.error);
      }catch(_){ onErr('脚本错误'); }
    }, true);

    window.addEventListener('unhandledrejection', (e) => {
      try{
        const reason = e && e.reason;
        const m = reason && reason.message ? reason.message : String(reason || 'Promise 未处理异常');
        setRuntimeStatus(false, m);
        showToast('运行异常：建议点“清理缓存并刷新”');
        try{ console.error('[unhandledrejection]', reason); }catch(_){}
      }catch(_){
        setRuntimeStatus(false, 'Promise 未处理异常');
      }
    });
  }

  async function requestSWVersion(timeoutMs){
    try{
      if(!('serviceWorker' in navigator)) return null;
      // 确保已注册（index.html 里也会注册，但这里做兜底）
      try{ await navigator.serviceWorker.register('./sw.js'); }catch(e){}

      const ready = navigator.serviceWorker.ready.catch(()=>null);
      const timer = new Promise((r) => setTimeout(() => r(null), timeoutMs || 600));
      const reg = await Promise.race([ready, timer]);
      if(!reg) return null;

      const controller = navigator.serviceWorker.controller;
      if(!controller || !controller.postMessage) return null;

      return await new Promise((resolve) => {
        let done = false;
        const finish = (v) => { if(done) return; done = true; resolve(v); };

        const onMsg = (ev) => {
          try{
            const data = ev && ev.data;
            if(data && data.type === 'SW_VERSION' && data.version){
              navigator.serviceWorker.removeEventListener('message', onMsg);
              finish(String(data.version));
            }
          }catch(e){}
        };
        navigator.serviceWorker.addEventListener('message', onMsg);

        try{ controller.postMessage({ type: 'GET_VERSION' }); }catch(e){
          navigator.serviceWorker.removeEventListener('message', onMsg);
          finish(null);
          return;
        }

        setTimeout(() => {
          try{ navigator.serviceWorker.removeEventListener('message', onMsg); }catch(e){}
          finish(null);
        }, timeoutMs || 600);
      });
    }catch(e){
      return null;
    }
  }

  // 启动
  setRuntimeStatus(true, '—');
  installGlobalErrorGuards();

  document.addEventListener('DOMContentLoaded', () => {
    renderVersions();
    bindMeButtons();
    detectCacheVersion();
  });
})();
