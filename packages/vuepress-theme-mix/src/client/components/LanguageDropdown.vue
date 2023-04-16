<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import NavbarDropdown from '@theme/NavbarDropdown.vue'
import { useRouteLocale, useSiteLocaleData } from '@vuepress/client'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import type {
  NavGroup,
  NavLink,
  ResolvedNavbarItem,
} from '../../shared/index.js'
import { useThemeLocaleData } from '../composables/index.js'

const navbarSelectLanguage = computed<ResolvedNavbarItem | null>(() => {
  const router = useRouter()
  const routeLocale = useRouteLocale()
  const siteLocale = useSiteLocaleData()
  const themeLocale = useThemeLocaleData()

  const localePaths = Object.keys(siteLocale.value.locales)
  // do not display language selection dropdown if there is only one language
  if (localePaths.length < 2) {
    return null
  }
  const currentPath = router.currentRoute.value.path
  const currentFullPath = router.currentRoute.value.fullPath

  const languageDropdown: ResolvedNavbarItem = {
    text: '',
    ariaLabel: themeLocale.value.selectLanguageAriaLabel ?? 'unknown language',
    children: localePaths.map(targetLocalePath => {
      // target locale config of this language link
      const targetSiteLocale =
        siteLocale.value.locales?.[targetLocalePath] ?? {}
      const targetThemeLocale =
        themeLocale.value.locales?.[targetLocalePath] ?? {}
      const targetLang = `${targetSiteLocale.lang}`

      const text = targetThemeLocale.selectLanguageName ?? targetLang
      let link

      if (targetLang === siteLocale.value.lang) {
        // if the target language is current language
        // stay at current link
        link = currentFullPath
      } else {
        // if the target language is not current language
        // try to link to the corresponding page of current page
        // or fallback to homepage
        const targetLocalePage = currentPath.replace(
          routeLocale.value,
          targetLocalePath
        )
        if (router.getRoutes().some(item => item.path === targetLocalePage)) {
          // try to keep current hash and params across languages
          link = currentFullPath.replace(currentPath, targetLocalePage)
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

  return languageDropdown
})
</script>

<template>
  <div v-if="navbarSelectLanguage">
    <!-- >= 1024px -->
    <NavbarDropdown
      class="navbar-select-language tablet-reverse:hidden"
      :item="navbarSelectLanguage as NavGroup<ResolvedNavbarItem>"
    >
      <button
        type="button"
        :aria-label="navbarSelectLanguage.ariaLabel"
        class="text-muted hover:text-default flex h-16 items-center"
      >
        <span class="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 5h7"></path>
            <path d="M9 3v2c0 4.418 -2.239 8 -5 8"></path>
            <path d="M5 9c0 2.144 2.952 3.908 6.7 4"></path>
            <path d="M12 20l4 -9l4 9"></path>
            <path d="M19.1 18h-6.2"></path>
          </svg>
        </span>
      </button>
    </NavbarDropdown>

    <!-- <= 1023px -->
    <div class="tablet:hidden bg-contrast mt-4 rounded-md px-3 py-4">
      <ul class="text-muted space-y-2">
        <li
          v-for="item in (navbarSelectLanguage as NavGroup<NavLink>).children"
          :key="item.link"
        >
          <AutoLink :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
