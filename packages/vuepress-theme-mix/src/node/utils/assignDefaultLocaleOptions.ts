import type { MixThemeData } from '../../shared'

const defalutThemeData: MixThemeData = {
  logo: null,
  title: null,
  home: '/',
  navbar: [],
}

const defaultThemeLocaleData: MixThemeData = {
  selectLanguageText: 'Languages',
  selectLanguageAriaLabel: 'Select language',
  selectLanguageName: 'English',
  toggleThemeModeAriaLabel: 'Toggle theme mode',
  lastUpdatedText: 'Last Updated',
}

export const assignThemeData = (themeData: MixThemeData): void => {
  if (!themeData.locales) {
    themeData.locales = {}
  }

  if (!themeData.locales['/']) {
    themeData.locales['/'] = {}
  }

  Object.assign(themeData, { ...defalutThemeData, ...themeData })

  Object.assign(themeData.locales['/'], {
    ...defaultThemeLocaleData,
    ...themeData.locales['/'],
  })
}
