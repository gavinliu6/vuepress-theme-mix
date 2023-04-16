import type { Page, Theme } from '@vuepress/core'
import { containerPlugin } from '@vuepress/plugin-container'
import { gitPlugin } from '@vuepress/plugin-git'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { fs, getDirname, path } from '@vuepress/utils'

import type {
  MixThemeLocaleOptions,
  MixThemePageData,
  MixThemePluginsOptions,
} from '../shared/index.js'
import {
  assignDefaultLocaleOptions,
  resolveContainerPluginOptions,
} from './utils/index.js'

const __dirname = getDirname(import.meta.url)

export interface MixThemeOptions extends MixThemeLocaleOptions {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: MixThemePluginsOptions
}

export const mixTheme = ({
  themePlugins = {},
  ...localeOptions
}: MixThemeOptions): Theme => {
  assignDefaultLocaleOptions(localeOptions)

  return {
    name: 'vuepress-theme-mix',

    templateBuild: path.resolve(__dirname, '../../templates/build.html'),

    alias: {
      // use alias to make all components replaceable
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/components'))
          .filter(file => file.endsWith('.vue'))
          .map(file => [
            `@theme/${file}`,
            path.resolve(__dirname, '../client/components', file),
          ])
      ),
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    extendsPage: (page: Page<Partial<MixThemePageData>>) => {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title
    },

    plugins: [
      // @vuepress/plugin-container
      themePlugins.container?.tip !== false
        ? containerPlugin(resolveContainerPluginOptions(localeOptions, 'tip'))
        : [],
      themePlugins.container?.warning !== false
        ? containerPlugin(
            resolveContainerPluginOptions(localeOptions, 'warning')
          )
        : [],
      themePlugins.container?.danger !== false
        ? containerPlugin(
            resolveContainerPluginOptions(localeOptions, 'danger')
          )
        : [],
      themePlugins.container?.details !== false
        ? containerPlugin({
            type: 'details',
            before: info =>
              `<details class="custom-container details">${
                info ? `<summary>${info}</summary>` : ''
              }\n`,
            after: () => '</details>\n',
          })
        : [],
      themePlugins.container?.codeGroup !== false
        ? containerPlugin({
            type: 'code-group',
            before: () => `<CodeGroup>\n`,
            after: () => '</CodeGroup>\n',
          })
        : [],
      themePlugins.container?.codeGroupItem !== false
        ? containerPlugin({
            type: 'code-group-item',
            before: info => `<CodeGroupItem title="${info}">\n`,
            after: () => '</CodeGroupItem>\n',
          })
        : [],

      // @vuepress/plugin-git
      themePlugins.git !== false
        ? gitPlugin({
            createdTime: false,
            updatedTime: localeOptions.lastUpdated !== false,
            contributors: localeOptions.contributors !== false,
          })
        : [],

      // @vuepress/plugin-medium-zoom
      themePlugins.mediumZoom !== false
        ? mediumZoomPlugin({
            selector: '.md-container > img, .md-container :not(a) > img',
            zoomOptions: {},
            // should greater than page transition duration
            delay: 300,
          })
        : [],

      // @vuepress/plugin-nprogress
      themePlugins.nprogress !== false ? nprogressPlugin() : [],

      // @vuepress/plugin-theme-data
      themeDataPlugin({ themeData: localeOptions }),

      // @vuepress/plugin-shiki
      shikiPlugin({
        theme: themePlugins.shikiTheme ?? 'one-dark-pro',
      }),
    ],
  }
}
