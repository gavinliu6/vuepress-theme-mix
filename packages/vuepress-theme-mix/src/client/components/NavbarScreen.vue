<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import LanguageDropdown from '@theme/LanguageDropdown.vue'
import NavbarScreenDropdown from '@theme/NavbarScreenDropdown.vue'
import SocialLinks from '@theme/SocialLinks.vue'
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
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
  <div
    :class="
      clsx(
        'tablet:hidden',
        'fixed bottom-0 left-0 right-0 top-14',
        'bg-default w-full overflow-y-auto px-6',
        'z-30'
      )
    "
  >
    <div class="mx-auto max-w-[288px] pb-24 pt-6">
      <nav v-if="navbarLinks.length" class="flex flex-col">
        <template v-for="item in navbarLinks" :key="item.text">
          <NavbarScreenDropdown
            v-if="(item as any).children"
            :item="item as NavGroup<ResolvedNavbarItem>"
          />

          <AutoLink
            v-else
            :item="item as NavbarItem"
            :class="clsx('hover:text-theme', 'border-b-default border-b py-3')"
            active-classes="text-theme"
          />
        </template>
      </nav>

      <LanguageDropdown />

      <ToggleColorModeButton />

      <SocialLinks />
    </div>
  </div>
</template>
