import { Page, Theme, ThemeConfig } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { MixThemePageData, MixThemeData, MixThemePluginConfig } from '../shared'
import {
  assignThemeData,
  resolveMediumZoomPluginOptions,
  resolveContainerPluginOptions,
  resolveContainerPluginOptionsForCodeGroup,
  resolveContainerPluginOptionsForCodeGroupItem,
  resolveContainerPluginOptionsForDetails,
  resolveGitPluginOptions,
  resolveShikiPluginOptions,
} from './utils'

export interface MixThemeConfig extends ThemeConfig, MixThemeData {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: MixThemePluginConfig
}

export const mixTheme: Theme<MixThemeConfig> = (
  { themePlugins = {}, ...localeOptions },
  app
) => {
  if (app.env.isDev && app.options.bundler.endsWith('vite')) {
    app.options.bundlerConfig.viteOptions = require('vite').mergeConfig(
      app.options.bundlerConfig.viteOptions,
      {
        optimizeDeps: {
          exclude: ['ts-debounce'],
        },
      }
    )
  }

  assignThemeData(localeOptions)

  return {
    name: 'vuepress-theme-mix',
    layouts: {
      Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
      404: path.resolve(__dirname, '../client/layouts/404.vue'),
    },
    clientAppEnhanceFiles: path.resolve(
      __dirname,
      '../client/clientAppEnhance.js'
    ),
    clientAppSetupFiles: path.resolve(__dirname, '../client/clientAppSetup.js'),

    extendsPage: (page: Page<MixThemePageData>) => {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title
    },

    // buit-in plugins
    plugins: [
      ['@vuepress-theme-mix/back-top', themePlugins.backTop !== false],

      ['@vuepress/theme-data', { themeData: localeOptions }],
      ['@vuepress/palette', { preset: 'sass' }],

      ['@vuepress/medium-zoom', resolveMediumZoomPluginOptions(themePlugins)],
      [
        '@vuepress/container',
        resolveContainerPluginOptions(themePlugins, localeOptions, 'tip'),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptions(themePlugins, localeOptions, 'warning'),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptions(themePlugins, localeOptions, 'danger'),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptions(themePlugins, localeOptions, 'reference'),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptionsForDetails(themePlugins),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptionsForCodeGroup(themePlugins),
      ],
      [
        '@vuepress/container',
        resolveContainerPluginOptionsForCodeGroupItem(themePlugins),
      ],
      ['@vuepress/shiki', resolveShikiPluginOptions(themePlugins)],
      ['@vuepress/nprogress', themePlugins.nprogress !== false],
      ['@vuepress/git', resolveGitPluginOptions(themePlugins, localeOptions)],
    ],

    extendsMarkdown: (md): void => {
      if (localeOptions.figcaption !== false) {
        md.use(require('markdown-it-implicit-figures'), {
          figcaption: true,
        })
      }
      if (localeOptions.sub !== false) md.use(require('markdown-it-sub'))
      if (localeOptions.sup !== false) md.use(require('markdown-it-sup'))
      if (localeOptions.footnote !== false) {
        md.use(require('markdown-it-footnote'))
      }
    },
  }
}
