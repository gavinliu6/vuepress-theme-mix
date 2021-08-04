import type { SidebarConfig } from 'vuepress-theme-mix'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      type: 'group',
      text: '指南',
      link: '',
      children: [
        '',
        'getting-started',
        'appearance',
        'navbar',
        'sidebar',
        'writing-content',
      ],
    },
  ],

  '/zh/configuration/': [
    {
      type: 'link-group',
      text: '主题配置',
      link: '',
      children: [
        'basic',
        'navbar',
        'sidebar',
        'page',
        'markdown',
        'i18n',
        'plugins',
      ],
    },
  ],
}
