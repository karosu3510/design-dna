# 参考截图 → 1:1 复刻入库 · 方法论

> 沉淀自 2026-05-18 architecture-overview 卡（variant.com community 风格）从 0 到上线的全过程。
>
> 这一卡花了 **5 小时 4 个错误版本 1 次完全推倒重写**才到位，后又顺手改造工具链。本文把弯路全摊开讲清楚，以免下次重蹈覆辙。

最终成品：<https://karosu3510.github.io/design-dna/> → `Architecture Overview · Polar perlin rings`
源码：`variant-clone/architecture-overview.html`、`architecture-overview-doc.js`、`posters/architecture-overview.{jpg,webm}`

---

## 一、方法论总纲（5 步管道）

```
┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐
│ 0. 描述确认 │ → │ 1. 视觉拆解 │ → │ 2. 找现成   │ → │ 3. 单点精修 │ → │ 4. 组装入库 │
│ (一句话)    │   │ (看图直读) │   │ skill 跑通 │   │ (减法优先) │   │ (5-step SOP)│
└────────────┘   └────────────┘   └────────────┘   └────────────┘   └────────────┘
       ↑                                                                       ↓
       └──── 任一步发现走错路立刻止损，不要"再调一版试试"  ←─────────────────┘
```

每一步都对应一个**可验证的产物**，没拿到那个产物就不进入下一步。

| 步 | 必交付物 | 验证方式 |
|---|---|---|
| 0 | karo 一句话描述（视频里是什么 + 主视觉风格） | 我用自然语言复述一遍，karo 确认 |
| 1 | 拆解清单（顶栏/中央/底栏/右栏分别是什么；动效是什么类型） | 把拆解结果列给 karo，karo 不打回 |
| 2 | 现成 skill 的独立 demo URL，**不动一行代码** | preview_url 给 karo 看原 demo，他点头 |
| 3 | 每版只改 1-3 个变量；每改一次给 karo 截图对比 | karo 比着参考圈具体差距 → 我只调那一项 |
| 4 | 卡入库 + 上线 + 5 个 URL HTTP 200 | curl 验证 + preview_url + karo 截图反馈 |

---

## 二、每一步的具体方法、工具和坑

### 第 0 步：描述确认 —— 最便宜也最容易跳过

**做什么**：让 karo 用一句话告诉我视频/参考里到底是什么。

**为什么这步存在**：karo 的设计审美和我对像素的理解是两个世界。一张参考图对他是「polar perlin 紫色同心环 + Linear 风暗面板」，对我可能就是「中央有个圆」。差距不在像素，在**意图层**。

**踩过的坑（不要再犯）**：
- ❌ 我尝试过用 Swift + AVFoundation 抽 9 帧 + ASCII 亮度采样反推视频内容，**整剧情判断错**（Mixtiles 球状汇聚那次：我读出"散落→相片墙→镜头推进→米白画框"，真相是"散落卡片汇聚成球"）。
- ✅ 改成"先问 karo 一句话"：30 秒就能锁方向，省 30 分钟瞎猜。

**触发词清单**（karo 说出以下任一句，立即进第 0 步）：
- 「参考这个视频…」「参考这个截图…」「按照这个图复刻…」
- 「不要自己发挥」「仔细看下，他并没有 X」
- 第 1 步拆解和 karo 描述对不上时

---

### 第 1 步：视觉拆解 —— 看图直读，不靠程序

**做什么**：把参考图按区块画出"几何抽象"——是什么形状、有没有 phase 偏移、振幅怎么递进、颜色怎么过渡、动效是哪一种。

**工具**：眼睛。不是 ffmpeg / qlmanage / canvas 像素采样。

**对 architecture-overview 的拆解记录**：

| 区块 | 拆解结论 |
|---|---|
| 顶栏（左） | brand mark + name + role + 版本号小字（mono） |
| 顶栏（中） | NOW INSPECTING eyebrow + 大字 Architecture Overview |
| 顶栏（右） | 暖橙圆头像 + Sys_Admin pill + 下拉箭头 _(后被 karo 删掉)_ |
| 中央 | 多层同心环 wobble；**所有圈是同一个 7-lobe 圆角七边形**沿半径放大；整体顺时针慢转；中间 1-2 圈 alpha 高亮 |
| 中央焦点 | 1px 暖琥珀引线 + 圆点（"游标"） |
| 底栏 | record / heart / play 圆按钮 + 时间轴 02:41/05:00 + 反对 icon |
| 右列 | Project Logs head + 3 条 timeline log（含 metric 块）+ SEND 输入框 |
| 底色 | 深紫黑（**不是 Linear 那种 #010102 纯黑**），左右两列亮度有微差 |

