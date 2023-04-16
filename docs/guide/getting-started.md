# Getting Started

> The following is translated from Chinese by ChatGPT.

## Installation

First, execute the following command in your VuePress 2 project to install the theme:

:::: code-group
::: code-group-item npm

```bash
npm install -D vuepress-theme-mix@next
```

:::

::: code-group-item yarn

```bash
yarn add -D vuepress-theme-mix@next
```

:::

::: code-group-item pnpm

```bash
pnpm add -D vuepress-theme-mix@next
```

:::
::::

## Usage and Configuration

After installation, you can use the `theme` configuration option in your configuration file, just like using other VuePress themes, to set the theme to use:

```ts
import { defineUserConfig } from 'vuepress'
import mixTheme from 'vuepress-theme-mix'

export default defineUserConfig({
  // ...

  theme: mixTheme({
    // configure the theme here
  }),

  // ...
})
```

Next, you can configure the theme according to the documentation and start writing your content.

🎉
