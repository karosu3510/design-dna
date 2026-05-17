// vortex-gallery — feed 内只显示 poster jpg（HEAVY_GPU_SLUGS 路径会用 posters/vortex-gallery.jpg）
// 详情页走 STANDALONE_SITE_SLUGS → window.location.href = 'vortex-gallery.html'
// 这里的 stub doc 仅作 d.doc 占位，feed/详情逻辑均不会真使用它
window.VORTEX_GALLERY_DOC = '<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;height:100%;background:#0a0a0a;display:flex;align-items:center;justify-content:center;overflow:hidden}img{width:100%;height:100%;object-fit:cover;display:block}</style></head><body><img src="posters/vortex-gallery.jpg" alt=""></body></html>';
