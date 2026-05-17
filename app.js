const STYLES = window.VARIANT_STYLES;
const TEMPLATES = window.VARIANT_TEMPLATES;

function parsePrompt(raw){
  const s=(raw||'').trim() || 'A beautiful product';
  let headline = s.split(/[。.！!?？\n]/)[0].trim();
  if(headline.length>40) headline = headline.slice(0,38)+'…';
  const rest = s.slice(headline.length).replace(/^[。.！!?？\s]+/,'');
  const sub = rest || 'Built to feel good and work hard.';
  return { headline, sub, raw:s };
}

let idCounter = 1;
function generateBatch(promptRaw, forcedStyle, n=8, opts){
  const p = parsePrompt(promptRaw);
  const out = [];
  const used = new Set();
  const isFirstBatch = !!(opts && opts.firstBatch);
  // 已出现过的 styleLock 集合：同一个 styleLock 在 feed 中只允许出现一次
  const excludeLocks = new Set((opts && opts.excludeStyleLocks) || []);
  // 不规则高度：让卡片像 Variant 那样高低错落
  const heightPool = [320, 380, 420, 480, 520, 560, 620, 720];
  // 索引：哪些模板有 styleLock（必须搭配特定 style），哪些没有（通用）
  const lockedIdx = [];
  const freeIdx = [];
  TEMPLATES.forEach((fn,i)=>{
    try{ const probe = fn({headline:'probe'}, STYLES[0].tokens); if(probe && probe.styleLock) lockedIdx.push({i, lock:probe.styleLock}); else freeIdx.push(i); }
    catch(e){ freeIdx.push(i); }
  });
  // 找 nothing 精选模板索引
  const featuredIdx = lockedIdx.find(x=>x.lock==='nothing');
  for(let i=0;i<n;i++){
    let style = forcedStyle || STYLES[Math.floor(Math.random()*STYLES.length)];
    let tplIdx; let tries=0;
    let isFeatured = false;
    // 第一批的第 0 张：强制用 nothing 精选卡（除非已被 pin 排除）
    if(isFirstBatch && i===0 && featuredIdx && !excludeLocks.has('nothing')){
      tplIdx = featuredIdx.i;
      isFeatured = true;
    } else if(isFirstBatch && i===1){
      // 第一批第 2 张：强制用 marginalia 卡（index 5）
      tplIdx = 5;
    } else {
      // 如果当前 style 有专属模板，30% 概率优先抽 locked 的（前提是该 lock 未在 feed 中出现过）
      const matched = lockedIdx.filter(x=>x.lock===style.id && !excludeLocks.has(x.lock));
      if(matched.length && Math.random()<0.3 && !used.has(matched[0].i)){
        tplIdx = matched[0].i;
      } else {
        do { tplIdx = freeIdx[Math.floor(Math.random()*freeIdx.length)]; tries++ } while (used.has(tplIdx) && tries<freeIdx.length*2);
      }
    }
    used.add(tplIdx);
    if(used.size>=TEMPLATES.length) used.clear();
    const design = TEMPLATES[tplIdx](p, style.tokens);
    // 如果模板锁定了 style，强制切换
    if(design.styleLock){
      // 跳过：该 styleLock 在 feed 中已经出现过
      if(excludeLocks.has(design.styleLock)){
        i--; // 重新来过这一轮
        continue;
      }
      excludeLocks.add(design.styleLock); // 后续同批次也不再出现
      const locked = STYLES.find(s=>s.id===design.styleLock);
      if(locked) style = locked;
    }
    // 覆盖原模板高度，但 styleLock 的模板保留自身高度（dashboard 不能压缩）
    if(!design.styleLock){
      design.height = heightPool[Math.floor(Math.random()*heightPool.length)];
    }
    out.push({
      id: 'd' + (idCounter++).toString(36).padStart(4,'0'),
      styleId: style.id, styleLabel: style.label,
      sref: style.id + '-' + Math.random().toString(36).slice(2,7),
      prompt: p.raw, featured: isFeatured, ...design
    });
  }
  return out;
}

const feedEl = document.getElementById('feed');
const sentinel = document.getElementById('sentinel');
const promptEl = document.getElementById('prompt');
const btnGen = document.getElementById('btnGen');
const srefLabel = document.getElementById('srefLabel');
const genToast = document.getElementById('genToast');
const genTitle = document.getElementById('genTitle');
const genSub   = document.getElementById('genSub');
let currentStyle = null;
const PERSIST_KEYS = ['variant_saved','variant_featured','variant_liked'];
try{
  const params = new URLSearchParams(location.search);
  if(params.has('reset')){
    PERSIST_KEYS.forEach(k=>localStorage.removeItem(k));
    params.delete('reset');
    const qs = params.toString();
    history.replaceState({}, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
  }
}catch(_){ }
let savedMap = new Map(JSON.parse(localStorage.getItem('variant_saved')||'[]'));
let featuredMap = new Map(JSON.parse(localStorage.getItem('variant_featured')||'[]'));
let likedMap = new Map(JSON.parse(localStorage.getItem('variant_liked')||'[]'));
const designStore = new Map();
const lazyFrames = new Set();

// ═══════════════════════════════════════════════════════════════════
// Lazy iframe + pause/resume（回归 5/16 14:59 的 79f7cf9 架构）
// ═══════════════════════════════════════════════════════════════════
// 经实测唯一不卡死且滚回顶不冷启动的方案：
//   1. 每张卡创建时 iframe 节点已挂在 DOM 中（不写 srcdoc）。
//   2. IntersectionObserver（rootMargin 300px）：
//      - 进视口：首次 lazy 写入 srcdoc 启动 RAF；之后只发 resume。
//      - 离屏：postMessage 给 iframe 发 pause（不卸载 iframe，不清 srcdoc）。
//   3. iframe 内部劫持 requestAnimationFrame，pause 时 callback 进队列不丢，
//      resume 时 flush 一次性重启全部链式回调。
//      → 解决经典 bug：pause 丢 cb 会让 loop(){RAF(loop)} 链永久断。
//   4. iframe 永不 unmount → 不会触发 Chrome 的 5-10s 冷启动延迟。
// 同时 live 的 iframe 数 = 视口内 + rootMargin 内 ≈ 6-9，CPU 上限可控。

// pauseScript 会注入到每张 iframe 的 <head>：用 RAF callback queue 而不是直接 return 0。
var PAUSE_SCRIPT = '<script>(function(){var __paused=false;var __queue=[];var __nextId=-1;var __qmap=new Map();var __origRAF=window.requestAnimationFrame;var __origCAF=window.cancelAnimationFrame;window.requestAnimationFrame=function(cb){if(__paused){var id=__nextId--;__qmap.set(id,cb);__queue.push(id);return id;}return __origRAF.call(window,cb);};window.cancelAnimationFrame=function(id){if(id<0){__qmap.delete(id);var i=__queue.indexOf(id);if(i>=0)__queue.splice(i,1);return;}return __origCAF.call(window,id);};window.addEventListener("message",function(e){if(!e.data)return;if(e.data.type==="pause"){__paused=true;}else if(e.data.type==="resume"){__paused=false;var q=__queue.slice();__queue.length=0;for(var i=0;i<q.length;i++){var cb=__qmap.get(q[i]);__qmap.delete(q[i]);if(cb)__origRAF.call(window,cb);}}});})();<\/script>';

// 注入 pause 脚本到 srcdoc / 外链 doc。外链卡（externalUrl）我们没法注入到目标页里——
// 但浏览器对完全离屏的 iframe 自动有 throttle（HTML5 spec），实测离屏 iframe RAF 节流到 ~1Hz，
// CPU 影响很小。所以 pause/resume 主要保护「视口外但还在 rootMargin buffer 内」的卡。
function _injectPauseScript(html){
  if(!html) return html;
  if(/<\/head>/i.test(html)) return html.replace(/<\/head>/i, PAUSE_SCRIPT + '</head>');
  // 没 </head> 就塞到开头
  return PAUSE_SCRIPT + html;
}

// 13 点前的产品定义复盘：feed 不是「全部真动画」，而是「5 张 dashboard srcdoc + 静态截图墙」。
// 重 WebGL/Three.js/GSAP 卡（webgl-magazine / cinematic-3d-scroll / skeleton-fluid-reveal 等）
// 在 13 点前的 doc.js 是 700 字节的「<img src=preview.jpg>」静态预览，不跑动画。
// 详情页才跳转到真页面。
//
// 我们后期把这个设计破坏了：13:26 加入 scroll-3d-grid（51KB GSAP+Lenis）、13:42 加入
// gpu-io-fluid（真 WebGL），还把外链卡改成 iframe.src 直接拉真页面，14 张重 GPU 卡
// 同时跑必撞合成器上限。
//
// 修复：所有外链卡（hasExt=true 即 d.externalUrl 存在的 29 张非 dashboard 卡）feed 内
// 一律降级为 jpg 静态预览（posters/<slug>.jpg 已录好，27MB 全在）。Dashboard 5 张
// 维持完整 srcdoc + pauseScript（这些是纯 DOM/CSS dashboard，不耗 GPU）。
// 详情页 / 提取 DNA / 复制代码路径不变，仍能跳到真页面。

function _buildPosterSrcdoc(slug){
  // 1100×720 静态图卡片，黑底，只有一张 jpg。无脚本，无 RAF，几乎 0 资源消耗。
  return '<!doctype html><html><head><style>html,body{margin:0;padding:0;background:#0a0a0a;width:1100px;height:720px;overflow:hidden}img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;-webkit-user-drag:none}</style></head><body><img src="posters/'+slug+'.jpg" alt=""></body></html>';
}

function _loadFrame(card){
  if(!card || card.__loaded) return;
  var f = card.__frame;
  if(!f) return;
  card.__loaded = true;
  // 外链卡 → jpg 静态预览（13 点前的产品形态）
  // dashboard 卡 → 完整 srcdoc + pauseScript（保留 pause/resume）
  if(card.__extUrl && card.__slug){
    f.srcdoc = _buildPosterSrcdoc(card.__slug);
  } else if(card.__doc){
    f.srcdoc = _injectPauseScript(card.__doc);
  } else if(card.__extUrl){
    f.src = card.__extUrl;
  }
  // 揭开 preview
  card.classList.add('is-live');
  var p = card.__preview;
  if(p && !p.__hiding){
    p.__hiding = true;
    p.classList.add('is-hiding');
    setTimeout(function(){ if(p.parentNode) p.style.display='none'; }, 320);
  }
}

function _pauseFrame(card){
  if(!card || !card.__loaded) return;
  var f = card.__frame;
  if(!f) return;
  try{ f.contentWindow.postMessage({type:'pause'}, '*'); }catch(_){ }
}

function _resumeFrame(card){
  if(!card || !card.__loaded) return;
  var f = card.__frame;
  if(!f) return;
  try{ f.contentWindow.postMessage({type:'resume'}, '*'); }catch(_){ }
}

var _liveObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    var card = e.target;
    if(e.isIntersecting){
      if(!card.__loaded) _loadFrame(card);
      else _resumeFrame(card);
    } else {
      _pauseFrame(card);
    }
  });
},{ rootMargin:'300px 0px 300px 0px' }) : null;

function buildStyleChips(){
  const row = document.getElementById('styleRow');
  row.innerHTML='';
  const autoBtn = document.createElement('button');
  autoBtn.className='chip'+(!currentStyle?' active':'');
  autoBtn.innerHTML = '<span class="chip-swatch" style="background:linear-gradient(135deg,#E8DFD2,#5E6AD2,#FFD83D)"></span>Auto mix';
  autoBtn.onclick = ()=>{currentStyle=null;srefLabel.textContent='auto';buildStyleChips()};
  row.appendChild(autoBtn);
  STYLES.forEach(s=>{
    const b = document.createElement('button');
    b.className = 'chip' + (currentStyle && currentStyle.id===s.id?' active':'');
    b.innerHTML = '<span class="chip-swatch" style="background:'+s.swatch+'"></span>'+s.label;
    b.onclick = ()=>{
      currentStyle = (currentStyle && currentStyle.id===s.id) ? null : s;
      srefLabel.textContent = currentStyle ? currentStyle.id : 'auto';
      buildStyleChips();
    };
    row.appendChild(b);
  });
}
buildStyleChips();

