<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import { useRouteLocale, useSiteLocaleData } from '@vuepress/client'
import { useDark } from '@vueuse/core'
import { onMounted } from 'vue'

import { useThemeLocaleData } from '../composables/index.js'

const routeLocale = useRouteLocale()
const themeLocale = useThemeLocaleData()
const siteLocale = useSiteLocaleData()

const message = themeLocale.value.notFound ?? 'Page Not Found'
const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'

const isDarkMode = useDark({
  storageKey: 'vuepress-color-mode',
})

onMounted(() => {
  document.title = `404 | ${siteLocale.value.title ?? 'VuePress Theme Mix'}`
  isDarkMode.value && document.documentElement.classList.toggle('dark', true)
})

isDarkMode && document.documentElement.classList.toggle('dark', true)
</script>

<template>
  <div class="flex h-screen flex-auto flex-col items-center pt-32">
    <h1 class="text-5xl">404</h1>
    <p class="text-muted pb-4 pt-2 text-xl">{{ message }}</p>

    <AutoLink
      :item="{
        text: homeText,
        link: homeLink,
      }"
      class="border-theme bg-theme inline-block rounded-full border px-5 py-2 text-white opacity-90 shadow hover:opacity-100"
    />
  </div>
</template>
