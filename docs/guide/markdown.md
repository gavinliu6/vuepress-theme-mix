# Markdown

> The following is translated from Chinese by ChatGPT.

## About markdown-it

VuePress 2 uses [markdown-it](https://github.com/markdown-it/markdown-it) as the parser for Markdown-formatted content. This parser follows the [CommonMark Spec](https://spec.commonmark.org/) specification and provides many extension features.

In addition to the built-in [Tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM) and [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM) features, markdown-it's plugin-based design provides rich choices for other extended syntax or features. [Here](https://www.npmjs.com/search?q=keywords:markdown-it-plugin) is a list of related plugins available on npm.

## VuePress 2 Extensions

Thanks to VuePress's good infrastructure, we can use the [markdown.\*](https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown) configuration option to configure all markdown-it configuration options and VuePress 2's extension configuration options.

These configuration options are independent of any theme and this theme provides them with a consistent style, so you can use them with confidence.

## Custom Containers

VuePress 2 encapsulates the [markdown-it-container](https://github.com/markdown-it/markdown-it-container) plugin of markdown-it through the [@vuepress/container](https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html) plugin to make it more convenient to use. This theme also uses this plugin to support the following 4 custom containers.

```md
::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a danger.
:::

::: details
This is a details tag, which doesn't work in IE/Edge.
:::
```

The rendered result is as follows:

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a danger.
:::

::: details
This is a details tag, which doesn't work in IE/Edge.
:::