function makeCardEl(d){
  const card = document.createElement('article');
  card.className='card';
  card.dataset.id = d.id;
  card.title = '点击打开详情';

  // ─── 默认每张卡占 1/3 行（CSS 已统一处理：6 列基线下 span 2）───
  // 如果未来出现明显竖向窄卡（aspect ratio 高、内容稀疏），可在模板返回 narrow:true，这里加 .is-narrow。
  if(d.narrow){
    card.classList.add('is-narrow');
  }

  // ─── 缩放路径（保持重构前一致）：所有 styleLock 卡都按 1100 逻辑宽渲染，
  // 外层 transform 缩到 1/3 列宽。让 dashboard / video poster 的视觉高度跟旧版一致。
  // ─── 挂载路径：dashboard（无 externalUrl）走 srcdoc；其余走 iframe.src（变体卡） ───
  const hasExt = !!d.externalUrl && d.externalUrl.indexOf('http') !== 0;
  const isScaled = !!d.styleLock;            // 控制布局：是否按 1100 缩放
  const isDashboard = !!d.styleLock && !hasExt;
  const LOGICAL_W = isScaled ? 1100 : 0;
  if(isScaled) card.classList.add('has-scale');

  // 解析 slug：dashboard 用 styleLock，其它从 externalUrl 推导
  const slug = d.styleLock || (d.externalUrl||'').replace(/\.html$/,'').split('/').pop() || d.id;

  card.__isDashboard = isDashboard;
  card.__extUrl = (hasExt ? d.externalUrl : '') || '';
  card.__doc = d.doc || '';
  card.__frameHeight = d.height || 360;
  card.__slug = slug;

  // ─── 1. iframe 节点先挂上（不写 srcdoc/src，等进视口才 lazy 写入） ───
  // 这样 DOM 结构稳定，进视口后只是给 iframe 赋 src/srcdoc，不需要 createElement，
  // 也不会有"卸载→重挂"导致的 RAF 冷启动。
  const frame = document.createElement('iframe');
  frame.className = 'card-frame card-frame--live';
  // 全部走 srcdoc 模式：sandbox=allow-scripts 即可（不需要 same-origin）。
  // pauseScript 在 srcdoc 内部劫持 RAF，postMessage pause/resume 正常工作。
  frame.setAttribute('sandbox','allow-scripts');
  frame.setAttribute('loading','lazy');
  frame.style.height = card.__frameHeight + 'px';
  if(isScaled){
    frame.style.width = '1100px';
    frame.style.transformOrigin = 'top left';
  }
  card.__frame = frame;
  card.__loaded = false;
  card.appendChild(frame);

  // ─── 2. 占位层覆盖在 iframe 上，等 iframe load 后淡出 ───
  const preview = document.createElement('div');
  preview.className = 'card-preview';
  // dashboard 没录 jpg poster，退回纯渐变 + 标题
  var posterUrl = hasExt ? ('posters/' + slug + '.jpg') : '';
  preview.innerHTML =
    (posterUrl ? '<img class="card-poster" alt="" loading="lazy" src="'+posterUrl+'"/>' : '') +
    '<div class="card-preview-shimmer"></div>'+
    '<div class="card-preview-title">'+(d.title||'Design preview')+'</div>'+
    '<div class="card-preview-sub">'+(d.styleLabel||'Design DNA')+'</div>';
  card.__preview = preview;
  card.appendChild(preview);

  // ─── 3. observe：进视口 lazy load，离屏 pause（不卸载） ───
  if(_liveObserver) _liveObserver.observe(card);
  else _loadFrame(card);

  // ─── 高度对齐策略 ───
  // 1) 普通卡：按模板声明 d.height 直接 span。
  // 2) dashboard 卡：以逻辑宽 LOGICAL_W 渲染 iframe，然后 scale = card 实际宽 / LOGICAL_W，
  //    缩放后 card 高度 = d.height * scale。
  // 3) grid span 用最终高度 ceil 到 16px 的整数倍。
  function applyRowSpan(){
    var cardW = card.clientWidth;
    var fallbackH = (d.height || 360) + 2;
    var cardH;
    if(isScaled && cardW > 0){
      var scale = Math.min(1, cardW / LOGICAL_W);
      var tf = 'scale(' + scale + ')';
      card.__frameTransform = tf;
      // 同步给已挂的 iframe（dashboard srcdoc 或外链 src）
      if(card.__frame) card.__frame.style.transform = tf;
      cardH = Math.round((d.height || 360) * scale) + 2;
    } else {
      cardH = fallbackH;
    }
    var span = Math.ceil((cardH + 8) / 16);
    card.style.gridRowEnd = 'span ' + span;
    card.style.height = cardH + 'px';
    card.style.alignSelf = 'start'; // 不被 grid track 拉伸
  }
  applyRowSpan();
  // 兜底：图片/字体后续抵达可能改变高度
  if(window.ResizeObserver){
    var ro = new ResizeObserver(function(){ applyRowSpan(); });
    ro.observe(card);
  }

  const badge = document.createElement('div');
  badge.className='card-badge';
  badge.textContent = d.styleLabel;
  card.appendChild(badge);

  if(d.featured && !d.pinned){
    // 只持久化用户/生成精选；系统 pinned 卡不再写入 localStorage，避免完整 srcdoc 长期堆积造成卡顿。
    if(!featuredMap.has(d.id)){
      featuredMap.set(d.id, {
        id:d.id, title:d.title, styleLabel:d.styleLabel, styleId:d.styleId,
        sref:d.sref, prompt:d.prompt, doc:d.doc, height:d.height,
        ts: Date.now()
      });
    }
  }

  // ─── Hover 浮出：提取 DNA（仅对有 kit 的卡片显示） ───
  // 白名单：每张卡片需要在 KIT_AVAILABLE 注册才会出现按钮，避免点击随机卡片跳到 404。
  // 新增 kit 后只需要在这个 Set 里加 slug。
  // slug 解析优先用 styleLock（处理 buildPinnedFor 生成的动态 id 如 d4ax 这类情况），
  // 退化时再用 id 去掉 'd-' 前缀（处理静态 pinned 卡片如 'd-a-record'）。
  const KIT_AVAILABLE = new Set(['a-record','nothing','retro-ascii','mercury']);
  const _slug = d.styleLock || (d.id||'').replace(/^d-/, '');
  if(KIT_AVAILABLE.has(_slug)){
    const fav = document.createElement('button');
    fav.type='button';
    fav.className = 'card-fav';
    fav.dataset.act = 'extract-dna';
    fav.title = '提取该卡片的 Design DNA · 打开设计系统文档';
    // code icon: < / >
    fav.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="13" y1="4" x2="11" y2="20"/></svg><span>提取 DNA</span>';
    fav.addEventListener('click',(e)=>{
      e.stopPropagation();
      openCardDNA(d, fav);
    });
    card.appendChild(fav);
  }

  // ─── Hover 右上角操作组：收藏 + 点赞（参考 Variant） ───
  {
    const actions = document.createElement('div');
    actions.className = 'card-actions';

    // 收藏（书签）
    const saved = savedMap.has(d.id);
    const saveBtn = document.createElement('button');
    saveBtn.type='button';
    saveBtn.className='act act-save' + (saved ? ' is-on' : '');
    saveBtn.dataset.act = 'save';
    saveBtn.title = saved ? tr('unfavTitle') : tr('favTitle');
    saveBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="'+(saved?'currentColor':'none')+'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
    saveBtn.addEventListener('click',(e)=>{
      e.stopPropagation();
      toggleSaveAction(d, saveBtn);
    });
    actions.appendChild(saveBtn);

    // 点赞（心形）
    const liked = likedMap.has(d.id);
    const likeBtn = document.createElement('button');
    likeBtn.type='button';
    likeBtn.className='act act-like' + (liked ? ' is-on' : '');
    likeBtn.dataset.act = 'like';
    likeBtn.title = liked ? '取消点赞' : '点赞';
    likeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="'+(liked?'currentColor':'none')+'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    likeBtn.addEventListener('click',(e)=>{
      e.stopPropagation();
      toggleLikeAction(d, likeBtn);
    });
    actions.appendChild(likeBtn);

    card.appendChild(actions);
  }

  // 单击卡片主体 → 进入详情页（参考 Variant）
  // 子按钮已通过 e.stopPropagation() 阻止冒泡，不受影响
  card.addEventListener('click',()=>openDetail(d));
  // 双击兜底（兼容旧交互习惯）
  card.addEventListener('dblclick',()=>openDetail(d));

  return card;
}

function appendDesigns(list){
  // ★ 硬性约束：feed 中同一个 styleLock 只允许出现一次
  //   这是最后一道闸门，无论卡片来自系统 pin / 用户精选 / 随机批次 / AI 批次，
  //   只要 styleLock 在 feed 中已存在，就直接丢弃。
  const seenLocks = new Set();
  designStore.forEach(d => { if(d && d.styleLock) seenLocks.add(d.styleLock); });
  const filtered = [];
  list.forEach(d => {
    if(!d) return;
    if(d.styleLock){
      if(seenLocks.has(d.styleLock)) return;   // 丢弃重复 dashboard
      seenLocks.add(d.styleLock);
    }
    filtered.push(d);
  });
  const frag = document.createDocumentFragment();
  filtered.forEach(d=>{ designStore.set(d.id,d); frag.appendChild(makeCardEl(d)); });
  feedEl.appendChild(frag);
  reorderFeed();
}

// 收集 feed 中已存在的 styleLock —— 同一个 dashboard 级模板只允许出现一次
function collectUsedStyleLocks(){
  const locks = new Set();
  designStore.forEach(d=>{
    if(d && d.styleLock) locks.add(d.styleLock);
  });
  return [...locks];
}

let loading=false;
// Curated catalog only: do not append legacy random/local template cards on scroll.
// bootFeed() below has its own pendingDesigns sentinel that only reveals curated pinned cards.
const io = { observe:function(){} };
io.observe(sentinel);

function regenerate(){
  flash('当前仅展示定制化灵感卡片');
  window.scrollTo({top:0,behavior:'smooth'});
}
btnGen.addEventListener('click',regenerate);
promptEl.addEventListener('keydown',(e)=>{
  if((e.metaKey||e.ctrlKey) && e.key==='Enter'){ e.preventDefault(); regenerate(); }
  if(e.key==='Enter' && !e.shiftKey && !e.isComposing){ e.preventDefault(); regenerate(); }
});
promptEl.addEventListener('input',()=>{
  promptEl.style.height='auto';
  promptEl.style.height = Math.min(120, promptEl.scrollHeight) + 'px';
});

document.getElementById('styleDropper').addEventListener('click', async ()=>{
  const v = window.prompt('粘贴一个图片 URL 或网址（demo 用哈希挑一个预设）：','');
  if(!v) return;
  let h=0; for(let i=0;i<v.length;i++) h=(h*31+v.charCodeAt(i))>>>0;
  currentStyle = STYLES[h % STYLES.length];
  srefLabel.textContent = 'dropped·' + currentStyle.id;
  buildStyleChips();
});

// ─── Sidebar tabs ───
const styleDrawer = document.getElementById('styleDrawer');
function setSideTab(name){
  document.querySelectorAll('.side-tab').forEach(x=>x.classList.toggle('active', x.dataset.tab === name));
}
document.querySelectorAll('.side-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    const t = tab.dataset.tab;
    const savedPanel = document.getElementById('savedPanel');

    if(t === 'style'){
      setSideTab('style');
      if(savedPanel) savedPanel.classList.remove('open');
      styleDrawer.classList.add('open');
      return;
    }

    if(t === 'library'){
      // 灵感库 = feed 主视图：收起所有浮层，回到默认
      setSideTab('library');
      styleDrawer.classList.remove('open');
      if(savedPanel) savedPanel.classList.remove('open');
      if(typeof closeDetail === 'function' && detailView?.classList.contains('open')) closeDetail();
      return;
    }

    if(t === 'saved'){
      setSideTab('saved');
      styleDrawer.classList.remove('open');
      toggleSavedPanel(true);
      return;
    }

    if(t === 'folders'){
      setSideTab('folders');
      styleDrawer.classList.remove('open');
      if(savedPanel) savedPanel.classList.remove('open');
      if(typeof flash === 'function') flash('文件夹视图');
      return;
    }
  });
});

// ─── 视图模式切换（已移除 view-dock chips） ───

// ─── Detail View（整页 + 面包屑返回） ───
const detailView = document.getElementById('detailView');
let currentDesign = null;
function openDetail(d, opts){
  currentDesign = d;
  document.getElementById('dTitle').textContent = d.title || tr('untitled');
  document.getElementById('dSub').textContent = (d.styleLabel ? d.styleLabel + ' · ' : '') + '--sref ' + (d.sref||'—');
  const idEl = document.getElementById('dId');
  if(idEl) idEl.textContent = '#' + d.id;
  const pEl = document.getElementById('dPrompt');
  if(pEl) pEl.textContent = d.prompt || '—';
  // If card has an external URL, navigate directly instead of iframe
  if(d.externalUrl){
    window.location.href = d.externalUrl;
    return;
  }
  const frame = document.getElementById('dFrame');
  frame.setAttribute('sandbox','allow-scripts allow-same-origin');
  // 详情页尽量把 iframe 撑大：基于视口高度动态算，最少 72vh，最多 92vh
  const vh = window.innerHeight || 900;
  const targetH = Math.min(Math.max((d.height||720) + 40, Math.round(vh * 0.72)), Math.round(vh * 0.92));
  frame.style.height = targetH + 'px';
    frame.removeAttribute('src');
    // iframe 内部 html/body 默认白底 → 透出纯黑宿主，去掉 dashboard 外圈白细线
    const reset = '<style>html,body{background:transparent !important;margin:0;padding:0}</style>';
    frame.srcdoc = reset + d.doc;
  detailView.classList.add('open');
  detailView.setAttribute('aria-hidden','false');
  document.body.classList.add('is-detail');
  // 滚回顶，保证面包屑可见
  const body = detailView.querySelector('.detail-body');
  if(body) body.scrollTop = 0;
  // URL hash 同步（支持浏览器后退）
  if(!opts || !opts.skipHash){
    try{ history.pushState({detail:d.id}, '', '#d/'+d.id); }catch(e){}
  }
}
function closeDetail(opts){
  detailView.classList.remove('open');
  detailView.setAttribute('aria-hidden','true');
  document.body.classList.remove('is-detail');
  // 清空 iframe 以释放内存
  const frame = document.getElementById('dFrame');
  if(frame) frame.srcdoc = 'about:blank';
  currentDesign = null;
  if(!opts || !opts.skipHash){
    if(location.hash.startsWith('#d/')){
      try{ history.pushState({}, '', location.pathname + location.search); }catch(e){}
    }
  }
}
// 兼容旧调用（saved panel / dblclick / act-open 都可能调 openDrawer）
const openDrawer = openDetail;
const closeDrawer = closeDetail;

