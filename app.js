/* ===================== 基础引用 ===================== */
  const els = {
    tabBazi: document.getElementById('tabBazi'),
    tabJieqi: document.getElementById('tabJieqi'),
    tabLuck: document.getElementById('tabLuck'),
    tabAlmanac: document.getElementById('tabAlmanac'),
    tabShenSha: document.getElementById('tabShenSha'),
    tabName: document.getElementById('tabName'),

    panelBazi: document.getElementById('panelBazi'),
    panelJieqi: document.getElementById('panelJieqi'),
    panelLuck: document.getElementById('panelLuck'),
    panelAlmanac: document.getElementById('panelAlmanac'),
    panelShenSha: document.getElementById('panelShenSha'),
    panelName: document.getElementById('panelName'),

    solarModeBtn: document.getElementById('solarModeBtn'),
    lunarModeBtn: document.getElementById('lunarModeBtn'),

    yearLabel: document.getElementById('yearLabel'),
    monthLabel: document.getElementById('monthLabel'),
    dayLabel: document.getElementById('dayLabel'),

    yearRange: document.getElementById('yearRange'),
    monthRange: document.getElementById('monthRange'),
    dayRange: document.getElementById('dayRange'),
    hourRange: document.getElementById('hourRange'),
    minuteRange: document.getElementById('minuteRange'),

    yearVal: document.getElementById('yearVal'),
    monthVal: document.getElementById('monthVal'),
    dayVal: document.getElementById('dayVal'),
    hourVal: document.getElementById('hourVal'),
    minuteVal: document.getElementById('minuteVal'),

    leapRow: document.getElementById('leapRow'),
    leapToggle: document.getElementById('leapToggle'),

    minuteRow: document.getElementById('minuteRow'),
    minuteToggle: document.getElementById('minuteToggle'),

    nowPill: document.getElementById('nowPill'),
    linxiPill: document.getElementById('linxiPill'),
    yaoPill: document.getElementById('yaoPill'),

    calcBtn: document.getElementById('calcBtn'),
    copyBtn: document.getElementById('copyBtn'),

    setABtn: document.getElementById('setABtn'),
    compareBtn: document.getElementById('compareBtn'),
    clearCompareBtn: document.getElementById('clearCompareBtn'),

    pickedText: document.getElementById('pickedText'),
    crossText: document.getElementById('crossText'),

    result: document.getElementById('result'),
    lunarInfo: document.getElementById('lunarInfo'),
    tzHint: document.getElementById('tzHint'),

    jieqiLine: document.getElementById('jieqiLine'),

    yearGan: document.getElementById('yearGan'),
    yearZhi: document.getElementById('yearZhi'),
    monthGan: document.getElementById('monthGan'),
    monthZhi: document.getElementById('monthZhi'),
    dayGan: document.getElementById('dayGan'),
    dayZhi: document.getElementById('dayZhi'),
    timeGan: document.getElementById('timeGan'),
    timeZhi: document.getElementById('timeZhi'),

    yearSub: document.getElementById('yearSub'),
    monthSub: document.getElementById('monthSub'),
    daySub: document.getElementById('daySub'),
    timeSub: document.getElementById('timeSub'),

    ssInlineResult: document.getElementById('ssInlineResult'),

    compareBox: document.getElementById('compareBox'),
    compareALine: document.getElementById('compareALine'),
    compareAMeta: document.getElementById('compareAMeta'),
    compareBLine: document.getElementById('compareBLine'),
    compareBMeta: document.getElementById('compareBMeta'),

    jieqiYearRange: document.getElementById('jieqiYearRange'),
    jieqiYearVal: document.getElementById('jieqiYearVal'),
    jieqiQueryBtn: document.getElementById('jieqiQueryBtn'),
    jieqiCopyBtn: document.getElementById('jieqiCopyBtn'),
    jieqiQueryHint: document.getElementById('jieqiQueryHint'),
    jieqiList: document.getElementById('jieqiList'),

    luckWsPill: document.getElementById('luckWsPill'),
    luckFlowPill: document.getElementById('luckFlowPill'),
    wsBox: document.getElementById('wsBox'),
    flowBox: document.getElementById('flowBox'),

    wsCalcBtn: document.getElementById('wsCalcBtn'),
    wsCopyBtn: document.getElementById('wsCopyBtn'),
    wsResult: document.getElementById('wsResult'),
    wsConclusion: document.getElementById('wsConclusion'),
    wsExplain: document.getElementById('wsExplain'),

    flowYearRange: document.getElementById('flowYearRange'),
    flowYearVal: document.getElementById('flowYearVal'),
    flowCalcBtn: document.getElementById('flowCalcBtn'),
    flowCopyBtn: document.getElementById('flowCopyBtn'),
    flowList: document.getElementById('flowList'),

    pickMaleBtn: document.getElementById('pickMaleBtn'),
    pickFemaleBtn: document.getElementById('pickFemaleBtn'),

    maleBtn: document.getElementById('maleBtn'),
    femaleBtn: document.getElementById('femaleBtn'),
    dayunHint: document.getElementById('dayunHint'),
    dayunList: document.getElementById('dayunList'),
    dayunExplain: document.getElementById('dayunExplain'),

    /* Almanac */
    almanacDate: document.getElementById('almanacDate'),
    almanacTodayBtn: document.getElementById('almanacTodayBtn'),
    almanacCopyBtn: document.getElementById('almanacCopyBtn'),
    almanacResult: document.getElementById('almanacResult'),
    almanacKV: document.getElementById('almanacKV'),
    almanacYiJiSec: document.getElementById('almanacYiJiSec'),
    almanacYiJi: document.getElementById('almanacYiJi'),

    /* ShenSha learning */
    ssSearch: document.getElementById('ssSearch'),
    ssFilterAll: document.getElementById('ssFilterAll'),
    ssFilterCommon: document.getElementById('ssFilterCommon'),
    ssFilterChild: document.getElementById('ssFilterChild'),
    ssList: document.getElementById('ssList'),
    ssCopyListBtn: document.getElementById('ssCopyListBtn'),
    ssJumpExplainBtn: document.getElementById('ssJumpExplainBtn'),
    ssRuleExplain: document.getElementById('ssRuleExplain'),
    ssRuleText: document.getElementById('ssRuleText'),

    toast: document.getElementById('toast'),
  
    /* 起名 */
    nameFullInput: document.getElementById('nameFullInput'),
    nameSurnameLen: document.getElementById('nameSurnameLen'),
    nameGivenLen: document.getElementById('nameGivenLen'),
    nameStrokeInputs: document.getElementById('nameStrokeInputs'),
    nameMissingText: document.getElementById('nameMissingText'),
    copyMissingBtn: document.getElementById('copyMissingBtn'),
    calcNameBtn: document.getElementById('calcNameBtn'),
    resetNameBtn: document.getElementById('resetNameBtn'),
    nameResultCard: document.getElementById('nameResultCard'),
    nameScoreVal: document.getElementById('nameScoreVal'),
    nameScoreText: document.getElementById('nameScoreText'),
    ngTian: document.getElementById('ngTian'),
    ngRen: document.getElementById('ngRen'),
    ngDi: document.getElementById('ngDi'),
    ngWai: document.getElementById('ngWai'),
    ngZong: document.getElementById('ngZong'),
    ngTianWx: document.getElementById('ngTianWx'),
    ngRenWx: document.getElementById('ngRenWx'),
    ngDiWx: document.getElementById('ngDiWx'),
    ngWaiWx: document.getElementById('ngWaiWx'),
    ngZongWx: document.getElementById('ngZongWx'),
    ngSanCai: document.getElementById('ngSanCai'),
    nameExplain: document.getElementById('nameExplain'),
    nameShuLiRef: document.getElementById('nameShuLiRef'),
    nameCharMeta: document.getElementById('nameCharMeta')

  };

  const PRESETS_SOLAR = {
    linxi: { y: 1993, m: 1, d: 20, h: 20, min: 0 },
    yao:   { y: 2025, m: 5, d: 20, h: 20, min: 0 }
  };

  const MODE = { SOLAR: 'solar', LUNAR: 'lunar' };
  let currentMode = MODE.SOLAR;
  let compareA = null;

  let genderForYun = 1; // 1=男, 0=女

  /* ===== 五行十神基础 ===== */
  const GAN_INFO = {
    '甲': { e:'木', y:'阳' }, '乙': { e:'木', y:'阴' },
    '丙': { e:'火', y:'阳' }, '丁': { e:'火', y:'阴' },
    '戊': { e:'土', y:'阳' }, '己': { e:'土', y:'阴' },
    '庚': { e:'金', y:'阳' }, '辛': { e:'金', y:'阴' },
    '壬': { e:'水', y:'阳' }, '癸': { e:'水', y:'阴' }
  };
  const GEN_NEXT = { '木':'火', '火':'土', '土':'金', '金':'水', '水':'木' };
  const GEN_PREV = { '木':'水', '火':'木', '土':'火', '金':'土', '水':'金' };
  const CONTROL = { '木':'土', '火':'金', '土':'水', '金':'木', '水':'火' };
  const CONTROLLED_BY = { '木':'金', '火':'水', '土':'木', '金':'火', '水':'土' };

  const ZHI_HIDE_FALLBACK = {
    '子':'癸','丑':'己癸辛','寅':'甲丙戊','卯':'乙',
    '辰':'戊乙癸','巳':'丙戊庚','午':'丁己','未':'己丁乙',
    '申':'庚壬戊','酉':'辛','戌':'戊辛丁','亥':'壬甲'
  };

  const JIEQI_ORDER = [
    "小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨",
    "立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑",
    "白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"
  ];

  /* ===================== 工具函数 ===================== */
  function ensureLunarLib(){
    return typeof Solar !== 'undefined' && typeof Lunar !== 'undefined';
  }
  function showToast(text){
    els.toast.textContent = text;
    els.toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => els.toast.classList.remove('show'), 1200);
  }
  function pad2(n){ return String(n).padStart(2,'0'); }
  function getTZ(){ return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local'; }
  function fmtMD(date){ return `${date.getMonth()+1}月${date.getDate()}日`; }
  function fmtYMD(date){ return `${date.getFullYear()}-${pad2(date.getMonth()+1)}-${pad2(date.getDate())}`; }
  function daysInSolarMonth(y, m){ return new Date(y, m, 0).getDate(); }

  function daysInLunarMonth(y, m, isLeap){
    try{
      if(typeof Lunar === 'undefined') return 30;
      if(Lunar.fromYmdHms){
        const len = Lunar.fromYmdHms.length;
        let lunar = null;
        if(len >= 7){
          lunar = Lunar.fromYmdHms(y, m, 1, 0, 0, 0, !!isLeap);
        }else{
          lunar = Lunar.fromYmdHms(y, m, 1, 0, 0, 0);
        }
        if(lunar && typeof lunar.getMonthDays === 'function'){
          const d = lunar.getMonthDays();
          if(d >= 29 && d <= 30) return d;
        }
      }
      if(Lunar.fromYmd){
        const lunar = Lunar.fromYmd(y, m, 1);
        if(lunar && typeof lunar.getMonthDays === 'function'){
          const d = lunar.getMonthDays();
          if(d >= 29 && d <= 30) return d;
        }
      }
    }catch(e){}
    return 30;
  }

  function setActiveQuickPill(which){
    [els.nowPill, els.linxiPill, els.yaoPill].forEach(p => p.classList.remove('active'));
    if(which === 'now') els.nowPill.classList.add('active');
    if(which === 'linxi') els.linxiPill.classList.add('active');
    if(which === 'yao') els.yaoPill.classList.add('active');
  }

  function updateLabels(){
    if(currentMode === MODE.SOLAR){
      els.yearLabel.textContent = '公历年';
      els.monthLabel.textContent = '公历月';
      els.dayLabel.textContent = '公历日';
      els.leapRow.style.display = 'none';
    }else{
      els.yearLabel.textContent = '农历年';
      els.monthLabel.textContent = '农历月';
      els.dayLabel.textContent = '农历日';
      els.leapRow.style.display = 'grid';
    }
  }
  function setActiveModePill(){
    els.solarModeBtn.classList.toggle('active', currentMode === MODE.SOLAR);
    els.lunarModeBtn.classList.toggle('active', currentMode === MODE.LUNAR);
  }

  function setRangesBounds(){
    els.yearRange.min = 1900; els.yearRange.max = 2100; els.yearRange.step = 1;
    els.monthRange.min = 1; els.monthRange.max = 12; els.monthRange.step = 1;
    els.hourRange.min = 0; els.hourRange.max = 23; els.hourRange.step = 1;
    els.minuteRange.min = 0; els.minuteRange.max = 59; els.minuteRange.step = 1;

    els.jieqiYearRange.min = 1900; els.jieqiYearRange.max = 2100; els.jieqiYearRange.step = 1;
    els.flowYearRange.min = 1900; els.flowYearRange.max = 2100; els.flowYearRange.step = 1;
  }

  function updateDayRange(){
    const y = Number(els.yearRange.value);
    const m = Number(els.monthRange.value);
    const isLeap = !!els.leapToggle.checked;

    let maxDay = 30;
    if(currentMode === MODE.SOLAR){
      maxDay = daysInSolarMonth(y, m);
    }else{
      maxDay = daysInLunarMonth(y, m, isLeap);
    }

    const currentDay = Number(els.dayRange.value || 1);

    els.dayRange.min = 1;
    els.dayRange.max = maxDay;
    els.dayRange.step = 1;

    if(currentDay > maxDay){
      els.dayRange.value = maxDay;
    }else if(!els.dayRange.value){
      els.dayRange.value = 1;
    }
  }

  function setFromSolarParts(p){
    els.yearRange.value = p.y;
    els.monthRange.value = p.m;
    updateDayRange();
    els.dayRange.value = Math.min(p.d, daysInSolarMonth(p.y, p.m));
    els.hourRange.value = p.h;
    els.minuteRange.value = p.min ?? 0;
    els.leapToggle.checked = false;
    updateDayRange();
    syncValueText();
  }

  function setFromLunarParts(p){
    els.yearRange.value = p.y;
    els.monthRange.value = p.m;
    els.leapToggle.checked = !!p.isLeap;
    updateDayRange();
    els.dayRange.value = Math.min(p.d, daysInLunarMonth(p.y, p.m, !!p.isLeap));
    els.hourRange.value = p.h;
    els.minuteRange.value = p.min ?? 0;
    updateDayRange();
    syncValueText();
  }

  function setFromDate(date){
    setFromSolarParts({
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      min: date.getMinutes()
    });
  }

  function createLunarFromSliders(){
    const y = Number(els.yearRange.value);
    const m = Number(els.monthRange.value);
    const d = Number(els.dayRange.value);
    const h = Number(els.hourRange.value);
    const min = Number(els.minuteRange.value || 0);
    const isLeap = !!els.leapToggle.checked;

    try{
      if(Lunar.fromYmdHms){
        if(Lunar.fromYmdHms.length >= 7){
          return Lunar.fromYmdHms(y, m, d, h, min, 0, isLeap);
        }
        return Lunar.fromYmdHms(y, m, d, h, min, 0);
      }
      if(Lunar.fromYmd){
        return Lunar.fromYmd(y, m, d);
      }
    }catch(e){
      return null;
    }
    return null;
  }

  function convertSolarSlidersToLunarSliders(){
    if(!ensureLunarLib()) return;

    const y = Number(els.yearRange.value);
    const m = Number(els.monthRange.value);
    const d = Number(els.dayRange.value);
    const h = Number(els.hourRange.value);
    const min = Number(els.minuteRange.value || 0);

    try{
      const solar = Solar.fromYmdHms(y, m, d, h, min, 0);
      const lunar = solar.getLunar();

      const lunarMonth = typeof lunar.getMonth === 'function' ? lunar.getMonth() : m;
      const lunarDay = typeof lunar.getDay === 'function' ? lunar.getDay() : d;
      const lunarYear = typeof lunar.getYear === 'function' ? lunar.getYear() : y;
      const isLeap = typeof lunar.isLeap === 'function' ? lunar.isLeap() : false;

      setFromLunarParts({ y: lunarYear, m: lunarMonth, d: lunarDay, h: h, min, isLeap });

    }catch(e){
      setFromLunarParts({ y, m, d, h, min, isLeap: false });
    }
  }

  function convertLunarSlidersToSolarSliders(){
    if(!ensureLunarLib()) return;

    const lunar = createLunarFromSliders();
    if(!lunar) return;

    try{
      const solar = lunar.getSolar();
      setFromSolarParts({
        y: solar.getYear(),
        m: solar.getMonth(),
        d: solar.getDay(),
        h: solar.getHour(),
        min: solar.getMinute ? solar.getMinute() : Number(els.minuteRange.value || 0)
      });
    }catch(e){}
  }

  function switchMode(toMode){
    if(toMode === currentMode) return;

    if(toMode === MODE.LUNAR){
      convertSolarSlidersToLunarSliders();
    }else{
      convertLunarSlidersToSolarSliders();
    }

    currentMode = toMode;
    setActiveModePill();
    updateLabels();
    updateDayRange();
    syncValueText();
  }

  function getSelectedSolarParts(){
    if(currentMode === MODE.SOLAR){
      return {
        y: Number(els.yearRange.value),
        m: Number(els.monthRange.value),
        d: Number(els.dayRange.value),
        h: Number(els.hourRange.value),
        min: Number(els.minuteRange.value || 0)
      };
    }

    const lunar = createLunarFromSliders();
    if(lunar){
      const solar = lunar.getSolar();
      return {
        y: solar.getYear(),
        m: solar.getMonth(),
        d: solar.getDay(),
        h: solar.getHour(),
        min: solar.getMinute ? solar.getMinute() : Number(els.minuteRange.value || 0)
      };
    }

    return {
      y: Number(els.yearRange.value),
      m: Number(els.monthRange.value),
      d: Number(els.dayRange.value),
      h: Number(els.hourRange.value),
      min: Number(els.minuteRange.value || 0)
    };
  }

  /* ===================== 十神相关 ===================== */
  function shiShenForGan(dayGan, otherGan){
    const dm = GAN_INFO[dayGan];
    const og = GAN_INFO[otherGan];
    if(!dm || !og) return '';

    const samePol = dm.y === og.y;
    if(dm.e === og.e) return samePol ? '比肩' : '劫财';
    if(GEN_NEXT[dm.e] === og.e) return samePol ? '食神' : '伤官';
    if(GEN_PREV[dm.e] === og.e) return samePol ? '偏印' : '正印';
    if(CONTROL[dm.e] === og.e) return samePol ? '偏财' : '正财';
    if(CONTROLLED_BY[dm.e] === og.e) return samePol ? '七杀' : '正官';
    return '';
  }

  function hiddenGansForZhi(zhi){
    try{
      if(typeof LunarUtil !== 'undefined'){
        const map = LunarUtil.ZHI_HIDE_GAN || LunarUtil.ZHI_HIDE_GAN_MAP;
        if(map && map[zhi]){
          const v = map[zhi];
          if(Array.isArray(v)) return v.join('');
          return String(v).replace(/,/g,'');
        }
      }
    }catch(e){}
    return ZHI_HIDE_FALLBACK[zhi] || '';
  }

  function nayinForGanZhi(gz){
    try{
      if(typeof LunarUtil !== 'undefined'){
        const map = LunarUtil.NAYIN || LunarUtil.NAYIN_MAP;
        if(map && map[gz]) return map[gz];
      }
    }catch(e){}
    return '';
  }

  function shiShenForHidden(dayGan, hideStr){
    if(!hideStr) return '';
    const gans = hideStr.split('');
    const mapped = gans.map(g => {
      const ss = shiShenForGan(dayGan, g);
      return ss ? `${g}${ss}` : g;
    });
    return mapped.join(' ');
  }

  function buildPillarSub(dayGan, pillarGan, pillarZhi){
    const ss = shiShenForGan(dayGan, pillarGan);
    const hide = hiddenGansForZhi(pillarZhi);
    const hideSS = shiShenForHidden(dayGan, hide);
    const nayin = nayinForGanZhi(pillarGan + pillarZhi);

    const parts = [];
    if(ss) parts.push(`天干十神：<span class="hl">${ss}</span>`);
    if(hide) parts.push(`藏干：${hide}`);
    if(hideSS) parts.push(`藏干十神：<span class="hl2">${hideSS}</span>`);
    if(nayin) parts.push(`纳音：${nayin}`);

    return parts.join('<br/>') || '—';
  }

  /* ===================== 节气 ===================== */
  function jieQiNameForSolar(solar){
    try{
      if(solar && typeof solar.getJieQi === 'function'){
        const n = solar.getJieQi();
        if(n) return n;
      }
    }catch(e){}
    try{
      const lunar = solar ? solar.getLunar() : null;
      if(lunar && typeof lunar.getJieQi === 'function'){
        const n = lunar.getJieQi();
        if(n) return n;
      }
    }catch(e){}
    return '';
  }

  function findNextJieQi(date){
    for(let i=1;i<=80;i++){
      const d = new Date(date.getFullYear(), date.getMonth(), date.getDate()+i, 12, 0, 0);
      try{
        const s = Solar.fromYmdHms(d.getFullYear(), d.getMonth()+1, d.getDate(), 12, 0, 0);
        const name = jieQiNameForSolar(s);
        if(name){
          return { name, date: d, offset: i };
        }
      }catch(e){}
    }
    return null;
  }

  function findPrevJieQi(date){
    for(let i=1;i<=80;i++){
      const d = new Date(date.getFullYear(), date.getMonth(), date.getDate()-i, 12, 0, 0);
      try{
        const s = Solar.fromYmdHms(d.getFullYear(), d.getMonth()+1, d.getDate(), 12, 0, 0);
        const name = jieQiNameForSolar(s);
        if(name){
          return { name, date: d, offset: -i };
        }
      }catch(e){}
    }
    return null;
  }

  function renderJieQiSection(date){
    const line = [];
    let todayName = '';
    try{
      const s = Solar.fromYmdHms(date.getFullYear(), date.getMonth()+1, date.getDate(), 12, 0, 0);
      todayName = jieQiNameForSolar(s);
    }catch(e){}

    if(todayName){
      line.push(`<span class="jieqi-badge">今日节气：${todayName}</span>`);
    }else{
      line.push(`<span class="jieqi-badge">今日无节气点</span>`);
    }

    const prev = findPrevJieQi(date);
    const next = findNextJieQi(date);

    if(prev){
      const abs = Math.abs(prev.offset);
      line.push(`上一节气：<b style="color:var(--accent-2)">${prev.name}</b> · ${fmtMD(prev.date)}（${abs} 天前）`);
    }else{
      line.push(`上一节气：暂未定位`);
    }

    if(next){
      line.push(`下一节气：<b style="color:var(--accent-2)">${next.name}</b> · ${fmtMD(next.date)}（${next.offset} 天后）`);
    }else{
      line.push(`下一节气：暂未定位`);
    }

    line.push(`<span style="font-size:10.5px; color:#8b90a1;">节气日期按设备时区近似展示（${getTZ()}）</span>`);
    els.jieqiLine.innerHTML = line.join('<br/>');
  }

  /* ===================== 神煞（试行版自动判定） ===================== */
  const GROUPS = {
    '申子辰': ['申','子','辰'],
    '巳酉丑': ['巳','酉','丑'],
    '寅午戌': ['寅','午','戌'],
    '亥卯未': ['亥','卯','未']
  };

  // v10.4: 孤辰/寡宿等以年支为主的分组（四库方向）
  const YEAR_SOLITUDE_GROUPS = {
    '亥子丑': ['亥','子','丑'],
    '寅卯辰': ['寅','卯','辰'],
    '巳午未': ['巳','午','未'],
    '申酉戌': ['申','酉','戌']
  };

  function findYearSolitudeGroup(yearZhi){
    if(!yearZhi) return null;
    for(const k of Object.keys(YEAR_SOLITUDE_GROUPS)){
      if(YEAR_SOLITUDE_GROUPS[k].includes(yearZhi)) return k;
    }
    return null;
  }

  const GUCHEN_YEAR_MAP = {
    '亥子丑': '寅',
    '寅卯辰': '巳',
    '巳午未': '申',
    '申酉戌': '亥'
  };

  const GUASU_YEAR_MAP = {
    '亥子丑': '戌',
    '寅卯辰': '丑',
    '巳午未': '辰',
    '申酉戌': '未'
  };


  const TAOHUA_MAP = {
    '申子辰': '酉',
    '巳酉丑': '午',
    '寅午戌': '卯',
    '亥卯未': '子'
  };
  const YIMA_MAP = {
    '申子辰': '寅',
    '寅午戌': '申',
    '亥卯未': '巳',
    '巳酉丑': '亥'
  };
  const HUAGAI_MAP = {
    '申子辰': '辰',
    '寅午戌': '戌',
    '亥卯未': '未',
    '巳酉丑': '丑'
  };
  const JIANGXING_MAP = {
    '申子辰': '子',
    '寅午戌': '午',
    '亥卯未': '卯',
    '巳酉丑': '酉'
  };

  // v10.4: 以年支/日支三合局为主的凶煞/桃花类扩展
  const WANGSHEN_MAP = {
    '寅午戌': '巳',
    '亥卯未': '寅',
    '巳酉丑': '申',
    '申子辰': '亥'
  };

  const LIUE_MAP = {
    '寅午戌': '酉',
    '亥卯未': '午',
    '申子辰': '卯',
    '巳酉丑': '子'
  };

  const ZAISHA_MAP = {
    '申子辰': '午',
    '亥卯未': '酉',
    '寅午戌': '子',
    '巳酉丑': '卯'
  };

  const JIESHA_MAP = {
    '申子辰': '亥',
    '寅午戌': '巳',
    '巳酉丑': '寅',
    '亥卯未': '申'
  };

  const BAIHU_MAP = {
    '寅午戌': '子',
    '申子辰': '午',
    '亥卯未': '酉',
    '巳酉丑': '卯'
  };


  /* ===================== 神煞自动判定 · 扩展版（含干支/日柱类） ===================== */

  const WENCHANG_MAP = {
    '甲':'巳','乙':'午','丙':'申','丁':'酉','戊':'申','己':'酉','庚':'亥','辛':'子','壬':'寅','癸':'卯'
  };

  const TIAN_YI_MAP = {
    '甲':['丑','未'],
    '戊':['丑','未'],
    '乙':['子','申'],
    '己':['子','申'],
    '丙':['亥','酉'],
    '丁':['亥','酉'],
    '壬':['卯','巳'],
    '癸':['卯','巳'],
    '庚':['寅','午'],
    '辛':['寅','午'] // 常见并用法，供学习参考
  };

  const GUOYIN_MAP = {
    '甲':'戌','乙':'亥','丙':'丑','丁':'寅','戊':'丑','己':'寅','庚':'辰','辛':'巳','壬':'未','癸':'申'
  };

  const TAIJI_MAP = {
    '甲':'子午','乙':'子午',
    '丙':'酉卯','丁':'酉卯',
    '戊':'辰戌丑未','己':'辰戌丑未',
    '庚':'寅亥','辛':'寅亥',
    '壬':'巳申','癸':'巳申'
  };

  const HONG_LUAN_MAP = {
    '子':'卯','丑':'寅','寅':'丑','卯':'子','辰':'亥','巳':'戌','午':'酉','未':'申','申':'未','酉':'午','戌':'巳','亥':'辰'
  };

  const TIAN_XI_MAP = {
    '子':'酉','丑':'申','寅':'未','卯':'午','辰':'巳','巳':'辰','午':'卯','未':'寅','申':'丑','酉':'子','戌':'亥','亥':'戌'
  };

  const LUSHEN_MAP = {
    '甲':'寅','乙':'卯','丙':'巳','丁':'午','戊':'巳','己':'午','庚':'申','辛':'酉','壬':'亥','癸':'子'
  };

  const FUDEREN_MAP = {
    '甲':'寅','乙':'卯','丙':'巳','丁':'午','戊':'申','己':'酉','庚':'亥','辛':'子','壬':'寅','癸':'卯'
  };

  // v10.4: 新增日干对应神煞
  const FUXING_MAP = {
    '甲':'寅', '丙':'寅',
    '乙':'卯', '癸':'卯',
    '丁':'亥',
    '戊':'申',
    '己':'未',
    '庚':'午',
    '辛':'巳',
    '壬':'辰'
  };

  const JINYU_MAP = {
    '甲':'辰','乙':'巳','丙':'未','丁':'申','戊':'未','己':'申','庚':'戌','辛':'亥','壬':'丑','癸':'寅'
  };

  const XISHEN_MAP = {
    '甲':'午','乙':'巳','丙':'寅','丁':'卯','戊':'申','己':'酉','庚':'亥','辛':'子','壬':'戌','癸':'丑'
  };

  const HONGYAN_MAP = {
    '甲':'午','乙':'申','丙':'寅','丁':'未','戊':'辰','己':'辰','庚':'戌','辛':'酉','壬':'子','癸':'申'
  };

  // 截路空亡：日干对应两支
  const JIELUKONGWANG_MAP = {
    '甲':'申酉','己':'申酉',
    '乙':'午未','庚':'午未',
    '丙':'辰巳','辛':'辰巳',
    '丁':'寅卯','壬':'寅卯',
    '戊':'子丑','癸':'子丑'
  };

  // 天厨贵人：日干对应时支
  const TIANCHU_HOUR_MAP = {
    '甲':'巳','乙':'午','丙':'巳','丁':'午','戊':'申','己':'酉','庚':'亥','辛':'子','壬':'寅','癸':'卯'
  };


  const YANGREN_MAP = {
    '甲':'卯','乙':'寅','丙':'午','丁':'巳','戊':'午','己':'巳','庚':'酉','辛':'申','壬':'子','癸':'亥'
  };

  const FEIREN_MAP = {
    '甲':'酉','乙':'申','丙':'子','丁':'亥','戊':'子','己':'亥','庚':'卯','辛':'寅','壬':'午','癸':'巳'
  };

  const XUEREN_MAP = {
    '甲':'卯','乙':'辰','丙':'午','丁':'未','戊':'午','己':'未','庚':'酉','辛':'戌','壬':'子','癸':'丑'
  };

  const GULUAN_SET = new Set(['乙巳','丁巳','辛亥','戊申','壬寅','戊午','壬子','丙午']);
  const SHI_E_DA_BAI_SET = new Set(['甲辰','乙巳','丙申','丁亥','戊戌','己丑','庚辰','辛巳','壬申','癸亥']);
  const YINYANG_CHACUO_SET = new Set(['丙子','丁丑','戊寅','辛卯','壬辰','癸巳','丙午','丁未','戊申','辛酉','壬戌','癸亥']);
  const KUI_GANG_SET = new Set(['壬辰','庚戌','庚辰','戊戌']);

  function detectAutoShenSha(pillars){
    const results = [];
    const zhis = [pillars.yearZhi, pillars.monthZhi, pillars.dayZhi, pillars.timeZhi].filter(Boolean);
    const dayPillar = `${pillars.dayGan||''}${pillars.dayZhi||''}`;
    const gans = [pillars.yearGan, pillars.monthGan, pillars.dayGan, pillars.timeGan].filter(Boolean);
    const pillarPairs = [
      `${pillars.yearGan||''}${pillars.yearZhi||''}`,
      `${pillars.monthGan||''}${pillars.monthZhi||''}`,
      `${pillars.dayGan||''}${pillars.dayZhi||''}`,
      `${pillars.timeGan||''}${pillars.timeZhi||''}`
    ].filter(x => x && x.length===2);
    const lunarMonthNum = pillars.lunarMonthNum;

    function push(name, rule, luck){
      results.push({ name, rule, luck });
    }

    function pushByGanMap(name, gan, map, luck){
      if(!gan) return;
      const target = map[gan];
      if(!target) return;
      // 允许 map 值为多个地支字符串（如 "子午"）
      const targets = Array.isArray(target) ? target : target.split('');
      const hits = targets.filter(z => zhis.includes(z));
      if(hits.length){
        push(name, `以${gan}为主，见${hits.join('、')}`, luck);
      }
    }

    // 文昌：年干/日干均可参考
    pushByGanMap('文昌贵人', pillars.yearGan, WENCHANG_MAP, '吉');
    if(pillars.dayGan && pillars.dayGan !== pillars.yearGan){
      pushByGanMap('文昌贵人', pillars.dayGan, WENCHANG_MAP, '吉');
    }

    // 天乙：以日干为主
    if(pillars.dayGan){
      const ts = TIAN_YI_MAP[pillars.dayGan] || [];
      const hits = ts.filter(z => zhis.includes(z));
      if(hits.length){
        push('天乙贵人', `以日干${pillars.dayGan}为主，见${hits.join('、')}`, '吉');
      }
    }

    // 国印、太极、禄神、福德、羊刃、飞刃、血刃
    pushByGanMap('国印贵人', pillars.yearGan, GUOYIN_MAP, '吉');
    if(pillars.dayGan && pillars.dayGan !== pillars.yearGan){
      pushByGanMap('国印贵人', pillars.dayGan, GUOYIN_MAP, '吉');
    }

    // 太极（map 值是多个地支集合）
    if(pillars.yearGan){
      const t = TAIJI_MAP[pillars.yearGan];
      if(t){
        const targets = t.split('');
        const hits = targets.filter(z => zhis.includes(z));
        if(hits.length){
          push('太极贵人', `以${pillars.yearGan}为主，见${hits.join('、')}`, '吉');
        }
      }
    }
    if(pillars.dayGan && pillars.dayGan !== pillars.yearGan){
      const t = TAIJI_MAP[pillars.dayGan];
      if(t){
        const targets = t.split('');
        const hits = targets.filter(z => zhis.includes(z));
        if(hits.length){
          push('太极贵人', `以${pillars.dayGan}为主，见${hits.join('、')}`, '吉');
        }
      }
    }

    pushByGanMap('禄神', pillars.dayGan, LUSHEN_MAP, '吉');
    pushByGanMap('福德贵人', pillars.dayGan, FUDEREN_MAP, '吉');
    pushByGanMap('福星贵人', pillars.dayGan, FUXING_MAP, '吉');
    pushByGanMap('金舆贵人', pillars.dayGan, JINYU_MAP, '吉');
    pushByGanMap('喜神', pillars.dayGan, XISHEN_MAP, '吉');
    pushByGanMap('红艳煞', pillars.dayGan, HONGYAN_MAP, '中性');
    pushByGanMap('截路空亡', pillars.dayGan, JIELUKONGWANG_MAP, '凶');

    pushByGanMap('羊刃', pillars.dayGan, YANGREN_MAP, '中性偏刚');
    pushByGanMap('飞刃', pillars.dayGan, FEIREN_MAP, '凶');
    pushByGanMap('血刃', pillars.dayGan, XUEREN_MAP, '凶');

    
    // 天厨贵人：日干对应时支
    if(pillars.dayGan && pillars.timeZhi){
      const t = TIANCHU_HOUR_MAP[pillars.dayGan];
      if(t && pillars.timeZhi === t){
        push('天厨贵人', `以日干${pillars.dayGan}为主，生于${pillars.timeZhi}时`, '吉');
      }
    }

// 红鸾 / 天喜：以年支为主
    if(pillars.yearZhi){
      const h = HONG_LUAN_MAP[pillars.yearZhi];
      if(h && zhis.includes(h)){
        push('红鸾', `以年支${pillars.yearZhi}为主，见${h}`, '吉');
      }
      const tx = TIAN_XI_MAP[pillars.yearZhi];
      if(tx && zhis.includes(tx)){
        push('天喜', `以年支${pillars.yearZhi}为主，见${tx}`, '吉');
      }
    }

    // 六合：出现任一六合组合
    const LIUHE_PAIRS = [['子','丑'],['寅','亥'],['卯','戌'],['辰','酉'],['巳','申'],['午','未']];
    for(const [a,b] of LIUHE_PAIRS){
      if(zhis.includes(a) && zhis.includes(b)){
        push('六合', `地支见${a}${b}合`, '吉');
      }
    }

    // 魁罡、十恶大败、孤鸾、阴阳差错（以日柱为主）
    if(KUI_GANG_SET.has(dayPillar)){
      push('魁罡', `日柱${dayPillar}`, '中性偏刚');
    }
    if(SHI_E_DA_BAI_SET.has(dayPillar)){
      push('十恶大败', `日柱${dayPillar}`, '凶');
    }
    if(GULUAN_SET.has(dayPillar)){
      push('孤鸾煞', `日柱${dayPillar}`, '中性偏孤');
    }
    if(YINYANG_CHACUO_SET.has(dayPillar)){
      push('阴阳差错', `日柱${dayPillar}`, '凶');
    }

    // ===== 新增：学习列表扩展神煞（民间/古籍口传类）=====
    // 流霞煞：以日干对应地支
    const LIUXIA_ZHI_BY_DAYGAN = {
      '甲':'酉','乙':'戌','丙':'未','丁':'申','戊':'巳',
      '己':'午','庚':'辰','辛':'卯','壬':'亥','癸':'寅'
    };
    const liuxiaZhi = LIUXIA_ZHI_BY_DAYGAN[pillars.dayGan];
    if(liuxiaZhi && zhis.includes(liuxiaZhi)){
      push('流霞煞', `以日干${pillars.dayGan}为主，见${liuxiaZhi}`, '凶');
    }

    // 铁板煞：日干 + 月支
    if(pillars.dayGan && pillars.monthZhi){
      const dg = pillars.dayGan;
      const mz = pillars.monthZhi;
      if((dg === '甲' || dg === '己') && mz === '辰'){
        push('铁板煞', `日干${dg}，月支${mz}`, '凶');
      }else if((dg === '乙' || dg === '庚') && mz === '寅'){
        push('铁板煞', `日干${dg}，月支${mz}`, '凶');
      }else if((dg === '丙' || dg === '辛') && (mz === '酉' || mz === '戌')){
        push('铁板煞', `日干${dg}，月支${mz}`, '凶');
      }
    }

    // 埋儿煞：以年支为基准看其他地支
    if(pillars.yearZhi){
      const yz = pillars.yearZhi;
      let target = '';
      if('子午卯酉'.includes(yz)) target = '丑';
      else if('寅申巳亥'.includes(yz)) target = '申';
      else if('辰戌丑未'.includes(yz)) target = '卯';

      if(target){
        const hitCols = [];
        if(pillars.monthZhi === target) hitCols.push('月支');
        if(pillars.dayZhi === target) hitCols.push('日支');
        if(pillars.timeZhi === target) hitCols.push('时支');

        if(hitCols.length){
          const isFemale = pillars.gender === 0;
          const extra = (isFemale && pillars.timeZhi === target) ? '（女命时支见之更凶）' : '';
          push('埋儿煞', `以年支${yz}为主，见${target}${hitCols.length ? `（${hitCols.join('、')}）` : ''}${extra}`, '凶');
        }
      }
    }

    // 铁扫把：按年支组 + 性别 + 农历月
    if(typeof pillars.lunarMonthNum === 'number' && pillars.yearZhi){
      const lm = pillars.lunarMonthNum;
      const yz = pillars.yearZhi;
      const isMale = pillars.gender !== 0; // 默认男

      let need = null;
      if('申子辰'.includes(yz)) need = isMale ? 1 : 12;
      else if('巳酉丑'.includes(yz)) need = isMale ? 6 : 9;
      else if('寅午戌'.includes(yz)) need = isMale ? 9 : 6;
      else if('亥卯未'.includes(yz)) need = isMale ? 12 : 1;

      if(need && lm === need){
        push('铁扫把', `年支${yz}，${isMale ? '男' : '女'}命生于农历${need}月`, '中性偏凶');
      }
    }

    // 八败：生肖 + 出生季节特定月
    if(pillars.yearAnimal && typeof pillars.lunarMonthNum === 'number'){
      const a = pillars.yearAnimal;
      const lm = pillars.lunarMonthNum;

      const hit =
        (['猪','狗','羊'].includes(a) && lm === 3) ||
        (['龙','蛇','鼠'].includes(a) && lm === 6) ||
        (['猴','鸡','牛'].includes(a) && lm === 9) ||
        (['虎','马','兔'].includes(a) && lm === 12);

      if(hit){
        push('八败', `生肖${a}，农历${lm}月`, '凶');
      }
    }

    // 地扫星：年柱纳音五行 + 农历月
    if(pillars.yearNayinElement && typeof pillars.lunarMonthNum === 'number'){
      const e = pillars.yearNayinElement;
      const lm = pillars.lunarMonthNum;

      let hit = false;
      if((e === '水' || e === '土') && (lm === 2 || lm === 3)) hit = true;
      else if(e === '火' && (lm === 5 || lm === 6)) hit = true;
      else if(e === '金' && (lm === 8 || lm === 9)) hit = true;
      else if(e === '木' && (lm === 10 || lm === 11 || lm === 12)) hit = true;

      if(hit){
        push('地扫星', `年柱纳音${pillars.yearNayin || e}，农历${lm}月`, '凶');
      }
    }

    
    // 孤辰 / 寡宿：以年支为主
    if(pillars.yearZhi){
      const yk = findYearSolitudeGroup(pillars.yearZhi);
      if(yk){
        const gc = GUCHEN_YEAR_MAP[yk];
        if(gc && zhis.includes(gc)){
          push('孤辰', `以年支${pillars.yearZhi}为主，见${gc}`, '凶');
        }
        const gs = GUASU_YEAR_MAP[yk];
        if(gs && zhis.includes(gs)){
          push('寡宿', `以年支${pillars.yearZhi}为主，见${gs}`, '凶');
        }
      }
    }

    /* ===================== 新增：学业/德曜/网罗类（自动判定 · 扩展） ===================== */

    // 文曲星（简化口径：命局见辰）
    if(zhis.includes('辰')){
      push('文曲星', '命局地支见辰（常见口径）', '吉');
    }

    // 学堂（按年柱纳音五行）
    if(pillars.yearNayinElement){
      const XUETANG_MAP = { '金':'巳', '木':'亥', '水':'申', '土':'申', '火':'寅' };
      const xt = XUETANG_MAP[pillars.yearNayinElement];
      if(xt && zhis.includes(xt)){
        const ny = pillars.yearNayin || (pillars.yearNayinElement + '命');
        push('学堂', `以年柱纳音${ny}查，见${xt}`, '吉');
      }
    }

    // 月德贵人 / 月德合（以月支三合局取天干）
    if(pillars.monthZhi){
      let mdGan = '';
      if('寅午戌'.includes(pillars.monthZhi)) mdGan = '丙';
      else if('申子辰'.includes(pillars.monthZhi)) mdGan = '壬';
      else if('亥卯未'.includes(pillars.monthZhi)) mdGan = '甲';
      else if('巳酉丑'.includes(pillars.monthZhi)) mdGan = '庚';

      const HE_GAN = { '甲':'己', '己':'甲', '乙':'庚', '庚':'乙', '丙':'辛', '辛':'丙', '丁':'壬', '壬':'丁', '戊':'癸', '癸':'戊' };

      if(mdGan && gans.includes(mdGan)){
        push('月德贵人', `以月支${pillars.monthZhi}归三合局取${mdGan}，四柱天干见之`, '吉');
      }
      const mdHe = mdGan ? HE_GAN[mdGan] : '';
      if(mdHe && gans.includes(mdHe)){
        push('月德合', `取月德${mdGan}之五合${mdHe}，四柱天干见之`, '吉');
      }
    }

    // 天德贵人 / 天德合（按农历月份）
    if(lunarMonthNum){
      const TD_MONTH_MAP = { 1:'丁', 2:'申', 3:'壬', 4:'辛', 5:'亥', 6:'甲', 7:'癸', 8:'寅', 9:'丙', 10:'乙', 11:'巳', 12:'庚' };
      const td = TD_MONTH_MAP[lunarMonthNum];

      const HE_GAN = { '甲':'己', '己':'甲', '乙':'庚', '庚':'乙', '丙':'辛', '辛':'丙', '丁':'壬', '壬':'丁', '戊':'癸', '癸':'戊' };
      const HE_ZHI = { '子':'丑', '丑':'子', '寅':'亥', '亥':'寅', '卯':'戌', '戌':'卯', '辰':'酉', '酉':'辰', '巳':'申', '申':'巳', '午':'未', '未':'午' };

      if(td){
        const isGan = '甲乙丙丁戊己庚辛壬癸'.includes(td);
        const isZhi = '子丑寅卯辰巳午未申酉戌亥'.includes(td);

        if((isGan && gans.includes(td)) || (isZhi && zhis.includes(td))){
          push('天德贵人', `农历${lunarMonthNum}月取${td}，四柱见之`, '吉');
        }

        const tdHe = isGan ? HE_GAN[td] : (isZhi ? HE_ZHI[td] : '');
        if(tdHe){
          if(isGan && gans.includes(tdHe)){
            push('天德合', `农历${lunarMonthNum}月天德为${td}，取五合${tdHe}，四柱天干见之`, '吉');
          }else if(isZhi && zhis.includes(tdHe)){
            push('天德合', `农历${lunarMonthNum}月天德为${td}，取六合${tdHe}，四柱地支见之`, '吉');
          }
        }
      }
    }

    // 德秀贵人（以月令分德/秀）
    if(pillars.monthZhi){
      let de = [], xiu = [];
      if('寅午戌'.includes(pillars.monthZhi)){
        de = ['丙','丁']; xiu = ['戊','癸'];
      }else if('申子辰'.includes(pillars.monthZhi)){
        de = ['壬','癸','戊','己']; xiu = ['丙','辛','甲','己'];
      }else if('巳酉丑'.includes(pillars.monthZhi)){
        de = ['庚','辛']; xiu = ['乙','庚'];
      }else if('亥卯未'.includes(pillars.monthZhi)){
        de = ['甲','乙']; xiu = ['丁','壬'];
      }

      const hitDe = de.filter(g => gans.includes(g));
      const hitXiu = xiu.filter(g => gans.includes(g));
      if(hitDe.length || hitXiu.length){
        const parts = [];
        if(hitDe.length) parts.push(`德：${hitDe.join('、')}`);
        if(hitXiu.length) parts.push(`秀：${hitXiu.join('、')}`);
        push('德秀贵人', `以月支${pillars.monthZhi}定德秀，四柱天干见${parts.join('；')}`, '吉');
      }
    }

    // 天罗地网（主流地支口径）
    if(zhis.includes('戌') && zhis.includes('亥')){
      push('天罗地网', '四柱地支戌亥同见（天罗）', '凶');
    }else if(zhis.includes('辰') && zhis.includes('巳')){
      push('天罗地网', '四柱地支辰巳同见（地网）', '凶');
    }

    // 三奇贵人（简化：四柱天干按序出现）
    (function(){
      const seqGans = [pillars.yearGan, pillars.monthGan, pillars.dayGan, pillars.timeGan].filter(Boolean);
      function hasOrdered(seq){
        let j = 0;
        for(const g of seqGans){
          if(g === seq[j]) j++;
          if(j >= seq.length) return true;
        }
        return false;
      }
      const hit =
        hasOrdered(['甲','戊','庚']) ||
        hasOrdered(['壬','癸','辛']) ||
        hasOrdered(['乙','丙','丁']);
      if(hit){
        push('三奇贵人', '四柱天干见三奇顺序（简化判定）', '吉');
      }
    })();

    // 词馆（简化：以年干/日干对应之干支落柱）
    (function(){
      const CIGUAN_MAP = {
        '甲':'庚寅','乙':'辛卯','丙':'乙巳','丁':'戊午','戊':'丁巳',
        '己':'庚午','庚':'壬申','辛':'癸酉','壬':'癸亥','癸':'壬戌'
      };
      const keys = [pillars.yearGan, pillars.dayGan].filter(Boolean);
      for(const k of keys){
        const target = CIGUAN_MAP[k];
        if(target && pillarPairs.includes(target)){
          push('词馆', `以${k}为主，见${target}（未细校纳音一致）`, '吉');
          break;
        }
      }
    })();

    // 科甲星（提示型：文昌/文曲/学堂/词馆等同现）
    (function(){
      const nset = new Set(results.map(r => r.name));
      const acad = ['文昌贵人','文曲星','学堂','词馆'];
      const hitCount = acad.filter(n => nset.has(n)).length;
      if(hitCount >= 2){
        push('科甲星', '文昌/文曲/学堂/词馆等学业类神煞同现（提示型）', '吉');
      }
    })();
return results.filter(r => shouldIncludeAdultRule(r.name));
  }


  /* ===================== 小儿关煞（自动判定 · 试行） ===================== */
  
  function detectChildGuanSha(pillars){
    const results = [];
    const zhis = [pillars.yearZhi, pillars.monthZhi, pillars.dayZhi, pillars.timeZhi].filter(Boolean);
    const hourZhi = pillars.timeZhi;
    const dayGan = pillars.dayGan;
    const yearZhi = pillars.yearZhi;
    const monthZhi = pillars.monthZhi;
    const dayZhi = pillars.dayZhi;
    const nayinElem = pillars.yearNayinElement || '';
    const lunarMonthRaw = pillars.lunarMonthNum;
    const lunarMonth = (typeof lunarMonthRaw === 'number' && Number.isFinite(lunarMonthRaw))
      ? Math.abs(lunarMonthRaw)
      : null;

    function push(name, rule){
      results.push({ name, rule, luck: '凶' });
    }

    // 0) 辅助：季节（按农历月）
    function seasonByLunarMonth(lm){
      if(lm == null) return '';
      if(lm >= 1 && lm <= 3) return '春';
      if(lm >= 4 && lm <= 6) return '夏';
      if(lm >= 7 && lm <= 9) return '秋';
      if(lm >= 10 && lm <= 12) return '冬';
      return '';
    }

    // 1) 短命关：以“出生年/月地支所属三合组 + 时支”试行判定
    // 口诀：寅午戌龙当，巳酉丑虎亡，申子辰蛇上，亥卯未寻羊
    // 解释：寅午戌年月生辰时；巳酉丑年月生寅时；申子辰年月生巳时；亥卯未年月生未时
    if(hourZhi){
      const conds = [
        { group:'寅午戌', hours:['辰'] },
        { group:'巳酉丑', hours:['寅'] },
        { group:'申子辰', hours:['巳'] },
        { group:'亥卯未', hours:['未'] }
      ];
      conds.forEach(c => {
        const inGroup = (GROUPS[c.group] || []).includes(yearZhi) || (GROUPS[c.group] || []).includes(monthZhi);
        if(inGroup && c.hours.includes(hourZhi)){
          push('短命关', `${c.group}年月见${hourZhi}时`);
        }
      });
    }

    // 2) 四柱关：按农历月 + 时支
    if(lunarMonth != null && hourZhi){
      const map = {
        1:['巳','亥'], 7:['巳','亥'],
        2:['辰','戌'], 8:['辰','戌'],
        3:['卯','酉'], 9:['卯','酉'],
        4:['寅','申'], 10:['寅','申'],
        5:['丑','未'], 11:['丑','未'],
        6:['子','午'], 12:['子','午']
      };
      const targets = map[lunarMonth];
      if(targets && targets.includes(hourZhi)){
        push('四柱关', `农历${lunarMonth}月见${hourZhi}时`);
      }
    }

    // 3) 百日关：按“月支组 + 时支组”
    // 寅申巳亥月生于辰戌丑未时；子午卯酉月生于寅申巳亥时；辰戌丑未月生于子午卯酉时
    if(monthZhi && hourZhi){
      const map = [
        { months:['寅','申','巳','亥'], hours:['辰','戌','丑','未'] },
        { months:['子','午','卯','酉'], hours:['寅','申','巳','亥'] },
        { months:['辰','戌','丑','未'], hours:['子','午','卯','酉'] }
      ];
      map.forEach(m=>{
        if(m.months.includes(monthZhi) && m.hours.includes(hourZhi)){
          push('百日关', `月支${monthZhi}见${hourZhi}时`);
        }
      });
    }

    // 4) 阎王关：按季节（农历月）+ 时支
    if(lunarMonth != null && hourZhi){
      const s = seasonByLunarMonth(lunarMonth);
      const map = {
        '春':['丑','未'],
        '夏':['辰','戌'],
        '秋':['子','午'],
        '冬':['酉','卯']
      };
      const targets = map[s] || [];
      if(targets.includes(hourZhi)){
        push('阎王关', `${s}生见${hourZhi}时`);
      }
    }

    // 5) 将军箭：按季节（农历月）+ 时支
    if(lunarMonth != null && hourZhi){
      const s = seasonByLunarMonth(lunarMonth);
      const map = {
        '春':['酉','戌','辰'],
        '夏':['未','卯','子'],
        '秋':['寅','午','丑'],
        '冬':['亥','申','巳']
      };
      const targets = map[s] || [];
      if(targets.includes(hourZhi)){
        push('将军箭', `${s}生见${hourZhi}时`);
      }
    }

    // 6) 铁蛇关：按年柱纳音五行 + 时支
    // 金命戌时；火命未时；木命辰时；水/土命丑时
    if(nayinElem && hourZhi){
      const map = {
        '金':['戌'],
        '火':['未'],
        '木':['辰'],
        '水':['丑'],
        '土':['丑']
      };
      const targets = map[nayinElem] || [];
      if(targets.includes(hourZhi)){
        push('铁蛇关', `年柱纳音${nayinElem}见${hourZhi}时`);
      }
    }

    // 7) 雷公打脑关：按日干 + 时支
    if(dayGan && hourZhi){
      const map = {
        '甲':['丑'],
        '乙':['午'],
        '丙':['子'],
        '丁':['子'],
        '戊':['戌'],
        '己':['戌'],
        '庚':['寅'],
        '辛':['寅'],
        '壬':['酉'],
        '癸':['亥']
      };
      const hrs = map[dayGan];
      if(hrs && hrs.includes(hourZhi)){
        push('雷公打脑关', `日干${dayGan}见${hourZhi}时`);
      }
    }

    // 8) 金锁关：按农历月 + 时支
    if(lunarMonth != null && hourZhi){
      const map = {
        1:'申', 7:'申',
        2:'酉', 8:'酉',
        3:'戌', 9:'戌',
        4:'亥', 10:'亥',
        5:'子', 11:'子',
        6:'丑', 12:'丑'
      };
      const target = map[lunarMonth];
      if(target && hourZhi === target){
        push('金锁关', `农历${lunarMonth}月见${hourZhi}时`);
      }
    }

    // 9) 无情关：按季节（农历月）+ 时支
    if(lunarMonth != null && hourZhi){
      const s = seasonByLunarMonth(lunarMonth);
      const map = {
        '春':['寅','酉','子'],
        '夏':['戌','亥','巳'],
        '秋':['申','丑'],
        '冬':['子','午']
      };
      const targets = map[s] || [];
      if(targets.includes(hourZhi)){
        push('无情关', `${s}生见${hourZhi}时`);
      }
    }

    // 10) 汤火煞（烫火关）：以年支或日支对照时辰
    if(hourZhi){
      const groups = [
        { zhis:['子','午','卯','酉'], target:'午' },
        { zhis:['寅','申','巳','亥'], target:'寅' },
        { zhis:['辰','戌','丑','未'], target:'未' }
      ];
      groups.forEach(g=>{
        const hitZhi = (g.zhis.includes(yearZhi) || g.zhis.includes(dayZhi));
        if(hitZhi && hourZhi === g.target){
          push('汤火煞（烫火关）', `年/日支组见${hourZhi}时`);
        }
      });
    }

    // 11) 鬼门关：按年支组 + 时支
    if(yearZhi && hourZhi){
      const map = [
        { years:['子','丑','寅'], hours:['酉','午','未'] },
        { years:['卯','辰','巳'], hours:['申','戌','亥'] },
        { years:['午','未','申'], hours:['丑','寅','卯'] },
        { years:['酉','戌','亥'], hours:['子','辰','巳'] }
      ];
      map.forEach(m=>{
        if(m.years.includes(yearZhi) && m.hours.includes(hourZhi)){
          push('鬼门关', `年支${yearZhi}见${hourZhi}时`);
        }
      });
    }

    // 12) 深水关：按季节（农历月）+ 时支
    if(lunarMonth != null && hourZhi){
      const s = seasonByLunarMonth(lunarMonth);
      const map = { '春':'寅', '夏':'未', '秋':'酉', '冬':'丑' };
      const target = map[s];
      if(target && hourZhi === target){
        push('深水关', `${s}生见${hourZhi}时`);
      }
    }

    // 13) 浴盆关：按季节（农历月）+ 时支
    if(lunarMonth != null && hourZhi){
      const s = seasonByLunarMonth(lunarMonth);
      const map = { '春':'辰', '夏':'未', '秋':'戌', '冬':'丑' };
      const target = map[s];
      if(target && hourZhi === target){
        push('浴盆关', `${s}生见${hourZhi}时`);
      }
    }

    // 14) 白虎关：按年柱纳音五行 + 时支
    // 火命子时；金命卯时；水/土命午时；木命酉时
    if(nayinElem && hourZhi){
      const map = {
        '火':'子',
        '金':'卯',
        '水':'午',
        '土':'午',
        '木':'酉'
      };
      const target = map[nayinElem];
      if(target && hourZhi === target){
        push('白虎关', `年柱纳音${nayinElem}见${hourZhi}时`);
      }
    }

    // 15) 五鬼关：按年支 + 对应地支是否出现在四柱
    if(yearZhi){
      const map = {
        '子':'辰','丑':'巳','寅':'午','卯':'未',
        '辰':'申','巳':'酉','午':'戌','未':'亥',
        '申':'子','酉':'丑','戌':'寅','亥':'卯'
      };
      const target = map[yearZhi];
      if(target && zhis.includes(target)){
        push('五鬼关', `年支${yearZhi}见${target}`);
      }
    }

    // 16) 天狗关：按年支 + 对应地支是否出现在四柱
    if(yearZhi){
      const map = {
        '子':'戌','丑':'亥','寅':'子','卯':'丑',
        '辰':'寅','巳':'卯','午':'辰','未':'巳',
        '申':'午','酉':'未','戌':'申','亥':'酉'
      };
      const target = map[yearZhi];
      if(target && zhis.includes(target)){
        push('天狗关', `年支${yearZhi}见${target}`);
      }
    }

    // 17) 断桥关：按农历月 + 时支
    if(lunarMonth != null && hourZhi){
      const map = {
        1:'寅', 2:'卯', 3:'申', 4:'丑', 5:'戌', 6:'酉',
        7:'巳', 8:'亥', 9:'午', 10:'未', 11:'亥', 12:'子'
      };
      const target = map[lunarMonth];
      if(target && hourZhi === target){
        push('断桥关', `农历${lunarMonth}月见${hourZhi}时`);
      }
    }

    return results;
  }


  function findGroupByYearDayZhi(yearZhi, dayZhi){
    const base = dayZhi || yearZhi;
    for(const k of Object.keys(GROUPS)){
      if(GROUPS[k].includes(base)) return k;
    }
    return null;
  }

  function detectGroupShenSha(pillars){
    const zhis = [pillars.yearZhi, pillars.monthZhi, pillars.dayZhi, pillars.timeZhi].filter(Boolean);
    const groupKey = findGroupByYearDayZhi(pillars.yearZhi, pillars.dayZhi);

    const results = [];

    function pushIf(name, targetZhi, luck){
      if(!targetZhi) return;
      if(zhis.includes(targetZhi)){
        results.push({ name, target: targetZhi, luck });
      }
    }

    if(groupKey){
      pushIf('桃花', TAOHUA_MAP[groupKey], '中性偏动');
      // 咸池多与桃花同法，单独列出便于学习与检索
      pushIf('咸池', TAOHUA_MAP[groupKey], '中性');

      pushIf('驿马', YIMA_MAP[groupKey], '动');
      pushIf('华盖', HUAGAI_MAP[groupKey], '中性');
      pushIf('将星', JIANGXING_MAP[groupKey], '吉');

      // 以年/日支三合局为主的凶煞
      pushIf('亡神', WANGSHEN_MAP[groupKey], '凶');
      pushIf('六厄煞', LIUE_MAP[groupKey], '凶');
      pushIf('灾煞', ZAISHA_MAP[groupKey], '凶');
      pushIf('劫煞', JIESHA_MAP[groupKey], '凶');
      pushIf('白虎', BAIHU_MAP[groupKey], '凶');
    }

    return { groupKey, results };
  }

  // v11.7b: 自动命中依据小标签（用于学习辅助）
function inferHitTag(name, rule, kind){
  const r = (rule || '').toString();

  if(kind === 'group'){
    return '三合组';
  }

  if(name === '铁扫把' || r.includes('性别')){
    return '性别';
  }

  if(r.includes('纳音')){
    return '纳音+月';
  }

  if(r.includes('日干') && (r.includes('见') || r.includes('对应') || r.includes('对应地支'))){
    return '日干对支';
  }

  if(r.includes('农历') && (r.includes('时') || r.includes('时辰'))){
    return '月+时';
  }

  if(r.includes('季节') && (r.includes('时') || r.includes('时辰'))){
    return '季节+时';
  }

  if(r.includes('年支') && (r.includes('时') || r.includes('时辰'))){
    return '年支+时';
  }

  if(r.includes('日干') && (r.includes('时') || r.includes('时辰'))){
    return '日干+时';
  }

  return '';
}

function renderInlineShenSha(pillars){
    const { groupKey, results: groupResults } = detectGroupShenSha(pillars);
    const autoResults = detectAutoShenSha(pillars);
    const childResults = detectChildGuanSha(pillars);

    const parts = [];
    if(groupKey){
      parts.push(`组别参考：<b style="color:var(--accent-2)">${groupKey}</b>`);
    }else{
      parts.push('未识别地支三合组（不影响干支/日柱类神煞判定）。');
    }

    const badgeHtml = [];
const esc = (s)=> (s ?? '').toString()
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

if(groupResults && groupResults.length){
  groupResults.forEach(r => {
    const ruleStr = `见${r.target}`;
    const tag = inferHitTag(r.name, ruleStr, 'group');
    const tagHtml = tag ? ` <span class="ss-hit-tag">${tag}</span>` : '';
    badgeHtml.push(
      `<span class="ss-inline-badge" data-kind="group" data-name="${esc(r.name)}" data-rule="${esc(ruleStr)}" data-luck="${esc(r.luck || '')}" data-tag="${esc(tag || '')}">` +
      `${r.name}（见${r.target} · ${r.luck}）${tagHtml}</span>`
    );
  });
}

if(autoResults && autoResults.length){
  autoResults.forEach(r => {
    const ruleText = r.rule ? ` · ${r.rule}` : '';
    const tag = inferHitTag(r.name, r.rule || '', 'adult');
    const tagHtml = tag ? ` <span class="ss-hit-tag">${tag}</span>` : '';
    badgeHtml.push(
      `<span class="ss-inline-badge" data-kind="adult" data-name="${esc(r.name)}" data-rule="${esc(r.rule || '')}" data-luck="${esc(r.luck || '')}" data-tag="${esc(tag || '')}">` +
      `${r.name}${ruleText} · ${r.luck}${tagHtml}</span>`
    );
  });
}

if(childResults && childResults.length){
  childResults.forEach(r => {
    const ruleText = r.rule ? ` · ${r.rule}` : '';
    const tag = inferHitTag(r.name, r.rule || '', 'child');
    const tagHtml = tag ? ` <span class="ss-hit-tag">${tag}</span>` : '';
    badgeHtml.push(
      `<span class="ss-inline-badge child" data-kind="child" data-name="${esc(r.name)}" data-rule="${esc(r.rule || '')}" data-tag="${esc(tag || '')}">` +
      `${r.name}${ruleText}${tagHtml}</span>`
    );
  });
}

    if(!badgeHtml.length){
      els.ssInlineResult.innerHTML = `${parts.join('<br/>')}<br/>当前四柱未触发已内置的自动判定规则。`;
      return;
    }

    els.ssInlineResult.innerHTML = `${parts.join('<br/>')}<br/><div class="ss-inline-list">${badgeHtml.join('')}</div>`;
  }


  /* ===================== 对照盘


  /* ===================== 对照盘 ===================== */
  function calculatePayload(){
    const s = getSelectedSolarParts();
    const solar = Solar.fromYmdHms(s.y, s.m, s.d, s.h, s.min, 0);
    const lunar = solar.getLunar();
    const bazi = lunar.getEightChar();

    const yearGan = bazi.getYearGan();
    const yearZhi = bazi.getYearZhi();
    const monthGan = bazi.getMonthGan();
    const monthZhi = bazi.getMonthZhi();
    const dayGan = bazi.getDayGan();
    const dayZhi = bazi.getDayZhi();
    const timeGan = bazi.getTimeGan();
    const timeZhi = bazi.getTimeZhi();

    const lunarText =
      `农历：${lunar.getYearInGanZhi()}年 ` +
      `${lunar.getMonthInChinese()}月 ` +
      `${lunar.getDayInChinese()} ` +
      `${lunar.getTimeZhi()}时`;

    const solarText = `${solar.getYear()}-${pad2(solar.getMonth())}-${pad2(solar.getDay())} ${pad2(solar.getHour())}:${pad2(solar.getMinute ? solar.getMinute() : s.min)}`;

    const pillarGZ = {
      year: yearGan+yearZhi,
      month: monthGan+monthZhi,
      day: dayGan+dayZhi,
      time: timeGan+timeZhi
    };

    return {
      solar, lunar, bazi,
      solarParts: s,
      solarText, lunarText,
      pillars: { yearGan, yearZhi, monthGan, monthZhi, dayGan, dayZhi, timeGan, timeZhi,
                 lunarMonthNum: safeCall(lunar, 'getMonth'),
                 yearAnimal: safeCall(lunar, 'getYearShengXiao'),
                 yearNayin: nayinForGanZhi(yearGan + yearZhi),
                 yearNayinElement: (function(){ const ny = nayinForGanZhi(yearGan + yearZhi) || ''; const last = ny.slice(-1); return '金木水火土'.includes(last) ? last : ''; })(),
                 gender: genderForYun },
      pillarGZ,
      baziText: `${pillarGZ.year} ${pillarGZ.month} ${pillarGZ.day} ${pillarGZ.time}`
    };
  }

  function calculate(render=true){
    if(!ensureLunarLib()){
      alert('排盘库加载失败：请检查网络或稍后重试。');
      return null;
    }
    try{
      const data = calculatePayload();
      if(!render) return data;

      els.result.style.display = 'block';
      els.copyBtn.disabled = false;

      els.lunarInfo.textContent = data.lunarText;

      els.yearGan.textContent = data.pillars.yearGan;
      els.yearZhi.textContent = data.pillars.yearZhi;
      els.monthGan.textContent = data.pillars.monthGan;
      els.monthZhi.textContent = data.pillars.monthZhi;
      els.dayGan.textContent = data.pillars.dayGan;
      els.dayZhi.textContent = data.pillars.dayZhi;
      els.timeGan.textContent = data.pillars.timeGan;
      els.timeZhi.textContent = data.pillars.timeZhi;

      const dg = data.pillars.dayGan;
      els.yearSub.innerHTML = buildPillarSub(dg, data.pillars.yearGan, data.pillars.yearZhi);
      els.monthSub.innerHTML = buildPillarSub(dg, data.pillars.monthGan, data.pillars.monthZhi);
      els.daySub.innerHTML = buildPillarSub(dg, dg, data.pillars.dayZhi);
      els.timeSub.innerHTML = buildPillarSub(dg, data.pillars.timeGan, data.pillars.timeZhi);

      const date = new Date(data.solarParts.y, data.solarParts.m-1, data.solarParts.d, 12, 0, 0);
      renderJieQiSection(date);

      renderInlineShenSha(data.pillars);

      els.tzHint.textContent = `提示：排盘按设备本地时区计算（${getTZ()}）。`;

      const timeStr = els.minuteToggle.checked
        ? `${pad2(Number(els.hourRange.value))}:${pad2(Number(els.minuteRange.value || 0))}`
        : `${pad2(Number(els.hourRange.value))}:00`;

      const inputDesc = currentMode === MODE.SOLAR
        ? `输入（公历）：${Number(els.yearRange.value)}-${pad2(Number(els.monthRange.value))}-${pad2(Number(els.dayRange.value))} ${timeStr}`
        : `输入（农历）：${Number(els.yearRange.value)}年${Number(els.monthRange.value)}月${els.leapToggle.checked ? '（闰）' : ''}${Number(els.dayRange.value)}日 ${timeStr}`;

      calculate._lastCopy = [
        inputDesc,
        `换算公历：${data.solarText}`,
        data.lunarText,
        `八字：${data.baziText}`,
        `日主：${data.pillars.dayGan}`,
        '',
        '神煞（试行版）：',
        (detectGroupShenSha(data.pillars).results || []).map(r => `${r.name}（见${r.target}）`).join('、') || '—'
      ].join('\n');

      showToast('排盘完成');
      renderCompareIfPossible(null);
      return data;

    }catch(e){
      console.error(e);
      alert('计算失败：请检查日期是否有效（尤其农历闰月）。');
      return null;
    }
  }

  async function copyResult(){
    const text = calculate._lastCopy;
    if(!text){ showToast('还没有结果可复制'); return; }
    try{
      await navigator.clipboard.writeText(text);
      showToast('已复制');
    }catch{
      showToast('复制失败');
    }
  }

  function setAsA(){
    const data = calculate(false);
    if(!data){ showToast('A盘设置失败'); return; }
    compareA = {
      solarText: data.solarText,
      lunarText: data.lunarText,
      baziText: data.baziText,
      dayGan: data.pillars.dayGan
    };
    showToast('已设为 A 盘');
    renderCompareIfPossible(null);
  }

  function compareWithCurrentAsB(){
    if(!compareA){ showToast('先设一个 A 盘'); return; }
    const data = calculate(false);
    if(!data){ showToast('B盘生成失败'); return; }
    const compareB = {
      solarText: data.solarText,
      lunarText: data.lunarText,
      baziText: data.baziText,
      dayGan: data.pillars.dayGan
    };
    renderCompareIfPossible(compareB);
    showToast('对照已更新');
  }

  function renderCompareIfPossible(compareB){
    if(!compareA){
      els.compareBox.style.display = 'none';
      return;
    }

    els.compareBox.style.display = 'block';
    els.compareALine.textContent = compareA.baziText;
    els.compareAMeta.textContent = `${compareA.solarText}\n${compareA.lunarText}\n日主：${compareA.dayGan}`;

    if(compareB){
      els.compareBLine.textContent = compareB.baziText;
      els.compareBMeta.textContent = `${compareB.solarText}\n${compareB.lunarText}\n日主：${compareB.dayGan}`;
    }else{
      els.compareBLine.textContent = '—';
      els.compareBMeta.textContent = '等待你用当前时间生成 B 盘';
    }
  }

  function clearA(){
    compareA = null;
    els.compareBox.style.display = 'none';
    showToast('A盘已清空');
  }

  /* ===================== 旺衰喜用（简化） ===================== */
  function elementOfGan(gan){ return GAN_INFO[gan]?.e || ''; }
  function elementScoreInit(){ return { '木':0, '火':0, '土':0, '金':0, '水':0 }; }
  function addScore(map, e, v){ if(e) map[e] = (map[e] || 0) + v; }

  function scoreFromPillars(pillars){
    const stemW = 1.2;
    const branchMainW = 1.0;
    const monthBranchBonus = 1.6;

    const totals = elementScoreInit();
    const explainBits = [];

    ['yearGan','monthGan','dayGan','timeGan'].forEach(k=>{
      const gan = pillars[k];
      const e = elementOfGan(gan);
      addScore(totals, e, stemW);
    });

    function addBranch(zhi, weight, label){
      const hide = hiddenGansForZhi(zhi) || '';
      if(!hide){
        explainBits.push(`${label}${zhi}：无藏干信息（使用兜底）。`);
        return;
      }
      const eachW = weight / hide.length;
      hide.split('').forEach(g=>{
        addScore(totals, elementOfGan(g), eachW);
      });
    }

    addBranch(pillars.yearZhi, branchMainW, '年支');
    addBranch(pillars.dayZhi, branchMainW, '日支');
    addBranch(pillars.timeZhi, branchMainW, '时支');
    addBranch(pillars.monthZhi, branchMainW + monthBranchBonus, '月令');

    return { totals, explainBits, params: { stemW, branchMainW, monthBranchBonus } };
  }

  function dmStrengthJudge(pillars){
    const dayGan = pillars.dayGan;
    const dmE = elementOfGan(dayGan);

    const { totals, explainBits, params } = scoreFromPillars(pillars);

    const resourceE = GEN_PREV[dmE];
    const sameE = dmE;

    const support = (totals[sameE] || 0) + (totals[resourceE] || 0);
    const totalAll = Object.values(totals).reduce((a,b)=>a+b,0);

    const ratio = totalAll > 0 ? support / totalAll : 0.2;

    let level = '中和';
    if(ratio >= 0.46) level = '偏强';
    if(ratio >= 0.56) level = '身强';
    if(ratio <= 0.30) level = '偏弱';
    if(ratio <= 0.22) level = '身弱';

    const reason = [];
    reason.push(`日主：${dayGan}（${dmE}）`);
    reason.push(`同我(${sameE}) + 生我(${resourceE}) 之合计权重 / 五行总权重 ≈ ${(ratio*100).toFixed(1)}%`);
    reason.push(`权重：天干${params.stemW}；地支总权重${params.branchMainW}；月令额外+${params.monthBranchBonus}`);

    let favorable = [];
    let avoid = [];
    if(level === '身强' || level === '偏强'){
      favorable = [ GEN_NEXT[dmE], CONTROL[dmE] ];
      avoid = [ dmE, resourceE ];
    }else if(level === '身弱' || level === '偏弱'){
      favorable = [ dmE, resourceE ];
      avoid = [ CONTROLLED_BY[dmE], GEN_NEXT[dmE] ];
    }else{
      favorable = [ dmE, GEN_NEXT[dmE] ];
      avoid = [];
    }

    return {
      dmE, dayGan, totals, support, totalAll, ratio, level,
      favorable, avoid,
      explain: reason.concat(explainBits).join('\n')
    };
  }

  function renderWs(){
    const data = calculate(false);
    if(!data){ showToast('先在排盘页保证日期有效'); return; }

    const judge = dmStrengthJudge(data.pillars);

    const levelClass = (judge.level.includes('强')) ? 'ws-strong' :
                       (judge.level.includes('弱')) ? 'ws-weak' : 'ws-mid';

    const favText = judge.favorable.map(e => `${e}`).join(' / ');
    const avoidText = judge.avoid.length ? judge.avoid.join(' / ') : '—';

    const totalsLine = `五行权重（简化）：木${judge.totals['木'].toFixed(2)} · 火${judge.totals['火'].toFixed(2)} · 土${judge.totals['土'].toFixed(2)} · 金${judge.totals['金'].toFixed(2)} · 水${judge.totals['水'].toFixed(2)}`;

    els.wsConclusion.innerHTML = [
      `<span class="ws-badge ${levelClass}">判断：${judge.level}</span>`,
      `日主五行：<b style="color:var(--accent-2)">${judge.dmE}</b>`,
      `喜用倾向（简化）：<b style="color:var(--good)">${favText}</b>`,
      `忌向（简化）：<b style="color:var(--bad)">${avoidText}</b>`,
      totalsLine
    ].join('<br/>');

    els.wsExplain.textContent = judge.explain;

    els.wsResult.style.display = 'block';
    els.wsCopyBtn.disabled = false;

    renderWs._lastCopy = [
      `八字：${data.baziText}`,
      `日主：${judge.dayGan}（${judge.dmE}）`,
      `旺衰判断：${judge.level}`,
      `喜用倾向（简化）：${favText}`,
      `忌向（简化）：${avoidText}`,
      totalsLine,
      '',
      '解释：',
      judge.explain
    ].join('\n');

    showToast('旺衰/喜用已生成');
  }

  async function copyWs(){
    const text = renderWs._lastCopy;
    if(!text){ showToast('还没有旺衰说明'); return; }
    try{
      await navigator.clipboard.writeText(text);
      showToast('已复制');
    }catch{
      showToast('复制失败');
    }
  }

  /* ===================== 流年与大运 ===================== */
  function updateFlowYearVal(){
    els.flowYearVal.textContent = `${Number(els.flowYearRange.value)}`;
  }

  function buildFlowList(baseYear){
    const list = [];
    for(let y=baseYear-5; y<=baseYear+5; y++){
      try{
        const s = Solar.fromYmdHms(y, 6, 1, 12, 0, 0);
        const l = s.getLunar();
        const gz = l.getYearInGanZhi ? l.getYearInGanZhi() : (l.getYearInGanZhiExact ? l.getYearInGanZhiExact() : '');
        list.push({ year: y, gz: gz || '—', note: '' });
      }catch(e){
        list.push({ year: y, gz: '—', note: '' });
      }
    }
    return list;
  }

  function renderFlow(){
    if(!ensureLunarLib()){
      alert('排盘库加载失败：请检查网络。');
      return;
    }

    const baseYear = Number(els.flowYearRange.value);
    const flow = buildFlowList(baseYear);

    els.flowList.innerHTML = '';
    const frag = document.createDocumentFragment();
    const copyLines = [];

    flow.forEach(item=>{
      const div = document.createElement('div');
      div.className = 'luck-item';

      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = item.year;

      const gz = document.createElement('span');
      gz.className = 'gz';
      gz.textContent = item.gz;

      const meta = document.createElement('span');
      meta.className = 'meta';
      meta.textContent = '流年';

      div.appendChild(tag);
      div.appendChild(gz);
      div.appendChild(meta);
      frag.appendChild(div);

      copyLines.push(`${item.year}：${item.gz}`);
    });

    els.flowList.appendChild(frag);
    els.flowCopyBtn.disabled = false;
    renderFlow._lastCopy = `流年（${baseYear-5} - ${baseYear+5}）\n` + copyLines.join('\n');

    renderDayun();
    showToast('流年列表已生成');
  }

  async function copyFlow(){
    const text = renderFlow._lastCopy;
    if(!text){ showToast('还没有流年'); return; }
    try{
      await navigator.clipboard.writeText(text);
      showToast('已复制流年');
    }catch{
      showToast('复制失败');
    }
  }

  function renderDayun(){
    els.dayunList.innerHTML = '';
    els.dayunExplain.textContent = '';

    let data = null;
    try{ data = calculate(false); }catch(e){}

    if(!data){
      els.dayunHint.textContent = '请先确保“排盘”页可正常计算。';
      return;
    }

    const eightChar = data.bazi;

    if(!eightChar || typeof eightChar.getYun !== 'function'){
      els.dayunHint.textContent = '当前加载的 lunar-javascript 版本未暴露 getYun 接口，大运计算不可用（仅保留流年功能）。';
      return;
    }

    let yun = null;
    try{
      yun = eightChar.getYun.length >= 2 ? eightChar.getYun(genderForYun, 0) : eightChar.getYun(genderForYun);
    }catch(e){
      try{ yun = eightChar.getYun(genderForYun); }catch(e2){}
    }

    if(!yun){
      els.dayunHint.textContent = '大运对象生成失败（可能是库版本/参数差异）。';
      return;
    }

    const startAge = (typeof yun.getStartAge === 'function') ? yun.getStartAge() : null;
    const startYear = (typeof yun.getStartYear === 'function') ? yun.getStartYear() : null;

    const headerBits = [];
    if(startAge != null) headerBits.push(`起运年龄≈${startAge}`);
    if(startYear != null) headerBits.push(`起运年≈${startYear}`);
    els.dayunHint.textContent = headerBits.length ? `大运（库计算）：${headerBits.join(' · ')}` : `大运（库计算）：已生成但字段不可读。`;

    let daYunArr = null;
    const candidates = [
      ['getDaYun', 10],
      ['getDaYun', 8],
      ['getDaYun', undefined],
      ['getDaYunList', undefined],
      ['getDaYunArray', undefined]
    ];

    for(const [fnName, arg] of candidates){
      if(typeof yun[fnName] === 'function'){
        try{
          daYunArr = (arg === undefined) ? yun[fnName]() : yun[fnName](arg);
          if(daYunArr && daYunArr.length) break;
        }catch(e){}
      }
    }

    if(!daYunArr || !daYunArr.length){
      els.dayunExplain.textContent = '已拿到 Yun 对象，但未能从该版本库获取大运数组（方法名或签名可能不同）。';
      return;
    }

    const frag = document.createDocumentFragment();
    const lines = [];

    daYunArr.forEach((dy, idx)=>{
      let gz = '';
      let age = '';
      let year = '';

      try{
        if(dy.getGanZhi) gz = dy.getGanZhi();
      }catch(e){}

      try{
        if(dy.getStartAge && dy.getEndAge) age = `${dy.getStartAge()}-${dy.getEndAge()}`;
      }catch(e){}

      try{
        if(dy.getStartYear && dy.getEndYear) year = `${dy.getStartYear()}-${dy.getEndYear()}`;
      }catch(e){}

      const div = document.createElement('div');
      div.className = 'luck-item';

      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = `第${idx+1}运`;

      const gzSpan = document.createElement('span');
      gzSpan.className = 'gz';
      gzSpan.textContent = gz || '—';

      const meta = document.createElement('span');
      meta.className = 'meta';
      const metaBits = [];
      if(age) metaBits.push(`龄${age}`);
      if(year) metaBits.push(`年${year}`);
      meta.textContent = metaBits.join(' ') || '大运';

      div.appendChild(tag);
      div.appendChild(gzSpan);
      div.appendChild(meta);
      frag.appendChild(div);

      lines.push(`第${idx+1}运：${gz || '—'} ${meta.textContent ? '('+meta.textContent+')' : ''}`);
    });

    els.dayunList.appendChild(frag);
    els.dayunExplain.textContent = '提示：大运展示依赖库接口。若字段为空，多为 CDN 版本差异。';

    renderDayun._lastCopy = [
      `八字：${data.baziText}`,
      `性别参数（用于库大运）：${genderForYun ? '男' : '女'}`,
      els.dayunHint.textContent,
      ...lines
    ].join('\n');
  }

  /* ===================== 全年节气 ===================== */
  function updateJieqiYearVal(){
    els.jieqiYearVal.textContent = `${Number(els.jieqiYearRange.value)}`;
  }

  function collectJieqiForYear(year){
    const found = new Map();

    for(let day=1; day<=366; day++){
      const d = new Date(year, 0, day, 12, 0, 0);
      if(d.getFullYear() !== year) break;

      try{
        const s = Solar.fromYmdHms(d.getFullYear(), d.getMonth()+1, d.getDate(), 12, 0, 0);
        const name = jieQiNameForSolar(s);
        if(name && !found.has(name)){
          found.set(name, new Date(d.getTime()));
        }
      }catch(e){}
    }

    return JIEQI_ORDER.map(n => ({ name: n, date: found.get(n) || null }));
  }

  function renderJieqiList(year){
    if(!ensureLunarLib()){
      els.jieqiQueryHint.textContent = '节气库未加载成功，请检查网络。';
      return;
    }

    els.jieqiList.innerHTML = '';
    els.jieqiCopyBtn.disabled = true;
    els.jieqiQueryHint.textContent = '正在计算中…';

    const list = collectJieqiForYear(year);

    const frag = document.createDocumentFragment();
    const linesForCopy = [];

    list.forEach(item => {
      const div = document.createElement('div');
      div.className = 'jieqi-item';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'name';
      nameSpan.textContent = item.name;

      const dateSpan = document.createElement('span');
      dateSpan.className = 'date';
      if(item.date){
        const ds = fmtYMD(item.date);
        dateSpan.textContent = ds;
        linesForCopy.push(`${item.name}：${ds}`);
      }else{
        dateSpan.textContent = '—';
        linesForCopy.push(`${item.name}：—`);
      }

      div.appendChild(nameSpan);
      div.appendChild(dateSpan);
      frag.appendChild(div);
    });

    els.jieqiList.appendChild(frag);
    els.jieqiQueryHint.textContent = `已生成 ${year} 年二十四节气日期（按设备时区近似）。`;
    els.jieqiCopyBtn.disabled = false;
    renderJieqiList._lastCopy = `${year}年二十四节气\n` + linesForCopy.join('\n');
  }

  async function copyJieqiList(){
    const text = renderJieqiList._lastCopy;
    if(!text){ showToast('还没有列表可复制'); return; }
    try{
      await navigator.clipboard.writeText(text);
      showToast('节气列表已复制');
    }catch{
      showToast('复制失败');
    }
  }

  /* ===================== 黄历 / 万年历 ===================== */
  function setAlmanacDateInput(date){
    const y = date.getFullYear();
    const m = pad2(date.getMonth()+1);
    const d = pad2(date.getDate());
    els.almanacDate.value = `${y}-${m}-${d}`;
  }

  function safeCall(obj, fn){
    try{
      if(obj && typeof obj[fn] === 'function') return obj[fn]();
    }catch(e){}
    return null;
  }

  function renderAlmanac(){
    if(!ensureLunarLib()){
      alert('黄历库加载失败：请检查网络。');
      return;
    }
    if(!els.almanacDate.value){
      showToast('先选日期');
      return;
    }

    const [y,m,d] = els.almanacDate.value.split('-').map(Number);
    const solar = Solar.fromYmdHms(y, m, d, 12, 0, 0);
    const lunar = solar.getLunar();

    const dayGZ = safeCall(lunar, 'getDayInGanZhi') || safeCall(lunar, 'getDayInGanZhiExact') || '';
    const yearGZ = safeCall(lunar, 'getYearInGanZhi') || '';
    const monthGZ = safeCall(lunar, 'getMonthInGanZhi') || safeCall(lunar, 'getMonthInGanZhiExact') || '';

    const animal = safeCall(lunar, 'getYearShengXiao') || '';
    const lunarText = `农历：${lunar.getYearInGanZhi ? lunar.getYearInGanZhi() : yearGZ}年 ${lunar.getMonthInChinese ? lunar.getMonthInChinese() : ''}月 ${lunar.getDayInChinese ? lunar.getDayInChinese() : ''}`;

    const chong = safeCall(lunar, 'getDayChong') || '';
    const sha = safeCall(lunar, 'getDaySha') || safeCall(lunar, 'getDayChongSha') || '';
    const jiShen = safeCall(lunar, 'getDayJiShen') || '';
    const xiongSha = safeCall(lunar, 'getDayXiongSha') || '';
    const zhiShen = safeCall(lunar, 'getDayZhiShen') || '';

    let jieqi = '';
    try{ jieqi = jieQiNameForSolar(solar) || ''; }catch(e){}

    const kvLines = [];
    kvLines.push(`公历：<b>${fmtYMD(new Date(y, m-1, d))}</b>`);
    kvLines.push(`${lunarText}`);
    if(animal) kvLines.push(`生肖：<b>${animal}</b>`);
    if(yearGZ) kvLines.push(`年干支：<b>${yearGZ}</b>`);
    if(monthGZ) kvLines.push(`月干支：<b>${monthGZ}</b>`);
    if(dayGZ) kvLines.push(`日干支：<b>${dayGZ}</b>`);
    if(jieqi) kvLines.push(`节气点：<b>${jieqi}</b>`);

    if(chong) kvLines.push(`日冲：<b>${chong}</b>`);
    if(sha) kvLines.push(`冲煞：<b>${sha}</b>`);
    if(zhiShen) kvLines.push(`值神：<b>${zhiShen}</b>`);
    if(jiShen) kvLines.push(`吉神：<b class="badge-good">${jiShen}</b>`);
    if(xiongSha) kvLines.push(`凶煞：<b class="badge-bad">${xiongSha}</b>`);

    els.almanacKV.innerHTML = kvLines.join('<br/>');
    els.almanacResult.style.display = 'block';

    const yi = safeCall(lunar, 'getDayYi');
    const ji = safeCall(lunar, 'getDayJi');

    const yiArr = Array.isArray(yi) ? yi : (yi ? String(yi).split(',') : []);
    const jiArr = Array.isArray(ji) ? ji : (ji ? String(ji).split(',') : []);

    const yiJiLines = [];
    if(yiArr.length) yiJiLines.push(`宜：<b class="badge-good">${yiArr.join('、')}</b>`);
    if(jiArr.length) yiJiLines.push(`忌：<b class="badge-bad">${jiArr.join('、')}</b>`);

    if(yiJiLines.length){
      els.almanacYiJi.innerHTML = yiJiLines.join('<br/>');
      els.almanacYiJiSec.style.display = 'block';
    }else{
      els.almanacYiJiSec.style.display = 'none';
    }

    els.almanacCopyBtn.disabled = false;
    renderAlmanac._lastCopy = [
      `黄历（${fmtYMD(new Date(y, m-1, d))}）`,
      lunarText,
      yearGZ ? `年干支：${yearGZ}` : '',
      monthGZ ? `月干支：${monthGZ}` : '',
      dayGZ ? `日干支：${dayGZ}` : '',
      animal ? `生肖：${animal}` : '',
      jieqi ? `节气：${jieqi}` : '',
      chong ? `日冲：${chong}` : '',
      sha ? `冲煞：${sha}` : '',
      zhiShen ? `值神：${zhiShen}` : '',
      jiShen ? `吉神：${jiShen}` : '',
      xiongSha ? `凶煞：${xiongSha}` : '',
      yiArr.length ? `宜：${yiArr.join('、')}` : '',
      jiArr.length ? `忌：${jiArr.join('、')}` : ''
    ].filter(Boolean).join('\n');

    showToast('黄历已更新');
  }

  async function copyAlmanac(){
    const text = renderAlmanac._lastCopy;
    if(!text){ showToast('还没有黄历内容'); return; }
    try{
      await navigator.clipboard.writeText(text);
      showToast('黄历已复制');
    }catch{
      showToast('复制失败');
    }
  }

  /* 神煞数据已拆分至独立的 data.js，仅保留逻辑在 app.js 中使用 SHENSHA_DATA */



  let ssFilter = 'all';
  let ssListExpanded = false;

  function ssLuckClass(luck){
    if(!luck) return 'neutral';
    if(luck.includes('吉')) return 'good';
    if(luck.includes('凶') || luck.includes('偏凶')) return 'bad';
    if(luck.includes('中性')) return 'neutral';
    return 'neutral';
  }

  function renderShenShaList(){
    const kw = (els.ssSearch.value || '').trim().toLowerCase();

    let data = SHENSHA_DATA.slice();

    if(ssFilter === 'common'){
      data = data.filter(x => x.group === '常用');
    }else if(ssFilter === 'child'){
      data = data.filter(x => x.group === '小儿关煞');
    }

    if(kw){
      data = data.filter(x =>
        (x.name || '').toLowerCase().includes(kw) ||
        (x.method || '').toLowerCase().includes(kw) ||
        (x.effect || '').toLowerCase().includes(kw) ||
        (x.note || '').toLowerCase().includes(kw)
      );
    }

    els.ssList.innerHTML = '';
    const frag = document.createDocumentFragment();

    data.forEach(item=>{
      const div = document.createElement('div');
      div.className = 'ss-item';

      const head = document.createElement('div');
      head.className = 'ss-head';

      const name = document.createElement('span');
      name.className = 'ss-name';
      name.textContent = item.name;

      const tag1 = document.createElement('span');
      tag1.className = 'ss-tag';
      tag1.textContent = item.group;

      const tag2 = document.createElement('span');
      tag2.className = 'ss-tag ' + ssLuckClass(item.luck);
      tag2.textContent = item.luck || '—';

      head.appendChild(name);
      head.appendChild(tag1);
      head.appendChild(tag2);

      const body = document.createElement('div');
      body.className = 'ss-body';
      body.textContent =
        `查法：${item.method || '—'}\n` +
        `作用：${item.effect || '—'}\n` +
        (item.note ? `备注：${item.note}` : '');

      div.appendChild(head);
      div.appendChild(body);
      frag.appendChild(div);
    });

    els.ssList.appendChild(frag);

    renderShenShaList._lastCopy = data.map(x =>
      `${x.name}【${x.group}｜${x.luck || '—'}】\n查法：${x.method || '—'}\n作用：${x.effect || '—'}\n${x.note ? '备注：'+x.note : ''}`
    ).join('\n\n');
    renderShenShaList._renderedOnce = true;
  }

  function updateSsListVisibility(){
    if(!els.ssList) return;
    const btn = els.ssToggleBtn;
    if(ssListExpanded){
      els.ssList.classList.remove('ss-collapsed');
      if(btn) btn.textContent = '收起列表';
    }else{
      els.ssList.classList.add('ss-collapsed');
      if(btn) btn.textContent = '展开列表';
    }
  }

  function ensureSsToggleSetup(){
    if(ensureSsToggleSetup._bound) return;
    ensureSsToggleSetup._bound = true;
    const panel = els.panelShenSha;
    const actions = els.ssCopyListBtn ? els.ssCopyListBtn.parentElement : null;
    if(!panel || !actions) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn secondary';
    btn.id = 'ssToggleBtn';
    btn.textContent = '展开列表';
    els.ssToggleBtn = btn;
    actions.insertBefore(btn, actions.firstChild);
    btn.addEventListener('click', ()=>{
      ssListExpanded = !ssListExpanded;
      if(ssListExpanded && !renderShenShaList._renderedOnce){
        renderShenShaList();
      }
      updateSsListVisibility();
    });
    // 默认收起
    ssListExpanded = false;
    updateSsListVisibility();
  }


  async function copyShenShaList(){
    const text = renderShenShaList._lastCopy || '';
    if(!text){ showToast('列表为空'); return; }
    try{
      await navigator.clipboard.writeText(text);
      showToast('已复制神煞列表');
    }catch{
      showToast('复制失败');
    }
  }

  function toggleRuleExplain(){
    const show = els.ssRuleExplain.style.display === 'none';
    els.ssRuleExplain.style.display = show ? 'block' : 'none';
  }

  function buildSsRuleText(){
    const lines = [];
    lines.push('我们在排盘页先做“地支三合组”相对统一的四个神煞自动判定：');
    lines.push('1) 桃花：申子辰见酉；巳酉丑见午；寅午戌见卯；亥卯未见子。');
    lines.push('2) 驿马：申子辰见寅；寅午戌见申；亥卯未见巳；巳酉丑见亥。');
    lines.push('3) 华盖：申子辰见辰；寅午戌见戌；亥卯未见未；巳酉丑见丑。');
    lines.push('4) 将星：申子辰见子；寅午戌见午；亥卯未见卯；巳酉丑见酉。');
    lines.push('');
    lines.push('判定基准：优先用“日支”所属三合组；日支缺失则参考年支。');
    lines.push('满足条件：四柱任一地支出现目标支，即提示该神煞。');
    lines.push('');
    lines.push('这套属于“先让你能用、能对照、能扩展”的试行版。');
    lines.push('');
    lines.push('v10.6 起，排盘页同步加入部分“小儿关煞”的自动提示（基于农历月/日干/时支等条件）。');
    lines.push('v11.2 起，成人神煞自动判定范围继续扩展；“未自动化清单”以当前学习表为基准动态生成。');
    return lines.join('\\n');
  }

  /* ===================== UI 同步 ===================== */
  function syncValueText(){
    const y = Number(els.yearRange.value);
    const m = Number(els.monthRange.value);
    const d = Number(els.dayRange.value);
    const h = Number(els.hourRange.value);
    const min = Number(els.minuteRange.value || 0);
    const isLeap = !!els.leapToggle.checked;

    // v11.13a: 农历模式下在年份显示干支
if(currentMode === MODE.LUNAR){
  let ygz = '';
  try{
    const lunarTmp = createLunarFromSliders();
    if(lunarTmp && typeof lunarTmp.getYearInGanZhi === 'function'){
      ygz = lunarTmp.getYearInGanZhi();
    }
  }catch(e){}
  els.yearVal.textContent = ygz ? `${y}（${ygz}）` : `${y}`;
}else{
  els.yearVal.textContent = `${y}`;
}


let lunarTmpForDisplay = null;
let mgz = '', dgz = '', tgz = '';
if(currentMode === MODE.LUNAR){
  try{
    lunarTmpForDisplay = createLunarFromSliders();
  }catch(e){}
  if(lunarTmpForDisplay){
    mgz = safeCall(lunarTmpForDisplay, 'getMonthInGanZhi') || safeCall(lunarTmpForDisplay, 'getMonthInGanZhiExact') || '';
    dgz = safeCall(lunarTmpForDisplay, 'getDayInGanZhi') || safeCall(lunarTmpForDisplay, 'getDayInGanZhiExact') || '';
    // 部分库版本可能没有“时干支”接口，先尝试直取；失败再用公历回推
    tgz = safeCall(lunarTmpForDisplay, 'getTimeInGanZhi') || safeCall(lunarTmpForDisplay, 'getTimeInGanZhiExact') || '';
    if(!tgz){
      try{
        const solarTmp = lunarTmpForDisplay.getSolar ? lunarTmpForDisplay.getSolar() : null;
        if(solarTmp && typeof Solar !== 'undefined'){
          const solarObj = Solar.fromYmdHms(
            solarTmp.getYear(), solarTmp.getMonth(), solarTmp.getDay(),
            h, min, 0
          );
          const lunar2 = solarObj.getLunar();
          tgz = safeCall(lunar2, 'getTimeInGanZhi') || safeCall(lunar2, 'getTimeInGanZhiExact') || '';
        }
      }catch(e){}
    }
  }
}

els.monthVal.textContent = `${pad2(m)}${currentMode === MODE.LUNAR && isLeap ? '（闰）' : ''}${mgz ? `（${mgz}）` : ''}`;
els.dayVal.textContent = `${pad2(d)}${dgz ? `（${dgz}）` : ''}`;
els.hourVal.textContent = `${pad2(h)}:00${tgz ? `（${tgz}）` : ''}`;
els.minuteVal.textContent = `${pad2(min)}`;
const timeStr = els.minuteToggle.checked ? `${pad2(h)}:${pad2(min)}` : `${pad2(h)}:00`;

    if(currentMode === MODE.SOLAR){
      els.pickedText.textContent = `当前选择（公历）：${y}-${pad2(m)}-${pad2(d)} ${timeStr}（${getTZ()}）`;
    }else{
      els.pickedText.textContent = `当前选择（农历）：${y}年${m}月${isLeap ? '（闰）' : ''}${d}日 ${timeStr}`;
    }

    els.crossText.textContent = '';
    if(!ensureLunarLib()) return;

    try{
      if(currentMode === MODE.SOLAR){
        const solar = Solar.fromYmdHms(y, m, d, h, min, 0);
        const lunar = solar.getLunar();
        els.crossText.textContent =
          `对应农历：${lunar.getYearInGanZhi()}年 ${lunar.getMonthInChinese()}月 ${lunar.getDayInChinese()} ${lunar.getTimeZhi()}时`;
      }else{
        const lunar = createLunarFromSliders();
        if(lunar){
          const solar = lunar.getSolar();
          els.crossText.textContent =
            `对应公历：${solar.getYear()}-${pad2(solar.getMonth())}-${pad2(solar.getDay())} ${pad2(solar.getHour())}:${pad2(solar.getMinute ? solar.getMinute() : min)}`;
        }
      }
    }catch(e){}
  }

  function updateMinuteUI(){
    const on = !!els.minuteToggle.checked;
    els.minuteRow.style.display = on ? 'grid' : 'none';
    syncValueText();
  }

  function wireRange(rangeEl, onChange){
    rangeEl.addEventListener('input', onChange);
    rangeEl.addEventListener('change', onChange);
  }

  function applyPresetSolar(p){
    if(currentMode === MODE.SOLAR){
      setFromSolarParts(p);
    }else{
      setFromSolarParts(p);
      convertSolarSlidersToLunarSliders();
    }
    updateDayRange();
    syncValueText();
  }

  /* ===================== Tab/子模式 ===================== */
  function switchTab(which){
    if(which === 'name' && typeof setupNameModule === 'function'){ setupNameModule(); }
    const map = {
      bazi: [els.tabBazi, els.panelBazi],
      jieqi: [els.tabJieqi, els.panelJieqi],
      luck: [els.tabLuck, els.panelLuck],
      almanac: [els.tabAlmanac, els.panelAlmanac],
      shensha: [els.tabShenSha, els.panelShenSha],
      name: [els.tabName, els.panelName]
    };

    Object.keys(map).forEach(k=>{
      const [btn, panel] = map[k];
      btn.classList.toggle('active', k === which);
      panel.classList.toggle('active', k === which);
    });

    if(which === 'shensha'){
      renderShenShaList();
    }
  }

  function switchLuckMode(which){
    const isWs = which === 'ws';
    els.luckWsPill.classList.toggle('active', isWs);
    els.luckFlowPill.classList.toggle('active', !isWs);
    els.wsBox.classList.toggle('active', isWs);
    els.flowBox.classList.toggle('active', !isWs);
  }

  function setGenderUI(isMale){
     genderForYun = isMale ? 1 : 0;

     if(els.maleBtn) els.maleBtn.classList.toggle('active', isMale);
     if(els.femaleBtn) els.femaleBtn.classList.toggle('active', !isMale);

     if(els.pickMaleBtn) els.pickMaleBtn.classList.toggle('active', isMale);
     if(els.pickFemaleBtn) els.pickFemaleBtn.classList.toggle('active', !isMale);

     // 重新渲染大运（若当前模块可见）
     renderDayun();

     // 重新计算排盘页，让依赖性别的判定同步（如铁扫把、埋儿煞提示）
     try{ calculate(true); }catch(e){}
   }

  /* ===================== 初始化 ===================== */

  // v10.6: 当前已内置的自动判定名录（用于展示“未自动化清单”）
  const ADULT_AUTO_NAMES = ['桃花', '驿马', '华盖', '将星', '文昌贵人', '天乙贵人', '国印贵人', '太极贵人', '禄神', '羊刃', '飞刃', '血刃', '红鸾', '天喜', '六合', '魁罡', '十恶大败', '孤鸾煞', '阴阳差错', '地扫星', '八败', '流霞煞', '铁板煞', '铁扫把', '埋儿煞', '福德贵人', '福星贵人', '金舆贵人', '喜神', '红艳煞', '咸池', '亡神', '六厄煞', '灾煞', '劫煞', '白虎', '截路空亡', '天厨贵人', '孤辰', '寡宿', '学堂', '词馆', '文曲星', '科甲星', '三奇贵人', '天德贵人', '月德贵人', '天德合', '月德合', '德秀贵人', '天罗地网'];
  const CHILD_AUTO_NAMES = ['短命关', '四柱关', '雷公打脑关', '金锁关', '无情关', '五鬼关', '天狗关', '断桥关', '百日关', '阎王关', '将军箭', '铁蛇关', '汤火煞（烫火关）', '鬼门关', '深水关', '浴盆关', '白虎关'];

// v11.7b: 看板同步安全升级（统一维护自动化名录）
const AUTO_COVERED_NAMES = new Set(ADULT_AUTO_NAMES);
const CHILD_COVERED_NAMES = new Set(CHILD_AUTO_NAMES);

function getAdultAutoNames(){ return ADULT_AUTO_NAMES.slice(); }
function getChildAutoNames(){ return CHILD_AUTO_NAMES.slice(); }


function initMissingShenshaList(){
    const box = document.getElementById('ssMissingBox');
    const list = document.getElementById('ssMissingList');
    if(!box || !list) return;
    try{
      const adults = (SHENSHA_DATA || []).filter(x => String(x.id||'').startsWith('adult_'));
      const missing = adults.filter(x => x.group !== '小儿关煞' && !AUTO_COVERED_NAMES.has(x.name));
      if(!missing.length){
        list.innerHTML = '<span class="ss-miss-badge">已全部覆盖（当前学习表范围内）</span>';
        return;
      }
      list.innerHTML = missing.map(x => `<span class="ss-miss-badge">${x.name}</span>`).join('');
    }catch(e){
      list.innerHTML = '<span class="ss-miss-badge">清单生成失败</span>';
    }
  }


  // v11.0: 小儿关煞已内置自动提示名录（用于展示“未自动化清单”）
// v11.7b: 自动规则注册表（安全版）
  // 先以现有“已覆盖名录”为源头生成注册表，避免影响排盘选择器等稳定逻辑
  const AUTO_RULES_REGISTRY = [
    ...Array.from(AUTO_COVERED_NAMES).map(name => ({name, type:'adult'})),
    ...Array.from(CHILD_COVERED_NAMES).map(name => ({name, type:'child'}))
  ];
  
  // v11.7b: 成人神煞判定强度（仅影响显示/提示，不改变基础计算）
  let ADULT_RULE_STRENGTH = (localStorage.getItem('adultRuleStrength') || 'balanced');
  const ADULT_TRIAL_NAMES = new Set(['学堂','词馆','科甲星','三奇贵人']);
  
  function shouldIncludeAdultRule(name){
    if(ADULT_RULE_STRENGTH === 'strict'){
      return !ADULT_TRIAL_NAMES.has(name);
    }
    return true; // balanced / loose
  }
  
  function setAdultRuleStrength(level){
    ADULT_RULE_STRENGTH = level;
    try{ localStorage.setItem('adultRuleStrength', level); }catch(e){}
    ['pickStrictBtn','pickBalancedBtn','pickLooseBtn'].forEach(id=>{
      const el = document.getElementById(id);
      if(!el) return;
      el.classList.toggle('active', el.dataset.level === level);
    });
  }
  
  function initAdultRuleStrengthUI(){
    const btns = [
      document.getElementById('pickStrictBtn'),
      document.getElementById('pickBalancedBtn'),
      document.getElementById('pickLooseBtn')
    ].filter(Boolean);
    btns.forEach(b=>{
      b.addEventListener('click', ()=>{
        setAdultRuleStrength(b.dataset.level);
        try{ calculate(false); }catch(e){}
      });
    });
    setAdultRuleStrength(ADULT_RULE_STRENGTH);
  }
function initMissingChildGuanShaList(){
    const box = document.getElementById('cgMissingBox');
    const list = document.getElementById('cgMissingList');
    if(!box || !list) return;
    try{
      const childs = (SHENSHA_DATA || []).filter(x => String(x.id||'').startsWith('child_'));
      const missing = childs.filter(x => !CHILD_COVERED_NAMES.has(x.name));
      if(!missing.length){
        list.innerHTML = '<span class="ss-miss-badge">已全部覆盖（当前学习表范围内）</span>';
        return;
      }
      list.innerHTML = missing.map(x => `<span class="ss-miss-badge">${x.name}</span>`).join('');
    }catch(e){
      list.innerHTML = '<span class="ss-miss-badge">清单生成失败</span>';
    }
  }

  function init(){
    setRangesBounds();
    setActiveModePill();
    updateLabels();

    els.minuteToggle.checked = false;
    updateMinuteUI();

    setFromDate(new Date());
    setActiveQuickPill('now');

    wireRange(els.yearRange, () => { updateDayRange(); syncValueText(); setActiveQuickPill(null); });
    wireRange(els.monthRange, () => { updateDayRange(); syncValueText(); setActiveQuickPill(null); });
    wireRange(els.dayRange, () => { syncValueText(); setActiveQuickPill(null); });
    wireRange(els.hourRange, () => { syncValueText(); setActiveQuickPill(null); });
    wireRange(els.minuteRange, () => { syncValueText(); setActiveQuickPill(null); });

    els.leapToggle.addEventListener('change', () => {
      updateDayRange();
      syncValueText();
      setActiveQuickPill(null);
    });

    els.minuteToggle.addEventListener('change', updateMinuteUI);

    els.solarModeBtn.addEventListener('click', () => switchMode(MODE.SOLAR));
    els.lunarModeBtn.addEventListener('click', () => switchMode(MODE.LUNAR));

    els.nowPill.addEventListener('click', () => {
      setFromDate(new Date());
      if(currentMode === MODE.LUNAR) convertSolarSlidersToLunarSliders();
      setActiveQuickPill('now');
      updateDayRange();
      syncValueText();
    });
    els.linxiPill.addEventListener('click', () => {
      applyPresetSolar(PRESETS_SOLAR.linxi);
      setActiveQuickPill('linxi');
    });
    els.yaoPill.addEventListener('click', () => {
      applyPresetSolar(PRESETS_SOLAR.yao);
      setActiveQuickPill('yao');
    });

    els.calcBtn.addEventListener('click', () => calculate(true));
    els.copyBtn.addEventListener('click', copyResult);

    els.setABtn.addEventListener('click', setAsA);
    els.compareBtn.addEventListener('click', compareWithCurrentAsB);
    if(els.clearCompareBtn){
      els.clearCompareBtn.addEventListener('click', clearA);
    }

    /* Tabs */
    els.tabBazi.addEventListener('click', () => switchTab('bazi'));
    els.tabJieqi.addEventListener('click', () => switchTab('jieqi'));
    els.tabLuck.addEventListener('click', () => switchTab('luck'));
    els.tabAlmanac.addEventListener('click', () => switchTab('almanac'));
    els.tabShenSha.addEventListener('click', () => switchTab('shensha'));
    els.tabName.addEventListener('click', () => switchTab('name'));


        setupNameModule();

/* 节气年 */
    const now = new Date();
    els.jieqiYearRange.value = now.getFullYear();
    updateJieqiYearVal();
    wireRange(els.jieqiYearRange, updateJieqiYearVal);
    els.jieqiQueryBtn.addEventListener('click', () => {
      const y = Number(els.jieqiYearRange.value);
      renderJieqiList(y);
    });
    els.jieqiCopyBtn.addEventListener('click', copyJieqiList);

    /* luck 子模式 */
    els.luckWsPill.addEventListener('click', () => switchLuckMode('ws'));
    els.luckFlowPill.addEventListener('click', () => switchLuckMode('flow'));

    els.wsCalcBtn.addEventListener('click', renderWs);
    els.wsCopyBtn.addEventListener('click', copyWs);

    els.flowYearRange.value = now.getFullYear();
    updateFlowYearVal();
    wireRange(els.flowYearRange, updateFlowYearVal);

    els.flowCalcBtn.addEventListener('click', renderFlow);
    els.flowCopyBtn.addEventListener('click', copyFlow);

    els.maleBtn.addEventListener('click', () => setGenderUI(true));
    els.femaleBtn.addEventListener('click', () => setGenderUI(false));

    if(els.pickMaleBtn && els.pickFemaleBtn){
      els.pickMaleBtn.addEventListener('click', () => setGenderUI(true));
      els.pickFemaleBtn.addEventListener('click', () => setGenderUI(false));
    }
    setGenderUI(true);

    /* Almanac */
    setAlmanacDateInput(now);
    els.almanacTodayBtn.addEventListener('click', () => {
      const d = new Date();
      setAlmanacDateInput(d);
      renderAlmanac();
    });
    els.almanacDate.addEventListener('change', renderAlmanac);
    els.almanacCopyBtn.addEventListener('click', copyAlmanac);

    /* ShenSha learning */
    els.ssRuleText.textContent = buildSsRuleText();

    els.ssSearch.addEventListener('input', renderShenShaList);

    function setSsFilter(which){
      ssFilter = which;
      els.ssFilterAll.classList.toggle('active', which === 'all');
      els.ssFilterCommon.classList.toggle('active', which === 'common');
      els.ssFilterChild.classList.toggle('active', which === 'child');
      renderShenShaList();
    }

    els.ssFilterAll.addEventListener('click', () => setSsFilter('all'));
    els.ssFilterCommon.addEventListener('click', () => setSsFilter('common'));
    els.ssFilterChild.addEventListener('click', () => setSsFilter('child'));

    els.ssCopyListBtn.addEventListener('click', copyShenShaList);
    els.ssJumpExplainBtn.addEventListener('click', toggleRuleExplain);

    /* 初始 */
    updateDayRange();
    syncValueText();
    renderAlmanac();
    renderShenShaList();
    ensureSsToggleSetup();
    // 默认保持学习列表收起，避免跨模块干扰
    ssListExpanded = false;
    updateSsListVisibility();
    try{ initMissingShenshaList(); }catch(e){}
    try{ initMissingChildGuanShaList(); }catch(e){}
  }

  init();


// v11.7b: 命中展开详情逻辑（安全版）
function buildSsDetailHtml(payload, meta){
  const esc = (s)=> (s ?? '').toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const { name, rule, kind, tag, luck } = meta;

  const yearGZ = payload?.yearGZ || '';
  const monthGZ = payload?.monthGZ || '';
  const dayGZ = payload?.dayGZ || '';
  const hourGZ = payload?.hourGZ || '';
  const gender = payload?.gender || '';
  const calendarMode = payload?.mode === 'lunar' ? '农历' : '公历';

  const rows = [];

  rows.push(`
    <div class="ss-detail-row">
      <div class="ss-detail-label">查法结构</div>
      <div class="ss-detail-value">${rule ? esc(rule) : '（本条为组合类判定）'}</div>
    </div>
  `);

  if(tag){
    rows.push(`
      <div class="ss-detail-row">
        <div class="ss-detail-label">规则类型</div>
        <div class="ss-detail-value">${esc(tag)}</div>
      </div>
    `);
  }

  rows.push(`
    <div class="ss-detail-row">
      <div class="ss-detail-label">本盘四柱对照</div>
      <div class="ss-detail-value">
        年柱：${esc(yearGZ)}<br/>
        月柱：${esc(monthGZ)}<br/>
        日柱：${esc(dayGZ)}<br/>
        时柱：${esc(hourGZ)}
      </div>
    </div>
  `);

  rows.push(`
    <div class="ss-detail-row">
      <div class="ss-detail-label">基础参数</div>
      <div class="ss-detail-value">${gender ? `性别：${esc(gender)} · ` : ''}${calendarMode}${luck ? ` · ${esc(luck)}` : ''}</div>
    </div>
  `);

  const hint = buildRuleHintSafe(name, rule, kind);
  if(hint){
    rows.push(`
      <div class="ss-detail-row">
        <div class="ss-detail-label">命中提示</div>
        <div class="ss-detail-value">${esc(hint)}</div>
      </div>
    `);
  }

  return rows.join('');
}

function buildRuleHintSafe(name, rule, kind){
  const r = (rule || '').toString();
  if(!r) return '';
  if(name === '铁扫把') return '本条为年支分组 + 性别 + 农历月份口径。';
  if(r.includes('纳音')) return '本条涉及年柱纳音与农历月份的对应。';
  if(r.includes('日干') && (r.includes('见') || r.includes('对应'))) return '本条为日干对照地支口径。';
  if(r.includes('季节') && (r.includes('时') || r.includes('时辰'))) return '本条为季节对照时辰口径。';
  if(r.includes('农历') && (r.includes('时') || r.includes('时辰'))) return '本条为农历月份对照时辰口径。';
  if(r.includes('年支') && (r.includes('时') || r.includes('时辰'))) return '本条为年支对照时辰口径。';
  if(r.includes('出生日干') && (r.includes('时') || r.includes('时辰'))) return '本条为日干对照时辰口径。';
  return '';
}

function openSsDetailSafe(payload, meta){
  const overlay = document.getElementById('ssDetailOverlay');
  const titleEl = document.getElementById('ssDetailTitle');
  const subEl = document.getElementById('ssDetailSub');
  const bodyEl = document.getElementById('ssDetailBody');
  if(!overlay || !titleEl || !bodyEl) return;

  const { name, kind, luck, tag } = meta;

  titleEl.textContent = name || '命中详情';
  const kindText = kind === 'child' ? '小儿关煞' : (kind === 'group' ? '三合组神煞' : '成人神煞');
  const luckText = luck ? ` · ${luck}` : '';
  const tagText = tag ? ` · ${tag}` : '';
  if(subEl) subEl.textContent = `${kindText}${luckText}${tagText}`;

  bodyEl.innerHTML = buildSsDetailHtml(payload, meta);

  overlay.classList.add('show');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeSsDetailSafe(){
  const overlay = document.getElementById('ssDetailOverlay');
  if(!overlay) return;
  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');
}

function initSsDetailEventsSafe(){
  try{
    // 全局委托：避免因局部容器重渲染/ID变更导致点击失效
    const getPayloadSafe = () => {
      let payload = null;
      try{
        if(typeof calculatePayload === 'function'){
          payload = calculatePayload();
        }
      }catch(err){}
      return payload;
    };

    const handler = (e) => {
      const badge = e.target && e.target.closest ? e.target.closest('.ss-inline-badge') : null;
      if(!badge) return;
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventDefault) e.preventDefault();

      const meta = {
        kind: badge.dataset.kind || (badge.classList.contains('child') ? 'child' : 'adult'),
        name: badge.dataset.name || badge.textContent?.split('（')[0]?.trim() || '',
        rule: badge.dataset.rule || '',
        luck: badge.dataset.luck || '',
        tag: badge.dataset.tag || ''
      };

      openSsDetailSafe(getPayloadSafe(), meta);
    };

    // 如果存在专用容器，仍保留局部绑定（更精准）
    const container = document.getElementById('ssInlineResult');
    if(container){
      container.addEventListener('click', handler);
    }
    const overlay = document.getElementById('ssDetailOverlay');
    const closeBtn = document.getElementById('ssDetailCloseBtn');
    if(closeBtn) closeBtn.addEventListener('click', closeSsDetailSafe);
    if(overlay){
      overlay.addEventListener('click', (e) => {
        if(e.target === overlay) closeSsDetailSafe();
      });
    }

    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') closeSsDetailSafe();
    });
  }catch(e){}
}
// 独立初始化：不插手原 init 链路，避免影响日期选择器
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initSsDetailEventsSafe, 0);
});


