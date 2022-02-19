import type { MediumZoomPluginOptions } from '@vuepress/plugin-medium-zoom'
import type { MixThemePluginConfig } from '../../shared'

/**
 * Resolve options for @vuepress/plugin-medium-zoom
 */
export const resolveMediumZoomPluginOptions = (
  themePlugins: MixThemePluginConfig
): MediumZoomPluginOptions | boolean => {
  if (themePlugins?.mediumZoom === false) {
    return false
  }

  return {
    selector: '.theme-mix-content > img:not(.no-zoom), .theme-mix-content :not(a) > img',
    zoomOptions: {},
    delay: 500,
  }
}
