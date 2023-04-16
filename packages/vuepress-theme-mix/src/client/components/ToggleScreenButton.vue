<script setup lang="ts">
import { IconMenu } from '@tabler/icons-vue'

import { useThemeLocaleData } from '../composables/index.js'

defineEmits(['toggle'])

const themeLocale = useThemeLocaleData()
</script>

<template>
  <button
    type="button"
    class="ml-2"
    :title="themeLocale.toggleSidebarTitle"
    aria-expanded="false"
    tabindex="0"
    @click="$emit('toggle')"
  >
    <IconMenu :size="24" :stroke-width="1.5" />
  </button>
</template>
