# Plugins Config

## themePlugins.mediumZoom

- Type: `boolean`

- Default: `true`

- Explanation: enable the [@vuepress/medium-zoom](https://v2.vuepress.vuejs.org/reference/plugin/medium-zoom.html) plugin or not.

## themePlugins.container

The configuration items for each type of container are listed in the following table:

| Field Name                             | Type      | Default | Explanation                                       |
| -------------------------------------- | --------- | ------- | ------------------------------------------------- |
| `themePlugins.container.tip`           | `boolean` | `true`  | enable container of type `tip` or not             |
| `themePlugins.container.warning`       | `boolean` | `true`  | enable container of type `warning` or not         |
| `themePlugins.container.danger`        | `boolean` | `true`  | enable container of type `danger` or not          |
| `themePlugins.container.reference`     | `boolean` | `true`  | enable container of type `reference` or not       |
| `themePlugins.container.detail`        | `boolean` | `true`  | enable container of type `detail` or not          |
| `themePlugins.container.codeGroup`     | `boolean` | `true`  | enable container of type `code-group` or not      |
| `themePlugins.container.codeGroupItem` | `boolean` | `true`  | enable container of type `code-group-item` or not |

> Check out [Guide > Writing Content > Custom Containers](/guide/writing-content.html#custom-containers) for details.

## themePlugins.nprogress

- Type: `boolean`

- Default: `true`

- Explanation: enable the [@vuepress/nprogress](https://v2.vuepress.vuejs.org/reference/plugin/nprogress.html) plugin or not.

## themePlugins.git

- Type: `boolean`

- Default: `true`

- Explanation: enable the [@vuepress/git](https://v2.vuepress.vuejs.org/reference/plugin/git.html) plugin or not.

## themePlugins.shiki

- Type: false | { theme: string, langs: [] }

- Default: { theme: 'github-dark-dimmed', langs: [] }

- Explanation: it's used to set the plugin [@vuepress/shiki](https://v2.vuepress.vuejs.org/reference/plugin/shiki.html), you can set `false` to disable it。

> Check out official document [shiki](https://v2.vuepress.vuejs.org/reference/plugin/shiki.html) for details.
