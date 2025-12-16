(() => {
  const $ = (id) => document.getElementById(id);

  let data = { chars: {} };
  let lastConflicts = 0;

  function setStatus(text, ok=false){
    const el = $('status');
    el.textContent = text;
    el.className = ok ? 'ok' : 'bad';
  }

  function normalize(obj){
    if (!obj || typeof obj !== 'object') throw new Error('不是对象 JSON');
    if (obj.chars && typeof obj.chars === 'object') return { chars: obj.chars };
    return { chars: obj };
  }

  function cleanEntry(v){
    const out = {};
    const s = Number(v?.stroke ?? v?.strokes ?? v?.count ?? v?.n ?? v?.['笔画']);
    if (Number.isFinite(s) && s > 0) out.stroke = s;
    const wx = String(v?.wuxing ?? v?.wx ?? v?.['五行'] ?? '').trim();
    if (wx) out.wuxing = wx;
    const mean = String(v?.mean ?? v?.desc ?? v?.['释义'] ?? v?.meaning ?? '').trim();
    if (mean) out.mean = mean;
    return out;
  }

  function stableStringify(obj){
    const keys = Object.keys(obj.chars || {}).sort((a,b)=>a.localeCompare(b,'zh-Hans'));
    const out = { chars: {} };
    for (const k of keys) out.chars[k] = cleanEntry(obj.chars[k] || {});
    return JSON.stringify(out, null, 2);
  }

  function refreshUI(){
    $('count').textContent = String(Object.keys(data.chars).length);
    $('conflicts').textContent = String(lastConflicts);
    $('out').textContent = stableStringify(data);
    renderList();
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, m => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[m]));
  }

  function renderList(){
    const q = ($('search').value || '').trim();
    const list = $('list');
    list.innerHTML = '';
    const keys = Object.keys(data.chars || {}).sort((a,b)=>a.localeCompare(b,'zh-Hans'));
    const filtered = keys.filter(k=>{
      if (!q) return true;
      const v = data.chars[k] || {};
      const s = k + ' ' + (v.wuxing||'') + ' ' + (v.mean||'') + ' ' + (v.stroke??'');
      return s.includes(q);
    });

    if (!filtered.length){
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = '<div class="v">（没有匹配项）</div>';
      list.appendChild(div);
      return;
    }

    for (const k of filtered){
      const v = data.chars[k] || {};
      const item = document.createElement('div');
      item.className = 'item';
      item.addEventListener('click', () => fillForm(k));
      const mean = (v.mean || '').trim();
      item.innerHTML = `
        <div class="k">${escapeHtml(k)}</div>
        <div class="v">
          <div>${mean ? escapeHtml(mean) : '<span style="opacity:.65">（无释义）</span>'}</div>
          <div class="tags">
            ${v.stroke ? `<span class="tag">笔画 ${escapeHtml(String(v.stroke))}</span>` : ''}
            ${v.wuxing ? `<span class="tag">五行 ${escapeHtml(String(v.wuxing))}</span>` : ''}
          </div>
        </div>
      `;
      list.appendChild(item);
    }
  }

  function fillForm(ch){
    $('char').value = ch;
    const v = data.chars[ch] || {};
    $('stroke').value = v.stroke ?? '';
    $('wuxing').value = v.wuxing ?? '';
    $('mean').value = v.mean ?? '';
  }

  function clearForm(){
    $('char').value = '';
    $('stroke').value = '';
    $('wuxing').value = '';
    $('mean').value = '';
  }

  function upsertFromForm(){
    const ch = ($('char').value || '').trim();
    if (!ch) throw new Error('请先输入一个汉字');
    const entry = {
      stroke: ($('stroke').value || '').trim(),
      wuxing: ($('wuxing').value || '').trim(),
      mean: ($('mean').value || '').trim(),
    };
    data.chars[ch] = cleanEntry(entry);
    setStatus('已载入', true);
    refreshUI();
  }

  function deleteFromForm(){
    const ch = ($('char').value || '').trim();
    if (!ch) throw new Error('请先输入一个汉字');
    if (data.chars[ch]) delete data.chars[ch];
    refreshUI();
  }

  // --------- sanitizer (v1.1) ----------
  function stripCodeFences(s){
    // remove ```json ... ``` fences but keep inner content
    return s
      .replace(/```[a-zA-Z]*\s*/g, '')
      .replace(/```/g, '');
  }

  function stripComments(s){
    // remove //... and /*...*/ comments
    s = s.replace(/\/\*[\s\S]*?\*\//g, '');
    s = s.replace(/(^|[^:])\/\/.*$/gm, '$1');
    return s;
  }

  function normalizePunct(s){
    return s
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/，/g, ',')
      .replace(/：/g, ':')
      .replace(/（/g, '(')
      .replace(/）/g, ')');
  }

  function extractJsonish(s){
    const first = s.indexOf('{');
    const last = s.lastIndexOf('}');
    if (first === -1 || last === -1 || last <= first) return s.trim();
    return s.slice(first, last + 1).trim();
  }

  function removeTrailingCommas(s){
    // remove trailing commas before } or ]
    return s.replace(/,\s*([}\]])/g, '$1');
  }

  function sanitizeText(raw){
    let s = String(raw ?? '');
    s = s.replace(/^\uFEFF/, '');            // BOM
    s = stripCodeFences(s);
    s = normalizePunct(s);
    s = stripComments(s);
    s = s.trim();
    s = extractJsonish(s);
    s = removeTrailingCommas(s);
    return s.trim();
  }

  function findPosFromError(err){
    const msg = String(err?.message || err || '');
    // Safari/Chrome: "Unexpected token ... in JSON at position 123"
    const m = msg.match(/position\s+(\d+)/i);
    if (m) return Number(m[1]);
    // Firefox: "JSON.parse: unexpected character at line 1 column 123 ..."
    const m2 = msg.match(/column\s+(\d+)/i);
    if (m2) return { column: Number(m2[1]) };
    return null;
  }

  function annotateAtPosition(text, pos){
    if (!Number.isFinite(pos)) return '';
    const start = Math.max(0, pos - 60);
    const end = Math.min(text.length, pos + 60);
    const snippet = text.slice(start, end);
    const caret = ' '.repeat(pos - start) + '^';
    return snippet + '\n' + caret;
  }

  function parseMany(text){
    text = (text || '').trim();
    if (!text) return [];
    try { return [normalize(JSON.parse(text))]; } catch (e) {}

    const parts = text.split(/}\s*\n\s*{/).map((p,i,arr)=>{
      if (arr.length === 1) return p;
      if (i === 0) return p + '}';
      if (i === arr.length - 1) return '{' + p;
      return '{' + p + '}';
    }).map(s=>s.trim()).filter(Boolean);

    const objs = [];
    for (const p of parts){
      try { objs.push(normalize(JSON.parse(p))); } catch (e) {}
    }
    return objs;
  }

  function mergePasted(){
    const raw = $('paste').value;
    const cleaned = sanitizeText(raw);
    $('cleaned').textContent = cleaned;

    let objs = [];
    try{
      objs = parseMany(cleaned);
    }catch(e){
      const pos = findPosFromError(e);
      const extra = Number.isFinite(pos) ? '\n\n定位：\n' + annotateAtPosition(cleaned, pos) : '';
      throw new Error('粘贴区不是有效 JSON。' + '\n' + (e.message || e) + extra);
    }

    if (!objs.length) throw new Error('粘贴区解析失败：可能被截断或污染太严重。试试删除末尾多余符号后重试。');

    const incoming = { chars: {} };
    let dupWithinPaste = 0;
    const seen = new Set();
    for (const o of objs){
      for (const k of Object.keys(o.chars || {})){
        if (seen.has(k)) dupWithinPaste++;
        else seen.add(k);
      }
      Object.assign(incoming.chars, o.chars);
    }

    let conflicts = 0;
    const beforeCount = Object.keys(data.chars).length;
    for (const [k,v] of Object.entries(incoming.chars)){
      if (data.chars[k]) {
        const a = JSON.stringify(cleanEntry(data.chars[k]));
        const b = JSON.stringify(cleanEntry(v));
        if (a !== b) conflicts++;
      }
      data.chars[k] = cleanEntry(v);
    }
    lastConflicts = conflicts;

    const afterCount = Object.keys(data.chars).length;
    const added = afterCount - beforeCount;

    $('mergeReport').textContent =
      `合并完成：粘贴内重复 ${dupWithinPaste} 个；覆盖冲突 ${conflicts} 个；新增约 ${added} 个（其余为覆盖/更新）。`;

    setStatus('已载入', true);
    refreshUI();
  }

  function sortOnly(){
    refreshUI();
    $('mergeReport').textContent = '已按字排序（输出已更新）。';
  }

  function validateJsonText(raw){
    const cleaned = sanitizeText(raw);
    $('cleaned').textContent = cleaned;
    try{
      JSON.parse(cleaned);
      $('mergeReport').textContent = '✅ 粘贴区（清洗后）JSON 合法。';
    }catch(e){
      const pos = findPosFromError(e);
      const extra = Number.isFinite(pos) ? '\n\n定位：\n' + annotateAtPosition(cleaned, pos) : '';
      $('mergeReport').textContent = '❌ 粘贴区 JSON 有问题：\n' + (e.message || e) + extra;
    }
  }

  function validateCurrent(){
    try{
      JSON.parse(stableStringify(data));
      $('mergeReport').textContent = '✅ 当前字库 JSON 合法。';
    }catch(e){
      $('mergeReport').textContent = '❌ 当前字库 JSON 校验失败：' + e.message;
    }
  }

  function download(){
    const text = stableStringify(data);
    const blob = new Blob([text], { type:'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qiming_patch.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function copy(text){
    try{
      await navigator.clipboard.writeText(text);
      $('mergeReport').textContent = '✅ 已复制到剪贴板。';
    }catch(e){
      $('mergeReport').textContent = '复制失败：浏览器可能不允许。你可以手动复制。';
    }
  }

  async function loadRemote(){
    const r = await fetch('./qiming_patch.json', { cache:'no-store' });
    if (!r.ok) throw new Error('未找到 qiming_patch.json（先在仓库根目录放一个）');
    const obj = await r.json();
    const norm = normalize(obj);
    const cleaned = { chars: {} };
    for (const [k,v] of Object.entries(norm.chars||{})) cleaned.chars[k] = cleanEntry(v);
    data = cleaned;
    lastConflicts = 0;
    setStatus('已读取仓库', true);
    $('mergeReport').textContent = '已读取仓库 qiming_patch.json';
    refreshUI();
  }

  function loadLocalFile(file){
    return new Promise((resolve,reject)=>{
      const fr = new FileReader();
      fr.onload = () => {
        try {
          const obj = normalize(JSON.parse(String(fr.result)));
          const cleaned = { chars: {} };
          for (const [k,v] of Object.entries(obj.chars||{})) cleaned.chars[k] = cleanEntry(v);
          resolve(cleaned);
        } catch(e){ reject(e); }
      };
      fr.onerror = () => reject(new Error('读取文件失败'));
      fr.readAsText(file, 'utf-8');
    });
  }

  // bind
  $('btnLoadRemote').addEventListener('click', async () => {
    try{ await loadRemote(); }
    catch(e){ setStatus('读取失败', false); $('mergeReport').textContent = e.message; }
  });

  $('fileInput').addEventListener('change', async (ev) => {
    const f = ev.target.files?.[0];
    if (!f) return;
    try{
      data = await loadLocalFile(f);
      lastConflicts = 0;
      setStatus('已导入本地文件', true);
      $('mergeReport').textContent = `已导入：${f.name}`;
      refreshUI();
    }catch(e){
      setStatus('导入失败', false);
      $('mergeReport').textContent = e.message;
    }finally{
      ev.target.value = '';
    }
  });

  $('btnNew').addEventListener('click', () => {
    data = { chars: {} };
    lastConflicts = 0;
    setStatus('已新建', true);
    $('mergeReport').textContent = '已新建空字库';
    refreshUI();
  });

  $('btnUpsert').addEventListener('click', () => {
    try{ upsertFromForm(); $('mergeReport').textContent = '✅ 已写入/覆盖'; }
    catch(e){ $('mergeReport').textContent = e.message; }
  });

  $('btnDelete').addEventListener('click', () => {
    try{ deleteFromForm(); $('mergeReport').textContent = '🗑️ 已删除'; }
    catch(e){ $('mergeReport').textContent = e.message; }
  });

  $('btnClearForm').addEventListener('click', () => clearForm());

  $('btnMerge').addEventListener('click', () => {
    try{ mergePasted(); }
    catch(e){ $('mergeReport').textContent = e.message; }
  });

  $('btnSort').addEventListener('click', () => sortOnly());
  $('btnValidatePaste').addEventListener('click', () => validateJsonText($('paste').value));
  $('btnValidateAll').addEventListener('click', () => validateCurrent());

  $('search').addEventListener('input', () => renderList());

  $('btnDownload').addEventListener('click', () => download());
  $('btnCopyJson').addEventListener('click', () => copy(stableStringify(data)));
  $('btnCopyCharList').addEventListener('click', () => {
    const keys = Object.keys(data.chars||{}).sort((a,b)=>a.localeCompare(b,'zh-Hans'));
    copy(keys.join(''));
  });

  refreshUI();
})();