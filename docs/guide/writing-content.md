# Writing Content

## Frontmatter

In addition to the [frontmatter fields](https://v2.vuepress.vuejs.org/reference/frontmatter.html) supported by VuePress itself, all the fields of this theme extension are listed below.

### Normal Page

- `home` - indicates whether the current page is the home page of the document. On a normal page, if you use this field, then its value must be `false`.

- `navbar` - if you want to disable the navigation bar on the current page, then you can set this field to `false` .

- `sidebar` - the sidebar configuration for the current page, set to `false` to disable the sidebar on the current page.

- `toc` - If you do not want to display the table of contents navigation hovering on the right side of the page on the current page, then you can set this field to `false` .

- `prev` - specify the link of the previous page.

- `next` - specify the link of the next page.

### Home Page

The frontmatter fields available on the home page are identical to the default theme, see [Default Theme](https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html#home-page) for details on how to use it.

## Markdown

### About markdown-it

VuePress 2 uses [markdown-it](https://github.com/markdown-it/markdown-it) as a parser for Markdown-formatted content, which follows the [CommonMark Spec](https://spec.commonmark.org/) and offers many extended features.

In addition to the built-in [Tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM) and [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM) functionality, markdown-it's plug-in design provides a wealth of options for extending syntax or features, as listed [here](https://www.npmjs.com/search?q=keywords:markdown-it-plugin) .

### VuePress 2 extensions

Thanks to the good infrastructure of VuePress, we can use [markdown.\*](https://v2.vuepress.vuejs.org/reference/config.html#markdown) to configure all the configuration items of markdown-it and the extended configuration items of VuePress 2.

These configuration items are independent of any theme, and the theme provides consistent styles for them, so you can use them with confidence.

### Custom Containers

VuePress 2 wraps markdown-it plugin [markdown-it-container](https://github.com/markdown-it/markdown-it-container) via the plugin [@vuepress/container](https://v2.vuepress.vuejs.org/reference/plugin/container.html) to make it easier to use. The theme also uses the @vuepress/container plugin, which adds a new `reference` type to the [6 container types](https://v2.vuepress.vuejs.org/reference/default-theme/markdown.html#custom-containers) supported by the default theme.

````md
::: tip
This is a tip message
:::

::: warning
This is a warning message
:::

::: danger
This is a serious warning message
:::

::: reference
To be, or not to be, that is the question.

From Hamlet
:::

::: details
This is a details block, which does not work in IE / Edge
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

The rendering is shown below:

::: tip
This is a tip message
:::

::: warning
This is a warning message
:::

::: danger
This is a serious warning message
:::

::: reference
To be, or not to be, that is the question.

From Hamlet
:::

::: details
This is a details block, which does not work in IE / Edge
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

### Code Blocks

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: 'Hello, VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

> Check out VuePress 2 official document [Guide > Markdown > Code Blocks](https://v2.vuepress.vuejs.org/guide/markdown.html#code-blocks) for details

### Emoji :tada:

VuePress 2 already supports emoji syntax and emoji shortcuts by default, the corresponding configuration item is [markdown.emoji](https://v2.vuepress.vuejs.org/reference/config.html#markdown-emoji) .

**Referenced Resources**

- [Emoji List](https://gist.github.com/rxaviers/7360908)
- [Supported emoji shortcuts](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/shortcuts.js)

### Sub & Sup

This theme uses markdown-it plugins [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub) and [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup) to support Markdown corner mark syntax.

By default, `<sup>` and `sub` are enabled, and you can disable them by setting the value of the `sup` or `sub` configuration item to `false`, respectively.

```md
H~2~0

2^1024^
```

The rendering is shown below:

H~2~0

2^1024^

### Footnote

This theme implements Markdown footnote syntax using markdown-it plugin [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) .

```md
Footnote example[^1]

Footnote example[^2]
```

Footnote example[^1]

Footnote example[^2]

## Built-in Components

The theme comes with some global Vue components you can use directly in your markdown content.

### CodePenSnippet

This component is used to display and run code snippets on [CodePen](https://codepen.io/), and the following is an example of its use.

```md
<CodePenSnippet title='Sunrise over still lake' slug='yLVeLNg' user='pehaa' />
```

<CodePenSnippet title='Sunrise over still lake' slug='yLVeLNg' user='pehaa' />

Available props:

| Props    | Type    | Required | Default |
| -------- | ------- | -------- | ------- |
| title    | string  | yes      | N/A     |
| theme    | string  | no       | default |
| height   | number  | no       | 256     |
| tab      | string  | no       | result  |
| team     | boolean | no       | false   |
| user     | string  | yes      | N/A     |
| slug     | string  | yes      | N/A     |
| editable | boolean | no       | true    |
| preview  | boolean | no       | true    |
| version  | string  | no       | null    |

> More details [Embedded Pens](https://blog.codepen.io/documentation/embedded-pens/)

[^1]: This is a footnote.
[^2]: This is a footnote.
