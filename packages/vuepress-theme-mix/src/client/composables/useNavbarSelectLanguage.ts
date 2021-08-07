import { computed, ComputedRef } from 'vue'
import { useRouter } from 'vue-router'
import { useRouteLocale, useSiteLocaleData } from '@vuepress/client'
import { ResolvedNavbarItem } from '../../shared'
import { useThemeLocaleData } from './useThemeData'

export const useNavbarSelectLanguage = (): ComputedRef<ResolvedNavbarItem[]> => {
  const router = useRouter()
  const siteLocaleDataRef = useSiteLocaleData()
  const themeLocaleDataRef = useThemeLocaleData()
  const routeLocaleRef = useRouteLocale()

  return computed<ResolvedNavbarItem[]>(() => {
    const locales = Object.keys(siteLocaleDataRef.value.locales)
    if (locales.length < 2) {
      return []
    }

    const currentPath = router.currentRoute.value.path
    const currentFullPath = router.currentRoute.value.fullPath

    const languageDropdown: ResolvedNavbarItem = {
      text: themeLocaleDataRef.value.selectLanguageText ?? 'Languages',
      icon: '',
      ariaLabel:
        themeLocaleDataRef.value.selectLanguageAriaLabel ?? 'unkown language',
      children: locales.map((targetLocalePath) => {
        // target locale config of this langauge link
        const targetSiteLocale =
          siteLocaleDataRef.value.locales?.[targetLocalePath] ?? {}
        const targetThemeLocale =
          themeLocaleDataRef.value.locales?.[targetLocalePath] ?? {}
        const targetLang = `${targetSiteLocale.lang}`
        const text = targetThemeLocale.selectLanguageName ?? targetLang
        let link: string

        if (targetLang === siteLocaleDataRef.value.lang) {
          // if the target language is current language
          // stay at current link
          link = currentFullPath
        } else {
          // if the target language is not current language
          // try to link to the corresponding page of current page
          // or fallback to homepage
          const targetLocalePage = currentPath.replace(
            routeLocaleRef.value,
            targetLocalePath
          )
          if (
            router.getRoutes().some((item) => item.path === targetLocalePage)
          ) {
            link = targetLocalePage
          } else {
            link = targetThemeLocale.home ?? targetLocalePath
          }
        }
        return {
          text,
          link,
        }
      }),
    }

    return [languageDropdown]
  })
}
