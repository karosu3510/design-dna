/* Cinematic 3D Scroll clone */
window.CINEMATIC_3D_SCROLL_DOC = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cinematic Scroll Animations | Codrops</title>
    <meta
      name="description"
      content="A cinematic scroll animations built with GSAP, ScrollTrigger, and OGL. Experience smooth perspective transitions and camera motion using GSAP’s CustomEase."
    />
    <link rel="stylesheet" href="https://use.typekit.net/why1lhi.css" />
    <link rel="icon" type="image/png" href="./cinematic-3d-scroll-assets/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="./cinematic-3d-scroll-assets/favicon.svg" />
    <link rel="shortcut icon" href="./cinematic-3d-scroll-assets/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="./cinematic-3d-scroll-assets/apple-touch-icon.png" />
    <link rel="manifest" href="./cinematic-3d-scroll-assets/site.webmanifest" />

    <!-- Open Graph / Facebook -->
    <meta property="og:title" content="Cinematic Scroll Animations | Codrops" />
    <meta
      property="og:description"
      content="A cinematic scroll animations built with GSAP, ScrollTrigger, and OGL. Experience smooth perspective transitions and camera motion using GSAP’s CustomEase."
    />
    <meta property="og:image" content="./og.jpg" />
    
    <script type="module" crossorigin src="./cinematic-3d-scroll-assets/assets/index-DShrZhXR.js"></script>
    <link rel="stylesheet" crossorigin href="./cinematic-3d-scroll-assets/assets/index-xxqmpPvk.css">
  <style>
html,body,#root{width:100%;height:100%;margin:0;background:#000;overflow:auto;}
body{overscroll-behavior:none;}
canvas{display:block;}
</style></head>

  <body>
    <div id="root"></div>
  <script>
(function(){
  let dir=1;
  function demoScroll(){
    const max=Math.max(0, document.documentElement.scrollHeight-window.innerHeight);
    if(!max) return;
    const y=window.scrollY + dir * window.innerHeight * 0.72;
    if(y>=max-20){dir=-1;} else if(y<=20){dir=1;}
    window.scrollTo({top:Math.max(0,Math.min(max,y)),behavior:'smooth'});
  }
  setTimeout(demoScroll, 2200);
  setInterval(demoScroll, 3600);
})();
</script></body>
</html>
`;