**踩过的坑（不要再犯）**：
- ❌ 把"所有圈是同一个形状"看漏了，自作主张给每环不同 lobe（3→8）+ 不同 phase 偏移 + 内圈 coreBurst 爆裂。karo 直接圈出来「不要自己发挥」。
- ❌ 把背景色误读为 Linear 纯黑 #010102，实际是紫调 #1d1924/#181420。
- ✅ 修正方法：第 1 步**先做"减法判断"**——形状是不是同一个？有没有 phase 偏移？振幅怎么递进？任何"不一定"先按"是同一个"假设走，karo 反馈再加复杂度。

**关键 SOP**：第 4 步精修时也要重新做"减法清单"——能不能把已有的复杂逻辑删一半。**多次 karo 反馈"还是不像" = 大概率方向错了 / 加错层了**，不是参数不对。

---

### 第 2 步：找现成 skill 跑通 —— 不写代码

**做什么**：根据第 1 步拆解的"视觉语言"去 GitHub / Codrops / cssscript / codepen 找 1:1 现成实现，**先把原 skill demo 跑通截图给 karo 看，不改一行**。

**搜索词的关键技巧**：
- 不要按"功能描述"搜（"音频可视化"会找到 mel_viz 这种粗环 + glow，**美学完全不对**）
- 要按"视觉描述"搜（"polar perlin noise" / "tree rings" / "concentric ripple noise"）
- 优先 Codrops（视觉决策已被作者调过）和 three.js 官方 examples（亿次检验）

**对这卡的检索路径**：
1. 第一波：`codepen radial audio waveform concentric rings` → 命中 mel_viz，看了源码，**美学不对**（粗环 + glow，参考是细线 + tree rings）。**立即止损**。
2. 第二波：`codepen wavy concentric circles perlin noise organic line art generative` → 命中：
   - **M0nica codepen vYVPzyL** Polar Perlin Noise Loops（基于 Coding Train #136.1）—— 紫粉色 + 多层 noise 闭合曲线，**就是它**
   - gorillasun.de "Radial Perlin Noise Tree Rings"（备选静态版）

**踩过的坑（不要再犯）**：
- ❌ 第一次找 skill 找错（mel_viz），但**没单独跑 demo 给 karo 看**就直接组装到 1100×720 卡里，结果 karo 看到的是"我自己改后的样子"，分不清是 skill 选错还是参数没调。**一定要原 demo 单独 preview**。
- ❌ 找到 skill 后没真的"用 skill"，而是"看了 skill 然后自己写"——v2-v4 都在 three.js periodictable 基础上凭审美脑补加规则。**原 skill 的视觉决策已经被原作者调过，每改一刀都在破坏那个平衡**。
- ✅ 修正：原 skill clone 到 `/tmp/<name>-demo/` 独立 preview → 截图给 karo → 确认对路再组装。**这一步不能跳**。

**外壳 UI 的 skill**：用 `awesome-design-md` skill 中现成 71 个品牌的 DESIGN.md：
- 这卡用了 `linear.app/DESIGN.md`：canvas / surface ladder / hairline / lavender / Inter+JetBrains Mono / 圆角 4-12px / spacing 4-32px。
- **后期 karo 反馈底色不对**——Linear 是纯黑 #010102，参考图是紫调 #1d1924。这时候不是 DESIGN.md 选错了，是 token 局部覆盖一下就好（`--canvas: #1d1924`），其他 token 全部保留。

---

### 第 3 步：单点精修 —— 减法优先，每次只改一项

**做什么**：karo 对当前版本圈出具体差距，我**只改那一项**，不动其他。

**三条铁律**：
1. **每版只改 1-3 个变量**。改 5 个以上 = 大概率引入新 bug。
2. **改之前先问"能不能删一个东西达到同样效果"**。删比加更接近原 skill 的视觉平衡。
3. **每改一版用 preview_url 给 karo 看，不要"批量改完再看"**。

**对这卡的精修序列**：

