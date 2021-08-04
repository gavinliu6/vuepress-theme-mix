import type { GitPluginOptions } from '@vuepress/plugin-git'
import type {
  MixThemePluginConfig,
  MixThemeLocaleData,
} from '../../shared'

/**
 * Resolve options for @vuepress/plugin-git
 */
export const resolveGitPluginOptions = (
  themePlugins: MixThemePluginConfig,
  localeOptions: MixThemeLocaleData
): GitPluginOptions | boolean => {
  if (themePlugins?.git === false) {
    return false
  }

  const enableUpdatedTime = localeOptions.lastUpdated !== false

  if (!enableUpdatedTime) {
    return false
  }

  return {
    createdTime: false,
    updatedTime: enableUpdatedTime,
  }
}
