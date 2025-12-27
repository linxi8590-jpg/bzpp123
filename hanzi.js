/* 汉字查询模块：按五行/笔画筛选启明字库（含补丁） */
(function(global){
  'use strict';

  const qs = (s) => document.querySelector(s);
  const qsa = (s) => Array.from(document.querySelectorAll(s));

  let wired = false;
  const state = { index: null, wuxing: 'all', stroke: null, renderToken: 0, renderPaused: false, rendering: null };


  // iOS（含 iPadOS 伪装成 Mac）渲染/点击更容易被长任务拖慢，这里做轻量判定
  const IS_IOS = (()=>{
    try{
      const ua = navigator.userAgent || '';
      const platform = navigator.platform || '';
      const mtp = navigator.maxTouchPoints || 0;
      return /iP(hone|od|ad)/.test(ua) || (platform === 'MacIntel' && mtp > 1);
    }catch(e){ return false; }
  })();

  // 给 CSS 一个稳定的 iOS 钩子（用于修 iPhone 上弹窗显示/卡顿）
  try{ if(IS_IOS) document.documentElement.classList.add('is-ios'); }catch(e){}

  function safeCharCompare(a, b){
    const x = String(a || '');
    const y = String(b || '');
    // iOS 的 Intl/locale 支持在不同版本差异很大，必须容错
    try{ return x.localeCompare(y, 'zh-Hans'); }catch(e){}
    try{ return x.localeCompare(y, 'zh'); }catch(e){}
    // 最后兜底：按码点
    if(x === y) return 0;
    return x < y ? -1 : 1;
  }

  // 统一的“轻触”事件：优先 pointerup（更快），兼容 click（更稳）
  function onTap(el, handler){
    if(!el || typeof handler !== 'function') return;
    let last = 0;
    const fire = (ev)=>{
      const now = Date.now();
      // pointerup + click 可能会双触发，做一次简单节流
      if(now - last < 420) return;
      last = now;
      handler(ev);
    };

    try{
      el.addEventListener('pointerup', (ev)=>{
        const pt = ev && ev.pointerType;
        // 仅触屏/手写笔走 pointerup；鼠标继续走 click
        if(pt && pt !== 'touch' && pt !== 'pen') return;
        try{ ev.preventDefault(); }catch(e){}
        fire(ev);
      }, { passive: false });
    }catch(e){}

    el.addEventListener('click', (ev)=> fire(ev));
  }

  function pauseRender(){
    state.renderPaused = true;
  }

  function resumeRender(){
    if(!state.renderPaused) return;
    state.renderPaused = false;
    // 如果有未完成的渐进渲染，则继续
    if(state.rendering && state.rendering.token == state.renderToken){
      try{ requestAnimationFrame(renderStep); }catch(e){ setTimeout(renderStep, 0); }
    }
  }



  function toast(msg){
    try{
      if(typeof showToast === 'function') showToast(msg);
      else alert(String(msg||''));
    }catch(e){}
  }

  function getMergedDB(){
    try{
      if(typeof QIMING_CHAR_DB !== 'undefined' && QIMING_CHAR_DB) return QIMING_CHAR_DB;
    }catch(e){}
    return {};
  }

  function normWuxing(w){
    const s = String(w||'').trim();
    if(!s) return '';
    // 兼容“金/木/水/火/土”与可能的别写
    if(s.includes('金')) return '金';
    if(s.includes('木')) return '木';
    if(s.includes('水')) return '水';
    if(s.includes('火')) return '火';
    if(s.includes('土')) return '土';
    return s;
  }

  function getMean(entry){
    if(!entry || typeof entry !== 'object') return '';
    return String(entry.mean || entry.meaning || entry.desc || entry.note || '').trim();
  }

  function getStroke(entry){
    if(!entry || typeof entry !== 'object') return null;
    const n = Number(entry.stroke || entry.strokes || entry.bihua);
    if(Number.isFinite(n) && n > 0) return Math.round(n);
    return null;
  }

  async function ensureDBReady(){
    try{
      if(typeof global.ensureQimingPatchLoaded === 'function') {
        await global.ensureQimingPatchLoaded();
      }
    }catch(e){}
  }

  function buildIndex(){
    const db = getMergedDB();
    const items = [];
    Object.keys(db).forEach(ch => {
      const entry = db[ch];
      if(!entry || typeof entry !== 'object') return;
      const wuxing = normWuxing(entry.wuxing);
      const stroke = getStroke(entry);
      const mean = getMean(entry);
      items.push({ ch, wuxing, stroke, mean });
    });

    // 排序：先笔画再字形（iOS 需避免 localeCompare 因 locale 支持差异而直接抛错）
    items.sort((a,b)=>{
      const sa = a.stroke || 999;
      const sb = b.stroke || 999;
      if(sa !== sb) return sa - sb;
      return safeCharCompare(a.ch, b.ch);
    });

    const byWuxing = { 金:[], 木:[], 水:[], 火:[], 土:[] };
    const byStroke = new Map();

    items.forEach(it=>{
      if(it.wuxing && byWuxing[it.wuxing]) byWuxing[it.wuxing].push(it);
      if(it.stroke) {
        if(!byStroke.has(it.stroke)) byStroke.set(it.stroke, []);
        byStroke.get(it.stroke).push(it);
      }
    });

    return { items, byWuxing, byStroke, _count: Object.keys(db).length };
  }

  
  function setActiveWuxing(w){
    const cur = (w && w !== 'all') ? String(w) : 'all';
    qsa('#hzWuxingPills .hz-pill').forEach(btn=>{
      const k = String(btn.dataset.wuxing || 'all');
      btn.classList.toggle('active', k === cur);
    });
  }

  function strokeText(v){
    const n = Number(v);
    return (Number.isFinite(n) && n > 0) ? `${Math.round(n)} 画` : '不限';
  }

  function setFilterUI(){
    const stRange = qs('#hzStrokeRange');
    const stVal = qs('#hzStrokeRangeVal');
    const clearBtn = qs('#hzClearFiltersBtn');

    const stNum = (state.stroke && Number.isFinite(state.stroke)) ? Math.round(state.stroke) : 0;
    if(stRange){
      const cur = Number(stRange.value);
      if(!Number.isFinite(cur) || cur !== stNum) stRange.value = String(stNum);
    }
    if(stVal) stVal.textContent = strokeText(stNum);

    const hasFilter = (state.wuxing && state.wuxing !== 'all') || stNum > 0;
    if(clearBtn) clearBtn.style.display = hasFilter ? '' : 'none';
  }

  function renderMeta(text){
    const el = qs('#hzMeta');
    if(el) el.textContent = text || '';
  }

  // 渐进渲染：避免一次性 innerHTML 造成长任务卡顿（尤其是 iOS）
  // 用“时间片”而不是固定 BATCH，让弹窗/点击永远有机会插队渲染
  function renderList(list, label){
    const box = qs('#hzList');
    if(!box) return;
    const arr = Array.isArray(list) ? list : [];

    // 取消上一轮渲染
    const token = ++state.renderToken;
    state.renderPaused = false;
    state.rendering = null;

    if(arr.length === 0){
      box.innerHTML = '<div class="empty-note">没有查到结果。</div>';
      renderMeta(label ? `${label}：0 字` : '0 字');
      return;
    }

    renderMeta(label ? `${label}：${arr.length} 字` : `${arr.length} 字`);
    box.innerHTML = '<div class="hz-grid" id="hzGrid"></div>';
    const grid = qs('#hzGrid');
    if(!grid) return;

    // iPhone 上列表渲染过密会把交互“挤到后面”，表现为点弹窗/按钮要卡很久
    // 这里把 iOS 的每帧工作量再压低，让点击能更快被处理
    const frameBudget = IS_IOS ? 4 : 10; // 单帧预算（ms）
    const hardLimit  = IS_IOS ? 10 : 60; // 单帧最多塞多少项

    const buildItemHtml = (it)=>{
      const mean = it.mean ? it.mean : '（暂无寓意）';
      const wx = it.wuxing ? it.wuxing : '—';
      const st = it.stroke ? it.stroke : '—';
      return `
        <div class="hz-item" data-ch="${it.ch}">
          <div class="hz-head">
            <div class="hz-char">${it.ch}</div>
            <div class="hz-tags">
              <span class="tag">五行：${wx}</span>
              <span class="tag">笔画：${st}</span>
            </div>
          </div>
          <div class="hz-mean">${escapeHtml(mean)}</div>
        </div>
      `;
    };

    state.rendering = { token, arr, grid, i: 0, frameBudget, hardLimit, buildItemHtml };

    // 让浏览器先把“切换筛选/关闭弹窗”绘制出来，再开始塞列表
    try{ requestAnimationFrame(renderStep); }catch(e){ setTimeout(renderStep, 0); }
  }

  function renderStep(){
    const r = state.rendering;
    if(!r || r.token !== state.renderToken) return;
    if(state.renderPaused) return;

    const grid = r.grid;
    if(!grid) return;

    const nowFn = (typeof performance !== 'undefined' && performance && typeof performance.now === 'function')
      ? () => performance.now()
      : () => Date.now();

    const start = nowFn();
    let html = '';
    let count = 0;

    while(r.i < r.arr.length){
      html += r.buildItemHtml(r.arr[r.i]);
      r.i++;
      count++;
      if(count >= r.hardLimit) break;
      if(nowFn() - start >= r.frameBudget) break;
    }

    if(html) grid.insertAdjacentHTML('beforeend', html);

    if(r.i < r.arr.length){
      try{ requestAnimationFrame(renderStep); }catch(e){ setTimeout(renderStep, 0); }
    } else {
      state.rendering = null;
    }
  }

  function escapeHtml(s){
    return String(s||'')
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function wireChips(wrapSel, onPick){
    const wrap = qs(wrapSel);
    if(!wrap) return;
    const max = 30;
    const chips = [];
    for(let i=1;i<=max;i++) {
      chips.push(`<button class="stroke-chip" data-stroke="${i}" type="button">${i}</button>`);
    }
    wrap.innerHTML = chips.join('');
    let last = 0;
    const pick = (e)=>{
      const btn = e.target && e.target.closest ? e.target.closest('button[data-stroke]') : null;
      if(!btn) return;
      const n = Number(btn.dataset.stroke);
      if(Number.isFinite(n)) onPick(n);
    };

    try{
      wrap.addEventListener('pointerup', (e)=>{
        const pt = e && e.pointerType;
        if(pt && pt !== 'touch' && pt !== 'pen') return;
        try{ e.preventDefault(); }catch(err){}
        const now = Date.now();
        if(now - last < 420) return;
        last = now;
        pick(e);
      }, { passive: false });
    }catch(e){}

    wrap.addEventListener('click', (e)=>{
      const now = Date.now();
      if(now - last < 420) return;
      last = now;
      pick(e);
    });
  }

  function bindCopy(){
    const box = qs('#hzList');
    if(!box) return;
    box.addEventListener('click', async (e)=>{
      const item = e.target && e.target.closest ? e.target.closest('.hz-item[data-ch]') : null;
      if(!item) return;
      const ch = item.dataset.ch;
      if(!ch) return;
      try{
        if(navigator.clipboard && navigator.clipboard.writeText){
          await navigator.clipboard.writeText(ch);
          toast('已复制：' + ch);
        } else {
          const ta = document.createElement('textarea');
          ta.value = ch;
          ta.style.position = 'fixed';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          const ok = document.execCommand('copy');
          document.body.removeChild(ta);
          if(ok) toast('已复制：' + ch);
          else toast('复制失败：' + ch);
        }
      }catch(err){
        toast('复制失败：' + ch);
      }
    });
  }

  function openModal(id){
    const overlay = typeof id === 'string' ? qs('#' + id) : id;
    if(!overlay) return;
    pauseRender();
    overlay.dataset.openedAt = String(Date.now());
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');

    // iOS 上给 body 加 overflow:hidden 往往会触发超大重排（列表越长越明显），
    // 造成“点一下整个手机卡几秒、弹窗没弹出来”的体验。
    // 这里改为：iOS 不改 body overflow，用 overlay 的 touchmove 拦截来阻止背景滚动。
    if(!IS_IOS) document.body.classList.add('modal-open');

    // 防止背景滚动（尤其 iOS Safari 会把手势传给 body）
    if(!overlay.__touchLockWired){
      try{
        overlay.addEventListener('touchmove', (e)=>{
          // 允许弹窗卡片内部“可滚动区域”滚动；
          // 若卡片本身不可滚动（如五行只有一行按钮），则拦截以免背景跟着滚。
          const card = (e.target && e.target.closest) ? e.target.closest('.modal-card') : null;
          if(card){
            const canScroll = (card.scrollHeight - card.clientHeight) > 2;
            if(canScroll) return;
          }
          try{ e.preventDefault(); }catch(err){}
        }, { passive: false });
      }catch(e){}
      overlay.__touchLockWired = true;
    }
  }

  function closeModal(id){
    const overlay = typeof id === 'string' ? qs('#' + id) : id;
    if(!overlay) return;
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden','true');
    // 仅当没有任何弹窗显示时才解锁滚动
    if(!qs('.modal-overlay.show')) {
      document.body.classList.remove('modal-open');
      // 给一帧让弹窗先收起，再继续列表渲染
      try{ requestAnimationFrame(()=> resumeRender()); }catch(e){ resumeRender(); }
    }
  }

  function applyFilters(){
    const idx = state.index;
    if(!idx) return;

    let arr = idx.items;
    const parts = [];

    if(state.wuxing && state.wuxing !== 'all'){
      const w = String(state.wuxing);
      arr = (idx.byWuxing && idx.byWuxing[w]) ? idx.byWuxing[w] : [];
      parts.push(`五行·${w}`);
    }

    if(state.stroke && Number.isFinite(state.stroke)){
      const st = Math.round(state.stroke);
      if(state.wuxing && state.wuxing !== 'all'){
        // 已经选了五行，直接在该子集上再筛一次笔画
        arr = (Array.isArray(arr) ? arr : []).filter(it => (it.stroke || 0) === st);
      } else {
        arr = idx.byStroke.get(st) || [];
      }
      parts.push(`笔画·${st}`);
    }

    const label = parts.length ? parts.join(' + ') : '全部';
    renderList(arr, label);
  }

  function applyAll(){
    state.wuxing = 'all';
    state.stroke = null;
    setActiveWuxing('all');
    setFilterUI();
    applyFilters();
  }

  function applyWuxing(w){
    state.wuxing = (w && w !== 'all') ? String(w) : 'all';
    setActiveWuxing(state.wuxing);
    setFilterUI();
    applyFilters();
  }

  function applyStroke(v){
    const num = Number(v);
    if(!Number.isFinite(num) || num < 0) return;
    const st = Math.round(num);
    state.stroke = st > 0 ? st : null;
    setFilterUI();
    applyFilters();
  }

  async function setupHanziModule(){
    // 每次打开都尽量拉一次补丁，确保查询吃到最新数据
    await ensureDBReady();
    // iPhone 上 build+sort 一大坨数据会非常慢。
    // 这里做一次轻量缓存：字库数量未变化则复用 index。
    try{
      const countNow = Object.keys(getMergedDB() || {}).length;
      if(!state.index || state.index._count !== countNow){
        state.index = buildIndex();
      }
    }catch(e){
      state.index = buildIndex();
    }

    const pills = qsa('#hzWuxingPills .hz-pill');
    const strokeRange = qs('#hzStrokeRange');
    const strokeVal = qs('#hzStrokeRangeVal');
    const clearBtn = qs('#hzClearFiltersBtn');

    if(!pills.length || !strokeRange || !strokeVal || !clearBtn) return;

    // 每次打开刷新 UI
    setActiveWuxing(state.wuxing || 'all');
    setFilterUI();

    if(!wired){
      // 五行：胶囊按钮
      pills.forEach(btn=>{
        onTap(btn, ()=>{
          const w = btn.dataset.wuxing || 'all';
          state.wuxing = (w && w !== 'all') ? String(w) : 'all';
          setActiveWuxing(state.wuxing);
          setFilterUI();
          requestAnimationFrame(()=>{ try{ applyFilters(); }catch(e){} });
        });
      });

      // 笔画：拖动条
      strokeRange.addEventListener('input', ()=>{
        // 只更新显示，不做筛选（拖动时避免反复重渲染）
        try{ strokeVal.textContent = strokeText(strokeRange.value); }catch(e){}
        const hasFilter = (state.wuxing && state.wuxing !== 'all') || Number(strokeRange.value) > 0;
        clearBtn.style.display = hasFilter ? '' : 'none';
      }, { passive: true });

      strokeRange.addEventListener('change', ()=>{
        // 松手再筛选，手感更丝滑
        applyStroke(strokeRange.value);
      }, { passive: true });

      onTap(clearBtn, ()=>{
        // 复位 UI
        strokeRange.value = '0';
        strokeVal.textContent = '不限';
        applyAll();
      });

      bindCopy();
      wired = true;
    }

    // 初始显示：按当前状态
    applyFilters();
  }


  global.setupHanziModule = setupHanziModule;

})(window);
