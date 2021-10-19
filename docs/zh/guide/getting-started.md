# 起步

## 环境要求

- [Node.js](https://nodejs.org/zh-cn/download/) 版本 >= 14.x，你可以通过 `node -v` 查看其版本号。

- 推荐使用 [Yarn 1 (Classic)](https://classic.yarnpkg.com/en/docs/getting-started)

## 手动安装

如果你已经拥有了一个 VuePress 2 项目，那么你只需要手动安装一下本主题，并在配置文件中指明要使用它就行了。

```sh
yarn add -D vuepress-theme-mix@latest
```

**设置主题**

```ts
// docs/.vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node'

export default defineUserConfig<MixThemeConfig>({
  // ……

  // Theme Config
  theme: 'vuepress-theme-mix',

  // ……
})
```