| 版本 | 改了什么 | 改对了/错了 |
|---|---|---|
| v1 (15:30) | mel_viz 路线，组装外壳 | ❌ 美学完全不对，止损 |
| v2 (16:30) | 换 Polar Perlin（M0nica codepen） | ✅ 方向对，karo「响了」 |
| v3 (16:38) | 加暖→冷颜色渐变 + 不同 lobe + ringPhase + coreBurst | ❌ 过度设计，karo 圈"不要自己发挥" |
| v4 (22:48) | **删除** ringPhase / coreBurst / 不同 lobe 数，全部改 LOBES=7 单值 | ✅ 几何对了 |
| v5 (22:54) | NUM_BANDS=5 周期亮带 | ❌ 太花，karo「只要中间一圈高亮」 |
| v6 (23:00) | 改单 Gaussian peak at t=0.5, sigma=0.05 | ✅ |
| v7 (23:17) | 紫调底色 #1d1924/#181420（左右两列细差） | ✅ |
| v8 (23:25) | body flex 居中 + box-shadow 浮起 + 平方字体 | ✅ |
| v9 (23:26) | 删 SYS_ADMIN pill | ✅ |
| v10 (23:28) | 头像 38 → 28px | ✅ |

**关键观察**：v3 是"加层"踩坑（每环不同 lobe 等），v4 通过**删除一半逻辑**就回到正轨。**多次反馈"不像" = 加错层了，下一步先想"删什么"**。

**踩过的坑（不要再犯）**：
- ❌ v3 同时改 5 件事（lobes、ringPhase、ampOuter/ampInner、coreBurst、phase 速率），karo 反馈不像之后我没法定位是哪一项错了。
- ❌ v3 → v4 用 Edit 替换 draw 函数时**多写了一个 `}`**，整个 script SyntaxError，p5 没跑，画布只剩一根 .pin 引线，karo 截图问"里面东西没了"。**这种事用 sed/Edit 大段替换时永远要 grep 检查多余/漏掉的括号**。
- ✅ 修正：每次 Edit 后用 `node -c file` 或浏览器 console 快速验证语法。

---

### 第 4 步：组装入库 —— 严格 5-step

每张新卡入库需要**精确 5 处改动**，少一个都会 404 / black card：

```
1. 创 <slug>-doc.js（STANDALONE 模式：1100×720 占位 srcdoc，body 走 poster img）
2. tools/build-posters.cjs TARGETS 末尾加 [<slug>, '<slug>.html']
   → cd 项目根 && python3 -m http.server 8765 &
   → node tools/build-posters.cjs <slug>          # 录 jpg + webm
3. app.js 三处注册：
   a) HEAVY_GPU_SLUGS Set 加 '<slug>'              （feed 走 poster img 不挂 iframe）
   b) STANDALONE_SITE_SLUGS Set 加 '<slug>'        （详情页跳真 html，不嵌 iframe）
   c) firstBatch.push({...})                       （pinned 卡注册到 styleId/styleLock）
4. index.html 三处 bump：
   a) POSTER_VERSION '23' → '24'                   （cache-bust，所有 poster jpg 立刻刷新）
   b) <script defer src="./<slug>-doc.js"></script>（注入 const）
   c) app.js?v=N → ?v=N+1                          （让浏览器拉新版 app.js）
5. 上线流程（github-pages-static-deploy skill）：
   a) git add ... && git commit -m "feat(<slug>): ..."
   b) git push origin main
   c) deploy worktree clean → archive HEAD → tar -x → add -A → commit → push gh-pages
   d) curl 5 个 URL 验证 200：root index / <slug>.html / <slug>-doc.js / poster.jpg / poster.webm
```

**踩过的坑（每次都要警惕）**：

#### 坑 1：null check 缺失 + 删 DOM 让整个 app.js 崩
- 现象：删了详情页 4 个按钮 → feed 后续 4-5 张外链卡只显示 1.4KB stub + ?icon
- 根因：`document.getElementById('dCopy').addEventListener(...)` **没做 null check**，dCopy 元素被删 → null.addEventListener → TypeError → app.js 整体停跑 → IntersectionObserver / lazy load 全失效
- 修法：删按钮时同时删 listener；新写按钮 listener 永远 `const el = document.getElementById('X'); if (el) el.addEventListener(...)`
- 调试陷阱：**容易往别的方向猜**（看 srcdoc / 看 cors / 看 cache 全错路），其实是个 JS error 阻断了整个脚本。**Console 第一行 error 永远要看**。