// v11.13a: 从排盘详情卡片一键跳转到学习表原文（安全追加，不改原函数体）
function jumpToShenShaLearningSafe(name){
  try{ closeSsDetailSafe && closeSsDetailSafe(); }catch(e){}

  try{
    if(typeof switchTab === 'function'){
      switchTab('shensha');
    }
  }catch(e){}

  // 清理筛选/搜索，尽量保证能看到全量条目
  try{
    if(window.els && els.ssSearch) els.ssSearch.value = '';
    if(typeof window.ssFilter !== 'undefined') window.ssFilter = 'all';
  }catch(e){}

  try{
    if(typeof renderShenShaList === 'function'){
      renderShenShaList();
    }
  }catch(e){}

  // 从详情页跳转时，自动展开学习列表并高亮定位
  try{
    ensureSsToggleSetup();
    ssListExpanded = true;
    updateSsListVisibility();
  }catch(e){}

  if(!name) return;

  // 等列表渲染后用文本匹配定位
  setTimeout(()=>{
    try{
      const items = document.querySelectorAll('.ss-item');
      const target = Array.from(items).find(el => {
        const t = (el.innerText || '').trim();
        return t.startsWith(name) || t.includes(name);
      });
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
        target.classList.add('pulse-highlight');
        setTimeout(()=> target.classList.remove('pulse-highlight'), 900);
      }
    }catch(e){}
  }, 60);
}