document.getElementById('crumbHome').addEventListener('click', ()=>closeDetail());
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape' && document.body.classList.contains('is-detail')) closeDetail(); });

// 浏览器前进/后退同步
window.addEventListener('popstate', ()=>{
  const m = location.hash.match(/^#d\/(.+)$/);
  if(m){
    const d = designStore.get(m[1]);
    if(d){ openDetail(d, {skipHash:true}); return; }
  }
  // 无 hash → 回到首页
  if(document.body.classList.contains('is-detail')) closeDetail({skipHash:true});
});

document.getElementById('dCopy').addEventListener('click', async ()=>{
  if(!currentDesign) return;
  try{ await navigator.clipboard.writeText(currentDesign.doc); flash(tr('copied')); }catch(e){ flash(tr('copyFailed')); }
});
document.getElementById('dSave').addEventListener('click', ()=>{
  if(!currentDesign) return;
  toggleSave(currentDesign);
  flash(savedMap.has(currentDesign.id)?tr('favSaved'):tr('favRemoved'));
});
document.getElementById('dRemix').addEventListener('click', ()=>{
  if(!currentDesign) return;
  currentStyle = STYLES.find(s=>s.id===currentDesign.styleId);
  srefLabel.textContent = currentStyle.id;
  buildStyleChips();
  closeDrawer();
  regenerate();
});
document.getElementById('dMore').addEventListener('click', ()=>{
  if(!currentDesign) return;
  currentStyle = STYLES.find(s=>s.id===currentDesign.styleId);
  promptEl.value = currentDesign.prompt;
  srefLabel.textContent = currentStyle.id;
  buildStyleChips();
  closeDrawer();
  regenerate();
});

function toggleSave(d, btn){
  if(savedMap.has(d.id)) savedMap.delete(d.id);
  else savedMap.set(d.id, { id:d.id, title:d.title, styleLabel:d.styleLabel, doc:d.doc, height:d.height });
  localStorage.setItem('variant_saved', JSON.stringify([...savedMap.entries()]));
  document.querySelectorAll('.card[data-id="'+d.id+'"] [data-act=save]').forEach(b=>{
    if(savedMap.has(d.id)) b.classList.add('saved'); else b.classList.remove('saved');
  });
  syncSaveIcons(d.id);
  renderSavedPanel();
}

// 右上角 hover 操作组：收藏切换（含图标填充、pop 动画、同步底部按钮 & 收藏面板）
function toggleSaveAction(d, btn){
  toggleSave(d);
  btn.classList.add('pop');
  setTimeout(()=>btn.classList.remove('pop'), 360);
}

// 右上角 hover 操作组：点赞切换（独立持久化，仅影响右上角图标）
function toggleLikeAction(d, btn){
  const wasOn = likedMap.has(d.id);
  if(wasOn) likedMap.delete(d.id);
  else likedMap.set(d.id, { id:d.id, ts:Date.now() });
  localStorage.setItem('variant_liked', JSON.stringify([...likedMap.entries()]));
  syncLikeIcons(d.id);
  btn.classList.add('pop');
  setTimeout(()=>btn.classList.remove('pop'), 360);
}

// 将所有同 id 卡片的"收藏"右上角图标状态对齐
function syncSaveIcons(id){
  const on = savedMap.has(id);
  document.querySelectorAll('.card[data-id="'+id+'"] .card-actions .act-save').forEach(b=>{
    b.classList.toggle('is-on', on);
    b.title = on ? tr('unfavTitle') : tr('favTitle');
    const svg = b.querySelector('svg');
    if(svg) svg.setAttribute('fill', on ? 'currentColor' : 'none');
  });
}

// 将所有同 id 卡片的"点赞"右上角图标状态对齐
function syncLikeIcons(id){
  const on = likedMap.has(id);
  document.querySelectorAll('.card[data-id="'+id+'"] .card-actions .act-like').forEach(b=>{
    b.classList.toggle('is-on', on);
    b.title = on ? '取消点赞' : '点赞';
    const svg = b.querySelector('svg');
    if(svg) svg.setAttribute('fill', on ? 'currentColor' : 'none');
  });
}

// ─── 复制卡片源代码 ───
async function copyCardCode(d, btn){
  let code = '';
  let label = '';
  try{
    if(d.externalUrl){
      // 优先获取外链独立页源码（如 carrot-tech.html）
      const res = await fetch(d.externalUrl, {cache:'no-cache'});
      if(res.ok){
        code = await res.text();
        label = d.externalUrl;
      }
    }
    if(!code && d.doc){
      // 回退到 srcdoc 字符串
      code = String(d.doc);
      label = d.id + ' (srcdoc)';
    }
    if(!code){ throw new Error('no source'); }

    if(navigator.clipboard && navigator.clipboard.writeText){
      await navigator.clipboard.writeText(code);
    } else {
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }

    // 视觉反馈
    if(btn){
      btn.classList.add('pulse');
      const span = btn.querySelector('span');
      const old = span ? span.textContent : '';
      if(span) span.textContent = '已复制';
      setTimeout(()=>{
        btn.classList.remove('pulse');
        if(span) span.textContent = old || '复制代码';
      }, 1100);
    }
    if(typeof flash === 'function'){ flash('已复制 · ' + label); }
  }catch(err){
    console.warn('copyCardCode failed:', err);
    if(typeof flash === 'function'){ flash('复制失败'); }
  }
}

// ─── 提取 DNA：打开卡片对应的 kit 设计系统文档页 ───
// 约定：kits/<slug>/index.html 存在则在新标签打开。
// 直接 window.open(absUrl)，不做 HEAD 预检：HEAD 在 GitHub Pages CDN 偶有不稳定，
// 也避免 about:blank 占位窗口的相对 URL 解析坑。目标页面自身的 200/404 由浏览器决定。
function openCardDNA(d, btn){
  // 与 makeCardEl 的 slug 解析保持一致：优先 styleLock，再退化到 id。
  const slug = d.styleLock || (d.id||'').replace(/^d-/, '') || 'card';
  const absUrl = new URL('./kits/' + slug + '/index.html', location.href).href;
  const setLabel = (txt)=>{
    if(!btn) return;
    const span = btn.querySelector('span');
    if(span) span.textContent = txt;
  };

  // 直接打开新标签 —— 用户手势同步路径，无 await，不会被弹窗拦截
  const win = window.open(absUrl, '_blank', 'noopener');
  if(!win){
    // 极少数情况下被拦截 → 退化到当前标签跳转
    setLabel('打开中…');
    location.href = absUrl;
    return;
  }

  // 视觉反馈
  if(btn){
    btn.classList.add('pulse');
    const span = btn.querySelector('span');
    const old = span ? span.textContent : '提取 DNA';
    if(span) span.textContent = '已打开';
    setTimeout(()=>{
      btn.classList.remove('pulse');
      if(span) span.textContent = old;
    }, 1100);
  }
  if(typeof flash === 'function'){ flash('已打开 · ' + slug + ' DNA'); }
}

// ─── 下载卡片素材包（HTML + Design System zip） ───
// 保留：当用户在 kit 文档页内一键下载时使用同一份打包逻辑（也保留以备未来恢复 hover 入口）。
// 约定：如果项目存在 kits/<cardId>/，则一并打包；否则回退到只打 HTML
async function downloadCardKit(d, btn){
  // 卡片 slug：优先 styleLock，退化到 id 去掉 'd-' 前缀。
  const slug = d.styleLock || (d.id||'').replace(/^d-/, '') || 'card';
  const setLoading = (on)=>{
    if(!btn) return;
    const span = btn.querySelector('span');
    btn.dataset.busy = on ? '1' : '';
    if(span) span.textContent = on ? '打包中…' : '下载素材包';
  };

  try{
    setLoading(true);
    if(typeof JSZip === 'undefined' && typeof window.__loadJSZip === 'function'){
      await window.__loadJSZip();
    }
    if(typeof JSZip === 'undefined') throw new Error('JSZip not loaded');

    const zip = new JSZip();
    const folder = zip.folder(slug + '-kit');

    // ① 卡片 HTML：优先 externalUrl，回退 srcdoc
    let html = '';
    if(d.externalUrl){
      try{
        const r = await fetch(d.externalUrl, {cache:'no-cache'});
        if(r.ok) html = await r.text();
      }catch(_){}
    }
    if(!html && d.doc) html = String(d.doc);

    // ② 探测 kits/<slug>/ 目录是否存在 design-system 文件
    const kitBase = './kits/' + slug + '/';
    // 完整文件清单：核心文档 + AI 提示 + Tailwind preset + 8 个 component + 2 个 example + 入口可视化页
    const kitFiles = [
      'README.md','design-system.md','design-system.css','design-tokens.json',
      'ai-prompt.md','tailwind-tokens.js','index.html',
      'components/01-shell.html','components/02-pill.html','components/03-glass-panel.html',
      'components/04-status-dot.html','components/05-mono-display.html','components/06-meter-ring.html',
      'components/07-spectrum-bars.html','components/08-cap-label.html',
      'examples/original.html','examples/settings-page.html'
    ];
    const fetched = {};
    let hasKit = false;
    let hasKitIndex = false;
    await Promise.all(kitFiles.map(async (f)=>{
      try{
        const r = await fetch(kitBase + f, {cache:'no-cache'});
        if(!r.ok) return;
        const txt = await r.text();
        // GitHub Pages 404 fallback 是 HTML 文档；非 HTML 文件若拿到 <!DOCTYPE html> 就视作 404
        const looksLike404 = /^\s*<!DOCTYPE html/i.test(txt) && !f.endsWith('.html') && !f.endsWith('.md');
        if(looksLike404) return;
        fetched[f] = txt;
        hasKit = true;
        if(f === 'index.html') hasKitIndex = true;
      }catch(_){}
    }));

    // ③ 注入文件
    //    - 若 kit 自带 index.html（可视化设计系统文档页），把卡片 HTML 改名 card.html，
    //      让用户解压后默认看到 kit 文档而非原 1100×720 卡片
    //    - 若 kit 没有 index.html，则卡片 HTML 仍命名 index.html
    if(hasKit){
      Object.entries(fetched).forEach(([name, txt])=>{
        folder.file(name, txt);
      });
      if(html){
        folder.file(hasKitIndex ? 'card.html' : 'index.html', html);
      }
    } else if(html){
      folder.file('index.html', html);
      // 回退 README
      const fallback = [
        '# ' + (d.title || slug) + ' · Inspiration Card',
        '',
        'Source: Design DNA inspiration library',
        'Card id: `' + d.id + '`',
        '',
        '> Design system file not yet authored for this card.',
        '> The HTML in `index.html` is self-contained; styles live inline.',
        '',
        'Origin: ' + (d.externalUrl || '(srcdoc)'),
      ].join('\n');
      folder.file('README.md', fallback);
    }

    // ④ 生成 blob 并触发下载
    const blob = await zip.generateAsync({type:'blob'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = slug + '-kit.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url), 1500);

    setLoading(false);
    if(btn){
      btn.classList.add('pulse');
      const span = btn.querySelector('span');
      if(span) span.textContent = '已下载';
      setTimeout(()=>{
        btn.classList.remove('pulse');
        if(span) span.textContent = '下载素材包';
      }, 1100);
    }
    if(typeof flash === 'function'){
      flash(hasKit ? ('已下载 · ' + slug + '-kit.zip') : ('已下载（无 design system）· ' + slug + '-kit.zip'));
    }
  }catch(err){
    console.warn('downloadCardKit failed:', err);
    setLoading(false);
    if(typeof flash === 'function'){ flash('下载失败：' + (err.message||err)); }
  }
}

function toggleFeatured(d, btn, cardEl){
  if(wasOn){
    featuredMap.delete(d.id);
  } else {
    // 持久化完整 doc 以便刷新后复原
    featuredMap.set(d.id, {
      id:d.id, title:d.title, styleLabel:d.styleLabel, styleId:d.styleId,
      sref:d.sref, prompt:d.prompt, doc:d.doc, height:d.height,
      ts: Date.now()
    });
  }
  localStorage.setItem('variant_featured', JSON.stringify([...featuredMap.entries()]));

  // 更新所有同 id 卡片的按钮态
  document.querySelectorAll('.card[data-id="'+d.id+'"]').forEach(c=>{
    const f = c.querySelector('[data-act=feature]');
    if(!f) return;
    if(featuredMap.has(d.id)){
      f.classList.add('is-on');
      f.classList.add('pulse');
      setTimeout(()=>f.classList.remove('pulse'), 600);
      f.querySelector('span').textContent = '已精选';
      f.title = '取消精选';
    } else {
      f.classList.remove('is-on');
      f.querySelector('span').textContent = '设为精选';
      f.title = '设为精选（前置到顶部）';
    }
  });

  if(!wasOn && cardEl){
    // 设为精选 → 把卡片移到 feed 顶部
    moveCardToFront(cardEl);
    flash && flash('已置顶到精选');
  } else {
    reorderFeed();
    flash && flash('已取消精选');
  }
}

function moveCardToFront(cardEl){
  if(!cardEl) return;
  reorderFeed();
  cardEl.style.animation = 'rise .55s ease both';
  window.scrollTo({top:0, behavior:'smooth'});
}

// ─── 全量重排：精选区（按 ts 倒序） + 非精选区（保持原顺序） ───
function reorderFeed(){
  if(!feedEl) return;
  const cards = Array.from(feedEl.children).filter(el => el.classList && el.classList.contains('card'));
  if(!cards.length) return;
  const featured = [];
  const others = [];
  cards.forEach(el=>{
    const id = el.getAttribute('data-id');
    if(id && featuredMap.has(id)){
      const ts = (featuredMap.get(id) && featuredMap.get(id).ts) || 0;
      featured.push({ el, ts });
    } else {
      others.push(el);
    }
  });
  // 精选区：按 ts 倒序（最新精选的在最上）
  featured.sort((a,b)=>b.ts - a.ts);
  const frag = document.createDocumentFragment();
  featured.forEach(f => frag.appendChild(f.el));
  others.forEach(el => frag.appendChild(el));
  feedEl.appendChild(frag);
}
function renderSavedPanel(){
  const list = document.getElementById('savedList');
  if(savedMap.size===0){ list.innerHTML = '<div class="saved-empty">'+tr('savedEmpty')+'</div>'; return; }
  list.innerHTML='';
  [...savedMap.values()].reverse().forEach(item=>{
    const row = document.createElement('div');
    row.className='saved-item';
    row.innerHTML = '<div class="saved-thumb"><iframe sandbox srcdoc="'+(item.doc||'').replace(/"/g,'&quot;')+'"></iframe></div>'+
      '<div class="saved-meta"><div style="color:#fff">'+item.title+'</div><div>'+item.styleLabel+'</div></div>';
    row.addEventListener('click',()=>{
      const d = { id:item.id, title:item.title, styleLabel:item.styleLabel, sref:'saved', prompt:'', styleId:'', doc:item.doc, height:item.height };
      openDrawer(d); toggleSavedPanel(false);
    });
    list.appendChild(row);
  });
}
function toggleSavedPanel(force){
  const p = document.getElementById('savedPanel');
  const willOpen = force!==undefined ? force : !p.classList.contains('open');
  p.classList.toggle('open', willOpen);
  if(willOpen){
    setSideTab('saved');
    if(styleDrawer) styleDrawer.classList.remove('open');
  } else if(!styleDrawer || !styleDrawer.classList.contains('open')) {
    setSideTab('library');
  }
}
document.addEventListener('keydown',(e)=>{
  if(e.target===promptEl) return;
  if(e.key==='/'){ e.preventDefault(); promptEl.focus(); }
  if(e.key==='s' || e.key==='S'){ toggleSavedPanel(); }
});
renderSavedPanel();

// ─── 生成中浮卡 ───
function showGenToast(prompt, n){
  const sec = Math.max(2, Math.round(n*0.7));
  const styleLabel = currentStyle ? currentStyle.label : tr('autoMix');
  genTitle.textContent = tr('generating').replace('{n}', n);
  genSub.textContent   = tr('generatingSub').replace('{style}', styleLabel).replace('{sec}', sec);
  genToast.classList.add('show');
}
function hideGenToast(){ genToast.classList.remove('show'); }
document.getElementById('genClose').addEventListener('click', hideGenToast);

function flash(msg){
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#fff;color:#111;padding:9px 16px;border-radius:999px;font-size:12.5px;font-weight:500;z-index:999;box-shadow:0 8px 24px rgba(0,0,0,.3);animation:rise .2s ease';
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),1400);
}

// 首屏
promptEl.value = 'AI writing tool for thoughtful creators';

// ───── AI mode ─────
const aiCheckbox = document.getElementById('aiCheckbox');
const aiStatus = document.getElementById('aiStatus');
let aiAvailable = false;
let aiModel = '';

(async ()=>{
  try{
    const r = await fetch('/api/health');
    const j = await r.json();
    aiAvailable = !!j.hasKey;
    aiModel = j.model || '';
    aiStatus.textContent = aiAvailable ? 'on' : 'off';
    aiStatus.style.color = aiAvailable ? '#9be39b' : '#e08a8a';
    if(aiAvailable) aiCheckbox.checked = true;
  }catch(e){
    aiStatus.textContent = 'offline';
    aiStatus.style.color = '#e08a8a';
  }
})();

async function generateBatchAI(promptRaw, n){
  const r = await fetch('/api/generate', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ prompt: promptRaw, n })
  });
  if(!r.ok){ const t = await r.text(); throw new Error('AI '+r.status+': '+t.slice(0,200)); }
  const j = await r.json();
  return j.designs.map((d)=>({
    id: 'ai' + (idCounter++).toString(36).padStart(4,'0'),
    title: d.title || 'Untitled',
    height: Math.max(280, Math.min(720, d.height || 420)),
    doc: d.doc,
    styleId: 'ai', styleLabel: 'AI · '+(aiModel||'sonnet'),
    sref: 'ai-'+Math.random().toString(36).slice(2,7),
    prompt: promptRaw,
  }));
}

