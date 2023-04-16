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
  ],
})
