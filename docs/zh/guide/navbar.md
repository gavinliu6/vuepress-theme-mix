# 导航栏

本主题的导航栏由 4 部分组成，分别是左侧的网站 Logo、搜索框、导航链接，以及右侧的特色菜单。

## 站点标识

你可以使用配置项 `themeConfig.logo` 指定网站的 Logo 图片路径，如果需要在 Logo 的右侧展示一小段文字，例如文档名称，你可以使用配置项 `themeConfig.title` 来完成。

::: warning
注意，这里的配置项 `title` 仅用于导航栏，它不同于站点配置级别的 [`title`](https://v2.vuepress.vuejs.org/zh/reference/config.html#title) 配置项。
:::

**示例**

```ts
export default defineUserConfig({
  theme: mixTheme({
    logo: '/images/logo.png',
    title: 'VuePress Mix Theme',
  }),
})
```

::: tip
点击网站 Logo 区域的跳转链接是由 `themeConfig.home` 配置项指定的。
:::

## 导航链接

导航链接是通过配置项 `themeConfig.navbar` 指定的，它接受一个导航栏数组，数组中的元素既可以是一个单独的内链或外链，也可以是一个导航组。

**示例**

```ts
export default defineUserConfig({
  theme: mixTheme({
    navbar: [
      // 一个内链导航项，导航至 /zh/README.md
      {
        text: '首页',
        link: '/zh/',
      },
      // 或（此种情况下，系统根据文档内的一级标题自动生成菜单名称）
      // '/zh/',

      // 一个外链导航项
      {
        text: 'VuePress',
        link: 'https://v2.vuepress.vuejs.org/zh/',
      },
      // 或
      // 'https://v2.vuepress.vuejs.org/',

      // 下拉导航组
      {
        text: '编程语言',
        children: [
          // 导航链接，目前仅支持一级导航组，即 children 内的元素不能是一个导航组
          '/zh/programming-languages/js.md',
          '/zh/programming-languages/go.md',
          {
            text: 'PHP',
            link: '/zh/programming-languages/php.md',
          },
        ],
      },
    ],
  }),
})
```

## 多语言切换

该功能不需要手动设置，系统会根据你站点级别的 `locales` 配置自动集成或取消该功能。

## 主题模式切换

默认情况下，或者你明确指定了 `themeConfig.mode` 配置项的值为 `auto`，那么你可以通过该按钮在明亮与暗黑主题之间进行切换。

## 搜索框

本主题使用插件 [@vuepress/docsearch](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html) 集成了文档搜索功能，当你在 `plugins` 配置项中正确地配置了该插件，搜索按钮就会被添加到导航栏中。

::: warning
虽然你也可以使用插件 [@vuepress/search](https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html)，但是本主题并没有为其提供兼容样式。
:::

## 禁用导航栏

如果你想全局禁用导航栏，那么你可以通过设置 `themeConfig.navbar` 的值为 `false` 来完成。

如果你仅仅是想在某个页面禁用导航栏，那么你可以通过页面的 `sidebar` 这个 frontmatter 来覆盖全局配置。
