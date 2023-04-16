<script setup lang="ts">
import { IconChevronDown } from '@tabler/icons-vue'
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

const collapsible = computed(() => item.value.collapsible !== false)

const isOpenDefault = computed(() =>
  collapsible.value ? isActive.value : true
)
const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value)
const onClick = (e: Event): void => {
  if (collapsible.value) {
    e.preventDefault()
    // toggle open status on click
    toggleIsOpen()
  }
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
      class="relative w-full"
      :class="itemCommonClasses"
      :active-classes="
        clsx(
          isActive &&
            'bg-contrast after:absolute after:top-[calc(50%-0.75rem);] after:-left-2 after:bg-theme after:rounded-md after:h-6 after:w-1 font-medium'
        )
      "
      :style="{ paddingLeft: depth === 0 ? '0.5rem' : depth * 2 + 'rem' }"
    />
    <p
      v-else
      tabindex="0"
      class="group flex cursor-pointer items-center justify-between"
      :class="itemCommonClasses"
      :style="{ paddingLeft: depth === 0 ? '0.5rem' : depth * 2 + 'rem' }"
      @click="onClick"
      @keydown.enter="onClick"
    >
      {{ item.text }}
      <span v-if="collapsible" class="text-muted ml-2 inline-block">
        <IconChevronDown
          :size="18"
          :class="
            clsx(
              'scale-y-100 transition-transform duration-300',
              isOpen && '!-scale-y-100'
            )
          "
        />
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
