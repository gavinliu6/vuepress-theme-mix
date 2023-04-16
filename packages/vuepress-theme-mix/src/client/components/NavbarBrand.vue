<script setup lang="ts">
import {
  ClientOnly,
  useRouteLocale,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { useDark } from '@vueuse/core'
import type { FunctionalComponent } from 'vue'
import { computed, h } from 'vue'

import { useThemeLocaleData } from '../composables/index.js'

const routeLocale = useRouteLocale()
const siteLocale = useSiteLocaleData()
const themeLocale = useThemeLocaleData()
const isDarkMode = useDark({
  storageKey: 'vuepress-color-mode',
})

const navbarBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value
)
const navbarBrandTitle = computed(() => siteLocale.value.title)
const navbarBrandLogo = computed(() => {
  if (isDarkMode.value && themeLocale.value.logoDark !== undefined) {
    return themeLocale.value.logoDark
  }
  return themeLocale.value.logo
})
const NavbarBrandLogo: FunctionalComponent = () => {
  if (!navbarBrandLogo.value) return null
  const img = h('img', {
    class: 'flex-none h-6 object-fit',
    src: withBase(navbarBrandLogo.value),
    alt: navbarBrandTitle.value,
  })
  if (themeLocale.value.logoDark === undefined) {
    return img
  }
  // wrap brand logo with <ClientOnly> to avoid ssr-mismatch
  // when using a different brand logo in dark mode
  return h(ClientOnly, () => img)
}
</script>

<template>
  <RouterLink :to="navbarBrandLink" class="flex items-center space-x-3">
    <NavbarBrandLogo />

    <span v-if="navbarBrandTitle" class="font-medium">
      {{ navbarBrandTitle }}
    </span>
  </RouterLink>
</template>
