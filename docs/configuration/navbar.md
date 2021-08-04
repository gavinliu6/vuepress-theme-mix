# Navbar Config

## logo

- Type: `string`

- Explanation: site logo image path

- Reference
  - VuePress official document [Guide > Assets > Relative URLs](https://v2.vuepress.vuejs.org/guide/assets.html#relative-urls)
  - [Guide > Navbar > Site Logo](/guide/navbar.html#site-logo)

## title

- Type: `string`

- Explanation: used to specify the site description, such as the document name.

- Reference
  - [Guide > Navbar > Site Logo](/guide/navbar.html#site-logo)

## navbar

- Type: `false | (NavbarItem | NavbarGroup | string)[]`

- Default: `[]`

- Explanation: configure the list of navigation bar links, which must be an array when not disabled with `false` 。

  - `NavbarItem` is an object constraint that can specify the following fields:

    - `text` - required, navigation name
    - `link` - required, navigation link
    - `target` - optional, specify the `target` attribute of the tag `a` .
    - `rel` - optional, specify the `rel` attribute of the tag `a` .
    - `ariaLabel` - optional, specify the `aria-label` attribute of the tag `a` .

  - `NavbarGroup` indicates that the navigation item is a drop-down navigation group, which is also an object constraint that can specify the following fields:

    - `text` - required, navigation group name
    - `children` - required, its value must be an array, and an array element is either of type `NavbarItem` or `string` .

  - `string` indicates that it is an inline page path or an HTTP(S) outline link, such as `/guide/getting-started.md`, and the navigation name will be automatically generated.

- :triangular_flag_on_post: The global configuration can be overridden in the frontmatter of the page.

- Reference
- [Guide > Navbar > Nav Links](/guide/navbar.html#nav-links)
