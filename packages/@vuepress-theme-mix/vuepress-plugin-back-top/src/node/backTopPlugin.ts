import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const backTopPlugin = (): Plugin => ({
  name: '@vuepress-theme-mix/plugin-back-top',

  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
})
