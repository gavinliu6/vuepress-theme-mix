import type { NavbarConfig } from 'vuepress-theme-mix'

export const en: NavbarConfig = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Reference',
    children: [
      '/configuration/',
      '/plugins.md',
      {
        text: 'Changelog',
        link: 'https://github.com/gavinliu6/vuepress-theme-mix/blob/main/CHANGELOG.md',
      },
    ],
  },
  {
    text: 'VuePress',
    link: 'https://v2.vuepress.vuejs.org/',
  },
  {
    text: 'GitHub',
    link: 'https://github.com/gavinliu6/vuepress-theme-mix',
  },
]
