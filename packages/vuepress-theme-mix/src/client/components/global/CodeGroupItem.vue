<script lang="ts">
import { clsx } from 'clsx'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CodeGroupItem',
})
</script>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <div :class="clsx(!active && 'hidden')" :aria-selected="active">
    <slot />
  </div>
</template>
