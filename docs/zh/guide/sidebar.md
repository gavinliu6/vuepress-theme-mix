# 侧边栏

侧边栏由 `themeConfig.sidebar` 配置项指定，它的值有两种语法风格，一种是数组，另一种是对象。当然了，你也可以使用 `false` 明确禁止使用侧边栏功能。

## 数组风格

数组风格的侧边栏配置会使得全站共用一套侧边导航栏，当你的文档结构较为简单，且关联性较强时，你也许更喜欢这种方式。

**示例**

```ts
export default defineUserConfig<MixThemeConfig>({
  theme: 'vuepress-theme-mix',
  themeConfig: {
    sidebar: [
      // 导航至 /zh/guide/README.md，导航名称自动生成。
      '/zh/guide/'

      // 上面的写法等效于：
      {
        type: 'link',
        text: '自定义的导航名称',
        link: '/zh/guide/',
      }

      // 导航组
      {
        type: 'group',
        text: '编写文档',
        link: '/guide/zh/writing-content/',
        children: ['markdown.md', 'typography.md'], // 子项支持相对路径
        collapsible: false, // 是否可以折叠（可选）
      },

      // 导航链接组
      {
        type: 'link-group',
        text: '编程语言',
        link: '/guide/programming-languages/', // 导航自 /guide/zh/programming-languages/README.md
        children: ['php.md', 'php.md'], // 子项支持相对路径
        collapsible: true, // 是否可以折叠（可选）
      },
    ],
  },
})
```

导航组与导航链接组的区别是后者的父导航项也是一个链接，而前者的父导航项仅是一个可折叠的包裹项。

另外，**导航组和导航链接组均支持无限层级嵌套**。

## 对象风格

当你的文档数量众多，并且需要不同的结构划分时，对象风格的侧边栏配置就派上用场了。这样，不同的子路径将会使用各自独立的侧边栏。

**示例**

```ts
export default defineUserConfig<MixThemeConfig>({
  theme: 'vuepress-theme-mix',
  themeConfig: {
    sidebar: {
      // 一个独立的侧边栏
      '/zh/guide/': [
        'README.md', // 支持相对路径
        'getting-started.md',
        'appearance.md',
        'navbar.md',
        'sidebar.md',
        {
          type: 'group',
          text: '编写文档',
          link: 'writing-content/',
          children: ['markdown.md', 'typography.md'],
        },
      ],

      // 另一个独立的侧边栏
      '/zh/api/': [
        // 数组风格的子导航项
      ],
    },
  },
})
```

对象的每个顶级键都是一个绝对路径，而键值则与上述的数组风格一致。

::: warning 说明
与 VuePress 2 的默认主题不同，侧边栏不会展示页面内的 Header 标题，页面内标题会展示在悬浮于页面右侧的 TOC 栏中。
:::

## 是否可折叠

对于 `type` 是 `group` 或 `link-group` 的侧边导航项，你可以使用配置项 `collapsible` 来指定它是否允许折叠，其默认值是 `false`，即不支持折叠。

**示例**

```ts
export default defineUserConfig<MixThemeConfig>({
  theme: 'vuepress-theme-mix',
  themeConfig: {
    sidebar: {
      // 一个独立的侧边栏
      '/zh/guide/': [
        'README.md', // 支持相对路径
        'getting-started.md',
        'appearance.md',
        'navbar.md',
        'sidebar.md',
        {
          type: 'group',
          text: '编写文档',
          link: 'writing-content/',
          children: ['markdown.md', 'typography.md'],
          collapsible: true, // 可折叠
        },
      ],
    },
  },
})
```
