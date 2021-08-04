# Getting Started

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 14.x (which can be checked by running `node -v`).

- [Yarn 1 (Classic)](https://classic.yarnpkg.com/en/docs/getting-started) is recommended.

## Manual Installation

If you already have a VuePress 2 project, then you just need to install this theme manually and specify it in the configuration file.

```sh
yarn add -D vuepress-theme-mix@latest
```

**Setting the theme**

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

## Using Template Repository

If you're planning to start a new project from scratch, using the GitHub template repository is a good option.

You can directly click on [this link](https://github.com/gavinliu6/vuepress-theme-mix-template/generate) to redirect to GitHub and follow its instructions step by step.

As an alternative, you can also clone it locally first to get a quick start.

```sh
// Clone the template repository to the `mydocs` folder
git clone https://github.com/gavinliu6/vuepress-theme-mix-template.git mydocs

// Switch working directory
cd mydocs

// Install dependencies
yarn

// Start development server
yarn docs:dev
```

Next, you will be able to preview the project on `http://127.0.0.1:8080` .
