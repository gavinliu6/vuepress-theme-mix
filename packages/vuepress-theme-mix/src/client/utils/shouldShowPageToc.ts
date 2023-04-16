import { pageData, usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'

import type { MixThemePageFrontmatter } from '../../shared/index.js'
import { useThemeLocaleData } from '../composables/index.js'

export const shouldShowPageToc = computed(() => {
  const themeLocale = useThemeLocaleData()
  const frontmatter = usePageFrontmatter<MixThemePageFrontmatter>()

  if (frontmatter.value.home === true) {
    if (frontmatter.value.toc === true) {
      return true
    }
    return false
  }

  if (frontmatter.value.toc === false) {
    return false
  }

  if (themeLocale.value.toc === false) {
    return false
  }

  return pageData.value.headers.length > 0
})
