import type { LocaleData } from '@vuepress/core'
import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { NavbarConfig } from './navbarConfig'
import type { SidebarConfig } from './sidebarConfig'

export interface MixThemePluginConfig {
  /**
   * Enable @vuepress-theme-mix/vuepress-plugin-back-top or not
   */
  backTop?: boolean

  /**
   * Enable @vuepress/plugin-medium-zoom or not
   */
  mediumZoom?: boolean

  /**
   * Enable @vuepress/plugin-container or not
   */
  container?: {
    tip?: boolean
    warning?: boolean
    danger?: boolean
    reference?: boolean
    details?: boolean
    codeGroup?: boolean
    codeGroupItem?: boolean
  }

  /**
   * Enable @vuepress/plugin-prismjs or not
   */
  prismjs?: boolean

  /**
   * Enable @vuepress/plugin-nprogress or not
   */
  nprogress?: boolean

  /**
   * Enable @vuepress/plugin-git or not
   */
  git?: boolean
}

export interface MixThemeLocaleData extends LocaleData {
  // Theme mode
  mode?: 'light' | 'dark' | 'auto'

  // Aria label of of the theme toggle button
  toggleThemeModeAriaLabel?: string

  // Logo imgage path
  logo?: null | string

  // The title next to the logo
  title?: null | string

  // Home page link
  home?: string

  /**
   * Navbar config
   *
   * Set to `false` to disable navbar in current locale
   */
  navbar?: false | NavbarConfig

  /**
   * Navbar language selection config
   *
   * Text of the language selection dropdown
   */
  selectLanguageText?: string

  /**
   * Navbar language selection config
   *
   * Aria label of of the language selection dropdown
   */
  selectLanguageAriaLabel?: string

  /**
   * Navbar language selection config
   *
   * Language name of current locale
   *
   * Displayed inside the language selection dropdown
   */
  selectLanguageName?: string

  /**
   * Sidebar config
   *
   * Set to `false` to disable sidebar in current locale
   *
   * Set to `SidebarConfigArray` to use the same sidebar for all the pages
   *
   * Set to `SidebarConfigObject` to use individual sidebar.
   */
  sidebar?: false | SidebarConfig

  /**
   * Set to `false` to disable TOC
   */
  toc?: false

  /**
   * Headers level shown in TOC
   */
  tocLevel?: number

  /**
   * Page meta - edit link config
   *
   * Whether to show "Edit this page" or not
   */
  editLink?: boolean

  /**
   * Page meta - edit link config
   *
   * The text to replace the default "Edit this page"
   */
  editLinkText?: string

  /**
   * Page meta - edit link config
   *
   * Pattern of edit link
   *
   * @example ':repo/edit/:branch/:path'
   */
  editLinkPattern?: string

  /**
   * Page meta - edit link config
   *
   * Use `repo` config by default
   *
   * Set this config if your docs is placed in a different repo
   */
  docsRepo?: string

  /**
   * Page meta - edit link config
   *
   * Set this config if the branch of your docs is not 'main'
   */
  docsBranch?: string

  /**
   * Page meta - edit link config
   *
   * Set this config if your docs is placed in sub dir of your `docsRepo`
   */
  docsDir?: string

  /**
   * Page meta - last updated config
   *
   * Whether to show "Last Updated" or not
   */
  lastUpdated?: boolean

  /**
   * Page meta - last updated config
   *
   * The text to replace the default "Last Updated"
   */
  lastUpdatedText?: string

  /**
   * Custom block config
   *
   * Default title of TIP custom block
   */
  tip?: string

  /**
   * Custom block config
   *
   * Default title of WARNING custom block
   */
  warning?: string

  /**
   * Custom block config
   *
   * Default title of DANGER custom block
   */
  danger?: string

  /**
   * Custom block config
   *
   * Default title of REFERENCE custom block
   */
   reference?: string

  /**
   * Config markdown-it plugins
   *
   * Set to `false` to disable the plugin
   */
  sub?: false
  sup?: false
  footnote?: false
  figcaption?: false

  /**
   * 404 page config
   *
   * Not Found messages for 404 page
   */
  notFound?: string[]

  /**
   * 404 page config
   *
   * Text of back-to-home link in 404 page
   */
  backToHome?: string
}

export type MixThemeData = ThemeData<MixThemeLocaleData>
