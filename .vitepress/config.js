import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'KBar 3 中文文档',
  description: 'KBar 3 中文文档',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '指南', link: '/kbar/' },
      { text: '常见问题', link: '/kbar/faq' },
      { text: '更新日志', link: '/changelog' },
      {
        text: '', // 清空文本
        items: [
          { text: '点个star⭐', link: 'https://github.com/yancongya/KraftyFx.github.io' },
          { text: '原作者仓库', link: 'https://github.com/KraftyFX/KraftyFx.github.io' }
        ],
        class: 'github-nav-item'
      }
    ],
    sidebar: {
      '/kbar/': [
        {
          text: 'KBar 指南',
          items: [
            { text: '介绍', link: '/kbar/' },
            { text: '集成', link: '/kbar/integration' },
            { text: '技巧', link: '/kbar/tips' }
          ]
        },
        {
          text: '按钮类型',
          items: [
            { text: '介绍', link: '/kbar/buttons/' },
            { text: '扩展', link: '/kbar/buttons/extensions' },
            { text: '菜单项', link: '/kbar/buttons/menu-item' },
            { text: '脚本', link: '/kbar/buttons/scripts' },
            { text: 'Shell 命令', link: '/kbar/buttons/shell-commands' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: '由 烟囱鸭 翻译并使用 VitePress 重构',
      copyright: 'Copyright © 2024-present KraftyFX'
    }
  }
})