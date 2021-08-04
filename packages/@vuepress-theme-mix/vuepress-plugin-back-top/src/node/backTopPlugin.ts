import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export type BackTopPluginOptions = Record<never, never>

export const backTopPlugin: Plugin<BackTopPluginOptions> = (_, app) => {
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

  return {
    name: '@vuepress-theme-mix/plugin-back-top',

    clientAppRootComponentFiles: path.resolve(
      __dirname,
      '../client/BackTop.vue'
    ),
  }
}
