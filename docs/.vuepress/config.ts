import { defineUserConfig } from 'vuepress'
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<MixThemeConfig>({
  // Site Config
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress Mix Theme', // for broswer tabs
      description: 'A VuePress 2 theme with a mix of features',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress Mix Theme',
      description: '一个汇聚多个特性的 VuePress 2 主题',
    },
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite in dev, use webpack in prod
    (isProd ? '@vuepress/webpack' : '@vuepress/vite'),

  // Theme Config
  theme: 'vuepress-theme-mix',
  themeConfig: {
    logo: '/images/logo.png',
    title: 'VuePress Mix Theme', // for navbar
    docsRepo: 'gavinliu6/vuepress-theme-mix',
    docsDir: 'docs',
    editLink: true,
    lastUpdated: true,

    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
      },
      '/zh/': {
        home: '/zh/',
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        selectLanguageName: '简体中文',
        toggleThemeModeAriaLabel: '切换主题',
        lastUpdatedText: '最后更新',
      },
    },

    themePlugins: {
      git: true,
    },
  },

  // Directory Config
  dest: 'public',

  // Plugins Config
  plugins: [
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: 'fba2ba8ba151f7d5bb1adf1e5b4b4f39',
        indexName: 'vuepress-theme-mix',
        locales: {
          '/': {
            placeholder: 'Search Documentation',
          },
          '/zh/': {
            placeholder: '搜索文档',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        // we have multiple deployments, which would use different id
        id: process.env.GA_ID,
      },
    ],
  ],
})
