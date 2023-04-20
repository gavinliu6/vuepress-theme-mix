import process from 'node:process'

import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import mixTheme from 'vuepress-theme-mix'

import {
  head,
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh,
} from './configs/index.js'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress Theme Mix',
      description: 'A mash-up theme for VuePress 2',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress Theme Mix',
      description: '一款适用于 VuePress 2 的混搭主题',
    },
  },

  // extra tags in `<head>`
  head,

  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  // markdown config
  markdown: {
    code: {
      lineNumbers: false,
    },
  },

  theme: mixTheme({
    editLink:
      'https://github.com/gavinliu6/vuepress-theme-mix/edit/main/docs/:path',

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/gavinliu6/vuepress-theme-mix',
        ariaLabel: 'github',
      },
    ],

    sidebarDepth: 0,

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        navbar: navbarEn,
        sidebar: sidebarEn,
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        navbar: navbarZh,
        sidebar: sidebarZh,
        selectLanguageAriaLabel: '选择语言',
        selectLanguageName: '简体中文',
        tocTitle: '本页目录',
        editLinkText: '在 GitHub 上编辑本页',
        lastUpdatedText: '最近更新时间',
        contributorsText: '贡献者',
      },
    },
  }),

  // use plugins
  plugins: [
    docsearchPlugin({
      appId: 'YEDIHRHK0I',
      apiKey: '193117ed50436656af493cd03005595e',
      indexName: 'vuepress-theme-mix',
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
  ],
})