async function smartGenerate(promptRaw, n, replace){
  showGenToast(promptRaw, n);
  if(aiCheckbox.checked && aiAvailable){
    try{
      const ai = await generateBatchAI(promptRaw, n);
      if(replace){ designStore.clear(); feedEl.innerHTML=''; }
      appendDesigns(ai);
      hideGenToast();
      return;
    }catch(e){
      console.warn('AI failed, falling back:', e.message);
      flash('AI 失败，回退本地模板');
    }
  }
  // 若 replace，先清仓再生成（此时排除集合应为空，让三张 dashboard 可重新出现）
  if(replace){ designStore.clear(); feedEl.innerHTML=''; }
  const local = generateBatch(promptRaw, currentStyle, n, { excludeStyleLocks: collectUsedStyleLocks() });
  appendDesigns(local);
  setTimeout(hideGenToast, 600);
}

// 首批 — pin 一张 styleLock dashboard 卡
function buildPinnedFor(styleId, headlineFallback){
  const p = parsePrompt(promptEl.value || headlineFallback || 'Design DNA');
  const style = STYLES.find(s => s.id === styleId);
  if(!style) return null;
  // 动态查找带对应 styleLock 的模板
  let tplIdx = -1;
  for(let i=0;i<TEMPLATES.length;i++){
    try{
      const probe = TEMPLATES[i]({headline:'probe'}, style.tokens);
      if(probe && probe.styleLock === styleId){ tplIdx = i; break; }
    }catch(_){}
  }
  if(tplIdx < 0) return null;
  const design = TEMPLATES[tplIdx](p, style.tokens);
  return {
    id: 'd' + (idCounter++).toString(36).padStart(4,'0'),
    styleId: style.id, styleLabel: style.label,
    sref: style.id + '-featured',
    prompt: p.raw,
    pinned: true,
    featured: true,
    ...design
  };
}
// 首屏：用户精选（最优先） + Nothing pin + Mercury pin + 随机 10 张
(function bootFeed(){
  var firstBatch = [];
  // 0) 清理 featuredMap 中的孤儿记录（styleId 已不存在的旧模板，例如已下线的 orbital）
  //    并把所有精选卡的 id 规范化到 'feat-' 前缀，避免与新生成卡的随机 id 命名空间碰撞
  try {
    var validStyles = new Set(STYLES.map(s=>s.id));
    var dirty = false;
    var migrated = new Map();
    [...featuredMap.entries()].forEach(([id, item])=>{
      if(item && item.styleId && !validStyles.has(item.styleId)){
        dirty = true; // drop orphan
        return;
      }
      var newId = (id && id.indexOf('feat-')===0) ? id : ('feat-' + (item && item.id ? item.id : id));
      if(newId !== id) dirty = true;
      var newItem = Object.assign({}, item, { id: newId });
      migrated.set(newId, newItem);
    });
    if(dirty){
      featuredMap = migrated;
      localStorage.setItem('variant_featured', JSON.stringify([...featuredMap.entries()]));
    }
  } catch(_){}
  // 1) 用户精选：按时间倒序（最新精选的在最上面）
  //    [TEMP] 仅放过 nothing + retro-ascii 两类，其他 styleId 临时屏蔽
  //    ★ 同时跳过会被 §2 系统 pin 的 styleLock —— 让首屏拿到模板的最新动态版本，
  //       而不是历史快照（避免时钟、波形等动态数据停在旧时间）
  try {
    var ALLOW_LOCKS = new Set(['nothing','retro-ascii','linear','nothing-mobile','mercury']);
    var SYSTEM_PINNED = new Set(['nothing','retro-ascii','linear','nothing-mobile','mercury']); // 与 §2 保持一致
    var feats = [...featuredMap.values()].sort((a,b)=>(b.ts||0)-(a.ts||0));
    feats.forEach(item=>{
      if(!ALLOW_LOCKS.has(item.styleId)) return;
      if(SYSTEM_PINNED.has(item.styleId)) return; // 让位给 §2 的新鲜 pin
      firstBatch.push({
        id: item.id,
        title: item.title,
        styleLabel: item.styleLabel,
        styleId: item.styleId || '',
        styleLock: item.styleId || '', // 让 appendDesigns 去重器认得
        sref: item.sref || 'user-featured',
        prompt: item.prompt || '',
        doc: item.doc,
        height: item.height
      });
    });
  } catch(_){}
  // 2) 系统 pin —— 临时只保留 nothing + retro-ascii 两张 dashboard
  var pinnedLocks = [];
  try { var n = buildPinnedFor('nothing','Design DNA'); if(n){ firstBatch.push(n); pinnedLocks.push('nothing'); } } catch(_){}
  try { var r = buildPinnedFor('retro-ascii','RETRO ASCII'); if(r){ firstBatch.push(r); pinnedLocks.push('retro-ascii'); } } catch(_){}
  try { var l = buildPinnedFor('linear','Active cycle'); if(l){ firstBatch.push(l); pinnedLocks.push('linear'); } } catch(_){}
  try { var nm = buildPinnedFor('nothing-mobile','Now Playing'); if(nm){ firstBatch.push(nm); pinnedLocks.push('nothing-mobile'); } } catch(_){}
  // Mercury Treasury — 第 5 张 ceiling
  try { var m = buildPinnedFor('mercury','Good afternoon, Lingfeng.'); if(m){ firstBatch.push(m); pinnedLocks.push('mercury'); } } catch(_){}
  // a.Record — warm minimal audio dashboard (1:1 from reference screenshot)
  try {
    firstBatch.push({
      id:'d-a-record', styleId:'a-record', styleLabel:'Warm audio dashboard', sref:'a-record-pin', prompt:'a.Record warm minimal vocal tracking dashboard', pinned:true,
      title:'a.Record · Vocal tracking', height:720, styleLock:'a-record',
      doc: (typeof A_RECORD_DOC !== 'undefined') ? A_RECORD_DOC : '', externalUrl:'a-record.html'
    });
  } catch(_){}
  // Vercel Deploy — frontend cloud overview (Geist + shadow-as-border)
  try {
    firstBatch.push({
      id:'d-vercel-deploy', styleId:'vercel-deploy', styleLabel:'Vercel · Frontend cloud', sref:'vercel-deploy-pin', prompt:'Vercel deploy dashboard with Geist typography, shadow-as-border, three-step pipeline', pinned:true,
      title:'Vercel · Ship at the speed of thought', height:720, styleLock:'vercel-deploy',
      doc: (typeof VERCEL_DEPLOY_DOC !== 'undefined') ? VERCEL_DEPLOY_DOC : '', externalUrl:'vercel-deploy.html'
    });
  } catch(_){}
  // Glyph OS removed (2026-05-16) — overlaps with Nothing System dashboard, kept only Nothing as the canonical pixel-desktop sample.
  // Book Gallery — CodePen 3D page flip
  try {
    firstBatch.push({
      id:'d-book-gallery-3d', styleId:'book-gallery-3d', styleLabel:'3D page flip', sref:'codepen-rnraxwz', prompt:'CodePen RNRaXwZ 3D book gallery page flip', pinned:true,
      title:'Book Gallery · 3D page flip', height:720, styleLock:'book-gallery-3d',
      doc: (typeof BOOK_GALLERY_3D_DOC !== 'undefined') ? BOOK_GALLERY_3D_DOC : '', externalUrl:'book-gallery-3d.html'
    });
  } catch(_){}
  // Delphi — Three.js infinite perspective tunnel
  try {
    firstBatch.push({
      id:'d-delphi-three', styleId:'delphi-three', styleLabel:'Three.js tunnel', sref:'delphi-three-pin', prompt:'Delphi Three clone yourself infinite 3D perspective grid tunnel', pinned:true,
      title:'Delphi · Clone yourself', height:720, styleLock:'delphi-three',
      doc: (typeof DELPHI_THREE_DOC !== 'undefined') ? DELPHI_THREE_DOC : '', externalUrl:'delphi-three.html'
    });
  } catch(_){}
  // WebGL Magazine — source-based WebGL magazine carousel
  try {
    firstBatch.push({
      id:'d-webgl-magazine', styleId:'webgl-magazine', styleLabel:'WebGL magazine', sref:'webgl-magazine-pin', prompt:'J0SUKE WebGL Magazine infinite shader magazine carousel', pinned:true,
      title:'WebGL Magazine · Infinite spread', height:720, styleLock:'webgl-magazine',
      doc: (typeof WEBGL_MAGAZINE_DOC !== 'undefined') ? WEBGL_MAGAZINE_DOC : '', externalUrl:'webgl-magazine.html'
    });
  } catch(_){}
  // Pixel Gooey Tooltip — Codrops segmented tooltip animation
  try {
    firstBatch.push({
      id:'d-pixel-gooey-tooltip', styleId:'pixel-gooey-tooltip', styleLabel:'Pixel tooltip', sref:'codrops-pixel-gooey', prompt:'Codrops segmented pixel gooey tooltip animation', pinned:true,
      title:'Pixel Gooey Tooltip · Segmented animation', height:720, styleLock:'pixel-gooey-tooltip',
      doc: (typeof PIXEL_GOOEY_TOOLTIP_DOC !== 'undefined') ? PIXEL_GOOEY_TOOLTIP_DOC : '', externalUrl:'pixel-gooey-tooltip.html'
    });
  } catch(_){}
  // Skeleton Fluid Reveal — Codrops WebGPU x-ray fluid reveal
  try {
    firstBatch.push({
      id:'d-skeleton-fluid-reveal', styleId:'skeleton-fluid-reveal', styleLabel:'WebGPU x-ray', sref:'codrops-skeleton-fluid', prompt:'Codrops Skeleton Fluid Reveal WebGPU x-ray fluid CRT effect', pinned:true,
      title:'Skeleton Fluid Reveal · X-ray', height:720, styleLock:'skeleton-fluid-reveal',
      doc: (typeof SKELETON_FLUID_REVEAL_DOC !== 'undefined') ? SKELETON_FLUID_REVEAL_DOC : '', externalUrl:'skeleton-fluid-reveal.html'
    });
  } catch(_){}
  // Card Beam Animation — Evervault-style scanner card stream
  try {
    firstBatch.push({
      id:'d-card-beam-animation', styleId:'card-beam-animation', styleLabel:'Scanner cards', sref:'codepen-xbwaqxE', prompt:'CodePen blacklead studio Card Beam Animation Evervault scanner cards', pinned:true,
      title:'Card Beam Animation · Scanner stream', height:720, styleLock:'card-beam-animation',
      doc: (typeof CARD_BEAM_ANIMATION_DOC !== 'undefined') ? CARD_BEAM_ANIMATION_DOC : '', externalUrl:'card-beam-animation.html'
    });
  } catch(_){}
  // Flip Horizontal Lenis — removed (superseded by Pixel Transition request)
  // Pixel Transition — Codrops grid pixel page transition
  try {
    firstBatch.push({
      id:'d-pixel-transition', styleId:'pixel-transition', styleLabel:'Pixel transition', sref:'codrops-pixel-transition', prompt:'Codrops Pixel Transition grid overlay page transition', pinned:true,
      title:'Pixel Transition · Grid reveal', height:720, styleLock:'pixel-transition',
      doc: (typeof PIXEL_TRANSITION_DOC !== 'undefined') ? PIXEL_TRANSITION_DOC : '', externalUrl:'pixel-transition.html'
    });
  } catch(_){}
  // Make Way Grid — Codrops adjoining grid expansion effect
  try {
    firstBatch.push({
      id:'d-makeway-grid-effect', styleId:'makeway-grid-effect', styleLabel:'Make-way grid', sref:'codrops-makeway-grid', prompt:'Codrops Make Way Grid Effect adjoining items expand selected grid image', pinned:true,
      title:'Make Way Grid · Expanding cells', height:720, styleLock:'makeway-grid-effect',
      doc: (typeof MAKEWAY_GRID_EFFECT_DOC !== 'undefined') ? MAKEWAY_GRID_EFFECT_DOC : '', externalUrl:'makeway-grid-effect.html'
    });
  } catch(_){}
  // Text Repetition — Codrops scroll-driven repeated typography
  try {
    firstBatch.push({
      id:'d-text-repetition-effect', styleId:'text-repetition-effect', styleLabel:'Text repetition', sref:'codrops-text-repetition', prompt:'Codrops Text Repetition scroll effect repeated large typography', pinned:true,
      title:'Text Repetition · Scroll typography', height:720, styleLock:'text-repetition-effect',
      doc: (typeof TEXT_REPETITION_EFFECT_DOC !== 'undefined') ? TEXT_REPETITION_EFFECT_DOC : '', externalUrl:'text-repetition-effect.html'
    });
  } catch(_){}
  // Cinematic 3D Scroll — Codrops GSAP/OGL cylinder carousel
  try {
    firstBatch.push({
      id:'d-cinematic-3d-scroll', styleId:'cinematic-3d-scroll', styleLabel:'Cinematic 3D', sref:'codrops-cinematic-3d-scroll', prompt:'Codrops Cinematic 3D Scroll GSAP OGL cylinder carousel particles', pinned:true,
      title:'Cinematic 3D Scroll · Cylinder', height:720, styleLock:'cinematic-3d-scroll',
      doc: (typeof CINEMATIC_3D_SCROLL_DOC !== 'undefined') ? CINEMATIC_3D_SCROLL_DOC : '', externalUrl:'cinematic-3d-scroll.html'
    });
  } catch(_){}
  // Scroll 3D Grid — Codrops perspective image grids
  try {
    firstBatch.push({
      id:'d-scroll-3d-grid', styleId:'scroll-3d-grid', styleLabel:'3D scroll grid', sref:'codrops-scroll-3d-grid', prompt:'Codrops On-Scroll 3D Grid Animations perspective image grids', pinned:true,
      title:'Scroll 3D Grid · Perspective', height:720, styleLock:'scroll-3d-grid',
      doc: (typeof SCROLL_3D_GRID_DOC !== 'undefined') ? SCROLL_3D_GRID_DOC : '', externalUrl:'scroll-3d-grid.html'
    });
  } catch(_){}
  // GPU IO Fluid — Amanda Ghassaei WebGL fluid simulation
  try {
    firstBatch.push({
      id:'d-gpu-io-fluid', styleId:'gpu-io-fluid', styleLabel:'GPU fluid sim', sref:'gpu-io-fluid', prompt:'Amanda Ghassaei GPU IO fluid simulation particles velocity pressure WebGL', pinned:true,
      title:'GPU IO · Fluid simulation', height:720, styleLock:'gpu-io-fluid',
      doc: (typeof GPU_IO_FLUID_DOC !== 'undefined') ? GPU_IO_FLUID_DOC : '', externalUrl:'gpu-io-fluid.html'
    });
  } catch(_){}
  // Glitch Perspective — Codrops 3D pixel glitch hover
  try {
    firstBatch.push({
      id:'d-glitch-perspective', styleId:'glitch-perspective', styleLabel:'3D glitch hover', sref:'codrops-glitch-perspective', prompt:'Codrops 3D Perspective Glitch Hover Effect pixel art perspective cards', pinned:true,
      title:'Glitch Perspective · Pixel hover', height:720, styleLock:'glitch-perspective',
      doc: (typeof GLITCH_PERSPECTIVE_DOC !== 'undefined') ? GLITCH_PERSPECTIVE_DOC : '', externalUrl:'glitch-perspective.html'
    });
  } catch(_){}
  // Marginalia — warm editorial microsite (live 1100x720 thumbnail)
  try {
    firstBatch.push({
      id:'d-marginalia', styleId:'editorial', styleLabel:'Marginalia warm', sref:'marginalia-pin', prompt:'For cosy days', pinned:true,
      title:'Marginalia · For cosy days', height:720, styleLock:'marginalia',
      doc: (typeof MARGINALIA_DOC !== 'undefined') ? MARGINALIA_DOC : '', externalUrl:'marginalia.html'
    });
  } catch(_){}
  // Lucid Drift — WebGL shader weather card (live shader in thumbnail)
  try {
    firstBatch.push({
      id:'d-lucid-drift', styleId:'pastel', styleLabel:'Lucid Drift', sref:'lucid-drift-pin', prompt:'Lucid Drift', pinned:true,
      title:'Lucid Drift · Atmospheric Swell', height:720, styleLock:'lucid-drift',
      doc: (typeof LUCID_DRIFT_DOC !== 'undefined') ? LUCID_DRIFT_DOC : '', externalUrl:'lucid-drift.html'
    });
  } catch(_){}
  // Chronicles of Solitude — 水墨画卷卡片
  try {
    firstBatch.push({
      id:'d-chronicles', styleId:'ink-scroll', styleLabel:'Ink scroll', sref:'chronicles-pin', prompt:'天地蜉蝣，沧海一粟', pinned:true,
      title:'Chronicles of Solitude · 沧海一粟', height:720, styleLock:'chronicles',
      doc: (typeof CHRONICLES_DOC !== 'undefined' && CHRONICLES_DOC) ? CHRONICLES_DOC : '', externalUrl:'chronicles-solitude.html'
    });
  } catch(_){}
  // Hardware Console — Meteorological digital sys
  try {
    firstBatch.push({
      id:'d-hardware-console', styleId:'hardware-console', styleLabel:'Hardware console', sref:'hardware-console-pin', prompt:'Meteorological digital sys', pinned:true,
      title:'Meteorological Digital SYS · Tokyo', height:720, styleLock:'hardware-console',
      doc: (typeof HARDWARE_CONSOLE_DOC !== 'undefined') ? HARDWARE_CONSOLE_DOC : '', externalUrl:'hardware-console.html'
    });
  } catch(_){}
  // Weaverine — industrial editorial landing page
  try {
    firstBatch.push({
      id:'d-weaverine', styleId:'industrial-editorial', styleLabel:'Industrial editorial', sref:'weaverine-pin', prompt:'Precision crafted polyester textiles', pinned:true,
      title:'Weaverine · Precision crafted textiles', height:720, styleLock:'weaverine',
      doc: (typeof WEAVERINE_DOC !== 'undefined') ? WEAVERINE_DOC : '', externalUrl:'weaverine-textiles.html'
    });
  } catch(_){}
  // NeuroLink — pocket terminal hardware
  try {
    firstBatch.push({
      id:'d-pocket-terminal', styleId:'pocket-terminal', styleLabel:'Pocket terminal', sref:'pocket-terminal-pin', prompt:'NeuroLink pocket terminal', pinned:true,
      title:'NeuroLink Pocket Terminal', height:720, styleLock:'pocket-terminal',
      doc: (typeof POCKET_TERMINAL_DOC !== 'undefined') ? POCKET_TERMINAL_DOC : '', externalUrl:'pocket-terminal.html'
    });
  } catch(_){}
  // ANOMALY — generative oscilloscope signal field
  try {
    firstBatch.push({
      id:'d-anomaly-signal', styleId:'anomaly-signal', styleLabel:'Signal field', sref:'anomaly-signal-pin', prompt:'ANOMALY signal interference field', pinned:true,
      title:'ANOMALY · Signal interference field', height:720, styleLock:'anomaly-signal',
      doc: (typeof ANOMALY_SIGNAL_DOC !== 'undefined') ? ANOMALY_SIGNAL_DOC : '', externalUrl:'anomaly-signal.html'
    });
  } catch(_){}
  // DMX Field Controller — lighting console surface
  try {
    firstBatch.push({
      id:'d-dmx-controller', styleId:'dmx-controller', styleLabel:'DMX controller', sref:'dmx-controller-pin', prompt:'DMX Field lighting controller', pinned:true,
      title:'DMX Field Controller', height:720, styleLock:'dmx-controller',
      doc: (typeof DMX_CONTROLLER_DOC !== 'undefined') ? DMX_CONTROLLER_DOC : '', externalUrl:'dmx-controller.html'
    });
  } catch(_){}
  // Symmetry Breaking — halftone event ticket
  try {
    firstBatch.push({
      id:'d-symmetry-ticket', styleId:'symmetry-ticket', styleLabel:'Halftone ticket', sref:'symmetry-ticket-pin', prompt:'Symmetry Breaking halftone event ticket', pinned:true,
      title:'Symmetry Breaking · Halftone ticket', height:720, styleLock:'symmetry-ticket',
      doc: (typeof SYMMETRY_TICKET_DOC !== 'undefined') ? SYMMETRY_TICKET_DOC : '', externalUrl:'symmetry-ticket.html'
    });
  } catch(_){}
  // Notion Knowledge OS — project management and wiki dashboard
  try {
    firstBatch.push({
      id:'d-notion-knowledge', styleId:'notion-knowledge', styleLabel:'Notion knowledge', sref:'notion-knowledge-pin', prompt:'Notion knowledge OS project management dashboard', pinned:true,
      title:'Notion · Knowledge OS', height:720, styleLock:'notion-knowledge',
      doc: (typeof NOTION_KNOWLEDGE_DOC !== 'undefined') ? NOTION_KNOWLEDGE_DOC : '', externalUrl:'notion-knowledge.html'
    });
  } catch(_){}
  // Chainx — stock investment dashboard animation
  try {
    firstBatch.push({
      id:'d-chainx-dashboard', styleId:'chainx-dashboard', styleLabel:'Investment dashboard', sref:'chainx-dashboard-pin', prompt:'Chainx stock investment dashboard', pinned:true,
      title:'Chainx · Stock investment dashboard', height:720, styleLock:'chainx-dashboard',
      doc: (typeof CHAINX_DASHBOARD_DOC !== 'undefined') ? CHAINX_DASHBOARD_DOC : '', externalUrl:'chainx-dashboard.html'
    });
  } catch(_){}
  // Unicorn Image Reveal — removed from inspiration library
  // Jitter Release Notes — removed from inspiration library
  // Nathan Smith — direct Webflow portfolio clone
  try {
    firstBatch.push({
      id:'d-nathan-smith', styleId:'nathan-smith', styleLabel:'Webflow portfolio', sref:'nathan-smith-pin', prompt:'Nathan Smith interactive Webflow portfolio clone', pinned:true,
      title:'Nathan Smith · Design & Art Direction', height:720, styleLock:'nathan-smith',
      doc: (typeof NATHAN_SMITH_DOC !== 'undefined') ? NATHAN_SMITH_DOC : '', externalUrl:'nathan-smith.html'
    });
  } catch(_){}
  // Lorenzo Dal Dosso — direct Nuxt typography portfolio mirror
  try {
    firstBatch.push({
      id:'d-lorenzo-daldosso', styleId:'lorenzo-daldosso', styleLabel:'Nuxt typography', sref:'lorenzo-daldosso-pin', prompt:'Lorenzo Dal Dosso IT specialist typography site mirror', pinned:true,
      title:'Lorenzo Dal Dosso · IT Specialist', height:720, styleLock:'lorenzo-daldosso',
      doc: (typeof LORENZO_DALDOSSO_DOC !== 'undefined') ? LORENZO_DALDOSSO_DOC : '', externalUrl:'lorenzo-daldosso.html'
    });
  } catch(_){}
  // Carrot — animated SVG morph hero
  try {
    firstBatch.push({
      id:'d-carrot-tech', styleId:'carrot-tech', styleLabel:'Animated SVG', sref:'carrot-tech-pin', prompt:'Carrot circularity gap animated morphing SVG hero', pinned:true,
      title:'Carrot · Circularity gap', height:720, styleLock:'carrot-tech',
      doc: (typeof CARROT_TECH_DOC !== 'undefined') ? CARROT_TECH_DOC : '', externalUrl:'carrot-tech.html'
    });
  } catch(_){}
  // SuperHi Plus removed: direct external mirror is not a customized Design DNA card.
  // a.Record — registered earlier (after Mercury) for higher feed position
  // Mono X7 — removed (effect not satisfactory)
  // LUMI — removed (effect not satisfactory)
  // 用户精选里若已含 styleLock 卡，同样计入排除
  try {
    firstBatch.forEach(function(c){
      if(c && c.styleLock && pinnedLocks.indexOf(c.styleLock) < 0) pinnedLocks.push(c.styleLock);
    });
  } catch(_){}
  // 3) Curated catalog only: never append generic random template cards.
  // try {
  //   var more = generateBatch(promptEl.value, currentStyle, 10, { excludeStyleLocks: pinnedLocks });
  //   firstBatch = firstBatch.concat(more);
  // } catch(_){}
  if (firstBatch.length === 0) {
    var t = STYLES[0].tokens;
    var p = parsePrompt('Hello Design DNA');
    var fb = TEMPLATES[0](p, t);
    firstBatch.push(Object.assign({ id:'fb0', styleId:'notion', styleLabel:'fallback', sref:'fb-0', prompt:p.raw }, fb));
  }
  // ─── 分批渲染 firstBatch 以降低首屏 DOM/iframe 创建压力 ───
  // 首批立即渲染（首屏可见 + 少量缓冲），后续批次在浏览器空闲或滚动接近底部时再追加。
  var INITIAL_RENDER = 8;     // 首批渲染数量
  var NEXT_BATCH     = 6;     // 后续每批数量
  var pendingDesigns = firstBatch.slice();
  function _flushNextBatch(){
    if(!pendingDesigns.length) return;
    var slice = pendingDesigns.splice(0, NEXT_BATCH);
    appendDesigns(slice);
  }
  // 1) 首批立即渲染
  appendDesigns(pendingDesigns.splice(0, INITIAL_RENDER));
  // 2) 用 requestIdleCallback / 退化的 setTimeout 在主线程空闲时分批续渲
  var _idle = window.requestIdleCallback || function(cb){ return setTimeout(function(){ cb({timeRemaining:function(){return 12;}, didTimeout:false}); }, 220); };
  function _idleAppend(){
    if(!pendingDesigns.length) return;
    _flushNextBatch();
    if(pendingDesigns.length) _idle(_idleAppend);
  }
  _idle(_idleAppend);
  // 3) 滚动接近底部时也强制推一批，保证用户向下滚永远能看到内容
  var _sentinel = document.getElementById('sentinel');
  if(_sentinel && 'IntersectionObserver' in window){
    var sio = new IntersectionObserver(function(ents){
      ents.forEach(function(e){ if(e.isIntersecting){ _flushNextBatch(); } });
    }, { rootMargin: '600px 0px' });
    sio.observe(_sentinel);
  }
})();

