# 快速上手

## 安装

首先，在你的 VuePress 2 项目中执行下面的命令以安装该主题：

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

## 使用与配置

安装完成后，你就可以像使用其他 VuePress 主题那样在你的配置文件中通过 `theme` 配置项来设置要使用的主题：

```ts
import { defineUserConfig } from 'vuepress'
import mixTheme from 'vuepress-theme-mix'

export default defineUserConfig({
  // ...

  theme: mixTheme({
    // 在这里配置主题
  }),

  // ...
})
```

接下来，你就可以按照文档描述配置主题，然后开始编写你的内容了。

🎉
