import type { NavbarConfig } from 'vuepress-theme-mix'

import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: 'VuePress 2',
    link: 'https://v2.vuepress.vuejs.org/zh/',
  },
  {
    text: `v${version}`,
    children: [
      {
        text: '更新日志',
        link: 'https://github.com/gavinliu6/vuepress-theme-mix/blob/main/CHANGELOG.md',
      },
    ],
  },
]
