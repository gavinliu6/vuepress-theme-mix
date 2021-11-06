import type {
  MixThemePluginConfig,
} from '../../shared'

export const resolveShikiPluginOptions = (
  themePlugins: MixThemePluginConfig
): {} | false => {
  if (themePlugins?.shiki === false) {
    return false
  }

  return {
    theme: themePlugins.shiki?.theme ?? 'github-dark-dimmed',
    langs: themePlugins.shiki?.langs ?? [],
  }
}
