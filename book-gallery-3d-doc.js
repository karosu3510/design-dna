/* Book Gallery 3D page flip — CodePen RNRaXwZ */
window.BOOK_GALLERY_3D_DOC = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Book Gallery — 3D page flip</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@800&display=swap" rel="stylesheet">
<style>
@property --page-rotate{syntax:"<angle>";inherits:true;initial-value:0deg}
@property --spine-shift{syntax:"<length>";inherits:true;initial-value:0px}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1100px;height:720px;overflow:hidden;background:#e0e0e0;font-family:"Outfit",system-ui,-apple-system,sans-serif;color:#111}
.stage{position:absolute;left:0;top:0;width:1100px;height:720px;transform-origin:top left;background:#e0e0e0}
.scene{width:1100px;height:720px;perspective:1000px;transform-style:preserve-3d;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;background-color:#e0e0e0;background-image:url("https://images.unsplash.com/photo-1763152496539-302ef51ef66f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0");background-size:cover;background-position:center;background-blend-mode:overlay}
.scene::before{content:"";position:absolute;inset:0;background:rgba(224,224,224,.28);z-index:0;pointer-events:none}
.bg-typography{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;text-align:center;font-size:clamp(4rem,15vw,15rem);font-weight:800;line-height:.8;display:flex;justify-content:space-between;align-items:center;padding:0 5vw;pointer-events:none;z-index:0;mix-blend-mode:exclusion;color:white}
.bg-typography span{display:block}
.galeria-book-3d{position:relative;width:200px;height:300px;perspective:1000px;transform-style:preserve-3d;display:flex;justify-content:center;align-items:center;z-index:10;--spine-shift:0px;transform:translateX(var(--spine-shift));transition:--spine-shift .5s ease}
.galeria-book-3d.book-open{--spine-shift:100px}
.galeria-book-3d__item{position:absolute;width:200px;height:300px;perspective:1000px;transform-style:preserve-3d;display:flex;justify-content:center;align-items:center;transform-origin:left center;--page-rotate:0deg;transform:rotateY(var(--page-rotate));transition:--page-rotate .5s ease-in-out,z-index 0s;transition-delay:calc((4 - var(--i)) * .1s),calc((4 - var(--i)) * .1s + .25s);box-shadow:2px 2px 10px rgba(0,0,0,.2);cursor:pointer;z-index:calc(10 - var(--i))}
.galeria-book-3d__item.is-open{--page-rotate:-180deg;transition-delay:0s,0s;z-index:calc(20 + var(--i))}
.galeria-book-3d__item img{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;background:#f4f4f4;backface-visibility:hidden;user-select:none;-webkit-user-drag:none}
.galeria-book-3d__item img:nth-child(2){transform:rotateY(180deg) translateZ(1px);z-index:1}
.source{position:absolute;right:18px;bottom:16px;z-index:20;font:500 11px/1 system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.62);mix-blend-mode:difference;pointer-events:none}
@media (max-width:700px){.bg-typography{font-size:4rem;flex-direction:column;gap:330px;padding:0}.galeria-book-3d{transform:translateX(calc(var(--spine-shift) * .65)) scale(.82)}}
</style>
</head>
<body>
<div class="stage">
  <div class="scene">
    <div class="bg-typography"><span>Book</span><span>Gallery</span></div>
    <div class="galeria-book-3d" aria-label="3D book gallery">
      <div class="galeria-book-3d__item" style="--i:0"><img src="https://images.unsplash.com/photo-1767122374969-82c7acbbb4ed?q=80&w=400&auto=format&fit=crop" alt="Front 1"><img src="https://images.unsplash.com/photo-1764617755316-ffb5ff87c2d7?q=80&w=400&auto=format&fit=crop" alt="Back 1"></div>
      <div class="galeria-book-3d__item" style="--i:1"><img src="https://images.unsplash.com/photo-1767749559743-d2e4d8031d4f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Front 2"><img src="https://images.unsplash.com/photo-1767700358934-3466f476d948?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Back 2"></div>
      <div class="galeria-book-3d__item" style="--i:2"><img src="https://images.unsplash.com/photo-1767517734918-d0969751b6b6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Front 3"><img src="https://images.unsplash.com/photo-1764377724372-d42fed3f442b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Back 3"></div>
      <div class="galeria-book-3d__item" style="--i:3"><img src="https://images.unsplash.com/photo-1767518782545-17fa47a602e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Front 4"><img src="https://plus.unsplash.com/premium_photo-1747851577288-c75149e91e1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Back 4"></div>
      <div class="galeria-book-3d__item" style="--i:4"><img src="https://plus.unsplash.com/premium_photo-1666264200758-1c03db7f530c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Front 5"><img src="https://images.unsplash.com/photo-1763906667544-02814d191864?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Back 5"></div>
    </div>
    <div class="source">Click image · CodePen RNRaXwZ</div>
  </div>
</div>
<script>
(function(){
  var W=1100,H=720,stage=document.querySelector('.stage');
  function fit(){var vw=window.innerWidth||W,vh=window.innerHeight||H;var s=Math.min(vw/W,vh/H);stage.style.transform='scale('+s+')';stage.style.left=Math.max(0,(vw-W*s)/2)+'px';stage.style.top=Math.max(0,(vh-H*s)/2)+'px'}
  window.addEventListener('resize',fit);fit();
  var items=document.querySelectorAll('.galeria-book-3d__item');
  var container=document.querySelector('.galeria-book-3d');
  function update(){var any=Array.from(items).some(function(item){return item.classList.contains('is-open')});container.classList.toggle('book-open',any)}
  items.forEach(function(item){item.addEventListener('click',function(e){e.stopPropagation();item.classList.toggle('is-open');update()})});
  document.addEventListener('click',function(){items.forEach(function(item){item.classList.remove('is-open')});update()});
})();
</script>
</body>
</html>
`;
