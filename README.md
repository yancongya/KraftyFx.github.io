# KBar 3 中文文档

这是 KBar 3 的中文文档网站，使用 VitePress 构建，提供完整的中文本地化支持。

## ⚡ 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyancongya%2FKraftyFx.github.io)

## 🛠️ 技术栈

- **框架：** [VitePress](https://vitepress.dev/) v1.6.4 - Vue 驱动的静态站点生成器
- **UI：** Vue 3.5.21 - 渐进式 JavaScript 框架
- **部署：** Vercel - 现代化的静态网站托管平台
- **包管理：** npm - Node.js 包管理器

## 🏗️ 项目结构

```
KraftyFx.github.io/
├── .vitepress/               # VitePress 配置目录
│   ├── config.js            # 站点配置
│   └── theme/              # 主题配置
├── public/                  # 静态资源目录
│   └── assets/            # 图片等资源
├── kbar/                    # 主要文档内容
│   ├── buttons/           # 按钮相关文档
│   ├── integration.md     # 集成指南
│   ├── tips.md           # 使用技巧
│   └── faq.md            # 常见问题
├── index.md                 # 首页
└── package.json            # 项目配置
```

## � 本地化特性

- **完整中文翻译：** 所有文档内容和界面元素
- **本地化优化：** 
  - 中文排版规范
  - 适应中文阅读习惯的布局
  - 本地化的搜索功能
  - 双语术语对照

## ⚡ 性能优化

- **构建优化：**
  - 自动化的静态资源优化
  - 按需加载的代码分割
  - 图片懒加载
- **SEO 优化：**
  - 自动生成的 sitemap
  - 优化的 meta 标签
  - 清晰的语义化结构

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 🔧 自定义配置

本项目支持多种自定义配置：

- **主题定制：** 支持明暗主题切换
- **搜索功能：** 内置本地搜索功能
- **导航配置：** 可自定义导航栏和侧边栏
- **插件扩展：** 支持 VitePress 插件系统

## 📦 部署信息

- **托管平台：** Vercel
- **自动部署：** 通过 GitHub Actions 自动触发
- **域名配置：** 支持自定义域名
- **CDN：** 自动 CDN 优化

## � 开发建议

1. 遵循 [Vue 3 组合式 API](https://cn.vuejs.org/guide/introduction.html) 最佳实践
2. 使用 Markdown 增强语法
3. 保持文档结构的一致性
4. 注意中文本地化的细节处理

## �📝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进文档。贡献时请注意：

1. 遵循现有的文档风格
2. 保持中文翻译的准确性和专业性
3. 提供必要的说明和示例
4. 遵循 [约定式提交](https://www.conventionalcommits.org/zh-hans/) 规范

## 📜 协议

本项目文档内容采用 MIT 协议。详情见[此处](https://github.com/yancongya/KraftyFx.github.io/blob/main/LICENSE)。

## 🙏 鸣谢

- 原始文档来自 [KraftyFX](https://github.com/KraftyFX/KraftyFx.github.io)
- 使用 [VitePress](https://vitepress.dev/) 构建
- 感谢所有贡献者的支持

## 📞 联系方式

如有问题或建议，欢迎通过以下方式联系：

- GitHub Issues
- Pull Requests
- [原仓库讨论区](https://github.com/KraftyFX/KraftyFx.github.io/discussions)