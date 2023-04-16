<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import NavbarDropdown from '@theme/NavbarDropdown.vue'
import { isString } from '@vuepress/shared'
import { clsx } from 'clsx'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

import type {
  NavbarGroup,
  NavbarItem,
  NavGroup,
  ResolvedNavbarItem,
} from '../../shared/index.js'
import { useNavLink, useThemeLocaleData } from '../composables/index.js'

const resolveNavbarItem = (
  item: NavbarItem | NavbarGroup | string
): ResolvedNavbarItem => {
  if (isString(item)) {
    return useNavLink(item)
  }
  if ((item as NavbarGroup).children) {
    return {
      ...item,
      children: (item as NavbarGroup).children.map(resolveNavbarItem),
    }
  }
  return item as ResolvedNavbarItem
}

const useNavbarConfig = (): ComputedRef<ResolvedNavbarItem[]> => {
  const themeLocale = useThemeLocaleData()
  return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem))
}

const navbarConfig = useNavbarConfig()
const navbarLinks = computed(() => [...navbarConfig.value])
</script>

<template>
  <nav v-if="navbarLinks.length" class="flex items-center space-x-4">
    <template v-for="item in navbarLinks" :key="item.text">
      <NavbarDropdown
        v-if="(item as any).children"
        :item="item as NavGroup<ResolvedNavbarItem>"
      />

      <AutoLink
        v-else
        :item="item as NavbarItem"
        :class="clsx('hover:text-theme', 'leading-[4rem]')"
        active-classes="text-theme"
      />
    </template>
  </nav>
</template>
