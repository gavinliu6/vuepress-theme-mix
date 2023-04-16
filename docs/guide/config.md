# Configuration

> The following is translated from Chinese by ChatGPT.

::: tip
This page only describes theme-level configuration options. For other site-level configuration options independent of the theme, please refer to the official documentation [Reference > VuePress > Configuration](https://v2.vuepress.vuejs.org/reference/config.html).
:::

## Basic Configuration

### locales

Like the official default theme for VuePress 2, Mix also supports multi-language configurations. You can use the `locales` option to apply different configuration values for different languages.

```ts
export default {
  theme: mixTheme({
    locales: {
      '/': {
        // Default language configuration item
      },

      '/klingon/': {
        // Configuration item for the Klingon language
      },
    },
  }),
}
```

In addition to [plugin configuration](#plugin-configuration), all other configuration options for this theme support multi-language configuration.

::: warning Note
Do not confuse the theme-level `locales` configuration option here with the site-level `locales` configuration option in VuePress 2. Please refer to [Reference > VuePress > Configuration](https://v2.vuepress.vuejs.org/reference/config.html#locales) for more information.
:::

## Appearance

### colorMode

- Type: `'auto' | 'light' | 'dark'`
- Default: `auto`

You can choose the appearance color of the theme according to your personal preference. The default value `auto` means that the theme color changes dynamically with the system settings. Additionally, you can set this option to `light` or `dark` to use a single color mode.

### colorModeSwitch

- Type: `boolean`
- Default: `true`

By default, the color mode switch menu is displayed in the top navigation bar. You can hide it by setting `colorModeSwitch` to `false`.

### toggleColorModeAriaLabel

- Type: `string`
- Default: `'Toggle color mode'`

Specify the `aria-label` attribute of the color mode switch menu. This is mainly for site accessibility (a11y).

## Navbar

### logo

- Type: `null|string`
- Default: `null`

Specifies the logo image URL on the left side of the top navigation bar. It can be either a [Public file path](https://v2.vuepress.vuejs.org/guide/assets.html#public-files) or an HTTP URL.

Example:

```ts
export default {
  theme: mixTheme({
    // Public file path
    logo: '/images/logo.png',
    // URL
    logo: 'https://vuejs.org/images/logo.png',
  }),
}
```

### logoDark

Same as the `logo` option, but used for the logo image in dark mode.

### navbar

- Type: `false | (NavbarItem | NavbarGroup | string)[]`
- Default: `[]`

```ts
// Type definitions

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

Example 1:

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
      // String - page file path
      '/bar/README.md',
    ],
  }),
}
```

Example 2:

```ts
export default {
  theme: defaultTheme({
    navbar: [
      // nested group - max depth is 2
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      // control when should the item be active
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // this item will always be active
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // this item will be active when current route path starts with /foo/
            // regular expression is supported
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
  }),
}
```

In addition, if you set this configuration item to `false`, the entire top navigation bar will be hidden.

### socialLinks

- Type: `SocialLink[]`
- Default: `[]`

```ts
// Type Definition

type SocialLinkIcon = 'github' | 'twitter' | { svg: string }

type SocialLink = {
  icon: SocialLinkIcon
  link: string
  ariaLabel?: string
}
```

In addition to the above navigation menu, you can also add your own social accounts to the navigation bar. The currently built-in menu icons are GitHub and Twitter, but you can provide an SVG string to add the menu icon you want.

## Sidebar

### sidebar

- Type: `false | 'auto' | SidebarConfigArray | SidebarConfigObject`
- Default: `'auto'`

```ts
// Type definitions

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

Setting it to `false` disables the sidebar navigation. Setting it to `'auto'` generates the sidebar based on page titles.

When the configuration type of an item is SidebarGroup, you can also use `collapsible` to control whether it can be collapsed, and its default value is `true`.

The array-style sidebar configuration will make the entire site use the same sidebar navigation. When your document structure is relatively simple and closely related, you may prefer this approach.

Example 1:

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
            collapsible: false,
          },
          // String - Page file path
          '/foo/bar.md',
        ],
      },
      // String - Page file path
      '/bar/README.md',
    ],
  }),
}
```

When you have a large number of documents and need to divide them into different structures, the object-style sidebar configuration comes in handy. In this way, different sub-paths will use their own independent sidebar navigation.

Example 2:

```ts
export default {
  theme: mixTheme({
    // Sidebar object
    // Different sub-paths will use different sidebar navigations
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

- Type: `number`
- Default: `2`

Set the maximum depth of the sidebar automatically generated according to the page title, set to `0` to disable this function, set to `1` to show only `<h2>` title, set to `2` to show `<h2>`, `<h3>` title, and so on.

## Page Configuration

### home

- Type: `string`
- Default: `'/'`

Specifies the path of the homepage. This value is used in the leftmost link of the navigation bar and the return to homepage link on the 404 page.

### editLink

- Type: `string | ((relativePath: string) => string)`

The link pattern for editing the page (excluding the homepage) at the bottom of the page.

Example 1:

```ts
export default {
  theme: mixTheme({
    editLink:
      'https://github.com/gavinliu6/vuepress-theme-mix/edit/main/docs/:path',
  }),
}
```

Example 2:

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

- Type: `string`
- Default: `Edit this page`

The link text for editing the page (excluding the homepage) at the bottom of the page.

### toc

- Type: `false`

Whether to display the table of contents on the page by default. You can set this option to `false` to turn it off.

### tocDepth

- Type: `number`
- Default: `2`

Sets the display depth of the table of contents. Setting it to `1` will only show the `<h2>` title, setting it to `2` will show the `<h2>` and `<h3>` titles, and so on.

### tocTitle

- Type: `string`
- Default: `Table of Contents`

The indicative title of the table of contents.

### lastUpdated

- Type: `boolean`
- Default: `true`

Whether to display the last update time of the document at the bottom of the page.

### lastUpdatedText

- Type: `string`
- Default: `'Last Updated'`

The label text for the last update time.

### contributors

- Type: `boolean`
- Default: `true`

Whether to display a list of document contributors at the bottom of the page.

### contributorsText

- Type: `string`
- Default: `'Contributors'`

The label text for document contributors.

## Others

### tip

- Type: `string`
- Default: `Tip`

The title of the custom container [tip](/guide/markdown.html#custom-containers).

### warning

- Type: `string`
- Default: `Warning`

The title of the custom container [warning](/guide/markdown.html#custom-containers).

### danger

- Type: `string`
- Default: `Danger`

The title of the custom container [danger](/guide/markdown.html#custom-containers).

### selectLanguageAriaLabel

- Type: `string`
- Default: `'Select language'`

Specifies the `aria-label` attribute of the language selection menu in the navigation bar, mainly for site accessibility (a11y).

### selectLanguageName

- Type: `string`
- Default: none

Specifies the language name displayed in the drop-down list of the language selection menu. Note that this option is only valid within the [locales](#locales) configuration option of the theme.

## Plugin Configuration

The Mix theme uses multiple plugins by default. You can selectively disable them by modifying the following configuration options, all of which are wrapped in `themePlugins`.

### git

- Type: `boolean`
- Default: `true`

Enables the [@vuepress/plugin-git](https://v2.vuepress.vuejs.org/plugin/official/plugin-git.html) plugin.

### mediumZoom

- Type: `boolean`
- Default: `true`

Enables the [@vuepress/plugin-medium-zoom](https://v2.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html) plugin.

### nprogress

- Type: `boolean`
- Default: `true`

Enables the [@vuepress/plugin-nprogress](https://v2.vuepress.vuejs.org/plugin/official/plugin-nprogress.html) plugin.

### shikiTheme

- Type: `string`
- Default: `'one-dark-pro'`

The Mix theme uses the [@vuepress/plugin-shiki](https://v2.vuepress.vuejs.org/plugin/official/plugin-shiki.html) plugin to highlight code, which cannot be disabled, but you can specify the Shiki theme to use. [Here](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes) is a list of all available Shiki themes.
