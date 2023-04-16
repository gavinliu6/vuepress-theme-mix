# Markdown

## markdown-it 简介

VuePress 2 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 格式内容的解析器，该解析器遵循 [CommonMark Spec](https://spec.commonmark.org/) 规范，并提供了许多扩展特性。

除了内置的 [Tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM) 和 [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM) 功能，markdown-it 的插件式设计为其他扩展语法或特性提供了丰富的选择，[这里](https://www.npmjs.com/search?q=keywords:markdown-it-plugin) 列出了 npm 上可用的相关插件。

## VuePress 2 的扩展

得益于 VuePress 良好的基础设施，我们可以使用配置项 [markdown.*](https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown) 对 markdown-it 的 [所有配置项](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) 以及 VuePress 2 的扩展配置项进行配置。

这些配置项独立于任何主题，且本主题为它们提供了风格一致的样式，因此，你可以放心地使用它们。

## 自定义容器

VuePress 2 通过插件 [@vuepress/container](https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html) 封装了 markdown-it 的 [markdown-it-container](https://github.com/markdown-it/markdown-it-container) 插件，以使其使用更加方便。本主题也使用了这个插件，支持以下 4 种自定义容器。

```md
::: tip
这是一条提示信息。
:::

::: warning
这是一条警告信息。
:::

::: danger
这是一条危险信息。
:::

::: details
这是一个 details 标签，在 IE / Edge 中不生效。
:::
```

渲染结果如下：

::: tip
这是一条提示信息。
:::

::: warning
这是一条警告信息。
:::

::: danger
这是一条危险信息。
:::

::: details
这是一个 details 标签，在 IE / Edge 中不生效。
:::
