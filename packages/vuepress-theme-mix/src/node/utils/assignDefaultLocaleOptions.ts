import type {
  MixThemeLocaleData,
  MixThemeLocaleOptions,
} from '../../shared/index.js'

export const DEFAULT_LOCALE_OPTIONS: MixThemeLocaleOptions = {
  // color mode
  colorMode: 'auto',
  colorModeSwitch: true,
  toggleColorModeAriaLabel: 'Toggle color mode',

  // navbar
  navbar: [],
  logo: null,
  selectLanguageAriaLabel: 'Select language',
  socialLinks: [],

  // page meta
  editLinkText: 'Edit this page',
  lastUpdated: true,
  lastUpdatedText: 'Last Updated',
  contributors: true,
  contributorsText: 'Contributors',

  // a11y
  toggleSidebarTitle: 'toggle sidebar',
  tocTitle: 'Table of Contents',
}

export const DEFAULT_LOCALE_DATA: MixThemeLocaleData = {
  // navbar
  selectLanguageName: 'English',
}

/**
 * Assign default options
 */
export const assignDefaultLocaleOptions = (
  localeOptions: MixThemeLocaleOptions
): void => {
  if (!localeOptions.locales) {
    localeOptions.locales = {}
  }

  if (!localeOptions.locales['/']) {
    localeOptions.locales['/'] = {}
  }

  Object.assign(localeOptions, {
    ...DEFAULT_LOCALE_OPTIONS,
    ...localeOptions,
  })

  Object.assign(localeOptions.locales['/'], {
    ...DEFAULT_LOCALE_DATA,
    ...localeOptions.locales['/'],
  })
}
