import type {
  ThemeDataRef,
  ThemeLocaleDataRef,
} from '@vuepress/plugin-theme-data/client'
import {
  useThemeData as _useThemeData,
  useThemeLocaleData as _useThemeLocaleData,
} from '@vuepress/plugin-theme-data/client'

import type { MixThemeData } from '../../shared/index.js'

export const useThemeData = (): ThemeDataRef<MixThemeData> =>
  _useThemeData<MixThemeData>()
export const useThemeLocaleData = (): ThemeLocaleDataRef<MixThemeData> =>
  _useThemeLocaleData<MixThemeData>()
