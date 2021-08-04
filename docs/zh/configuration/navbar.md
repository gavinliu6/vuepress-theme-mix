# 导航栏配置

## logo

- 类型：`string`

- 说明：指定站点 Logo 图片

- 参考
  - VuePress 官方文档 [指南 > 静态资源 > 相对路径](https://v2.vuepress.vuejs.org/zh/guide/assets.html#相对路径)
  - [指南 > 导航栏 > 网站 Logo](/zh/guide/navbar.html#%E7%BD%91%E7%AB%99-logo)

## title

- 类型：`string`

- 说明：用于指定紧邻 Logo 的站点描述，比如文档名称。

- 参考
  - [指南 > 导航栏 > 网站 Logo](/zh/guide/navbar.html#%E7%BD%91%E7%AB%99-logo)

## navbar

- 类型：`false | (NavbarItem | NavbarGroup | string)[]`

- 默认值：`[]`

- 说明：配置导航栏链接列表，不使用 `false` 禁用时，必须是一个数组

  - `NavbarItem` 是一个对象约束，可指定下列字段：

    - `text` - 必须，设置导航链接名称
    - `link` - 必须，导航链接路径
    - `target` - 可选，设置 HTML `a` 标签的 `target` 属性
    - `rel` - 可选，设置 HTML `a` 标签的 `rel` 属性
    - `ariaLabel` - 可选，设置 HTML `a` 标签的 `aria-label` 属性

  - `NavbarGroup` 类型的值表明该导航项是一个下拉导航组，它也是一个对象约束，可指定下列字段：

    - `text` - 必须，设置导航组名称
    - `children` - 必须，它的值必须是个数组，数组元素要么是 `NavbarItem` 类型，要么是 `string` 类型。

  - `string` 类型的导航链接表明它是一个站内页面路径或一个 HTTP(S) 站外链接，比如 `/zh/guide/getting-started.md`，导航名称会自动生成。

- :triangular_flag_on_post: 可在页面的 frontmatter 中覆盖掉全局配置

- 参考
  - [指南 > 导航栏 > 导航链接](/zh/guide/navbar.html#导航链接)