// ─── 登录系统 ───────────────────────────────────
const AUTH_KEY = 'variant.auth.user';
const authMask = document.getElementById('authMask');
const authClose = document.getElementById('authClose');
const sideAvatar = document.getElementById('sideAvatar');
const userPop = document.getElementById('userPop');
const popEmail = document.getElementById('popEmail');

function getUser(){
  try{ return JSON.parse(localStorage.getItem(AUTH_KEY) || 'null'); }catch{ return null; }
}
function setUser(u){
  if(u){ localStorage.setItem(AUTH_KEY, JSON.stringify(u)); }
  else { localStorage.removeItem(AUTH_KEY); }
  renderAvatar();
}
function renderAvatar(){
  const u = getUser();
  if(u){
    sideAvatar.classList.add('signed');
    sideAvatar.textContent = (u.email || '?').trim()[0].toUpperCase();
    sideAvatar.title = u.email;
    sideAvatar.style.background = '#1a1a1a';
    if(popEmail) popEmail.textContent = u.email;
  }else{
    sideAvatar.classList.remove('signed');
    sideAvatar.textContent = '';
    sideAvatar.title = '登录';
    sideAvatar.style.background = '';
  }
}
renderAvatar();

// Modal 切步骤
function showStep(name){
  document.querySelectorAll('.auth-step').forEach(s=>{
    s.classList.toggle('show', s.dataset.step === name);
  });
  if(name === 'email') setTimeout(()=>document.getElementById('authEmail').focus(), 50);
  if(name === 'otp')   setTimeout(()=>document.querySelector('.auth-otp input').focus(), 50);
}
function openAuth(){
  authMask.classList.add('open');
  showStep('choose');
  document.getElementById('authMsg').textContent = '';
  document.getElementById('authEmail').value = '';
  document.querySelectorAll('.auth-otp input').forEach(i=>i.value='');
}
function closeAuth(){ authMask.classList.remove('open'); }

