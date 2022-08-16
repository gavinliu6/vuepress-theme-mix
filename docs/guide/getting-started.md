# Getting Started

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 14.x (which can be checked by running `node -v`).

- [Yarn 1 (Classic)](https://classic.yarnpkg.com/en/docs/getting-started) is recommended.

- Compatible with VuePress v2.0.0-beta.49

## Manual Installation

If you already have a VuePress 2 project, then you just need to install this theme manually and specify it in the configuration file.

```sh
yarn add -D vuepress-theme-mix@latest
```

**Setting the theme**

```ts
// docs/.vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import { mixTheme } from 'vuepress-theme-mix'

export default defineUserConfig({
  // ……

  // 主题配置
  theme: mixTheme({
    // ……
  }),

  // ……
})
```
