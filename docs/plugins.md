# Plugins

## VuePress Official Plugins

VuePress Theme Mix uses the following plugins to aid in development:

- [@vuepress/theme-data](https://v2.vuepress.vuejs.org/reference/plugin/theme-data.html)

- [@vuepress/palette](https://v2.vuepress.vuejs.org/reference/plugin/palette.html)

::: warning
These plugins cannot be disabled or otherwise customized through the configuration item `themePlugins` .
:::

To enhance the functionality, the theme also has the following built-in plugins, which can be customized to some extent using the `themePlugins` configuration item.

- [@vuepress/medium-zoom](https://v2.vuepress.vuejs.org/reference/plugin/medium-zoom.html) - Provide image scaling, enabled by default, you can disable it by setting `themePlugins.mediumZoom` to `false` .

- [@vuepress/container](https://v2.vuepress.vuejs.org/reference/plugin/container.html) - Registers custom containers and enable all container types by default.

- [@vuepress/shiki](https://v2.vuepress.vuejs.org/reference/plugin/shiki.html) - Syntax highlighting, enabled by default, you can disable it by specifying the value of `themePlugins.shiki` as `false` .

- [@vuepress/nprogress](https://v2.vuepress.vuejs.org/reference/plugin/nprogress.html) - Show loading progress bar when switching pages, enabled by default, you can disable it by setting the value of `themePlugins.nprogress` to `false` .

## Theme Plugins

### @vuepress-theme-mix/back-top

This theme doesn't use VuePress official plugin [@vuepress/back-to-top](https://v2.vuepress.vuejs.org/reference/plugin/back-to-top.html), but comes with one, you can set `themePlugins.backTop` to `false` to disable it.

You can also customize its styles with CSS variables:

```scss
:root {
  --back-top-color: #fff;
  --back-top-bg-color: rgba(0, 0, 0, 0.45);
}
```
