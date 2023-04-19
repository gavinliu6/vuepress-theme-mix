<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarFeatures from '@theme/NavbarFeatures.vue'
import NavbarItems from '@theme/NavbarItems.vue'
import ToggleScreenButton from '@theme/ToggleScreenButton.vue'
import { ref } from 'vue'

defineEmits(['toggle-screen'])

const navbarBrand = ref<HTMLElement | null>(null)
</script>

<template>
  <header
    class="tablet-reverse:h-14 max-w-8xl bg-default/95 tablet-reverse:relative fixed top-0 z-20 h-16 w-full px-6 backdrop-blur"
  >
    <div
      class="border-b-default flex h-full items-center justify-between border-b"
    >
      <span ref="navbarBrand">
        <NavbarBrand />
      </span>

      <div
        class="tablet-reverse:hidden flex flex-grow items-center justify-end"
      >
        <NavbarItems />

        <NavbarFeatures />
      </div>

      <div class="tablet-reverse:flex tablet-reverse:items-center">
        <!-- 🔍 search -->
        <NavbarSearch />

        <div class="tablet:hidden flex flex-grow items-center justify-end">
          <ToggleScreenButton @toggle="$emit('toggle-screen')" />
        </div>
      </div>
    </div>
  </header>
</template>
