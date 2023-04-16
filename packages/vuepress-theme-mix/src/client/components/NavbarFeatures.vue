<script setup lang="ts">
import LanguageDropdown from '@theme/LanguageDropdown.vue'
import SocialLinks from '@theme/SocialLinks.vue'
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
import { clsx } from 'clsx'

import { useThemeLocaleData } from '../composables/index.js'

const themeLocale = useThemeLocaleData()
</script>

<template>
  <div
    class="flex items-center"
    :class="
      clsx(
        themeLocale.navbar &&
          themeLocale.navbar.length > 0 &&
          'before:bg-divider before:mx-6 before:h-4 before:w-px'
      )
    "
  >
    <div class="flex items-center space-x-3">
      <!-- 🌏 select language dropdown -->
      <LanguageDropdown />

      <!-- 🎨 toggle color mode -->
      <ToggleColorModeButton />

      <!-- 🐧 social links -->
      <SocialLinks />
    </div>
  </div>
</template>
