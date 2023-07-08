<script setup lang="ts">
import SidebarItems from '@theme/SidebarItems.vue'
import { clsx } from 'clsx'
</script>

<template>
  <aside
    id="sidebar"
    :class="
      clsx(
        'fixed bottom-0 left-0 top-16',
        'tablet-reverse:top-0 tablet-reverse:opacity-0 tablet-reverse:-translate-x-full tablet:border-r tablet:border-r-default',
        'bg-default w-80 p-6 pr-0',
        'overflow-y-auto overflow-x-hidden',
        'transition-[opacity,transform] duration-300',
        'z-30'
      )
    "
  >
    <SidebarItems />
  </aside>
</template>
