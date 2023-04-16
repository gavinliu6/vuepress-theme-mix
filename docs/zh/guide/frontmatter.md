# Frontmatter

除了 VuePress 2 内置的 [Frontmatter](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html) 外，本主题还提供了下列这些。

## 首页

### home

- 类型：`boolean`
- 默认值：`false`

指示该页面是否是首页。

### heroText

- 类型：`string | null`
- 默认值：站点的 [title](https://v2.vuepress.vuejs.org/zh/reference/config.html#title)

首页的大标题，设置为 `null` 可以禁用它。

### tagline

- 类型：`string | null`
- 默认值：站点的 [title](https://v2.vuepress.vuejs.org/zh/reference/config.html#description)

首页大标题下的描述性标语，设置为 `null` 可以禁用它。

### actions

- 类型：
  ```ts
  Array<{
    text: string
    link: string
    type?: 'primary' | 'secondary'
  }>
  ```

首页按钮。

示例：

```md
---
actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 在 GitHub 中打开
    link: https://github.com/gavinliu6/vuepress-theme-mix
    type: secondary
---
```

### features

- 类型：
  ```ts
  Array<{
    title: string
    details: string
  }>
  ```

描述你的站点特性。

### footer

- 类型：`string`
- 默认值：无

首页页脚。

## 其他页面

### toc

同主题配置项 [toc](/zh/guide/config.html#toc) ，其优先级更高。

### editLink

同主题配置项 [editLink](/zh/guide/config.html#editlink) ，其优先级更高。

### lastUpdated

同主题配置项 [lastUpdated](/zh/guide/config.html#lastupdated) ，其优先级更高。

### contributors

同主题配置项 [contributors](/zh/guide/config.html#contributors) ，其优先级更高。

### sidebar

同主题配置项 [sidebar](/zh/guide/config.html#sidebar) ，其优先级更高。

### sidebarDepth

同主题配置项 [sidebarDepth](/zh/guide/config.html#sidebardepth) ，其优先级更高。

### prev & next

- 类型：`string | NavLink`

```ts
// 类型定义

interface NavLink {
  text: string
  ariaLabel?: string
  link: string
  rel?: string
  target?: string
  activeMatch?: string
}
```

页面底部上/下一个页面的链接，如果不设置这两个选项，该链接会自动根据侧边栏配置进行推断。