#### 坑 2：POSTER_VERSION / app.js?v 不 bump
- 现象：改完代码 push 后用户看到的还是旧版
- 修法：MEMORY.md 已经写过这条铁律——**任何 app.js 改动都要 bump v 号；任何 poster 改动都要 bump POSTER_VERSION**。

#### 坑 3：iframe srcdoc 内绝对 URL 加载图
- 现象：feed 卡 srcdoc 注入了 `<img src="https://karosu3510.github.io/design-dna/...preview.jpg">`，看似 cross-origin
- 实际：null origin iframe 加载 GitHub 图片不需要 CORS（图片不是脚本）。**这条不是坑，是误判**。
- 教训：调试黑卡要先看 docHTMLLen——如果 iframe contentDocument 是空，是 srcdoc 没注入；如果有内容但图没显示，才看 CORS。

#### 坑 4：archive HEAD vs working dir
- gh-pages worktree 同步要用 `git -C source archive HEAD | tar -x`，不要 `cp -R`。前者只发布 tracked + committed 文件，后者会把 untracked 实验代码也推上去。
- gpu-io-fluid `dist/` 这种 .gitignore 但需要发布的文件，要在 deploy worktree 里手动 `git add -f` 一次。

#### 坑 5：Codrops parcel 卡的 typekit 引用
- 现象：从 Codrops parcel build 拿来的卡 head 引用 `https://use.typekit.net/*.css`，国内访问极慢，body 用 `class="loading"` + webfontloader 回调才 remove → 永远卡死
- 修法：grep `use.typekit.net <slug>.html`；有就替成 `<!-- typekit removed YYYY-MM-DD -->`；body 含 loading 类的，head inline `setTimeout(()=>document.body.classList.remove('loading'), 2500)` 兜底
- 这条是 2026-05-17 沉淀的全站禁令

---

## 三、可复用的工具链

| 工具 | 用途 | 来源 |
|---|---|---|
| `agent-browser` skill | 真 Chrome 自动化，调试线上 iframe / DOM 状态 / console error | 已装 |
| `awesome-design-md` skill | 71 个品牌 DESIGN.md token，外壳 UI 不自己手写 | 已装 |
| `github-pages-static-deploy` skill | gh-pages 同步标准流程 | 已装 |
| `tools/build-posters.cjs` | 用 Playwright 录 1100×720 6 秒 webm + jpg | 项目内 |
| `node -c file.js` | 快速验语法（避免大段 Edit 后多漏括号） | node 自带 |
| `curl -sI -o /dev/null -w "%{http_code}"` | 批量验证线上 URL | bash 自带 |
| `/tmp/extract_frames.swift` | macOS 抽帧（如果真要从视频抽，但优先**第 0 步问 karo**） | 历史临时脚本 |

---

## 四、什么时候直接放弃 / 止损

karo 的 SOUL.md 明文写过：「不保留低质量卡片」。判断止损的 3 条：

1. **超过 4 次 karo 反馈"还是不像"** → 大概率不是参数错，是**第 2 步 skill 选错了**。回第 2 步重找。
2. **本地版 vs 上线版差距大**（响应、字体、动画行为不一致）→ 立即装 agent-browser 真测 + 看 console
3. **超过 2 小时没新进度** → 主动告诉 karo 当前阻塞，问"是再换一条路 / 搁置 / 跳过这卡"

---

## 五、这一卡留下的可复用资源

- 44 个 HTTP 200 验证过的 Unsplash editorial portrait IDs（在 daily memory 16:46）
- three.js periodictable sphere/helix/grid targets 计算 + transform tween 模板（daily 16:30）
- cssscript multi-cell sphere transform 公式（daily 17:00）
- M0nica codepen vYVPzyL Polar Perlin Noise Loops 主算法（daily 16:30）
- mel_viz canvas 2D radial renderer 渲染循环（虽然这卡没用到，但备选）

---

## 六、写给下一次的我

1. **第 0 步永远先问 karo 一句话**，不要先开 ffmpeg。
2. **第 2 步原 skill demo 必须独立 preview 给 karo 看**，不动一行。
3. **第 3 步精修永远先想"能不能删"**，反馈"还是不像"通常是加错层了。
4. **第 4 步入库严格 5 处改动 + null check listener + bump 所有版本号**。
5. **不靠 AI 审美脑补**，全部依据现成 skill 的视觉决策。
