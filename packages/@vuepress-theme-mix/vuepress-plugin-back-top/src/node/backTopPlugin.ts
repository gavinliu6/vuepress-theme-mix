import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const backTopPlugin = (): Plugin => ({
  name: '@vuepress-theme-mix/plugin-back-top',

  clientAppRootComponentFiles: path.resolve(__dirname, '../client/BackTop.vue'),
})
