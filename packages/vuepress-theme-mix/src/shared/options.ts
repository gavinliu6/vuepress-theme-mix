import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { LocaleData } from '@vuepress/shared'

import type { NavbarConfig, SidebarConfig } from './nav.js'

export type ColorMode = 'auto' | 'light' | 'dark'

export type SocialLinkIcon = 'github' | 'twitter' | { svg: string }

export type SocialLink = {
  icon: SocialLinkIcon
  link: string
  ariaLabel?: string
}

export interface MixThemePluginsOptions {
  /**
   * Enable @vuepress/plugin-container or not
   */
  container?: {
    tip?: boolean
    warning?: boolean
    danger?: boolean
    details?: boolean
    codeGroup?: boolean
    codeGroupItem?: boolean
  }

  /**
   * Enable @vuepress/plugin-git or not
   */
  git?: boolean

  /**
   * Enable @vuepress/plugin-medium-zoom or not
   */
  mediumZoom?: boolean

  /**
   * Enable @vuepress/plugin-nprogress or not
   */
  nprogress?: boolean

  /**
   * Custom shiki theme
   */
  shikiTheme?: string
}

export interface MixThemeLocaleData extends LocaleData {
  /**
   * Default theme mode
   *
   * @default 'auto'
   */
  colorMode?: ColorMode

  /**
   * Enable color mode switching and display a button in navbar or not
   *
   * @default true
   */
  colorModeSwitch?: boolean

  /**
   * Navbar color mode config
   *
   * Aria label of of the language selection dropdown
   */
  toggleColorModeAriaLabel?: string

  /**
   * Home path of current locale
   *
   * Used as the link of back-to-home and navbar logo
   */
  home?: string

  /**
   * Navbar config
   *
   * Set to `false` to disable navbar in current locale
   */
  navbar?: false | NavbarConfig

  /**
   * Navbar logo config
   *
   * Logo to display in navbar
   */
  logo?: null | string

  /**
   * Navbar logo config for dark mode
   *
   * Logo to display in navbar in dark mode
   */
  logoDark?: null | string

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
   * Navbar social links config
   *
   * Show your social account links with icons in nav
   */
  socialLinks?: SocialLink[]

  /**
   * Sidebar config
   *
   * Set to `false` to disable sidebar in current locale
   */
  sidebar?: 'auto' | false | SidebarConfig

  /**
   * Sidebar depth
   *
   * - Set to `0` to disable all levels
   * - Set to `1` to include `<h2>`
   * - Set to `2` to include `<h2>` and `<h3>`
   * - ...
   *
   * The max value depends on which headers you have extracted
   * via `markdown.headers.level`.
   *
   * The default value of `markdown.headers.level` is `[2, 3]`,
   * so the default max value of `sidebarDepth` is `2`
   */
  sidebarDepth?: number

  /**
   * Page meta - edit link config
   *
   * Pattern of edit link
   *
   * @example 'https://github.com/gavinliu6/vuepress-theme-mix/edit/main/docs/:path'
   */
  editLink?: string | ((relativePath: string) => string)

  /**
   * Page meta - edit link config
   *
   * The text to replace the default "Edit this page"
   */
  editLinkText?: string

  /**
   * A11y text for sidebar toggle button
   */
  toggleSidebarTitle?: string

  /**
   * Page toc config
   *
   * Set to `false` to disable toc in page aside
   */
  toc?: false

  /**
   * Toc depth
   *
   * - Set to `1` to include `<h2>`
   * - Set to `2` to include `<h2>` and `<h3>`
   * - ...
   *
   * The max value depends on which headers you have extracted
   * via `markdown.headers.level`.
   *
   * The default value of `markdown.headers.level` is `[2, 3]`,
   * so the default max value of `tocDepth` is `2`
   */
  tocDepth?: number

  /**
   * A11y text for toc title
   */
  tocTitle?: string

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
   * Page meta - contributors config
   *
   * Whether to show "Contributors" or not
   */
  contributors?: boolean

  /**
   * Page meta - contributors config
   *
   * The text to replace the default "Contributors"
   */
  contributorsText?: string

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
   * 404 page config
   *
   * Not Found messages for 404 page
   */
  notFound?: string

  /**
   * 404 page config
   *
   * Text of back-to-home link in 404 page
   */
  backToHome?: string
}

export type MixThemeData = ThemeData<MixThemeLocaleData>

export type MixThemeLocaleOptions = MixThemeData
