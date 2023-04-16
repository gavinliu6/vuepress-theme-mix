import type { NavbarConfig } from 'vuepress-theme-mix'

import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'VuePress 2',
    link: 'https://v2.vuepress.vuejs.org/',
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/gavinliu6/vuepress-theme-mix/blob/main/CHANGELOG.md',
      },
    ],
  },
]
