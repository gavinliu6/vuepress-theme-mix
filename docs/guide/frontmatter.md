# Frontmatter

> The following is translated from Chinese by ChatGPT.

In addition to the [Frontmatter](https://v2.vuepress.vuejs.org/en/reference/frontmatter.html) built into VuePress 2, this theme also provides the following options.

## Homepage

### home

- Type: `boolean`
- Default: `false`

Indicates whether the page is the homepage.

### heroText

- Type: `string | null`
- Default: The site's [title](https://v2.vuepress.vuejs.org/en/reference/config.html#title)

The main title of the homepage, set to `null` to disable it.

### tagline

- Type: `string | null`
- Default: The site's [description](https://v2.vuepress.vuejs.org/en/reference/config.html#description)

The descriptive slogan below the main title of the homepage, set to `null` to disable it.

### actions

- Type:

  ```
  tsCopy code
  Array<{
    text: string
    link: string
    type?: 'primary' | 'secondary'
  }>
  ```

Buttons on the homepage.

Example:

```md
---
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: View on GitHub
    link: https://github.com/gavinliu6/vuepress-theme-mix
    type: secondary
---
```

### features

- Type:

  ```
  tsCopy code
  Array<{
    title: string
    details: string
  }>
  ```

Describes the features of your site.

### footer

- Type: `string`
- Default: None

Footer of the homepage.

## General pages

### toc

Same as the theme configuration option [toc](/guide/config.html#toc), with higher priority.

### editLink

Same as the theme configuration option [editLink](/guide/config.html#editlink), with higher priority.

### lastUpdated

Same as the theme configuration option [lastUpdated](/guide/config.html#lastupdated), with higher priority.

### contributors

Same as the theme configuration option [contributors](/guide/config.html#contributors), with higher priority.

### sidebar

Same as the theme configuration option [sidebar](/guide/config.html#sidebar), with higher priority.

### sidebarDepth

Same as the theme configuration option [sidebarDepth](/guide/config.html#sidebardepth), with higher priority.

### prev & next

- Type: `string | NavLink`

```ts
// Type definitions

interface NavLink {
  text: string
  ariaLabel?: string
  link: string
  rel?: string
  target?: string
  activeMatch?: string
}
```

Links to the previous and next pages at the bottom of the page. If these two options are not set, the link will be automatically inferred based on the sidebar configuration.
