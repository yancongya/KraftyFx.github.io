---
layout: home

hero:
  name: KBar
  text: KBar 3 中文文档
  tagline: 基于VitePress重构汉化
  image:
    src: /assets/k.svg
    alt: KBar Logo
    light: /assets/k2.svg
    dark: /assets/k.svg
  actions:
    - theme: brand
      text: 开始使用
      link: /kbar/
    - theme: alt
      text: 官方购买
      link: http://aescripts.com/kbar
    - theme: alt
      text: 官方文档
      link: https://kraftyfx.github.io/

features:
  - title: 可定制的工具栏
    details: 使用简洁易用的用户界面，构建个性化且可分享的工具栏。
    link: /kbar/
  - title: 多功能按钮
    details: 支持效果、预设、菜单命令、表达式、脚本、扩展和 Shell 命令等多种按钮类型。
    link: /kbar/buttons/
  - title: 深度自定义
    details: 可自定义文字标签、超过600个内置图标，并支持自定义 PNG/SVG 图标文件。
    link: /kbar/tips/
  - title: 批量管理
    details: 支持批量导入和导出按钮，方便您管理和分享您的工具栏设置。
    link: /kbar/integration/
---

<div style="text-align: center; padding: 2rem 1rem;">
  <img src="/assets/预览.png" alt="KBar 预览" style="border-radius: 12px; border: 1px solid var(--vp-c-divider); max-width: 100%;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-2); max-width: 800px; margin: 2rem auto;">
    为 After Effects 打造的自定义、时尚、可共享的工具栏。为您的工作流程创建独特的自定义工具栏。将您最常用的效果、预设等放在指尖，节省时间和点击次数。多个工具栏让您可以在不同任务之间切换，保持高效的生产力。专注于创造，而不是在菜单中费力寻找。
  </p>
</div>

<div style="text-align: center; padding: 2rem 0;">
  <h2>KBar 3 有哪些新功能？</h2>
  <div class="feature-pills">
    <span><span class="icon">✓</span> 有趣又多彩的工具栏</span>
    <span><span class="icon">✓</span> 简洁易用</span>
    <span><span class="icon">✓</span> 与他人分享 (新功能!)</span>
    <span><span class="icon">✓</span> 工具栏标签 (新功能!)</span>
    <span><span class="icon">✓</span> 更多按钮类型 (新功能!)</span>
    <span><span class="icon">✓</span> 最多创建4个工具栏 (支持快捷键!)</span>
    <span><span class="icon">✓</span> 批量导入导出按钮 (新功能!)</span>
    <span><span class="icon">✓</span> 更宽的按钮 (新功能!)</span>
  </div>
</div>

<div class="card-grid">
  <div class="card">
    <img src="/assets/Slick and Easy UI.gif" alt="Slick and Easy UI">
    <h3>简洁易用的界面</h3>
    <ul>
      <li>拖放重新排序</li>
      <li>在工具栏之间切换</li>
      <li>吸附到 AE 的左侧或右侧边缘以实现垂直模式</li>
      <li>一次最多打开4个工具栏窗口</li>
      <li>使用键盘修饰键让按钮做更多事情</li>
    </ul>
  </div>
  <div class="card">
    <img src="/assets/Lots of Button Types.gif" alt="Lots of Button Types">
    <h3>丰富的按钮类型</h3>
    <ul>
      <li>效果和预设</li>
      <li>菜单命令</li>
      <li>扩展</li>
      <li>表达式、脚本和 Scriptlet</li>
      <li><a href="https://gist.github.com/search?q=%23KBar+%23AfterEffects&ref=searchresults" target="_blank">这里有一堆免费的 Scriptlet</a></li>
      <li>运行 Shell 命令</li>
    </ul>
  </div>
  <div class="card">
    <img src="/assets/Fun ways to customize.png" alt="Fun Ways to Customize">
    <h3>有趣的自定义方式</h3>
    <ul>
      <li>包含表情符号的文本标签</li>
      <li>从 600 多个图标中选择</li>
      <li>使用您自己的 PNG 或 SVG 文件</li>
      <li>调整大小和间距</li>
    </ul>
  </div>
</div>

<style>
.feature-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}
.feature-pills span {
  background-color: var(--vp-c-bg-soft);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.feature-pills .icon {
  color: var(--vp-c-brand-1);
  font-size: 1.1em;
  background: none;
  padding: 0;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}
.card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}
.card:hover {
  border-color: var(--vp-c-brand-1);
}
.card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.card h3 {
  margin-top: 0;
  font-size: 1.25rem;
  font-weight: 600;
}
.card ul {
  padding-left: 1.25rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Hero image styles */
:root {
  --vp-home-hero-image-width: 160px;
  --vp-home-hero-image-height: 160px;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-width: 200px;
    --vp-home-hero-image-height: 200px;
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-width: 280px;
    --vp-home-hero-image-height: 280px;
  }
}
</style>
