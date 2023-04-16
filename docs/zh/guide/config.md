# 配置

::: tip
本页内容仅描述主题级别配置项，其他独立于主题的站点配置项请参阅官方文档 [参考 > VuePress > 配置](https://v2.vuepress.vuejs.org/zh/reference/config.html) 。
:::

## 基础配置

### locales

与 VuePress 2 的官方默认主题一样，Mix 也支持多语言配置，你可以使用配置项 `locales` 针对不同语言应用不同的配置值。

```ts
export default {
  theme: mixTheme({
    locales: {
      '/': {
        // 默认语言的配置项
      },

      '/klingon/': {
        // 克林贡语的配置项
      },
    },
  }),
}
```

除了 [插件配置](#插件配置) 外，本主题的所有其他配置项都支持多语言配置。

::: warning 注意
不要将这里主题级别的 `locales` 配置项与 VuePress 2 站点级别的配置项 [locales](https://v2.vuepress.vuejs.org/zh/reference/config.html#locales) 搞混了。
:::

## 外观

### colorMode

- 类型：`'auto' | 'light' | 'dark'`
- 默认值：`auto`

你可以根据个人喜好选择主题的外观颜色，默认的 `auto` 表示主题颜色跟随系统设置动态变化。另外，你也可以将此配置项设置为 `light` 或 `dark` 仅使用单一的颜色模式。

### colorModeSwitch

- 类型：`boolean`
- 默认值：`true`

默认情况下，顶部导航栏中会显示颜色模式切换菜单，将 `colorModeSwitch` 设置为 `false` 可隐藏它。

### toggleColorModeAriaLabel

- 类型：`string`
- 默认值：`'Toggle color mode'`

指定颜色模式切换菜单的 `aria-label` 属性，这主要是为了站点的可访问性 (a11y)。

## 导航栏

### logo

- 类型：`null|string`
- 默认值：`null`

指定顶部导航栏左侧的 Logo 图片地址，既可以是 [Public 文件路径](https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-文件)，也可以是 HTTP URL 地址。

示例：

```ts
export default {
  theme: mixTheme({
    // Public 文件路径
    logo: '/images/logo.png',
    // URL
    logo: 'https://vuejs.org/images/logo.png',
  }),
}
```

### logoDark

同配置项 `logo`，只不过它是用在暗黑模式下的 Logo 图片。

### navbar

- 类型：`false | (NavbarItem | NavbarGroup | string)[]`
- 默认值：`[]`

```ts
// 类型定义

interface NavItem {
  text: string
  ariaLabel?: string
}

interface NavGroup<T> extends NavItem {
  children: T[]
}

interface NavbarItem extends NavItem {
  link: string
  rel?: string
  target?: string
  activeMatch?: string
}

type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>
```

示例 1：

```ts
export default {
  theme: mixTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
}
```

示例 2：

```ts
export default {
  theme: mixTheme({
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
  }),
}
```

另外，如果你将此配置项设置为 `false` ，整个顶部导航栏将会被隐藏。

### socialLinks

- 类型：`SocialLink[]`
- 默认值：`[]`

```ts
// 定义

type SocialLinkIcon = 'github' | 'twitter' | { svg: string }

type SocialLink = {
  icon: SocialLinkIcon
  link: string
  ariaLabel?: string
}
```

除了上述的导航菜单外，你还可以在导航栏中添加自己的社交账号，目前内置的菜单 Icon 有 GitHub 和 Twitter，你可以自己提供 SVG 字符串来添加你想要的菜单 Icon。

示例：

```ts
export default {
  theme: mixTheme({
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/gavinliu6/vuepress-theme-mix',
      },
      { icon: 'twitter', link: '...' },
      {
        icon: {
          svg: '<svg>...</svg>',
        },
        link: '...',
      },
    ],
  }),
}
```

## 侧边栏

### sidebar

- 类型：`false | 'auto' | SidebarConfigArray | SidebarConfigObject`
- 默认值：`auto`

```ts
// 类型定义

interface NavItem {
  text: string
  ariaLabel?: string
}

interface NavGroup<T> extends NavItem {
  children: T[]
}

interface NavLink extends NavItem {
  link: string
  rel?: string
  target?: string
  activeMatch?: string
}

type SidebarItem = NavItem & Partial<NavLink>
type SidebarGroup = SidebarItem &
  NavGroup<SidebarItem | SidebarGroup | string> & {
    collapsible?: boolean
  }

type SidebarConfigArray = (SidebarItem | SidebarGroup | string)[]
type SidebarConfigObject = Record<string, SidebarConfigArray>
```

设置为 `false` 时，禁用侧边导航栏；设置为 'auto'，侧边栏会根据页面标题自动生成。

当某一项的配置类型是 `SidebarGroup` 时，你还可以使用 `collapsed` 来控制它的默认开闭状态，其默认值是 `false`，即默认情况下，所有 SidebarGroup 都是打开的。

数组风格的侧边栏配置会使得全站共用一套侧边导航栏，当你的文档结构较为简单，且关联性较强时，你也许更喜欢这种方式。

示例 1：

```ts
export default {
  theme: mixTheme({
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
}
```

当你的文档数量众多，并且需要划分不同的结构时，对象风格的侧边栏配置就派上用场了。这样，不同的子路径将会使用各自独立的侧边栏。

示例 2：

```ts
export default {
  theme: mixTheme({
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/README.md', '/guide/getting-started.md'],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
  }),
}
```

### sidebarDepth

- 类型：`number`
- 默认值：`2`

设置根据页面标题自动生成的侧边栏的最大深度，设置为 `0` 时关闭此功能，设置为 `1` 时仅显示 `<h2>` 标题，设置为 `2` 时显示 `<h2>`、`<h3>` 标题，以此类推。

## 页面配置

### home

- 类型：`string`
- 默认值：`'/'`

指定首页的路径，此值会用在导航栏的最左侧链接，以及 404 页面的返回首页链接。

### editLink

- 类型：`string | ((relativePath: string) => string)`

页面（不包括首页）底部编辑本页的链接模式。

示例 1：

```ts
export default {
  theme: mixTheme({
    editLink:
      'https://github.com/gavinliu6/vuepress-theme-mix/edit/main/docs/:path',
  }),
}
```

示例 2：

```ts
export default {
  theme: mixTheme({
    editLink: ({ relativePath }) => {
      if (relativePath.startsWith('packages/')) {
        return `https://github.com/acme/monorepo/edit/main/${relativePath}`
      } else {
        return `https://github.com/acme/monorepo/edit/main/docs/${relativePath}`
      }
    },
  }),
}
```

### editLinkText

- 类型：`string`
- 默认值：`Edit this page`

页面（不包括首页）底部编辑本页的链接文字。

### toc

- 类型：`false`

页面目录默认显示，你可以将此配置项设置为 `false` 来关闭它。

### tocDepth

- 类型：`number`
- 默认值：`2`

设置页面目录显示级别，设置为 `1` 时仅显示 `<h2>` 标题，设置为 `2` 时显示 `<h2>`、`<h3>` 标题，以此类推。

### tocTitle

- 类型：`string`
- 默认值：`Table of Contents`

页面目录的指示性标题。

### lastUpdated

- 类型：`boolean`
- 默认值：`true`

是否在页面底部显示文档最近更新时间。

### lastUpdatedText

- 类型：`string`
- 默认值：`'Last Updated'`

最近更新时间的标签文字。

### contributors

- 类型：`boolean`
- 默认值：`true`

是否在页面底部显示文档贡献者列表。

### contributorsText

- 类型：`string`
- 默认值：`'Contributors'`

文档贡献者的标签文字。

## 其他

### tip

- 类型：`string`
- 默认值：`Tip`

自定义容器 [tip](/zh/guide/markdown.html#自定义容器) 的标题。

### warning

- 类型：`string`
- 默认值：`Warning`

自定义容器 [warning](/zh/guide/markdown.html#自定义容器) 的标题。

### danger

- 类型：`string`
- 默认值：`Danger`

自定义容器 [danger](/zh/guide/markdown.html#自定义容器) 的标题。

### selectLanguageAriaLabel

- 类型：`string`
- 默认值：`'Select language'`

指定导航栏中选择语言菜单的 `aria-label` 属性，它主要是为了站点的可访问性 (a11y)。

### selectLanguageName

- 类型：`string`
- 默认值：无

指定选择语言菜单的下拉列表中显示的语言名称，请注意该配置项仅在主题配置项 [locales](#locales) 内部有效。

## 插件配置

Mix 主题默认使用了多个插件，通过修改下面的配置你可以有选择地关闭它们，这些配置项都包裹在 `themePlugins` 中。

### git

- 类型：`boolean`
- 默认值：`true`

是否启用插件 [@vuepress/plugin-git](https://v2.vuepress.vuejs.org/zh/reference/plugin/git.html) 。

### mediumZoom

- 类型：`boolean`
- 默认值：`true`

是否启用插件 [@vuepress/plugin-medium-zoom](https://v2.vuepress.vuejs.org/zh/reference/plugin/medium-zoom.html) 。

### nprogress

- 类型：`boolean`
- 默认值：`true`

是否启用插件 [@vuepress/plugin-nprogress](https://v2.vuepress.vuejs.org/zh/reference/plugin/nprogress.html) 。

### shikiTheme

- 类型：`string`
- 默认值：`one-dark-pro`

Mix 主题使用插件 [@vuepress/plugin-shiki](https://v2.vuepress.vuejs.org/zh/reference/plugin/shiki.html) 高亮代码，且不可关闭，但是你可以指定 Shiki 的主题。[这里](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes) 列出了所有可用的 Shiki 主题。
