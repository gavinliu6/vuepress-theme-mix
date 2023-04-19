<script setup lang="ts">
import SidebarItems from '@theme/SidebarItems.vue'
import { clsx } from 'clsx'
</script>

<template>
  <aside
    id="sidebar"
    :class="
      clsx(
        'fixed bottom-0 left-[max(0px,calc(50%-45rem))] top-16',
        'tablet-reverse:top-0 tablet-reverse:opacity-0 tablet-reverse:-translate-x-full',
        'bg-default w-80 p-6',
        'overflow-y-auto overflow-x-hidden',
        'transition-[opacity,transform] duration-300',
        'z-30'
      )
    "
  >
    <SidebarItems />
  </aside>
</template>
