/* 汉字查询模块：按五行/笔画筛选启明字库（含补丁） */
(function(global){
  'use strict';

  const qs = (s) => document.querySelector(s);
  const qsa = (s) => Array.from(document.querySelectorAll(s));

  let wired = false;

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
    qsa('#hzWuxingRow .mode-pill').forEach(btn=>{
      const k = btn.dataset.wuxing;
      btn.classList.toggle('active', String(k) === String(w));
    });
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

  function wireChips(onPick){
    const wrap = qs('#hzStrokeChips');
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
        const text = ch;
        if(navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
          toast('已复制：' + ch);
        } else {
          toast('复制失败：' + ch);
        }
      }catch(err){
        toast('复制失败：' + ch);
      }
    });
  }

  async function setupHanziModule(){
    // 每次打开都尽量拉一次补丁，确保查询吃到最新数据
    await ensureDBReady();
    const index = buildIndex();

    const row = qs('#hzWuxingRow');
    const strokeInput = qs('#hzStrokeInput');
    const strokeBtn = qs('#hzStrokeSearchBtn');

    if(!row || !strokeInput || !strokeBtn) return;

    if(!wired){
      row.addEventListener('click', (e)=>{
        const btn = e.target && e.target.closest ? e.target.closest('button[data-wuxing]') : null;
        if(!btn) return;
        const w = btn.dataset.wuxing;
        if(w === 'all') {
          setActiveWuxing('all');
          renderList(index.items, '全部');
          return;
        }
        setActiveWuxing(w);
        const arr = index.byWuxing[normWuxing(w)] || [];
        renderList(arr, `五行·${w}`);
      });

      const doStroke = (n)=>{
        const num = Number(n);
        if(!Number.isFinite(num) || num < 1) {
          toast('请输入正确的笔画数字');
          return;
        }
        strokeInput.value = String(Math.round(num));
        const arr = index.byStroke.get(Math.round(num)) || [];
        // 触发五行按钮取消高亮
        setActiveWuxing('');
        renderList(arr, `笔画·${Math.round(num)}`);
      };

      strokeBtn.addEventListener('click', ()=> doStroke(strokeInput.value));
      strokeInput.addEventListener('keydown', (ev)=>{
        if(ev.key === 'Enter') doStroke(strokeInput.value);
      });

      wireChips(doStroke);
      bindCopy();

      wired = true;
    }

    // 初始显示：全部（但不自动高亮五行，避免误导）
    renderList(index.items, '全部');
    setActiveWuxing('all');
  }

  global.setupHanziModule = setupHanziModule;

})(window);
