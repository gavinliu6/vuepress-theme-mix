# Sidebar

The sidebar is specified by the `themeConfig.sidebar` configuration item, which has two syntax styles for its value, one being an array and the other being an object. Of course, you can also explicitly disable the sidebar with `false`.

## Sidebar Array

An array-style sidebar configuration will make the entire site share a common sidebar, which you may prefer when your document structure is simple and relevant.

**Example**

```ts
export default defineUserConfig<MixThemeConfig>({
  theme: 'vuepress-theme-mix',
  themeConfig: {
    sidebar: [
      // refer to /guide/README.md, automatic name generation
      '/guide/'

      // equal to:
      {
        type: 'link',
        text: 'Custom name',
        link: '/guide/',
      }

      // group
      {
        type: 'group',
        text: 'Writing Content',
        link: '/guide/writing-content/',
        children: ['markdown.md', 'typography.md'], // relative path is supported
      },

      // link group
      {
        type: 'link-group',
        text: 'Programming Languages',
        link: '/guide/programming-languages/', // refer to /guide/programming-languages/README.md
        children: ['php.md', 'php.md'], // relative path is supported
      },
    ],
  },
})
```

The difference between a group and a link group is that the parent navigation item of the link group is also a link, while the parent navigation item of the group is only a collapsible wrapper item.

In addition, **both groups and link groups support unlimited levels of nesting**.

## Sidebar Object

Object-style sidebar configuration comes in handy when you have a large number of documents and need different structural divisions. This way, different sub-paths will use their own separate sidebars.

**Example**

```ts
export default defineUserConfig<MixThemeConfig>({
  theme: 'vuepress-theme-mix',
  themeConfig: {
    sidebar: {
      // a stand-alone sidebar
      '/guide/': [
        'README.md', // relative path is supported
        'getting-started.md',
        'appearance.md',
        'navbar.md',
        'sidebar.md',
        {
          type: 'group',
          text: 'Writing Content',
          link: 'writing-content/',
          children: ['markdown.md', 'typography.md'],
        },
      ],

      // another stand-alone sidebar
      '/zh/api/': [
        // sidebar array
      ],
    },
  },
})
```

Each top-level key of an object is an absolute path, and the key value is in the same array style as above.

:::warning Notes
Unlike the default theme of VuePress 2, the sidebar does not show the on-page title, the on-page title is displayed in the TOC bar hovering on the right side of the page.
:::

## Collapsible

For side items whose type is `group` or `link-group`, you can use `collapsible` to specify whether it allows collapsing, the default value is `false`, i.e. collapsing is not supported.

**Example**

```ts
export default defineUserConfig<MixThemeConfig>({
  theme: 'vuepress-theme-mix',
  themeConfig: {
    sidebar: {
      // a stand-alone sidebar
      '/guide/': [
        'README.md', // relative path is supported
        'getting-started.md',
        'appearance.md',
        'navbar.md',
        'sidebar.md',
        {
          type: 'group',
          text: 'Writing Content',
          link: 'writing-content/',
          children: ['markdown.md', 'typography.md'],
          collapsible: true, // enable
        },
      ],
    },
  },
})
```
