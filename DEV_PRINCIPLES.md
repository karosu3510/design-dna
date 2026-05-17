# Design DNA — 开发准则

> 2026-05-17 沉淀。一晚 13 小时 31 commit 反复，最后发现真正的 delta 在 5 分钟内可挖出来。这份文档是为了让下一次「一晚通宵」不再发生。

## 一、改之前先做考古（核心准则）

任何**性能问题、回归 bug、"X 时间前是 OK 的"** 类反馈，**第一动作不是动代码，而是 `git show`**。

### 触发词清单

karo 说出以下任何一句，立刻进入考古模式：
- 「X 时间之前是 OK 的」「之前不会这样」「昨晚没这个问题」
- 「回到 X 之前的版本」
- 「你不要拍脑袋」「仔细看一下」
- 同一个症状已经修了 3 次以上还没好

### 考古五步

```bash
# 1. 锁定 last-known-good SHA
git log --all --oneline --since='YYYY-MM-DD HH:MM' --until='YYYY-MM-DD HH:MM' --pretty=format:'%h | %ad | %s' --date=iso

# 2. 在五个层面 diff，不要只看调度层
# Layer A 调度层（observer / RAF / 队列）—— 最容易盯但最不容易出问题
# Layer B 内容层（每个 unit 实际渲染什么？）—— 最容易被忽视，最常出问题
# Layer C 资源层（HEAD 里加载哪些 script/style？loading=lazy？defer？）
# Layer D 集合层（当时有哪些 item，现在多了/少了哪些？）
# Layer E 沙箱/源边界层（sandbox / cross-origin / CSP）

# 关键命令：
git show <SHA>:<file> | wc -c                      # 文件大小变化
git show <SHA>:<file> | grep -ciE 'webgl|three|gsap'  # 重资源关键字数
diff <(git ls-tree --name-only <SHA> | sort) <(ls -1 | sort)  # 集合差
```

### 判断哪一层出问题

**问自己一个问题**：在 last-known-good 时，每个 unit 实际**渲染什么**？

design-dna 的真实例子：13:00 前 `webgl-magazine-doc.js` 是 716 字节的 `<img>` 静态预览，不是 WebGL；13:26 加了 `scroll-3d-grid`（51KB GSAP+Lenis）；13:42 加了 `gpu-io-fluid`（真 WebGL）；后期把外链卡改成 `iframe.src` 直接拉真页面。

「当时不卡」≠「调度策略好」，可能是「**当时根本没让那么多重 GPU 卡同时跑**」。

## 二、删除「看似没用」之前必须做的事

> 2026-05-17 元凶：把 `<script src="*-doc.js">` 删掉，以为只是省 100KB。结果 doc.js 是每张 srcdoc 的**全部内容来源**，删掉后系统只能改用 cross-process iframe，pauseScript 进不去 → 14 张 WebGL 卡同时跑 7-8s 必卡死。

### 强制检查

删除任何 `<script src="...">` / 文件 / 全局变量前，必须：

1. **grep 全项目** —— 不只在 `import`、`require` 里找。看 srcdoc 字符串拼接、postMessage payload、eval、动态 `document.createElement('script')`、模板字符串里的引用。
2. **找它导出的全局变量名** —— `*-doc.js` 通常导出 `window.X_DOC`，grep `X_DOC`。
3. **如果 grep 到任何引用，留它** —— 哪怕看起来 dead code 也留。"省 100KB" 不值得。

## 三、不要随便换基础原语（primitive）

> srcdoc → iframe.src，setInterval → RAF，fetch → XHR，cookie → localStorage —— 这种"等价替换"几乎从来不等价。

替换基础原语会改变：
- **Origin 边界**（same-origin / null / cross-origin）
- **脚本注入能力**（同源可注入 / cross-process 不能）
- **postMessage 同步性**（同 process 同步 / cross-process 异步）
- **浏览器节流策略**（精确控制 / 浏览器自动 / vendor-specific）
- **资源 fetch 边界**（父页面拉 / iframe 自己拉）

### 强制流程

如果必须换原语：
1. 写明**这一次切换会改变上面 5 个维度的哪几个**。
2. **新旧路径同时存在**一个 commit 内，feature flag 切换。
3. A/B 验证两条路径行为对齐。
4. 至少 24 小时观察期后才删掉旧路径。