authClose.addEventListener('click', closeAuth);
authMask.addEventListener('click', e=>{ if(e.target === authMask) closeAuth(); });
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && authMask.classList.contains('open')) closeAuth();
});

// 头像点击
sideAvatar.addEventListener('click', e=>{
  e.stopPropagation();
  console.log('[avatar] click fired', { user: getUser() });
  const u = getUser();
  if(u){
    userPop.classList.toggle('open');
  }else{
    openAuth();
  }
});
// 兜底：mousedown 也触发，避免某些事件被吞
sideAvatar.addEventListener('mousedown', e=>{
  console.log('[avatar] mousedown', e.target);
});

// 点击外部关闭气泡
document.addEventListener('click', e=>{
  if(!userPop.contains(e.target) && e.target !== sideAvatar){
    userPop.classList.remove('open');
  }
});

// 气泡菜单动作
userPop.addEventListener('click', e=>{
  const item = e.target.closest('.pop-item');
  if(!item) return;
  const act = item.dataset.act;
  userPop.classList.remove('open');
  if(act === 'logout'){
    setUser(null);
  }else if(act === 'saved'){
    // 复用收藏面板（如果存在）
    const sb = document.getElementById('btnSaved');
    if(sb) sb.click();
  }else if(act === 'settings'){
    openSettings();
  }
});

// ─── 设置面板 + 语言切换 ───
const LANGS = [
  { code:'zh-CN', flag:'🇨🇳', native:'简体中文', en:'Simplified Chinese' },
  { code:'zh-TW', flag:'🇹🇼', native:'繁體中文', en:'Traditional Chinese' },
  { code:'en',    flag:'🇺🇸', native:'English',  en:'English' },
  { code:'ja',    flag:'🇯🇵', native:'日本語',   en:'Japanese' },
  { code:'ko',    flag:'🇰🇷', native:'한국어',    en:'Korean' },
  { code:'fr',    flag:'🇫🇷', native:'Français', en:'French' },
  { code:'de',    flag:'🇩🇪', native:'Deutsch',  en:'German' },
  { code:'es',    flag:'🇪🇸', native:'Español',  en:'Spanish' },
  { code:'pt',    flag:'🇵🇹', native:'Português',en:'Portuguese' },
  { code:'ru',    flag:'🇷🇺', native:'Русский',  en:'Russian' },
  { code:'ar',    flag:'🇸🇦', native:'العربية',  en:'Arabic' },
  { code:'hi',    flag:'🇮🇳', native:'हिन्दी',    en:'Hindi' }
];

