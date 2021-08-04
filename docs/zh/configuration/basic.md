# 基础配置

## mode

- 类型：`'light' | 'dark' | 'auto'`

- 默认值：`auto`

- 说明：指定主题模式

  - `light` - 明亮模式
  - `dark` - 暗黑模式
  - `auto` - 根据操作系统的主题模式自动切换

- 参考
  - [指南 > 主题外观](/zh/guide/appearance.md)

## home

- 类型：`string`

- 默认值：`/`

- 说明：指定首页链接，用于导航栏的 Logo 链接以及 404 等页面的回到首页链接，注意不要和页面 frontmatter 中的 `home` 字段混淆了。

## docsRepo

- 类型： `string`

- 说明： 文档源文件的仓库 URL 。它将会用于生成 编辑此页 的链接。

## docsBranch

- 类型： `string`

- 默认值： `main`

- 说明：文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。

## docsDir

- 类型： `string`

- 默认值： `''`

- 说明：文档源文件存放在仓库中的目录名。它将会用于生成 编辑此页 的链接。

## notFound

- 类型：`string[]`

- 默认值：`["Oops! You're lost. 😕"]`

- 说明：设定 404 页面的说明信息，如果你配置了多个，主题会随机选择一个显示它。

## backToHome

- 类型：`string`

- 默认值：`'Back to home'`

- 说明：设定 404 页面中回到首页的链接文字。
