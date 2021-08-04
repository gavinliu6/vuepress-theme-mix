# 插件

## VuePress 官方插件

VuePress Theme Mix 使用了下列插件来辅助开发：

- [@vuepress/theme-data](https://v2.vuepress.vuejs.org/zh/reference/plugin/theme-data.html)

- [@vuepress/palette](https://v2.vuepress.vuejs.org/zh/reference/plugin/palette.html)

::: warning
这些插件不可以通过配置项 `themePlugins` 禁用或进行其他自定义设置。
:::

为了增强功能，本主题还内置以下插件，这些插件都可以使用 `themePlugins` 配置项来进行一定程度的自定义设置。

- [@vuepress/medium-zoom](https://v2.vuepress.vuejs.org/zh/reference/plugin/medium-zoom.html) - 提供图片缩放功能，默认启用，你可以指定 `themePlugins.mediumZoom` 的值为 `false` 来禁用它。

- [@vuepress/container](https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html) - 注册自定义容器，默认启用所有容器类型。

- [@vuepress/prismjs](https://v2.vuepress.vuejs.org/zh/reference/plugin/prismjs.html) - 语法高亮，默认启用，你可以指定 `themePlugins.prismjs` 的值为 `false` 来禁用它。

- [@vuepress/nprogress](https://v2.vuepress.vuejs.org/zh/reference/plugin/nprogress.html) - 切换页面时显示加载进度条，默认启用，你可以指定 `themePlugins.nprogress` 的值为 `false` 来禁用它。

## 主题插件

### @vuepress-theme-mix/back-top

本主题并未使用 VuePress 的官方插件 [@vuepress/back-to-top](https://v2.vuepress.vuejs.org/zh/reference/plugin/back-to-top.html)，而是自带了一个，你可以设置 `themePlugins.backTop` 的值为 `false` 来禁用它。

你还可以通过 CSS 变量来自定义它的样式：

```css
:root {
  --back-top-color: #fff;
  --back-top-bg-color: rgba(0, 0, 0, 0.45);
}
```
