import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs'
import { mixTheme } from 'vuepress-theme-mix'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
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

  bundler: viteBundler(),

  // Theme Config
  theme: mixTheme({
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
      git: isProd,
    },
  }),

  // Directory Config
  dest: 'public',

  // Plugins Config
  plugins: [
    docsearchPlugin({
      appId: 'YEDIHRHK0I',
      apiKey: '003403c7d05373869c815fd81aea356c',
      indexName: 'vuepress-theme-mix',
      locales: {
        '/': {
          placeholder: 'Search Documentation',
        },
        '/zh/': {
          placeholder: '搜索文档',
        },
      },
    }),
    googleAnalyticsPlugin({
      // we have multiple deployments, which would use different id
      id: process.env.GA_ID,
    }),
  ],
})
