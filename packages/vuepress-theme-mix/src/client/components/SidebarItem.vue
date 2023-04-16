<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import { useToggle } from '@vueuse/core'
import { clsx } from 'clsx'
import type { PropType } from 'vue'
import { computed, nextTick, onBeforeUnmount, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import type { ResolvedSidebarItem } from '../../shared/index.js'
import { isActiveSidebarItem } from '../utils/index.js'

const props = defineProps({
  item: {
    type: Object as PropType<ResolvedSidebarItem>,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
})

const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()

const isActive = computed(() => isActiveSidebarItem(item.value, route))

const isOpenDefault = computed(
  () => isActive.value || item.value.collapsed !== true
)
const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value)
const onClick = (e: Event): void => {
  e.preventDefault()
  // toggle open status on click
  toggleIsOpen()
}

// reset open status after navigation
const unregisterRouterHook = router.afterEach(() => {
  nextTick(() => {
    isOpen.value = isOpenDefault.value
  })
})
onBeforeUnmount(() => {
  unregisterRouterHook()
})

const itemCommonClasses = clsx(
  'rounded-md py-1.5 pr-2',
  'hover:bg-contrast',
  'transition-colors'
)
</script>

<template>
  <li :class="clsx('h-8', isOpen && '!h-auto')">
    <AutoLink
      v-if="item.link"
      :item="item"
      class="hover:text-default relative w-full"
      :class="itemCommonClasses"
      :active-classes="
        clsx(
          isActive &&
            'bg-contrast after:absolute after:top-[calc(50%-0.75rem);] after:-left-2 after:bg-theme after:rounded-md after:h-6 after:w-1'
        )
      "
      :style="{ paddingLeft: depth === 0 ? '0.5rem' : depth * 2 + 'rem' }"
    />
    <p
      v-else
      tabindex="0"
      class="text-default group flex cursor-pointer items-center justify-between"
      :class="itemCommonClasses"
      :style="{ paddingLeft: depth === 0 ? '0.5rem' : depth * 2 + 'rem' }"
      @click="onClick"
      @keydown.enter="onClick"
    >
      {{ item.text }}
      <span class="text-muted ml-2 inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="
            clsx(
              'scale-y-100 transition-transform duration-300',
              isOpen && '!-scale-y-100'
            )
          "
          width="18"
          height="18"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 9l6 6l6 -6"></path>
        </svg>
      </span>
    </p>

    <ul
      :class="
        clsx(
          !isOpen && 'invisible h-0 opacity-0',
          'h-auto transition-[opacity] duration-300'
        )
      "
    >
      <SidebarItem
        v-for="child in item.children"
        :key="`${depth}${child.text}${child.link}`"
        :item="child"
        :depth="depth + 1"
      />
    </ul>
  </li>
</template>
