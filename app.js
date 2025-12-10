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
    nameExplain: document.getElementById('nameExplain')

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

  /* ===================== 神煞学习表（内置） ===================== */
    const SHENSHA_DATA = [

  {id:'adult_001', name:'文昌贵人', group:'常用', luck:'吉', method:'以年干或日干为主，甲见巳，乙见午，丙戊见申，丁己见酉，庚见亥，辛见子，壬见寅，癸见卯。', effect:'学业上天资聪颖、学习能力强，考试运佳，易获学业成就。事业上气质文雅、文章显达，适合教育、文学、文职等领域。婚姻上性格谦逊温和，易吸引志同道合的伴侣。亦有挡灾之象。'},
  {id:'adult_002', name:'学堂', group:'常用', luck:'吉', method:'按年柱纳音五行查，金命见巳（辛巳为正），木命见亥（己亥为正），水命见申（甲申为正），土命见申（戊申为正），火命见寅（丙寅为正）。', effect:'主早期教育根基与知识吸收能力。地支无刑冲且得官印生扶时，领悟力强。适合教师、学术研究等岗位。性格沉稳好学，但易因专注学业事业忽略伴侣感受。'},
  {id:'adult_003', name:'词馆', group:'常用', luck:'吉', method:'以年干或日干为主，甲见庚寅，乙见辛卯，丙见乙巳，丁见戊午，戊见丁巳，己见庚午，庚见壬申，辛见癸酉，壬见癸亥，癸见壬戌，且其纳音五行需与年干、日干五行一致。', effect:'主学术钻研与文采。适合教授、学者、文案创作者等，在教育文化领域易有声名。社交圈偏窄，择偶节奏较慢。'},
  {id:'adult_004', name:'文曲星', group:'常用', luck:'吉', method:'传统命理中常以命局见辰为文曲星，也可结合文昌（巳）同现判断。', effect:'智慧与文采突出，文学艺术科目更易见长。适合文学创作、教育、公职等。与煞同现时易有恃才傲物之象。'},
  {id:'adult_005', name:'科甲星', group:'常用', luck:'吉', method:'并非独立神煞，需结合官星、印星，搭配文昌、文曲等综合判断。', effect:'主科举及第之象，现代对应升学、考证、职称等竞争性考试的优势。'},
  {id:'adult_006', name:'天乙贵人', group:'常用', luck:'吉', method:'以日干为主，甲戊见丑未，乙己见子申，丙丁见亥酉，壬癸见卯巳，庚见寅午。', effect:'顶级贵人星。学业事业遇阻多得点拨与提携，官禄与人脉助力强。感情危机常有人从中调解。'},
  {id:'adult_007', name:'国印贵人', group:'常用', luck:'吉', method:'以年干或日干为主，甲见戌，乙见亥，丙见丑，丁见寅，戊见丑，己见寅，庚见辰，辛见巳，壬见未，癸见申。', effect:'主正气、规矩与掌权之象。适合体制内、管理与执法类岗位。家庭中多为可靠支柱。'},
  {id:'adult_008', name:'太极贵人', group:'常用', luck:'吉', method:'以年干或日干为主，甲乙见子午，丙丁见酉卯，戊己见辰戌丑未，庚辛见寅亥，壬癸见巳申。', effect:'聪明好学，喜文史哲、宗教、玄学等。得扶助可官禄可期，亦有护身之象。'},
  {id:'adult_009', name:'三奇贵人', group:'常用', luck:'吉', method:'天上三奇甲戊庚、地上三奇壬癸辛、人中三奇乙丙丁，天干顺次出现且无冲破为真三奇。', effect:'主才华与突破力，学业事业多得机缘，适合创新科研与高阶专业路线。'},
  {id:'adult_010', name:'福星贵人', group:'常用', luck:'吉', method:'以日干为主，甲丙见寅、乙癸见卯、丁见亥、戊见申、己见未、庚见午、辛见巳、壬见辰。', effect:'主顺遂与福分，职场境遇较佳，家庭经济与关系更易稳。'},
  {id:'adult_011', name:'天德贵人', group:'常用', luck:'吉', method:'以出生农历月份对应。口诀：正丁二申三壬四辛，五亥六甲七癸八寅，九丙十乙子巳丑庚。四柱见对应天干或地支即为带天德。', effect:'古称“一德化百煞”，主解厄护佑、遇事能得转机。与印绶相辅更有免刑避祸之象。'},
  {id:'adult_012', name:'月德贵人', group:'常用', luck:'吉', method:'以出生月支按三合局取天干：寅午戌月见丙，申子辰月见壬，亥卯未月见甲，巳酉丑月见庚。四柱天干见之即为带月德。', effect:'偏温和的护佑星，主暗中贵助、少犯官刑、福分深厚。'},
  {id:'adult_013', name:'天德合', group:'常用', luck:'吉', method:'与天德贵人对应，按出生农历月份取其相合之干/支，常以天干五合、地支六合推断。', effect:'吉力次于天德贵人，可作补位解厄，主运势较平顺。'},
  {id:'adult_014', name:'月德合', group:'常用', luck:'吉', method:'取与月德贵人相合之天干。常用口径：寅午戌月月德为丙，其合为辛；申子辰月月德为壬，其合为丁，其余依五合推。', effect:'多作辅助增福、缓冲小厄之象，人际与财势更易平稳。'},
  {id:'adult_015', name:'德秀贵人', group:'常用', luck:'吉', method:'以出生月令为主分德与秀：寅午戌月丙丁为德、戊癸为秀；申子辰月壬癸戊己为德、丙辛甲己为秀；巳酉丑月庚辛为德、乙庚为秀；亥卯未月甲乙为德、丁壬为秀。四柱天干见之即是。', effect:'主才德兼备、气质清雅。与学堂、文昌等同现且少冲克，学业与文职名望更易凸显。'},
  {id:'adult_016', name:'天厨贵人', group:'常用', luck:'吉', method:'以日干对应时辰：甲日巳时、乙日午时、丙日巳时、丁日午时、戊日申时、己日酉时、庚日亥时、辛日子时、壬日寅时、癸日卯时。生于对应时辰即为命带。', effect:'主食禄与享受之福，象征衣食不缺。亦可引申为餐饮、养生相关机缘。'},
  {id:'adult_017', name:'禄神', group:'常用', luck:'吉', method:'甲禄在寅，乙禄在卯，丙戊禄在巳，丁己禄在午，庚禄在申，辛禄在酉，壬禄在亥，癸禄在子。', effect:'主财富与地位之基，收入与晋升路径较清晰。'},
  {id:'adult_018', name:'将星', group:'常用', luck:'吉', method:'寅午戌见午，巳酉丑见酉，申子辰见子，亥卯未见卯。', effect:'主领导与统御气势，目标感强，适合管理与攻坚。'},
  {id:'adult_019', name:'金舆贵人', group:'常用', luck:'吉', method:'甲日见辰，乙日见巳，丙日见未，丁日见申，戊日见未，己日见申，庚日见戌，辛日见亥，壬日见丑，癸日见寅。', effect:'主财富与身份气场，生活品质与配偶资源象较佳。'},
  {id:'adult_020', name:'驿马', group:'常用', luck:'中性', method:'以年支或日支为主，申子辰马在寅、寅午戌马在申、巳酉丑马在亥、亥卯未马在巳。', effect:'主奔波、异地、变动之象。得吉则动中得利，遇凶则劳而少成。'},
  {id:'adult_021', name:'红鸾', group:'常用', luck:'吉', method:'年支对应，子见卯、丑见寅、寅见丑、卯见子、辰见亥、巳见戌、午见酉、未见申、申见未、酉见午、戌见巳、亥见辰。', effect:'主正缘与喜庆，亦利人际合作与婚庆类财象。'},
  {id:'adult_022', name:'天喜', group:'常用', luck:'吉', method:'年支对应，子见酉、丑见申、寅见未、卯见午、辰见巳、巳见辰、午见卯、未见寅、申见丑、酉见子、戌见亥、亥见戌。', effect:'主家庭喜庆、婚育与考试喜讯之象。'},
  {id:'adult_023', name:'六合', group:'常用', luck:'吉', method:'地支六合：子丑、寅亥、卯戌、辰酉、巳申、午未。', effect:'主和合、合作与人际润滑，婚恋与团队协作更顺。'},
  {id:'adult_024', name:'喜神', group:'常用', luck:'吉', method:'日干对应，甲见午、乙见巳、丙见寅、丁见卯、戊见申、己见酉、庚见亥、辛见子、壬见戌、癸见丑。', effect:'主喜庆与人缘，考试、升迁、婚恋等场景更易见好消息。'},
  {id:'adult_025', name:'福德贵人', group:'常用', luck:'吉', method:'日干对应，甲见寅、乙见卯、丙见巳、丁见午、戊见申、己见酉、庚见亥、辛见子、壬见寅、癸见卯。', effect:'主福气、健康与晚景安稳之象。'},
  {id:'adult_026', name:'孤鸾煞', group:'常用', luck:'中性', method:'日柱为乙巳、丁巳、辛亥、戊申、壬寅、戊午、壬子、丙午。', effect:'主情感起伏与婚恋波折象，亦有独立研究、单兵作业的潜力。'},
  {id:'adult_027', name:'华盖', group:'常用', luck:'中性', method:'以年支或日支为主，寅午戌见戌、亥卯未见未、申子辰见辰、巳酉丑见丑。', effect:'主清高独立、艺术与玄学气质。对婚恋社交有疏离象，但利深度研究与创作。'},
  {id:'adult_028', name:'咸池', group:'常用', luck:'中性', method:'以年支或日支为主，申子辰见酉、寅午戌见卯、巳酉丑见午、亥卯未见子。', effect:'主桃花与情欲吸引力。得吉则人缘名气，遇凶则情感纠缠更重。'},
  {id:'adult_029', name:'红艳煞', group:'常用', luck:'中性', method:'以日干为主，甲见午、乙见申、丙见寅、丁见未、戊见辰、己见辰、庚见戌、辛见酉、壬见子、癸见申。', effect:'主气质出众与情缘浓烈，亦需防情感多线牵扯之象。'},
  {id:'adult_030', name:'魁罡', group:'常用', luck:'中性', method:'日柱为壬辰、庚戌、庚辰、戊戌。', effect:'主刚烈果断、掌权气势。身旺易显贵，身弱则易遇波折。婚恋多见硬碰硬。'},
  {id:'adult_031', name:'羊刃', group:'常用', luck:'中性', method:'以日干为主，甲见卯、乙见寅、丙戊见午、丁己见巳、庚见酉、辛见申、壬见子、癸见亥。', effect:'凶多吉少之象。身强易争权冲动，身弱可作扶身抗灾。'},
  {id:'adult_032', name:'十恶大败', group:'常用', luck:'凶', method:'日柱为甲辰、乙巳、丙申、丁亥、戊戌、己丑、庚辰、辛巳、壬申、癸亥之一。', effect:'古称无禄日，主财势基础薄弱、事业多阻，宜慎理财与慎合伙。'},
  {id:'adult_033', name:'阴阳差错', group:'常用', luck:'凶', method:'日柱为丙子、丁丑、戊寅、辛卯、壬辰、癸巳、丙午、丁未、戊申、辛酉、壬戌、癸亥之一。', effect:'主婚姻与家族沟通不顺之象，亦易在人际协作上生隔阂。'},
  {id:'adult_034', name:'寡宿', group:'常用', luck:'凶', method:'以年支为主，亥子丑见戌、寅卯辰见丑、巳午未见辰、申酉戌见未。', effect:'主孤寂与情感淡薄象，宜合看孤辰与命局喜忌。'},
  {id:'adult_035', name:'孤辰', group:'常用', luck:'凶', method:'依据出生年支对照四柱中的其他地支。亥子丑年生人见寅；寅卯辰年生人见巳；巳午未年生人见申；申酉戌年生人见亥。', effect:'主独立清冷、社交助力弱与婚恋节奏慢之象。与寡宿同现时孤寂感更重。'},
  {id:'adult_036', name:'截路空亡', group:'常用', luck:'凶', method:'甲、己日遇申、酉；乙、庚日遇午、未；丙、辛日遇辰、巳；丁、壬日遇寅、卯；戊、癸日遇子、丑。', effect:'主财机与事业路径受阻、计划易半途折返之象。'},
  {id:'adult_037', name:'亡神', group:'常用', luck:'凶', method:'寅午戌见巳，亥卯未见寅，巳酉丑见申，申子辰见亥。', effect:'主是非暗耗、判断失误与财务波折象。'},
  {id:'adult_038', name:'六厄煞', group:'常用', luck:'凶', method:'以年支为主，寅午戌见酉，亥卯未见午，申子辰见卯，巳酉丑见子。', effect:'主仕途与职场阻力、瓶颈期较重之象。'},
  {id:'adult_039', name:'灾煞', group:'常用', luck:'凶', method:'以年支或日支为主，申子辰见午、亥卯未见酉、寅午戌见子、巳酉丑见卯。', effect:'主突发变故与是非冲击象。'},
  {id:'adult_040', name:'劫煞', group:'常用', luck:'凶', method:'以年支或日支为主，申子辰见亥、寅午戌见巳、巳酉丑见寅、亥卯未见申。', effect:'主意外破财、项目被夺或官非牵连之象。'},
  {id:'adult_041', name:'四废', group:'常用', luck:'凶', method:'春见庚申辛酉；夏见壬子癸亥；秋见甲寅乙卯；冬见丙午丁巳。', effect:'主精力涣散、执行受阻与事业半途之象。'},
  {id:'adult_042', name:'元辰', group:'常用', luck:'凶', method:'阳男阴女以冲前一位为元辰，阴男阳女以冲后一位为元辰。', effect:'主无妄之灾与情绪、人事波动象。'},
  {id:'adult_043', name:'天罗地网', group:'常用', luck:'凶', method:'主流以地支论：戌亥为天罗，辰巳为地网。可从四柱见戌亥、辰巳的组合看；亦有以年干支纳音配合日柱判定的口径。', effect:'象征束缚、阻滞与重压。多凶同现或行运再遇时阻力更显；得天德、月德、天乙等可减其象。'},
  {id:'adult_044', name:'白虎', group:'常用', luck:'凶', method:'常用年支对照：寅午戌见子，申子辰见午，亥卯未见酉，巳酉丑见卯。', effect:'主血光意外与是非刑伤的肃杀象。得贵人与制化时可减。'},
  {id:'adult_045', name:'飞刃', group:'常用', luck:'凶', method:'以日干对应地支：甲见酉，乙见申，丙戊见子，丁己见亥，庚见卯，辛见寅，壬见午，癸见巳。', effect:'主快而突的冲击与外伤象。制化得力时亦可化作胆识与行动力。'},
  {id:'adult_046', name:'血刃', group:'常用', luck:'凶', method:'以日干对应地支：甲见卯，乙见辰，丙见午，丁见未，戊见午，己见未，庚见酉，辛见戌，壬见子，癸见丑。', effect:'主血光、外科、伤病等意象。与羊刃、飞刃同现时更显。'},
    {id:'child_001', name:'百日关', group:'小儿关煞', luck:'凶', method:'寅申巳亥月生于辰戌丑未时；子午卯酉月生于寅申巳亥时；辰戌丑未月生于子午卯酉时，即为犯此关。', effect:'古法多认为主小儿百日内气弱难养，易见惊风、体弱等象。民俗常忌百日内远行或频繁外出，以避外界不利气场。'},
    {id:'child_002', name:'阎王关', group:'小儿关煞', luck:'凶', method:'春季生于丑未时；夏季生于辰戌时；秋季生于子午时；冬季生于酉卯时，即为犯阎王关。', effect:'传统视为小儿较重的关煞之一，主幼年体弱多厄、养护压力大之象。民俗多忌幼年入法事、丧葬等场域；若命局有天德、月德等吉神，可作缓解之象。'},
    {id:'child_003', name:'将军箭', group:'小儿关煞', luck:'凶', method:'春季酉戌辰时生；夏季未卯子时生；秋季寅午丑时生；冬季亥申巳时生，即为犯此关。民间另有按时辰分“箭数”轻重的口径。', effect:'古法多言伤亲损己、幼年易有磕碰惊险之象。民俗忌幼年入将军庙或接触仿制兵器类玩具，并有以替身、烧解厄钱等方式求安的做法。'},
    {id:'child_004', name:'铁蛇关', group:'小儿关煞', luck:'凶', method:'年柱纳音属金生于戌时；属火生于未时；属木生于辰时；属水或土生于丑时，即为犯关。若地支再见对应时辰地支，民俗多言凶象加重。', effect:'传统视为偏重的关煞，主幼年难养、疹疾与意外风险象。民俗特别强调三岁前谨慎看护、远离车道与锐利金属、动物等风险源。'},
    {id:'child_005', name:'汤火煞（烫火关）', group:'小儿关煞', luck:'凶', method:'以年支或日支对照时辰：子午卯酉年生于午时；寅申巳亥年生于寅时；辰戌丑未年生于未时，即为犯此关。', effect:'主幼年易有汤火烫灼之象。民俗多忌幼年近灶火热汤，亦有祭火神、烧解厄钱等求安做法。'},
    {id:'child_006', name:'鬼门关', group:'小儿关煞', luck:'凶', method:'子丑寅生人逢酉午未时；卯辰巳生人逢申戌亥时；午未申生人逢丑寅卯时；酉戌亥生人逢子辰巳时，即为犯此关。', effect:'传统多言幼年易染病灾、受惊厄之象。民俗忌幼年入阴庙、坟墓等场域，亦忌夜晚随意出入或近凶孝之家，并有烧地府钱等求安方式。'},
    {id:'child_007', name:'深水关', group:'小儿关煞', luck:'凶', method:'春季生于寅时；夏季生于未时；秋季生于酉时；冬季生于丑时，即为犯此关。', effect:'主幼年防水厄与湿冷病象的传统意象。民俗多强调远离深水、井塘河湖等危险处，并有节令祭祖避忌等地方性说法。'},
    {id:'child_008', name:'浴盆关', group:'小儿关煞', luck:'凶', method:'春季忌辰时；夏季忌未时；秋季忌戌时；冬季忌丑时出生，民俗称为犯浴盆关。', effect:'传统多言初生沐浴需谨慎之象。民俗旧说对初生洗浴器具与时段有避忌，过一周左右禁忌渐退。'},
    {id:'child_009', name:'白虎关', group:'小儿关煞', luck:'凶', method:'按纳音五行：火命人生于子时；金命人生于卯时；水土命人生于午时；木命人生于酉时，即为犯白虎关。', effect:'传统多言幼年腹部、血气、惊风与疹疾之象，亦主磕碰血光意象。民俗有烧白虎钱等制化说法。'},
    {id:'child_010', name:'鸡飞关', group:'小儿关煞', luck:'凶', method:'民间多以年干或日干对照时辰、再合地支组合判定，口径较多；常见说法是见特定禽畜相关的时支组合即为犯关。', effect:'传统多言幼年难养、易受惊吓之象，忌见杀生场面，亦需防禽畜啄咬等意外。民俗有烧牛马将军钱等祈安方式。'},
    {id:'child_011', name:'短命关', group:'小儿关煞', luck:'凶', method:'查法：以出生年月地支对照时辰来判定，口诀为“寅午戌龙当，巳酉丑虎亡，申子辰蛇上，亥卯未寻羊”。也就是寅午戌年月生于辰时、巳酉丑年月生于寅时、申子辰年月生于巳时、亥卯未年月生于未时，即为犯此关。', effect:'古时传统文化认为，此关主小儿易惊怖、爱夜啼，属于难养的一种关煞。若小儿日干强健，该关煞的凶性会减弱，基本无大碍；若日主孱弱，则凶性加重，甚至有幼年夭折的风险，民间常通过让小儿拜宫观道长为师父，或请道长做法事藏魂等方式禳解。'},
    {id:'child_012', name:'四柱关', group:'小儿关煞', luck:'凶', method:'查法：口诀为“正七休生巳亥时，二八辰戌不堪推，三九卯酉生人恶，四十寅申主哭悲，五十一月丑未死，六十二子午非宜”。以出生月份对照时辰判定，正月、七月生于巳时、亥时，二月、八月生于辰时、戌时等，即为犯此关煞。', effect:'传统说法中它是小儿常见凶煞，不论男女皆忌。单犯此关不算大凶，但若和流霞煞、胞胎煞等其他凶煞叠加，灾祸会更明显，多主小儿一生易遭疾病缠身，成长过程中也常遇各类不顺，民间多会通过祈福、佩戴护身符等方式来祈福消灾。'},
    {id:'child_013', name:'雷公打脑关', group:'小儿关煞', luck:'凶', method:'查法：以出生日干匹配出生时辰判定，甲日逢丑时、乙日逢午时、丙丁日逢子时、戊己日逢戌时、庚辛日逢寅时、壬日逢酉时、癸日逢亥时，即为犯此关。', effect:'民间说法中，犯此关者易遭雷火、电触、烧伤等灾祸，孩童时期还怕受锣鼓、雷声等大声响惊吓，若运势中遇到天厄、阳刃等凶星，灾祸会更明显，但若遇天月二德吉星则可化解。'},
    {id:'child_014', name:'金锁关', group:'小儿关煞', luck:'凶', method:'查法：以农历出生月份匹配时辰判定，正、七月生于申时、二、八月生于酉时（鸡）、三、九月生于戌时（狗）、四、十月生于亥时（猪）、五、十一月生于子时、六、十二月生于丑时，即为犯此关。', effect:'民间说法：犯此关的孩童忌佩戴金银锁片、钱索等物，也不宜拜神契，否则易出现哭闹不安、身体不适等情况，民间还流传可能引发误吞异物、疾病甚至夭亡等说法。'},
    {id:'child_015', name:'无情关', group:'小儿关煞', luck:'凶', method:'查法：以出生季节匹配时辰判定，正二三月（春）生于寅、酉、子时；四五六（夏）生于戌、亥、巳时；七八九月（秋）生于申、丑时；十十一十二月（冬）生于子、午时，即为犯此关。', effect:'民间说法：犯此关的孩童忌去外婆家、忌听刀斧之声，还易出现惊风、吐乳等问题。民间常以生父母对孩子改用偏称，或让孩子拜认契父母、神明为契父等方式来祈福消灾。'},
    {id:'child_016', name:'五鬼关', group:'小儿关煞', luck:'凶', method:'查法：以出生年地支匹配对应地支判定，子年遇辰、丑年遇巳、寅年遇午、卯年遇未、辰年遇申、巳年遇酉、午年遇戌、未年遇亥、申年遇子、酉年遇丑、戌年遇寅、亥年遇卯，即为犯此关。', effect:'民间说法：犯此关被视作带死气，孩童时期难养育，易有跌伤，还易沾染灾疾。民间认为这类孩童要忌靠近病患、殡仪馆、墓地等场所，也不宜进入庵堂寺院，参加普渡、打醮等法会时别靠前，避开棺木等可减少风险。'},
    {id:'child_017', name:'天狗关', group:'小儿关煞', luck:'凶', method:'查法：以出生年地支匹配对应地支判定，子年遇戌、丑年遇亥、寅年遇子、卯年遇丑、辰年遇寅、巳年遇卯、午年遇辰、未年遇巳、申年遇午、酉年遇未、戌年遇申、亥年遇酉，即为犯此关。', effect:'民间说法：犯此关的孩童易遭意外惊吓、跌打损伤，尤其怕狗类惊扰，还可能出现夜啼不安、健康波动等情况。民间多有让孩童佩戴平安符、避免夜间外出、远离犬类等避祸方式。'},
    {id:'child_018', name:'断桥关', group:'小儿关煞', luck:'凶', method:'查法：按农历出生月份匹配时辰判定，正月寅时、二月卯时、三月申时、四月丑时、五月戌时、六月酉时、七月巳时、八月亥时、九月午时、十月未时、冬月亥时、腊月子时出生，即为犯此关。', effect:'民间说法：此关被视作小儿关煞中较关键的一种，犯关孩童不仅幼时难养，传言壮年遇此关也可能有灾祸。民间认为这类孩童忌过桥、汲水以及照影，化解方式多为用水官钱祭祀水官大帝，或过桥时扔点“买路钱”且不原路返回等。'},
    {id:'adult_047', name:'地扫星', group:'常用', luck:'凶', method:'（备注，民间原名称为三夫煞或或克夫煞，我觉得不好听就改了），凶，查法：以年柱纳音的五行命格匹配农历出生月份判定，水命、土命生于农历二三月，火命生于农历五六月，金命生于农历八九月，木命生于农历冬季，即为犯此煞。', effect:'传统说法中，犯此煞的女命主婚姻多有波折，易出现感情离散、配偶缘薄等不利于婚姻稳定的情况。'},
    {id:'adult_048', name:'八败', group:'常用', luck:'凶', method:'查法：以生肖结合出生季节判定，猪、狗、羊生肖生于春季三月，龙、蛇、鼠生肖生于夏季六月，猴、鸡、牛生肖生于秋季九月，虎、马、兔生肖生于冬季腊月，即为犯此煞。', effect:'古时传统文化认为，此煞又称丧门星，主一生诸事不顺、事业难成且易破财。男性逢之多一事无成，女性逢之则易导致夫家家道衰落，民间常通过佩戴五行护身符、请人做法事等五行通关、阴阳相济的方式来尝试化解。'},
    {id:'adult_049', name:'流霞煞', group:'常用', luck:'凶', method:'查法：以出生日干对应八字地支，口诀为“甲鸡乙犬丙羊加，丁是猴乡戊见蛇；己马庚龙辛逐兔，壬猪癸虎是流霞”，即甲日见酉、乙日见戌、丙日见未等，地支出现对应字即为犯此煞。', effect:'古时传统文化认为，这是纯凶神煞，古称“血煞”，主血光之灾与健康隐患。男性带此煞易因沉迷酒色惹祸伤身，女性易遭遇产厄、血崩等问题，轻则磕碰受伤，重则可能面临危及生命的意外，日柱带此煞影响更直接。'},
    {id:'adult_050', name:'铁板煞', group:'常用', luck:'凶', method:'◦ 查法：以出生日干搭配月支查询，口诀为“甲己在辰乙庚寅，丙辛鸡犬月上临”，即甲/己日主生辰月、乙/庚日主生寅月、丙/辛日主生酉月或戌月，即为犯此煞。', effect:'古时传统文化认为，此为纯凶神煞，专门破坏婚姻运势。命带者性格刚烈固执，婚姻中易与伴侣爆发冲突，民间有“男命犯着伤三妻，女命犯着有三婚”的说法，虽非绝对，但易导致婚姻波折，离婚概率较高。'},
    {id:'adult_051', name:'铁扫把', group:'常用', luck:'中性', method:'查法：按出生年份地支和性别对应阴历月份查询，申子辰年，男命生于正月、女命生于十二月；巳酉丑年，男命生于六月、女命生于九月；寅午戌年，男命生于九月、女命生于六月；亥卯未年，男命生于十二月、女命生于正月，即为犯此煞。', effect:'古时传统文化认为，此神煞总体主破败，属凶煞但有特例。早上出生者犯煞，易破财难聚财，牵连家庭不和睦；下午和晚上出生者，反而能聚外财改善运势，民间也有通过行善积德等方式化解其凶性的习俗。'},
    {id:'adult_052', name:'埋儿煞', group:'常用', luck:'凶', method:'查法：命理上以年支为基准查询，口诀为“子午卯酉见丑，寅申巳亥见申，辰戌丑未见卯”，八字其他地支中出现对应地支即为犯煞，其中女命时支见对应地支最为凶险；风水上则指四周房屋高大、自身房屋矮小，或天井中造小屋等格局，也属于埋儿煞。', effect:'古时传统文化认为，此煞主损子息，命犯者易面临生育困难、子女早夭或子女不孝等情况，晚年可能孤独无依。风水上的埋儿煞同样不利子孙运势，民间婚嫁、搬迁时，还忌讳在犯此煞的时辰入房或安床，若命局中有天乙贵人、天月德贵人同柱，或风水上改造房屋格局等，可缓解其凶性。'}

  ];

  let ssFilter = 'all';

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

    /* 笔画辅助：本地缓存优先（可手动补录） */
    const STROKE_DB = {
      // 这里故意只放极少量示例字符，避免口径争议。
      // 你补录过的字会自动写入本地缓存（localStorage），优先级最高。
      "林": 8,
      "曦": 20
    };

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

      const surname = chars.slice(0, sLen);
      const given = chars.slice(sLen, sLen + gLen);
      return { ok:true, chars, surname, given };
    }

    function renderNameStrokeInputs(){
      if(!els.nameFullInput) return;
      const full = normalizeNameStr(els.nameFullInput.value);
      const sLen = Number(els.nameSurnameLen.value || 1);
      const gLen = Number(els.nameGivenLen.value || 2);

      const { ok, surname, given } = splitNameChars(full, sLen, gLen);
      const container = els.nameStrokeInputs;
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
              // 用户手动补录后也视作可用
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
      const inputs = els.nameStrokeInputs.querySelectorAll('input[type="number"]');
      const arr = [];
      inputs.forEach(inp=>{
        const v = Number(inp.value);
        const num = (Number.isFinite(v) ? Math.round(v) : 0);
        arr.push(num);
        const ch = inp.dataset && inp.dataset.char;
        if(ch && num > 0){
          setStrokeForChar(ch, num);
        }
      });
      return arr;
    });
      return arr;
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

      const sanCai = `${numElement(res.tian)}-${numElement(res.ren)}-${numElement(res.di)}`;
      els.ngSanCai.textContent = sanCai;

      els.nameResultCard.style.display = 'block';
      // 轻提示
      // 不做吉凶断语，避免过度玄断
    }

    function resetNameModule(){
      els.nameFullInput.value = '';
      const inputs = els.nameStrokeInputs.querySelectorAll('input');
      inputs.forEach(i=> i.value = '');
      if(els.nameScoreVal) els.nameScoreVal.textContent = '-';
      if(els.nameScoreText) els.nameScoreText.textContent = '用于你做古书数理对照与灵感筛选，不作现实定论。';
      els.nameResultCard.style.display = 'none';
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
    });
      els.resetNameBtn.addEventListener('click', resetNameModule);

      window.__nameModuleWired = true;
      renderNameStrokeInputs();
    }

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
    // 兜底：全局绑定
    document.addEventListener('click', handler);

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

// 全局委托：处理详情卡片按钮点击
(function(){
  const handler = (e) => {
    const link = e.target && e.target.closest ? e.target.closest('.ss-detail-link[data-action="to-learning"]') : null;
    if(!link) return;
    const name = link.dataset.name || '';
    jumpToShenShaLearningSafe(name);
  };
  try{ document.addEventListener('click', handler, true); }catch(e){}
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

// 全局委托：学习表按钮点击
(function(){
  const handler = (e) => {
    const btn = e.target && e.target.closest ? e.target.closest('.ss-learn-to-pan') : null;
    if(!btn) return;
    const name = btn.dataset.name || '';
    const method = btn.dataset.method || '';
    jumpToPanFromLearning(name, method);
  };
  try{ document.addEventListener('click', handler, true); }catch(e){}
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

  
  const UI_VERSION = "v12.2-2025-12-10-03";

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