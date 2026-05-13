var LUCID_DRIFT_DOC = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Lucid Drift — Atmospheric Swell</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
<style>
  :root {
    --bg: #000000;
    --card: #f6dfc7;
    --ink: #2a32d8;
    --pink: #ff35bd;
    --radius: 28px;
  }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: var(--bg);
    font-family: "Inter", system-ui, sans-serif;
    color: var(--ink);
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100vh; width:1100px; height:720px;
    display: grid;
    place-items: center;
    padding: 48px 16px; width:1100px; height:720px; overflow:hidden;
  }

  /* === Card === */
  .card {
    position: relative;
    width: min(440px, 100%);
    background: var(--card);
    border-radius: var(--radius);
    padding: 14px 14px 18px;
    box-shadow:
      0 30px 60px -20px rgba(0,0,0,0.55),
      0 0 0 1px rgba(255,255,255,0.04);
    overflow: hidden;
    isolation: isolate;
  }

  /* === Hero (now a live shader) === */
  .hero {
    position: relative;
    aspect-ratio: 3 / 4;
    border-radius: 22px;
    overflow: hidden;
    background: var(--card);
  }

  .hero canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  /* fade to card color at the bottom */
  .hero::after {
    content: "";
    position: absolute;
    inset: 50% 0 0 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(246,223,199,0) 55%,
      rgba(246,223,199,0.85) 88%,
      var(--card) 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  .corner-spark {
    position: absolute;
    top: 14px;
    right: 18px;
    color: #fff;
    opacity: 0.95;
    z-index: 3;
    animation: cornerSparkle 4.2s ease-in-out infinite;
  }
  @keyframes cornerSparkle {
    0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
    50%      { opacity: 1;   transform: scale(1.15) rotate(45deg); }
  }

  .starburst {
    position: absolute;
    top: 38%;
    left: 50%;
    width: 130px;
    height: 130px;
    transform: translate(-50%, -50%);
    z-index: 3;
    filter: drop-shadow(0 0 12px rgba(255,255,255,0.85));
    animation: starBreath 5.5s ease-in-out infinite;
    transform-origin: center;
  }
  @keyframes starBreath {
    0%, 100% { transform: translate(-50%, -50%) scale(1)    rotate(0deg);   opacity: 0.95; }
    50%      { transform: translate(-50%, -50%) scale(1.18) rotate(8deg);   opacity: 1;    }
  }

  /* === Title block === */
  .title-block {
    display: flex;
    align-items: flex-end;
    gap: 14px;
    padding: 18px 8px 0;
  }
  .title {
    font-family: "Instrument Serif", "Times New Roman", serif;
    font-size: 56px;
    line-height: 0.95;
    letter-spacing: -0.01em;
    margin: 0;
    font-weight: 400;
  }
  .title .pink { color: var(--pink); font-style: italic; font-weight: 400; }
  .title .blue { color: var(--ink); }
  .title-line {
    flex: 1;
    height: 1.5px;
    background: var(--ink);
    margin-bottom: 18px;
    transform: translateY(-2px);
  }

  .subtitle {
    font-family: "Instrument Serif", serif;
    font-size: 36px;
    color: var(--ink);
    margin: 4px 8px 0;
    text-align: right;
    font-weight: 400;
    line-height: 1;
  }

  /* === Divider === */
  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 22px 8px 14px;
    color: var(--ink);
  }
  .divider .dashed {
    flex: 1;
    border-bottom: 1.5px dashed var(--ink);
  }

  /* === Data grid === */
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
    padding: 0 8px;
  }
  .cell {
    border: 1.5px solid var(--ink);
    border-radius: 8px;
    padding: 12px 14px;
    color: var(--ink);
    background: transparent;
    position: relative;
  }
  .cell .label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .cell .feels {
    position: absolute;
    top: 12px;
    right: 14px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: right;
  }
  .cell .feels small {
    display: block;
    font-family: "Instrument Serif", serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    margin-top: 4px;
    text-transform: none;
  }
  .cell .big {
    font-family: "Instrument Serif", serif;
    font-size: 56px;
    line-height: 1;
    font-weight: 400;
    font-feature-settings: "tnum";
  }
  .cell .big sup {
    font-size: 18px;
    vertical-align: super;
    margin-left: 2px;
  }
  .cell .body {
    font-size: 14px;
    line-height: 1.4;
  }

  .cell.span-4 { grid-column: span 4; }
  .cell.span-2 { grid-column: span 2; }

  /* footer chips */
  .chips {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    gap: 8px;
    padding: 0 8px;
    margin-top: 8px;
  }
  .chip {
    border: 1.5px solid var(--ink);
    border-radius: 6px;
    padding: 8px 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .chip.pink { color: var(--pink); border-color: var(--pink); text-align: center; }
  .chip.status { display: flex; align-items: center; gap: 8px; }
  .chip.status::before {
    content: "";
    width: 10px; height: 10px; border-radius: 50%;
    background: #0a0a0a;
    display: inline-block;
  }

  /* reduced motion: stop animations */
  @media (prefers-reduced-motion: reduce) {
    .starburst, .corner-spark { animation: none; }
  }
</style>
</head>
<body>

  <article class="card" aria-label="Lucid Drift weather card">

    <!-- Hero with live shader -->
    <div class="hero" role="img" aria-label="Atmospheric fluid texture">
      <canvas id="fluid"></canvas>

      <!-- corner sparkle -->
      <svg class="corner-spark" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" fill="currentColor"/>
      </svg>

      <!-- center starburst -->
      <svg class="starburst" viewBox="0 0 120 120">
        <g stroke="#fff" stroke-width="1" stroke-linecap="round">
          <line x1="60" y1="6"   x2="60" y2="114" />
          <line x1="6"  y1="60"  x2="114" y2="60" />
          <line x1="22" y1="22"  x2="98"  y2="98" />
          <line x1="98" y1="22"  x2="22"  y2="98" />
          <line x1="40" y1="8"   x2="80"  y2="112" />
          <line x1="80" y1="8"   x2="40"  y2="112" />
          <line x1="8"  y1="40"  x2="112" y2="80" />
          <line x1="8"  y1="80"  x2="112" y2="40" />
        </g>
        <circle cx="60" cy="60" r="3.5" fill="#fff"/>
      </svg>
    </div>

    <!-- Title -->
    <div class="title-block">
      <h1 class="title">
        <span class="pink">Lucid</span> <span class="blue">drift</span>
      </h1>
      <div class="title-line"></div>
    </div>
    <div class="subtitle">Atmospheric swell</div>

    <!-- Divider -->
    <div class="divider">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" fill="currentColor"/>
      </svg>
      <div class="dashed"></div>
    </div>

    <!-- Data grid -->
    <div class="grid">
      <div class="cell span-4">
        <div class="label">Core temp</div>
        <div class="big">74<sup>°F</sup></div>
        <div class="feels">
          Feels like
          <small>76.2°</small>
        </div>
      </div>
      <div class="cell span-2">
        <div class="label">Humidity</div>
        <div class="big">68<sup>%</sup></div>
      </div>
      <div class="cell span-2">
        <div class="label">Wind vec</div>
        <div class="body">
          SW 12kts<br/>
          Gst 18kts
        </div>
      </div>
      <div class="cell span-2">
        <div class="label">Pressure</div>
        <div class="body">
          1012 hPa<br/>
          Rising
        </div>
      </div>
      <div class="cell span-2">
        <div class="label">UV index</div>
        <div class="body">
          4.2 Mod<br/>
          Peak 13:00
        </div>
      </div>
    </div>

    <!-- Footer chips -->
    <div class="chips">
      <div class="chip">Aero</div>
      <div class="chip pink">34.05°N</div>
      <div class="chip">Live</div>
      <div class="chip status">Sys.status</div>
    </div>

  </article>

<script>
/* ============================================================
   Lucid Drift — domain-warped fluid shader
   Style: grainy, foggy, strong drift (B + C)
   ============================================================ */
(() => {
  const canvas = document.getElementById('fluid');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
  if (!gl) {
    canvas.style.background =
      'radial-gradient(120% 90% at 30% 30%, #ff35bd 0%, #ff7a3a 35%, #ffd06a 60%, #2a32d8 100%)';
    return;
  }

  const VERT = \`
    attribute vec2 a;
    varying vec2 vUv;
    void main() {
      vUv = a * 0.5 + 0.5;
      gl_Position = vec4(a, 0.0, 1.0);
    }
  \`;

  const FRAG = \`
    precision highp float;
    varying vec2 vUv;
    uniform float uTime;
    uniform vec2  uRes;

    /* hash + value noise */
    float hash(vec2 p){
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    float noise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f*f*(3.0-2.0*f);
      float a = hash(i);
      float b = hash(i + vec2(1.0,0.0));
      float c = hash(i + vec2(0.0,1.0));
      float d = hash(i + vec2(1.0,1.0));
      return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
    }
    float fbm(vec2 p){
      float v = 0.0;
      float a = 0.5;
      for(int i=0; i<5; i++){
        v += a * noise(p);
        p *= 2.02;
        a *= 0.5;
      }
      return v;
    }

    /* soft palette: cream -> magenta -> orange -> indigo */
    vec3 palette(float t){
      vec3 cream  = vec3(0.97, 0.87, 0.78);
      vec3 pink   = vec3(1.00, 0.21, 0.74);
      vec3 orange = vec3(1.00, 0.48, 0.18);
      vec3 amber  = vec3(1.00, 0.78, 0.36);
      vec3 indigo = vec3(0.16, 0.20, 0.85);
      vec3 deep   = vec3(0.09, 0.04, 0.20);

      vec3 col;
      if(t < 0.18)       col = mix(cream,  pink,   smoothstep(0.0, 0.18, t));
      else if(t < 0.42)  col = mix(pink,   orange, smoothstep(0.18, 0.42, t));
      else if(t < 0.62)  col = mix(orange, amber,  smoothstep(0.42, 0.62, t));
      else if(t < 0.85)  col = mix(amber,  indigo, smoothstep(0.62, 0.85, t));
      else               col = mix(indigo, deep,   smoothstep(0.85, 1.0,  t));
      return col;
    }

    void main(){
      vec2 uv = vUv;
      vec2 p = (uv - 0.5);
      p.x *= uRes.x / uRes.y;

      float t = uTime;

      /* domain-warped fbm — strong drift (option C) */
      vec2 q = vec2(
        fbm(p * 1.6 + vec2(0.0,  t * 0.18)),
        fbm(p * 1.6 + vec2(5.2, -t * 0.21))
      );
      vec2 r = vec2(
        fbm(p * 1.9 + 4.0 * q + vec2(1.7 + t * 0.12, 9.2 - t * 0.10)),
        fbm(p * 1.9 + 4.0 * q + vec2(8.3 - t * 0.14, 2.8 + t * 0.16))
      );
      float f = fbm(p * 2.4 + 4.0 * r + t * 0.05);

      /* contour-ish ridges */
      float bands = 0.5 + 0.5 * sin(f * 9.0 + t * 0.6);
      float mixV = clamp(f * 0.85 + bands * 0.18, 0.0, 1.0);

      vec3 col = palette(mixV);

      /* foggy haze toward bottom (option B) */
      float haze = smoothstep(0.55, 1.0, uv.y);
      col = mix(col, vec3(0.96, 0.86, 0.76), haze * 0.18);

      /* heavy grain */
      float g = hash(gl_FragCoord.xy + vec2(t * 7.13, t * 9.21));
      col += (g - 0.5) * 0.18;

      /* subtle vignette */
      float vig = smoothstep(1.1, 0.45, length(uv - 0.5));
      col *= mix(0.78, 1.0, vig);

      gl_FragColor = vec4(col, 1.0);
    }
  \`;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
    }
    return s;
  }
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1,-1,  1,-1, -1, 1,
    -1, 1,  1,-1,  1, 1
  ]), gl.STATIC_DRAW);
  const aLoc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(aLoc);
  gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(prog, 'uTime');
  const uRes  = gl.getUniformLocation(prog, 'uRes');

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth | 0;
    const h = canvas.clientHeight | 0;
    canvas.width  = Math.max(1, w * dpr);
    canvas.height = Math.max(1, h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, canvas.width, canvas.height);
  }
  window.addEventListener('resize', resize);
  resize();

  /* pause when off-screen (perf) */
  let visible = true;
  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible) loop();
  }, { threshold: 0.01 });
  io.observe(canvas);

  let start = performance.now();
  let raf = 0;
  function loop() {
    cancelAnimationFrame(raf);
    if (!visible) return;
    const t = (performance.now() - start) / 1000;
    gl.uniform1f(uTime, reduce ? 0.0 : t);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    if (!reduce) raf = requestAnimationFrame(loop);
  }
  loop();
})();
</script>

</body>
</html>
`;
