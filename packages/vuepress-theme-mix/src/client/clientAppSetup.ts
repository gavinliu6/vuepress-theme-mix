import { computed, onMounted, provide, ref } from 'vue'
import { defineClientAppSetup, usePageFrontmatter } from '@vuepress/client'
import {
  resolveSidebarItems,
  sidebarItemsSymbol,
  themeModeSymbol,
  useThemeLocaleData,
} from './composables'
import type { MixThemeNormalPageFrontmatter } from '../shared'

export default defineClientAppSetup(() => {
  const themeLocale = useThemeLocaleData()

  // dark theme supported
  const themeMode = ref(themeLocale.value.mode ?? 'auto')

  onMounted(() => {
    if (themeMode.value === 'auto') {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      themeMode.value = localStorage.theme ?? (media.matches ? 'dark' : 'light')

      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          if (e.matches) {
            themeMode.value = 'dark'
          } else {
            themeMode.value = 'light'
          }
          document.documentElement.dataset.theme = themeMode.value
          localStorage.setItem('theme', themeMode.value)
        })
    }

    document.documentElement.dataset.theme = themeMode.value
  })

  provide(themeModeSymbol, themeMode)

  // we need to access sidebar items in multiple components
  // so we make it global computed
  const frontmatter = usePageFrontmatter<MixThemeNormalPageFrontmatter>()
  const sidebarItems = computed(() =>
    resolveSidebarItems(frontmatter.value, themeLocale.value)
  )
  provide(sidebarItemsSymbol, sidebarItems)
})
