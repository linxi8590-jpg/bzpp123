/* 汉字查询模块：按五行/笔画筛选启明字库（含补丁） */
(function(global){
  'use strict';

  const qs = (s) => document.querySelector(s);
  const qsa = (s) => Array.from(document.querySelectorAll(s));

  let wired = false;
  const state = { index: null, wuxing: 'all', stroke: null };


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

    // 排序：先笔画再字形
    items.sort((a,b)=>{
      const sa = a.stroke || 999;
      const sb = b.stroke || 999;
      if(sa !== sb) return sa - sb;
      return a.ch.localeCompare(b.ch, 'zh-Hans');
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

    return { items, byWuxing, byStroke };
  }

  
  function setActiveWuxing(w){
    qsa('#hzWuxingOptions .mode-pill').forEach(btn=>{
      const k = btn.dataset.wuxing;
      btn.classList.toggle('active', String(k) === String(w));
    });
  }

  function setFilterUI(){
    const wxEl = qs('#hzWuxingValue');
    const stEl = qs('#hzStrokeValue');
    const clearBtn = qs('#hzClearFiltersBtn');

    const wxText = (state.wuxing && state.wuxing !== 'all') ? state.wuxing : '全部';
    const stText = (state.stroke && Number.isFinite(state.stroke)) ? `${state.stroke} 画` : '不限';

    if(wxEl) wxEl.textContent = wxText;
    if(stEl) stEl.textContent = stText;

    const hasFilter = (state.wuxing && state.wuxing !== 'all') || (state.stroke && Number.isFinite(state.stroke));
    if(clearBtn) clearBtn.style.display = hasFilter ? '' : 'none';
  }

  function renderMeta(text){
    const el = qs('#hzMeta');
    if(el) el.textContent = text || '';
  }

  function renderList(list, label){
    const box = qs('#hzList');
    if(!box) return;
    const arr = Array.isArray(list) ? list : [];
    if(arr.length === 0){
      box.innerHTML = '<div class="empty-note">没有查到结果。</div>';
      renderMeta(label ? `${label}：0 字` : '0 字');
      return;
    }
    renderMeta(label ? `${label}：${arr.length} 字` : `${arr.length} 字`);

    const html = arr.map(it=>{
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
    }).join('');
    box.innerHTML = `<div class="hz-grid">${html}</div>`;
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
    wrap.addEventListener('click', (e)=>{
      const btn = e.target && e.target.closest ? e.target.closest('button[data-stroke]') : null;
      if(!btn) return;
      const n = Number(btn.dataset.stroke);
      if(Number.isFinite(n)) onPick(n);
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
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
  }

  function closeModal(id){
    const overlay = typeof id === 'string' ? qs('#' + id) : id;
    if(!overlay) return;
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden','true');
    // 仅当没有任何弹窗显示时才解锁滚动
    if(!qs('.modal-overlay.show')) document.body.classList.remove('modal-open');
  }

  function applyAll(){
    const idx = state.index;
    if(!idx) return;
    state.wuxing = 'all';
    state.stroke = null;
    setActiveWuxing('all');
    setFilterUI();
    renderList(idx.items, '全部');
  }

  function applyWuxing(w){
    const idx = state.index;
    if(!idx) return;
    state.stroke = null;

    if(!w || w === 'all'){
      state.wuxing = 'all';
      setActiveWuxing('all');
      setFilterUI();
      renderList(idx.items, '全部');
      return;
    }

    state.wuxing = String(w);
    setActiveWuxing(String(w));
    setFilterUI();
    const arr = idx.byWuxing.get(String(w)) || [];
    renderList(arr, `五行·${String(w)}`);
  }

  function applyStroke(n){
    const idx = state.index;
    if(!idx) return;

    const num = Number(n);
    if(!Number.isFinite(num) || num < 1){
      toast('请输入正确的笔画数字');
      return false;
    }
    const st = Math.round(num);
    state.wuxing = 'all';
    state.stroke = st;
    setActiveWuxing('all');
    setFilterUI();
    const arr = idx.byStroke.get(st) || [];
    renderList(arr, `笔画·${st}`);
    return true;
  }

  async function setupHanziModule(){
    // 每次打开都尽量拉一次补丁，确保查询吃到最新数据
    await ensureDBReady();
    state.index = buildIndex();

    const openWx = qs('#hzOpenWuxing');
    const openSt = qs('#hzOpenStroke');
    const clearBtn = qs('#hzClearFiltersBtn');

    const wxModal = qs('#hzWuxingModal');
    const stModal = qs('#hzStrokeModal');
    const wxOpts = qs('#hzWuxingOptions');
    const stInput = qs('#hzStrokeModalInput');
    const stBtn = qs('#hzStrokeModalSearchBtn');

    if(!openWx || !openSt || !wxModal || !stModal || !wxOpts || !stInput || !stBtn) return;

    // 每次打开刷新 UI
    setActiveWuxing(state.wuxing || 'all');
    setFilterUI();

    if(!wired){
      // 打开弹窗
      openWx.addEventListener('click', ()=>{
        setActiveWuxing(state.wuxing || 'all');
        openModal('hzWuxingModal');
      });
      openSt.addEventListener('click', ()=>{
        stInput.value = state.stroke ? String(state.stroke) : '';
        openModal('hzStrokeModal');
        // iOS: 稍后再 focus 更稳
        setTimeout(()=> { try{ stInput.focus(); }catch(e){} }, 80);
      });

      // 关闭逻辑（点击遮罩或 ×）
      qsa('.modal-close[data-close]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const id = btn.dataset.close;
          closeModal(id);
        });
      });
      [wxModal, stModal].forEach(overlay=>{
        overlay.addEventListener('click', (e)=>{
          if(e.target === overlay) closeModal(overlay);
        });
      });

      // 五行选择
      wxOpts.addEventListener('click', (e)=>{
        const btn = e.target && e.target.closest ? e.target.closest('button[data-wuxing]') : null;
        if(!btn) return;
        applyWuxing(btn.dataset.wuxing);
        closeModal('hzWuxingModal');
      });

      // 笔画选择
      const doStrokeAndClose = (val)=>{
        const ok = applyStroke(val);
        if(ok) closeModal('hzStrokeModal');
      };

      stBtn.addEventListener('click', ()=> doStrokeAndClose(stInput.value));
      stInput.addEventListener('keydown', (ev)=>{
        if(ev.key === 'Enter') doStrokeAndClose(stInput.value);
      });

      wireChips('#hzStrokeModalChips', (n)=> doStrokeAndClose(n));
      bindCopy();

      if(clearBtn){
        clearBtn.addEventListener('click', ()=> applyAll());
      }

      wired = true;
    }

    // 初始显示：按当前状态（默认全部）
    if(state.stroke && Number.isFinite(state.stroke)){
      applyStroke(state.stroke);
    } else if(state.wuxing && state.wuxing !== 'all'){
      applyWuxing(state.wuxing);
    } else {
      applyAll();
    }
  }


  global.setupHanziModule = setupHanziModule;

})(window);
