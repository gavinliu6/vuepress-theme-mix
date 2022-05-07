---
home: true
title: Home
heroImage: /images/hero.png
actions:
  - text: Getting Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
  - title: For VuePress 2
    details: A new theme built for VuePress 2 which is powered by Vue 3, with support for Vite.
  - title: Elegant and Simple
    details: Be practical, not including showy features, and keeping elegant and simple.
  - title: Dark Mode
    details: Supporting dark mode, which enhances the reading experience in a dark environment.
footer: MIT Licensed | Copyright © 2021-present Gavin Liu
---

## 🚀 A Quick Start

First of all, you need to install VuePress Theme Mix in your VuePress 2 project by running:

```sh:no-line-numbers
yarn add -D vuepress-theme-mix@latest
```

And then setting the theme in `docs/.vuepress/config.ts` file:

```ts{9-11}:no-line-numbers
// docs/.vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import { mixTheme } from 'vuepress-theme-mix'

export default defineUserConfig({
  // ……

  // Theme Config
  theme: mixTheme({
    // ……
  }),

  // ……
})
```

Finally, you are ready to create content as described in the documentation. :beers:
