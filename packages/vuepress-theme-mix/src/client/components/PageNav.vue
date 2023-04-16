<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import { usePageFrontmatter } from '@vuepress/client'
import { isPlainObject, isString } from '@vuepress/shared'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import type {
  MixThemeNormalPageFrontmatter,
  NavLink,
  ResolvedSidebarItem,
} from '../../shared/index.js'
import { useNavLink, useSidebarItems } from '../composables/index.js'

/**
 * Resolve `prev` or `next` config from frontmatter
 */
const resolveFromFrontmatterConfig = (
  conf: unknown
): null | false | NavLink => {
  if (conf === false) {
    return null
  }

  if (isString(conf)) {
    return useNavLink(conf)
  }

  if (isPlainObject<NavLink>(conf)) {
    return conf
  }

  return false
}

/**
 * Resolve `prev` or `next` config from sidebar items
 */
const resolveFromSidebarItems = (
  sidebarItems: ResolvedSidebarItem[],
  currentPath: string,
  offset: number
): null | NavLink => {
  const index = sidebarItems.findIndex(item => item.link === currentPath)
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset]
    if (!targetItem?.link) {
      return null
    }
    return targetItem as NavLink
  }

  for (const item of sidebarItems) {
    if (item.children) {
      const childResult = resolveFromSidebarItems(
        item.children,
        currentPath,
        offset
      )
      if (childResult) {
        return childResult
      }
    }
  }

  return null
}

const frontmatter = usePageFrontmatter<MixThemeNormalPageFrontmatter>()
const sidebarItems = useSidebarItems()
const route = useRoute()

const prevNavLink = computed(() => {
  const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev)
  if (prevConfig !== false) {
    return prevConfig
  }

  return resolveFromSidebarItems(sidebarItems.value, route.path, -1)
})

const nextNavLink = computed(() => {
  const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next)
  if (nextConfig !== false) {
    return nextConfig
  }

  return resolveFromSidebarItems(sidebarItems.value, route.path, 1)
})
</script>

<template>
  <nav
    v-if="prevNavLink || nextNavLink"
    class="border-t-default mt-4 border-t pt-6"
  >
    <p>
      <span v-if="prevNavLink" class="inline-flex items-center space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
          <path d="M5 12l6 6"></path>
          <path d="M5 12l6 -6"></path>
        </svg>
        <AutoLink :item="prevNavLink" class="text-theme no-underline" />
      </span>

      <span
        v-if="nextNavLink"
        class="float-right inline-flex items-center space-x-1 after:clear-both"
      >
        <AutoLink :item="nextNavLink" class="text-theme no-underline" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </span>
    </p>
  </nav>
</template>
