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

## 使用模板仓库

如果你打算从头开始新建一个船新项目，那么使用 GitHub 的模板仓库将会是一个不错的选择。

你可以直接点击 [这个链接](https://github.com/gavinliu6/vuepress-theme-mix-template/generate) 重定向至 GitHub 并按照其引导一步步进行下去。

另外，你也可以先将其克隆到本地来快速开始。

```sh
// 克隆模板仓库到本地的 mydocs 文件夹下
git clone https://github.com/gavinliu6/vuepress-theme-mix-template.git mydocs

// 切换工作目录
cd mydocs

// 安装依赖
yarn

// 启动开发服务器
yarn docs:dev
```

接下来，你就可以在 `http://127.0.0.1:8080` 上预览项目了。
