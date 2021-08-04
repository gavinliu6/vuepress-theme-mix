# Page Config

## toc

- Type: `boolean`

- Default: `true`

- Explanation: used to determine whether to show the table of contents on the right side of the page.

- :triangular_flag_on_post: The global configuration can be overridden in the frontmatter of the page.

## tocLevel

- Type: `number`

- Default: `3`

- Explanation: it's used to set the depth of the table of contents within the page. The default value of `3` indicates that the table of contents is displayed up to the HTML tag `h3` level.

## editLink

- Type: `boolean`

- Default: `true`

- Explanation: Enable the _edit this page_ link or not.

- :triangular_flag_on_post: The global configuration can be overridden in the frontmatter of the page.

## editLinkText

- Type: `string`

- Default: `'Edit this page'`

- Explanation: specify the text of the _edit this page_ link.

## editLinkPattern

> Reference [Default Theme Reference > editlinkpattern](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#editlinkpattern)

## lastUpdated

- Type: `boolean`

- Default: `true`

- Explanation: enable the last updated timestamp or not.

- :triangular_flag_on_post: if `themeConfig.lastUpdated` is true, you can override it in the frontmatter of the page. Otherwise it cannot be overridden in the frontmatter of the page.

## lastUpdatedText

- Type: `string`

- Default: `Last Updated`

- Explanation: specify the text of the last updated timestamp label.