function injectLearningLinkIntoDetail(meta){
  try{
    const bodyEl = document.getElementById('ssDetailBody');
    if(!bodyEl) return;
    // 防重复
    if(bodyEl.querySelector('.ss-detail-actions')) return;

    const name = meta?.name || '';
    const wrap = document.createElement('div');
    wrap.className = 'ss-detail-actions';

    const btn = document.createElement('span');
    btn.className = 'ss-detail-link';
    btn.textContent = '去学习表看原文';
    btn.dataset.action = 'to-learning';
    btn.dataset.name = name;

    wrap.appendChild(btn);
    bodyEl.appendChild(wrap);
  }catch(e){}
}

// 劫持 openSsDetailSafe：调用原逻辑后注入按钮
(function(){
  try{
    if(typeof openSsDetailSafe === 'function' && !openSsDetailSafe.__patched_v118b){
      const _open = openSsDetailSafe;
      const wrapped = function(payload, meta){
        _open(payload, meta);
        injectLearningLinkIntoDetail(meta);
      };
      wrapped.__patched_v118b = true;
      openSsDetailSafe = wrapped;
    }
  }catch(e){}
})();

// 仅在神煞详情浮层内处理「去学习表」点击，避免全局误触
(function(){
  const handler = (e) => {
    const link = e.target && e.target.closest
      ? e.target.closest('.ss-detail-link[data-action="to-learning"]')
      : null;
    if(!link) return;
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    const name = link.dataset.name || '';
    jumpToShenShaLearningSafe(name);
  };
  try{
    document.addEventListener('DOMContentLoaded', () => {
      try{
        const overlay = document.getElementById('ssDetailOverlay');
        if(overlay){
          overlay.addEventListener('click', handler, true);
        }
      }catch(e){}
    });
  }catch(e){}
})();