const I18N = {
  'zh-CN': {
    settings:'设置', lang:'语言 · LANGUAGE', desc:'选择界面显示语言。部分内容仍以原文呈现。', saved:'已保存',
    navStyle:'风格', navLibrary:'灵感库', navFolders:'文件夹', navSaved:'收藏', navSavedHint:'收藏 (S)',
    signIn:'登录', close:'关闭', popAccount:'个人账户', popSaved:'我的收藏', logout:'退出登录',
    authTitle:'登录或注册', authSub:'使用你的账户继续创作', authGoogle:'使用 Google 继续', authApple:'使用 Apple 继续',
    authOr:'或', authEmail:'使用邮箱继续', authFoot:'继续即代表同意 <a>服务条款</a> 与 <a>隐私政策</a>',
    authBack:'← 返回', emailTitle:'输入邮箱', emailSub:'我们会发送一封验证码邮件', sendCode:'发送验证码',
    otpTitle:'输入验证码', otpSub:'已发送至', otpDemo:'演示模式：任意 6 位数字均可通过', otpVerify:'验证并登录',
    viewGrid:'网格', viewCollage:'拼贴', viewLatest:'最新',
    promptPh:'描述你想要的设计…  例如：AI 写作工具的落地页',
    styleDropper:'粘贴一张图或一个 URL 吸取风格', generate:'生成 (⏎)',
    backHome:'返回首页 (Esc)', home:'首页', untitled:'未命名设计',
    copyCode:'复制代码', save:'收藏', remixStyle:'重混此风格', moreLikeThis:'类似设计',
    savedTitle:'已收藏的设计', savedEmpty:'还没有收藏。悬停卡片点 ♥ 收藏。',
    generating:'正在生成 {n} 个变体', generatingSub:'{style} · 大约 {sec} 秒',
    autoMix:'自动混合', emailInvalid:'邮箱格式不正确', otpIncomplete:'请输入完整的 6 位验证码',
    copied:'已复制！', copyFailed:'复制失败', favSaved:'已收藏', favRemoved:'已取消',
    favTitle:'收藏', unfavTitle:'取消收藏'
  },
  'zh-TW': {
    settings:'設定', lang:'語言 · LANGUAGE', desc:'選擇介面顯示語言。部分內容仍以原文呈現。', saved:'已儲存',
    navStyle:'風格', navLibrary:'靈感庫', navFolders:'資料夾', navSaved:'收藏', navSavedHint:'收藏 (S)',
    signIn:'登入', close:'關閉', popAccount:'個人帳戶', popSaved:'我的收藏', logout:'登出',
    authTitle:'登入或註冊', authSub:'使用你的帳戶繼續創作', authGoogle:'使用 Google 繼續', authApple:'使用 Apple 繼續',
    authOr:'或', authEmail:'使用電郵繼續', authFoot:'繼續即代表同意 <a>服務條款</a> 與 <a>隱私政策</a>',
    authBack:'← 返回', emailTitle:'輸入電郵', emailSub:'我們會發送一封驗證碼郵件', sendCode:'發送驗證碼',
    otpTitle:'輸入驗證碼', otpSub:'已發送至', otpDemo:'示範模式：任意 6 位數字均可通過', otpVerify:'驗證並登入',
    viewGrid:'網格', viewCollage:'拼貼', viewLatest:'最新',
    promptPh:'描述你想要的設計…  例如：AI 寫作工具的著陸頁',
    styleDropper:'貼上一張圖或一個 URL 吸取風格', generate:'生成 (⏎)',
    backHome:'返回首頁 (Esc)', home:'首頁', untitled:'未命名設計',
    copyCode:'複製代碼', save:'收藏', remixStyle:'重混此風格', moreLikeThis:'類似設計',
    savedTitle:'已收藏的設計', savedEmpty:'還沒有收藏。懸停卡片點 ♥ 收藏。',
    generating:'正在生成 {n} 個變體', generatingSub:'{style} · 約 {sec} 秒',
    autoMix:'自動混合', emailInvalid:'電郵格式不正確', otpIncomplete:'請輸入完整的 6 位驗證碼',
    copied:'已複製！', copyFailed:'複製失敗', favSaved:'已收藏', favRemoved:'已取消',
    favTitle:'收藏', unfavTitle:'取消收藏'
  },
  'en': {
    settings:'Settings', lang:'LANGUAGE', desc:'Choose your interface language. Some content remains in its original language.', saved:'Saved',
    navStyle:'Style', navLibrary:'Library', navFolders:'Folders', navSaved:'Saved', navSavedHint:'Saved (S)',
    signIn:'Sign in', close:'Close', popAccount:'Personal account', popSaved:'My saved', logout:'Sign out',
    authTitle:'Sign in or up', authSub:'Continue creating with your account', authGoogle:'Continue with Google', authApple:'Continue with Apple',
    authOr:'or', authEmail:'Continue with email', authFoot:'By continuing you agree to <a>Terms</a> and <a>Privacy</a>',
    authBack:'← Back', emailTitle:'Enter email', emailSub:'We will send you a verification code', sendCode:'Send code',
    otpTitle:'Enter code', otpSub:'Sent to', otpDemo:'Demo mode: any 6 digits will work', otpVerify:'Verify & sign in',
    viewGrid:'Grid', viewCollage:'Collage', viewLatest:'Latest',
    promptPh:'Describe what you want…  e.g. landing page for an AI writing tool',
    styleDropper:'Paste an image or URL to extract style', generate:'Generate (⏎)',
    backHome:'Back home (Esc)', home:'Home', untitled:'Untitled design',
    copyCode:'Copy code', save:'Save', remixStyle:'Remix this style', moreLikeThis:'More like this',
    savedTitle:'Saved designs', savedEmpty:'Nothing saved yet. Hover a card and tap ♥.',
    generating:'Generating {n} variants', generatingSub:'{style} · about {sec}s',
    autoMix:'Auto mix', emailInvalid:'Invalid email format', otpIncomplete:'Please enter all 6 digits',
    copied:'Copied!', copyFailed:'Copy failed', favSaved:'Saved', favRemoved:'Removed',
    favTitle:'Save', unfavTitle:'Unsave'
  },
  'ja': {
    settings:'設定', lang:'言語 · LANGUAGE', desc:'インターフェースの言語を選択します。一部のコンテンツは原文のままです。', saved:'保存しました',
    navStyle:'スタイル', navLibrary:'ライブラリ', navFolders:'フォルダ', navSaved:'保存', navSavedHint:'保存 (S)',
    signIn:'ログイン', close:'閉じる', popAccount:'個人アカウント', popSaved:'保存した項目', logout:'ログアウト',
    authTitle:'ログインまたは登録', authSub:'アカウントで創作を続ける', authGoogle:'Google で続ける', authApple:'Apple で続ける',
    authOr:'または', authEmail:'メールで続ける', authFoot:'続行することで <a>利用規約</a> と <a>プライバシー</a> に同意します',
    authBack:'← 戻る', emailTitle:'メール入力', emailSub:'認証コードを送信します', sendCode:'コード送信',
    otpTitle:'コード入力', otpSub:'送信先', otpDemo:'デモモード：任意の 6 桁が利用可能', otpVerify:'認証してログイン',
    viewGrid:'グリッド', viewCollage:'コラージュ', viewLatest:'最新',
    promptPh:'欲しいデザインを説明…  例：AI 執筆ツールの LP',
    styleDropper:'画像または URL を貼り付けてスタイル抽出', generate:'生成 (⏎)',
    backHome:'ホームに戻る (Esc)', home:'ホーム', untitled:'無題のデザイン',
    copyCode:'コードをコピー', save:'保存', remixStyle:'このスタイルをリミックス', moreLikeThis:'似たデザイン',
    savedTitle:'保存したデザイン', savedEmpty:'まだ保存はありません。カードにマウスを乗せて ♥ を押す。',
    generating:'{n} 個のバリアントを生成中', generatingSub:'{style} · 約 {sec} 秒',
    autoMix:'自動ミックス', emailInvalid:'メール形式が正しくありません', otpIncomplete:'6 桁すべて入力してください',
    copied:'コピーしました！', copyFailed:'コピーに失敗', favSaved:'保存しました', favRemoved:'解除しました',
    favTitle:'保存', unfavTitle:'保存解除'
  },
  'ko': {
    settings:'설정', lang:'언어 · LANGUAGE', desc:'인터페이스 언어를 선택하세요. 일부 콘텐츠는 원어로 표시됩니다.', saved:'저장됨',
    navStyle:'스타일', navLibrary:'라이브러리', navFolders:'폴더', navSaved:'저장', navSavedHint:'저장 (S)',
    signIn:'로그인', close:'닫기', popAccount:'개인 계정', popSaved:'저장한 항목', logout:'로그아웃',
    authTitle:'로그인 또는 가입', authSub:'계정으로 계속해서 만들어보세요', authGoogle:'Google로 계속', authApple:'Apple로 계속',
    authOr:'또는', authEmail:'이메일로 계속', authFoot:'계속하면 <a>이용약관</a> 및 <a>개인정보처리방침</a>에 동의합니다',
    authBack:'← 뒤로', emailTitle:'이메일 입력', emailSub:'인증 코드를 보내드립니다', sendCode:'코드 전송',
    otpTitle:'코드 입력', otpSub:'전송됨', otpDemo:'데모 모드: 6 자리 숫자라면 통과', otpVerify:'확인 후 로그인',
    viewGrid:'그리드', viewCollage:'콜라주', viewLatest:'최신',
    promptPh:'원하는 디자인을 설명하세요…  예: AI 글쓰기 도구 랜딩 페이지',
    styleDropper:'이미지 또는 URL 붙여넣기로 스타일 추출', generate:'생성 (⏎)',
    backHome:'홈으로 (Esc)', home:'홈', untitled:'제목 없는 디자인',
    copyCode:'코드 복사', save:'저장', remixStyle:'이 스타일 리믹스', moreLikeThis:'비슷한 디자인',
    savedTitle:'저장한 디자인', savedEmpty:'저장된 항목이 없습니다. 카드 위 ♥ 를 누르세요.',
    generating:'{n} 개의 변형 생성 중', generatingSub:'{style} · 약 {sec} 초',
    autoMix:'자동 믹스', emailInvalid:'잘못된 이메일 형식', otpIncomplete:'6 자리를 모두 입력하세요',
    copied:'복사됨!', copyFailed:'복사 실패', favSaved:'저장됨', favRemoved:'해제됨',
    favTitle:'저장', unfavTitle:'저장 해제'
  },
  'fr': {
    settings:'Paramètres', lang:'LANGUE', desc:'Choisissez la langue de l\u2019interface. Certains contenus restent dans leur langue d\u2019origine.', saved:'Enregistré',
    navStyle:'Style', navLibrary:'Bibliothèque', navFolders:'Dossiers', navSaved:'Favoris', navSavedHint:'Favoris (S)',
    signIn:'Connexion', close:'Fermer', popAccount:'Compte personnel', popSaved:'Mes favoris', logout:'Se déconnecter',
    authTitle:'Connexion ou inscription', authSub:'Continuez à créer avec votre compte', authGoogle:'Continuer avec Google', authApple:'Continuer avec Apple',
    authOr:'ou', authEmail:'Continuer avec l\u2019e-mail', authFoot:'En continuant vous acceptez les <a>Conditions</a> et la <a>Confidentialité</a>',
    authBack:'← Retour', emailTitle:'Saisir l\u2019e-mail', emailSub:'Nous enverrons un code de vérification', sendCode:'Envoyer',
    otpTitle:'Saisir le code', otpSub:'Envoyé à', otpDemo:'Mode démo : tout code à 6 chiffres fonctionne', otpVerify:'Vérifier et se connecter',
    viewGrid:'Grille', viewCollage:'Collage', viewLatest:'Récent',
    promptPh:'Décrivez votre design…  ex : page d\u2019accueil d\u2019un outil d\u2019écriture IA',
    styleDropper:'Collez une image ou une URL pour extraire le style', generate:'Générer (⏎)',
    backHome:'Accueil (Esc)', home:'Accueil', untitled:'Design sans titre',
    copyCode:'Copier le code', save:'Enregistrer', remixStyle:'Remixer ce style', moreLikeThis:'Designs similaires',
    savedTitle:'Designs enregistrés', savedEmpty:'Rien d\u2019enregistré. Survolez une carte et tapez ♥.',
    generating:'Génération de {n} variantes', generatingSub:'{style} · environ {sec} s',
    autoMix:'Mix auto', emailInvalid:'Format d\u2019e-mail invalide', otpIncomplete:'Saisissez les 6 chiffres',
    copied:'Copié !', copyFailed:'Échec de la copie', favSaved:'Enregistré', favRemoved:'Retiré',
    favTitle:'Enregistrer', unfavTitle:'Retirer'
  },
  'de': {
    settings:'Einstellungen', lang:'SPRACHE', desc:'Wählen Sie die Oberflächensprache. Einige Inhalte bleiben in ihrer Originalsprache.', saved:'Gespeichert',
    navStyle:'Stil', navLibrary:'Bibliothek', navFolders:'Ordner', navSaved:'Favoriten', navSavedHint:'Favoriten (S)',
    signIn:'Anmelden', close:'Schließen', popAccount:'Persönliches Konto', popSaved:'Meine Favoriten', logout:'Abmelden',
    authTitle:'Anmelden oder registrieren', authSub:'Mit Ihrem Konto weiter erstellen', authGoogle:'Mit Google fortfahren', authApple:'Mit Apple fortfahren',
    authOr:'oder', authEmail:'Mit E-Mail fortfahren', authFoot:'Mit dem Fortfahren akzeptieren Sie die <a>AGB</a> und <a>Datenschutz</a>',
    authBack:'← Zurück', emailTitle:'E-Mail eingeben', emailSub:'Wir senden Ihnen einen Bestätigungscode', sendCode:'Code senden',
    otpTitle:'Code eingeben', otpSub:'Gesendet an', otpDemo:'Demo-Modus: Jeder 6-stellige Code funktioniert', otpVerify:'Prüfen & anmelden',
    viewGrid:'Raster', viewCollage:'Collage', viewLatest:'Neueste',
    promptPh:'Beschreiben Sie das gewünschte Design…  z. B. Landingpage für ein KI-Schreibtool',
    styleDropper:'Bild oder URL einfügen, um Stil zu extrahieren', generate:'Generieren (⏎)',
    backHome:'Zur Startseite (Esc)', home:'Start', untitled:'Unbenanntes Design',
    copyCode:'Code kopieren', save:'Speichern', remixStyle:'Diesen Stil remixen', moreLikeThis:'Ähnliche Designs',
    savedTitle:'Gespeicherte Designs', savedEmpty:'Noch nichts gespeichert. Bewegen Sie den Mauszeiger und klicken Sie ♥.',
    generating:'Generiere {n} Varianten', generatingSub:'{style} · ca. {sec} s',
    autoMix:'Auto-Mix', emailInvalid:'Ungültiges E-Mail-Format', otpIncomplete:'Bitte alle 6 Ziffern eingeben',
    copied:'Kopiert!', copyFailed:'Kopieren fehlgeschlagen', favSaved:'Gespeichert', favRemoved:'Entfernt',
    favTitle:'Speichern', unfavTitle:'Entfernen'
  },
  'es': {
    settings:'Ajustes', lang:'IDIOMA', desc:'Elige el idioma de la interfaz. Parte del contenido se mantiene en su idioma original.', saved:'Guardado',
    navStyle:'Estilo', navLibrary:'Biblioteca', navFolders:'Carpetas', navSaved:'Guardados', navSavedHint:'Guardados (S)',
    signIn:'Iniciar sesión', close:'Cerrar', popAccount:'Cuenta personal', popSaved:'Mis guardados', logout:'Cerrar sesión',
    authTitle:'Iniciar sesión o registrarse', authSub:'Sigue creando con tu cuenta', authGoogle:'Continuar con Google', authApple:'Continuar con Apple',
    authOr:'o', authEmail:'Continuar con correo', authFoot:'Al continuar aceptas los <a>Términos</a> y la <a>Privacidad</a>',
    authBack:'← Atrás', emailTitle:'Introduce el correo', emailSub:'Te enviaremos un código de verificación', sendCode:'Enviar código',
    otpTitle:'Introduce el código', otpSub:'Enviado a', otpDemo:'Modo demo: cualquier código de 6 dígitos funciona', otpVerify:'Verificar e iniciar',
    viewGrid:'Cuadrícula', viewCollage:'Collage', viewLatest:'Reciente',
    promptPh:'Describe tu diseño…  p. ej. landing de una herramienta de escritura IA',
    styleDropper:'Pega una imagen o URL para extraer el estilo', generate:'Generar (⏎)',
    backHome:'Volver al inicio (Esc)', home:'Inicio', untitled:'Diseño sin título',
    copyCode:'Copiar código', save:'Guardar', remixStyle:'Remezclar este estilo', moreLikeThis:'Diseños similares',
    savedTitle:'Diseños guardados', savedEmpty:'Nada guardado aún. Pasa el cursor y pulsa ♥.',
    generating:'Generando {n} variantes', generatingSub:'{style} · aprox. {sec} s',
    autoMix:'Mezcla auto', emailInvalid:'Formato de correo no válido', otpIncomplete:'Introduce los 6 dígitos',
    copied:'¡Copiado!', copyFailed:'Error al copiar', favSaved:'Guardado', favRemoved:'Eliminado',
    favTitle:'Guardar', unfavTitle:'Quitar'
  },
  'pt': {
    settings:'Definições', lang:'IDIOMA', desc:'Escolha o idioma da interface. Algum conteúdo permanece no idioma original.', saved:'Guardado',
    navStyle:'Estilo', navLibrary:'Biblioteca', navFolders:'Pastas', navSaved:'Guardados', navSavedHint:'Guardados (S)',
    signIn:'Entrar', close:'Fechar', popAccount:'Conta pessoal', popSaved:'Os meus guardados', logout:'Sair',
    authTitle:'Entrar ou registar', authSub:'Continue a criar com a sua conta', authGoogle:'Continuar com Google', authApple:'Continuar com Apple',
    authOr:'ou', authEmail:'Continuar com email', authFoot:'Ao continuar aceita os <a>Termos</a> e a <a>Privacidade</a>',
    authBack:'← Voltar', emailTitle:'Insira o email', emailSub:'Enviaremos um código de verificação', sendCode:'Enviar código',
    otpTitle:'Insira o código', otpSub:'Enviado para', otpDemo:'Modo demo: qualquer 6 dígitos funciona', otpVerify:'Verificar e entrar',
    viewGrid:'Grelha', viewCollage:'Colagem', viewLatest:'Recente',
    promptPh:'Descreva o design desejado…  ex. landing de uma ferramenta de escrita IA',
    styleDropper:'Cole uma imagem ou URL para extrair estilo', generate:'Gerar (⏎)',
    backHome:'Início (Esc)', home:'Início', untitled:'Design sem título',
    copyCode:'Copiar código', save:'Guardar', remixStyle:'Remixar este estilo', moreLikeThis:'Designs semelhantes',
    savedTitle:'Designs guardados', savedEmpty:'Ainda nada guardado. Passe o rato e toque em ♥.',
    generating:'A gerar {n} variantes', generatingSub:'{style} · cerca de {sec} s',
    autoMix:'Mistura auto', emailInvalid:'Formato de email inválido', otpIncomplete:'Introduza os 6 dígitos',
    copied:'Copiado!', copyFailed:'Falha ao copiar', favSaved:'Guardado', favRemoved:'Removido',
    favTitle:'Guardar', unfavTitle:'Remover'
  },
  'ru': {
    settings:'Настройки', lang:'ЯЗЫК', desc:'Выберите язык интерфейса. Часть содержимого остаётся на языке оригинала.', saved:'Сохранено',
    navStyle:'Стиль', navLibrary:'Библиотека', navFolders:'Папки', navSaved:'Избранное', navSavedHint:'Избранное (S)',
    signIn:'Войти', close:'Закрыть', popAccount:'Личный аккаунт', popSaved:'Моё избранное', logout:'Выйти',
    authTitle:'Вход или регистрация', authSub:'Продолжите создание с вашим аккаунтом', authGoogle:'Войти через Google', authApple:'Войти через Apple',
    authOr:'или', authEmail:'Продолжить с email', authFoot:'Продолжая, вы соглашаетесь с <a>Условиями</a> и <a>Политикой</a>',
    authBack:'← Назад', emailTitle:'Введите email', emailSub:'Мы отправим код подтверждения', sendCode:'Отправить код',
    otpTitle:'Введите код', otpSub:'Отправлено на', otpDemo:'Демо-режим: подойдут любые 6 цифр', otpVerify:'Подтвердить и войти',
    viewGrid:'Сетка', viewCollage:'Коллаж', viewLatest:'Новое',
    promptPh:'Опишите дизайн…  напр. лендинг ИИ-редактора',
    styleDropper:'Вставьте изображение или URL для извлечения стиля', generate:'Создать (⏎)',
    backHome:'На главную (Esc)', home:'Главная', untitled:'Без названия',
    copyCode:'Копировать код', save:'Сохранить', remixStyle:'Ремикс стиля', moreLikeThis:'Похожие',
    savedTitle:'Сохранённые дизайны', savedEmpty:'Пока ничего не сохранено. Наведите и нажмите ♥.',
    generating:'Генерация {n} вариантов', generatingSub:'{style} · около {sec} с',
    autoMix:'Авто-микс', emailInvalid:'Неверный формат email', otpIncomplete:'Введите все 6 цифр',
    copied:'Скопировано!', copyFailed:'Ошибка копирования', favSaved:'Сохранено', favRemoved:'Удалено',
    favTitle:'Сохранить', unfavTitle:'Убрать'
  },
  'ar': {
    settings:'الإعدادات', lang:'اللغة', desc:'اختر لغة الواجهة. يبقى بعض المحتوى بلغته الأصلية.', saved:'تم الحفظ',
    navStyle:'النمط', navLibrary:'المكتبة', navFolders:'المجلدات', navSaved:'المحفوظات', navSavedHint:'المحفوظات (S)',
    signIn:'تسجيل الدخول', close:'إغلاق', popAccount:'حساب شخصي', popSaved:'محفوظاتي', logout:'تسجيل الخروج',
    authTitle:'تسجيل الدخول أو الاشتراك', authSub:'تابع الإنشاء بحسابك', authGoogle:'المتابعة بـ Google', authApple:'المتابعة بـ Apple',
    authOr:'أو', authEmail:'المتابعة بالبريد', authFoot:'بالمتابعة فأنت توافق على <a>الشروط</a> و<a>الخصوصية</a>',
    authBack:'← رجوع', emailTitle:'أدخل البريد', emailSub:'سنرسل رمز التحقق', sendCode:'إرسال الرمز',
    otpTitle:'أدخل الرمز', otpSub:'أُرسل إلى', otpDemo:'وضع تجريبي: أي 6 أرقام تعمل', otpVerify:'تحقق وادخل',
    viewGrid:'شبكة', viewCollage:'كولاج', viewLatest:'الأحدث',
    promptPh:'صف التصميم المطلوب…  مثل: صفحة هبوط لأداة كتابة بالذكاء الاصطناعي',
    styleDropper:'الصق صورة أو رابطًا لاستخراج النمط', generate:'إنشاء (⏎)',
    backHome:'العودة للرئيسية (Esc)', home:'الرئيسية', untitled:'تصميم بدون عنوان',
    copyCode:'نسخ الكود', save:'حفظ', remixStyle:'إعادة مزج هذا النمط', moreLikeThis:'تصاميم مشابهة',
    savedTitle:'تصاميم محفوظة', savedEmpty:'لا يوجد محفوظات بعد. مرّر فوق البطاقة واضغط ♥.',
    generating:'إنشاء {n} متغيرات', generatingSub:'{style} · حوالي {sec} ث',
    autoMix:'مزج تلقائي', emailInvalid:'صيغة البريد غير صحيحة', otpIncomplete:'أدخل 6 أرقام كاملة',
    copied:'تم النسخ!', copyFailed:'فشل النسخ', favSaved:'تم الحفظ', favRemoved:'تمت الإزالة',
    favTitle:'حفظ', unfavTitle:'إزالة'
  },
  'hi': {
    settings:'सेटिंग्स', lang:'भाषा', desc:'इंटरफ़ेस की भाषा चुनें. कुछ सामग्री मूल भाषा में रहती है.', saved:'सहेजा गया',
    navStyle:'शैली', navLibrary:'लाइब्रेरी', navFolders:'फ़ोल्डर', navSaved:'सहेजे', navSavedHint:'सहेजे (S)',
    signIn:'साइन इन', close:'बंद करें', popAccount:'व्यक्तिगत खाता', popSaved:'मेरे सहेजे', logout:'साइन आउट',
    authTitle:'साइन इन या साइन अप', authSub:'अपने खाते से बनाते रहें', authGoogle:'Google से जारी रखें', authApple:'Apple से जारी रखें',
    authOr:'या', authEmail:'ईमेल से जारी रखें', authFoot:'जारी रखकर आप <a>शर्तें</a> और <a>गोपनीयता</a> से सहमत हैं',
    authBack:'← वापस', emailTitle:'ईमेल दर्ज करें', emailSub:'हम सत्यापन कोड भेजेंगे', sendCode:'कोड भेजें',
    otpTitle:'कोड दर्ज करें', otpSub:'भेजा गया', otpDemo:'डेमो मोड: कोई भी 6 अंक काम करते हैं', otpVerify:'सत्यापित करें',
    viewGrid:'ग्रिड', viewCollage:'कोलाज', viewLatest:'नवीनतम',
    promptPh:'अपनी डिज़ाइन का वर्णन करें…  उदा. AI लेखन टूल का लैंडिंग पेज',
    styleDropper:'शैली निकालने के लिए छवि या URL पेस्ट करें', generate:'जनरेट (⏎)',
    backHome:'होम पर वापस (Esc)', home:'होम', untitled:'बेनाम डिज़ाइन',
    copyCode:'कोड कॉपी करें', save:'सहेजें', remixStyle:'इस शैली को रीमिक्स', moreLikeThis:'समान डिज़ाइन',
    savedTitle:'सहेजे गए डिज़ाइन', savedEmpty:'अभी कुछ सहेजा नहीं. कार्ड पर ♥ दबाएं.',
    generating:'{n} वेरिएंट जनरेट हो रहे हैं', generatingSub:'{style} · लगभग {sec} सेकंड',
    autoMix:'ऑटो मिक्स', emailInvalid:'अमान्य ईमेल प्रारूप', otpIncomplete:'कृपया सभी 6 अंक भरें',
    copied:'कॉपी हो गया!', copyFailed:'कॉपी विफल', favSaved:'सहेजा गया', favRemoved:'हटाया गया',
    favTitle:'सहेजें', unfavTitle:'हटाएं'
  }
};

