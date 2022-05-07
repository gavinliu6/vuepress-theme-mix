# Navbar

The navigation bar of the theme consists of 4 parts: the site logo, the search box, the navigation links on the left, and the features menu on the right.

## Site Brand

You can use the configuration item `themeConfig.logo` to specify the path of the site's logo image. If you need to display a small piece of text on the right side of the logo, such as the document name, you can use the configuration item `themeConfig.title` to do so.

:::warning
Note that the configuration item `title` here is used only for the navigation bar, which is different from the [title](https://v2.vuepress.vuejs.org/reference/config.html#title) configuration item at the site configuration level.
:::

**Example**

```ts
export default defineUserConfig({
  theme: mixTheme({
    logo: '/images/logo.png',
    title: 'VuePress Mix Theme',
  }),
})
```

:::tip
The jump link to the site logo area is specified by the `themeConfig.home` configuration item.
:::

## Nav Links

The navigation links are specified via the configuration item `themeConfig.navbar`, which accepts an array of navigation items, each item can be either a single inline or outline link, or a navigation group.

**Example**

```ts
export default defineUserConfig({
  theme: mixTheme({
    navbar: [
      // one inline link，to /README.md
      {
        text: 'Home',
        link: '/',
      },
      // or (In this case, the system will automatically generate menu name
      // based on the first-level headings within the document.)
      // '/',

      // one outline link
      {
        text: 'VuePress',
        link: 'https://v2.vuepress.vuejs.org/',
      },
      // or
      // 'https://v2.vuepress.vuejs.org/',

      // dropdown navigation group
      {
        text: 'Programming Languages',
        children: [
          // nav link,
          // currently, only one level of navigation group is supported,
          // i.e. the elements within children cannot be a navigation group.
          '/programming-languages/js.md',
          '/programming-languages/go.md',
          {
            text: 'PHP',
            link: '/programming-languages/php.md',
          },
        ],
      },
    ],
  }),
})
```

## Multi-language switching

It doesn't need to be set manually, the system will automatically integrate or disable this feature based on your site level `locales` configuration.

## Theme Mode Toggle

By default, or you explicitly specify the value of the configuration item `themeConfig.mode` to `auto`, then there will be a theme mode toggle button.

## Search Box

The theme uses the plugin [@vuepress/docsearch](https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html) to integrate the document search functionality. Once you configure the plugin correctly in the `plugins` configuration item, the search button will add to the navigation bar.

:::warning
Although you can also use the plugin [@vuepress/search](https://v2.vuepress.vuejs.org/reference/plugin/search.html), this theme does not provide compatible styles.
:::

## Disable Navbar

If you want to disable the navbar globally, then you can do so by setting the `themeConfig.navbar` value to `false` .

If you just want to disable the navbar on a page, then you can override the global configuration with the frontmatter `sidebar` of the page.