// v11.13a: 学习表 → 排盘页 轻量联动（安全追加）
function injectLearnToPanButtons(){
  try{
    const items = document.querySelectorAll('.ss-item');
    if(!items.length) return;

    items.forEach(el=>{
      const head = el.querySelector('.ss-head');
      const nameEl = el.querySelector('.ss-name');
      if(!head || !nameEl) return;

      if(head.querySelector('.ss-learn-to-pan')) return;

      const nm = (nameEl.textContent || '').trim();
      if(!nm) return;

      // 找对应数据以取 method
      let method = '';
      try{
        const found = (window.SHENSHA_DATA || []).find(x => x.name === nm);
        method = found?.method || '';
      }catch(e){}

      const btn = document.createElement('span');
      btn.className = 'ss-learn-to-pan';
      btn.textContent = '去排盘试盘';
      btn.dataset.name = nm;
      btn.dataset.method = method;

      head.appendChild(btn);
    });
  }catch(e){}
}

function showPanFocusHint(name, method){
  try{
    const container = document.getElementById('ssInlineResult');
    if(!container) return;

    // 清理旧提示
    const old = container.querySelector('.ss-pan-hint');
    if(old) old.remove();

    const hint = document.createElement('div');
    hint.className = 'ss-pan-hint';

    const shortMethod = (method || '').toString().trim();
    const methodPart = shortMethod ? `（查法要点：${shortMethod}）` : '';

    hint.textContent = `你正在查看：${name || '—'}${methodPart}`;
    container.appendChild(hint);

    setTimeout(()=>{ try{ hint.remove(); }catch(e){} }, 3200);
  }catch(e){}
}

