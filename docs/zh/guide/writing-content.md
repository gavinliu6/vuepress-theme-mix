# 编写文档

## Frontmatter

除了 [VuePress 本身支持的 frontmatter 字段](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html) 外，下面列出了本主题扩展的所有字段。

### 普通页面

- `home` - 表明当前页面是否是文档首页，在普通页面中，如果你使用了该字段，那么它的值必须是 `false` 。

- `navbar` - 如果你想在当前页面中禁用导航栏，那么你可以设置此字段为 `false` 。

- `sidebar` - 当前页面的侧边栏配置，设置为 `false` 可在当前页面禁用侧边栏。

- `toc` - 如果你不想在当前页面显示悬浮于页面右侧的目录导航，那么你可以设置此字段为 `false` 。

- `prev` - 设置上一个页面的链接。

- `next` - 设置下一个页面的链接。

### 首页

首页中可用的 frontmatter 字段与默认主题完全一致，使用详情可参考 [默认主题](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#首页) 。

## Markdown

### markdown-it 简介

VuePress 2 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 格式内容的解析器，该解析器遵循 [CommonMark Spec](https://spec.commonmark.org/) 规范，并提供了许多扩展特性。

除了内置的 [Tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
和 [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM) 功能，markdown-it 的插件式设计为其他扩展语法或特性提供了丰富的选择，[这里](https://www.npmjs.com/search?q=keywords:markdown-it-plugin) 列出了 npm 上可用的相关插件。

### VuePress 2 的扩展

得益于 VuePress 良好的基础设施，我们可以使用配置项 [markdown.\*](https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown) 对 markdown-it 的 [所有配置项](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) 以及 VuePress 2 的扩展配置项进行配置。

这些配置项独立于任何主题，且本主题为它们提供了风格一致的样式，因此，你可以放心地使用它们。

### 自定义容器

VuePress 2 通过插件 [@vuepress/container](https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html) 封装了 markdown-it 的 [markdown-it-container](https://github.com/markdown-it/markdown-it-container) 插件，以使其使用更加方便。本主题也使用了 @vuepress/container 这个插件，在支持默认主题的 [6 种容器类型](https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html#自定义容器) 的基础上，新增加了一种 `reference` 类型。

````md
::: tip
这是一条提示信息
:::

::: warning
这是一条警告信息
:::

::: danger
这是一条严重警告信息
:::

:::reference
落霞与孤鹜齐飞，秋水共长天一色。

出自王勃《滕王阁序》
:::

::: details
这是一个 details 标签，在 IE / Edge 中不生效
:::

:::: code-group
::: code-group-item TS

```ts
const user: object = {}
```

:::
::: code-group-item JS

```js
const user = {}
```

:::
::::
````

渲染结果如下所示：

::: tip
这是一条提示信息
:::

::: warning
这是一条警告信息
:::

::: danger
这是一条严重警告信息
:::

:::reference
落霞与孤鹜齐飞，秋水共长天一色。

出自王勃《滕王阁序》
:::

::: details
这是一个 details 标签，在 IE / Edge 中不生效
:::

:::: code-group
::: code-group-item TS

```ts
const user: object = {}
```

:::
::: code-group-item JS

```js
const user = {}
```

:::
::::

### 代码块

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: 'Hello, VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

> 参考 VuePress 2 官方文档 [指南 > Markdown > 代码块](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#代码块)

### Emoji :tada:

VuePress 2 已默认支持 emoji 表情语法以及表情符号快捷方式，其对应的配置项是 [`markdown.emoji`](https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-emoji) 。

**参考资源**

- [Emoji 表情列表](https://gist.github.com/rxaviers/7360908)
- [受支持的表情符号快捷方式](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/shortcuts.js)

### 角标

本主题利用 markdown-it 的插件 [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub) 和 [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup) 支持了 Markdown 角标语法。

默认情况下，上下角标均已启用，你可以分别设置 `sup` 或 `sub` 配置项的值为 `false` 来禁用它们。

```md
H~2~0

2^1024^
```

渲染结果如下所示：

H~2~0

2^1024^

### 脚注

本主题利用 markdown-it 的插件 [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) 实现了 Markdown 脚注语法。

```md
脚注示例[^1]

脚注示例[^2]
```

脚注示例[^1]

脚注示例[^2]

[^1]: 这是一个脚注。
[^2]: 这是一个脚注。