const settingsMask = document.getElementById('settingsMask');
const settingsClose = document.getElementById('settingsClose');
const langGrid = document.getElementById('langGrid');
const setToast = document.getElementById('setToast');
const CHECK_SVG = '<svg class="lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

function getLang(){ return localStorage.getItem('app:lang') || 'zh-CN'; }
function tr(key, code){
  // 防 TDZ：I18N 字典声明在文件下方，早期渲染（如 renderSavedPanel 首次执行）
  // 直接读 const 会触发暂存死区 ReferenceError 中断整脚本，这里 try/catch 兜底
  let dict;
  try { dict = I18N; } catch(_) { return key; }
  const c = code || getLang();
  const t = dict[c] || dict['zh-CN'];
  return (t && t[key]) || (dict['zh-CN'] && dict['zh-CN'][key]) || key;
}
function applyLang(code){
  const t = I18N[code] || I18N['zh-CN'];
  document.documentElement.lang = code;
  document.documentElement.dir = (code === 'ar') ? 'rtl' : 'ltr';
  // 通用遍历：textContent
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if (t[k] != null) el.textContent = t[k];
  });
  // innerHTML（含 <a> 链接的法律条款行）
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const k = el.getAttribute('data-i18n-html');
    if (t[k] != null) el.innerHTML = t[k];
  });
  // title
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{
    const k = el.getAttribute('data-i18n-title');
    if (t[k] != null) el.title = t[k];
  });
  // placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k = el.getAttribute('data-i18n-ph');
    if (t[k] != null) el.placeholder = t[k];
  });
  if(setToast) setToast.textContent = t.saved;
  // 同步刷新语言列表的选中态
  if (langGrid) langGrid.querySelectorAll('.lang-item').forEach(el=>{
    el.classList.toggle('active', el.dataset.code === code);
  });
  // 通知 iframe 内卡片切语言
  document.querySelectorAll('iframe[data-card]').forEach(f=>{
    try{ f.contentWindow && f.contentWindow.postMessage({type:'lang', code}, '*'); }catch(_){}
  });
}
function renderLangGrid(){
  const cur = getLang();
  langGrid.innerHTML = LANGS.map(l => `
    <button class="lang-item${l.code===cur?' active':''}" data-code="${l.code}">
      <span class="lang-flag">${l.flag}</span>
      <span class="lang-name">
        <span class="lang-native">${l.native}</span>
        <span class="lang-en">${l.en}</span>
      </span>
      ${CHECK_SVG}
    </button>
  `).join('');
}
function openSettings(){
  renderLangGrid();
  applyLang(getLang());
  settingsMask.classList.add('open');
}
function closeSettings(){ settingsMask.classList.remove('open'); }
settingsClose.addEventListener('click', closeSettings);
settingsMask.addEventListener('click', e=>{ if(e.target === settingsMask) closeSettings(); });
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && settingsMask.classList.contains('open')) closeSettings();
});
langGrid.addEventListener('click', e=>{
  const item = e.target.closest('.lang-item');
  if(!item) return;
  const code = item.dataset.code;
  localStorage.setItem('app:lang', code);
  applyLang(code);
  setToast.classList.add('show');
  clearTimeout(setToast._t);
  setToast._t = setTimeout(()=> setToast.classList.remove('show'), 1400);
});
// 启动时根据持久化语言初始化
applyLang(getLang());

// Step 1：选邮箱/Google/Apple
document.querySelectorAll('[data-oauth]').forEach(b=>{
  b.addEventListener('click',()=>{
    const kind = b.dataset.oauth;
    if(kind === 'email'){ showStep('email'); return; }
    // Google / Apple：demo 模拟直接登录
    setUser({ email: kind === 'google' ? 'demo@gmail.com' : 'demo@icloud.com', via: kind });
    closeAuth();
  });
});

// Step 2：发送验证码
document.getElementById('authBack').addEventListener('click', ()=>showStep('choose'));
document.getElementById('authSend').addEventListener('click', ()=>{
  const email = document.getElementById('authEmail').value.trim();
  const msg = document.getElementById('authMsg');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    msg.textContent = tr('emailInvalid');
    msg.classList.add('error');
    return;
  }
  msg.textContent = '';
  msg.classList.remove('error');
  document.getElementById('otpEmail').textContent = email;
  showStep('otp');
});
document.getElementById('authEmail').addEventListener('keydown', e=>{
  if(e.key === 'Enter') document.getElementById('authSend').click();
});

// Step 3：OTP 输入 + 验证
const otpInputs = document.querySelectorAll('.auth-otp input');
otpInputs.forEach((inp,idx)=>{
  inp.addEventListener('input', e=>{
    const v = e.target.value.replace(/[^0-9]/g,'').slice(-1);
    e.target.value = v;
    if(v && otpInputs[idx+1]) otpInputs[idx+1].focus();
  });
  inp.addEventListener('keydown', e=>{
    if(e.key === 'Backspace' && !inp.value && otpInputs[idx-1]) otpInputs[idx-1].focus();
    if(e.key === 'Enter') document.getElementById('authVerify').click();
  });
  inp.addEventListener('paste', e=>{
    const txt = (e.clipboardData.getData('text') || '').replace(/[^0-9]/g,'').slice(0,6);
    if(!txt) return;
    e.preventDefault();
    [...txt].forEach((c,i)=>{ if(otpInputs[i]) otpInputs[i].value = c; });
    (otpInputs[Math.min(txt.length, 5)]).focus();
  });
});
document.getElementById('authBackOtp').addEventListener('click', ()=>showStep('email'));
document.getElementById('authVerify').addEventListener('click', ()=>{
  const code = [...otpInputs].map(i=>i.value).join('');
  const msg = document.getElementById('otpMsg');
  if(code.length !== 6){
    msg.textContent = tr('otpIncomplete');
    msg.classList.add('error');
    return;
  }
  setUser({ email: document.getElementById('authEmail').value.trim(), via: 'email' });
  closeAuth();
});