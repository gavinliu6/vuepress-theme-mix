import type { NavbarConfig } from 'vuepress-theme-mix'

export const zh: NavbarConfig = [
  {
    text: '首页',
    link: '/zh/',
  },
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: '参考',
    children: [
      '/zh/configuration/',
      '/zh/plugins.md',
      {
        text: '更新日志',
        link: 'https://github.com/gavinliu6/vuepress-theme-mix/blob/main/CHANGELOG.md',
      },
    ],
  },
  {
    text: 'VuePress',
    link: 'https://v2.vuepress.vuejs.org/zh/',
  },
  {
    text: 'GitHub',
    link: 'https://github.com/gavinliu6/vuepress-theme-mix',
  },
]
