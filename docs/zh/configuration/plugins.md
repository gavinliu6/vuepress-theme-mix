# 插件配置

配置插件的位置有两处，一处是配置对象的根属性 `plugins`，它主要用来应用非主题内置的插件，或者主题不能替用户预先配置的插件，例如 [@vuepress/docsearch](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html) 等。另一处则是主题级别的插件配置 `themePlugins` 。

## themePlugins.mediumZoom

- 类型：`boolean`

- 默认值：`true`

- 说明：是否启用插件 [@vuepress/medium-zoom](https://v2.vuepress.vuejs.org/zh/reference/plugin/medium-zoom.html)

## themePlugins.container

各个类型容器的配置项见下表：

| 字段名                                 | 类型      | 默认值 | 说明                                    |
| -------------------------------------- | --------- | ------ | --------------------------------------- |
| `themePlugins.container.tip`           | `boolean` | `true` | 是否禁用类型为 `tip` 的容器             |
| `themePlugins.container.warning`       | `boolean` | `true` | 是否禁用类型为 `warning` 的容器         |
| `themePlugins.container.danger`        | `boolean` | `true` | 是否禁用类型为 `danger` 的容器          |
| `themePlugins.container.reference`     | `boolean` | `true` | 是否禁用类型为 `reference` 的容器       |
| `themePlugins.container.detail`        | `boolean` | `true` | 是否禁用类型为 `detail` 的容器          |
| `themePlugins.container.codeGroup`     | `boolean` | `true` | 是否禁用类型为 `code-group` 的容器      |
| `themePlugins.container.codeGroupItem` | `boolean` | `true` | 是否禁用类型为 `code-group-item` 的容器 |

> 参考 [指南 > 编写文档 > 自定义容器](/zh/guide/writing-content.html#自定义容器)

## themePlugins.nprogress

- 类型：`boolean`

- 默认值：`true`

- 说明：是否启用插件 [@vuepress/nprogress](https://v2.vuepress.vuejs.org/zh/reference/plugin/nprogress.html)

## themePlugins.git

- 类型：`boolean`

- 默认值：`true`

- 说明：是否启用插件 [@vuepress/git](https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html)，该配置项应与 `themeConfig.lastUpdated` 配置项结合使用。
