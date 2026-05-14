/* a.Record warm audio dashboard */
window.A_RECORD_DOC = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>a.Record — Vocal tracking</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Geist+Mono:wght@200;300;400&display=swap');
:root{
  --bg:#eceae3;
  --shell:#ffffff;
  --hero:#f1efe9;
  --soft:#e8e6df;
  --softer:#efedf0;
  --line:rgba(28,28,26,.08);
  --line-2:rgba(28,28,26,.05);
  --ink:#1c1c1a;
  --ink-2:#5b5a55;
  --ink-3:#92908a;
  --ink-4:#bfbdb5;
  --rec:#f24a3a;
  --sans:'Inter','Helvetica Neue',Arial,sans-serif;
  --mono:'Geist Mono','SF Mono',ui-monospace,Menlo,monospace;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1100px;height:720px;overflow:hidden;background:var(--bg);color:var(--ink);font-family:var(--sans);-webkit-font-smoothing:antialiased;letter-spacing:-0.005em}
.stage{position:absolute;left:0;top:0;width:1100px;height:720px;transform-origin:top left}
.shell{position:absolute;left:78px;top:54px;width:944px;height:612px;background:var(--shell);border-radius:30px;box-shadow:0 1px 0 rgba(255,255,255,.9) inset, 0 24px 60px rgba(40,38,32,.10), 0 4px 14px rgba(40,38,32,.05);padding:28px;display:grid;grid-template-columns:1fr 264px;grid-template-rows:auto 1fr;gap:20px}
.topbar{grid-column:1 / -1;display:flex;align-items:center;justify-content:space-between;height:34px;padding:0 4px}
.tb-l{display:flex;align-items:center;gap:18px}
.clock{display:flex;align-items:baseline;gap:6px;font-family:var(--mono);font-weight:300;color:var(--ink)}
.clock .h{font-size:17px;letter-spacing:-0.02em}
.clock .ap{font-size:10.5px;color:var(--ink-3);letter-spacing:.18em;text-transform:uppercase}
.brand{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:500;color:var(--ink)}
.brand .mark{width:18px;height:18px;border-radius:50%;background:var(--ink);display:inline-block;position:relative;overflow:hidden}
.brand .mark::after{content:'';position:absolute;left:6px;top:0;width:8px;height:18px;background:var(--shell);border-radius:8px}
.tb-r{display:flex;align-items:center;gap:10px}
.pill{height:34px;padding:0 14px;border-radius:999px;background:var(--shell);border:1px solid var(--line);display:inline-flex;align-items:center;gap:6px;font-size:12.5px;color:var(--ink-2);box-shadow:0 1px 1px rgba(28,28,26,.03)}
.pill .chev{width:10px;height:10px;display:inline-block;border-right:1.4px solid var(--ink-3);border-bottom:1.4px solid var(--ink-3);transform:translateY(-2px) rotate(45deg)}
.cog{width:34px;height:34px;border-radius:50%;background:var(--shell);border:1px solid var(--line);display:inline-flex;align-items:center;justify-content:center}
.cog svg{width:16px;height:16px;color:var(--ink-2)}
/* hero */
.hero{position:relative;background:var(--hero);border-radius:20px;overflow:hidden;padding:30px 32px}
.hero-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
.hero h1{font-size:34px;font-weight:500;letter-spacing:-0.025em;line-height:1.05;color:var(--ink)}
.hero .sub{margin-top:10px;font-size:13.5px;color:var(--ink-3);max-width:320px;line-height:1.45}
.mic-pill{height:32px;padding:0 14px 0 12px;border-radius:999px;background:var(--shell);border:1px solid var(--line);display:inline-flex;align-items:center;gap:8px;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-2);font-weight:500}
.mic-pill svg{width:12px;height:12px;color:var(--ink-2)}
.terrain{position:absolute;left:0;right:0;bottom:0;height:300px;pointer-events:none;overflow:hidden;border-bottom-left-radius:20px;border-bottom-right-radius:20px;z-index:1}
.terrain canvas{display:block;width:100%;height:100%}
/* timer panel */
.timer-panel{position:absolute;left:24px;right:24px;bottom:24px;height:104px;border-radius:16px;background:rgba(255,255,255,.55);backdrop-filter:blur(18px) saturate(1.05);-webkit-backdrop-filter:blur(18px) saturate(1.05);border:1px solid rgba(255,255,255,.7);box-shadow:0 14px 30px rgba(35,33,28,.08);padding:16px 22px;display:flex;align-items:center;justify-content:space-between;color:var(--ink);z-index:2}
.timer{font-family:var(--mono);font-weight:200;font-size:62px;letter-spacing:-0.05em;line-height:1;font-variant-numeric:tabular-nums}
.session{text-align:right}
.session b{display:block;font-size:10.5px;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--ink-3);margin-bottom:6px}
.session span{font-size:13px;color:var(--ink-2)}
/* side */
.side{display:grid;grid-template-rows:auto auto auto auto;gap:14px}
.status{height:62px;border-radius:16px;background:var(--softer);padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
.status .lbl{font-size:14px;font-weight:500;color:var(--ink);letter-spacing:-0.005em}
.status .lbl small{display:block;font-size:11.5px;font-weight:400;color:var(--ink-3);margin-top:2px;letter-spacing:0}
.dot{position:relative;width:14px;height:14px;border-radius:50%;background:var(--rec);box-shadow:0 0 0 4px rgba(242,74,58,.18)}
.dot::after{content:'';position:absolute;inset:-8px;border-radius:50%;border:1.5px solid rgba(242,74,58,.35);animation:pulse 1.6s ease-out infinite}
@keyframes pulse{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.15);opacity:0}}
.gauges{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.gauge{height:148px;background:var(--shell);border:1px solid var(--line-2);border-radius:14px;padding:14px 12px 10px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.gauge .cap{font-size:10.5px;font-weight:500;color:var(--ink-3);letter-spacing:.18em;text-transform:uppercase;align-self:flex-start}
.ring{position:relative;margin-top:6px;width:104px;height:104px}
.ring svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}
.ring svg circle{transition:stroke-dasharray .12s linear}
.ring .num{position:absolute;inset:0;display:grid;place-items:center}
.ring .num em{font-style:normal;font-size:20px;font-weight:500;letter-spacing:-0.03em;display:block;text-align:center}
.ring .num small{display:block;font-size:9.5px;color:var(--ink-3);letter-spacing:.2em;text-transform:uppercase;margin-top:2px}
.spectrum{height:96px;border-radius:16px;background:var(--softer);padding:0 18px;display:flex;align-items:center;justify-content:space-between;gap:14px}
.spectrum b{font-size:13px;font-weight:500;color:var(--ink)}
.bars{display:flex;align-items:flex-end;gap:3px;height:40px}
.bars i{width:3px;border-radius:2px;background:var(--ink-4);display:block;transform-origin:bottom;animation:bar 1.4s ease-in-out infinite}
.bars i:nth-child(odd){background:#a09e96}
.bars i:nth-child(1){animation-delay:-.05s;height:18%}
.bars i:nth-child(2){animation-delay:-.20s;height:34%}
.bars i:nth-child(3){animation-delay:-.45s;height:60%}
.bars i:nth-child(4){animation-delay:-.10s;height:42%}
.bars i:nth-child(5){animation-delay:-.30s;height:78%}
.bars i:nth-child(6){animation-delay:-.55s;height:48%}
.bars i:nth-child(7){animation-delay:-.15s;height:90%}
.bars i:nth-child(8){animation-delay:-.40s;height:64%}
.bars i:nth-child(9){animation-delay:-.05s;height:38%}
.bars i:nth-child(10){animation-delay:-.50s;height:74%}
.bars i:nth-child(11){animation-delay:-.25s;height:56%}
.bars i:nth-child(12){animation-delay:-.35s;height:84%}
.bars i:nth-child(13){animation-delay:-.15s;height:46%}
.bars i:nth-child(14){animation-delay:-.40s;height:30%}
.bars i:nth-child(15){animation-delay:-.05s;height:62%}
.bars i:nth-child(16){animation-delay:-.20s;height:42%}
.bars i:nth-child(17){animation-delay:-.45s;height:24%}
.bars i:nth-child(18){animation-delay:-.30s;height:66%}
.bars i:nth-child(19){animation-delay:-.10s;height:38%}
.bars i:nth-child(20){animation-delay:-.55s;height:18%}
@keyframes bar{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1)}}
.dock{height:128px;background:var(--shell);border:1px solid var(--line-2);border-radius:16px;padding:14px 16px;display:flex;flex-direction:column;justify-content:space-between}
.meta{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--ink-2)}
.meta b{font-weight:500;color:var(--ink-2)}
.stop{height:54px;border-radius:999px;background:#0f100e;color:#fff;font-size:14px;font-weight:500;letter-spacing:-0.005em;display:inline-flex;align-items:center;justify-content:center;gap:10px;border:0}
.stop .sq{width:11px;height:11px;border-radius:2px;background:var(--rec)}
</style>
</head>
<body>
<div class="stage">
  <div class="shell">
    <header class="topbar">
      <div class="tb-l">
        <div class="clock"><span class="h">12.35</span><span class="ap">am</span></div>
        <div class="brand"><i class="mark"></i>a.Record</div>
      </div>
      <div class="tb-r">
        <span class="pill">about session<i class="chev"></i></span>
        <span class="pill">settings.<i class="chev"></i></span>
        <span class="cog" aria-label="settings">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>
        </span>
      </div>
    </header>

    <section class="hero">
      <div class="hero-head">
        <div>
          <h1>Vocal tracking.</h1>
          <p class="sub">capturing high-fidelity audio data for current project.</p>
        </div>
        <span class="mic-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
          Neumann U87
        </span>
      </div>

      <div class="terrain" aria-hidden="true">
        <canvas id="terrainCanvas"></canvas>
      </div>

      <div class="timer-panel">
        <div class="timer" id="timer">00:20:06</div>
        <div class="session"><b>Session duration</b><span>Block A — Take 04</span></div>
      </div>
    </section>

    <aside class="side">
      <div class="status">
        <div class="lbl">Recording Active<small>Writing to local disk</small></div>
        <span class="dot"></span>
      </div>

      <div class="gauges">
        <div class="gauge">
          <span class="cap">Input level</span>
          <div class="ring">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ecebe6" stroke-width="6"/>
              <circle id="ringInput" cx="50" cy="50" r="40" fill="none" stroke="#1c1c1a" stroke-width="6" stroke-linecap="round" stroke-dasharray="172 252" stroke-dashoffset="40"/>
            </svg>
            <div class="num"><div><em id="numInput">-11</em><small>dBFS</small></div></div>
          </div>
        </div>
        <div class="gauge">
          <span class="cap">Loudness</span>
          <div class="ring">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ecebe6" stroke-width="6"/>
              <circle id="ringLoud" cx="50" cy="50" r="40" fill="none" stroke="#bfbdb5" stroke-width="6" stroke-linecap="round" stroke-dasharray="148 252" stroke-dashoffset="62"/>
            </svg>
            <div class="num"><div><em id="numLoud">-15</em><small>LUFS</small></div></div>
          </div>
        </div>
      </div>

      <div class="spectrum">
        <b>Spectrum</b>
        <div class="bars">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
      </div>

      <div class="dock">
        <div class="meta"><span>Format: <b>24-bit / 48kHz WAV</b></span><span>Avail: <b>4.2 TB</b></span></div>
        <button class="stop"><i class="sq"></i>stop session.</button>
      </div>
    </aside>
  </div>
</div>
<script>
(function(){
  var W=1100,H=720,stage=document.querySelector('.stage');
  function fit(){var vw=window.innerWidth||W,vh=window.innerHeight||H;var s=Math.min(vw/W,vh/H);stage.style.transform='scale('+s+')';stage.style.left=Math.max(0,(vw-W*s)/2)+'px';stage.style.top=Math.max(0,(vh-H*s)/2)+'px';}
  window.addEventListener('resize',fit);fit();
  var t=document.getElementById('timer');var sec=20*60+6;function pad(n){return String(n).padStart(2,'0')}function tick(){sec++;var h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),s=sec%60;t.textContent=pad(h)+':'+pad(m)+':'+pad(s);}setInterval(tick,1000);

  // ── live gauges (input level + loudness) ─────────────
  var ringInput=document.getElementById('ringInput');
  var ringLoud=document.getElementById('ringLoud');
  var numInput=document.getElementById('numInput');
  var numLoud=document.getElementById('numLoud');
  var CIRC=2*Math.PI*40; // ≈251.3
  // smoothed targets — input fluctuates fast (vocal peaks), loudness slow (averaged LUFS)
  var inLevel=-11, inTarget=-11;
  var loudLevel=-15, loudTarget=-15;
  var inT=0, loudT=0;
  function setRing(el, frac, gap){
    // frac 0..1 of the ring; leave a small gap so it doesn't full-loop
    var len=Math.max(0.04, Math.min(0.96, frac))*CIRC;
    el.setAttribute('stroke-dasharray', len.toFixed(2)+' '+CIRC.toFixed(2));
  }
  function rand(a,b){return a+Math.random()*(b-a)}
  setInterval(function(){
    // input retargets quickly between -16..-6 dBFS
    inTarget = rand(-16,-6);
  },280);
  setInterval(function(){
    // loudness retargets slowly between -18..-12 LUFS
    loudTarget = rand(-18,-12);
  },1400);
  function gaugeFrame(){
    // smooth toward targets
    inLevel += (inTarget-inLevel)*0.18;
    loudLevel += (loudTarget-loudLevel)*0.05;
    // map dBFS [-30..0] -> 0..1 fraction; clamp
    var inFrac = (inLevel+30)/30;
    var loudFrac = (loudLevel+30)/30;
    setRing(ringInput, inFrac*0.85+0.05, 0); // 0.05..0.90
    setRing(ringLoud,  loudFrac*0.78+0.08, 0);
    numInput.textContent = Math.round(inLevel);
    numLoud.textContent = Math.round(loudLevel);
    requestAnimationFrame(gaugeFrame);
  }
  requestAnimationFrame(gaugeFrame);

  // ── animated terrain wave ────────────────────────────
  var cv=document.getElementById('terrainCanvas');
  var ctx=cv.getContext('2d');
  var dpr=Math.min(window.devicePixelRatio||1,2);
  var cw=0,ch=0;
  function resize(){
    var r=cv.getBoundingClientRect();
    cw=Math.max(1,Math.floor(r.width));
    ch=Math.max(1,Math.floor(r.height));
    cv.width=cw*dpr;cv.height=ch*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();window.addEventListener('resize',resize);

  // 3 stacked sine layers, drifting at different speeds, all anchored to bottom
  // colors picked to match the warm grey hero card (#f1efe9)
  var layers=[
    {color:'rgba(228,225,216,0.55)', amp:34, base:0.36, k:[ {a:0.0042,p:0,sp:0.00045}, {a:0.0021,p:1.7,sp:0.00028} ], yJitter:0},
    {color:'rgba(220,217,207,0.78)', amp:40, base:0.55, k:[ {a:0.0036,p:0.6,sp:-0.00038}, {a:0.0019,p:2.4,sp:0.00022} ], yJitter:0},
    {color:'rgba(210,206,195,0.92)', amp:26, base:0.78, k:[ {a:0.0058,p:1.2,sp:0.00060}, {a:0.0030,p:0.3,sp:-0.00030} ], yJitter:0}
  ];

  var paused=false;
  document.addEventListener('visibilitychange',function(){paused=document.hidden;});

  function frame(now){
    if(!paused){
      ctx.clearRect(0,0,cw,ch);
      var step=2; // px sample step
      for(var li=0;li<layers.length;li++){
        var L=layers[li];
        var baseY=ch*L.base;
        ctx.beginPath();
        ctx.moveTo(0,ch);
        var prevY=baseY;
        for(var x=0;x<=cw;x+=step){
          var y=baseY;
          for(var ki=0;ki<L.k.length;ki++){
            var K=L.k[ki];
            y+=Math.sin(x*K.a + now*K.sp + K.p)*L.amp*(ki===0?1:0.55);
          }
          if(x===0){ ctx.lineTo(x,y); prevY=y; }
          else {
            // smooth via lineTo with small step keeps curve soft
            ctx.lineTo(x,y);
          }
        }
        ctx.lineTo(cw,ch);
        ctx.closePath();
        ctx.fillStyle=L.color;
        ctx.fill();
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
</script>
</body>
</html>
`;
