import { inject } from 'vue'
import type { InjectionKey, Ref } from 'vue'

export const themeModeSymbol: InjectionKey<Ref<string>> = Symbol('themeMode')

export const useThemeMode = (): Ref<string> => {
  const themeMode = inject(themeModeSymbol)
  if (!themeMode) {
    throw new Error('useThemeMode() is called without provider.')
  }
  return themeMode
}
