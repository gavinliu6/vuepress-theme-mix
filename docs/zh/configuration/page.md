# 页面配置

## toc

- 类型：`boolean`

- 默认值：`true`

- 说明：是否在页面的右侧悬浮显示页内目录导航

- :triangular_flag_on_post: 可在页面的 frontmatter 中覆盖掉全局配置

## tocLevel

- 类型：`number`

- 默认值：`3`

- 说明：设置页内目录的层级深度，默认值 `3` 表示最多显示到 HTML 标签 `h3` 级别。

## editLink

- 类型：`boolean`

- 默认值：`true`

- 说明：是否在页面底部显示编辑此文档的链接。

- :triangular_flag_on_post: 可在页面的 frontmatter 中覆盖掉全局配置。

## editLinkText

- 类型： string

- 默认值： 'Edit this page'

- 说明：编辑此页链接的文字。

## editLinkPattern

> 参阅 VuePress 2 默认主题的该项配置说明 [默认主题参考 > editLinkPattern](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#editlinkpattern)

## lastUpdated

- 类型：`boolean`

- 默认值：`true`

- 说明：是否在页面底部显示文档最近更新时间，它仅在 `themePlugins.git` 为 `true` 时生效。

- :triangular_flag_on_post: 只有当 `themeConfig.lastUpdated` 设置为 `true` 时，你才能在页面的 frontmatter 中覆盖全局配置。

## lastUpdatedText

- 类型： string

- 默认值： 'Last Updated'

- 说明：最近更新时间的说明文字。
