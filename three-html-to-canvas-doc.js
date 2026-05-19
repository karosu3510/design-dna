/* Three HTML To Canvas thumbnail - lightweight srcdoc loading external JPG poster.
 * Detail page is STANDALONE (window.location.href=externalUrl) so this srcdoc
 * is only ever shown in the feed thumbnail. Mirrors webgl-magazine-doc.js. */
window.THREE_HTML_TO_CANVAS_DOC = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Three HTML To Canvas preview</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1100px;height:720px;overflow:hidden;background:#fff}
.stage{width:1100px;height:720px;overflow:hidden;background:#fff}
.stage img{width:100%;height:100%;display:block;object-fit:cover}
</style></head><body>
<div class="stage"><img src="https://karosu3510.github.io/design-dna/posters/three-html-to-canvas.jpg" alt="Three HTML To Canvas preview"></div>
</body></html>`;