## 四、调度层最多一层

> LRU + IntersectionObserver + Budget + RAF queue + Hover-on-demand 同时叠在一起 = 调试地狱。bug 在哪一层完全分不清。

### 准则

- 同一个生命周期方向（mount / unmount / pause / resume）只能由**一个**机制控制。
- 怀疑调度有问题时，**先简化到裸 IntersectionObserver**，确认基线行为，再叠加。
- 如果裸 IntersectionObserver 已经够用，永远不要加 LRU。

## 五、Headless 测试不能代替真机验证

> Playwright headless Chrome 跑出 RAF max=10ms / 0 慢帧，不代表用户 Mac 上不卡。GPU 节流策略、合成器调度、context 上限在 headless 和 desktop Chrome 是不同的。

### 准则

- Playwright 真测**只能证伪**（明显有问题）—— 它跑不过基本说明真机也跑不过。
- Playwright 真测**不能证真**（看起来 OK）—— 必须 karo 在真 Mac 上确认。
- 部署 → 让 karo 强刷 → 让 karo 真机验证，**不要在 Playwright pass 后就下结论"修好了"**。

## 六、心态：错了就停下来重新诊断，不要继续猜

> 今晚错误：第 5 次失败的 patch 还没让我停下来回到第一性原理。每次失败都让我更想"再试一个"，而不是"这条思路是不是从根上就错了"。

### 行为约束

- 同一个 symptom 修了 **3 次都没好**，**强制停下来**，触发 `project-state-archaeology-before-changes` skill。
- karo 一旦说出「你不要拍脑袋 / 仔细看一下」，立刻停止当前思路，做考古，不要继续凭直觉打补丁。
- 每次新 patch 之前问自己：**「我能用代码证明我的诊断对吗？」** 答不上来就先去找证据。

## 七、替换被强缓存的资源时必须 bump cache-busting version

> 2026-05-17 12:33：karo 看到 jpg 没换，其实线上文件已替换，但浏览器 30 天缓存了旧版。

替换以下任何一类资源必须同时 bump `window.POSTER_VERSION`：
- `posters/<slug>.jpg`（feed/详情 poster）
- 任何被 CDN/浏览器长缓存的图片、字体、视频

bump 流程：`index.html` 顶部 `window.POSTER_VERSION = 'N'` → N+1。所有 `posters/*.jpg` 引用都自动通过 `?v=` 拼上去。

**rule**：完成"替换 jpg / png / webm"的 commit 之前，强制检查 git diff 里是否同时改了 POSTER_VERSION。没改就停下来加上。


## 当前 feed 架构（终态约定，2026-05-17 11:31 main `24ae588`）

3 层混合：

| 卡数 | 类型 | 渲染方式 |
|---|---|---|
| 5 张 | Dashboard（无 externalUrl） | iframe srcdoc + PAUSE_SCRIPT，永驻不卸载 |
| 23 张 | 轻量外链卡（CSS/canvas2D/轻 GSAP） | iframe srcdoc + PAUSE_SCRIPT，永驻不卸载 |
| 5 张 | **重 GPU 卡**（`HEAVY_GPU_SLUGS`） | `<img class="card-poster-fill" src="posters/<slug>.jpg">`，零 iframe / 零 RAF |

`HEAVY_GPU_SLUGS` 当前白名单：
- `delphi-three`（Three.js infinite tunnel）
- `card-beam-animation`（Three.js + 12 THREE calls）
- `gpu-io-fluid`（real WebGL fluid sim）
- `scroll-3d-grid`（51KB GSAP+Lenis+ScrollTrigger）
- `book-gallery-3d`（5 张高清外链图 + 3D transform）

### 新增卡片决策树

```
新卡 doc.js 是真 WebGL / Three.js / 51KB+ GSAP+Lenis 吗？
├─ 是 → 加进 HEAVY_GPU_SLUGS 白名单 + 用 tools/build-posters.cjs 录首帧 jpg
└─ 否 → 直接 srcdoc，pauseScript 自动注入
```

**违反这个决策树会重新触发"动几秒卡死"**。
