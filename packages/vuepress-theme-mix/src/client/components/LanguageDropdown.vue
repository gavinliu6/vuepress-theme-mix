<script setup lang="ts">
import { IconLanguage } from '@tabler/icons-vue'
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
          <IconLanguage :size="18" stroke-width="1.5" />
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
