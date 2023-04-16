<script setup lang="ts">
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 8l16 0"></path>
      <path d="M4 16l16 0"></path>
    </svg>
  </button>
</template>
