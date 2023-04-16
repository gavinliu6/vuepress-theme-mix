<script setup lang="ts">
import { useThemeLocaleData } from '../composables/index.js'

const themeLocale = useThemeLocaleData()

const supportedSocialIcons = {
  github:
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>',
}
</script>

<template>
  <div
    v-if="themeLocale.socialLinks && themeLocale.socialLinks.length > 0"
    class="tablet-reverse:py-4 flex justify-center"
  >
    <a
      v-for="{ link, icon, ariaLabel } in themeLocale.socialLinks"
      :key="link"
      class="text-muted hover:text-default flex items-center justify-center transition-colors"
      :href="link"
      :aria-label="ariaLabel ? ariaLabel : ''"
      target="_blank"
      rel="noopener"
      v-html="typeof icon === 'object' ? icon.svg : supportedSocialIcons[icon]"
    >
    </a>
  </div>
</template>
