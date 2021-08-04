import {
  useThemeData as _useThemeData,
  useThemeLocaleData as _useThemeLocaleData,
} from '@vuepress/plugin-theme-data/lib/client/composables'
import type {
  ThemeDataRef,
  ThemeLocaleDataRef,
} from '@vuepress/plugin-theme-data/lib/client/composables'
import type { MixThemeData } from '../../shared'

export const useThemeData = (): ThemeDataRef<MixThemeData> =>
  _useThemeData<MixThemeData>()
export const useThemeLocaleData = (): ThemeLocaleDataRef<MixThemeData> =>
  _useThemeLocaleData<MixThemeData>()
