/* =============================================================
   Variant Clone — Dynamic Templates
   每个模板返回 {title, height, doc} 其中 doc 是完整 HTML 文档，
   包含 <style> + <script>，可塞进 iframe.srcdoc。
   ============================================================= */
(function(){
const STYLES = [
  { id:'notion',   label:'Notion warmth',   swatch:'#E8DFD2', tokens:{ bg:'#FAF8F3', surface:'#FFFFFF', ink:'#2A2825', muted:'#6B6762', accent:'#C97B3F', accentInk:'#FFFFFF', line:'#EAE3D6', radius:'14px', sans:'ui-sans-serif, "Inter", system-ui' } },
  { id:'linear',   label:'Linear minimal',  swatch:'#5E6AD2', tokens:{ bg:'#FFFFFF', surface:'#FAFAFA', ink:'#0D0D12', muted:'#5d6373', accent:'#5E6AD2', accentInk:'#FFFFFF', line:'#ECEEF3', radius:'10px', sans:'"Inter", system-ui' } },
  { id:'stripe',   label:'Stripe clean',    swatch:'#635BFF', tokens:{ bg:'#F7F9FC', surface:'#FFFFFF', ink:'#0A2540', muted:'#425466', accent:'#635BFF', accentInk:'#FFFFFF', line:'#E6EBF1', radius:'12px', sans:'"Inter", system-ui' } },
  { id:'vercel',   label:'Vercel dark',     swatch:'#111111', tokens:{ bg:'#0A0A0A', surface:'#111111', ink:'#FAFAFA', muted:'#A1A1A1', accent:'#FFFFFF', accentInk:'#0A0A0A', line:'#1F1F1F', radius:'8px',  sans:'"Inter", system-ui' } },
  { id:'brutal',   label:'Neo-brutalism',   swatch:'#FFD83D', tokens:{ bg:'#FFFDF2', surface:'#FFFFFF', ink:'#111111', muted:'#444444', accent:'#FFD83D', accentInk:'#111111', line:'#111111', radius:'0px',  sans:'"Space Grotesk", system-ui' } },
  { id:'pastel',   label:'Soft pastel',     swatch:'#F5C3DA', tokens:{ bg:'#FFF6FB', surface:'#FFFFFF', ink:'#3B2A34', muted:'#7A6872', accent:'#F5A6C5', accentInk:'#3B2A34', line:'#F5DCE7', radius:'18px', sans:'"DM Sans", system-ui' } },
  { id:'editorial',label:'Editorial serif', swatch:'#2E2A24', tokens:{ bg:'#F3EFE7', surface:'#FFFFFF', ink:'#2E2A24', muted:'#5A524B', accent:'#B45F2F', accentInk:'#FFFFFF', line:'#E2DACA', radius:'4px',  sans:'"Cormorant Garamond", Georgia, serif' } },
  { id:'cyber',    label:'Cyber neon',      swatch:'#00FFA3', tokens:{ bg:'#05060A', surface:'#0B0E16', ink:'#E6FFF5', muted:'#7AE1BF', accent:'#00FFA3', accentInk:'#05060A', line:'#162133', radius:'6px',  sans:'"JetBrains Mono", monospace' } },
  { id:'nothing',  label:'Nothing industrial', swatch:'#000000', tokens:{ bg:'#000000', surface:'#0A0A0A', ink:'#FFFFFF', muted:'#8A8A8A', accent:'#D71921', accentInk:'#FFFFFF', line:'#1F1F1F', radius:'2px', sans:'"Space Grotesk", "Helvetica Neue", system-ui', mono:'"Space Mono", ui-monospace, monospace', dot:'"Doto", "Space Mono", monospace' } },
  { id:'mercury',  label:'Mercury banking',    swatch:'#B7A7E8', tokens:{ bg:'#0E0D14', surface:'#16151E', surface2:'#1E1C29', ink:'#F5F2FA', muted:'#8A8398', accent:'#B7A7E8', accentInk:'#0E0D14', line:'#26242F', radius:'14px', sans:'"Inter", "SF Pro Display", system-ui', mono:'"JetBrains Mono", ui-monospace, monospace', positive:'#7CD9A4', negative:'#E8A0B8' } },
  { id:'retro-ascii', label:'Retro ASCII CRT', swatch:'#00FF6A', tokens:{ bg:'#05090A', surface:'#080F0B', ink:'#B8FFB8', muted:'#2A4A32', accent:'#00FF6A', accentInk:'#05090A', line:'#0F1F14', radius:'0px', sans:'"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace', mono:'"JetBrains Mono", ui-monospace, monospace' } },
  { id:'nothing-mobile', label:'Nothing mobile', swatch:'#FF2D2D', tokens:{ bg:'#000000', surface:'#0A0A0A', ink:'#FFFFFF', muted:'#7A7A7A', accent:'#FF2D2D', accentInk:'#FFFFFF', line:'#1A1A1A', radius:'4px', sans:'"Space Grotesk", system-ui', mono:'"Space Mono", ui-monospace, monospace' } },
];

function escHtml(s){return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

function shell(t, body, scriptBody, h){
  return `<!doctype html><html><head><meta charset="utf-8"/><style>
*{box-sizing:border-box}html,body{margin:0;padding:0}
body{background:${t.bg};color:${t.ink};font-family:${t.sans};font-size:13px;-webkit-font-smoothing:antialiased;line-height:1.5;height:${h}px;overflow:hidden}
button,input,textarea{font-family:inherit}
.btn{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 14px;border-radius:${t.radius};border:0;cursor:pointer;font-weight:500;font-size:13px;transition:transform .12s ease,opacity .12s ease;outline:0}
.btn:hover{transform:translateY(-1px)}.btn:active{transform:translateY(0);opacity:.85}
.btn-primary{background:${t.ink};color:${t.bg}}
.btn-accent{background:${t.accent};color:${t.accentInk}}
.btn-ghost{background:transparent;color:${t.ink};border:1px solid ${t.line}}
.card{background:${t.surface};border:1px solid ${t.line};border-radius:${t.radius}}
.muted{color:${t.muted}} .row{display:flex;align-items:center;gap:10px}
.hover-lift{transition:transform .15s ease,box-shadow .15s ease}
.hover-lift:hover{transform:translateY(-2px);box-shadow:0 6px 20px -10px ${t.ink}33}
.fade-in{animation:fade .55s ease both}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background:${t.line};border-radius:6px}
</style></head><body>${body}<script>(function(){const T=${JSON.stringify(t)};${scriptBody}})();<\/script></body></html>`;
}

// ★ CEILING NOTHING — 独立渲染（不走 shell，整张卡是 dot-matrix bento dashboard）
function nothingDashboardDoc(p){
  const h = 720;
  const headline = (p && p.headline) || 'Nightcall / device mix';
  const sub = (p && p.sub) || 'Internal speaker pair · adaptive low-latency';
  return `<!doctype html><html><head><meta charset="utf-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter+Tight:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#0a0a0a;color:#f4f4f4;font-family:"Inter Tight",system-ui,sans-serif;-webkit-font-smoothing:antialiased;height:${h}px;overflow:hidden}
body{padding:18px}
.wrap{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:64px;gap:8px;height:100%}
.card{background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:14px 16px;position:relative;overflow:hidden;display:flex;flex-direction:column}
.card::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.012) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.012) 1px, transparent 1px);background-size:18px 18px;pointer-events:none}
.meta{display:flex;align-items:center;justify-content:space-between;font-family:"Space Mono",monospace;font-size:9px;letter-spacing:.18em;color:#9a9a9a;text-transform:uppercase;position:relative;z-index:2}
.led{width:5px;height:5px;border-radius:1px;background:#ff3b3b;box-shadow:0 0 6px #ff3b3b;animation:blink 2.4s infinite}
.led.idle{background:#444;box-shadow:none;animation:none}
@keyframes blink{0%,40%{opacity:1}50%{opacity:.2}100%{opacity:1}}
.c-clock{grid-column:span 7;grid-row:span 4}
.c-clock .body{display:flex;flex:1;margin-top:12px;position:relative;z-index:2}
.clock-sub{font-family:"Space Mono",monospace;font-size:10px;color:#9a9a9a;letter-spacing:.16em;margin-top:10px}
.glyph-link .label{font-family:"Space Mono",monospace;font-size:9px;letter-spacing:.18em;color:#9a9a9a}
.glyph-grid{display:grid;grid-template-columns:repeat(11,7px);grid-template-rows:repeat(11,7px);gap:2px;margin-top:8px}
.glyph-grid i{width:7px;height:7px;background:#262626;border-radius:1px;display:block}
.glyph-grid i.on{background:#f4f4f4}
.glyph-grid i.dim{background:#3a3a3a}
.clock-foot{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;position:relative;z-index:2;margin-top:10px;padding-top:10px;border-top:1px dashed #2a2a2a}
.stat .k{font-family:"Space Mono",monospace;font-size:9px;letter-spacing:.18em;color:#9a9a9a}
.stat .v{font-family:"Space Mono",monospace;font-size:18px;color:#f4f4f4;margin-top:2px}
.stat .u{font-family:"Space Mono",monospace;font-size:9px;color:#5a5a5a;letter-spacing:.18em;margin-top:1px}
.ticker{position:relative;z-index:2;margin-top:10px;font-family:"Space Mono",monospace;font-size:9px;letter-spacing:.18em;color:#5a5a5a;border-top:1px solid #1f1f1f;padding-top:8px}
.c-play{grid-column:span 5;grid-row:span 3;background:#fafafa;color:#0a0a0a;border-color:#fafafa}
.c-play::before{display:none}
.c-play .meta{color:#666}
.c-play h2{font-size:18px;font-weight:600;letter-spacing:-.01em;margin-top:10px;font-family:"Inter Tight";line-height:1.2}
.c-play .desc{font-size:11px;color:#666;margin-top:4px}
.vu{display:flex;align-items:flex-end;gap:2px;margin-top:auto;height:42px}
.vu i{width:5px;background:#0a0a0a;border-radius:1px;display:block}
.vu i.lo{background:#bdbdbd}
.c-matrix{grid-column:span 3;grid-row:span 3}
.matrix{display:grid;grid-template-columns:repeat(auto-fill,8px);grid-auto-rows:8px;gap:2px;margin-top:10px;position:relative;z-index:2;flex:1;align-content:start;justify-content:start;overflow:hidden}
.matrix i{width:8px;height:8px;background:#262626;border-radius:1px}
.matrix i.on{background:#f4f4f4}
.matrix i.mid{background:#5a5a5a}
.c-sky{grid-column:span 2;grid-row:span 3}
.sky-temp{display:flex;align-items:flex-start;gap:3px;margin-top:10px;position:relative;z-index:2}
.sky-temp .deg{font-family:"Space Mono",monospace;font-size:10px;color:#9a9a9a;letter-spacing:.18em;margin-top:3px}
.sky-desc{font-size:10px;color:#9a9a9a;margin-top:auto;font-family:"Space Mono",monospace;letter-spacing:.05em;position:relative;z-index:2;line-height:1.3}
.mini-glyph{display:grid;grid-template-columns:repeat(8,4px);gap:2px;margin-top:6px;position:relative;z-index:2}
.mini-glyph i{width:4px;height:4px;background:#262626;border-radius:1px}
.mini-glyph i.on{background:#9a9a9a}
.c-radio{grid-column:span 7;grid-row:span 3}
.tuner{position:relative;flex:1;margin-top:12px;z-index:2;display:flex;align-items:center;gap:18px}
.tuner .scale{flex:1;height:60px;position:relative;border-bottom:1px solid #2a2a2a}
.tuner .scale .tick{position:absolute;bottom:0;width:1px;background:#5a5a5a}
.tuner .scale .tick.major{background:#9a9a9a;height:14px}
.tuner .scale .tick.minor{height:7px}
.tuner .scale .needle{position:absolute;top:0;width:12px;height:60px;display:flex;flex-direction:column;align-items:center;transform:translateX(-6px);transition:left .3s}
.tuner .scale .needle::before{content:"";width:1px;height:46px;background:#f4f4f4}
.tuner .scale .needle::after{content:"";width:12px;height:12px;border:1px solid #f4f4f4;background:#0a0a0a;border-radius:2px;margin-top:-2px}
.tuner .scale .ends{position:absolute;left:0;right:0;bottom:-14px;display:flex;justify-content:space-between;font-family:"Space Mono",monospace;font-size:9px;color:#5a5a5a;letter-spacing:.18em}
.freq{font-family:"Space Mono",monospace;text-align:right}
.freq .big{font-size:32px;color:#f4f4f4;letter-spacing:.02em;line-height:1}
.freq .small{font-size:9px;color:#9a9a9a;letter-spacing:.18em;margin-top:6px}
.c-cpu{grid-column:span 3;grid-row:span 3}
.cpu-val{display:flex;align-items:baseline;gap:3px;margin-top:8px;position:relative;z-index:2}
.cpu-val .n{font-family:"Space Mono",monospace;font-size:26px}
.cpu-val .p{font-family:"Space Mono",monospace;font-size:11px;color:#9a9a9a}
.cpu-spark{flex:1;margin-top:4px;position:relative;z-index:2}
.cpu-foot{display:flex;justify-content:space-between;font-family:"Space Mono",monospace;font-size:9px;color:#5a5a5a;letter-spacing:.18em;position:relative;z-index:2}
.c-batt{grid-column:span 2;grid-row:span 3}
.batt-num{display:flex;gap:4px;align-items:flex-start;margin-top:8px;position:relative;z-index:2}
.batt-bar{display:flex;gap:2px;margin-top:auto;position:relative;z-index:2;padding:4px 0}
.batt-bar i{flex:1;height:14px;background:#1f1f1f;border-radius:1px}
.batt-bar i.on{background:#3ddc84}
.batt-foot{display:flex;justify-content:space-between;font-family:"Space Mono",monospace;font-size:9px;color:#5a5a5a;letter-spacing:.18em;margin-top:4px;position:relative;z-index:2}
.c-bus{grid-column:span 4;grid-row:span 3}
.bus-list{display:flex;flex-direction:column;gap:6px;margin-top:10px;position:relative;z-index:2}
.bus-row{display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:#0e0e0e;border:1px solid #1f1f1f;border-radius:6px}
.bus-row .name{font-size:12px;color:#f4f4f4}
.bus-row .ind{display:grid;grid-template-columns:repeat(3,4px);grid-auto-rows:4px;gap:1.5px}
.bus-row .ind i{width:4px;height:4px;background:#262626;border-radius:1px}
.bus-row .ind i.on{background:#f4f4f4}
.c-focus{grid-column:span 3;grid-row:span 3}
.focus-body{display:flex;align-items:center;gap:10px;margin-top:10px;position:relative;z-index:2;flex:1}
.focus-time{font-family:"Space Mono",monospace;font-size:18px}
.focus-desc{font-size:10px;color:#9a9a9a;margin-top:4px;font-family:"Space Mono",monospace;letter-spacing:.1em}
.focus-bar{display:flex;gap:2px;margin-top:auto;position:relative;z-index:2}
.focus-bar i{flex:1;height:10px;background:#1f1f1f;border-radius:1px}
.focus-bar i.on{background:#f4f4f4}
.c-net{grid-column:span 3;grid-row:span 3}
.net-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:8px;position:relative;z-index:2}
.net-row .k{font-family:"Space Mono",monospace;font-size:9px;color:#9a9a9a;letter-spacing:.18em}
.net-row .v{font-family:"Space Mono",monospace;font-size:14px;color:#f4f4f4;margin-top:2px}
.c-amb{grid-column:span 2;grid-row:span 3}
.amb-vu{display:flex;align-items:flex-end;gap:2px;flex:1;margin-top:10px;position:relative;z-index:2;height:46px}
.amb-vu i{flex:1;background:#3a3a3a;border-radius:1px}
.amb-vu i.hot{background:#ff3b3b}
.amb-foot{display:grid;grid-template-columns:1fr 1fr;gap:10px;position:relative;z-index:2;margin-top:6px}
.amb-foot .k{font-family:"Space Mono",monospace;font-size:9px;color:#9a9a9a;letter-spacing:.18em}
.amb-foot .v{font-family:"Space Mono",monospace;font-size:11px;color:#f4f4f4;margin-top:1px}
</style></head><body>
<div class="wrap">
  <div class="card c-clock"><div class="meta"><span>DEVICE CLOCK</span><span class="led"></span></div>
    <div class="body">
      <div><canvas id="dotClock" width="320" height="64"></canvas><div class="clock-sub" id="dateLine">SUN, MAY 10  :10</div></div>
    </div>
    <div class="clock-foot">
      <div class="stat"><div class="k">UPTIME</div><div class="v" id="uptime">18:28:21</div></div>
      <div class="stat"><div class="k">THREADS</div><div class="v">141</div></div>
      <div class="stat"><div class="k">LATENCY</div><div class="v">24</div><div class="u">MS</div></div>
    </div>
    <div class="ticker">GLYPH SEQUENCER ARMED  //  THERMAL NOMINAL  //  RADIO MESH CLEAN</div>
  </div>
  <div class="card c-play"><div class="meta"><span>NOW PLAYING</span><span class="led idle" style="background:#bdbdbd"></span></div>
    <h2>${headline}</h2><div class="desc">${sub}</div>
    <div class="vu" id="vuBars"></div>
  </div>
  <div class="card c-matrix"><div class="meta"><span>GLYPH MATRIX</span><span class="led idle"></span></div><div class="matrix" id="matrix"></div></div>
  <div class="card c-sky"><div class="meta"><span>LOCAL SKY</span><span class="led idle"></span></div>
    <div class="sky-temp"><canvas id="skyTemp" width="60" height="30"></canvas><span class="deg">°C</span></div>
    <div class="mini-glyph" id="miniGlyph"></div><div class="sky-desc">thin cloud /<br/>steady pressure</div>
  </div>
  <div class="card c-radio"><div class="meta"><span>RADIO TUNER</span><span class="led idle"></span></div>
    <div class="tuner"><div class="scale" id="tunerScale"><div class="needle" id="needle" style="left:60%"></div><div class="ends"><span>88.1</span><span>108.0</span></div></div>
    <div class="freq"><div class="big">98.7</div><div class="small">98.7 MHZ · 58DB CLEAN</div></div></div>
  </div>
  <div class="card c-cpu"><div class="meta"><span>CPU LOAD</span><span class="led idle"></span></div>
    <div class="cpu-val"><span class="n" id="cpuN">38</span><span class="p">%</span></div>
    <canvas class="cpu-spark" id="cpuSpark" width="220" height="60"></canvas>
    <div class="cpu-foot"><span>8C</span><span>40.7°</span></div>
  </div>
  <div class="card c-batt"><div class="meta"><span>BATTERY</span><span class="led idle"></span></div>
    <div class="batt-num"><canvas id="battNum" width="48" height="26"></canvas><span style="font-family:Space Mono,monospace;font-size:10px;color:#9a9a9a;letter-spacing:.18em;margin-top:3px">%</span></div>
    <div class="batt-bar" id="battBar"></div>
    <div class="batt-foot"><span>CHARGING</span><span>7H 40M</span></div>
  </div>
  <div class="card c-bus"><div class="meta"><span>QUICK BUS</span><span class="led idle"></span></div>
    <div class="bus-list">
      <div class="bus-row"><span class="name">Wi-Fi 6E</span><span class="ind" data-on="6"></span></div>
      <div class="bus-row"><span class="name">Glyph Sync</span><span class="ind" data-on="9"></span></div>
      <div class="bus-row"><span class="name">Mic Gate</span><span class="ind" data-on="3"></span></div>
      <div class="bus-row"><span class="name">Focus Lock</span><span class="ind" data-on="5"></span></div>
    </div>
  </div>
  <div class="card c-focus"><div class="meta"><span>FOCUS RING</span><span class="led idle"></span></div>
    <div class="focus-body"><canvas id="focusRing" width="68" height="68"></canvas><div><div class="focus-time">20:02</div><div class="focus-desc">deep work block</div></div></div>
    <div class="focus-bar" id="focusBar"></div>
  </div>
  <div class="card c-net"><div class="meta"><span>NETWORK</span><span class="led idle"></span></div>
    <div class="net-row"><div><div class="k">DOWN</div><div class="v">188 MB</div></div><div><div class="k">RTT</div><div class="v">48 MS</div></div></div>
    <canvas id="netSpark" width="220" height="44" style="margin-top:6px;position:relative;z-index:2"></canvas>
  </div>
  <div class="card c-amb"><div class="meta"><span>AMBIENT VU</span><span class="led idle"></span></div>
    <div class="amb-vu" id="ambVu"></div>
    <div class="amb-foot"><div><div class="k">NOISE</div><div class="v">53DB</div></div><div><div class="k">AQI</div><div class="v">037</div></div></div>
  </div>
</div>
<script>
const DOT_MAP={"0":["01110","10001","10011","10101","11001","10001","01110"],"1":["00100","01100","00100","00100","00100","00100","01110"],"2":["01110","10001","00001","00010","00100","01000","11111"],"3":["11110","00001","00001","01110","00001","00001","11110"],"4":["00010","00110","01010","10010","11111","00010","00010"],"5":["11111","10000","11110","00001","00001","10001","01110"],"6":["00110","01000","10000","11110","10001","10001","01110"],"7":["11111","00001","00010","00100","01000","01000","01000"],"8":["01110","10001","10001","01110","10001","10001","01110"],"9":["01110","10001","10001","01111","00001","00010","01100"],":":["00000","00100","00100","00000","00100","00100","00000"]," ":["00000","00000","00000","00000","00000","00000","00000"]};
function dd(ctx,text,scale){scale=scale||7;ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);let x=0;for(const ch of text){const m=DOT_MAP[ch]||DOT_MAP[" "];for(let r=0;r<7;r++)for(let c=0;c<5;c++){if(m[r][c]==="1"){ctx.fillStyle="#f4f4f4";ctx.fillRect(x+c*scale,r*scale,scale-1.5,scale-1.5)}else{ctx.fillStyle="#1f1f1f";ctx.fillRect(x+c*scale,r*scale,scale-1.5,scale-1.5)}}x+=6*scale}}
const cc=document.getElementById("dotClock").getContext("2d");
function tick(){const d=new Date();dd(cc,String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"),9);const days=["SUN","MON","TUE","WED","THU","FRI","SAT"],months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];document.getElementById("dateLine").textContent=days[d.getDay()]+", "+months[d.getMonth()]+" "+String(d.getDate()).padStart(2,"0")+"  :"+String(d.getSeconds()).padStart(2,"0")}
tick();setInterval(tick,1000);
dd(document.getElementById("skyTemp").getContext("2d"),"28",4);
dd(document.getElementById("battNum").getContext("2d"),"92",4);
let upS=18*3600+28*60+21;setInterval(function(){upS++;document.getElementById("uptime").textContent=String(Math.floor(upS/3600)).padStart(2,"0")+":"+String(Math.floor(upS/60)%60).padStart(2,"0")+":"+String(upS%60).padStart(2,"0")},1000);
(function(){const g=document.getElementById("matrix");if(!g)return;const cells=[];function build(){g.innerHTML="";cells.length=0;const w=g.clientWidth,h=g.clientHeight,cell=8,gap=2;const cols=Math.max(1,Math.floor((w+gap)/(cell+gap))),rows=Math.max(1,Math.floor((h+gap)/(cell+gap))),total=cols*rows;for(let i=0;i<total;i++){const e=document.createElement("i");const r=Math.random();if(r<.3)e.classList.add("on");else if(r<.7)e.classList.add("mid");g.appendChild(e);cells.push(e)}}build();window.addEventListener("resize",build);setInterval(function(){if(!cells.length)return;for(let k=0;k<8;k++){const c=cells[Math.floor(Math.random()*cells.length)];c.className="";const r=Math.random();if(r<.3)c.classList.add("on");else if(r<.7)c.classList.add("mid")}},400)})();
(function(){const g=document.getElementById("miniGlyph");for(let i=0;i<32;i++){const e=document.createElement("i");if(Math.random()<.4)e.classList.add("on");g.appendChild(e)}})();
(function(){const g=document.getElementById("vuBars"),N=32,bars=[];for(let i=0;i<N;i++){const b=document.createElement("i");bars.push(b);g.appendChild(b)}function t(){bars.forEach(function(b,i){const base=Math.sin(i/3+Date.now()/300)*.4+.55,h=Math.max(6,base*42+(Math.random()*14-7));b.style.height=h+"px";b.classList.toggle("lo",h<18)})}t();setInterval(t,140)})();
(function(){const s=document.getElementById("tunerScale");for(let i=0;i<60;i++){const t=document.createElement("div");t.className="tick "+(i%5===0?"major":"minor");t.style.left=(i/59*100)+"%";s.appendChild(t)}let pos=60;setInterval(function(){pos+=(Math.random()-.5)*2;pos=Math.max(20,Math.min(85,pos));document.getElementById("needle").style.left=pos+"%"},1400)})();
(function(){const c=document.getElementById("cpuSpark"),x=c.getContext("2d"),W=c.width,H=c.height,d=Array.from({length:50},function(){return 30+Math.random()*20});function draw(){x.clearRect(0,0,W,H);x.strokeStyle="#f4f4f4";x.lineWidth=1.5;x.beginPath();d.forEach(function(v,i){const X=i/(d.length-1)*W,Y=H-(v/80)*H;i===0?x.moveTo(X,Y):x.lineTo(X,Y)});x.stroke()}draw();setInterval(function(){d.push(28+Math.random()*22);d.shift();document.getElementById("cpuN").textContent=Math.round(d[d.length-1]);draw()},800)})();
(function(){const g=document.getElementById("battBar"),N=14;for(let i=0;i<N;i++){const b=document.createElement("i");if(i<Math.round(N*.92))b.classList.add("on");g.appendChild(b)}})();
(function(){const c=document.getElementById("focusRing"),x=c.getContext("2d");x.strokeStyle="#262626";x.lineWidth=7;x.beginPath();x.arc(34,34,26,0,Math.PI*2);x.stroke();x.strokeStyle="#f4f4f4";x.lineWidth=7;x.beginPath();x.arc(34,34,26,-Math.PI/2,-Math.PI/2+Math.PI*2*.62);x.stroke()})();
(function(){const g=document.getElementById("focusBar");for(let i=0;i<14;i++){const b=document.createElement("i");if(i<10)b.classList.add("on");g.appendChild(b)}})();
(function(){const c=document.getElementById("netSpark"),x=c.getContext("2d"),W=c.width,H=c.height,d=Array.from({length:40},function(){return 20+Math.random()*30});function draw(){x.clearRect(0,0,W,H);x.strokeStyle="#f4f4f4";x.lineWidth=1.5;x.beginPath();d.forEach(function(v,i){const X=i/(d.length-1)*W,Y=H-(v/60)*H;i===0?x.moveTo(X,Y):x.lineTo(X,Y)});x.stroke()}draw();setInterval(function(){d.push(15+Math.random()*40);d.shift();draw()},900)})();
(function(){const g=document.getElementById("ambVu"),N=18,bars=[];for(let i=0;i<N;i++){const b=document.createElement("i");bars.push(b);g.appendChild(b)}function t(){bars.forEach(function(b,i){const v=Math.random()*.7+.2;b.style.height=(v*46)+"px";b.classList.toggle("hot",i>=N-3&&Math.random()<.4)})}t();setInterval(t,380)})();
document.querySelectorAll(".bus-row .ind").forEach(function(el){const on=parseInt(el.dataset.on||"0",10);for(let i=0;i<9;i++){const d=document.createElement("i");if(i<on)d.classList.add("on");el.appendChild(d)}});
<\/script></body></html>`;
}

// ★ CEILING MERCURY — 银行级 bento dashboard（仅在 mercury token 抽到）
function mercuryBankingDoc(p){
  const h = 720;
  const headline = (p && p.headline) || 'Operating · Mercury';
  const sub = (p && p.sub) || 'Treasury · payroll · vendor cards';
  return `<!doctype html><html><head><meta charset="utf-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#0E0D14;color:#F5F2FA;font-family:"Inter","SF Pro Display",system-ui,sans-serif;-webkit-font-smoothing:antialiased;height:${h}px;overflow:hidden}
body{padding:18px}
.wrap{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:54px;gap:10px;height:100%}
.card{background:linear-gradient(180deg,#1A1824 0%,#16151E 100%);border:1px solid #26242F;border-radius:14px;padding:16px;position:relative;overflow:hidden;display:flex;flex-direction:column}
.card::after{content:"";position:absolute;inset:0;border-radius:14px;background:radial-gradient(120% 80% at 0% 0%, rgba(183,167,232,.06), transparent 60%);pointer-events:none}
.meta{display:flex;align-items:center;justify-content:space-between;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:9.5px;letter-spacing:.16em;color:#8A8398;text-transform:uppercase;position:relative;z-index:2}
.meta .dot{width:6px;height:6px;border-radius:50%;background:#7CD9A4;box-shadow:0 0 8px #7CD9A4}
.meta .dot.idle{background:#3A3548;box-shadow:none}
.meta .pill{font-size:9px;padding:2px 7px;border:1px solid #2E2C3B;border-radius:999px;color:#B7A7E8;letter-spacing:.14em;background:rgba(183,167,232,.06)}

/* ── ROW 1 ── */
.c-balance{grid-column:span 7;grid-row:span 5;background:linear-gradient(135deg,#1F1B2E 0%,#16151E 60%);position:relative}
.c-balance::before{content:"";position:absolute;right:-40px;top:-40px;width:280px;height:280px;background:radial-gradient(circle,rgba(183,167,232,.18),transparent 70%);pointer-events:none}
.bal-eyebrow{font-family:"JetBrains Mono",monospace;font-size:10px;letter-spacing:.2em;color:#8A8398;text-transform:uppercase;margin-top:14px;position:relative;z-index:2}
.bal-acct{display:flex;align-items:center;gap:10px;margin-top:6px;position:relative;z-index:2}
.bal-acct .name{font-size:14px;font-weight:500;color:#F5F2FA}
.bal-acct .num{font-family:"JetBrains Mono",monospace;font-size:11px;color:#8A8398;letter-spacing:.06em}
.bal-acct .acct-pill{padding:2px 8px;border:1px solid #2E2C3B;border-radius:999px;font-family:"JetBrains Mono",monospace;font-size:9.5px;color:#B7A7E8;letter-spacing:.12em}
.bal-num{font-family:"Inter",system-ui;font-weight:600;font-size:54px;letter-spacing:-.025em;line-height:1;margin-top:18px;position:relative;z-index:2;font-feature-settings:"tnum";display:flex;align-items:baseline;gap:6px}
.bal-num .cur{font-size:24px;color:#8A8398;font-weight:400}
.bal-num .cents{font-size:24px;color:#8A8398;font-weight:400}
.bal-delta{display:flex;align-items:center;gap:8px;margin-top:10px;position:relative;z-index:2;font-family:"JetBrains Mono",monospace;font-size:11px}
.bal-delta .up{color:#7CD9A4;display:inline-flex;align-items:center;gap:4px}
.bal-delta .since{color:#8A8398;letter-spacing:.06em}
.bal-spark{flex:1;margin-top:auto;position:relative;z-index:2;display:flex;align-items:flex-end}
.bal-foot{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:14px;padding-top:14px;border-top:1px dashed #2A2836;position:relative;z-index:2}
.bal-foot .k{font-family:"JetBrains Mono",monospace;font-size:9.5px;color:#8A8398;letter-spacing:.16em;text-transform:uppercase}
.bal-foot .v{font-family:"Inter",system-ui;font-size:16px;font-weight:500;color:#F5F2FA;margin-top:3px;font-feature-settings:"tnum"}
.bal-foot .v.pos{color:#7CD9A4}
.bal-foot .v.neg{color:#E8A0B8}

.c-cards{grid-column:span 5;grid-row:span 5;background:linear-gradient(160deg,#252134 0%,#1A1726 100%);overflow:hidden}
.cc-stack{position:relative;flex:1;margin-top:14px;perspective:800px}
.cc{position:absolute;left:0;right:0;border-radius:12px;padding:16px;height:130px;box-shadow:0 18px 40px -18px rgba(0,0,0,.7);transition:transform .3s ease}
.cc-1{top:0;background:linear-gradient(135deg,#3A2D5C 0%,#1E1A2E 100%);border:1px solid #4A3E70;z-index:3;transform:rotate(-2deg)}
.cc-2{top:62px;background:linear-gradient(135deg,#2A2540 0%,#181625 100%);border:1px solid #3A3450;z-index:2;transform:rotate(1deg) translateX(8px);opacity:.78}
.cc-3{top:118px;background:linear-gradient(135deg,#1E1B2C 0%,#14121C 100%);border:1px solid #2E2C3B;z-index:1;transform:rotate(-1deg) translateX(-4px);opacity:.55}
.cc .row1{display:flex;justify-content:space-between;align-items:flex-start}
.cc .brand{font-family:"JetBrains Mono",monospace;font-size:9px;letter-spacing:.2em;color:#B7A7E8;text-transform:uppercase}
.cc .chip{width:26px;height:20px;border-radius:4px;background:linear-gradient(135deg,#C7B7F5,#7E6FB8);box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)}
.cc .pan{font-family:"JetBrains Mono",monospace;font-size:13px;letter-spacing:.18em;color:#F5F2FA;margin-top:32px;font-weight:500}
.cc .row3{display:flex;justify-content:space-between;align-items:flex-end;margin-top:12px;font-family:"JetBrains Mono",monospace;font-size:9.5px;letter-spacing:.14em;color:#A097B8}
.cc .name{color:#F5F2FA}
.cc-foot{margin-top:auto;padding-top:14px;border-top:1px solid #26242F;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:14px;position:relative;z-index:2}
.cc-foot .k{font-family:"JetBrains Mono",monospace;font-size:9px;color:#8A8398;letter-spacing:.16em;text-transform:uppercase}
.cc-foot .v{font-family:"Inter",system-ui;font-size:13px;font-weight:500;color:#F5F2FA;margin-top:3px;font-feature-settings:"tnum"}
.cc-foot .bar{height:3px;background:#26242F;border-radius:99px;margin-top:7px;overflow:hidden}
.cc-foot .bar i{display:block;height:100%;background:linear-gradient(90deg,#B7A7E8,#7CD9A4);border-radius:99px}

/* ── ROW 2 ── */
.c-flow{grid-column:span 7;grid-row:span 4}
.flow-head{display:flex;justify-content:space-between;align-items:flex-end;margin-top:12px;position:relative;z-index:2}
.flow-head .big{font-family:"Inter",system-ui;font-size:24px;font-weight:600;letter-spacing:-.02em;font-feature-settings:"tnum"}
.flow-head .lbl{font-family:"JetBrains Mono",monospace;font-size:10px;color:#8A8398;letter-spacing:.16em;text-transform:uppercase;margin-bottom:5px}
.flow-tabs{display:flex;gap:4px;margin-left:auto}
.flow-tabs i{font-family:"JetBrains Mono",monospace;font-size:9px;padding:3px 9px;border-radius:999px;border:1px solid #2A2836;color:#8A8398;letter-spacing:.14em;font-style:normal;text-transform:uppercase}
.flow-tabs i.on{background:rgba(183,167,232,.12);color:#B7A7E8;border-color:#3A3155}
.flow-chart{flex:1;margin-top:14px;position:relative;z-index:2;min-height:0}
.flow-legend{display:flex;gap:18px;margin-top:8px;font-family:"JetBrains Mono",monospace;font-size:9.5px;color:#8A8398;letter-spacing:.12em;text-transform:uppercase;position:relative;z-index:2}
.flow-legend .sw{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:6px;vertical-align:middle}

.c-tx{grid-column:span 5;grid-row:span 4}
.tx-list{margin-top:12px;flex:1;display:flex;flex-direction:column;gap:8px;position:relative;z-index:2;overflow:hidden}
.tx{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed #25232E}
.tx:last-child{border-bottom:0}
.tx .av{width:30px;height:30px;border-radius:9px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-family:"Inter",system-ui;font-weight:600;font-size:12px;color:#0E0D14}
.tx .meta{flex:1;min-width:0}
.tx .name{font-size:12.5px;font-weight:500;color:#F5F2FA;text-transform:none;letter-spacing:0;font-family:"Inter",system-ui;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}
.tx .desc{font-family:"JetBrains Mono",monospace;font-size:9.5px;color:#8A8398;letter-spacing:.06em;margin-top:1px;display:block}
.tx .amt{font-family:"Inter",system-ui;font-weight:500;font-size:13px;font-feature-settings:"tnum";text-align:right;flex-shrink:0}
.tx .amt.in{color:#7CD9A4}
.tx .amt.out{color:#F5F2FA}
.tx .amt.pend{color:#8A8398}
.tx .time{font-family:"JetBrains Mono",monospace;font-size:9px;color:#5C5670;letter-spacing:.12em;margin-top:1px;display:block;text-align:right}

/* ── ROW 3 ── */
.c-runway{grid-column:span 4;grid-row:span 4}
.rw-num{font-family:"Inter",system-ui;font-weight:600;font-size:38px;letter-spacing:-.02em;margin-top:14px;position:relative;z-index:2;font-feature-settings:"tnum";line-height:1}
.rw-num .u{font-size:14px;color:#8A8398;font-weight:400;margin-left:4px}
.rw-sub{font-family:"JetBrains Mono",monospace;font-size:10px;color:#8A8398;letter-spacing:.12em;margin-top:6px;position:relative;z-index:2}
.rw-bar{margin-top:auto;position:relative;z-index:2}
.rw-bar .track{height:6px;background:#26242F;border-radius:99px;overflow:hidden}
.rw-bar .fill{height:100%;background:linear-gradient(90deg,#7CD9A4 0%,#B7A7E8 100%);border-radius:99px;width:64%}
.rw-bar .ticks{display:flex;justify-content:space-between;margin-top:6px;font-family:"JetBrains Mono",monospace;font-size:9px;color:#5C5670;letter-spacing:.14em}

.c-team{grid-column:span 4;grid-row:span 4}
.tm-head{display:flex;align-items:baseline;gap:8px;margin-top:12px;position:relative;z-index:2}
.tm-head .big{font-family:"Inter",system-ui;font-size:28px;font-weight:600;letter-spacing:-.02em;font-feature-settings:"tnum"}
.tm-head .delta{font-family:"JetBrains Mono",monospace;font-size:10px;color:#7CD9A4;letter-spacing:.1em}
.tm-list{margin-top:12px;display:flex;flex-direction:column;gap:7px;position:relative;z-index:2}
.tm-row{display:flex;align-items:center;gap:8px}
.tm-row .av{width:22px;height:22px;border-radius:50%;flex-shrink:0;font-family:"Inter",system-ui;font-weight:600;font-size:9.5px;color:#0E0D14;display:flex;align-items:center;justify-content:center}
.tm-row .nm{font-size:11.5px;color:#F5F2FA;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tm-row .role{font-family:"JetBrains Mono",monospace;font-size:9px;color:#8A8398;letter-spacing:.1em}
.tm-row .amt{font-family:"JetBrains Mono",monospace;font-size:10px;color:#A097B8;font-feature-settings:"tnum"}

.c-api{grid-column:span 4;grid-row:span 4}
.api-status{display:flex;align-items:center;gap:8px;margin-top:14px;position:relative;z-index:2}
.api-status .ring{width:10px;height:10px;border-radius:50%;background:#7CD9A4;box-shadow:0 0 0 4px rgba(124,217,164,.16)}
.api-status .lbl{font-family:"JetBrains Mono",monospace;font-size:11px;color:#7CD9A4;letter-spacing:.16em;text-transform:uppercase}
.api-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:14px;position:relative;z-index:2}
.api-grid .k{font-family:"JetBrains Mono",monospace;font-size:9px;color:#8A8398;letter-spacing:.14em;text-transform:uppercase}
.api-grid .v{font-family:"Inter",system-ui;font-size:15px;font-weight:500;color:#F5F2FA;margin-top:3px;font-feature-settings:"tnum"}
.api-spark{margin-top:auto;position:relative;z-index:2;height:32px}
.api-foot{display:flex;justify-content:space-between;font-family:"JetBrains Mono",monospace;font-size:9px;color:#5C5670;letter-spacing:.14em;text-transform:uppercase;position:relative;z-index:2}

/* ── ROW 4 ── */
.c-bills{grid-column:span 5;grid-row:span 3}
.bills-list{margin-top:12px;flex:1;display:flex;flex-direction:column;gap:7px;position:relative;z-index:2;overflow:hidden}
.bill{display:flex;align-items:center;gap:10px;padding:6px 10px;background:rgba(255,255,255,.02);border:1px solid #25232E;border-radius:10px}
.bill .day{width:32px;text-align:center;flex-shrink:0}
.bill .day .d{font-family:"Inter",system-ui;font-size:14px;font-weight:600;color:#F5F2FA;line-height:1}
.bill .day .m{font-family:"JetBrains Mono",monospace;font-size:8px;color:#8A8398;letter-spacing:.14em;margin-top:2px}
.bill .bd{flex:1;min-width:0}
.bill .bd .t{font-size:11.5px;color:#F5F2FA;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bill .bd .s{font-family:"JetBrains Mono",monospace;font-size:9px;color:#8A8398;letter-spacing:.06em;margin-top:1px}
.bill .amt{font-family:"Inter",system-ui;font-size:12px;font-weight:500;color:#F5F2FA;font-feature-settings:"tnum";flex-shrink:0}
.bill .tag{padding:2px 6px;border-radius:4px;font-family:"JetBrains Mono",monospace;font-size:8.5px;letter-spacing:.12em;text-transform:uppercase}
.bill .tag.due{background:rgba(232,160,184,.14);color:#E8A0B8}
.bill .tag.sched{background:rgba(124,217,164,.14);color:#7CD9A4}

.c-fx{grid-column:span 4;grid-row:span 3}
.fx-list{margin-top:14px;flex:1;display:flex;flex-direction:column;gap:9px;position:relative;z-index:2}
.fx-row{display:flex;align-items:center;gap:10px}
.fx-row .pair{font-family:"JetBrains Mono",monospace;font-size:10.5px;letter-spacing:.14em;color:#F5F2FA;width:64px;flex-shrink:0}
.fx-row .rate{font-family:"Inter",system-ui;font-weight:500;font-size:13px;color:#F5F2FA;font-feature-settings:"tnum";flex:1}
.fx-row .delta{font-family:"JetBrains Mono",monospace;font-size:10px;letter-spacing:.08em;font-feature-settings:"tnum"}
.fx-row .delta.up{color:#7CD9A4}
.fx-row .delta.dn{color:#E8A0B8}
.fx-spark{width:42px;height:18px;flex-shrink:0}

.c-alert{grid-column:span 3;grid-row:span 3;background:linear-gradient(160deg,#1E1A2C 0%,#16151E 100%)}
.al-icon{width:34px;height:34px;border-radius:10px;background:rgba(232,160,184,.12);display:flex;align-items:center;justify-content:center;margin-top:14px;position:relative;z-index:2}
.al-title{font-family:"Inter",system-ui;font-size:13px;font-weight:600;color:#F5F2FA;margin-top:12px;position:relative;z-index:2;line-height:1.35}
.al-sub{font-family:"JetBrains Mono",monospace;font-size:9.5px;color:#8A8398;letter-spacing:.08em;margin-top:6px;position:relative;z-index:2;line-height:1.5}
.al-cta{margin-top:auto;display:flex;align-items:center;gap:6px;font-family:"JetBrains Mono",monospace;font-size:10px;color:#B7A7E8;letter-spacing:.16em;text-transform:uppercase;position:relative;z-index:2;padding-top:10px;border-top:1px dashed #2A2836}
</style></head><body>
<div class="wrap">
  <!-- balance -->
  <div class="card c-balance">
    <div class="meta"><span>OPERATING ACCOUNT · USD</span><span class="dot"></span></div>
    <div class="bal-eyebrow">Total available</div>
    <div class="bal-acct"><span class="name">${escHtml(headline)}</span><span class="acct-pill">•••• 4471</span></div>
    <div class="bal-num"><span class="cur">$</span><span id="balInt">2,847,219</span><span class="cents">.04</span></div>
    <div class="bal-delta"><span class="up">↑ +$184,221.30</span><span class="since">SINCE APR 01</span></div>
    <svg class="bal-spark" id="balSpark" viewBox="0 0 540 90" preserveAspectRatio="none"></svg>
    <div class="bal-foot">
      <div><div class="k">Inflow MTD</div><div class="v pos">+$612,408</div></div>
      <div><div class="k">Outflow MTD</div><div class="v neg">−$428,187</div></div>
      <div><div class="k">Net burn / mo</div><div class="v">$98.4K</div></div>
    </div>
  </div>

  <!-- card stack -->
  <div class="card c-cards">
    <div class="meta"><span>VIRTUAL CARDS</span><span class="pill">3 ACTIVE</span></div>
    <div class="cc-stack">
      <div class="cc cc-1">
        <div class="row1"><span class="brand">MERCURY · IO</span><span class="chip"></span></div>
        <div class="pan">4471 ·· ·· 8820</div>
        <div class="row3"><span class="name">ATELIER OPS</span><span>09 / 28</span></div>
      </div>
      <div class="cc cc-2">
        <div class="row1"><span class="brand">MERCURY · IO</span><span class="chip"></span></div>
        <div class="pan">5612 ·· ·· 0193</div>
        <div class="row3"><span class="name">ENG TEAM</span><span>04 / 27</span></div>
      </div>
      <div class="cc cc-3">
        <div class="row1"><span class="brand">MERCURY · IO</span><span class="chip"></span></div>
        <div class="pan">3308 ·· ·· 7745</div>
        <div class="row3"><span class="name">VENDORS</span><span>11 / 26</span></div>
      </div>
    </div>
    <div class="cc-foot">
      <div><div class="k">Spend this cycle</div><div class="v">$48,212.66 <span style="color:#8A8398;font-size:11px;font-weight:400">/ $80K</span></div><div class="bar"><i style="width:60%"></i></div></div>
      <div><div class="k">Cards</div><div class="v">12</div></div>
      <div><div class="k">Frozen</div><div class="v" style="color:#E8A0B8">2</div></div>
    </div>
  </div>

  <!-- cashflow chart -->
  <div class="card c-flow">
    <div class="meta"><span>CASH FLOW</span><span class="pill">LIVE</span></div>
    <div class="flow-head">
      <div><div class="lbl">Net 30 days</div><div class="big">+$184,221</div></div>
      <div class="flow-tabs"><i>7D</i><i class="on">30D</i><i>90D</i><i>YTD</i></div>
    </div>
    <svg class="flow-chart" id="flowChart" viewBox="0 0 700 180" preserveAspectRatio="none"></svg>
    <div class="flow-legend">
      <span><i class="sw" style="background:#7CD9A4"></i>INFLOW</span>
      <span><i class="sw" style="background:#B7A7E8"></i>OUTFLOW</span>
      <span><i class="sw" style="background:#8A8398;height:1px;width:14px"></i>NET</span>
    </div>
  </div>

  <!-- transactions -->
  <div class="card c-tx">
    <div class="meta"><span>RECENT ACTIVITY</span><span class="pill">7 NEW</span></div>
    <div class="tx-list">
      <div class="tx"><div class="av" style="background:#7CD9A4">S</div><div class="meta" style="display:block"><span class="name">Stripe — payouts</span><span class="desc">ACH · settled</span></div><div><div class="amt in">+$48,221.30</div><div class="time">10:42</div></div></div>
      <div class="tx"><div class="av" style="background:#B7A7E8">A</div><div class="meta" style="display:block"><span class="name">AWS — eu-west-1</span><span class="desc">Card 8820 · monthly</span></div><div><div class="amt out">−$12,488.04</div><div class="time">09:18</div></div></div>
      <div class="tx"><div class="av" style="background:#E8A0B8">F</div><div class="meta" style="display:block"><span class="name">Figma · org seats</span><span class="desc">Card 0193 · annual</span></div><div><div class="amt out">−$8,640.00</div><div class="time">08:30</div></div></div>
      <div class="tx"><div class="av" style="background:#F0D38B">N</div><div class="meta" style="display:block"><span class="name">Notion AI — workspace</span><span class="desc">Card 0193 · monthly</span></div><div><div class="amt out">−$1,128.00</div><div class="time">07:55</div></div></div>
      <div class="tx"><div class="av" style="background:#7CD9A4">P</div><div class="meta" style="display:block"><span class="name">Pinwheel — wire in</span><span class="desc">FedWire · pending</span></div><div><div class="amt pend">$240,000.00</div><div class="time">PEND</div></div></div>
      <div class="tx"><div class="av" style="background:#A097B8">C</div><div class="meta" style="display:block"><span class="name">Cloudflare — pro</span><span class="desc">Card 7745 · monthly</span></div><div><div class="amt out">−$248.00</div><div class="time">07:01</div></div></div>
    </div>
  </div>

  <!-- runway -->
  <div class="card c-runway">
    <div class="meta"><span>RUNWAY</span><span class="dot idle"></span></div>
    <div class="rw-num">28<span class="u">months</span></div>
    <div class="rw-sub">at current burn · $98.4K / mo</div>
    <svg viewBox="0 0 320 70" id="rwSpark" preserveAspectRatio="none" style="width:100%;height:70px;margin-top:10px;position:relative;z-index:2"></svg>
    <div class="rw-bar">
      <div class="track"><div class="fill" id="rwFill"></div></div>
      <div class="ticks"><span>NOW</span><span>Q3</span><span>Q4</span><span>'27 Q1</span><span>'27 Q2</span></div>
    </div>
  </div>

  <!-- payroll team -->
  <div class="card c-team">
    <div class="meta"><span>PAYROLL · MAY 15</span><span class="pill">$284K</span></div>
    <div class="tm-head"><span class="big">14</span><span style="font-size:13px;color:#8A8398;font-weight:400">/ 14 ready</span><span class="delta" style="margin-left:auto">↑ +2 MoM</span></div>
    <div class="tm-list">
      <div class="tm-row"><div class="av" style="background:#B7A7E8">EM</div><span class="nm">Elena Marchetti</span><span class="role">DESIGN</span><span class="amt">$24.8K</span></div>
      <div class="tm-row"><div class="av" style="background:#7CD9A4">JT</div><span class="nm">Junichi Tanaka</span><span class="role">ENG</span><span class="amt">$28.4K</span></div>
      <div class="tm-row"><div class="av" style="background:#F0D38B">AS</div><span class="nm">Aida Santos</span><span class="role">OPS</span><span class="amt">$19.6K</span></div>
      <div class="tm-row"><div class="av" style="background:#E8A0B8">RP</div><span class="nm">Rumi Park</span><span class="role">PM</span><span class="amt">$22.0K</span></div>
      <div class="tm-row"><div class="av" style="background:#A097B8">+10</div><span class="nm" style="color:#8A8398">10 more contributors</span><span class="role"></span><span class="amt">$189.2K</span></div>
    </div>
  </div>

  <!-- API health -->
  <div class="card c-api">
    <div class="meta"><span>API · TREASURY</span><span class="pill">v2024.05</span></div>
    <div class="api-status"><span class="ring"></span><span class="lbl">Operational · 99.998%</span></div>
    <div class="api-grid">
      <div><div class="k">P50 latency</div><div class="v">42<span style="font-size:11px;color:#8A8398"> ms</span></div></div>
      <div><div class="k">Requests / 1m</div><div class="v">12,488</div></div>
      <div><div class="k">Errors</div><div class="v" style="color:#7CD9A4">0.002%</div></div>
      <div><div class="k">Pending wires</div><div class="v">3</div></div>
    </div>
    <svg class="api-spark" id="apiSpark" viewBox="0 0 320 32" preserveAspectRatio="none"></svg>
    <div class="api-foot"><span>US-EAST · IAD</span><span>↻ 3s</span></div>
  </div>

  <!-- bills -->
  <div class="card c-bills">
    <div class="meta"><span>UPCOMING BILLS</span><span class="pill">5 SCHEDULED</span></div>
    <div class="bills-list">
      <div class="bill"><div class="day"><div class="d">12</div><div class="m">MAY</div></div><div class="bd"><div class="t">Office — Atelier Tribeca</div><div class="s">Brex Capital · monthly rent</div></div><span class="amt">$28,400</span><span class="tag due">DUE 2D</span></div>
      <div class="bill"><div class="day"><div class="d">15</div><div class="m">MAY</div></div><div class="bd"><div class="t">Payroll — May cycle</div><div class="s">Gusto · 14 contributors</div></div><span class="amt">$284,012</span><span class="tag sched">AUTO</span></div>
      <div class="bill"><div class="day"><div class="d">18</div><div class="m">MAY</div></div><div class="bd"><div class="t">AWS — production</div><div class="s">Card 8820 · monthly</div></div><span class="amt">$12,488</span><span class="tag sched">AUTO</span></div>
      <div class="bill"><div class="day"><div class="d">22</div><div class="m">MAY</div></div><div class="bd"><div class="t">Vercel — enterprise</div><div class="s">Card 0193 · annual cycle</div></div><span class="amt">$36,000</span><span class="tag sched">AUTO</span></div>
    </div>
  </div>

  <!-- FX -->
  <div class="card c-fx">
    <div class="meta"><span>TREASURY FX</span><span class="dot"></span></div>
    <div class="fx-list">
      <div class="fx-row"><span class="pair">USD / EUR</span><span class="rate">0.9241</span><svg class="fx-spark" viewBox="0 0 42 18" preserveAspectRatio="none"><polyline fill="none" stroke="#7CD9A4" stroke-width="1.4" points="0,12 6,10 12,11 18,8 24,6 30,7 36,5 42,4"/></svg><span class="delta up">+0.18%</span></div>
      <div class="fx-row"><span class="pair">USD / GBP</span><span class="rate">0.7984</span><svg class="fx-spark" viewBox="0 0 42 18" preserveAspectRatio="none"><polyline fill="none" stroke="#E8A0B8" stroke-width="1.4" points="0,4 6,5 12,4 18,7 24,9 30,10 36,11 42,12"/></svg><span class="delta dn">−0.42%</span></div>
      <div class="fx-row"><span class="pair">USD / JPY</span><span class="rate">154.28</span><svg class="fx-spark" viewBox="0 0 42 18" preserveAspectRatio="none"><polyline fill="none" stroke="#7CD9A4" stroke-width="1.4" points="0,11 6,9 12,10 18,7 24,8 30,5 36,4 42,3"/></svg><span class="delta up">+0.31%</span></div>
      <div class="fx-row"><span class="pair">USD / CNY</span><span class="rate">7.2415</span><svg class="fx-spark" viewBox="0 0 42 18" preserveAspectRatio="none"><polyline fill="none" stroke="#7CD9A4" stroke-width="1.4" points="0,9 6,8 12,9 18,6 24,7 30,5 36,6 42,4"/></svg><span class="delta up">+0.09%</span></div>
    </div>
  </div>

  <!-- alert / yield -->
  <div class="card c-alert">
    <div class="meta"><span>YIELD · NOTICE</span><span class="dot idle" style="background:#B7A7E8;box-shadow:0 0 8px rgba(183,167,232,.6)"></span></div>
    <div class="al-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 13l4 4 14-14" stroke="#B7A7E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="al-title">Treasury earning <span style="color:#7CD9A4">5.42% APY</span> on $1.8M idle.</div>
    <div class="al-sub">Auto-swept to Mercury Vault overnight. Next rebalance Mon 09:00 ET.</div>
    <div class="al-cta">Review allocation →</div>
  </div>
</div>

<script>
// big balance area chart
(function(){
  const svg=document.getElementById('balSpark');const W=540,H=90;
  const N=60;const data=[];let v=58;
  for(let i=0;i<N;i++){v+=(Math.random()-.42)*4;v=Math.max(20,Math.min(78,v));data.push(v)}
  // ensure trending up
  for(let i=0;i<N;i++){data[i]=data[i]+(i/N)*8}
  const pts=data.map((d,i)=>(i/(N-1)*W)+','+(H-(d/100)*H));
  const area=document.createElementNS('http://www.w3.org/2000/svg','path');
  area.setAttribute('d','M0,'+H+' L'+pts.join(' L ')+' L'+W+','+H+' Z');
  area.setAttribute('fill','url(#balGrad)');
  const line=document.createElementNS('http://www.w3.org/2000/svg','polyline');
  line.setAttribute('points',pts.join(' '));
  line.setAttribute('fill','none');line.setAttribute('stroke','#B7A7E8');line.setAttribute('stroke-width','1.6');line.setAttribute('stroke-linecap','round');line.setAttribute('stroke-linejoin','round');
  const defs=document.createElementNS('http://www.w3.org/2000/svg','defs');
  defs.innerHTML='<linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B7A7E8" stop-opacity=".42"/><stop offset="100%" stop-color="#B7A7E8" stop-opacity="0"/></linearGradient>';
  svg.appendChild(defs);svg.appendChild(area);svg.appendChild(line);
  // dot at end
  const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');
  dot.setAttribute('cx',W);dot.setAttribute('cy',(H-(data[N-1]/100)*H));dot.setAttribute('r','3.5');dot.setAttribute('fill','#F5F2FA');
  svg.appendChild(dot);
})();

// cashflow grouped bars
(function(){
  const svg=document.getElementById('flowChart');const W=700,H=180;
  const N=24;const inn=[],out=[];
  for(let i=0;i<N;i++){inn.push(40+Math.random()*60+(i/N)*30);out.push(30+Math.random()*45+(i/N)*15)}
  const bw=(W-20)/N/2-2;const baseY=H-26;
  // grid
  for(let i=0;i<=4;i++){
    const y=10+i*(baseY-10)/4;
    const ln=document.createElementNS('http://www.w3.org/2000/svg','line');
    ln.setAttribute('x1','0');ln.setAttribute('x2',W);ln.setAttribute('y1',y);ln.setAttribute('y2',y);
    ln.setAttribute('stroke','#23212C');ln.setAttribute('stroke-dasharray','2 4');svg.appendChild(ln);
  }
  // bars
  for(let i=0;i<N;i++){
    const x=10+i*((W-20)/N);
    const hI=inn[i]*1.1,hO=out[i]*1.1;
    const r1=document.createElementNS('http://www.w3.org/2000/svg','rect');
    r1.setAttribute('x',x);r1.setAttribute('y',baseY-hI);r1.setAttribute('width',bw);r1.setAttribute('height',hI);r1.setAttribute('fill','#7CD9A4');r1.setAttribute('rx','1.5');r1.setAttribute('opacity', i===N-1 ? '1':'.85');svg.appendChild(r1);
    const r2=document.createElementNS('http://www.w3.org/2000/svg','rect');
    r2.setAttribute('x',x+bw+2);r2.setAttribute('y',baseY-hO);r2.setAttribute('width',bw);r2.setAttribute('height',hO);r2.setAttribute('fill','#B7A7E8');r2.setAttribute('rx','1.5');r2.setAttribute('opacity','.78');svg.appendChild(r2);
  }
  // net line
  const netPts=[];
  for(let i=0;i<N;i++){const x=10+i*((W-20)/N)+bw;const net=baseY-(inn[i]-out[i])*1.4-30;netPts.push(x+','+net)}
  const nl=document.createElementNS('http://www.w3.org/2000/svg','polyline');
  nl.setAttribute('points',netPts.join(' '));nl.setAttribute('fill','none');nl.setAttribute('stroke','#F5F2FA');nl.setAttribute('stroke-width','1.5');nl.setAttribute('stroke-dasharray','3 3');svg.appendChild(nl);
  // x labels
  ['WEEK 18','WEEK 19','WEEK 20','WEEK 21'].forEach((t,i)=>{
    const tx=document.createElementNS('http://www.w3.org/2000/svg','text');
    tx.setAttribute('x',12+i*(W/4));tx.setAttribute('y',H-6);tx.setAttribute('fill','#5C5670');tx.setAttribute('font-family','JetBrains Mono,monospace');tx.setAttribute('font-size','9');tx.setAttribute('letter-spacing','1.5');tx.textContent=t;svg.appendChild(tx);
  });
})();

// runway spark
(function(){
  const svg=document.getElementById('rwSpark');const W=320,H=70;
  const N=24,data=[];let v=88;
  for(let i=0;i<N;i++){v-=Math.random()*2.6+1.4;data.push(Math.max(8,v))}
  const pts=data.map((d,i)=>(i/(N-1)*W)+','+(H-(d/100)*H));
  const area=document.createElementNS('http://www.w3.org/2000/svg','path');
  area.setAttribute('d','M0,'+H+' L'+pts.join(' L ')+' L'+W+','+H+' Z');
  area.setAttribute('fill','url(#rwG)');
  const defs=document.createElementNS('http://www.w3.org/2000/svg','defs');
  defs.innerHTML='<linearGradient id="rwG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7CD9A4" stop-opacity=".32"/><stop offset="100%" stop-color="#7CD9A4" stop-opacity="0"/></linearGradient>';
  svg.appendChild(defs);svg.appendChild(area);
  const ln=document.createElementNS('http://www.w3.org/2000/svg','polyline');
  ln.setAttribute('points',pts.join(' '));ln.setAttribute('fill','none');ln.setAttribute('stroke','#7CD9A4');ln.setAttribute('stroke-width','1.4');svg.appendChild(ln);
})();

// api spark live
(function(){
  const svg=document.getElementById('apiSpark');const W=320,H=32,N=40;const data=[];let v=18;
  for(let i=0;i<N;i++){v+=(Math.random()-.5)*5;v=Math.max(8,Math.min(28,v));data.push(v)}
  function render(){
    while(svg.firstChild)svg.removeChild(svg.firstChild);
    const pts=data.map((d,i)=>(i/(N-1)*W)+','+(H-d));
    const ln=document.createElementNS('http://www.w3.org/2000/svg','polyline');
    ln.setAttribute('points',pts.join(' '));ln.setAttribute('fill','none');ln.setAttribute('stroke','#B7A7E8');ln.setAttribute('stroke-width','1.4');svg.appendChild(ln);
    // dots
    for(let i=0;i<N;i+=8){
      const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx',i/(N-1)*W);c.setAttribute('cy',H-data[i]);c.setAttribute('r','1.5');c.setAttribute('fill','#B7A7E8');svg.appendChild(c);
    }
  }
  render();
  setInterval(()=>{data.push(Math.max(8,Math.min(28,data[data.length-1]+(Math.random()-.5)*5)));data.shift();render();},1400);
})();

// runway fill animation
(function(){const f=document.getElementById('rwFill');let w=0;const target=64;const t=setInterval(()=>{w+=2;if(w>=target){w=target;clearInterval(t)}f.style.width=w+'%'},20)})();

// balance counter
(function(){const el=document.getElementById('balInt');if(!el)return;let v=2847219;setInterval(()=>{v+=Math.floor((Math.random()-.3)*1200);el.textContent=v.toLocaleString('en-US')},2200)})();
</script>
</body></html>`;
}



// ====== Nothing Mobile — Now Playing ceiling card ======
// 移动端 Nothing OS 风格 now-playing 视觉稿（含 polar spectrum）
function nothingMobileDoc(p){
  const h = 800;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Space+Grotesk:wght@400;500;600;700&family=VT323&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#000;--surface:#0a0a0a;--line:#1a1a1a;--line-2:#262626;
  --ink:#fff;--mute:#7a7a7a;--dim:#3a3a3a;--red:#ff2d2d;
  --mono:'Space Mono','SF Mono',ui-monospace,monospace;
  --sans:'Space Grotesk',ui-sans-serif,system-ui;
}
html,body{background:var(--bg);color:var(--ink);font-family:var(--sans);height:${h}px;overflow:hidden}
body{
  background:
    radial-gradient(circle at 20% 10%, rgba(255,255,255,.025), transparent 40%),
    radial-gradient(circle at 80% 90%, rgba(255,45,45,.04), transparent 40%),
    var(--bg);
}
.stage{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.stage::before, .stage::after{content:"";position:absolute;top:50%;width:80px;height:1px;background:var(--line-2)}
.stage::before{left:calc(50% - 220px)}
.stage::after{right:calc(50% - 220px)}
.phone{
  width:300px;height:660px;border-radius:38px;background:#000;
  border:1.5px solid #1a1a1a;
  box-shadow:0 0 0 5px #050505,0 0 0 6px #2a2a2a,0 30px 60px -10px rgba(0,0,0,.9),inset 0 0 0 1px rgba(255,255,255,.04);
  position:relative;overflow:hidden;padding:12px;
}
.island{position:absolute;top:12px;left:50%;transform:translateX(-50%);width:96px;height:28px;border-radius:16px;background:#000;border:1px solid #0f0f0f;z-index:10}
.island::after{content:"";position:absolute;right:9px;top:50%;transform:translateY(-50%);width:8px;height:8px;border-radius:50%;background:#0a0a0a;box-shadow:inset 0 0 0 1px #1a1a1a}
.screen{width:100%;height:100%;border-radius:30px;background:#000;overflow:hidden;position:relative;display:flex;flex-direction:column}
.stat{height:46px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 20px 6px;font-family:var(--mono);font-size:11px;color:#fff;letter-spacing:.06em}
.stat .icons{display:flex;gap:4px;align-items:center}
.ic{display:inline-block;width:14px;height:10px;position:relative}
.ic.sig{display:flex;gap:1.5px;align-items:flex-end}
.ic.sig i{width:2px;background:#fff}
.ic.sig i:nth-child(1){height:3px}.ic.sig i:nth-child(2){height:5px}
.ic.sig i:nth-child(3){height:7px}.ic.sig i:nth-child(4){height:9px;opacity:.4}
.ic.bat{width:22px;height:11px;border:1px solid #fff;border-radius:2px;position:relative}
.ic.bat::after{content:"";position:absolute;right:-3px;top:3px;width:1.5px;height:5px;background:#fff;border-radius:0 1px 1px 0}
.ic.bat i{display:block;height:7px;background:#fff;margin:1px;width:14px}
.nav{padding:10px 20px 12px;display:flex;justify-content:space-between;align-items:center}
.nav-l{font-family:var(--mono);font-size:10px;letter-spacing:.24em;color:var(--mute);text-transform:uppercase}
.nav-r{display:flex;gap:6px}
.icon-btn{width:30px;height:30px;border:1px solid #1f1f1f;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;background:transparent}
.icon-btn svg{width:13px;height:13px;stroke:#fff;fill:none;stroke-width:1.6}
.eyebrow{padding:8px 20px 0;display:flex;align-items:center;gap:8px;color:var(--mute)}
.eyebrow .red-dot{width:6px;height:6px;border-radius:50%;background:var(--red);animation:pulseM 1.6s ease-in-out infinite}
.eyebrow span{font-family:var(--mono);font-size:9.5px;letter-spacing:.28em;text-transform:uppercase}
@keyframes pulseM{0%,100%{box-shadow:0 0 0 0 rgba(255,45,45,.55)}50%{box-shadow:0 0 0 6px rgba(255,45,45,0)}}
.art{margin:10px 18px 0;height:240px;border:1px solid #1a1a1a;background:#000;position:relative;overflow:hidden;border-radius:4px}
.art-bg{position:absolute;inset:0;background:radial-gradient(circle at 30% 30%, rgba(255,255,255,.08), transparent 50%),radial-gradient(circle at 70% 80%, rgba(255,45,45,.18), transparent 60%),#050505}
.art-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:14px 14px;mask-image:radial-gradient(circle at center,#000 30%,transparent 75%);-webkit-mask-image:radial-gradient(circle at center,#000 30%,transparent 75%)}
.art-stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:2}
.art-svg{width:218px;height:218px;overflow:visible;filter:drop-shadow(0 0 18px rgba(255,255,255,.06))}
.art-orbit{fill:none;stroke:rgba(255,255,255,.18);stroke-width:1;stroke-dasharray:3 4}
.art-ring-solid{fill:none;stroke:rgba(255,255,255,.5);stroke-width:1}
.art-ring-soft{fill:none;stroke:rgba(255,255,255,.10);stroke-width:1}
.art-bar{stroke:#f4f4f4;stroke-width:1.4;stroke-linecap:butt}
.art-core-dot{fill:#ff3b3b;filter:drop-shadow(0 0 6px rgba(255,59,59,.65))}
@keyframes spinSlowM{to{transform:rotate(360deg)}}
.art-orbit-rot{transform-origin:center;animation:spinSlowM 80s linear infinite}
.art-overlay{position:absolute;left:14px;bottom:12px;right:14px;display:flex;justify-content:space-between;align-items:flex-end;z-index:3}
.art-tag{font-family:var(--mono);font-size:9px;letter-spacing:.24em;color:var(--mute);text-transform:uppercase}
.art-q{width:18px;height:18px;border:1px solid rgba(255,255,255,.3);border-radius:3px;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;color:#fff}
.meta{padding:16px 20px 0;display:flex;flex-direction:column;gap:4px}
.track-title{font-family:var(--sans);font-size:22px;font-weight:700;letter-spacing:-.02em;line-height:1.05}
.track-artist{font-family:var(--mono);font-size:11px;color:var(--mute);letter-spacing:.06em;margin-top:4px}
.prog{padding:12px 20px 0;display:flex;flex-direction:column;gap:6px}
.prog-segs{display:flex;gap:2px;height:6px}
.prog-segs i{flex:1;background:var(--dim);border-radius:1px;overflow:hidden;position:relative}
.prog-segs i.done{background:#fff}
.prog-segs i.now{background:var(--dim)}
.prog-segs i.now::after{content:"";position:absolute;left:0;top:0;height:100%;width:60%;background:#fff;animation:progFillM 8s linear infinite}
@keyframes progFillM{0%{width:0}100%{width:100%}}
.prog-time{display:flex;justify-content:space-between;font-family:var(--mono);font-size:10px;color:var(--mute);letter-spacing:.08em;margin-top:2px}
.ctrl{padding:16px 20px 0;display:flex;align-items:center;justify-content:space-between}
.ctrl-btn{width:44px;height:44px;border-radius:50%;border:1px solid #1f1f1f;background:#0a0a0a;display:flex;align-items:center;justify-content:center;color:#fff}
.ctrl-play{width:60px;height:60px;border-radius:50%;background:#fff;color:#000;border:none;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 1px rgba(255,255,255,.1),0 0 24px rgba(255,255,255,.16)}
.ctrl-btn svg, .ctrl-play svg{width:16px;height:16px;fill:currentColor}
.ctrl-play svg{width:20px;height:20px}
.dev{margin:16px 20px 0;border:1px solid #1a1a1a;border-radius:6px;padding:9px 12px;display:flex;align-items:center;gap:10px}
.dev-pill{font-family:var(--mono);font-size:9px;letter-spacing:.22em;color:var(--mute);text-transform:uppercase}
.dev-line{flex:1;height:1px;background:repeating-linear-gradient(90deg,#2a2a2a 0 4px,transparent 4px 8px)}
.dev-name{font-family:var(--mono);font-size:11px;color:#fff;letter-spacing:.04em;font-weight:700}
.home-bar{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);width:110px;height:4px;background:#fff;border-radius:2px;opacity:.85}
.crosshair{position:absolute;width:14px;height:14px;border-color:var(--line-2);border-style:solid;border-width:0;z-index:2;pointer-events:none}
.crosshair.tl{top:18px;left:18px;border-top-width:1px;border-left-width:1px}
.crosshair.tr{top:18px;right:18px;border-top-width:1px;border-right-width:1px}
.crosshair.bl{bottom:18px;left:18px;border-bottom-width:1px;border-left-width:1px}
.crosshair.br{bottom:18px;right:18px;border-bottom-width:1px;border-right-width:1px}
.hud{position:absolute;font-family:var(--mono);font-size:9px;letter-spacing:.22em;color:var(--mute);text-transform:uppercase;z-index:3;display:flex;align-items:center;gap:6px}
.hud::before{content:"";width:5px;height:5px;border:1px solid var(--mute)}
.hud.red::before{background:var(--red);border-color:var(--red);animation:pulseM 1.6s ease-in-out infinite}
.hud.t1{top:28px;left:42px}.hud.t2{top:28px;right:42px}
.hud.t3{bottom:28px;left:42px}.hud.t4{bottom:28px;right:42px}
</style>
</head><body>
<div class="crosshair tl"></div><div class="crosshair tr"></div>
<div class="crosshair bl"></div><div class="crosshair br"></div>
<div class="hud t1 red">REC · 01</div>
<div class="hud t2">NTH · GP-01 / R02</div>
<div class="hud t3">LIVE · FEED</div>
<div class="hud t4">48.000 KHZ · 24 BIT</div>
<div class="stage"><div class="phone">
  <div class="island"></div>
  <div class="screen">
    <div class="stat">
      <span id="phoneClock">16:34</span>
      <div class="icons">
        <span class="ic sig"><i></i><i></i><i></i><i></i></span>
        <span style="font-size:10px">5G</span>
        <span class="ic bat"><i></i></span>
      </div>
    </div>
    <div class="nav">
      <span class="nav-l">Now Playing · Library</span>
      <div class="nav-r">
        <button class="icon-btn"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l-7 7 7 7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <button class="icon-btn"><svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5" fill="#fff" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="#fff" stroke="none"/><circle cx="12" cy="19" r="1.5" fill="#fff" stroke="none"/></svg></button>
      </div>
    </div>
    <div class="eyebrow"><span class="red-dot"></span><span>Live · Signal Locked</span></div>
    <div class="art">
      <div class="art-bg"></div>
      <div class="art-grid"></div>
      <div class="art-stage">
        <svg class="art-svg" viewBox="-150 -150 300 300">
          <circle class="art-ring-soft" r="138"></circle>
          <g class="art-orbit-rot"><circle class="art-orbit" r="92"></circle></g>
          <circle class="art-ring-solid" r="38"></circle>
          <g id="polarBars"></g>
          <g><rect class="art-core-dot" x="-7" y="-7" width="14" height="14" rx="1.5"></rect></g>
        </svg>
      </div>
      <div class="art-overlay">
        <span class="art-tag">CH 03 · LOSSLESS · 24/96</span>
        <span class="art-q">HQ</span>
      </div>
    </div>
    <div class="meta">
      <div class="track-title">Phase Drift, Pt. II</div>
      <div class="track-artist">Karo Su · Resonance EP · 2026</div>
    </div>
    <div class="prog">
      <div class="prog-segs">
        <i class="done"></i><i class="done"></i><i class="done"></i><i class="now"></i><i></i><i></i><i></i><i></i>
      </div>
      <div class="prog-time"><span id="tNow">02:14</span><span id="tEnd">−03:46</span></div>
    </div>
    <div class="ctrl">
      <button class="ctrl-btn"><svg viewBox="0 0 24 24"><path d="M4 4l16 8-16 8z" transform="scale(-1,1) translate(-24,0)"/></svg></button>
      <button class="ctrl-btn"><svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg></button>
      <button class="ctrl-play"><svg viewBox="0 0 24 24"><path d="M5 4l16 8-16 8z"/></svg></button>
      <button class="ctrl-btn"><svg viewBox="0 0 24 24"><path d="M4 4l16 8-16 8z"/></svg></button>
      <button class="ctrl-btn"><svg viewBox="0 0 24 24" stroke="#fff" stroke-width="1.6" fill="none"><path d="M9 17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11l5 5v5a2 2 0 0 1-2 2h-2"/><circle cx="12" cy="14" r="3"/></svg></button>
    </div>
    <div class="dev">
      <span class="dev-pill">Output</span>
      <span class="dev-line"></span>
      <span class="dev-name">EAR · 2</span>
    </div>
  </div>
  <div class="home-bar"></div>
</div></div>
<script>
function pad(n){return n<10?'0'+n:''+n}
function tickClock(){var d=new Date();document.getElementById('phoneClock').textContent=pad(d.getHours())+':'+pad(d.getMinutes())}
tickClock();setInterval(tickClock,30*1000);
var elapsed=134,total=360;
function fmt(s){var m=(s/60)|0,r=s%60;return pad(m)+':'+pad(r)}
setInterval(function(){elapsed=(elapsed+1)%total;document.getElementById('tNow').textContent=fmt(elapsed);document.getElementById('tEnd').textContent='−'+fmt(total-elapsed)},1000);
(function(){
  var g=document.getElementById('polarBars');if(!g)return;
  var N=72,R0=38,AMP_MAX=60;
  var SVG_NS='http://www.w3.org/2000/svg';
  function makeCircularNoise(seedCount){
    var grad=new Array(seedCount);
    for(var i=0;i<seedCount;i++)grad[i]=Math.random()*2-1;
    return function(u,shift){
      var x=((u+shift)%1+1)%1*seedCount;
      var i0=Math.floor(x),i1=(i0+1)%seedCount,f=x-i0;
      var s=f*f*(3-2*f);
      return grad[i0]*(1-s)+grad[i1]*s;
    };
  }
  var noiseA=makeCircularNoise(8);
  var noiseB=makeCircularNoise(20);
  var noiseC=makeCircularNoise(48);
  var bars=[];
  for(var i=0;i<N;i++){
    var a=(i/N)*Math.PI*2-Math.PI/2;
    var cs=Math.cos(a),sn=Math.sin(a);
    var line=document.createElementNS(SVG_NS,'line');
    line.setAttribute('x1',(cs*R0).toFixed(2));
    line.setAttribute('y1',(sn*R0).toFixed(2));
    line.setAttribute('x2',(cs*R0).toFixed(2));
    line.setAttribute('y2',(sn*R0).toFixed(2));
    line.setAttribute('class','art-bar');
    line.setAttribute('stroke-width','1.5');
    g.appendChild(line);
    bars.push({el:line,cos:cs,sin:sn,cur:0.3,spike:0});
  }
  var nextSpike=0;
  function maybeSpike(t){
    if(t<nextSpike)return;
    nextSpike=t+0.12+Math.random()*0.45;
    var center=(Math.random()*N)|0;
    var width=2+((Math.random()*4)|0);
    var power=0.45+Math.random()*0.65;
    for(var k=-width;k<=width;k++){
      var idx=((center+k)%N+N)%N;
      var fall=1-Math.abs(k)/(width+1);
      bars[idx].spike=Math.max(bars[idx].spike,power*fall);
    }
  }
  var t=0,last=performance.now();
  function tick(now){
    var dt=Math.min(0.05,(now-last)/1000);last=now;t+=dt;
    var dA=t*0.04,dB=t*0.10,dC=t*0.22;
    var breath=0.78+0.22*Math.sin(t*0.6)+0.10*Math.sin(t*1.7+1.1);
    maybeSpike(t);
    for(var i=0;i<N;i++){
      var u=i/N;
      var v=noiseA(u,dA)*0.55+noiseB(u,dB)*0.30+noiseC(u,dC)*0.15;
      v=0.55+v*0.45;
      v=Math.max(0.12,Math.min(1.05,v))*breath;
      var b=bars[i];
      if(b.spike>0){v+=b.spike;b.spike*=Math.pow(0.0008,dt);if(b.spike<0.01)b.spike=0;}
      var k=v>b.cur?0.35:0.10;
      b.cur+=(v-b.cur)*k;
      var r=R0+Math.max(0,b.cur)*AMP_MAX;
      b.el.setAttribute('x2',(b.cos*r).toFixed(2));
      b.el.setAttribute('y2',(b.sin*r).toFixed(2));
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
<\/script>
</body></html>`;
}


// ====== Retro ASCII CRT Dashboard ======
// 复古终端仪表盘：磷光绿 CRT + 扫描线 + ASCII 图表 + typewriter
function retroAsciiDoc(p){
  const headline = escHtml(p.headline || 'RETRO ASCII');
  const sub = escHtml(p.sub || 'Terminal dashboard · CP437 · P1 phosphor');
  return `<!doctype html><html><head><meta charset="utf-8"/><style>
:root{
  --bg:#05090A;--ink:#B8FFB8;--hi:#00FF6A;--amber:#FFB000;--red:#FF3B3B;
  --dim:#2A4A32;--line:#0F1F14;--scan:rgba(0,255,106,.05);
  --glow:0 0 2px rgba(0,255,106,.55), 0 0 8px rgba(0,255,106,.22);
  --mono:'JetBrains Mono','IBM Plex Mono','Fira Code','Space Mono',ui-monospace,monospace;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;height:720px;overflow:hidden;background:var(--bg);color:var(--ink);font-family:var(--mono);font-size:12px;line-height:1.45;text-shadow:var(--glow);letter-spacing:.02em}
body{background:
  radial-gradient(ellipse at center, rgba(0,255,106,.06), transparent 60%),
  radial-gradient(ellipse at 50% 120%, rgba(0,40,15,.6), transparent 65%),
  var(--bg)}
body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:9;background:repeating-linear-gradient(to bottom, transparent 0, transparent 2px, var(--scan) 2px, var(--scan) 3px);mix-blend-mode:screen}
body::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:10;background:radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.55) 100%)}
.frame{position:relative;z-index:2;padding:14px 18px;display:grid;grid-template-columns:1fr 1.35fr 1fr;grid-template-rows:auto 1fr auto;gap:10px;height:720px}
.topbar{grid-column:1/-1;display:flex;align-items:center;gap:14px;border:1px solid var(--dim);padding:6px 12px;background:linear-gradient(180deg,rgba(0,255,106,.04),transparent);font-size:11px}
.brand{color:var(--hi);font-weight:700;letter-spacing:.2em}
.brand small{color:var(--dim);font-weight:400;letter-spacing:.28em;margin-left:6px}
.sp{flex:1}
.chip{border:1px solid var(--dim);padding:2px 7px;letter-spacing:.2em;font-size:10px}
.chip b{color:var(--amber)}
.chip.red b{color:var(--red)}
.dot{display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--hi);margin-right:5px;box-shadow:0 0 5px var(--hi);animation:bk 1.2s infinite}
@keyframes bk{50%{opacity:.25}}
.col{display:grid;gap:10px;min-height:0}
.col-l{grid-template-rows:1fr auto auto}
.col-c{grid-template-rows:auto 1fr auto}
.col-r{grid-template-rows:auto 1fr auto}
.panel{position:relative;border:1px solid var(--dim);background:linear-gradient(180deg,rgba(0,255,106,.03),transparent 50%),rgba(5,10,7,.6);padding:8px 12px 10px;overflow:hidden;min-height:0;display:flex;flex-direction:column}
.panel::before,.panel::after{content:'';position:absolute;width:7px;height:7px;border:1px solid var(--hi);opacity:.75}
.panel::before{top:-1px;left:-1px;border-right:none;border-bottom:none}
.panel::after{bottom:-1px;right:-1px;border-left:none;border-top:none}
.ttl{display:flex;align-items:center;gap:8px;color:var(--hi);font-size:10px;letter-spacing:.28em;border-bottom:1px dashed var(--dim);padding-bottom:5px;margin-bottom:6px}
.ttl .id{color:var(--dim);margin-left:auto;letter-spacing:.2em}
.body{flex:1;min-height:0;overflow:hidden;position:relative}
/* boot log */
#bootLog{font-size:11px;white-space:pre-wrap;line-height:1.5}
#bootLog .ok{color:var(--hi)}
#bootLog .warn{color:var(--amber)}
#bootLog .err{color:var(--red)}
#bootLog .dim{color:var(--dim)}
.cur{display:inline-block;width:7px;height:12px;background:var(--hi);vertical-align:middle;margin-left:2px;animation:bk 1s steps(2) infinite;box-shadow:0 0 5px var(--hi)}
/* meters */
.meters{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.meter .k{font-size:9px;color:var(--dim);letter-spacing:.25em}
.meter .v{color:var(--amber);font-size:15px;font-weight:700}
.meter .bar{font-size:13px;color:var(--hi);line-height:1;margin-top:2px}
/* tree */
#tree{font-size:11px;white-space:pre;line-height:1.45}
#tree .dir{color:var(--hi)}
#tree .sel{background:rgba(0,255,106,.15);color:var(--hi)}
#tree .ext{color:var(--dim)}
/* hero */
.hero{border:1px solid var(--dim);padding:8px 12px 10px;background:radial-gradient(ellipse at center,rgba(0,255,106,.08),transparent 70%),rgba(5,10,7,.5);position:relative;overflow:hidden}
.hero pre{margin:0;color:var(--hi);font-size:10px;line-height:1.05;white-space:pre;text-shadow:0 0 4px rgba(0,255,106,.55), 0 0 14px rgba(0,255,106,.3)}
.hero .tag{position:absolute;top:6px;right:12px;font-size:9px;color:var(--dim);letter-spacing:.28em}
.hero .sub{color:var(--ink);font-size:10px;letter-spacing:.22em;margin-top:5px;border-top:1px dashed var(--dim);padding-top:5px;display:flex;gap:12px;flex-wrap:wrap}
.hero .sub b{color:var(--amber)}
/* canvas panel */
#cStack{position:relative}
#cStack canvas{position:absolute;inset:0;width:100%;height:100%}
#cNoise{opacity:.22;mix-blend-mode:screen}
.leg{position:absolute;left:10px;bottom:6px;font-size:9px;color:var(--dim);letter-spacing:.24em}
.leg b{color:var(--hi)}
/* ticker */
.tick{border:1px solid var(--dim);padding:5px 0;overflow:hidden;white-space:nowrap;background:linear-gradient(180deg,rgba(0,255,106,.04),transparent)}
.tick-in{display:inline-block;padding-left:100%;animation:tk 36s linear infinite;font-size:11px;letter-spacing:.2em}
.tick-in .s{color:var(--dim);margin:0 12px}
.tick-in b{color:var(--amber)}
.tick-in i{color:var(--red);font-style:normal}
@keyframes tk{from{transform:translateX(0)}to{transform:translateX(-100%)}}
/* clock */
.clk{color:var(--hi);font-size:34px;letter-spacing:.05em;text-align:center;line-height:1;padding:8px 0 2px}
.clk-sub{text-align:center;color:var(--dim);font-size:10px;letter-spacing:.28em}
.clk-g{margin-top:8px;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center}
.clk-g div{border:1px dashed var(--dim);padding:4px 3px}
.clk-g .k{color:var(--dim);font-size:9px;letter-spacing:.22em}
.clk-g .v{color:var(--amber);font-size:12px;margin-top:1px}
/* chart */
#bars{font-size:11px;line-height:1.4;white-space:pre}
#bars .r b{display:inline-block;width:64px;color:var(--dim);letter-spacing:.14em}
#bars .r em{font-style:normal;color:var(--hi)}
#bars .r i{font-style:normal;color:var(--amber);margin-left:5px}
/* events */
#ev{font-size:10px;line-height:1.55}
#ev .t{color:var(--dim);margin-right:5px}
#ev .i{color:var(--hi)}
#ev .w{color:var(--amber)}
#ev .e{color:var(--red)}
/* cmd */
.cmd{grid-column:1/-1;display:flex;align-items:center;gap:8px;border:1px solid var(--dim);padding:6px 12px;background:linear-gradient(180deg,rgba(0,255,106,.04),transparent);font-size:11px}
.cmd .p{color:var(--amber)}
.cmd .pt{color:var(--hi);letter-spacing:.08em}
.cmd .c{color:var(--ink);letter-spacing:.04em}
.cmd .h{margin-left:auto;color:var(--dim);letter-spacing:.22em;font-size:10px}
</style></head><body>
<div class="frame">
  <div class="topbar">
    <div class="brand">${headline} <small>// ${sub}</small></div>
    <div class="sp"></div>
    <div class="chip"><span class="dot"></span>LINK <b>STABLE</b></div>
    <div class="chip">NODE <b>KARO-01</b></div>
    <div class="chip">UPTIME <b id="up">00:00:00</b></div>
    <div class="chip red">ALERT <b id="al">0</b></div>
  </div>

  <div class="col col-l">
    <div class="panel"><div class="ttl">▰ BOOT SEQUENCE<span class="id">/var/log/boot.0</span></div><div class="body"><div id="bootLog"></div></div></div>
    <div class="panel"><div class="ttl">▰ METERS<span class="id">live</span></div><div class="body meters">
      <div class="meter"><div class="k">CPU</div><div class="v" id="mCpuV">31%</div><div class="bar" id="mCpuB"></div></div>
      <div class="meter"><div class="k">MEM</div><div class="v" id="mMemV">58%</div><div class="bar" id="mMemB"></div></div>
      <div class="meter"><div class="k">NET</div><div class="v" id="mNetV">128K</div><div class="bar" id="mNetB"></div></div>
      <div class="meter"><div class="k">DISK</div><div class="v" id="mDskV">42%</div><div class="bar" id="mDskB"></div></div>
    </div></div>
    <div class="panel"><div class="ttl">▰ FILE TREE<span class="id">~/retro</span></div><div class="body"><div id="tree"></div></div></div>
  </div>

  <div class="col col-c">
    <div class="hero">
      <div class="tag">ASCII · 01</div>
<pre id="heroArt">   ____  ______ ______ ____   ____
  / __ \\/ ____//_  __// __ \\ / __ \\
 / /_/ / __/    / /  / /_/ // / / /
/ _, _/ /___   / /  / _, _// /_/ /
/_/ |_/_____/  /_/  /_/ |_| \\____/
             A · S · C · I · I</pre>
      <div class="sub">
        <span>MODE <b>terminal</b></span>
        <span>PHOSPHOR <b>P1</b></span>
        <span>SCAN <b>60Hz</b></span>
        <span>GLYPH <b>CP437</b></span>
      </div>
    </div>
    <div class="panel" id="cStack"><div class="ttl">▰ SIGNAL WAVE<span class="id">ch-0 · noise</span></div><div class="body" style="position:relative">
      <canvas id="cWave"></canvas>
      <canvas id="cNoise"></canvas>
      <div class="leg">CH0 <b>38.2</b>Hz · RMS <b>0.71</b> · SNR <b>92dB</b></div>
    </div></div>
    <div class="tick"><div class="tick-in">
      <b>SYSTEM</b> OK <span class="s">//</span>
      HANDSHAKE WITH <b>GATEWAY-7</b> <span class="s">//</span>
      CACHE HIT RATIO <b>94.2%</b> <span class="s">//</span>
      <i>WARN</i> TEMP RISING ON NODE-3 <span class="s">//</span>
      GLYPH SYNC ARMED <span class="s">//</span>
      JOB <b>#A04F</b> COMPLETE IN 812MS <span class="s">//</span>
      MESH CLEAN <span class="s">//</span>
      RADIO LINK <b>STABLE</b>
    </div></div>
  </div>

  <div class="col col-r">
    <div class="panel"><div class="ttl">▰ CLOCK<span class="id">local</span></div><div class="body">
      <div class="clk" id="clk">00:00:00</div>
      <div class="clk-sub" id="clkSub">MON · MAY 11 · 2026</div>
      <div class="clk-g">
        <div><div class="k">THREADS</div><div class="v" id="thr">141</div></div>
        <div><div class="k">QPS</div><div class="v" id="qps">1240</div></div>
        <div><div class="k">LATENCY</div><div class="v" id="lat">24ms</div></div>
      </div>
    </div></div>
    <div class="panel"><div class="ttl">▰ ASCII CHART<span class="id">top procs</span></div><div class="body"><div id="bars"></div></div></div>
    <div class="panel"><div class="ttl">▰ EVENTS<span class="id">tail -f</span></div><div class="body"><div id="ev"></div></div></div>
  </div>

  <div class="cmd">
    <span class="p">karo@retro</span><span>:</span><span class="pt">~/projects</span><span>$</span>
    <span class="c" id="cmdL"></span><span class="cur"></span>
    <span class="h">TAB · autocomplete</span>
  </div>
</div>
<script>
(function(){
  function pad(n){return String(n).padStart(2,'0')}
  // boot
  var lines=[['dim','[0.000] Loading retro-ascii kernel v0.9.1 ...'],['ok','[0.012] CPU: 8 cores online · P1 phosphor'],['ok','[0.048] MEM: 32768 MiB · scrub clean'],['ok','[0.121] Mount /dev/sda1 -> /            [ OK ]'],['dim','[0.318] Probing glyph link ...'],['warn','[0.412] glyph link: weak, retry (1/3)'],['ok','[0.622] glyph link: locked @ 38.2 Hz'],['ok','[0.812] systemd-ascii.service       [ OK ]'],['ok','[0.914] ansi-ticker.service         [ OK ]'],['ok','[1.024] crt-phosphor.service        [ OK ]'],['warn','[1.124] clock drift +2ms, fixed'],['ok','[1.204] Skills: retro, glyph, crt, ansi'],['err','[1.311] WARN: capslock fused'],['ok','[1.402] Welcome back, karo.'],['dim','[1.403] type \`help\` to begin.']];
  var bl=document.getElementById('bootLog'),bi=0,bj=0;
  function bt(){if(bi>=lines.length)return;var pair=lines[bi],cls=pair[0],tx=pair[1];var ln=bl.querySelector('div[data-i="'+bi+'"]');if(!ln){ln=document.createElement('div');ln.className=cls;ln.setAttribute('data-i',bi);bl.appendChild(ln)}ln.textContent=tx.slice(0,bj);bj++;if(bj>tx.length){bi++;bj=0;while(bl.children.length>11)bl.removeChild(bl.firstChild);setTimeout(bt,110+Math.random()*140)}else{setTimeout(bt,8+Math.random()*20)}}bt();
  // meters
  function bar(p){var W=12,on=Math.round(W*p/100);return '▓'.repeat(on)+'░'.repeat(W-on)}
  var M=[{id:'mCpu',b:30,a:25,u:'%'},{id:'mMem',b:55,a:10,u:'%'},{id:'mNet',b:0,a:0,u:'K',n:1},{id:'mDsk',b:42,a:3,u:'%'}];
  function upM(){M.forEach(function(m){var p,v;if(m.n){v=Math.round(80+Math.random()*260);p=Math.min(100,v/4);document.getElementById(m.id+'V').textContent=v+'K'}else{p=Math.max(2,Math.min(99,m.b+(Math.random()-.5)*2*m.a));document.getElementById(m.id+'V').textContent=Math.round(p)+m.u}document.getElementById(m.id+'B').textContent=bar(p)})}
  upM();setInterval(upM,900);
  // tree
  var tx='~/retro-ascii\\n├── src/\\n│  ├── boot.asm        ·  1.2K\\n│  ├── crt.c           ·  8.4K\\n│  └── ansi.ts         ·  4.7K\\n├── skills/\\n│  ├── glyph-link.md\\n│  └── scanline.md\\n├── README.md          ·  3.3K\\n└── Makefile           ·  0.4K';
  var te=document.getElementById('tree');
  te.innerHTML=tx.split('\\n').map(function(ln,i){var c='';if(/\\/$/.test(ln.trim())||/^~\\//.test(ln))c='dir';if(i===5)c+=' sel';return '<div class="'+c+'">'+ln.replace(/·.*/,function(s){return '<span class="ext">'+s+'</span>'})+'</div>'}).join('');
  // wave
  var wv=document.getElementById('cWave'),wc=wv.getContext('2d');
  function sw(){var d=window.devicePixelRatio||1;wv.width=wv.clientWidth*d;wv.height=wv.clientHeight*d;wc.setTransform(d,0,0,d,0,0)}
  var t0=0;
  function dw(){var W=wv.clientWidth,H=wv.clientHeight;wc.clearRect(0,0,W,H);wc.strokeStyle='rgba(0,255,106,.08)';wc.lineWidth=1;for(var x=0;x<W;x+=20){wc.beginPath();wc.moveTo(x,0);wc.lineTo(x,H);wc.stroke()}for(var y=0;y<H;y+=16){wc.beginPath();wc.moveTo(0,y);wc.lineTo(W,y);wc.stroke()}wc.strokeStyle='rgba(0,255,106,.18)';wc.beginPath();wc.moveTo(0,H/2);wc.lineTo(W,H/2);wc.stroke();wc.strokeStyle='#00ff6a';wc.lineWidth=1.5;wc.shadowColor='#00ff6a';wc.shadowBlur=7;wc.beginPath();for(var i=0;i<=W;i++){var tt=(i+t0)*.04;var yy=H/2+Math.sin(tt)*H*.18+Math.sin(tt*2.7+.8)*H*.08+Math.sin(tt*.6+1.3)*H*.12+(Math.random()-.5)*2;if(i===0)wc.moveTo(i,yy);else wc.lineTo(i,yy)}wc.stroke();wc.shadowBlur=0;wc.strokeStyle='rgba(255,176,0,.45)';wc.lineWidth=1;wc.beginPath();for(var i2=0;i2<=W;i2++){var tt2=(i2+t0)*.055;var y2=H/2+Math.sin(tt2*1.3+2)*H*.09+Math.cos(tt2*.7)*H*.06;if(i2===0)wc.moveTo(i2,y2);else wc.lineTo(i2,y2)}wc.stroke();t0+=2}
  // noise
  var nv=document.getElementById('cNoise'),nc=nv.getContext('2d');
  function sn(){var d=Math.min(1.2,window.devicePixelRatio||1);nv.width=nv.clientWidth*d;nv.height=nv.clientHeight*d;nc.setTransform(d,0,0,d,0,0)}
  function dn(){var W=nv.clientWidth,H=nv.clientHeight;if(!W||!H)return;var img=nc.createImageData(W,H),d=img.data;for(var i=0;i<d.length;i+=4){var v=Math.random()<.18?110+Math.random()*140:0;d[i]=0;d[i+1]=v;d[i+2]=v*.5;d[i+3]=v>0?180:0}nc.putImageData(img,0,0)}
  function rz(){sw();sn()}window.addEventListener('resize',rz);setTimeout(rz,0);
  (function lp(){dw();requestAnimationFrame(lp)})();setInterval(dn,90);
  // clock
  function tc(){var d=new Date();document.getElementById('clk').textContent=pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds());var dy=['SUN','MON','TUE','WED','THU','FRI','SAT'],mo=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];document.getElementById('clkSub').textContent=dy[d.getDay()]+' · '+mo[d.getMonth()]+' '+pad(d.getDate())+' · '+d.getFullYear();document.getElementById('thr').textContent=128+Math.floor(Math.random()*32);document.getElementById('qps').textContent=1180+Math.floor(Math.random()*160);document.getElementById('lat').textContent=(18+Math.floor(Math.random()*14))+'ms'}tc();setInterval(tc,1000);
  // uptime
  var up=18*3600+28*60+21;setInterval(function(){up++;document.getElementById('up').textContent=pad(Math.floor(up/3600))+':'+pad(Math.floor(up/60)%60)+':'+pad(up%60)},1000);
  // bars
  var procs=[{n:'ansi-ticker',b:72},{n:'crt-daemon',b:54},{n:'glyph-link',b:36},{n:'retro-fx',b:28},{n:'node',b:18}];
  function rb(){var W=18;document.getElementById('bars').innerHTML=procs.map(function(p){var v=Math.max(2,Math.min(99,p.b+(Math.random()-.5)*10));var on=Math.round(W*v/100);return '<div class="r"><b>'+p.n.padEnd(11,' ')+'</b><em>'+('█'.repeat(on)+'░'.repeat(W-on))+'</em><i>'+Math.round(v)+'%</i></div>'}).join('')}rb();setInterval(rb,1100);
  // events
  var seeds=[['i','glyph.link','signal locked @ 38.2Hz'],['i','ansi.ticker','frame · 0.8ms'],['w','crt.phosphor','burn-in risk'],['i','retro.clock','sync ok'],['i','skills.load','+1 skill: scanline-v2'],['e','net.gw7','handshake failed'],['i','net.gw7','handshake OK'],['w','mem.zone','frag 22%'],['i','cache','hit 94.2%'],['w','temp.n3','rising 68C'],['i','job.a04f','complete 812ms']];
  function ts(){var d=new Date();return pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds())}
  var ee=document.getElementById('ev');
  function pe(){var s=seeds[Math.floor(Math.random()*seeds.length)],r=document.createElement('div');r.innerHTML='<span class="t">'+ts()+'</span><span class="'+s[0]+'">['+s[0].toUpperCase()+']</span> <b>'+s[1]+'</b> · '+s[2];ee.appendChild(r);while(ee.children.length>8)ee.removeChild(ee.firstChild);if(s[0]!=='i'){var a=document.getElementById('al');a.textContent=(parseInt(a.textContent,10)||0)+1}}
  for(var k=0;k<5;k++)pe();setInterval(pe,1500);
  // cmd typewriter
  var cmds=['skill load retro-ascii','cat /proc/glyph | less','ticker --speed=40','ls ~/skills','neofetch --ascii=cp437','grep -r "phosphor" src/'];
  var cl=document.getElementById('cmdL'),ci=0,cj=0,del=false;
  function ct(){var f=cmds[ci];if(!del){cj++;cl.textContent=f.slice(0,cj);if(cj>=f.length){del=true;setTimeout(ct,1500);return}setTimeout(ct,55+Math.random()*45)}else{cj=Math.max(0,cj-2);cl.textContent=f.slice(0,cj);if(cj===0){del=false;ci=(ci+1)%cmds.length;setTimeout(ct,350);return}setTimeout(ct,22)}}ct();
  // flicker
  setInterval(function(){if(Math.random()<.14){document.body.style.filter='brightness(1.22) contrast(1.04)';setTimeout(function(){document.body.style.filter=''},50+Math.random()*80)}},2400);
})();
</script>
</body></html>`;
}


// ★ CEILING LINEAR — Active Cycle 工作台（仅在 linear token 抽到）
function linearCeilingDoc(p){
  const h = 720;
  const headline = (p && p.headline) || 'Active cycle';
  const sub = (p && p.sub) || 'Cycle 24 — design systems sprint';
  return `<!doctype html><html><head><meta charset="utf-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{
  --canvas:#010102;--s1:#0f1011;--s2:#16171a;--s3:#1c1d20;
  --hair:#23252a;--hair-2:#2a2c31;
  --ink:#f7f8f8;--ink-2:#cfd0d3;--mute:#8a8c93;--mute-2:#5a5c63;
  --lav:#5e6ad2;--lav-2:#7c87e0;--lav-glow:rgba(94,106,210,.45);
  --green:#4cb782;--amber:#e2a73a;--red:#e5484d;--blue:#2dabe6;--violet:#9d6bff;
  --font:'Inter',system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,monospace;
  --ease:cubic-bezier(.22,.61,.36,1);--ease-out:cubic-bezier(.16,1,.3,1);
}
@property --p{syntax:"<number>";initial-value:0;inherits:false}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:var(--canvas);color:var(--ink);font-family:var(--font);-webkit-font-smoothing:antialiased;height:${h}px;overflow:hidden}
.glow{position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(420px 280px at 75% 10%, rgba(94,106,210,.10), transparent 60%)}
.grain{position:absolute;inset:0;pointer-events:none;z-index:1;opacity:.025;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/></svg>")}

.app{position:relative;z-index:2;display:grid;grid-template-rows:38px 1fr;height:${h}px}
nav.top{display:grid;grid-template-columns:160px 1fr auto;align-items:center;height:38px;padding:0 12px;border-bottom:1px solid var(--hair);background:linear-gradient(180deg,rgba(15,16,17,.7),rgba(15,16,17,.4));backdrop-filter:blur(10px);position:relative;z-index:10}
.brand{display:flex;align-items:center;gap:7px;font-weight:600;font-size:12px;letter-spacing:-.2px}
.bm{width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,#fff,#aab);position:relative;box-shadow:0 0 0 1px rgba(255,255,255,.06)}
.bm::after{content:"";position:absolute;inset:2px;border-radius:2px;background:linear-gradient(135deg,#000,#222);clip-path:polygon(0 0,100% 0,100% 60%,60% 60%,60% 100%,0 100%)}
.crumb{display:flex;align-items:center;gap:5px;font-size:11.5px;color:var(--ink-2)}
.crumb .td{width:11px;height:11px;border-radius:3px;background:linear-gradient(135deg,var(--lav),var(--violet))}
.crumb .sep{color:var(--mute-2)}
.tr{display:flex;align-items:center;gap:6px}
.kbar{display:flex;align-items:center;gap:6px;height:24px;padding:0 7px 0 9px;border-radius:6px;background:var(--s2);border:1px solid var(--hair);color:var(--mute);font-size:11px;min-width:170px}
.kbar kbd{font-family:var(--mono);font-size:9.5px;padding:2px 4px;border-radius:3px;background:var(--s3);border:1px solid var(--hair);color:var(--mute);margin-left:auto}
.btn{height:24px;padding:0 10px;border-radius:6px;font-size:11.5px;font-weight:500;border:1px solid var(--hair);background:var(--s2);color:var(--ink);display:inline-flex;align-items:center;gap:5px;font-family:var(--font)}
.btn-p{background:var(--lav);border-color:transparent;color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 6px 16px -6px var(--lav-glow)}

main.body{display:grid;grid-template-columns:160px 1fr;min-height:0;height:calc(${h}px - 38px)}
aside.side{border-right:1px solid var(--hair);padding:8px 6px;display:flex;flex-direction:column;gap:1px;overflow:hidden;background:linear-gradient(180deg,rgba(15,16,17,.4),rgba(15,16,17,0))}
.s-sec{padding:8px 6px 3px;font-size:9.5px;letter-spacing:.4px;text-transform:uppercase;color:var(--mute-2);font-weight:500}
.si{display:flex;align-items:center;gap:7px;padding:4px 7px;border-radius:5px;font-size:11.5px;color:var(--ink-2);position:relative;transition:background .14s var(--ease)}
.si:hover{background:var(--s2);color:var(--ink)}
.si.active{background:var(--s2);color:var(--ink)}
.si.active::before{content:"";position:absolute;left:-6px;top:7px;bottom:7px;width:2px;border-radius:2px;background:var(--lav)}
.si .ico{width:12px;height:12px;color:var(--mute);display:inline-flex;align-items:center;justify-content:center}
.si .bd{margin-left:auto;font-size:10px;color:var(--mute);font-variant-numeric:tabular-nums}
.si.active .bd{background:var(--lav);color:#fff;padding:1px 5px;border-radius:7px;font-size:9.5px}
.td{width:11px;height:11px;border-radius:3px;background:linear-gradient(135deg,var(--lav),var(--violet))}
.td.b{background:linear-gradient(135deg,var(--blue),#1e8bd1)}
.td.g{background:linear-gradient(135deg,var(--green),#2e8a5d)}
.s-bot{margin-top:auto;display:flex;align-items:center;gap:7px;padding:8px 6px;border-top:1px solid var(--hair);margin-left:-6px;margin-right:-6px;padding-left:12px}
.av{width:18px;height:18px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:600;color:#fff;background:linear-gradient(135deg,var(--lav),var(--violet));font-family:var(--mono)}
.av.lf{background:linear-gradient(135deg,#3aa57e,#2a7556)}
.av.yh{background:linear-gradient(135deg,var(--amber),#a06b14)}
.av.tw{background:linear-gradient(135deg,var(--red),#9b2125)}
.av.sm{width:15px;height:15px;font-size:8px;border:1.5px solid var(--canvas);margin-left:-3px}
.av.sm:first-child{margin-left:0}
.who{display:flex;flex-direction:column;line-height:1.15}
.who b{font-size:11px;font-weight:500;color:var(--ink)}
.who span{font-size:9.5px;color:var(--mute)}

section.content{min-height:0;overflow:hidden;position:relative;padding:18px 22px 0}
.eyebrow{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:9.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--mute);padding:4px 8px;border-radius:999px;border:1px solid var(--hair);background:var(--s1)}
.pulse{width:5px;height:5px;border-radius:50%;background:var(--lav);position:relative}
.pulse::after{content:"";position:absolute;inset:-3px;border-radius:50%;background:var(--lav);opacity:.4;animation:ping 1.6s var(--ease-out) infinite}
@keyframes ping{0%{transform:scale(1);opacity:.4}80%,100%{transform:scale(2.6);opacity:0}}
h1.disp{margin-top:9px;font-size:26px;font-weight:600;letter-spacing:-.7px;line-height:1.05;display:flex;align-items:baseline;gap:10px}
h1.disp .hint{font-size:11.5px;font-weight:400;color:var(--mute);letter-spacing:0}
h1.disp .hint b{color:var(--ink-2);font-weight:500;font-variant-numeric:tabular-nums}
.subhd{margin-top:5px;color:var(--mute);font-size:11px;display:flex;gap:10px;align-items:center}
.subhd .d{width:2px;height:2px;border-radius:50%;background:var(--mute-2)}

.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px}
.mc{background:linear-gradient(180deg,var(--s1),rgba(15,16,17,.6));border:1px solid var(--hair);border-radius:9px;padding:11px 12px 10px;position:relative;overflow:hidden;transition:border-color .25s var(--ease)}
.mc:hover{border-color:var(--hair-2)}
.mc .lbl{display:flex;align-items:center;justify-content:space-between;font-size:10px;color:var(--mute);letter-spacing:.2px}
.mc .num{margin-top:5px;font-size:21px;font-weight:600;letter-spacing:-.6px;font-variant-numeric:tabular-nums;line-height:1;display:flex;align-items:center;gap:8px}
.mc .num .sl{color:var(--mute);font-weight:400;font-size:13px;letter-spacing:0}
.mc .delta{margin-left:6px;font-size:10px;font-weight:500;color:var(--green);font-family:var(--mono)}
.mc .delta.dim{color:var(--mute)}
.mc .ft{margin-top:8px;font-size:10px;color:var(--mute);display:flex;align-items:center;gap:6px}
.mb{height:3px;border-radius:2px;background:var(--s3);overflow:hidden;flex:1}
.mb i{display:block;height:100%;background:var(--lav);width:0;border-radius:2px;transition:width 1.2s var(--ease-out) .3s}
.ring{width:32px;height:32px;border-radius:50%;background:conic-gradient(var(--lav) calc(var(--p,0)*1%),var(--s3) 0);display:inline-flex;align-items:center;justify-content:center;position:relative;flex-shrink:0;transition:--p 1.2s var(--ease-out) .3s}
.ring::before{content:"";position:absolute;inset:4px;background:var(--s1);border-radius:50%}
.ring span{position:relative;font-size:9px;font-weight:600;font-variant-numeric:tabular-nums}

.cw{margin-top:10px;border:1px solid var(--hair);border-radius:9px;background:linear-gradient(180deg,var(--s1),rgba(15,16,17,.4));padding:10px 12px 6px}
.ch{display:flex;align-items:center;justify-content:space-between;margin-bottom:2px}
.ch .lt{font-size:11.5px;color:var(--ink)}
.ch .lt span{color:var(--mute);font-size:10.5px;font-weight:400}
.ch .lg{display:flex;gap:10px;font-size:9.5px;color:var(--mute)}
.ch .lg i{display:inline-block;width:10px;height:2px;margin-right:4px;vertical-align:middle;border-radius:1px}
.ch .lg .la{background:var(--lav)}
.ch .lg .li{background:repeating-linear-gradient(90deg,var(--mute-2) 0 3px,transparent 3px 6px)}
.chart svg{width:100%;height:130px;display:block;overflow:visible}
.chart .grid line{stroke:var(--hair);stroke-width:.5}
.chart .axis text{fill:var(--mute);font-size:8.5px;font-family:var(--mono)}
.chart .ideal{stroke:var(--mute-2);stroke-width:1;stroke-dasharray:3 3;fill:none;stroke-dashoffset:600;animation:draw 1.6s var(--ease-out) .25s forwards}
.chart .actual{stroke:var(--lav);stroke-width:1.5;fill:none;stroke-linecap:round;stroke-dashoffset:600;animation:draw 1.4s var(--ease-out) .55s forwards}
.chart .area{fill:url(#gL);opacity:0;animation:fadeIn .8s var(--ease-out) 1.4s forwards}
.chart .pt{fill:var(--lav);stroke:var(--canvas);stroke-width:2;opacity:0;animation:popIn .4s var(--ease-out) 1.8s forwards}
.chart .pr{fill:none;stroke:var(--lav);stroke-width:1;opacity:0;animation:rp 2.2s var(--ease-out) 2s infinite}
.chart .today{stroke:var(--hair-2);stroke-width:1;stroke-dasharray:3 3}
.chart .tl{fill:var(--mute);font-size:8.5px;font-family:var(--mono)}
@keyframes draw{to{stroke-dashoffset:0}}
@keyframes fadeIn{to{opacity:1}}
@keyframes popIn{0%{opacity:0;transform:scale(.6)}100%{opacity:1;transform:scale(1)}}
@keyframes rp{0%{r:5;opacity:.7}100%{r:14;opacity:0}}

.flt{margin-top:14px;display:flex;align-items:center;gap:5px;flex-wrap:wrap}
.pl{height:22px;padding:0 8px;border-radius:5px;border:1px solid transparent;background:transparent;font-size:11px;color:var(--mute);font-weight:500;display:inline-flex;align-items:center;gap:5px;cursor:pointer;transition:all .15s var(--ease);font-family:var(--font)}
.pl:hover{color:var(--ink-2);background:var(--s2)}
.pl.on{background:var(--s2);color:var(--ink);border-color:var(--hair-2)}
.pl .pc{font-family:var(--mono);font-size:9.5px;color:var(--mute);background:var(--s3);padding:1px 5px;border-radius:7px}
.pl.on .pc{background:var(--lav);color:#fff}

.grp{margin-top:8px}
.gh{display:flex;align-items:center;gap:6px;padding:5px 0 5px 3px;font-size:10.5px;color:var(--ink-2);font-weight:500}
.gh .gc{font-family:var(--mono);font-size:10px;color:var(--mute);font-weight:400}
.row{display:grid;grid-template-columns:14px 56px 1fr auto auto auto;align-items:center;gap:9px;padding:7px 9px;border-radius:6px;position:relative;transition:background .14s var(--ease)}
.row+.row{border-top:1px solid var(--hair)}
.row:hover{background:var(--s1)}
.row::before{content:"";position:absolute;left:0;top:6px;bottom:6px;width:2px;border-radius:2px;background:transparent;transition:background .14s var(--ease)}
.row:hover::before{background:var(--lav)}
.st{width:11px;height:11px;border-radius:50%;border:1.5px solid var(--mute);position:relative}
.st.prog{border-color:var(--amber);background:conic-gradient(var(--amber) 60%,transparent 0)}
.st.review{border-color:var(--blue);background:conic-gradient(var(--blue) 80%,transparent 0)}
.rid{font-family:var(--mono);font-size:9.5px;color:var(--mute);font-variant-numeric:tabular-nums}
.rt{font-size:11.5px;color:var(--ink);font-weight:450;letter-spacing:-.05px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tg{font-size:9px;letter-spacing:.4px;text-transform:uppercase;font-weight:500;padding:2px 5px;border-radius:3px;font-family:var(--mono);transition:transform .15s var(--ease)}
.row:hover .tg{transform:translateY(-.5px)}
.tg.urg{background:rgba(229,72,77,.12);color:var(--red);box-shadow:inset 0 0 0 1px rgba(229,72,77,.25)}
.tg.high{background:rgba(226,167,58,.12);color:var(--amber);box-shadow:inset 0 0 0 1px rgba(226,167,58,.22)}
.tg.med{background:rgba(94,106,210,.14);color:var(--lav-2);box-shadow:inset 0 0 0 1px rgba(94,106,210,.3)}
.due{font-size:9.5px;color:var(--mute);font-family:var(--mono);min-width:36px;text-align:right}
.due.warn{color:var(--amber)}
.asg{display:flex;align-items:center}

.ceil{margin-top:12px;border-radius:11px;padding:11px 14px;background:linear-gradient(135deg,rgba(94,106,210,.10),rgba(94,106,210,.02) 60%,transparent),var(--s1);border:1px solid rgba(94,106,210,.22);display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;position:relative;overflow:hidden}
.ceil::after{content:"";position:absolute;inset:-1px;border-radius:inherit;pointer-events:none;background:radial-gradient(280px 60px at 80% 0%,var(--lav-glow),transparent 60%);opacity:.5}
.cm{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,var(--lav),var(--violet));display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;box-shadow:0 6px 16px -6px var(--lav-glow),inset 0 1px 0 rgba(255,255,255,.2)}
.ct{display:flex;flex-direction:column;gap:3px;min-width:0}
.ct .et{font-family:var(--mono);font-size:9px;letter-spacing:.5px;text-transform:uppercase;color:var(--lav-2)}
.ct .tt{font-size:11.5px;color:var(--ink);font-weight:450;letter-spacing:-.05px;line-height:1.4;min-height:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ct .cur{display:inline-block;width:1.5px;height:11px;background:var(--lav);vertical-align:-1px;margin-left:1px;animation:bk 1s steps(1) infinite}
@keyframes bk{50%{opacity:0}}
.cta{padding:0 11px;height:26px;border-radius:6px;background:var(--lav);color:#fff;font-size:11px;font-weight:500;border:none;font-family:var(--font);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 8px 18px -8px var(--lav-glow);display:inline-flex;align-items:center;gap:5px;cursor:pointer}

.an{opacity:0;transform:translateY(6px);animation:rise .55s var(--ease-out) forwards}
@keyframes rise{to{opacity:1;transform:none}}
.d1{animation-delay:.05s}.d2{animation-delay:.10s}.d3{animation-delay:.15s}.d4{animation-delay:.22s}.d5{animation-delay:.30s}.d6{animation-delay:.38s}.d7{animation-delay:.45s}.d8{animation-delay:.55s}.d9{animation-delay:.65s}.d10{animation-delay:.78s}
</style></head>
<body>
<div class="glow"></div><div class="grain"></div>
<div class="app">
  <nav class="top an d1">
    <div class="brand"><div class="bm"></div><span>Linear</span></div>
    <div class="crumb"><span class="td"></span><span>Design Systems</span><span class="sep">/</span><span>Cycle 24 · Active</span></div>
    <div class="tr">
      <div class="kbar"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-3.5-3.5"/></svg><span>Search</span><kbd>⌘K</kbd></div>
      <button class="btn btn-p"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg>New issue</button>
    </div>
  </nav>
  <main class="body">
    <aside class="side">
      <div class="an d2" style="display:contents">
        <div class="si"><span class="ico"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg></span>Workspace</div>
        <div class="si active"><span class="ico"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/></svg></span>Inbox<span class="bd">12</span></div>
        <div class="si"><span class="ico"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg></span>My issues<span class="bd">7</span></div>
      </div>
      <div class="s-sec an d3">YOUR TEAMS</div>
      <div class="an d3" style="display:contents">
        <div class="si"><span class="ico"><span class="td"></span></span>Design Systems<span class="bd">31</span></div>
        <div class="si"><span class="ico"><span class="td b"></span></span>Platform</div>
        <div class="si"><span class="ico"><span class="td g"></span></span>Growth</div>
      </div>
      <div class="s-sec an d4">FAVORITES</div>
      <div class="an d4" style="display:contents">
        <div class="si"><span class="ico">★</span>Token Migration</div>
      </div>
      <div class="s-bot an d5"><span class="av">KS</span><div class="who"><b>Karo Su</b><span>karosu@</span></div></div>
    </aside>
    <section class="content">
      <div class="an d3"><span class="eyebrow"><span class="pulse"></span>CYCLE 24 · 6 DAYS LEFT · MAY 5 → MAY 17</span></div>
      <h1 class="disp an d4">${escHtml(headline)}<span class="hint">— <b id="ct-tot">102</b> issues across <b>4</b> teams</span></h1>
      <div class="subhd an d4"><span>Lead by <b style="color:var(--ink-2);font-weight:500">Karo Su</b></span><span class="d"></span><span>Updated <b style="color:var(--ink-2);font-weight:500">2m ago</b></span><span class="d"></span><span style="color:var(--green)">● On track</span></div>

      <div class="metrics">
        <div class="mc an d5">
          <div class="lbl"><span>Scope</span></div>
          <div class="num"><span><span data-c="47">0</span></span><span class="delta dim">±0</span></div>
          <div class="ft"><div class="mb"><i style="--w:100%"></i></div><span>locked</span></div>
        </div>
        <div class="mc an d6">
          <div class="lbl"><span>Started</span></div>
          <div class="num"><span><span data-c="31">0</span><span class="sl">/47</span></span><span class="ring" style="--p:66"><span>66%</span></span></div>
          <div class="ft"><div class="mb"><i style="--w:66%"></i></div><span>16 not started</span></div>
        </div>
        <div class="mc an d7">
          <div class="lbl"><span>Completed</span></div>
          <div class="num"><span><span data-c="24">0</span></span><span class="delta">+3 today</span></div>
          <div class="ft"><div class="mb"><i style="--w:51%"></i></div><span>51% done</span></div>
        </div>
      </div>

      <div class="cw an d7">
        <div class="ch"><div class="lt">Burndown <span>— actual vs ideal</span></div><div class="lg"><span><i class="la"></i>Actual</span><span><i class="li"></i>Ideal</span></div></div>
        <div class="chart">
          <svg viewBox="0 0 600 130" preserveAspectRatio="none">
            <defs><linearGradient id="gL" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#5e6ad2" stop-opacity=".22"/><stop offset="100%" stop-color="#5e6ad2" stop-opacity="0"/></linearGradient></defs>
            <g class="grid"><line x1="0" x2="600" y1="14" y2="14"/><line x1="0" x2="600" y1="44" y2="44"/><line x1="0" x2="600" y1="74" y2="74"/><line x1="0" x2="600" y1="104" y2="104"/></g>
            <g class="axis"><text x="0" y="125">May 5</text><text x="120" y="125">May 8</text><text x="240" y="125">May 11</text><text x="360" y="125">May 14</text><text x="586" y="125" text-anchor="end">May 17</text></g>
            <line class="ideal" x1="0" y1="14" x2="600" y2="110" stroke-dasharray="600"/>
            <path class="area" d="M0,14 L60,22 L120,32 L180,46 L240,56 L300,68 L360,78 L420,86 L600,110 L600,110 L0,110 Z"/>
            <path class="actual" d="M0,14 L60,22 L120,32 L180,46 L240,56 L300,68 L360,78 L420,86" stroke-dasharray="600"/>
            <line class="today" x1="240" y1="0" x2="240" y2="115"/><text class="tl" x="244" y="9">TODAY</text>
            <circle class="pr" cx="420" cy="86" r="5"/><circle class="pt" cx="420" cy="86" r="3.2"/>
          </svg>
        </div>
      </div>

      <div class="flt an d8">
        <button class="pl on" data-f="all">All <span class="pc">102</span></button>
        <button class="pl" data-f="mine">Mine <span class="pc">7</span></button>
        <button class="pl" data-f="active">Active <span class="pc">31</span></button>
        <button class="pl" data-f="blocked">Blocked <span class="pc">4</span></button>
      </div>

      <div class="grp an d9">
        <div class="gh">In Progress <span class="gc">5</span></div>
        <div id="rows-p"></div>
      </div>

      <div class="ceil an d10">
        <div class="cm">C</div>
        <div class="ct"><span class="et">Ceiling AI · cycle summary</span><span class="tt"><span id="ai"></span><span class="cur"></span></span></div>
        <button class="cta">Open report<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17 17 7M9 7h8v8"/></svg></button>
      </div>
    </section>
  </main>
</div>
<script>
(function(){
  // count-up
  function up(el,target,dur){var s=performance.now();var f=parseFloat(el.textContent)||0;function step(n){var k=Math.min(1,(n-s)/dur);el.textContent=Math.round(f+(target-f)*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(step)}requestAnimationFrame(step)}
  setTimeout(function(){
    document.querySelectorAll('[data-c]').forEach(function(el){up(el,+el.dataset.c,1100)});
    document.querySelectorAll('.mb i').forEach(function(i){i.style.width=getComputedStyle(i).getPropertyValue('--w')});
  },650);

  // issue rows
  var data=[
    {id:'DES-128',t:'Refactor token pipeline',pri:'urg',due:'May 12',people:['KS','LF'],sc:['all','mine','active']},
    {id:'DES-127',t:'Audit Inter font fallback chain',pri:'high',due:'May 11',people:['KS'],sc:['all','mine','active']},
    {id:'PLT-094',t:'Migrate motion specs to RM tokens',pri:'med',due:'May 14',people:['LF','YH'],sc:['all','active']},
    {id:'DES-119',t:'Density toggle — comfort/compact',pri:'high',due:'May 11',people:['KS','LF'],sc:['all','mine','active']},
    {id:'BUG-203',t:'Inbox unread count drift',pri:'urg',due:'May 11',people:['YH'],sc:['all','active','blocked']}
  ];
  var lbl={urg:'URGENT',high:'HIGH',med:'MED'};
  function av(p){var c={KS:'',LF:'lf',YH:'yh',TW:'tw'}[p]||'';return '<span class="av sm '+c+'">'+p+'</span>'}
  document.getElementById('rows-p').innerHTML=data.map(function(it){
    var w=(it.due==='May 11')?' warn':'';
    return '<div class="row" data-sc="'+it.sc.join(' ')+'">'+
      '<span class="st prog"></span>'+
      '<span class="rid">'+it.id+'</span>'+
      '<span class="rt">'+it.t+'</span>'+
      '<span class="tg '+it.pri+'">'+lbl[it.pri]+'</span>'+
      '<span class="due'+w+'">'+it.due+'</span>'+
      '<span class="asg">'+it.people.map(av).join('')+'</span>'+
    '</div>';
  }).join('');
  // row stagger
  setTimeout(function(){
    document.querySelectorAll('.row').forEach(function(r,i){
      r.style.opacity='0';r.style.transform='translateY(5px)';
      r.style.transition='opacity .4s cubic-bezier(.16,1,.3,1), transform .4s cubic-bezier(.16,1,.3,1)';
      setTimeout(function(){r.style.opacity='1';r.style.transform='none'},60*i);
    });
  },720);

  // pill filter
  document.querySelectorAll('.pl[data-f]').forEach(function(p){
    p.addEventListener('click',function(){
      document.querySelectorAll('.pl[data-f]').forEach(function(x){x.classList.remove('on')});
      p.classList.add('on');
      var f=p.dataset.f;
      document.querySelectorAll('.row').forEach(function(r){
        var ok=r.dataset.sc.split(' ').indexOf(f)>=0;
        r.style.transition='opacity .25s ease, filter .25s ease';
        r.style.opacity=ok?'1':'.22';
        r.style.filter=ok?'':'grayscale(.6)';
      });
    });
  });

  // typewriter
  var lines=[
    'Cycle 24 on track — 24 of 47 done, burndown matches ideal within 4%.',
    '2 urgent items due May 11 — DES-119, BUG-203 — assign for review.',
    'Suggest closing Cycle 24 by Friday May 16; carry low-pri to Cycle 25.'
  ];
  var ai=document.getElementById('ai'),li=0,ci=0;
  function ty(){
    var L=lines[li];
    if(ci<=L.length){ai.textContent=L.slice(0,ci);ci++;setTimeout(ty,ci<6?40:18+Math.random()*22);}
    else{setTimeout(function(){var er=function(){if(ci>0){ci--;ai.textContent=L.slice(0,ci);setTimeout(er,8)}else{li=(li+1)%lines.length;ci=0;setTimeout(ty,250)}};er()},2400)}
  }
  setTimeout(ty,1200);
})();
<\/script>
</body></html>`;
}



/* ===== MERCURY_TREASURY_BEGIN ===== */
// ★ CEILING MERCURY TREASURY — 完整动效版 dashboard（来自 mercury-banking/index.html）
var MERCURY_TREASURY_HTML="<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\" />\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n<title>Mercury · Treasury</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;700&family=JetBrains+Mono:wght@400;500&display=swap\" rel=\"stylesheet\">\n<style>\n/* ------------------------------------------------------------------\n   Mercury UI Skill — design tokens\n   - 4px modular grid\n   - Inter primary / JetBrains Mono numerics\n   - Restrained light-mode palette\n   - Purple CTA, paper-white surface, hairline borders\n------------------------------------------------------------------ */\n:root{\n  /* surface */\n  --bg:           #fbfaf7;       /* warm paper */\n  --surface:      #ffffff;\n  --surface-mute: #f6f5f2;\n  --surface-sink: #f1efea;\n\n  /* ink */\n  --ink:          #0f0f10;\n  --ink-2:        #2a2a2d;\n  --ink-3:        #5b5d63;\n  --mute:         #8a8c93;\n  --mute-2:       #b6b7bc;\n\n  /* hairline */\n  --hair:         #ececea;\n  --hair-2:       #e0dfdc;\n  --hair-3:       #d2d1cd;\n\n  /* brand purple (Mercury CTA) */\n  --p-50:  #f3f1ff;\n  --p-100: #e6e2ff;\n  --p-200: #c9c1ff;\n  --p-400: #7a6bf2;\n  --p-500: #5d4ee0;\n  --p-600: #4a3cc8;\n  --p-700: #3a2fa0;\n  --p-glow:rgba(93,78,224,.18);\n\n  /* semantic */\n  --pos:   #128a4d;\n  --pos-bg:#e6f4ec;\n  --neg:   #b3261e;\n  --neg-bg:#fbeae9;\n  --warn:  #a35d00;\n  --warn-bg:#fdf1da;\n  --info:  #1857c4;\n  --info-bg:#e7eefb;\n\n  /* type */\n  --font:'Inter','SF Pro Text',-apple-system,BlinkMacSystemFont,system-ui,sans-serif;\n  --mono:'JetBrains Mono','SF Mono',ui-monospace,monospace;\n\n  /* radius (Mercury keeps it tight) */\n  --r-1:4px; --r-2:6px; --r-3:8px; --r-4:10px; --r-5:12px; --r-6:16px;\n\n  /* shadow (very subtle, light-mode) */\n  --sh-1:0 1px 0 rgba(20,20,40,.04);\n  --sh-2:0 1px 2px rgba(20,20,40,.05),0 0 0 1px rgba(20,20,40,.04);\n  --sh-3:0 4px 14px rgba(20,20,40,.06),0 0 0 1px rgba(20,20,40,.05);\n  --sh-pop:0 16px 36px rgba(20,20,40,.10),0 2px 6px rgba(20,20,40,.06),0 0 0 1px rgba(20,20,40,.06);\n\n  --ease:cubic-bezier(.22,.61,.36,1);\n}\n\n*{box-sizing:border-box;margin:0;padding:0}\nhtml,body{\n  background:var(--bg);color:var(--ink);\n  font-family:var(--font);\n  font-feature-settings:\"ss01\",\"cv11\",\"tnum\";\n  -webkit-font-smoothing:antialiased;\n  overflow:hidden;\n}\nbody{height:100vh;width:100vw}\nbutton{font:inherit;color:inherit;cursor:pointer;border:0;background:none}\na{color:inherit;text-decoration:none}\n.mono{font-family:var(--mono);font-feature-settings:\"tnum\",\"zero\"}\n\n/* ===================== layout ===================== */\n.app{\n  display:grid;\n  grid-template-columns:236px 1fr;\n  grid-template-rows:48px 1fr;\n  height:100vh;\n}\n\n/* ===================== TOP BAR ===================== */\n.top{\n  grid-column:1 / -1;\n  display:grid;grid-template-columns:236px 1fr auto;align-items:center;\n  height:48px;\n  background:var(--surface);\n  border-bottom:1px solid var(--hair);\n  position:relative;z-index:30;\n}\n.brand{\n  display:flex;align-items:center;gap:8px;\n  padding:0 16px;height:100%;\n  border-right:1px solid var(--hair);\n  font-weight:600;font-size:14px;letter-spacing:-.2px;\n}\n.brand-mark{\n  width:22px;height:22px;border-radius:6px;\n  background:linear-gradient(160deg,#1a1a1f 0%, #3a3a44 100%);\n  display:grid;place-items:center;\n  box-shadow:inset 0 0 0 1px rgba(255,255,255,.06);\n}\n.brand-mark svg{display:block}\n.workspace-pill{\n  margin-left:8px;display:inline-flex;align-items:center;gap:6px;\n  padding:3px 8px;border-radius:999px;background:var(--surface-mute);\n  border:1px solid var(--hair);font-size:11.5px;color:var(--ink-3);font-weight:500;\n}\n.ws-dot{width:6px;height:6px;border-radius:50%;background:var(--p-500)}\n\n.crumb{\n  padding:0 16px;display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-2);\n}\n.crumb .sep{color:var(--mute-2)}\n.crumb .now{color:var(--ink);font-weight:500}\n.crumb .badge{\n  margin-left:6px;padding:1.5px 6px;border-radius:4px;font-size:10.5px;\n  background:var(--p-50);color:var(--p-600);font-weight:550;letter-spacing:.02em;\n}\n\n.top-right{display:flex;align-items:center;gap:6px;padding:0 12px}\n.icon-btn{\n  width:32px;height:32px;border-radius:8px;display:grid;place-items:center;color:var(--ink-3);\n  transition:background .15s var(--ease),color .15s var(--ease);\n}\n.icon-btn:hover{background:var(--surface-mute);color:var(--ink)}\n.search-pill{\n  display:flex;align-items:center;gap:8px;height:30px;padding:0 10px 0 8px;\n  border-radius:8px;border:1px solid var(--hair-2);background:var(--surface-mute);\n  font-size:12.5px;color:var(--mute);min-width:220px;\n}\n.search-pill kbd{\n  margin-left:auto;font-family:var(--mono);font-size:10.5px;\n  padding:1px 5px;border-radius:4px;background:var(--surface);\n  border:1px solid var(--hair-2);color:var(--ink-3);\n}\n.user-chip{\n  display:flex;align-items:center;gap:8px;height:32px;padding:2px 10px 2px 2px;\n  border-radius:999px;border:1px solid var(--hair-2);background:var(--surface);\n}\n.avatar{\n  width:24px;height:24px;border-radius:50%;\n  background:linear-gradient(135deg,#f4c25b,#e07b3a);\n  color:#fff;font-size:10.5px;font-weight:600;display:grid;place-items:center;\n  box-shadow:inset 0 0 0 1.5px #fff;\n}\n.user-chip .nm{font-size:12.5px;font-weight:500}\n\n/* ===================== SIDEBAR ===================== */\naside.side{\n  background:var(--surface);\n  border-right:1px solid var(--hair);\n  padding:12px 8px;\n  overflow-y:auto;\n  display:flex;flex-direction:column;gap:14px;\n}\n.side-section{display:flex;flex-direction:column;gap:1px}\n.side-label{\n  padding:6px 10px 4px;font-size:10.5px;letter-spacing:.06em;\n  text-transform:uppercase;color:var(--mute);font-weight:550;\n}\n.nav-item{\n  display:flex;align-items:center;gap:10px;\n  padding:6px 10px;border-radius:6px;\n  font-size:13px;color:var(--ink-2);font-weight:450;\n  transition:background .12s var(--ease),color .12s var(--ease);\n  position:relative;\n}\n.nav-item:hover{background:var(--surface-mute);color:var(--ink)}\n.nav-item .ico{width:16px;height:16px;color:var(--mute);flex-shrink:0}\n.nav-item:hover .ico{color:var(--ink-3)}\n.nav-item.active{background:var(--p-50);color:var(--p-700);font-weight:550}\n.nav-item.active .ico{color:var(--p-600)}\n.nav-item .count{\n  margin-left:auto;font-size:11px;color:var(--mute);font-family:var(--mono);\n}\n\n.account-item{\n  display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;\n  padding:7px 10px;border-radius:6px;\n  font-size:12.5px;\n  transition:background .12s var(--ease);\n}\n.account-item:hover{background:var(--surface-mute)}\n.acc-icon{\n  width:22px;height:22px;border-radius:5px;display:grid;place-items:center;\n  font-size:10px;font-weight:600;\n}\n.acc-icon.ck{background:var(--p-100);color:var(--p-700)}\n.acc-icon.sv{background:#dcefe5;color:#0d6e3e}\n.acc-icon.tr{background:#f0e8d5;color:#7a5c12}\n.acc-icon.cd{background:#e9e3f9;color:#5a3aa6}\n.acc-name{font-weight:500;color:var(--ink-2)}\n.acc-num{font-family:var(--mono);font-size:10.5px;color:var(--mute);margin-top:1px}\n.acc-bal{font-family:var(--mono);font-size:11.5px;color:var(--ink);font-weight:500;text-align:right;}\n\n.side-foot{\n  margin-top:auto;padding:10px;border-radius:8px;background:var(--surface-mute);\n  border:1px solid var(--hair);font-size:11.5px;color:var(--ink-3);\n}\n.side-foot b{display:block;color:var(--ink);font-size:12px;margin-bottom:2px}\n.side-foot .lnk{color:var(--p-600);font-weight:500;cursor:pointer}\n\n/* ===================== MAIN ===================== */\nmain.main{\n  overflow-y:auto;padding:24px 32px 64px;\n  background:var(--bg);\n  scroll-behavior:smooth;\n}\n.page-h{\n  display:flex;align-items:flex-end;justify-content:space-between;\n  margin-bottom:20px;gap:16px;\n}\n.page-h h1{font-size:22px;font-weight:600;letter-spacing:-.4px}\n.page-h .sub{margin-top:3px;font-size:12.5px;color:var(--mute);font-weight:450}\n.page-h .actions{display:flex;align-items:center;gap:8px}\n\n.btn{\n  display:inline-flex;align-items:center;gap:6px;\n  height:32px;padding:0 12px;border-radius:7px;\n  font-size:12.5px;font-weight:550;\n  transition:all .15s var(--ease);\n  border:1px solid transparent;\n}\n.btn.ghost{background:var(--surface);border-color:var(--hair-2);color:var(--ink-2)}\n.btn.ghost:hover{background:var(--surface-mute);border-color:var(--hair-3)}\n.btn.primary{\n  background:var(--ink);color:#fff;border-color:var(--ink);\n  box-shadow:var(--sh-1);\n}\n.btn.primary:hover{background:#000}\n.btn.cta{\n  background:var(--p-500);color:#fff;border-color:var(--p-500);\n  box-shadow:0 1px 2px rgba(74,60,200,.2),0 0 0 1px rgba(74,60,200,.1);\n}\n.btn.cta:hover{background:var(--p-600);border-color:var(--p-600)}\n\n/* ===================== KPI ROW ===================== */\n.kpi-grid{\n  display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px;\n}\n.kpi{\n  background:var(--surface);\n  border:1px solid var(--hair);\n  border-radius:10px;\n  padding:14px 16px 16px;\n  position:relative;\n  box-shadow:var(--sh-1);\n}\n.kpi .lbl{\n  font-size:11.5px;color:var(--mute);font-weight:500;letter-spacing:.01em;\n  display:flex;align-items:center;gap:5px;\n}\n.kpi .lbl .info{color:var(--mute-2);cursor:help}\n.kpi .val{\n  margin-top:8px;font-size:24px;font-weight:600;letter-spacing:-.4px;\n  font-feature-settings:\"tnum\",\"zero\";\n}\n.kpi .val .cur{font-size:13px;color:var(--mute);font-weight:500;margin-right:3px;vertical-align:8px}\n.kpi .val .frac{color:var(--mute);font-weight:500}\n.kpi .delta{\n  margin-top:6px;font-size:11.5px;display:flex;align-items:center;gap:6px;color:var(--mute);\n}\n.tag{\n  display:inline-flex;align-items:center;gap:3px;\n  padding:1.5px 6px;border-radius:4px;font-size:10.5px;font-weight:550;\n  font-family:var(--mono);\n}\n.tag.up{background:var(--pos-bg);color:var(--pos)}\n.tag.down{background:var(--neg-bg);color:var(--neg)}\n.tag.flat{background:var(--surface-mute);color:var(--ink-3)}\n\n.kpi .spark{\n  position:absolute;right:12px;top:14px;width:80px;height:34px;opacity:.85;\n}\n\n/* ===================== CHART CARD ===================== */\n.dual-grid{\n  display:grid;grid-template-columns:1.6fr 1fr;gap:12px;margin-bottom:16px;\n}\n.card{\n  background:var(--surface);border:1px solid var(--hair);border-radius:10px;\n  box-shadow:var(--sh-1);overflow:hidden;\n}\n.card-h{\n  display:flex;align-items:center;justify-content:space-between;\n  padding:14px 16px;border-bottom:1px solid var(--hair);\n}\n.card-h h3{font-size:13.5px;font-weight:600;letter-spacing:-.1px}\n.card-h .sub{font-size:11.5px;color:var(--mute);margin-top:2px;font-weight:450}\n.tabs{display:flex;align-items:center;gap:2px;background:var(--surface-mute);padding:2px;border-radius:7px;}\n.tabs button{\n  font-size:11.5px;font-weight:500;color:var(--ink-3);\n  padding:4px 10px;border-radius:5px;\n}\n.tabs button.on{background:var(--surface);color:var(--ink);box-shadow:var(--sh-1)}\n.chart-body{padding:8px 4px 14px}\n\n/* runway list */\n.runway-list{padding:6px 16px 12px}\n.runway-row{\n  display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;\n  padding:10px 0;border-bottom:1px dashed var(--hair);\n}\n.runway-row:last-child{border-bottom:0}\n.rw-l{font-size:12.5px;color:var(--ink-2);font-weight:500}\n.rw-l .sub{font-size:11px;color:var(--mute);margin-top:2px;font-weight:450}\n.rw-bar{height:5px;background:var(--surface-sink);border-radius:99px;overflow:hidden;margin-top:7px}\n.rw-bar > span{display:block;height:100%;background:var(--p-500);border-radius:99px}\n.rw-r{font-family:var(--mono);font-size:12px;color:var(--ink);text-align:right}\n.rw-r .pct{color:var(--mute);font-size:10.5px;display:block;margin-top:2px}\n\n/* ===================== TRANSACTIONS TABLE ===================== */\n.tx-card{margin-bottom:16px}\n.tx-toolbar{\n  display:flex;align-items:center;gap:8px;\n  padding:10px 12px;border-bottom:1px solid var(--hair);background:var(--surface-mute);\n}\n.chip{\n  display:inline-flex;align-items:center;gap:5px;\n  padding:4px 10px;border-radius:6px;\n  font-size:11.5px;font-weight:500;color:var(--ink-2);\n  background:var(--surface);border:1px solid var(--hair-2);\n  transition:all .12s var(--ease);\n}\n.chip:hover{border-color:var(--hair-3);color:var(--ink)}\n.chip.active{background:var(--ink);color:#fff;border-color:var(--ink)}\n.chip .n{\n  font-family:var(--mono);font-size:10px;\n  padding:0 5px;border-radius:99px;background:var(--surface-mute);color:var(--ink-3);\n}\n.chip.active .n{background:rgba(255,255,255,.12);color:#fff}\n.tx-toolbar .spacer{flex:1}\n\ntable.tx{\n  width:100%;border-collapse:collapse;font-size:12.5px;\n}\ntable.tx thead th{\n  text-align:left;padding:9px 16px;font-size:11px;font-weight:550;\n  color:var(--mute);text-transform:uppercase;letter-spacing:.06em;\n  border-bottom:1px solid var(--hair);background:var(--surface);\n  position:sticky;top:0;\n}\ntable.tx tbody td{\n  padding:11px 16px;border-bottom:1px solid var(--hair);vertical-align:middle;\n}\ntable.tx tbody tr{transition:background .1s var(--ease);cursor:pointer}\ntable.tx tbody tr:hover{background:var(--surface-mute)}\n.tx-merch{display:flex;align-items:center;gap:10px}\n.tx-logo{\n  width:28px;height:28px;border-radius:7px;display:grid;place-items:center;\n  font-size:11px;font-weight:600;color:#fff;flex-shrink:0;\n}\n.tx-name{font-weight:500;color:var(--ink)}\n.tx-cat{font-size:11px;color:var(--mute);margin-top:1px}\n.amt{font-family:var(--mono);font-weight:500;text-align:right;white-space:nowrap}\n.amt.neg{color:var(--ink)}\n.amt.pos{color:var(--pos)}\n.amt .frac{color:var(--mute)}\n.acc-mini{\n  display:inline-flex;align-items:center;gap:6px;font-size:11.5px;color:var(--ink-3);\n}\n.acc-mini::before{\n  content:\"\";width:6px;height:6px;border-radius:2px;background:var(--p-400);\n}\n.status-pill{\n  display:inline-flex;align-items:center;gap:5px;\n  padding:2px 7px;border-radius:99px;font-size:10.5px;font-weight:550;\n  background:var(--surface-mute);color:var(--ink-3);\n}\n.status-pill::before{content:\"\";width:5px;height:5px;border-radius:50%;background:currentColor}\n.status-pill.ok{background:var(--pos-bg);color:var(--pos)}\n.status-pill.pend{background:var(--warn-bg);color:var(--warn)}\n.status-pill.fail{background:var(--neg-bg);color:var(--neg)}\n\n/* footer of table */\n.tx-foot{\n  display:flex;align-items:center;justify-content:space-between;\n  padding:10px 16px;border-top:1px solid var(--hair);font-size:12px;color:var(--mute);\n}\n.pager{display:flex;align-items:center;gap:4px}\n.pager .pg{\n  width:26px;height:26px;border-radius:6px;display:grid;place-items:center;\n  font-size:11.5px;color:var(--ink-3);font-family:var(--mono);\n}\n.pager .pg:hover{background:var(--surface-mute)}\n.pager .pg.on{background:var(--ink);color:#fff}\n\n/* ===================== RIGHT COLUMN ===================== */\n.bottom-grid{\n  display:grid;grid-template-columns:1.4fr 1fr;gap:12px;\n}\n.payee-list{padding:6px 0}\n.payee-row{\n  display:grid;grid-template-columns:36px 1fr auto;align-items:center;gap:12px;\n  padding:10px 16px;\n  transition:background .1s var(--ease);\n}\n.payee-row:hover{background:var(--surface-mute)}\n.payee-av{\n  width:36px;height:36px;border-radius:50%;display:grid;place-items:center;\n  font-size:13px;font-weight:600;color:#fff;\n}\n.payee-name{font-size:13px;font-weight:500}\n.payee-meta{font-size:11px;color:var(--mute);margin-top:2px;font-family:var(--mono)}\n.payee-amt{font-family:var(--mono);font-size:12.5px;font-weight:500;text-align:right}\n.payee-amt .ago{display:block;font-size:10.5px;color:var(--mute);font-family:var(--font);font-weight:450;margin-top:2px}\n\n/* todo / approval list */\n.todo-list{padding:0}\n.todo-row{\n  display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;\n  padding:12px 16px;border-bottom:1px solid var(--hair);\n}\n.todo-row:last-child{border-bottom:0}\n.todo-icon{\n  width:28px;height:28px;border-radius:7px;display:grid;place-items:center;flex-shrink:0;\n}\n.todo-icon.warn{background:var(--warn-bg);color:var(--warn)}\n.todo-icon.info{background:var(--info-bg);color:var(--info)}\n.todo-icon.purple{background:var(--p-50);color:var(--p-600)}\n.todo-title{font-size:12.5px;font-weight:500;color:var(--ink)}\n.todo-sub{font-size:11px;color:var(--mute);margin-top:2px}\n.todo-act{\n  font-size:11.5px;font-weight:550;color:var(--p-600);\n  padding:5px 10px;border-radius:6px;border:1px solid var(--hair-2);background:var(--surface);\n}\n.todo-act:hover{background:var(--p-50);border-color:var(--p-100)}\n\n/* ===================== misc ===================== */\n.skill-foot{\n  margin-top:24px;padding:14px 16px;border-radius:10px;\n  background:var(--surface);border:1px solid var(--hair);\n  display:flex;align-items:center;gap:14px;font-size:11.5px;color:var(--mute);\n}\n.skill-foot b{color:var(--ink);font-weight:600}\n.skill-foot code{\n  font-family:var(--mono);font-size:11px;\n  padding:2px 6px;border-radius:4px;background:var(--surface-mute);color:var(--ink-2);\n}\n.skill-foot .pip{\n  display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:99px;\n  background:var(--p-50);color:var(--p-700);font-weight:550;\n}\n\n/* scrollbar */\n::-webkit-scrollbar{width:10px;height:10px}\n::-webkit-scrollbar-thumb{background:#dcdbd7;border-radius:99px;border:2px solid var(--bg)}\n::-webkit-scrollbar-thumb:hover{background:#c8c7c2}\n::-webkit-scrollbar-track{background:transparent}\n\n/* ===================== 🎬 MOTION SYSTEM ===================== */\n/* keyframes */\n@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}\n@keyframes fadeIn{from{opacity:0}to{opacity:1}}\n@keyframes drawLine{from{stroke-dashoffset:var(--len,1000)}to{stroke-dashoffset:0}}\n@keyframes areaFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}\n@keyframes barGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}\n@keyframes pulseDot{\n  0%,100%{box-shadow:0 0 0 0 rgba(18,138,77,.55)}\n  50%{box-shadow:0 0 0 6px rgba(18,138,77,0)}\n}\n@keyframes pulseDotWarn{\n  0%,100%{box-shadow:0 0 0 0 rgba(163,93,0,.5)}\n  50%{box-shadow:0 0 0 5px rgba(163,93,0,0)}\n}\n@keyframes glowPurple{\n  0%,100%{box-shadow:0 1px 2px rgba(74,60,200,.25),0 0 0 1px rgba(74,60,200,.1),0 0 0 0 rgba(93,78,224,.45)}\n  50%{box-shadow:0 1px 2px rgba(74,60,200,.25),0 0 0 1px rgba(74,60,200,.1),0 0 0 8px rgba(93,78,224,0)}\n}\n@keyframes shimmer{\n  0%{background-position:-200% 0}\n  100%{background-position:200% 0}\n}\n@keyframes spin{to{transform:rotate(360deg)}}\n@keyframes liveBlink{0%,55%,100%{opacity:1}60%,75%{opacity:.35}}\n@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}\n@keyframes tickerScroll{\n  0%{transform:translateX(0)}\n  100%{transform:translateX(-50%)}\n}\n@keyframes ringPulse{\n  0%{transform:scale(1);opacity:.7}\n  100%{transform:scale(2.4);opacity:0}\n}\n@keyframes rowSlideIn{\n  from{opacity:0;transform:translateY(-12px);background:var(--p-50)}\n  60%{background:var(--p-50)}\n  to{opacity:1;transform:none;background:transparent}\n}\n@keyframes tooltipFloat{\n  0%,100%{transform:translate(560px,32px)}\n  50%{transform:translate(560px,28px)}\n}\n@keyframes scanLine{\n  0%{transform:translateX(-100%)}\n  100%{transform:translateX(100%)}\n}\n@keyframes confettiFlip{\n  0%{transform:rotateX(0)}\n  100%{transform:rotateX(360deg)}\n}\n@keyframes navIndicator{from{transform:scaleY(0)}to{transform:scaleY(1)}}\n@keyframes glowTrail{\n  0%{filter:drop-shadow(0 0 0 rgba(93,78,224,.6))}\n  50%{filter:drop-shadow(0 0 6px rgba(93,78,224,.6))}\n  100%{filter:drop-shadow(0 0 0 rgba(93,78,224,.6))}\n}\n\n/* page entry */\n.app{opacity:0;animation:fadeIn .35s var(--ease) .05s forwards}\n\n/* generic stagger fade-up for top-level blocks */\n.kpi,.card,.skill-foot{\n  opacity:0;transform:translateY(10px);\n  animation:fadeUp .55s var(--ease) forwards;\n}\n.kpi:nth-child(1){animation-delay:.10s}\n.kpi:nth-child(2){animation-delay:.18s}\n.kpi:nth-child(3){animation-delay:.26s}\n.kpi:nth-child(4){animation-delay:.34s}\n.dual-grid > .card:nth-child(1){animation-delay:.42s}\n.dual-grid > .card:nth-child(2){animation-delay:.50s}\n.tx-card{animation-delay:.58s}\n.bottom-grid > .card:nth-child(1){animation-delay:.66s}\n.bottom-grid > .card:nth-child(2){animation-delay:.74s}\n.skill-foot{animation-delay:.82s}\n\n/* hover lift on cards */\n.kpi,.card{transition:transform .35s var(--ease),box-shadow .35s var(--ease),border-color .35s var(--ease)}\n.kpi:hover{transform:translateY(-2px);box-shadow:var(--sh-3);border-color:var(--hair-2)}\n.card:hover{box-shadow:var(--sh-2)}\n\n/* KPI value count-up subtle scale on enter */\n.kpi .val{display:inline-block;animation:fadeUp .6s var(--ease) both;animation-delay:inherit}\n\n/* sparkline draw */\n.spark path[data-line]{\n  stroke-dasharray:200;stroke-dashoffset:200;\n  animation:drawLine 1.6s var(--ease) forwards;\n  animation-delay:.6s;\n}\n.spark path[data-area]{\n  opacity:0;animation:areaFade .9s var(--ease) forwards;\n  animation-delay:1.4s;\n}\n.spark{animation:float 6s ease-in-out infinite;animation-delay:2s}\n\n/* main chart path animation */\n.chart-line{\n  stroke-dasharray:1400;stroke-dashoffset:1400;\n  animation:drawLine 2.2s var(--ease) forwards;\n  animation-delay:.7s;\n}\n.chart-line-cmp{\n  stroke-dasharray:900;stroke-dashoffset:900;\n  animation:drawLine 2.4s var(--ease) forwards;\n  animation-delay:1.1s;\n}\n.chart-area{opacity:0;animation:areaFade 1s var(--ease) forwards;animation-delay:1.8s}\n.chart-tip{opacity:0;animation:fadeIn .5s var(--ease) forwards,tooltipFloat 4s ease-in-out 2.7s infinite;animation-delay:2.4s}\n.chart-dot{opacity:0;animation:fadeIn .4s var(--ease) forwards;animation-delay:2.2s;transform-origin:center;transform-box:fill-box}\n.chart-dot-ring{\n  transform-origin:center;transform-box:fill-box;\n  animation:ringPulse 2.2s ease-out infinite;\n  animation-delay:2.4s;\n}\n\n/* runway bars */\n.rw-bar > span{\n  transform-origin:left center;\n  animation:barGrow 1.1s var(--ease) forwards;\n}\n.runway-row:nth-child(1) .rw-bar > span{animation-delay:.9s}\n.runway-row:nth-child(2) .rw-bar > span{animation-delay:1.05s}\n.runway-row:nth-child(3) .rw-bar > span{animation-delay:1.20s}\n.runway-row:nth-child(4) .rw-bar > span{animation-delay:1.35s}\n.rw-bar{position:relative;overflow:hidden}\n.rw-bar::after{\n  content:\"\";position:absolute;inset:0;\n  background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.7) 50%,transparent 100%);\n  transform:translateX(-100%);\n  animation:scanLine 3.2s ease-in-out infinite;\n  animation-delay:2.4s;\n}\n\n/* status dot pulses */\n.status-pill.ok::before{animation:pulseDot 2.4s ease-out infinite}\n.status-pill.pend::before{animation:pulseDotWarn 1.8s ease-out infinite}\n\n/* CTA breathing glow */\n.btn.cta{animation:glowPurple 3s ease-in-out infinite;animation-delay:1.2s}\n.btn.cta:hover{transform:translateY(-1px);transition:transform .15s var(--ease),background .15s var(--ease)}\n\n/* sidebar active indicator */\n.nav-item.active::before{\n  content:\"\";position:absolute;left:0;top:6px;bottom:6px;width:2px;\n  background:var(--p-500);border-radius:99px;\n  transform-origin:center;\n  animation:navIndicator .4s var(--ease) .3s both;\n}\n\n/* nav-item hover translate */\n.nav-item,.account-item{transition:background .12s var(--ease),color .12s var(--ease),transform .15s var(--ease)}\n.nav-item:hover,.account-item:hover{transform:translateX(2px)}\n\n/* sidebar entry stagger */\naside.side .side-section{animation:fadeUp .5s var(--ease) both}\naside.side .side-section:nth-of-type(1){animation-delay:.05s}\naside.side .side-section:nth-of-type(2){animation-delay:.15s}\naside.side .side-section:nth-of-type(3){animation-delay:.25s}\naside.side .side-foot{animation:fadeUp .5s var(--ease) .35s both}\n\n/* tx row stagger */\ntable.tx tbody tr{\n  opacity:0;transform:translateY(6px);\n  animation:fadeUp .5s var(--ease) forwards;\n}\ntable.tx tbody tr:nth-child(1){animation-delay:.7s}\ntable.tx tbody tr:nth-child(2){animation-delay:.78s}\ntable.tx tbody tr:nth-child(3){animation-delay:.86s}\ntable.tx tbody tr:nth-child(4){animation-delay:.94s}\ntable.tx tbody tr:nth-child(5){animation-delay:1.02s}\ntable.tx tbody tr:nth-child(6){animation-delay:1.10s}\ntable.tx tbody tr:nth-child(7){animation-delay:1.18s}\ntable.tx tbody tr:nth-child(8){animation-delay:1.26s}\ntable.tx tbody tr.fresh{animation:rowSlideIn .9s var(--ease)}\n\n/* tx row tilt on hover (subtle 3d) */\ntable.tx tbody tr:hover .tx-logo{transform:scale(1.06) rotate(-2deg);transition:transform .25s var(--ease)}\n.tx-logo{transition:transform .25s var(--ease)}\n\n/* payee/todo row stagger */\n.payee-row,.todo-row{opacity:0;animation:fadeUp .5s var(--ease) forwards}\n.payee-row:nth-child(1){animation-delay:.95s}\n.payee-row:nth-child(2){animation-delay:1.03s}\n.payee-row:nth-child(3){animation-delay:1.11s}\n.payee-row:nth-child(4){animation-delay:1.19s}\n.payee-row:nth-child(5){animation-delay:1.27s}\n.todo-row:nth-child(1){animation-delay:.95s}\n.todo-row:nth-child(2){animation-delay:1.05s}\n.todo-row:nth-child(3){animation-delay:1.15s}\n.todo-row:nth-child(4){animation-delay:1.25s}\n\n/* live badge */\n.live-badge{\n  display:inline-flex;align-items:center;gap:6px;\n  padding:3px 9px 3px 8px;border-radius:999px;\n  background:var(--surface);border:1px solid var(--hair-2);\n  font-size:11px;color:var(--ink-2);font-weight:550;\n  letter-spacing:.04em;\n}\n.live-badge .live-dot{\n  width:7px;height:7px;border-radius:50%;background:var(--pos);\n  position:relative;\n  animation:liveBlink 2s ease-in-out infinite;\n}\n.live-badge .live-dot::after{\n  content:\"\";position:absolute;inset:0;border-radius:50%;background:var(--pos);\n  animation:ringPulse 2s ease-out infinite;\n}\n\n/* ticker bar */\n.ticker{\n  margin:-8px 0 14px;height:30px;border-radius:8px;overflow:hidden;\n  border:1px solid var(--hair);background:var(--surface);\n  display:flex;align-items:center;\n  position:relative;\n}\n.ticker::before,.ticker::after{\n  content:\"\";position:absolute;top:0;bottom:0;width:60px;z-index:2;pointer-events:none;\n}\n.ticker::before{left:0;background:linear-gradient(90deg,var(--surface),transparent)}\n.ticker::after{right:0;background:linear-gradient(-90deg,var(--surface),transparent)}\n.ticker .label{\n  flex-shrink:0;padding:0 12px;height:100%;display:flex;align-items:center;gap:6px;\n  font-size:10.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;\n  color:var(--ink);background:linear-gradient(90deg,#fbfaf7,#f6f5f2);\n  border-right:1px solid var(--hair);z-index:3;\n}\n.ticker .track{\n  display:flex;gap:34px;white-space:nowrap;\n  animation:tickerScroll 38s linear infinite;\n  font-size:11.5px;color:var(--ink-2);padding-left:18px;\n}\n.ticker .track:hover{animation-play-state:paused}\n.ticker .ti{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-weight:500}\n.ticker .ti .sym{color:var(--ink);font-weight:600}\n.ticker .ti .up{color:var(--pos)}\n.ticker .ti .dn{color:var(--neg)}\n\n/* page header live cluster */\n.page-h .live-row{display:flex;align-items:center;gap:8px;margin-top:6px}\n.page-h .live-row .pip{\n  font-size:10.5px;color:var(--mute);font-family:var(--mono);\n}\n\n/* skeleton shimmer (for loading row) */\n.shimmer{\n  background:linear-gradient(90deg,#f1efea 0%,#fbfaf7 50%,#f1efea 100%);\n  background-size:200% 100%;\n  animation:shimmer 1.6s linear infinite;\n}\n\n/* number flip — subtle highlight when value updates */\n.flash-up{animation:flashUp .9s var(--ease)}\n@keyframes flashUp{\n  0%{background:rgba(18,138,77,.0)}\n  35%{background:rgba(18,138,77,.18)}\n  100%{background:rgba(18,138,77,.0)}\n}\n.flash-down{animation:flashDown .9s var(--ease)}\n@keyframes flashDown{\n  0%{background:rgba(179,38,30,0)}\n  35%{background:rgba(179,38,30,.16)}\n  100%{background:rgba(179,38,30,0)}\n}\n\n/* small loader */\n.spinner{\n  width:11px;height:11px;border-radius:50%;\n  border:1.6px solid rgba(163,93,0,.25);border-top-color:var(--warn);\n  display:inline-block;vertical-align:-1px;\n  animation:spin .8s linear infinite;\n}\n\n/* svg focus dot soft glow */\n.chart-dot{filter:drop-shadow(0 0 4px rgba(93,78,224,.45));animation:fadeIn .4s var(--ease) 2.2s forwards,glowTrail 2.6s ease-in-out 2.6s infinite}\n\n/* tab toggle indicator */\n.tabs{position:relative}\n.tabs button{position:relative;z-index:1;transition:color .2s var(--ease)}\n\n/* chip click feedback */\n.chip{transition:all .15s var(--ease),transform .1s var(--ease)}\n.chip:active{transform:scale(.96)}\n\n/* search keystroke hint */\n.search-pill{transition:border-color .2s var(--ease),background .2s var(--ease)}\n.search-pill:hover{border-color:var(--hair-3);background:var(--surface)}\n\n/* avatar tilt on hover */\n.user-chip:hover .avatar{transform:rotate(-6deg) scale(1.05);transition:transform .25s var(--ease)}\n.avatar{transition:transform .25s var(--ease)}\n\n/* respect reduced motion */\n@media (prefers-reduced-motion:reduce){\n  *,*::before,*::after{\n    animation-duration:.01ms !important;\n    animation-iteration-count:1 !important;\n    transition-duration:.01ms !important;\n  }\n}\n\n/* responsive */\n@media (max-width: 1180px){\n  .kpi-grid{grid-template-columns:repeat(2,1fr)}\n  .dual-grid,.bottom-grid{grid-template-columns:1fr}\n}\n</style>\n</head>\n\n<body>\n<div class=\"app\">\n\n  <!-- ============== TOP BAR ============== -->\n  <header class=\"top\">\n    <div class=\"brand\">\n      <div class=\"brand-mark\">\n        <svg width=\"11\" height=\"11\" viewBox=\"0 0 12 12\" fill=\"none\">\n          <path d=\"M2 9V3l4 4 4-4v6\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n      <span>Mercury</span>\n      <span class=\"workspace-pill\"><span class=\"ws-dot\"></span>Helio Labs, Inc.</span>\n    </div>\n\n    <div class=\"crumb\">\n      <span>Treasury</span>\n      <span class=\"sep\">/</span>\n      <span class=\"now\">Overview</span>\n      <span class=\"badge\">USD · LIVE</span>\n    </div>\n\n    <div class=\"top-right\">\n      <div class=\"search-pill\">\n        <svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"none\"><circle cx=\"7\" cy=\"7\" r=\"5\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"m11 11 3 3\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\"/></svg>\n        <span>Search transactions, payees…</span>\n        <kbd>⌘K</kbd>\n      </div>\n      <button class=\"icon-btn\" title=\"Inbox\">\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M2 6h12M3 3h10l1 6v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9l1-6Z\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linejoin=\"round\"/><path d=\"M5 9a3 3 0 0 0 6 0\" stroke=\"currentColor\" stroke-width=\"1.3\"/></svg>\n      </button>\n      <button class=\"icon-btn\" title=\"Help\">\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><path d=\"M6.5 6.2a1.5 1.5 0 1 1 2.2 1.6c-.5.3-.7.7-.7 1.2M8 11h.01\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/></svg>\n      </button>\n      <div class=\"user-chip\">\n        <span class=\"avatar\">LS</span>\n        <span class=\"nm\">Lingfeng</span>\n        <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"m3 5 3 3 3-3\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n      </div>\n    </div>\n  </header>\n\n  <!-- ============== SIDEBAR ============== -->\n  <aside class=\"side\">\n    <div class=\"side-section\">\n      <a class=\"nav-item active\">\n        <svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><rect x=\"2\" y=\"2\" width=\"5\" height=\"5\" rx=\"1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><rect x=\"9\" y=\"2\" width=\"5\" height=\"5\" rx=\"1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><rect x=\"2\" y=\"9\" width=\"5\" height=\"5\" rx=\"1\" stroke=\"currentColor\" stroke-width=\"1.3\"/><rect x=\"9\" y=\"9\" width=\"5\" height=\"5\" rx=\"1\" stroke=\"currentColor\" stroke-width=\"1.3\"/></svg>\n        Overview\n      </a>\n      <a class=\"nav-item\">\n        <svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M2 5h12M2 5v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5M2 5l1-2h10l1 2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linejoin=\"round\"/></svg>\n        Accounts\n        <span class=\"count\">8</span>\n      </a>\n      <a class=\"nav-item\">\n        <svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M2 8h12M2 8l3-3M2 8l3 3M14 8l-3-3M14 8l-3 3\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        Send & Receive\n      </a>\n      <a class=\"nav-item\">\n        <svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><rect x=\"2\" y=\"4\" width=\"12\" height=\"9\" rx=\"1.2\" stroke=\"currentColor\" stroke-width=\"1.3\"/><path d=\"M2 7h12M5 10h2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/></svg>\n        Cards\n      </a>\n      <a class=\"nav-item\">\n        <svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 13V6l5-3 5 3v7M3 13h10M6 13V9h4v4\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linejoin=\"round\"/></svg>\n        Treasury\n        <span class=\"count\">2</span>\n      </a>\n      <a class=\"nav-item\">\n        <svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><path d=\"M8 4v4l2.5 2.5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/></svg>\n        Approvals\n        <span class=\"count\">3</span>\n      </a>\n    </div>\n\n    <div class=\"side-section\">\n      <div class=\"side-label\">Accounts</div>\n      <a class=\"account-item\">\n        <span class=\"acc-icon ck\">CK</span>\n        <span><div class=\"acc-name\">Checking</div><div class=\"acc-num\">··2104</div></span>\n        <span class=\"acc-bal\">$4,182,937<span style=\"color:var(--mute)\">.50</span></span>\n      </a>\n      <a class=\"account-item\">\n        <span class=\"acc-icon sv\">SV</span>\n        <span><div class=\"acc-name\">Savings</div><div class=\"acc-num\">··2218</div></span>\n        <span class=\"acc-bal\">$1,250,000<span style=\"color:var(--mute)\">.00</span></span>\n      </a>\n      <a class=\"account-item\">\n        <span class=\"acc-icon tr\">T</span>\n        <span><div class=\"acc-name\">Treasury · Vanguard</div><div class=\"acc-num\">5.21% APY</div></span>\n        <span class=\"acc-bal\">$8,500,000<span style=\"color:var(--mute)\">.00</span></span>\n      </a>\n      <a class=\"account-item\">\n        <span class=\"acc-icon cd\">IO</span>\n        <span><div class=\"acc-name\">IO · Operations</div><div class=\"acc-num\">··0044</div></span>\n        <span class=\"acc-bal\">$312,800<span style=\"color:var(--mute)\">.18</span></span>\n      </a>\n    </div>\n\n    <div class=\"side-section\">\n      <div class=\"side-label\">Insights</div>\n      <a class=\"nav-item\"><svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M2 13l4-4 3 3 5-6\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>Cash Flow</a>\n      <a class=\"nav-item\"><svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"currentColor\" stroke-width=\"1.3\"/><path d=\"M8 2v6l4 2\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/></svg>Runway</a>\n      <a class=\"nav-item\"><svg class=\"ico\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 12V4M7 12V8M11 12V6M3 12h10\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/></svg>Reports</a>\n    </div>\n\n    <div class=\"side-foot\">\n      <b>Mercury IO yield</b>\n      Earn 5.21% APY on idle cash, FDIC-insured up to $5M.\n      <div style=\"margin-top:6px\"><span class=\"lnk\">Learn more →</span></div>\n    </div>\n  </aside>\n\n  <!-- ============== MAIN ============== -->\n  <main class=\"main\">\n\n    <!-- header -->\n    <div class=\"page-h\">\n      <div>\n        <h1>Good afternoon, Lingfeng.</h1>\n        <div class=\"sub\">Tuesday, May 12, 2026 · All accounts in USD</div>\n        <div class=\"live-row\">\n          <span class=\"live-badge\"><span class=\"live-dot\"></span>LIVE · syncing</span>\n          <span class=\"pip\" id=\"last-sync\">last sync 00:02 ago</span>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <button class=\"btn ghost\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 8h10M8 3v10\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>\n          New account\n        </button>\n        <button class=\"btn ghost\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M8 11V3m0 0L5 6m3-3 3 3M3 13h10\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n          Export\n        </button>\n        <button class=\"btn cta\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M2 8h10m0 0L8 4m4 4-4 4\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n          Send money\n        </button>\n      </div>\n    </div>\n\n    <!-- TICKER -->\n    <div class=\"ticker\">\n      <div class=\"label\">\n        <svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\"><circle cx=\"5\" cy=\"5\" r=\"3\" fill=\"#128a4d\"><animate attributeName=\"r\" values=\"3;4.2;3\" dur=\"1.6s\" repeatCount=\"indefinite\"/></circle></svg>\n        Markets\n      </div>\n      <div class=\"track\" id=\"ticker-track\">\n        <span class=\"ti\"><span class=\"sym\">SPY</span> 532.18 <span class=\"up\">+0.42%</span></span>\n        <span class=\"ti\"><span class=\"sym\">QQQ</span> 451.04 <span class=\"up\">+0.81%</span></span>\n        <span class=\"ti\"><span class=\"sym\">DXY</span> 104.62 <span class=\"dn\">−0.18%</span></span>\n        <span class=\"ti\"><span class=\"sym\">10Y</span> 4.32% <span class=\"dn\">−2bp</span></span>\n        <span class=\"ti\"><span class=\"sym\">EUR/USD</span> 1.0915 <span class=\"up\">+0.06%</span></span>\n        <span class=\"ti\"><span class=\"sym\">BTC</span> 71,420 <span class=\"up\">+1.74%</span></span>\n        <span class=\"ti\"><span class=\"sym\">ETH</span> 3,612 <span class=\"up\">+1.21%</span></span>\n        <span class=\"ti\"><span class=\"sym\">XAU</span> 2,386 <span class=\"up\">+0.54%</span></span>\n        <span class=\"ti\"><span class=\"sym\">FF</span> 5.33% <span class=\"ti\" style=\"color:var(--mute)\">flat</span></span>\n        <span class=\"ti\"><span class=\"sym\">VMFXX</span> 5.21% APY <span class=\"up\">+0.01%</span></span>\n        <!-- duplicate for seamless loop -->\n        <span class=\"ti\"><span class=\"sym\">SPY</span> 532.18 <span class=\"up\">+0.42%</span></span>\n        <span class=\"ti\"><span class=\"sym\">QQQ</span> 451.04 <span class=\"up\">+0.81%</span></span>\n        <span class=\"ti\"><span class=\"sym\">DXY</span> 104.62 <span class=\"dn\">−0.18%</span></span>\n        <span class=\"ti\"><span class=\"sym\">10Y</span> 4.32% <span class=\"dn\">−2bp</span></span>\n        <span class=\"ti\"><span class=\"sym\">EUR/USD</span> 1.0915 <span class=\"up\">+0.06%</span></span>\n        <span class=\"ti\"><span class=\"sym\">BTC</span> 71,420 <span class=\"up\">+1.74%</span></span>\n        <span class=\"ti\"><span class=\"sym\">ETH</span> 3,612 <span class=\"up\">+1.21%</span></span>\n        <span class=\"ti\"><span class=\"sym\">XAU</span> 2,386 <span class=\"up\">+0.54%</span></span>\n        <span class=\"ti\"><span class=\"sym\">FF</span> 5.33% <span style=\"color:var(--mute)\">flat</span></span>\n        <span class=\"ti\"><span class=\"sym\">VMFXX</span> 5.21% APY <span class=\"up\">+0.01%</span></span>\n      </div>\n    </div>\n\n    <!-- KPI ROW -->\n    <div class=\"kpi-grid\">\n      <div class=\"kpi\">\n        <div class=\"lbl\">Total balance <span class=\"info\">ⓘ</span></div>\n        <div class=\"val\"><span class=\"cur\">$</span><span class=\"num\" data-to=\"14245737\" data-format=\"comma\">0</span><span class=\"frac\">.68</span></div>\n        <div class=\"delta\"><span class=\"tag up\">↑ <span class=\"num\" data-to=\"4.32\" data-format=\"pct\">0</span>%</span> vs last 30 days</div>\n        <svg class=\"spark\" viewBox=\"0 0 80 34\" preserveAspectRatio=\"none\">\n          <defs><linearGradient id=\"g1\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#5d4ee0\" stop-opacity=\".25\"/><stop offset=\"1\" stop-color=\"#5d4ee0\" stop-opacity=\"0\"/></linearGradient></defs>\n          <path data-area d=\"M0 24 L8 22 L16 26 L24 18 L32 20 L40 14 L48 16 L56 10 L64 12 L72 6 L80 8 L80 34 L0 34 Z\" fill=\"url(#g1)\"/>\n          <path data-line d=\"M0 24 L8 22 L16 26 L24 18 L32 20 L40 14 L48 16 L56 10 L64 12 L72 6 L80 8\" stroke=\"#5d4ee0\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n\n      <div class=\"kpi\">\n        <div class=\"lbl\">Net cash flow · 30D</div>\n        <div class=\"val\"><span class=\"cur\">$</span>+<span class=\"num\" data-to=\"612450\" data-format=\"comma\">0</span><span class=\"frac\">.12</span></div>\n        <div class=\"delta\"><span class=\"tag up\">↑ <span class=\"num\" data-to=\"18.4\" data-format=\"pct\">0</span>%</span> vs prior period</div>\n        <svg class=\"spark\" viewBox=\"0 0 80 34\" preserveAspectRatio=\"none\">\n          <path data-line d=\"M0 26 L10 22 L20 24 L30 18 L40 20 L50 12 L60 16 L70 8 L80 4\" stroke=\"#128a4d\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n\n      <div class=\"kpi\">\n        <div class=\"lbl\">Burn rate · monthly</div>\n        <div class=\"val\"><span class=\"cur\">$</span><span class=\"num\" data-to=\"284109\" data-format=\"comma\">0</span><span class=\"frac\">.04</span></div>\n        <div class=\"delta\"><span class=\"tag down\">↓ <span class=\"num\" data-to=\"2.1\" data-format=\"pct\">0</span>%</span> efficient than May</div>\n        <svg class=\"spark\" viewBox=\"0 0 80 34\" preserveAspectRatio=\"none\">\n          <path data-line d=\"M0 8 L10 12 L20 10 L30 14 L40 12 L50 18 L60 14 L70 22 L80 20\" stroke=\"#b3261e\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n\n      <div class=\"kpi\">\n        <div class=\"lbl\">Runway estimate</div>\n        <div class=\"val\"><span class=\"num\" data-to=\"22\" data-format=\"int\">0</span> <span class=\"frac\" style=\"font-size:14px\">months</span></div>\n        <div class=\"delta\"><span class=\"tag flat\">Stable</span> est. through Mar 2028</div>\n        <svg class=\"spark\" viewBox=\"0 0 80 34\" preserveAspectRatio=\"none\">\n          <path data-line d=\"M0 18 L20 16 L40 20 L60 16 L80 14\" stroke=\"#8a8c93\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n    </div>\n\n    <!-- DUAL: chart + runway -->\n    <div class=\"dual-grid\">\n\n      <!-- chart card -->\n      <div class=\"card\">\n        <div class=\"card-h\">\n          <div>\n            <h3>Cash position</h3>\n            <div class=\"sub\">Daily balance across all USD accounts</div>\n          </div>\n          <div class=\"tabs\">\n            <button>7D</button><button class=\"on\">30D</button><button>90D</button><button>YTD</button><button>1Y</button>\n          </div>\n        </div>\n        <div class=\"chart-body\">\n          <svg viewBox=\"0 0 720 240\" width=\"100%\" height=\"240\" preserveAspectRatio=\"none\">\n            <defs>\n              <linearGradient id=\"cf\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">\n                <stop offset=\"0\" stop-color=\"#5d4ee0\" stop-opacity=\".22\"/>\n                <stop offset=\"1\" stop-color=\"#5d4ee0\" stop-opacity=\"0\"/>\n              </linearGradient>\n              <pattern id=\"grid\" width=\"60\" height=\"48\" patternUnits=\"userSpaceOnUse\">\n                <path d=\"M60 0H0V48\" fill=\"none\" stroke=\"#ececea\" stroke-width=\"1\"/>\n              </pattern>\n            </defs>\n            <rect x=\"40\" y=\"12\" width=\"660\" height=\"192\" fill=\"url(#grid)\"/>\n            <!-- y axis labels -->\n            <g font-family=\"JetBrains Mono\" font-size=\"9.5\" fill=\"#8a8c93\">\n              <text x=\"34\" y=\"20\" text-anchor=\"end\">$15M</text>\n              <text x=\"34\" y=\"68\" text-anchor=\"end\">$13M</text>\n              <text x=\"34\" y=\"116\" text-anchor=\"end\">$11M</text>\n              <text x=\"34\" y=\"164\" text-anchor=\"end\">$9M</text>\n              <text x=\"34\" y=\"208\" text-anchor=\"end\">$7M</text>\n            </g>\n            <!-- x axis labels -->\n            <g font-family=\"Inter\" font-size=\"9.5\" fill=\"#8a8c93\">\n              <text x=\"40\" y=\"226\">Apr 12</text>\n              <text x=\"180\" y=\"226\">Apr 19</text>\n              <text x=\"320\" y=\"226\">Apr 26</text>\n              <text x=\"460\" y=\"226\">May 03</text>\n              <text x=\"600\" y=\"226\">May 10</text>\n              <text x=\"700\" y=\"226\" text-anchor=\"end\">Today</text>\n            </g>\n            <!-- area + line -->\n            <path class=\"chart-area\" d=\"M40 150 L100 142 L160 156 L220 130 L280 138 L340 110 L400 122 L460 92 L520 100 L580 70 L640 78 L700 56 L700 204 L40 204 Z\" fill=\"url(#cf)\"/>\n            <path class=\"chart-line\" d=\"M40 150 L100 142 L160 156 L220 130 L280 138 L340 110 L400 122 L460 92 L520 100 L580 70 L640 78 L700 56\" stroke=\"#5d4ee0\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <!-- compare line (prior period) -->\n            <path class=\"chart-line-cmp\" d=\"M40 168 L100 162 L160 170 L220 158 L280 152 L340 146 L400 138 L460 132 L520 124 L580 118 L640 112 L700 104\" stroke=\"#b6b7bc\" stroke-width=\"1.3\" stroke-dasharray=\"3 4\" fill=\"none\"/>\n            <!-- focus dot (with pulsing ring) -->\n            <circle class=\"chart-dot-ring\" cx=\"640\" cy=\"78\" r=\"5\" fill=\"none\" stroke=\"#5d4ee0\" stroke-width=\"1.5\" opacity=\".6\"/>\n            <circle class=\"chart-dot\" cx=\"640\" cy=\"78\" r=\"4\" fill=\"#fff\" stroke=\"#5d4ee0\" stroke-width=\"2\"/>\n            <!-- tooltip -->\n            <g class=\"chart-tip\" transform=\"translate(560 32)\">\n              <rect width=\"120\" height=\"44\" rx=\"8\" fill=\"#fff\" stroke=\"#e0dfdc\"/>\n              <text x=\"10\" y=\"17\" font-family=\"Inter\" font-size=\"9.5\" fill=\"#8a8c93\">May 9, 2026</text>\n              <text x=\"10\" y=\"34\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"600\" fill=\"#0f0f10\">$13.94M</text>\n              <text x=\"78\" y=\"34\" font-family=\"Inter\" font-size=\"9.5\" fill=\"#128a4d\" font-weight=\"600\">+1.8%</text>\n            </g>\n          </svg>\n        </div>\n        <!-- legend -->\n        <div style=\"display:flex;gap:16px;padding:8px 16px 14px;font-size:11.5px;color:var(--ink-3);border-top:1px solid var(--hair)\">\n          <span style=\"display:inline-flex;align-items:center;gap:6px\"><span style=\"width:10px;height:2px;background:#5d4ee0;border-radius:2px\"></span>Current period</span>\n          <span style=\"display:inline-flex;align-items:center;gap:6px\"><span style=\"width:10px;height:2px;background:#b6b7bc;border-radius:2px\"></span>Prior period</span>\n          <span style=\"margin-left:auto;color:var(--mute)\">Avg balance: <b style=\"color:var(--ink);font-family:var(--mono);font-weight:500\">$12.47M</b></span>\n        </div>\n      </div>\n\n      <!-- runway card -->\n      <div class=\"card\">\n        <div class=\"card-h\">\n          <div>\n            <h3>Operating allocation</h3>\n            <div class=\"sub\">How idle cash is distributed</div>\n          </div>\n          <button class=\"icon-btn\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\"><circle cx=\"3\" cy=\"8\" r=\"1.2\" fill=\"currentColor\"/><circle cx=\"8\" cy=\"8\" r=\"1.2\" fill=\"currentColor\"/><circle cx=\"13\" cy=\"8\" r=\"1.2\" fill=\"currentColor\"/></svg></button>\n        </div>\n        <div class=\"runway-list\">\n          <div class=\"runway-row\">\n            <div>\n              <div class=\"rw-l\">Treasury · Vanguard MM<div class=\"sub\">VMFXX · 5.21% APY</div></div>\n              <div class=\"rw-bar\"><span style=\"width:60%\"></span></div>\n            </div>\n            <div class=\"rw-r\">$8.50M<span class=\"pct\">59.7%</span></div>\n          </div>\n          <div class=\"runway-row\">\n            <div>\n              <div class=\"rw-l\">Operating Checking<div class=\"sub\">Day-to-day funds</div></div>\n              <div class=\"rw-bar\"><span style=\"width:29%;background:#7a6bf2\"></span></div>\n            </div>\n            <div class=\"rw-r\">$4.18M<span class=\"pct\">29.4%</span></div>\n          </div>\n          <div class=\"runway-row\">\n            <div>\n              <div class=\"rw-l\">High-yield Savings<div class=\"sub\">4.40% APY · liquid</div></div>\n              <div class=\"rw-bar\"><span style=\"width:9%;background:#9a8df5\"></span></div>\n            </div>\n            <div class=\"rw-r\">$1.25M<span class=\"pct\">8.8%</span></div>\n          </div>\n          <div class=\"runway-row\">\n            <div>\n              <div class=\"rw-l\">IO · Operations<div class=\"sub\">Sub-account</div></div>\n              <div class=\"rw-bar\"><span style=\"width:2.2%;background:#c1b8fa\"></span></div>\n            </div>\n            <div class=\"rw-r\">$0.31M<span class=\"pct\">2.1%</span></div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- TRANSACTIONS -->\n    <div class=\"card tx-card\">\n      <div class=\"card-h\">\n        <div>\n          <h3>Recent transactions</h3>\n          <div class=\"sub\">Last 7 days · 18 of 247 records</div>\n        </div>\n        <div style=\"display:flex;gap:8px\">\n          <button class=\"btn ghost\">\n            <svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M3 4h10M5 8h6M7 12h2\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>\n            Filter\n          </button>\n          <button class=\"btn ghost\">View all →</button>\n        </div>\n      </div>\n      <div class=\"tx-toolbar\">\n        <button class=\"chip active\">All <span class=\"n\">18</span></button>\n        <button class=\"chip\">Incoming <span class=\"n\">7</span></button>\n        <button class=\"chip\">Outgoing <span class=\"n\">9</span></button>\n        <button class=\"chip\">Internal <span class=\"n\">2</span></button>\n        <span class=\"spacer\"></span>\n        <button class=\"chip\">May 06 — May 12</button>\n        <button class=\"chip\">All accounts</button>\n      </div>\n\n      <table class=\"tx\">\n        <thead>\n          <tr>\n            <th style=\"width:30px\"></th>\n            <th>Description</th>\n            <th>Account</th>\n            <th>Date</th>\n            <th>Status</th>\n            <th style=\"text-align:right\">Amount</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><input type=\"checkbox\" style=\"accent-color:var(--p-500)\"></td>\n            <td>\n              <div class=\"tx-merch\">\n                <div class=\"tx-logo\" style=\"background:#1f8aff\">▲</div>\n                <div><div class=\"tx-name\">Stripe payouts</div><div class=\"tx-cat\">Revenue · ACH</div></div>\n              </div>\n            </td>\n            <td><span class=\"acc-mini\">Checking ··2104</span></td>\n            <td class=\"mono\">May 12, 09:42</td>\n            <td><span class=\"status-pill ok\">Cleared</span></td>\n            <td class=\"amt pos\">+$84,210<span class=\"frac\">.55</span></td>\n          </tr>\n          <tr>\n            <td><input type=\"checkbox\" style=\"accent-color:var(--p-500)\"></td>\n            <td>\n              <div class=\"tx-merch\">\n                <div class=\"tx-logo\" style=\"background:#0f0f10\">A</div>\n                <div><div class=\"tx-name\">AWS · us-east-1</div><div class=\"tx-cat\">Infrastructure</div></div>\n              </div>\n            </td>\n            <td><span class=\"acc-mini\">Checking ··2104</span></td>\n            <td class=\"mono\">May 12, 04:08</td>\n            <td><span class=\"status-pill ok\">Cleared</span></td>\n            <td class=\"amt neg\">−$18,402<span class=\"frac\">.10</span></td>\n          </tr>\n          <tr>\n            <td><input type=\"checkbox\" style=\"accent-color:var(--p-500)\"></td>\n            <td>\n              <div class=\"tx-merch\">\n                <div class=\"tx-logo\" style=\"background:#5d4ee0\">G</div>\n                <div><div class=\"tx-name\">Gusto · Payroll</div><div class=\"tx-cat\">Salaries · 42 employees</div></div>\n              </div>\n            </td>\n            <td><span class=\"acc-mini\">Checking ··2104</span></td>\n            <td class=\"mono\">May 11, 23:00</td>\n            <td><span class=\"status-pill pend\">Pending</span></td>\n            <td class=\"amt neg\">−$214,180<span class=\"frac\">.00</span></td>\n          </tr>\n          <tr>\n            <td><input type=\"checkbox\" style=\"accent-color:var(--p-500)\"></td>\n            <td>\n              <div class=\"tx-merch\">\n                <div class=\"tx-logo\" style=\"background:#f57c2c\">N</div>\n                <div><div class=\"tx-name\">Notion Labs</div><div class=\"tx-cat\">SaaS · annual</div></div>\n              </div>\n            </td>\n            <td><span class=\"acc-mini\">IO ··0044</span></td>\n            <td class=\"mono\">May 11, 16:21</td>\n            <td><span class=\"status-pill ok\">Cleared</span></td>\n            <td class=\"amt neg\">−$4,800<span class=\"frac\">.00</span></td>\n          </tr>\n          <tr>\n            <td><input type=\"checkbox\" style=\"accent-color:var(--p-500)\"></td>\n            <td>\n              <div class=\"tx-merch\">\n                <div class=\"tx-logo\" style=\"background:#16a34a\">L</div>\n                <div><div class=\"tx-name\">Linear, Inc.</div><div class=\"tx-cat\">SaaS · monthly</div></div>\n              </div>\n            </td>\n            <td><span class=\"acc-mini\">IO ··0044</span></td>\n            <td class=\"mono\">May 10, 11:02</td>\n            <td><span class=\"status-pill ok\">Cleared</span></td>\n            <td class=\"amt neg\">−$2,388<span class=\"frac\">.00</span></td>\n          </tr>\n          <tr>\n            <td><input type=\"checkbox\" style=\"accent-color:var(--p-500)\"></td>\n            <td>\n              <div class=\"tx-merch\">\n                <div class=\"tx-logo\" style=\"background:#0a0a0a\">V</div>\n                <div><div class=\"tx-name\">Vanguard Treasury MM</div><div class=\"tx-cat\">Yield interest</div></div>\n              </div>\n            </td>\n            <td><span class=\"acc-mini\">Treasury</span></td>\n            <td class=\"mono\">May 09, 23:59</td>\n            <td><span class=\"status-pill ok\">Cleared</span></td>\n            <td class=\"amt pos\">+$36,914<span class=\"frac\">.20</span></td>\n          </tr>\n          <tr>\n            <td><input type=\"checkbox\" style=\"accent-color:var(--p-500)\"></td>\n            <td>\n              <div class=\"tx-merch\">\n                <div class=\"tx-logo\" style=\"background:#dc2626\">F</div>\n                <div><div class=\"tx-name\">Figma, Inc.</div><div class=\"tx-cat\">Design seats × 28</div></div>\n              </div>\n            </td>\n            <td><span class=\"acc-mini\">IO ··0044</span></td>\n            <td class=\"mono\">May 09, 10:45</td>\n            <td><span class=\"status-pill fail\">Returned</span></td>\n            <td class=\"amt neg\">−$1,260<span class=\"frac\">.00</span></td>\n          </tr>\n          <tr>\n            <td><input type=\"checkbox\" style=\"accent-color:var(--p-500)\"></td>\n            <td>\n              <div class=\"tx-merch\">\n                <div class=\"tx-logo\" style=\"background:#7c3aed\">A</div>\n                <div><div class=\"tx-name\">Acme Capital · wire</div><div class=\"tx-cat\">Series B · tranche 2</div></div>\n              </div>\n            </td>\n            <td><span class=\"acc-mini\">Treasury</span></td>\n            <td class=\"mono\">May 08, 15:30</td>\n            <td><span class=\"status-pill ok\">Cleared</span></td>\n            <td class=\"amt pos\">+$2,500,000<span class=\"frac\">.00</span></td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div class=\"tx-foot\">\n        <span>Showing 1–8 of 247 transactions</span>\n        <div class=\"pager\">\n          <button class=\"pg\">‹</button>\n          <button class=\"pg on\">1</button>\n          <button class=\"pg\">2</button>\n          <button class=\"pg\">3</button>\n          <span style=\"padding:0 6px;color:var(--mute-2)\">…</span>\n          <button class=\"pg\">31</button>\n          <button class=\"pg\">›</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- BOTTOM: payees + approvals -->\n    <div class=\"bottom-grid\">\n      <div class=\"card\">\n        <div class=\"card-h\">\n          <div><h3>Top payees</h3><div class=\"sub\">Last 30 days</div></div>\n          <button class=\"btn ghost\">Manage payees</button>\n        </div>\n        <div class=\"payee-list\">\n          <div class=\"payee-row\">\n            <span class=\"payee-av\" style=\"background:linear-gradient(135deg,#5d4ee0,#9a8df5)\">GS</span>\n            <div>\n              <div class=\"payee-name\">Gusto · Payroll Services</div>\n              <div class=\"payee-meta\">Routing 322271627 · 5 transfers</div>\n            </div>\n            <div class=\"payee-amt mono\">−$642,540<span class=\"ago\">3d ago</span></div>\n          </div>\n          <div class=\"payee-row\">\n            <span class=\"payee-av\" style=\"background:linear-gradient(135deg,#0f0f10,#3a3a44)\">AWS</span>\n            <div>\n              <div class=\"payee-name\">Amazon Web Services</div>\n              <div class=\"payee-meta\">Routing 121000358 · 4 transfers</div>\n            </div>\n            <div class=\"payee-amt mono\">−$72,108<span class=\"ago\">17h ago</span></div>\n          </div>\n          <div class=\"payee-row\">\n            <span class=\"payee-av\" style=\"background:linear-gradient(135deg,#16a34a,#4ade80)\">LN</span>\n            <div>\n              <div class=\"payee-name\">Linear, Inc.</div>\n              <div class=\"payee-meta\">SaaS subscription · monthly</div>\n            </div>\n            <div class=\"payee-amt mono\">−$2,388<span class=\"ago\">2d ago</span></div>\n          </div>\n          <div class=\"payee-row\">\n            <span class=\"payee-av\" style=\"background:linear-gradient(135deg,#dc2626,#fb923c)\">FG</span>\n            <div>\n              <div class=\"payee-name\">Figma, Inc.</div>\n              <div class=\"payee-meta\">28 design seats · ACH</div>\n            </div>\n            <div class=\"payee-amt mono\">−$1,260<span class=\"ago\">3d ago</span></div>\n          </div>\n          <div class=\"payee-row\">\n            <span class=\"payee-av\" style=\"background:linear-gradient(135deg,#1f8aff,#60a5fa)\">ST</span>\n            <div>\n              <div class=\"payee-name\">Stripe Inc.</div>\n              <div class=\"payee-meta\">Revenue inflow · ACH</div>\n            </div>\n            <div class=\"payee-amt mono\" style=\"color:var(--pos)\">+$1,184,210<span class=\"ago\">today</span></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"card-h\">\n          <div><h3>Needs your attention</h3><div class=\"sub\">3 items</div></div>\n          <button class=\"btn ghost\">Settings</button>\n        </div>\n        <div class=\"todo-list\">\n          <div class=\"todo-row\">\n            <div class=\"todo-icon warn\">\n              <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M8 1.5 1 14h14L8 1.5Z\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/><path d=\"M8 6v4M8 12.5h.01\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\"/></svg>\n            </div>\n            <div>\n              <div class=\"todo-title\">Wire transfer requires approval</div>\n              <div class=\"todo-sub\">Acme Capital · $250,000.00 · waiting on Sarah K.</div>\n            </div>\n            <button class=\"todo-act\">Review</button>\n          </div>\n          <div class=\"todo-row\">\n            <div class=\"todo-icon purple\">\n              <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\"><rect x=\"2\" y=\"4\" width=\"12\" height=\"9\" rx=\"1.2\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M2 7h12\" stroke=\"currentColor\" stroke-width=\"1.4\"/></svg>\n            </div>\n            <div>\n              <div class=\"todo-title\">3 cards expire in 30 days</div>\n              <div class=\"todo-sub\">Marketing · Engineering · Operations virtual cards</div>\n            </div>\n            <button class=\"todo-act\">Reissue</button>\n          </div>\n          <div class=\"todo-row\">\n            <div class=\"todo-icon info\">\n              <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\"><circle cx=\"8\" cy=\"8\" r=\"6\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M8 5v3.5L10.5 10\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\"/></svg>\n            </div>\n            <div>\n              <div class=\"todo-title\">May statement is ready</div>\n              <div class=\"todo-sub\">All 4 accounts · 247 transactions · $14.2M closing balance</div>\n            </div>\n            <button class=\"todo-act\">Download</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- skill footer -->\n    <div class=\"skill-foot\">\n      <span class=\"pip\">SKILL</span>\n      Designed with <b>ihlamury/design-skills · mercury-ui-skills</b> · 4px grid · Inter · Mercury light palette · purple CTA\n      <code style=\"margin-left:auto\">npx skills add ihlamury/design-skills --skill mercury-ui-skills</code>\n    </div>\n\n  </main>\n</div>\n\n<script>\n/* ------------------------------------------------------------------\n   Motion runtime\n   - Count-up KPI numbers\n   - Live \"last sync\" ticker\n   - Subtle 3D tilt on hover (KPI + cards)\n   - Tab toggle / chip toggle\n   - Tx row \"fresh\" insertion (every 18s, capped)\n------------------------------------------------------------------ */\n\n/* ---------- 1. Count-up ---------- */\nfunction countUp(el){\n  const to=parseFloat(el.dataset.to||'0');\n  const fmt=el.dataset.format||'int';\n  const dur=1100+Math.random()*400;\n  const start=performance.now();\n  const ease=t=>1-Math.pow(1-t,3); // easeOutCubic\n  function tick(now){\n    const p=Math.min(1,(now-start)/dur);\n    const v=to*ease(p);\n    if(fmt==='comma') el.textContent=Math.round(v).toLocaleString('en-US');\n    else if(fmt==='pct') el.textContent=v.toFixed(2);\n    else el.textContent=Math.round(v);\n    if(p<1) requestAnimationFrame(tick);\n    else {\n      if(fmt==='comma') el.textContent=to.toLocaleString('en-US');\n      else if(fmt==='pct') el.textContent=to.toFixed(2);\n      else el.textContent=String(to);\n    }\n  }\n  requestAnimationFrame(tick);\n}\nfunction startCountUps(){\n  document.querySelectorAll('.num[data-to]').forEach((el,i)=>{\n    setTimeout(()=>countUp(el),200+i*80);\n  });\n}\n\n/* ---------- 2. Last sync ticker ---------- */\nlet syncSeconds=2;\nfunction tickSync(){\n  syncSeconds++;\n  const el=document.getElementById('last-sync');\n  if(el){\n    const m=Math.floor(syncSeconds/60), s=syncSeconds%60;\n    el.textContent='last sync '+(m? m+':' : '00:')+String(s).padStart(2,'0')+' ago';\n  }\n}\nsetInterval(tickSync,1000);\n\n/* ---------- 3. Subtle hover tilt on KPI / cards ---------- */\nfunction bindTilt(sel,maxDeg=2.4){\n  document.querySelectorAll(sel).forEach(card=>{\n    let raf=null;\n    card.addEventListener('mousemove',e=>{\n      const r=card.getBoundingClientRect();\n      const px=(e.clientX-r.left)/r.width-.5;\n      const py=(e.clientY-r.top)/r.height-.5;\n      cancelAnimationFrame(raf);\n      raf=requestAnimationFrame(()=>{\n        card.style.transform=`translateY(-2px) rotateX(${(-py*maxDeg).toFixed(2)}deg) rotateY(${(px*maxDeg).toFixed(2)}deg)`;\n      });\n    });\n    card.addEventListener('mouseleave',()=>{\n      card.style.transform='';\n    });\n  });\n  document.querySelectorAll(sel).forEach(c=>{\n    c.style.transformStyle='preserve-3d';\n    c.style.willChange='transform';\n  });\n}\nbindTilt('.kpi',3);\nbindTilt('.dual-grid > .card',1.4);\n\n/* ---------- 4. Tab + chip toggle ---------- */\ndocument.querySelectorAll('.tabs').forEach(g=>{\n  g.addEventListener('click',e=>{\n    const b=e.target.closest('button'); if(!b) return;\n    g.querySelectorAll('button').forEach(x=>x.classList.remove('on'));\n    b.classList.add('on');\n    // re-trigger chart-line draw\n    document.querySelectorAll('.chart-line,.chart-line-cmp,.chart-area').forEach(p=>{\n      p.style.animation='none';\n      void p.getBoundingClientRect();\n      p.style.animation='';\n    });\n  });\n});\ndocument.querySelectorAll('.tx-toolbar').forEach(t=>{\n  t.addEventListener('click',e=>{\n    const c=e.target.closest('.chip'); if(!c) return;\n    const isFilter=['All','Incoming','Outgoing','Internal'].some(k=>c.textContent.trim().startsWith(k));\n    if(!isFilter) return;\n    t.querySelectorAll('.chip').forEach(x=>{\n      const isF=['All','Incoming','Outgoing','Internal'].some(k=>x.textContent.trim().startsWith(k));\n      if(isF) x.classList.remove('active');\n    });\n    c.classList.add('active');\n  });\n});\n\n/* ---------- 5. Simulate a fresh transaction every ~22s ---------- */\nconst SAMPLE_TX=[\n  {logo:'#1a73e8',short:'GO',name:'Google Cloud',cat:'Infrastructure · Software',amt:'−2,418.92',acc:'Operating',status:'ok',statusText:'Settled',time:'just now'},\n  {logo:'#0a66c2',short:'LI',name:'LinkedIn Recruiter',cat:'Hiring · Subscription',amt:'−1,650.00',acc:'Operating',status:'ok',statusText:'Settled',time:'just now'},\n  {logo:'#5d4ee0',short:'ST',name:'Stripe payout',cat:'Revenue · Incoming',amt:'+12,840.55',amtPos:true,acc:'Treasury',status:'ok',statusText:'Settled',time:'just now'},\n  {logo:'#d9482d',short:'AW',name:'AWS · us-east-1',cat:'Infrastructure · Compute',amt:'−4,210.00',acc:'Operating',status:'pend',statusText:'Pending',time:'just now'},\n  {logo:'#0e8f6e',short:'NO',name:'Notion Labs',cat:'SaaS · Annual renewal',amt:'−3,600.00',acc:'Operating',status:'ok',statusText:'Settled',time:'just now'}\n];\nlet txCounter=0;\nfunction injectTx(){\n  const tbody=document.querySelector('table.tx tbody');\n  if(!tbody) return;\n  const t=SAMPLE_TX[txCounter%SAMPLE_TX.length]; txCounter++;\n  const tr=document.createElement('tr');\n  tr.classList.add('fresh');\n  tr.innerHTML=`\n    <td><span class=\"mono\" style=\"color:var(--mute);font-size:11px\">${new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false})}</span></td>\n    <td>\n      <div class=\"tx-merch\">\n        <div class=\"tx-logo\" style=\"background:${t.logo}\">${t.short}</div>\n        <div>\n          <div class=\"tx-name\">${t.name}</div>\n          <div class=\"tx-cat\">${t.cat}</div>\n        </div>\n      </div>\n    </td>\n    <td><span class=\"acc-mini\">${t.acc}</span></td>\n    <td><span class=\"amt ${t.amtPos?'pos':'neg'}\">${t.amt}</span></td>\n    <td><span class=\"status-pill ${t.status}\">${t.statusText}</span></td>\n    <td><span class=\"mono\" style=\"color:var(--mute);font-size:11px\">${t.time}</span></td>\n  `;\n  tbody.insertBefore(tr,tbody.firstChild);\n  // keep table size sane\n  while(tbody.children.length>9) tbody.removeChild(tbody.lastChild);\n  // sync flash\n  syncSeconds=0;\n}\nsetTimeout(()=>{\n  injectTx();\n  setInterval(injectTx, 22000);\n},6000);\n\n/* ---------- 6. Boot ---------- */\nwindow.addEventListener('load',()=>{\n  startCountUps();\n});\nif(document.readyState!=='loading') startCountUps();\n</script>\n</body>\n</html>\n";
function mercuryTreasuryDoc(p){
  var headline=(p&&p.headline)||'Good afternoon, Lingfeng.';
  var sub=(p&&p.sub)||'Tuesday, May 12, 2026 · All accounts in USD';
  var html=MERCURY_TREASURY_HTML;
  // 注入 headline / sub —— 替换原静态文本
  html=html.replace('<h1>Good afternoon, Lingfeng.</h1>','<h1>'+escHtml(headline)+'</h1>');
  html=html.replace('<div class="sub">Tuesday, May 12, 2026 · All accounts in USD</div>','<div class="sub">'+escHtml(sub)+'</div>');
  return html;
}
/* ===== MERCURY_TREASURY_END ===== */

const TEMPLATES = [

  // ★ CEILING 0. Retro ASCII CRT Terminal — 完整终端仪表盘单卡（仅在 retro-ascii token 抽到）
  (p,t)=>{
    return { title:'Retro ASCII Terminal', height:720, doc: retroAsciiDoc(p), styleLock:'retro-ascii' };
  },

  // ★ CEILING 6. Nothing Mobile — Now Playing 移动端 ceiling（仅在 nothing-mobile token 抽到）
  (p,t)=>{
    return { title:'Nothing · Now Playing', height:720, doc: nothingMobileDoc(p), styleLock:'nothing-mobile' };
  },

  // ★ CEILING 3. Nothing System Bento — 完整 dashboard 作为单卡（仅在 nothing token 抽到）
  (p,t)=>{
    return { title:'Nothing System Grid', height:720, doc: nothingDashboardDoc(p), styleLock:'nothing' };
  },

  // ★ CEILING 4. Mercury Banking Bento — 完整银行 dashboard（仅在 mercury token 抽到）
  (p,t)=>{
    return { title:'Mercury Operating Account', height:720, doc: mercuryTreasuryDoc(p), styleLock:'mercury' };
  },

  // ★ CEILING 5. Linear Ceiling — Active Cycle 工作台（仅在 linear token 抽到）
  (p,t)=>{
    return { title:'Linear · Active cycle', height:720, doc: linearCeilingDoc(p), styleLock:'linear' };
  },

  // ★ CEILING 6. Marginalia — Post Post Hotel 风格 editorial warm 三卡片错叠（仅在 editorial token 抽到）
  (p,t)=>{
    const h=720;
    const headline = (p&&p.headline)||'For cosy days';
    const words = headline.split(/\s+/);
    const line1 = words.slice(0,-1).join(' ')||'For cosy';
    const line2 = words[words.length-1]||'days';
    const doc = `<!doctype html><html><head><meta charset="utf-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#EFEBE2;width:1100px;height:${h}px;overflow:hidden;font-family:'Fraunces',serif;-webkit-font-smoothing:antialiased}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='5'/><feColorMatrix values='0 0 0 0 0.10  0 0 0 0 0.085  0 0 0 0 0.07  0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");mix-blend-mode:multiply;opacity:.8;pointer-events:none;z-index:0}
.wrap{position:relative;width:1100px;height:${h}px;display:flex;align-items:center;justify-content:center;z-index:1}
.obj{position:absolute;border-radius:4px;box-shadow:0 28px 64px -18px rgba(26,22,18,.2),0 10px 22px -10px rgba(26,22,18,.14)}
.pc{width:340px;height:460px;background:#D8A93C;left:120px;top:calc(50% - 250px);transform:rotate(-1.5deg);z-index:3;padding:36px 38px;display:flex;flex-direction:column}
.pc .cut{position:absolute;top:-1px;left:50%;transform:translateX(-50%);width:72px;height:36px;background:#EFEBE2;border-radius:0 0 999px 999px}
.pc .eye{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:rgba(26,22,18,.62);margin-bottom:32px}
.pc h1{font-weight:400;font-size:58px;line-height:.92;letter-spacing:-.025em;color:#1A1612;font-variation-settings:"opsz" 144}
.pc h1 em{font-style:italic;display:block;margin-top:4px;font-size:54px}
.pc .mid{flex:1}
.pc .foot{font-style:italic;font-weight:400;font-size:38px;color:#1A1612;line-height:.9;letter-spacing:-.02em;font-variation-settings:"opsz" 144}
.pc .foot .at{font-style:normal;font-size:28px;display:block;margin-bottom:4px}
.seal{position:absolute;bottom:28px;right:28px;width:50px;height:50px;border-radius:50%;background:#1A1612;z-index:4;display:flex;align-items:center;justify-content:center}
.seal svg{width:22px;height:22px;color:#D8A93C}
.env{width:260px;height:440px;background:#B5552B;left:380px;top:calc(50% - 230px);transform:rotate(1.4deg);z-index:2;overflow:hidden}
.env .spine{position:absolute;top:0;bottom:0;right:36px;display:flex;align-items:center;justify-content:center}
.env .spine span{writing-mode:vertical-rl;transform:rotate(180deg);font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:.42em;text-transform:uppercase;color:rgba(239,235,226,.78);white-space:nowrap}
.rc{width:380px;height:520px;background:#C9C2B2;left:620px;top:calc(50% - 270px);transform:rotate(2.4deg);z-index:1;padding:80px 36px 60px 56px;display:flex;flex-direction:column}
.rc .perf{position:absolute;top:20px;bottom:20px;left:36px;width:1px;background-image:linear-gradient(to bottom,#5C544A 50%,transparent 50%);background-size:1px 6px;background-repeat:repeat-y;opacity:.4}
.rc .stamp{position:absolute;top:28px;right:32px;width:72px;height:72px;border:1px dashed #5C544A;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-family:'JetBrains Mono',monospace;font-size:7.5px;letter-spacing:.18em;text-transform:uppercase;color:#5C544A;line-height:1.5}
.rc .stamp b{font-size:8.5px;font-weight:500;color:#1A1612;margin-top:3px;display:block}
.rc .row{margin-bottom:28px}
.rc .row label{display:block;font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:#5C544A;margin-bottom:10px}
.rc .row .val{font-family:'Fraunces',serif;font-weight:400;font-size:22px;letter-spacing:-.01em;color:#1A1612;padding-bottom:6px;border-bottom:1px solid #8B8275;font-variation-settings:"opsz" 72;line-height:1.05}
.rc .tear{position:absolute;left:36px;right:24px;bottom:28px;font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:#8B8275;display:flex;align-items:center;justify-content:space-between}
.rc .tearline{position:absolute;left:36px;right:24px;bottom:42px;height:1px;background-image:linear-gradient(to right,#8B8275 50%,transparent 50%);background-size:6px 1px;background-repeat:repeat-x;opacity:.5}
</style></head><body>
<div class="wrap">
  <article class="obj pc">
    <div class="cut"></div>
    <div class="eye">Editor's letter · 14 min</div>
    <h1>${escHtml(line1)}<em>${escHtml(line2)}</em></h1>
    <div class="mid"></div>
    <div class="foot"><span class="at">at</span><em>Marginalia</em></div>
    <div class="seal"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="10"/><circle cx="12" cy="14" r="1.2" fill="currentColor" stroke="none"/><circle cx="20" cy="14" r="1.2" fill="currentColor" stroke="none"/><path d="M11 20 Q16 24 21 20"/></svg></div>
  </article>
  <article class="obj env">
    <div class="spine"><span>TEL +45 (0) 33 14 · MAIL post@marginalia.press · DK</span></div>
  </article>
  <article class="obj rc">
    <div class="perf"></div>
    <div class="stamp">Official<br/>receipt<br/><b>No. 992</b></div>
    <div class="row"><label>Reader</label><div class="val">Elena V. Rostova</div></div>
    <div class="row"><label>Issue</label><div class="val">Vol VII · Spring 26</div></div>
    <div class="row"><label>Delivered</label><div class="val">12 May 2026</div></div>
    <div class="tearline"></div>
    <div class="tear"><span>Tear here for receipt</span></div>
  </article>
</div>
</body></html>`;
    return { title:'Marginalia · editorial warm', height:h, doc, styleLock:'marginalia' };
  },
  // ★ CEILING 1. Magazine Editorial — 衬线巨字 + 偏移网格 + 颗粒
  (p,t)=>{const h=620;
    const issue = String(Math.floor(Math.random()*40)+1).padStart(2,'0');
    const vol = 'VOL. ' + (Math.floor(Math.random()*9)+1) + ' / N°' + issue;
    const dateStr = '05.10.2026';
    // 把 headline 按空格切成 1~3 行，做成竖向堆叠
    const words = (p.headline||'Design DNA').split(/\s+/).filter(Boolean);
    const lines = words.length<=1 ? [words[0]||'Issue'] : (words.length<=3 ? words : [words.slice(0, Math.ceil(words.length/2)).join(' '), words.slice(Math.ceil(words.length/2)).join(' ')]);
    const giantLines = lines.map((w,i)=>`<span style="display:block;transform:translateX(${i%2?'14px':'0'});line-height:.86">${escHtml(w)}</span>`).join('');
    const body = `
<div class="mag-wrap">
  <svg class="grain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0"/></filter>
    <rect width="100%" height="100%" filter="url(#n)"/>
  </svg>

  <!-- 顶部刊头 -->
  <header class="mag-head">
    <div class="mag-mast">THE DESIGN DNA</div>
    <div class="mag-meta">${vol} &nbsp;·&nbsp; ${dateStr}</div>
  </header>

  <!-- 12 栏背景参考线 -->
  <div class="mag-grid" aria-hidden="true">
    ${Array.from({length:13}).map(()=>'<i></i>').join('')}
  </div>

  <!-- 主标题（超大衬线） -->
  <h1 class="mag-title">${giantLines}</h1>

  <!-- 副文 + 落款行 -->
  <div class="mag-body">
    <div class="mag-lede"><span class="drop">A</span>${escHtml(p.sub||'An essay on taste, tension, and the quiet violence of a well-set page.')}</div>
    <div class="mag-byline">
      <span>By <b>L. Sorensen</b></span>
      <span class="sep">·</span>
      <span>Photography — Atelier Noir</span>
      <span class="sep">·</span>
      <span>pp. 014—031</span>
    </div>
  </div>

  <!-- 底部索引条 -->
  <footer class="mag-foot">
    <span>§ 01  &nbsp; Form</span>
    <span>§ 02  &nbsp; Material</span>
    <span>§ 03  &nbsp; Rhythm</span>
    <span class="mag-page">014</span>
  </footer>
</div>

<style>
  body{background:${t.bg};color:${t.ink}}
  .mag-wrap{position:relative;width:100%;height:${h}px;padding:26px 28px 24px;overflow:hidden;font-family:${t.sans}}
  .grain{position:absolute;inset:0;width:100%;height:100%;mix-blend-mode:multiply;opacity:.38;pointer-events:none;z-index:2}
  .mag-head{display:flex;justify-content:space-between;align-items:baseline;border-bottom:.8px solid ${t.ink};padding-bottom:10px;font-family:'Inter Tight','Inter',system-ui;font-size:10.5px;letter-spacing:.22em;text-transform:uppercase}
  .mag-mast{font-weight:600}
  .mag-meta{color:${t.muted};font-feature-settings:"tnum"}
  .mag-grid{position:absolute;inset:60px 28px 70px;display:grid;grid-template-columns:repeat(12,1fr);pointer-events:none;opacity:.08;z-index:1}
  .mag-grid i{border-left:.5px solid ${t.ink}}
  .mag-grid i:last-child{border-right:.5px solid ${t.ink}}
  .mag-title{position:relative;z-index:3;margin:28px 0 0;font-family:"Fraunces","Cormorant Garamond",Georgia,serif;font-weight:400;font-style:italic;font-size:clamp(68px, 16vw, 132px);letter-spacing:-0.045em;line-height:.88;color:${t.ink}}
  .mag-title span:nth-child(2){font-style:normal;font-weight:500}
  .mag-title span:nth-child(3){font-style:italic;opacity:.55;letter-spacing:-.03em}
  .mag-body{position:relative;z-index:3;display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:32px;padding-top:16px;border-top:.8px solid ${t.ink}}
  .mag-lede{font-family:"Fraunces",Georgia,serif;font-size:14px;line-height:1.55;color:${t.ink};column-count:1}
  .drop{float:left;font-family:"Fraunces",Georgia,serif;font-size:52px;line-height:.82;margin:4px 8px -4px 0;font-weight:500;font-style:normal;color:${t.accent}}
  .mag-byline{font-family:'Inter Tight','Inter',system-ui;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:${t.muted};align-self:end;display:flex;flex-wrap:wrap;gap:6px 10px}
  .mag-byline b{color:${t.ink};font-weight:500}
  .mag-byline .sep{color:${t.line}}
  .mag-foot{position:absolute;left:28px;right:28px;bottom:18px;display:flex;gap:18px;align-items:center;border-top:.5px solid ${t.ink};padding-top:10px;font-family:'Inter Tight',system-ui;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:${t.muted};z-index:3}
  .mag-foot .mag-page{margin-left:auto;font-family:"Fraunces",Georgia,serif;font-style:italic;font-size:16px;letter-spacing:0;color:${t.ink};text-transform:none}
</style>`;
    const js = `/* static piece, no interactivity */`;
    return {title:`${p.headline} — an essay`, height:h, doc:shell(t, body, js, h)}},

  // ★ CEILING 2. Nothing Schematic — 工程图 + 点阵 + 半透明蓝图
  (p,t)=>{const h=560;
    const partNo = 'P/' + Math.random().toString(36).slice(2,6).toUpperCase() + '-' + (Math.floor(Math.random()*90)+10);
    const batch = 'BATCH 24/' + String(Math.floor(Math.random()*300)).padStart(3,'0');
    const body = `
<div class="n-wrap">
  <!-- 背景点阵 -->
  <div class="n-dots"></div>
  <!-- 扫描线 -->
  <div class="n-scan"></div>

  <!-- 左上：型号 / 批次 -->
  <div class="n-hud n-tl">
    <div class="k">MODEL</div><div class="v">${escHtml((p.headline||'NULL').toUpperCase().slice(0,18))}</div>
    <div class="k" style="margin-top:10px">PART</div><div class="v mono">${partNo}</div>
  </div>
  <!-- 右上：状态 LED -->
  <div class="n-hud n-tr">
    <div class="led"><i></i> SYS · LIVE</div>
    <div class="k" style="margin-top:8px">${batch}</div>
  </div>

  <!-- 中央：工程线稿圆 -->
  <svg class="n-svg" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${t.accent}" stop-opacity=".25"/>
        <stop offset="60%" stop-color="${t.accent}" stop-opacity="0"/>
      </radialGradient>
      <pattern id="pdots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="${t.ink}" opacity=".6"/>
      </pattern>
    </defs>
    <circle cx="200" cy="160" r="130" fill="url(#glow)"/>
    <!-- 外环工程刻度 -->
    <g stroke="${t.ink}" stroke-width=".8" fill="none" opacity=".75">
      <circle cx="200" cy="160" r="128"/>
      <circle cx="200" cy="160" r="100" stroke-dasharray="2 4"/>
      <circle cx="200" cy="160" r="72"/>
      <circle cx="200" cy="160" r="44" stroke-dasharray="1 3"/>
    </g>
    <!-- 刻度线 -->
    <g id="ticks" stroke="${t.ink}" stroke-width=".8"></g>
    <!-- 点阵填充的内圆 -->
    <circle cx="200" cy="160" r="44" fill="url(#pdots)" opacity=".85"/>
    <!-- 十字准星 -->
    <g stroke="${t.accent}" stroke-width="1">
      <line x1="60" y1="160" x2="340" y2="160" stroke-dasharray="4 4" opacity=".55"/>
      <line x1="200" y1="30" x2="200" y2="290" stroke-dasharray="4 4" opacity=".55"/>
      <circle cx="200" cy="160" r="3" fill="${t.accent}" stroke="none"/>
    </g>
    <!-- 标注线 -->
    <g stroke="${t.ink}" stroke-width=".7" fill="${t.ink}" font-family="ui-monospace, 'Space Mono', monospace" font-size="9">
      <line x1="200" y1="160" x2="330" y2="70"/>
      <circle cx="330" cy="70" r="2" fill="${t.ink}"/>
      <text x="336" y="68">CORE · ø 88</text>
      <line x1="200" y1="160" x2="72" y2="244"/>
      <circle cx="72" cy="244" r="2" fill="${t.ink}"/>
      <text x="14" y="258">ROT 0.0175 rad/s</text>
    </g>
  </svg>

  <!-- 底部数据行 -->
  <div class="n-foot">
    <div><span class="k">POWER</span><span class="v mono"><i class="bar"><i style="width:72%"></i></i> 72%</span></div>
    <div><span class="k">TEMP</span><span class="v mono">36.8°C</span></div>
    <div><span class="k">CYCLE</span><span class="v mono" id="cyc">00000</span></div>
    <div class="n-sub">${escHtml(p.sub||'A study of nothing, rendered in dots and silence.')}</div>
  </div>
</div>

<style>
  body{background:#0A0A0A;color:#fff;font-family:"Space Grotesk","Inter Tight",system-ui}
  .n-wrap{position:relative;width:100%;height:${h}px;overflow:hidden;background:
    radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,.05), rgba(0,0,0,0) 60%),
    #0A0A0A}
  .n-dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.22) 1px, transparent 1.2px);background-size:14px 14px;opacity:.35;pointer-events:none}
  .n-scan{position:absolute;inset:0;background:repeating-linear-gradient(to bottom, rgba(255,255,255,0) 0 2px, rgba(255,255,255,.03) 2px 3px);pointer-events:none;mix-blend-mode:screen}
  .n-hud{position:absolute;z-index:3;font-family:"Space Mono",ui-monospace,monospace;color:#fff}
  .n-tl{top:18px;left:20px}
  .n-tr{top:18px;right:20px;text-align:right}
  .n-hud .k{font-size:9.5px;letter-spacing:.22em;color:#8A8A8A;text-transform:uppercase}
  .n-hud .v{font-size:14px;letter-spacing:.01em;color:#fff;margin-top:2px}
  .n-hud .v.mono{font-family:"Space Mono",ui-monospace,monospace;font-size:12px}
  .led{display:inline-flex;align-items:center;gap:6px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;padding:4px 8px;border:.8px solid #1F1F1F;border-radius:2px;background:#000}
  .led i{width:6px;height:6px;border-radius:50%;background:${t.accent||'#D71921'};box-shadow:0 0 8px ${t.accent||'#D71921'};animation:blink 1.4s ease-in-out infinite}
  @keyframes blink{0%,70%,100%{opacity:1}80%{opacity:.25}}
  .n-svg{position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);width:88%;height:auto;z-index:2}
  .n-foot{position:absolute;left:20px;right:20px;bottom:16px;display:grid;grid-template-columns:auto auto auto 1fr;gap:18px;align-items:end;z-index:3;border-top:.5px solid #1F1F1F;padding-top:10px}
  .n-foot .k{display:block;font-family:"Space Mono",monospace;font-size:9px;letter-spacing:.22em;color:#8A8A8A;text-transform:uppercase;margin-bottom:2px}
  .n-foot .v{font-family:"Space Mono",monospace;font-size:12px;color:#fff;display:inline-flex;align-items:center;gap:6px}
  .bar{display:inline-block;width:60px;height:4px;background:#1F1F1F;border-radius:1px;overflow:hidden;position:relative;top:-1px}
  .bar i{display:block;height:100%;background:${t.accent||'#D71921'}}
  .n-sub{justify-self:end;font-family:"Space Mono",monospace;font-size:10px;letter-spacing:.08em;color:#8A8A8A;text-align:right;max-width:200px;line-height:1.5}
</style>`;
    const js = `
      // 外环刻度
      var ticks = document.getElementById('ticks');
      if (ticks) {
        var svgNS='http://www.w3.org/2000/svg';
        for (var i=0;i<60;i++){
          var a = i*(Math.PI*2/60);
          var r1 = 128, r2 = i%5===0 ? 118 : 123;
          var x1 = 200 + Math.cos(a)*r1, y1 = 160 + Math.sin(a)*r1;
          var x2 = 200 + Math.cos(a)*r2, y2 = 160 + Math.sin(a)*r2;
          var line = document.createElementNS(svgNS,'line');
          line.setAttribute('x1',x1.toFixed(1));line.setAttribute('y1',y1.toFixed(1));
          line.setAttribute('x2',x2.toFixed(1));line.setAttribute('y2',y2.toFixed(1));
          line.setAttribute('stroke-opacity', i%5===0 ? '.9' : '.45');
          ticks.appendChild(line);
        }
      }
      // 循环计数器
      var cyc = document.getElementById('cyc');
      if (cyc) {
        var n = Math.floor(Math.random()*40000)+1000;
        setInterval(function(){ n++; cyc.textContent = String(n).padStart(5,'0'); }, 120);
      }
    `;
    return {title:`${p.headline} · schematic`, height:h, doc:shell(t, body, js, h)}},

  (p,t)=>{const h=360;
    const body=`<div style="padding:18px 20px">
      <div class="row" style="justify-content:space-between">
        <div><div class="muted" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase">${escHtml(p.headline)}</div>
        <div style="font-size:30px;font-weight:600;letter-spacing:-.02em;margin-top:4px"><span id="num">0</span><span style="font-size:13px;color:${t.muted};font-weight:400;margin-left:6px">today</span></div></div>
        <span style="padding:4px 10px;border-radius:999px;background:${t.accent};color:${t.accentInk};font-size:11px;font-weight:500">+12.4%</span>
      </div>
      <div class="row" style="gap:6px;margin:14px 0 10px">
        <button class="btn btn-ghost tab active" data-r="7" style="height:28px;padding:0 10px;font-size:12px">7d</button>
        <button class="btn btn-ghost tab" data-r="30" style="height:28px;padding:0 10px;font-size:12px">30d</button>
        <button class="btn btn-ghost tab" data-r="90" style="height:28px;padding:0 10px;font-size:12px">90d</button>
      </div>
      <svg id="chart" viewBox="0 0 320 110" style="width:100%;height:110px;display:block">
        <defs><linearGradient id="grad" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${t.accent}" stop-opacity=".45"/><stop offset="1" stop-color="${t.accent}" stop-opacity="0"/></linearGradient></defs>
        <path id="area" fill="url(#grad)" d=""/>
        <path id="line" fill="none" stroke="${t.ink}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="" style="stroke-dasharray:1000;stroke-dashoffset:1000;animation:draw 1.2s ease forwards"/>
        <circle id="dot" r="3" fill="${t.accent}" stroke="${t.surface}" stroke-width="1.5"/>
      </svg>
      <style>@keyframes draw{to{stroke-dashoffset:0}} .tab.active{background:${t.ink};color:${t.bg};border-color:${t.ink}}</style>
      <div class="row" style="gap:10px;margin-top:14px">
        <div class="card" style="flex:1;padding:10px"><div class="muted" style="font-size:11px">Signups</div><div style="font-size:18px;font-weight:600;margin-top:2px">842</div></div>
        <div class="card" style="flex:1;padding:10px"><div class="muted" style="font-size:11px">Revenue</div><div style="font-size:18px;font-weight:600;margin-top:2px">$8,421</div></div>
      </div></div>`;
    const js=`const target=12487;const numEl=document.getElementById('num');let v=0;const start=performance.now();
      function tick(now){const k=Math.min(1,(now-start)/900);v=Math.floor(target*(1-Math.pow(1-k,3)));numEl.textContent=v.toLocaleString();if(k<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);
      function build(n){const pts=[];let y=70;for(let i=0;i<n;i++){y+=(Math.random()-0.5)*14;y=Math.max(20,Math.min(100,y));pts.push([i*(320/(n-1)),y])}return pts}
      function draw(n){const p=build(n);const d=p.map((q,i)=>(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)).join(' ');document.getElementById('line').setAttribute('d',d);document.getElementById('area').setAttribute('d',d+' L320 110 L0 110 Z');const last=p[p.length-1];const dot=document.getElementById('dot');dot.setAttribute('cx',last[0]);dot.setAttribute('cy',last[1])}draw(7);
      document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');draw(+b.dataset.r);const ln=document.getElementById('line');ln.style.animation='none';void ln.getBoundingClientRect();ln.style.animation='draw 1s ease forwards'}));`;
    return {title:`${p.headline} · live dashboard`,height:h,doc:shell(t,body,js,h)}},

  // 2. Pricing toggle
  (p,t)=>{const h=440;
    const body=`<div style="padding:24px 22px">
      <div style="text-align:center;margin-bottom:16px"><h2 style="margin:0 0 4px;font-size:20px;font-weight:600;letter-spacing:-.02em">${escHtml(p.headline)}</h2><div class="muted" style="font-size:12px">${escHtml(p.sub)}</div></div>
      <div class="row" style="justify-content:center;margin-bottom:18px"><div id="toggle" style="display:inline-flex;background:${t.line};border-radius:999px;padding:3px;cursor:pointer;font-size:12px;user-select:none">
        <div data-v="m" class="seg active" style="padding:6px 14px;border-radius:999px;color:${t.bg};background:${t.ink};transition:all .25s ease">Monthly</div>
        <div data-v="y" class="seg" style="padding:6px 14px;border-radius:999px;color:${t.ink};transition:all .25s ease">Yearly · <span style="color:${t.accent};font-weight:500">-20%</span></div>
      </div></div>
      <div class="row" style="gap:10px;align-items:stretch">
        ${['Starter:12','Pro:28:hi','Team:59'].map(s=>{const [n,pm,hi]=s.split(':');return `<div class="card hover-lift" style="flex:1;padding:16px;${hi?`background:${t.accent};color:${t.accentInk};border-color:${t.accent}`:''}">
          <div class="muted" style="font-size:11px;${hi?`color:${t.accentInk};opacity:.7`:''}">${n}</div>
          <div style="margin-top:6px;font-size:26px;font-weight:600;letter-spacing:-.02em">$<span class="px" data-m="${pm}">${pm}</span><span style="font-size:12px;font-weight:400;opacity:.7">/mo</span></div>
          <div style="height:1px;background:${hi?t.accentInk:t.line};opacity:.2;margin:10px 0"></div>
          <ul style="margin:0;padding:0;list-style:none;font-size:12px;line-height:1.9;${hi?`color:${t.accentInk};opacity:.85`:`color:${t.muted}`}"><li>Unlimited designs</li><li>Style refs</li><li>Collections</li></ul>
          <button class="btn ${hi?'btn-primary':'btn-ghost'}" style="width:100%;margin-top:12px;justify-content:center">Choose ${n}</button></div>`}).join('')}
      </div></div>`;
    const js=`const segs=document.querySelectorAll('#toggle .seg');segs.forEach(s=>s.addEventListener('click',()=>{segs.forEach(x=>{x.classList.remove('active');x.style.background='';x.style.color=T.ink});s.classList.add('active');s.style.background=T.ink;s.style.color=T.bg;const yearly=s.dataset.v==='y';document.querySelectorAll('.px').forEach(el=>{const m=+el.dataset.m;el.textContent=(yearly?Math.round(m*0.8):m)})}));`;
    return {title:`${p.headline} · pricing toggle`,height:h,doc:shell(t,body,js,h)}},

  // 3. Chat composer
  (p,t)=>{const h=440;
    const body=`<div style="padding:14px 16px;display:flex;flex-direction:column;height:${h}px">
      <div class="row" style="justify-content:space-between;padding-bottom:10px;border-bottom:1px solid ${t.line}">
        <div class="row"><div style="width:30px;height:30px;border-radius:50%;background:${t.accent}"></div>
        <div><div style="font-size:13px;font-weight:500">${escHtml(p.headline)}</div><div class="muted" style="font-size:11px">● online</div></div></div>
        <div class="muted" style="font-size:11px">just now</div>
      </div>
      <div id="msgs" style="flex:1;overflow:auto;padding:14px 0;display:flex;flex-direction:column;gap:8px"></div>
      <div class="row" style="border-top:1px solid ${t.line};padding-top:10px">
        <input id="inp" placeholder="Type a message…" style="flex:1;height:36px;padding:0 12px;border-radius:${t.radius};border:1px solid ${t.line};background:${t.bg};color:${t.ink};outline:0"/>
        <button id="send" class="btn btn-accent">Send</button>
      </div></div>`;
    const js=`const msgs=document.getElementById('msgs');const seed=[{who:'a',txt:'Just shipped the new flow ✨'},{who:'b',txt:'Looks crisp. The empty states are great.'},{who:'a',txt:'Tried 30+ variants before settling.'}];
      function bubble(m){const me=m.who==='b';const div=document.createElement('div');div.className='fade-in';div.style.cssText='align-self:'+(me?'flex-end':'flex-start')+';max-width:75%;padding:8px 12px;border-radius:14px;font-size:13px;'+(me?'background:'+T.ink+';color:'+T.bg:'background:'+T.line+';color:'+T.ink);div.textContent=m.txt;msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight}
      let i=0;function feed(){if(i<seed.length){bubble(seed[i++]);setTimeout(feed,500)}}setTimeout(feed,200);
      function send(){const v=inp.value.trim();if(!v)return;bubble({who:'b',txt:v});inp.value='';setTimeout(()=>{const t=document.createElement('div');t.className='fade-in';t.style.cssText='align-self:flex-start;padding:8px 14px;border-radius:14px;background:'+T.line;t.innerHTML='<span style="display:inline-block;width:5px;height:5px;border-radius:50%;background:'+T.muted+';margin-right:3px;animation:tp 1s infinite"></span><span style="display:inline-block;width:5px;height:5px;border-radius:50%;background:'+T.muted+';margin-right:3px;animation:tp 1s infinite .15s"></span><span style="display:inline-block;width:5px;height:5px;border-radius:50%;background:'+T.muted+';animation:tp 1s infinite .3s"></span>';msgs.appendChild(t);msgs.scrollTop=msgs.scrollHeight;setTimeout(()=>{t.remove();bubble({who:'a',txt:'Got it — looking now.'})},1100)},250)}
      const st=document.createElement('style');st.textContent='@keyframes tp{0%,80%,100%{opacity:.3;transform:translateY(0)}40%{opacity:1;transform:translateY(-2px)}}';document.head.appendChild(st);
      const inp=document.getElementById('inp');document.getElementById('send').onclick=send;inp.onkeydown=e=>{if(e.key==='Enter')send()};`;
    return {title:`${p.headline} · chat`,height:h,doc:shell(t,body,js,h)}},

  // 4. Kanban
  (p,t)=>{const h=400;
    const body=`<div style="padding:16px 18px">
      <div class="row" style="justify-content:space-between;margin-bottom:14px">
        <div><div style="font-size:14px;font-weight:600">${escHtml(p.headline)}</div><div class="muted" style="font-size:11px">Drag cards between columns</div></div>
        <button class="btn btn-accent" style="height:30px;padding:0 12px;font-size:12px">+ Add</button></div>
      <div id="board" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
        ${['Todo','Doing','Done'].map((c,i)=>`<div class="card" style="padding:10px;min-height:240px;display:flex;flex-direction:column;gap:6px" data-col="${c}">
          <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:500;color:${t.muted};margin-bottom:6px"><span>${c}</span><span data-count>${i===0?3:i===1?2:1}</span></div>
          ${[...Array(i===0?3:i===1?2:1)].map((_,j)=>`<div draggable="true" class="kc hover-lift" style="background:${t.bg};border:1px solid ${t.line};border-radius:${t.radius};padding:10px;font-size:12px;cursor:grab"><div style="font-weight:500;margin-bottom:4px">${['Audit IA','Refine empty','Spec mobile','Update copy','Ship blog','QA dark'][i*3+j]||'Task'}</div><div class="muted" style="font-size:10px">2d · ${['Karo','Lin','Sam'][j%3]}</div></div>`).join('')}</div>`).join('')}
      </div></div>`;
    const js=`let drag=null;function bind(el){el.addEventListener('dragstart',()=>{drag=el;el.style.opacity=.5});el.addEventListener('dragend',()=>{if(drag){drag.style.opacity=1;drag=null;recount()}})}document.querySelectorAll('.kc').forEach(bind);
      document.querySelectorAll('[data-col]').forEach(col=>{col.addEventListener('dragover',e=>{e.preventDefault();col.style.background=T.line+'80'});col.addEventListener('dragleave',()=>{col.style.background=''});col.addEventListener('drop',e=>{e.preventDefault();col.style.background='';if(drag)col.appendChild(drag)})});
      function recount(){document.querySelectorAll('[data-col]').forEach(c=>{c.querySelector('[data-count]').textContent=c.querySelectorAll('.kc').length})}`;
    return {title:`${p.headline} · kanban`,height:h,doc:shell(t,body,js,h)}},

  // 5. Hero with rotating words
  (p,t)=>{const h=380;const words=['ideas','workflows','products','dreams','rituals'];
    const body=`<div style="padding:42px 32px;display:flex;flex-direction:column;justify-content:center;height:${h}px">
      <span style="display:inline-block;align-self:flex-start;padding:4px 10px;border-radius:999px;background:${t.accent};color:${t.accentInk};font-size:11px;font-weight:500;margin-bottom:14px">● Launching v2.0</span>
      <h1 style="margin:0 0 12px;font-size:34px;line-height:1.05;letter-spacing:-.025em;font-weight:600">${escHtml(p.headline)} <span id="rot" style="color:${t.accent};display:inline-block;min-width:120px;transition:opacity .35s ease,transform .35s ease">${words[0]}</span>.</h1>
      <p class="muted" style="margin:0 0 22px;max-width:440px;font-size:14px;line-height:1.55">${escHtml(p.sub)}</p>
      <div class="row" style="gap:8px"><button class="btn btn-primary">Get started →</button><button class="btn btn-ghost">Watch demo</button></div>
      <div class="row" style="gap:18px;margin-top:24px;font-size:11px;color:${t.muted}"><div class="row" style="gap:6px"><span style="width:6px;height:6px;border-radius:50%;background:${t.accent}"></span>Free trial</div><div class="row" style="gap:6px">★ 4.9 · 1.2k reviews</div></div></div>`;
    const js=`const W=${JSON.stringify(words)};let i=0;const r=document.getElementById('rot');setInterval(()=>{r.style.opacity=0;r.style.transform='translateY(8px)';setTimeout(()=>{i=(i+1)%W.length;r.textContent=W[i];r.style.opacity=1;r.style.transform='translateY(0)'},350)},1800);`;
    return {title:`${p.headline} · hero`,height:h,doc:shell(t,body,js,h)}},

  // 6. Music player with bars
  (p,t)=>{const h=320;
    const body=`<div style="padding:18px 20px;display:flex;flex-direction:column;height:${h}px;justify-content:center">
      <div class="row" style="gap:14px">
        <div style="width:84px;height:84px;border-radius:${t.radius};background:linear-gradient(135deg,${t.accent},${t.ink});flex-shrink:0;position:relative;overflow:hidden">
          <div style="position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;gap:3px;padding-bottom:12px" id="bars"></div></div>
        <div style="flex:1;min-width:0"><div class="muted" style="font-size:11px">Now playing</div>
          <div style="font-size:15px;font-weight:600;letter-spacing:-.01em;margin:2px 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${escHtml(p.headline)}</div>
          <div class="muted" style="font-size:12px">Lo-fi instrumentals · Album</div></div></div>
      <div style="margin:18px 0 8px">
        <div id="track" style="position:relative;height:4px;background:${t.line};border-radius:99px;cursor:pointer">
          <div id="prog" style="position:absolute;left:0;top:0;bottom:0;width:34%;background:${t.ink};border-radius:99px"></div>
          <div id="thumb" style="position:absolute;left:34%;top:50%;transform:translate(-50%,-50%);width:10px;height:10px;border-radius:50%;background:${t.ink}"></div></div>
        <div class="row" style="justify-content:space-between;font-size:11px;color:${t.muted};margin-top:6px"><span id="cur">1:24</span><span>3:42</span></div></div>
      <div class="row" style="justify-content:center;gap:14px">
        <button class="btn btn-ghost" style="width:36px;height:36px;border-radius:50%;padding:0;justify-content:center">«</button>
        <button id="play" class="btn btn-primary" style="width:44px;height:44px;border-radius:50%;padding:0;justify-content:center;font-size:14px">▶</button>
        <button class="btn btn-ghost" style="width:36px;height:36px;border-radius:50%;padding:0;justify-content:center">»</button></div></div>`;
    const js=`const bars=document.getElementById('bars');for(let i=0;i<14;i++){const b=document.createElement('div');b.style.cssText='width:3px;background:'+T.bg+';border-radius:2px;height:'+(6+Math.random()*30)+'px';bars.appendChild(b)}
      let playing=true,prog=34;function loop(){if(!playing)return;[...bars.children].forEach(b=>{b.style.height=(6+Math.random()*30)+'px';b.style.transition='height .25s ease'});prog=(prog+0.4)%100;document.getElementById('prog').style.width=prog+'%';document.getElementById('thumb').style.left=prog+'%';const sec=Math.floor(222*prog/100);document.getElementById('cur').textContent=Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0');setTimeout(loop,250)}loop();
      document.getElementById('play').onclick=function(){playing=!playing;this.textContent=playing?'▶':'❚❚';if(playing)loop()};
      document.getElementById('track').onclick=e=>{const r=e.currentTarget.getBoundingClientRect();prog=Math.min(100,Math.max(0,(e.clientX-r.left)/r.width*100));document.getElementById('prog').style.width=prog+'%';document.getElementById('thumb').style.left=prog+'%'};`;
    return {title:`${p.headline} · player`,height:h,doc:shell(t,body,js,h)}},

  // 7. Settings toggles
  (p,t)=>{const h=400;const items=['Email notifications','Two-factor auth','Public profile','Beta features','Auto-save drafts'];
    const body=`<div style="padding:18px 20px"><div style="font-size:14px;font-weight:600;margin-bottom:4px">${escHtml(p.headline)}</div>
      <div class="muted" style="font-size:12px;margin-bottom:14px">${escHtml(p.sub)}</div>
      <div class="card" style="padding:6px 14px">
        ${items.map((it,i)=>`<div class="row" style="justify-content:space-between;padding:11px 0;${i<items.length-1?`border-bottom:1px solid ${t.line}`:''}">
          <div><div style="font-size:13px;font-weight:500">${it}</div><div class="muted" style="font-size:11px">Manage how this works</div></div>
          <div class="tog" data-on="${i%2===0?'1':'0'}" style="width:36px;height:20px;border-radius:99px;background:${i%2===0?t.accent:t.line};position:relative;cursor:pointer;transition:background .2s ease"><div style="position:absolute;top:2px;left:${i%2===0?'18px':'2px'};width:16px;height:16px;border-radius:50%;background:${t.surface};box-shadow:0 1px 3px rgba(0,0,0,.2);transition:left .2s ease"></div></div></div>`).join('')}
      </div></div>`;
    const js=`document.querySelectorAll('.tog').forEach(el=>el.addEventListener('click',()=>{const on=el.dataset.on==='1';el.dataset.on=on?'0':'1';el.style.background=on?T.line:T.accent;el.firstElementChild.style.left=on?'2px':'18px'}));`;
    return {title:`${p.headline} · settings`,height:h,doc:shell(t,body,js,h)}},

  // 8. Calendar
  (p,t)=>{const h=380;const days=['M','T','W','T','F','S','S'];
    const body=`<div style="padding:18px 20px">
      <div class="row" style="justify-content:space-between;margin-bottom:14px">
        <div><div style="font-size:14px;font-weight:600">${escHtml(p.headline)}</div><div class="muted" style="font-size:11px">May 2026</div></div>
        <div class="row" style="gap:6px"><button class="btn btn-ghost" style="width:30px;padding:0;justify-content:center;height:30px">‹</button><button class="btn btn-ghost" style="width:30px;padding:0;justify-content:center;height:30px">›</button></div></div>
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;font-size:11px;color:${t.muted};margin-bottom:6px">${days.map(d=>`<div style="text-align:center;padding:4px 0">${d}</div>`).join('')}</div>
      <div id="grid" style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px"></div>
      <div class="row" style="margin-top:14px;gap:8px;font-size:11px;color:${t.muted}"><span style="width:8px;height:8px;border-radius:2px;background:${t.accent}"></span>Today<span style="width:8px;height:8px;border-radius:2px;background:${t.line};margin-left:10px"></span>Has events</div></div>`;
    const js=`const grid=document.getElementById('grid');const today=10;const evt=new Set([3,7,10,14,17,22]);
      for(let i=1;i<=31;i++){const d=document.createElement('button');d.textContent=i;const isT=i===today;const has=evt.has(i);
        d.style.cssText='aspect-ratio:1;border:0;border-radius:8px;font-size:12px;cursor:pointer;background:'+(isT?T.accent:has?T.line:T.bg)+';color:'+(isT?T.accentInk:T.ink)+';position:relative;transition:transform .12s ease,background .12s ease';
        d.onmouseenter=()=>{if(!isT){d.style.background=T.line;d.style.transform='scale(1.06)'}};d.onmouseleave=()=>{if(!isT){d.style.background=has?T.line:T.bg;d.style.transform='scale(1)'}};
        if(has&&!isT){const dot=document.createElement('span');dot.style.cssText='position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:'+T.accent;d.appendChild(dot)}grid.appendChild(d)}`;
    return {title:`${p.headline} · calendar`,height:h,doc:shell(t,body,js,h)}},

  // 9. Tabs with sliding indicator
  (p,t)=>{const h=340;const tabs=['Overview','Activity','Files','Settings'];
    const body=`<div style="padding:18px 20px"><div style="font-size:14px;font-weight:600;margin-bottom:4px">${escHtml(p.headline)}</div>
      <div class="muted" style="font-size:12px;margin-bottom:14px">${escHtml(p.sub)}</div>
      <div id="tabs" style="position:relative;display:flex;gap:18px;border-bottom:1px solid ${t.line}">
        ${tabs.map((tt,i)=>`<button class="tabb" data-i="${i}" style="background:none;border:0;padding:10px 0;font-size:13px;font-weight:500;color:${i===0?t.ink:t.muted};cursor:pointer">${tt}</button>`).join('')}
        <div id="ind" style="position:absolute;bottom:-1px;height:2px;background:${t.accent};transition:left .3s cubic-bezier(.4,.2,.2,1),width .3s cubic-bezier(.4,.2,.2,1)"></div>
      </div>
      <div id="panel" class="fade-in" style="padding:16px 0;font-size:13px;color:${t.muted};line-height:1.6"></div></div>`;
    const js=`const PANELS=['Snapshot of activity, key metrics, and recent updates from your team.','12 events this week. Threads, comments, file changes — all here.','Files shared in this workspace. 24 docs, 8 designs, 3 specs.','Workspace name, members, integrations, and permissions.'];
      const ind=document.getElementById('ind');const tabs=document.querySelectorAll('.tabb');const panel=document.getElementById('panel');
      function set(i){tabs.forEach((b,j)=>{b.style.color=i===j?T.ink:T.muted});const r=tabs[i].getBoundingClientRect();const p=tabs[i].parentElement.getBoundingClientRect();ind.style.left=(r.left-p.left)+'px';ind.style.width=r.width+'px';panel.style.animation='none';void panel.getBoundingClientRect();panel.style.animation='fade .35s ease both';panel.textContent=PANELS[i]}
      requestAnimationFrame(()=>set(0));tabs.forEach((b,i)=>b.addEventListener('click',()=>set(i)));`;
    return {title:`${p.headline} · tabs`,height:h,doc:shell(t,body,js,h)}},

  // 10. Sliders with drag
  (p,t)=>{const h=320;
    const body=`<div style="padding:20px 22px;display:flex;flex-direction:column;justify-content:center;height:${h}px">
      <div style="font-size:14px;font-weight:600;margin-bottom:4px">${escHtml(p.headline)}</div>
      <div class="muted" style="font-size:12px;margin-bottom:18px">${escHtml(p.sub)}</div>
      ${['Volume','Brightness','Contrast'].map((n,i)=>`<div style="margin-bottom:14px">
        <div class="row" style="justify-content:space-between;font-size:12px;margin-bottom:6px"><span>${n}</span><span class="val muted">${[60,80,40][i]}%</span></div>
        <div class="sl" style="position:relative;height:4px;background:${t.line};border-radius:99px;cursor:pointer"><div class="fill" style="height:100%;width:${[60,80,40][i]}%;background:${t.accent};border-radius:99px"></div><div class="thumb" style="position:absolute;top:50%;left:${[60,80,40][i]}%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:${t.ink};box-shadow:0 1px 4px rgba(0,0,0,.2)"></div></div></div>`).join('')}
    </div>`;
    const js=`document.querySelectorAll('.sl').forEach(sl=>{const fill=sl.querySelector('.fill'),thumb=sl.querySelector('.thumb');let dragging=false;
      function set(e){const r=sl.getBoundingClientRect();const x=Math.min(1,Math.max(0,(e.clientX-r.left)/r.width));const pct=Math.round(x*100);fill.style.width=pct+'%';thumb.style.left=pct+'%';sl.parentElement.querySelector('.val').textContent=pct+'%'}
      sl.addEventListener('mousedown',e=>{dragging=true;set(e)});window.addEventListener('mousemove',e=>{if(dragging)set(e)});window.addEventListener('mouseup',()=>{dragging=false})});`;
    return {title:`${p.headline} · controls`,height:h,doc:shell(t,body,js,h)}},

  // 11. Command palette
  (p,t)=>{const h=400;const data=['Open dashboard','Create new design','Invite teammate','Export as PNG','Toggle dark mode','Search files','Settings','Keyboard shortcuts'];
    const body=`<div style="padding:16px 18px">
      <div style="font-size:14px;font-weight:600;margin-bottom:4px">${escHtml(p.headline)}</div>
      <div class="muted" style="font-size:12px;margin-bottom:14px">${escHtml(p.sub)}</div>
      <div class="card" style="overflow:hidden">
        <div class="row" style="padding:10px 12px;border-bottom:1px solid ${t.line}">
          <span style="color:${t.muted};font-size:14px">⌕</span>
          <input id="q" placeholder="Search anything…" style="flex:1;background:transparent;border:0;outline:0;color:${t.ink};font-size:13px"/>
          <span class="muted" style="font-size:10px;border:1px solid ${t.line};padding:2px 6px;border-radius:4px">⌘K</span></div>
        <div id="list" style="max-height:240px;overflow:auto"></div></div></div>`;
    const js=`const D=${JSON.stringify(data)};const list=document.getElementById('list');
      function render(f){const r=D.filter(x=>x.toLowerCase().includes(f.toLowerCase()));list.innerHTML=r.length?r.map((x,i)=>'<div class="r" style="padding:9px 14px;font-size:13px;cursor:pointer;display:flex;justify-content:space-between;'+(i===0?'background:'+T.line:'')+'"><span>'+x+'</span><span style="color:'+T.muted+';font-size:10px">↵</span></div>').join(''):'<div style="padding:24px;text-align:center;color:'+T.muted+';font-size:12px">No results</div>';list.querySelectorAll('.r').forEach(el=>{el.addEventListener('mouseenter',()=>{list.querySelectorAll('.r').forEach(x=>x.style.background='');el.style.background=T.line})})}
      render('');document.getElementById('q').addEventListener('input',e=>render(e.target.value));`;
    return {title:`${p.headline} · command`,height:h,doc:shell(t,body,js,h)}},

  // 12. Image gallery
  (p,t)=>{const h=380;const palettes=[t.accent,t.ink,t.muted,t.accent,t.line,t.ink];
    const body=`<div style="padding:16px 18px">
      <div class="row" style="justify-content:space-between;margin-bottom:12px">
        <div><div style="font-size:14px;font-weight:600">${escHtml(p.headline)}</div><div class="muted" style="font-size:11px">${escHtml(p.sub)}</div></div>
        <button class="btn btn-ghost" style="height:28px;font-size:12px">View all</button></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">
        ${palettes.map((c,i)=>`<div class="ph" style="aspect-ratio:1;border-radius:${t.radius};background:${c};position:relative;overflow:hidden;cursor:pointer;transition:transform .25s ease"><div class="cap" style="position:absolute;inset:auto 0 0 0;padding:8px;font-size:10px;color:${t.bg};background:linear-gradient(transparent,rgba(0,0,0,.45));opacity:0;transition:opacity .2s ease">Asset ${i+1}</div></div>`).join('')}
      </div></div>`;
    const js=`document.querySelectorAll('.ph').forEach(el=>{el.addEventListener('mouseenter',()=>{el.style.transform='scale(1.04)';el.querySelector('.cap').style.opacity=1});el.addEventListener('mouseleave',()=>{el.style.transform='scale(1)';el.querySelector('.cap').style.opacity=0})});`;
    return {title:`${p.headline} · gallery`,height:h,doc:shell(t,body,js,h)}},

  // Nothing signature — industrial dashboard（点阵大数字 + 分段进度条 + 单色仪表）
  (p,t)=>{const h=540;
    const mono = t.mono || '"Space Mono", monospace';
    const dot  = t.dot  || mono;
    const isNothing = (t.bg === '#000000');
    const accent = t.accent;
    const fontLink = isNothing ? `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Doto:wght@500;800&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"/>` : '';
    const body = `${fontLink}<div style="padding:20px;height:${h}px;display:flex;flex-direction:column;gap:14px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid ${t.line};padding-bottom:10px">
        <div>
          <div style="font-family:${mono};font-size:9px;letter-spacing:.18em;color:${t.muted};text-transform:uppercase">SYS · 0042 / OBSV</div>
          <div style="font-size:14px;font-weight:500;margin-top:4px;letter-spacing:-.005em">${escHtml(p.headline)}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;font-family:${mono};font-size:10px;color:${t.muted}">
          <span style="width:6px;height:6px;border-radius:50%;background:${accent};display:inline-block;animation:pulse 1.4s ease-in-out infinite"></span>
          <span id="clk">--:--:--</span>
        </div>
      </div>

      <div style="display:flex;align-items:flex-end;gap:14px">
        <div id="hero" style="font-family:${dot};font-weight:800;font-size:88px;line-height:.85;letter-spacing:-.04em;color:${t.ink}">000</div>
        <div style="padding-bottom:8px">
          <div style="font-family:${mono};font-size:9px;color:${t.muted};letter-spacing:.16em;text-transform:uppercase">CYCLES / DAY</div>
          <div style="font-size:11px;color:${accent};font-family:${mono};margin-top:2px">+ 12.4% △</div>
        </div>
      </div>

      <div>
        <div style="display:flex;justify-content:space-between;font-family:${mono};font-size:9px;color:${t.muted};letter-spacing:.14em;text-transform:uppercase;margin-bottom:6px">
          <span>PROGRESS</span><span id="pct">0%</span>
        </div>
        <div id="segs" style="display:flex;gap:3px;height:14px"></div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;flex:1">
        <div style="border:1px solid ${t.line};padding:10px;border-radius:${t.radius}">
          <div style="font-family:${mono};font-size:9px;color:${t.muted};letter-spacing:.14em;text-transform:uppercase">SIGNAL</div>
          <div style="font-family:${dot};font-size:32px;font-weight:800;margin-top:6px;letter-spacing:-.03em">87</div>
          <div style="display:flex;gap:2px;margin-top:6px">
            ${[...Array(10)].map((_,i)=>`<span style="flex:1;height:6px;background:${i<8?t.ink:t.line}"></span>`).join('')}
          </div>
        </div>
        <div style="border:1px solid ${t.line};padding:10px;border-radius:${t.radius};display:flex;flex-direction:column;align-items:center;justify-content:center">
          <svg viewBox="0 0 80 80" width="74" height="74" style="display:block">
            <circle cx="40" cy="40" r="32" fill="none" stroke="${t.line}" stroke-width="2"/>
            <circle id="ring" cx="40" cy="40" r="32" fill="none" stroke="${t.ink}" stroke-width="2" stroke-linecap="square" stroke-dasharray="201" stroke-dashoffset="201" transform="rotate(-90 40 40)"/>
            <text x="40" y="46" text-anchor="middle" font-family="${dot}" font-size="20" font-weight="800" fill="${t.ink}" id="ringTxt">0</text>
          </svg>
          <div style="font-family:${mono};font-size:9px;color:${t.muted};letter-spacing:.14em;text-transform:uppercase;margin-top:4px">LOAD</div>
        </div>
        <div style="border:1px solid ${t.line};padding:10px;border-radius:${t.radius}">
          <div style="font-family:${mono};font-size:9px;color:${t.muted};letter-spacing:.14em;text-transform:uppercase">DOT MATRIX</div>
          <div id="dots" style="margin-top:8px;display:grid;grid-template-columns:repeat(8,1fr);grid-auto-rows:6px;gap:2px"></div>
        </div>
      </div>

      <div style="display:flex;gap:6px;font-family:${mono};font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:${t.muted};border-top:1px solid ${t.line};padding-top:10px">
        <span style="color:${t.ink}">[ A ] OBSERVE</span>
        <span>·</span>
        <span>[ B ] LOG</span>
        <span>·</span>
        <span>[ C ] EXPORT</span>
        <span style="margin-left:auto;color:${accent}">REC ●</span>
      </div>

      <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}</style>
    </div>`;
    const js = `
      function pad(n,w){n=String(n);while(n.length<w)n='0'+n;return n}
      const clk=document.getElementById('clk');
      function tick(){const d=new Date();clk.textContent=pad(d.getHours(),2)+':'+pad(d.getMinutes(),2)+':'+pad(d.getSeconds(),2)}tick();setInterval(tick,1000);
      const target=2487;const hero=document.getElementById('hero');let v=0;const t0=performance.now();
      function up(now){const k=Math.min(1,(now-t0)/1100);v=Math.floor(target*(1-Math.pow(1-k,3)));hero.textContent=pad(v,3);if(k<1)requestAnimationFrame(up)}requestAnimationFrame(up);
      const segs=document.getElementById('segs');const N=24;const filled=17;
      for(let i=0;i<N;i++){const s=document.createElement('span');s.style.cssText='flex:1;background:'+(i<filled?T.ink:T.line)+';opacity:0;transform:scaleY(.3);transition:opacity .25s ease,transform .25s ease;transition-delay:'+(i*30)+'ms';segs.appendChild(s);requestAnimationFrame(()=>{s.style.opacity=1;s.style.transform='scaleY(1)'})}
      document.getElementById('pct').textContent=Math.round(filled/N*100)+'%';
      const ring=document.getElementById('ring');const ringTxt=document.getElementById('ringTxt');const target2=64;const C=201;
      let r0=performance.now();function rUp(now){const k=Math.min(1,(now-r0)/1200);const val=Math.floor(target2*(1-Math.pow(1-k,3)));ring.setAttribute('stroke-dashoffset',C-(C*val/100));ringTxt.textContent=val;if(k<1)requestAnimationFrame(rUp)}setTimeout(()=>requestAnimationFrame(rUp),200);
      const dots=document.getElementById('dots');for(let i=0;i<48;i++){const d=document.createElement('span');const on=Math.random()>0.55;d.style.cssText='width:6px;height:6px;border-radius:50%;background:'+(on?T.ink:T.line)+';opacity:0;transition:opacity .3s ease;transition-delay:'+(i*15)+'ms';dots.appendChild(d);requestAnimationFrame(()=>{d.style.opacity=on?1:.5})}
      setInterval(()=>{const cells=dots.children;for(let i=0;i<cells.length;i++){if(Math.random()>0.85){const on=Math.random()>0.5;cells[i].style.background=on?T.ink:T.line;cells[i].style.opacity=on?1:.5}}},1100);
    `;
    return {title:`${p.headline} · nothing OS`, height:h, doc:shell(t,body,js,h)}},

];

window.VARIANT_STYLES = STYLES;
window.VARIANT_TEMPLATES = TEMPLATES;
})();

