import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/speed-insights'

// 初始化 Speed Insights
inject()

// 扩展默认主题
export default {
  extends: DefaultTheme,
  setup() {
    // 主题设置逻辑
  },
  enhanceApp({ app, router, siteData }) {
    // 在这里注册组件等
  }
}