function jumpToPanFromLearning(name, method){
  try{
    if(typeof switchTab === 'function'){
      switchTab('bazi');
    }
  }catch(e){}
  setTimeout(()=> showPanFocusHint(name, method), 60);
}


function resetShenShaViewState(){
  try{
    ssFilter = 'all';
    if(els.ssSearch) els.ssSearch.value = '';
    if(els.ssFilterAll){
      els.ssFilterAll.classList.add('active');
    }
    if(els.ssFilterCommon){
      els.ssFilterCommon.classList.remove('active');
    }
    if(els.ssFilterChild){
      els.ssFilterChild.classList.remove('active');
    }
    if(els.ssRuleExplain){
      els.ssRuleExplain.style.display = 'none';
    }
    try{
      ensureSsToggleSetup();
      ssListExpanded = false;
      updateSsListVisibility();
    }catch(e){}
  }catch(e){}
}

// 包裹 renderShenShaList：渲染后注入按钮
(function(){
  try{
    if(typeof renderShenShaList === 'function' && !renderShenShaList.__patched_v119a){
      const _render = renderShenShaList;
      const wrapped = function(){
        const res = _render.apply(this, arguments);
        try{ injectLearnToPanButtons(); }catch(e){}
        return res;
      };
      wrapped.__patched_v119a = true;
      renderShenShaList = wrapped;
    }
  }catch(e){}
})();

