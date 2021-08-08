import type { SidebarConfig } from 'vuepress-theme-mix'

export const en: SidebarConfig = {
  '/guide/': [
    {
      type: 'group',
      text: 'Guide',
      link: '',
      children: [
        '',
        'getting-started',
        'appearance',
        'navbar',
        'sidebar',
        'writing-content',
        {
          type: 'group',
          text: 'Sample',
          link: 'sample',
          children: [
            'hello',
            'world',
          ],
        },
      ],
    },
  ],

  '/configuration/': [
    {
      type: 'link-group',
      text: 'Configuration',
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
