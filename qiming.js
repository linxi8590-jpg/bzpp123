/* 启明起名模块逻辑：从 app.js 拆分，独立维护 */
/* 本文件依赖全局 els 映射、toast 等工具函数；由 app.js 的 init() 在合适时机调用 setupNameModule() 启动。 */
(function(global){

/* 起名模块 */
    function normalizeNameStr(s){
      return (s || '').replace(/\s+/g,'').trim();
    }

    
function splitNameChars(full, sLen, gLen){
  const chars = Array.from(full);
  const need = sLen + gLen;
  if(chars.length < need){
    return { ok:false, chars, surname:[], given:[] };
  }
  const surname = chars.slice(0, sLen);
  const given = chars.slice(sLen, sLen + gLen);
  return { ok:true, chars, surname, given };
}

/* 笔画辅助：本地缓存优先（可手动补录） */
function getStrokeCacheKey(ch){
  return `stroke_${ch}`;
}

function getStrokeForChar(ch){
  if(!ch) return null;
  try{
    const cached = localStorage.getItem(getStrokeCacheKey(ch));
    if(cached !== null && cached !== ''){
      const n = Number(cached);
      if(Number.isFinite(n) && n > 0) return n;
    }
  }catch(e){}
  const base = STROKE_DB[ch];
  return (typeof base === 'number' && base > 0) ? base : null;
}

function setStrokeForChar(ch, n){
  if(!ch) return;
  const num = Number(n);
  if(!Number.isFinite(num) || num < 1) return;
  try{
    localStorage.setItem(getStrokeCacheKey(ch), String(Math.round(num)));
  }catch(e){}
}

function autoInferNameLens(full){
  const len = Array.from(full).length;
  if(len <= 1) return { sLen:1, gLen:2 };
  if(len === 2) return { sLen:1, gLen:1 };
  if(len === 3) return { sLen:1, gLen:2 };
  if(len >= 4) return { sLen:2, gLen:2 };
  return { sLen:1, gLen:2 };
}

function renderNameStrokeInputs(){
  if(!els.nameFullInput) return;
  const full = normalizeNameStr(els.nameFullInput.value);
  const sLen = Number(els.nameSurnameLen.value || 1);
  const gLen = Number(els.nameGivenLen.value || 2);

  const { ok, surname, given } = splitNameChars(full, sLen, gLen);
  const container = els.nameStrokeInputs;
  if(!container) return;
  container.innerHTML = '';

  const list = ok ? [...surname, ...given] : Array.from(full).slice(0, sLen + gLen);
  const totalBoxes = sLen + gLen;

  for(let i=0;i<totalBoxes;i++){
    const isSurnamePos = i < sLen;
    const fallbackChar = isSurnamePos ? '姓' : '名';
    const ch = list[i] || fallbackChar;

    const box = document.createElement('div');
    box.className = 'stroke-box';

    const label = document.createElement('span');
    label.className = 'stroke-char';
    label.textContent = ch;

    const input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.className = 'stroke-input';
    input.placeholder = '笔画';

    const isRealChar = ch && ch !== '姓' && ch !== '名';
    const autoStroke = isRealChar ? getStrokeForChar(ch) : null;

    if(autoStroke){
      input.value = String(autoStroke);
      box.classList.add('auto');
    }else if(isRealChar){
      box.classList.add('missing');
    }

    if(isRealChar){
      input.dataset.char = ch;
      input.addEventListener('change', ()=>{
        const v = Number(input.value);
        if(Number.isFinite(v) && v > 0){
          setStrokeForChar(ch, v);
          box.classList.remove('missing');
        }else{
          box.classList.add('missing');
        }
      });
    }

    box.appendChild(label);
    box.appendChild(input);
    container.appendChild(box);
  }
}

function numElement(n){
  const last = Math.abs(Number(n)) % 10;
  if(last === 1 || last === 2) return '木';
  if(last === 3 || last === 4) return '火';
  if(last === 5 || last === 6) return '土';
  if(last === 7 || last === 8) return '金';
  return '水'; // 9/0
}

function collectStrokes(){
  const container = els.nameStrokeInputs;
  if(!container) return [];
  const inputs = container.querySelectorAll('input[type="number"]');
  const arr = [];
  inputs.forEach(inp=>{
    const v = Number(inp.value);
    const num = Number.isFinite(v) ? Math.round(v) : 0;
    arr.push(num);
    const ch = inp.dataset && inp.dataset.char;
    if(ch && num > 0){
      setStrokeForChar(ch, num);
    }
  });
  return arr;
}

function computeFiveGrid(){
  const full = normalizeNameStr(els.nameFullInput.value);
  const sLen = Number(els.nameSurnameLen.value || 1);
  const gLen = Number(els.nameGivenLen.value || 2);
  const { ok, surname, given } = splitNameChars(full, sLen, gLen);

  if(!ok){
    toast('姓名字数不够，按你选择的姓/名长度补全后再算～');
    return null;
  }

  const strokes = collectStrokes();
  if(strokes.length < sLen + gLen){
    toast('还有字的笔画没补完～空着的框先填一下。');
    return null;
  }
  if(strokes.some(v => !v || v < 1)){
    toast('笔画需要是大于 0 的数字～');
    return null;
  }

  const sStrokes = strokes.slice(0, sLen);
  const gStrokes = strokes.slice(sLen, sLen + gLen);

  const tian = sStrokes.reduce((a,b)=>a+b,0) + (sLen === 1 ? 1 : 0);
  const di = gStrokes.reduce((a,b)=>a+b,0) + (gLen === 1 ? 1 : 0);
  const ren = sStrokes[sLen-1] + gStrokes[0];
  const zong = strokes.slice(0, sLen + gLen).reduce((a,b)=>a+b,0);

  let wai;
  if(sLen === 1 && gLen === 1){
    wai = 2;
  }else if(sLen === 1 && gLen === 2){
    wai = gStrokes[1] + 1;
  }else if(sLen === 2 && gLen === 1){
    wai = sStrokes[0] + 1;
  }else{
    // 复姓双名等情况：常见简化算法
    wai = zong - ren + 1;
  }

  return {
    full,
    surname,
    given,
    sLen, gLen,
    tian, ren, di, wai, zong
  };
}

function calcNameResearchScore(res){
  if(!res) return null;
  const elems = [
    numElement(res.tian),
    numElement(res.ren),
    numElement(res.di),
    numElement(res.wai),
    numElement(res.zong)
  ];
  const counts = {};
  elems.forEach(e=>{
    counts[e] = (counts[e] || 0) + 1;
  });
  const unique = Object.keys(counts).length;

  const balanceScore = 30 * (unique - 1) / 4;

  const avg = (res.tian + res.ren + res.di + res.wai + res.zong) / 5;
  let sizeScore = 0;
  if(avg <= 5 || avg >= 55){
    sizeScore = 0;
  }else if(avg >= 15 && avg <= 35){
    sizeScore = 20;
  }else if(avg < 15){
    sizeScore = 20 * (avg - 5) / 10;
  }else{
    sizeScore = 20 * (55 - avg) / 20;
  }

  const raw = 50 + balanceScore + sizeScore;
  const score = Math.max(0, Math.min(100, Math.round(raw)));
  return { score, unique, avg: Math.round(avg) };
}

function buildNameScoreText(meta){
  if(!meta) return '';
  const { unique, avg } = meta;
  let t = `元素分布 ${unique} 种，均值 ${avg}。`;
  if(unique <= 2){
    t += ' 元素更集中，风格偏单一。';
  }else if(unique >= 4){
    t += ' 元素更丰富，适合做古书数理对照与灵感筛选。';
  }else{
    t += ' 元素数量适中，整体更平衡。';
  }
  return t;
}

function renderFiveGridResult(res){
  if(!res) return;

  els.ngTian.textContent = String(res.tian);
  els.ngRen.textContent = String(res.ren);
  els.ngDi.textContent = String(res.di);
  els.ngWai.textContent = String(res.wai);
  els.ngZong.textContent = String(res.zong);

  els.ngTianWx.textContent = numElement(res.tian);
  els.ngRenWx.textContent = numElement(res.ren);
  els.ngDiWx.textContent = numElement(res.di);
  els.ngWaiWx.textContent = numElement(res.wai);
  els.ngZongWx.textContent = numElement(res.zong);

  els.ngSanCai.textContent = [
    numElement(res.tian),
    numElement(res.ren),
    numElement(res.di)
  ].join('-');

  const meta = calcNameResearchScore(res);
  if(meta && els.nameScoreVal && els.nameScoreText){
    els.nameScoreVal.textContent = String(meta.score);
    els.nameScoreText.textContent = buildNameScoreText(meta);
  }else{
    if(els.nameScoreVal) els.nameScoreVal.textContent = '-';
    if(els.nameScoreText) els.nameScoreText.textContent = '用于你做古书数理对照与灵感筛选，不作现实定论。';
  }


  if(els.nameShuLiRef){
    let refText = '暂无 81 数理参考。请先完成一次五格计算。';
    try{
      const num = Number(res.zong);
      if(num && num >= 1 && num <= 81 && typeof SHU_LI_81 !== 'undefined'){
        const entry = SHU_LI_81[num];
        if(entry){
          refText = `总格 ${num} · ${entry.luck}（晨整理版）︰${entry.text}`;
        }else{
          refText = `总格 ${num}：当前晨版 81 数理字典未收录详细说明，可自行补充。`;
        }
      }
    }catch(e){}
    els.nameShuLiRef.textContent = refText;
  }

  if(els.nameCharMeta){
    let text = '暂未加载字库信息。请先完成一次五格计算。';
    try{
      const full = (res.full || '').trim();
      const chars = Array.from(full);
      if(chars.length){
        const pieces = [];
        chars.forEach((ch, idx)=>{
          if(!ch) return;
          let entry = null;
          try{
            if(typeof QIMING_CHAR_DB !== 'undefined'){
              entry = QIMING_CHAR_DB[ch];
            }
          }catch(e){}
          if(entry){
            const stroke = entry.stroke;
            const wx = entry.wuxing || '未标五行';
            const mean = entry.mean || '';
            let seg = `${ch}：${stroke}画 · ${wx}`;
            if(mean){
              seg += ` · ${mean}`;
            }
            pieces.push(seg);
          }else{
            pieces.push(`${ch}：当前字库未收录，可自行补充五行与释义。`);
          }
        });
        if(pieces.length){
          text = pieces.join('； ');
        }
      }
    }catch(e){}
    els.nameCharMeta.textContent = text;
  }

  if(els.nameResultCard){
    els.nameResultCard.style.display = 'block';
  }
}


function resetNameModule(){
  els.nameFullInput.value = '';
  const inputs = els.nameStrokeInputs.querySelectorAll('input');
  inputs.forEach(i => i.value = '');
  if(els.nameScoreVal) els.nameScoreVal.textContent = '-';
  if(els.nameScoreText) els.nameScoreText.textContent = '用于你做古书数理对照与灵感筛选，不作现实定论。';
  if(els.nameShuLiRef) els.nameShuLiRef.textContent = '暂无 81 数理参考。请先完成一次五格计算。';
  if(els.nameCharMeta) els.nameCharMeta.textContent = '暂未加载字库信息。请先完成一次五格计算。';
  if(els.nameResultCard) els.nameResultCard.style.display = 'none';
  renderNameStrokeInputs();
}

function setupNameModule(){
  if(window.__nameModuleWired) return;
  if(!els.nameFullInput || !els.calcNameBtn) return;

  let nameLenManual = false;

  function maybeAutoSetLens(){
    const full = normalizeNameStr(els.nameFullInput.value);
    if(!full) return;
    if(nameLenManual) return;
    const { sLen, gLen } = autoInferNameLens(full);
    if(String(els.nameSurnameLen.value) !== String(sLen)){
      els.nameSurnameLen.value = String(sLen);
    }
    if(String(els.nameGivenLen.value) !== String(gLen)){
      els.nameGivenLen.value = String(gLen);
    }
  }

  els.nameFullInput.addEventListener('input', ()=>{
    maybeAutoSetLens();
    renderNameStrokeInputs();
  });

  els.nameSurnameLen.addEventListener('change', ()=>{
    nameLenManual = true;
    renderNameStrokeInputs();
  });
  els.nameGivenLen.addEventListener('change', ()=>{
    nameLenManual = true;
    renderNameStrokeInputs();
  });

  els.calcNameBtn.addEventListener('click', ()=>{
    const res = computeFiveGrid();
    renderFiveGridResult(res);
  });
  els.resetNameBtn.addEventListener('click', resetNameModule);

  window.__nameModuleWired = true;
  maybeAutoSetLens();
  renderNameStrokeInputs();
}


  // 暴露入口，供 app.js 在 init() / switchTab('name') 中调用
  global.setupNameModule = setupNameModule;
})(window);