// 进入学习页时也补打一针
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(()=>{ try{ injectLearnToPanButtons(); }catch(e){} }, 0);
});

// 限定在神煞学习面板内处理「去排盘试盘」点击，避免全局误触
(function(){
  const handler = (e) => {
    const btn = e.target && e.target.closest
      ? e.target.closest('.ss-learn-to-pan')
      : null;
    if(!btn) return;
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    const name = btn.dataset.name || '';
    const method = btn.dataset.method || '';
    jumpToPanFromLearning(name, method);
  };
  try{
    document.addEventListener('DOMContentLoaded', () => {
      try{
        const panel = document.getElementById('panelShenSha');
        if(panel){
          panel.addEventListener('click', handler, true);
        }
      }catch(e){}
    });
  }catch(e){}
})();



/* =========================
   UI v12 · 底部四栏分组导航
   不改核心功能，仅重排入口与导航
   ========================= */
(function () {
  const moduleToTabId = {
    Bazi: "tabBazi",
    Name: "tabName",
    Luck: "tabLuck",
    Jieqi: "tabJieqi",
    Almanac: "tabAlmanac",
    ShenSha: "tabShenSha",
  };

  const moduleToTitle = {
    Bazi: "排盘",
    Name: "起名",
    Luck: "运势",
    Jieqi: "节气",
    Almanac: "黄历",
    ShenSha: "神煞",
  };

  const moduleToGroup = {
    Bazi: "home",
    Name: "home",
    Luck: "home",
    Jieqi: "tools",
    Almanac: "tools",
    ShenSha: "study",
  };

  const groupToViewId = {
    home: "groupHome",
    tools: "groupTools",
    study: "groupStudy",
    me: "groupMe",
  };

  let lastGroup = "home";

  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

  function setBottomActive(key) {
    qsa("#bottomNav .bottom-item").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.group === key);
    });
  }

  function setGroupActive(key) {
    Object.values(groupToViewId).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove("active");
    });
    const viewId = groupToViewId[key];
    const target = viewId ? document.getElementById(viewId) : null;
    if (target) target.classList.add("active");
  }

  function updateTopbar(moduleKey) {
    const titleEl = qs("#moduleTopTitle");
    if (titleEl) titleEl.textContent = moduleToTitle[moduleKey] || "模块";
  }

  function showGroup(key) {
    lastGroup = key || lastGroup || "home";

    // 离开“学习”分组时重置神煞学习视图，避免跨模块干扰滚动与展开状态
    if (key !== 'study') {
      try { resetShenShaViewState(); } catch (e) {}
    }

    document.body.classList.remove("module-open");
    setBottomActive(lastGroup);
    setGroupActive(lastGroup);

    // 滚动回顶部，防止切分组时位置怪
    const container = qs(".container");
    if (container) container.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function openModule(moduleKey) {
    const tabId = moduleToTabId[moduleKey];
    const tabEl = tabId ? document.getElementById(tabId) : null;

    lastGroup = moduleToGroup[moduleKey] || lastGroup || "home";

    if (tabEl && typeof tabEl.click === "function") {
      tabEl.click(); // 复用原有切换逻辑
    }

    updateTopbar(moduleKey);
    document.body.classList.add("module-open");
    setBottomActive(lastGroup);
  }

  function bindEntryCards() {
    qsa(".entry-card[data-module]").forEach(card => {
      card.addEventListener("click", () => {
        const moduleKey = card.dataset.module;
        if (moduleKey) openModule(moduleKey);
      });
    });
  }

  function bindBottomNav() {
    qsa("#bottomNav .bottom-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.group;
        showGroup(key);
      });
    });
  }

  function bindTopbarBtns() {
    const backBtn = qs("#moduleBackBtn");
    const closeBtn = qs("#moduleCloseBtn");
    if (backBtn) backBtn.addEventListener("click", () => showGroup(lastGroup));
    if (closeBtn) closeBtn.addEventListener("click", () => showGroup(lastGroup));
  }

  
  const UI_VERSION = "v12.3-2025-12-17-04";

  
  // ------------------------------
  // 我的 · 启明字库补丁编辑器（内嵌版）
  // 目标：清洗/去重/合并并导出 qiming_patch.json（热更新）
  // ------------------------------
  function initMePatchEditor() {
    const loadBtn = qs("#peLoadBase");
    const clearBtn = qs("#peClearAll");
    const mergeBtn = qs("#peMerge");
    const copyBtn = qs("#peCopyOut");
    const dlBtn = qs("#peDownloadOut");
    const inputEl = qs("#peInput");
    const outEl = qs("#peOutput");
    const statusEl = qs("#peStatus");
    const charEl = qs("#peChar");
    const wuxingEl = qs("#peWuxing");
    const strokeEl = qs("#peStroke");
    const meanEl = qs("#peMean");
    const addCharBtn = qs("#peAddChar");
    const clearManualBtn = qs("#peClearManual");
    const manualListEl = qs("#peManualList");

    let manualChars = {};

    // 若页面没有该模块（旧版 HTML），直接跳过
    if (!statusEl || !inputEl || !outEl) return;

    let base = { chars: {} };

    function setStatus(text) {
      statusEl.textContent = text;
    }

    function updateManualList() {
      if (!manualListEl) return;
      const keys = Object.keys(manualChars || {});
      if (!keys.length) {
        manualListEl.textContent = "手动列表：空";
        return;
      }
      const preview = keys
        .slice()
        .sort((a, b) => a.localeCompare(b, "zh-Hans"))
        .map((k) => {
          const v = manualChars[k] || {};
          const parts = [];
          if (v.wuxing) parts.push(v.wuxing);
          if (v.stroke) parts.push(`${v.stroke}画`);
          return `${k}(${parts.join(",") || "?"})`;
        })
        .join("  ");
      manualListEl.textContent = `手动列表（${keys.length}）：${preview}`;
    }

    function addManualChar() {
      const ch = String(charEl?.value || "").trim();
      if (!ch) {
        setStatus("手动添加：请先输入一个汉字");
        return;
      }
      if ([...ch].length !== 1) {
        setStatus("手动添加：一次只能添加 1 个字");
        return;
      }
      const stroke = Number.parseInt(String(strokeEl?.value || "").trim(), 10);
      if (!Number.isFinite(stroke) || stroke <= 0) {
        setStatus("手动添加：请填写正确的笔画（正整数）");
        return;
      }
      const wuxing = String(wuxingEl?.value || "").trim();
      const mean = String(meanEl?.value || "").trim();

      const entry = { stroke };
      if (wuxing) entry.wuxing = wuxing;
      if (mean) entry.mean = mean;

      manualChars[ch] = entry;
      updateManualList();

      if (charEl) charEl.value = "";
  function tryParseAny(text) {
      let raw = normalizeLooseJson(stripFences(text)).trim();
      if (!raw) return { chars: {}, parsed: true, mode: "empty" };

      // 如果用户粘贴的是 JS 片段（const X = {...};），尽量截出 JSON 主体
      if (!raw.startsWith("{") && !raw.startsWith("[") && (raw.includes("{") || raw.includes("["))) {
        const firstBrace = raw.search(/[\[{]/);
        const lastBrace = Math.max(raw.lastIndexOf("}"), raw.lastIndexOf("]"));
        if (firstBrace >= 0 && lastBrace > firstBrace) raw = raw.slice(firstBrace, lastBrace + 1).trim();
      }

      let s = raw;

      // 如果是纯键值对块（没有外层 {} 或 []），补上 {}
      if (!s.startsWith("{") && !s.startsWith("[") && /"\s*[^"]+"\s*:/.test(s)) {
        s = "{" + s + "}";
      }

      // 如果是多段 {..},{..} 且包含 "char":，补上 []
      if (!s.startsWith("[") && /"char"\s*:/.test(s) && s.includes("{")) {
        s = "[" + s + "]";
      }

      // 常见粘贴噪声清理
      s = s.replace(/}\s*,\s*,\s*{/g, "},{");
      s = s.replace(/,\s*,/g, ",");
      s = removeTrailingCommas(s);

      // 尝试 JSON.parse（第一轮）
      try {
        const obj = JSON.parse(s);
        const chars = normalizeToChars(obj);

        if (!chars || typeof chars !== "object" || Array.isArray(chars)) {
          return { chars: {}, parsed: false, error: "不是可识别的字库结构" };
        }

        const cleaned = {};
        for (const [k, v] of Object.entries(chars)) {
          const key = String(k || "").trim();
          if (!key) continue;
          const entry = cleanEntry(v);
          if (Object.keys(entry).length) cleaned[key] = entry;
          else if (typeof v === "number") cleaned[key] = { stroke: Number.parseInt(v, 10) };
        }

        return { chars: cleaned, parsed: true, mode: "json", repaired: s !== raw };
      } catch (e1) {
        // 兜底：从乱格式里提取有效条目（哪怕整体 JSON 已坏）
        const salvaged = salvageCharPairs(s);
        const salvagedKeys = Object.keys(salvaged || {});
        if (salvagedKeys.length) {
          return {
            chars: salvaged,
            parsed: true,
            mode: "salvaged",
            repaired: true,
            warning: `原始输入整体 JSON 解析失败，已自动提取 ${salvagedKeys.length} 条可用数据`
          };
        }

        return { chars: {}, parsed: false, error: formatJsonError(e1, s) };
      }
    }

近：…${snippet}…）`;
    }

    // 兜底：从乱格式里“抠”出 "字": { ... } 这种条目（即使整体 JSON 已坏）
    function salvageCharPairs(src) {
      const out = {};
      const s = String(src || "");
      let i = 0;

      function skipWS() {
        while (i < s.length && /\s/.test(s[i])) i += 1;
      }

      function readQuoted() {
        if (s[i] !== '"') return null;
        i += 1;
        let buf = "";
        let esc = false;
        while (i < s.length) {
          const c = s[i];
          if (esc) {
            buf += c;
            esc = false;
            i += 1;
            continue;
          }
          if (c === "\\") {
            esc = true;
            buf += c;
            i += 1;
            continue;
          }
          if (c === '"') {
            i += 1;
            return buf;
          }
          buf += c;
          i += 1;
        }
        return null;
      }

      function readBracedObject() {
        if (s[i] !== "{") return null;
        let start = i;
        let depth = 0;
        let inStr = false;
        let esc = false;

        while (i < s.length) {
          const c = s[i];
          if (inStr) {
            if (esc) {
              esc = false;
            } else if (c === "\\") {
              esc = true;
            } else if (c === '"') {
              inStr = false;
            }
            i += 1;
            continue;
          }

          if (c === '"') {
            inStr = true;
            i += 1;
            continue;
          }
          if (c === "{") depth += 1;
          if (c === "}") {
            depth -= 1;
            if (depth === 0) {
              i += 1;
              return s.slice(start, i);
            }
          }
          i += 1;
        }
        return null;
      }

      while (i < s.length) {
        skipWS();
        if (s[i] !== '"') {
          i += 1;
          continue;
        }
        const keyPos = i;
        const key = readQuoted();
        if (!key) break;

        // 只取“单字 key”（你这个场景是单个汉字）
        if ([...key].length !== 1) continue;

        skipWS();
        if (s[i] !== ":") {
          i = keyPos + 1;
          continue;
        }
        i += 1;
        skipWS();

        // value object
        if (s[i] === "{") {
          const objText = readBracedObject();
          if (!objText) continue;
          try {
            const obj = JSON.parse(removeTrailingCommas(normalizeLooseJson(objText)));
            const entry = cleanEntry(obj);
            if (Object.keys(entry).length) out[key] = entry;
          } catch (_) {
            // ignore
          }
        } else {
          // allow number stroke: "字": 12
          const numMatch = s.slice(i).match(/^(-?\d+)/);
          if (numMatch) {
            const n = Number.parseInt(numMatch[1], 10);
            if (Number.isFinite(n)) out[key] = { stroke: n };
          }
        }
      }

      return out;
    }

    function removeTrailingCommas(s) {
      // 允许用户粘贴“最后多一个逗号”的内容
      return s.replace(/,\s*([}\]])/g, "$1");
    }

    function cleanEntry(v) {
      if (!v || typeof v !== "object") return {};
      const out = {};
      const stroke = Number.parseInt(v.stroke ?? v.strokes ?? v.bihua ?? v["笔画"] ?? v["画数"] ?? "", 10);
      if (Number.isFinite(stroke) && stroke > 0) out.stroke = stroke;
      const wx = String(v.wuxing ?? v.wx ?? v["五行"] ?? "").trim();
      if (wx) out.wuxing = wx.slice(0, 1);
      const mean = String(v.mean ?? v.desc ?? v["释义"] ?? v.meaning ?? "").trim();
      if (mean) out.mean = mean;
      return out;
    }

    function normalizeToChars(obj) {
      if (!obj) return {};
      // { chars: {...} }
      if (obj.chars && typeof obj.chars === "object" && !Array.isArray(obj.chars)) return obj.chars;

      // array: [{char:"字",...}, ...]
      if (Array.isArray(obj)) {
        const chars = {};
        for (const it of obj) {
          const ch = String(it?.char ?? it?.["字"] ?? it?.["汉字"] ?? "").trim();
          if (!ch) continue;
          chars[ch] = cleanEntry(it);
        }
        return chars;
      }

      // plain object: {"锦": {...}, ...}
      if (typeof obj === "object") return obj;

      return {};
    }

    function tryParseAny(text) {
      let s = stripFences(text).trim();
      if (!s) return { chars: {}, parsed: true, mode: "empty" };

      // 如果是纯键值对块（没有外层 {} 或 []），补上 {}
      if (!s.startsWith("{") && !s.startsWith("[") && /"\s*[^"]+"\s*:/.test(s)) {
        s = "{" + s + "}";
      }

      // 如果是多段 {..},{..} 且包含 "char":，补上 []
      if (!s.startsWith("[") && /"char"\s*:/.test(s) && s.includes("{")) {
        s = "[" + s + "]";
      }

      // 常见粘贴噪声清理
      s = s.replace(/}\s*,\s*,\s*{/g, "},{");
      s = s.replace(/,\s*,/g, ",");
      s = removeTrailingCommas(s);

      // 尝试 JSON.parse
      try {
        const obj = JSON.parse(s);
        const chars = normalizeToChars(obj);

        // 如果 normalize 出来仍不是 chars 字典，尝试再包一层
        if (!chars || typeof chars !== "object" || Array.isArray(chars)) {
          return { chars: {}, parsed: false, error: "不是可识别的字库结构" };
        }

        // clean each entry
        const cleaned = {};
        for (const [k, v] of Object.entries(chars)) {
          const key = String(k || "").trim();
          if (!key) continue;
          const entry = cleanEntry(v);
          if (Object.keys(entry).length) cleaned[key] = entry;
          else if (typeof v === "number") cleaned[key] = { stroke: Number.parseInt(v, 10) }; // 兼容 {"字": 12}
        }
        return { chars: cleaned, parsed: true, mode: "json" };
      } catch (e) {
        return { chars: {}, parsed: false, error: String(e?.message || e) };
      }
    }

    function stableStringify(charsObj) {
      const keys = Object.keys(charsObj || {}).sort((a, b) => a.localeCompare(b, "zh-Hans"));
      const out = { chars: {} };
      for (const k of keys) out.chars[k] = cleanEntry(charsObj[k]);
      return JSON.stringify(out, null, 2);
    }

    async function loadBase() {
      setStatus("读取中…");
      try {
        const url = "./qiming_patch.json?v=" + Date.now(); // cache buster
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const obj = await res.json();
        base = { chars: normalizeToChars(obj) };
        // 清洗一次
        base.chars = Object.fromEntries(
          Object.entries(base.chars || {}).map(([k, v]) => [k, cleanEntry(v)])
        );
        const n = Object.keys(base.chars || {}).length;
        setStatus(`已读取仓库补丁：${n} 字`);
      } catch (e) {
        base = { chars: {} };
        setStatus("读取失败：" + (e?.message || e));
      }
    }

    function clearAll() {
      base = { chars: {} };
      manualChars = {};
      updateManualList();
      if (inputEl) inputEl.value = "";
      if (outEl) outEl.value = "";
      setStatus("已清空（未读取补丁）");
    }

    function mergeAndExport() {
      const baseCountBefore = Object.keys(base.chars || {}).length;

      const parsed = tryParseAny(inputEl.value);
      if (!parsed.parsed) {
        setStatus("解析失败：" + (parsed.error || "未知错误") + "。常见原因：末尾多逗号、中文引号、外层多包了一对 {}、或把多个对象直接拼在一起。");
        return;
      }

      const incoming = parsed.chars || {};
      const inKeys = Object.keys(incoming);
      const manKeys = Object.keys(manualChars || {});
      let conflicts = 0;
      let manualConflicts = 0;

      for (const k of inKeys) {
        if (base.chars[k]) conflicts += 1;
        const merged = { ...(base.chars[k] || {}), ...(incoming[k] || {}) };
        base.chars[k] = cleanEntry(merged);
      }

      // 手动列表优先级最高（最后覆盖）
      for (const k of manKeys) {
        if (base.chars[k]) manualConflicts += 1;
        const merged = { ...(base.chars[k] || {}), ...(manualChars[k] || {}) };
        base.chars[k] = cleanEntry(merged);
      }

      const out = stableStringify(base.chars);
      outEl.value = out;

      const outCount = Object.keys(base.chars || {}).length;
      const added = outCount - baseCountBefore;

      let note = "";
      if (parsed.mode === "salvaged") note = "（已自动修复：从乱格式中提取有效条目）";
      else if (parsed.repaired) note = "（已自动清洗）";

      const warn = parsed.warning ? `；提示：${parsed.warning}` : "";

      setStatus(
        `合并完成${note}：输入 ${inKeys.length} 字；手动 ${manKeys.length}；覆盖 ${conflicts + manualConflicts}；新增 ${Math.max(
          0,
          added
        )}；总计 ${outCount}${warn}`
      );
    }

function copyOut() {
      const text = outEl.value.trim();
      if (!text) {
        setStatus("没有输出内容可复制（先点“清洗 + 合并 + 去重”）");
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        setStatus("已复制到剪贴板 ✅");
      } catch (e) {
        // fallback
        try {
          outEl.focus();
          outEl.select();
          document.execCommand("copy");
          setStatus("已复制到剪贴板 ✅");
        } catch (e2) {
          setStatus("复制失败：" + (e2?.message || e2));
        }
      }
    }

    function downloadOut() {
      const text = outEl.value.trim();
      if (!text) {
        setStatus("没有输出内容可下载（先点“清洗 + 合并 + 去重”）");
        return;
      }
      const blob = new Blob([text], { type: "application/json;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "qiming_patch.json";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        URL.revokeObjectURL(a.href);
        a.remove();
      }, 0);
      setStatus("已生成下载文件 ✅（覆盖仓库 qiming_patch.json）");
    }

    if (loadBtn) loadBtn.addEventListener("click", loadBase);
    if (clearBtn) clearBtn.addEventListener("click", clearAll);
    if (mergeBtn) mergeBtn.addEventListener("click", mergeAndExport);
    if (copyBtn) copyBtn.addEventListener("click", copyOut);
    if (dlBtn) dlBtn.addEventListener("click", downloadOut);
    if (addCharBtn) addCharBtn.addEventListener("click", addManualChar);
    if (clearManualBtn) clearManualBtn.addEventListener("click", clearManual);

    updateManualList();

    // 初始状态：不自动拉取，避免误触；用户点“读取仓库补丁”再合并
    setStatus("未读取补丁（建议先点“读取仓库补丁”）");
  }

function initMeTools() {
    const uiEl = qs("#uiVersion");
    const cacheEl = qs("#cacheVersion");
    const buildEl = qs("#buildTime");
    if (uiEl) uiEl.textContent = UI_VERSION;

    // 尝试从 SW 或本地标记读取缓存版本
    try {
      const stored = localStorage.getItem("bazi_ui_version");
      if (!stored) localStorage.setItem("bazi_ui_version", UI_VERSION);
    } catch(e) {}

    if (buildEl) buildEl.textContent = UI_VERSION.replace("v", "");

    // 读取当前 SW VERSION（如果可读取）
    if (cacheEl) {
      // 默认显示与 UI 版本一致，避免空白
      cacheEl.textContent = UI_VERSION;
    }

    const softBtn = qs("#btnSoftReload");
    const hardBtn = qs("#btnHardRefresh");

    if (softBtn) {
      softBtn.addEventListener("click", () => {
        location.reload();
      });
    }

    if (hardBtn) {
      hardBtn.addEventListener("click", async () => {
        try {
          if ("serviceWorker" in navigator) {
            const regs = await navigator.serviceWorker.getRegistrations();
            await Promise.all(regs.map(r => r.update().catch(()=>null)));
          }

          if (window.caches) {
            const keys = await caches.keys();
            await Promise.all(keys.filter(k => k.startsWith("bazi-tool-") || k.startsWith("bazi-pwa-") || k.startsWith("bazi"))
              .map(k => caches.delete(k)));
          }
        } catch (e) {
          // 忽略错误，继续刷新
        } finally {
          // 强制带参数刷新，绕过 CDN/浏览器缓存
          const v = Date.now();
          const url = new URL(location.href);
          url.searchParams.set("v", String(v));
          location.href = url.toString();
        }
      });
    }
  

    // 内嵌补丁编辑器（在“我的”页）
    initMePatchEditor();
}

function initGroupUI() {
    if (!qs("#groupViews") || !qs("#bottomNav")) return;

    bindEntryCards();
    bindBottomNav();
    bindTopbarBtns();

    // 初始落在首页分组，避免直接进旧模块页
    showGroup("home");

    initMeTools();
  }

  // 尽量等原脚本完成基础绑定后再启动分组 UI
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(initGroupUI, 0);
  });
})();