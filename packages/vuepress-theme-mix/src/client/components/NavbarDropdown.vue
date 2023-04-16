<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import { clsx } from 'clsx'
import type { PropType } from 'vue'
import { computed, ref, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'

import type {
  NavbarItem,
  NavGroup,
  ResolvedNavbarItem,
} from '../../shared/index.js'

const props = defineProps({
  item: {
    type: Object as PropType<Exclude<ResolvedNavbarItem, NavbarItem>>,
    required: true,
  },
})

const { item } = toRefs(props)

const dropdownAriaLabel = computed(
  () => item.value.ariaLabel || item.value.text
)

const open = ref(false)
const route = useRoute()
watch(
  () => route.path,
  () => {
    open.value = false
  }
)

/**
 * Open the dropdown when user tab and click from keyboard.
 *
 * Use event.detail to detect tab and click from keyboard.
 * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
 */
const handleDropdown = (e): void => {
  const isTriggerByTab = e.detail === 0
  if (isTriggerByTab) {
    open.value = !open.value
  } else {
    open.value = false
  }
}

const isLastItemOfArray = (item: unknown, arr: unknown[]): boolean =>
  arr[arr.length - 1] === item
</script>

<template>
  <div class="group relative flex items-center">
    <slot>
      <button
        type="button"
        :aria-label="dropdownAriaLabel"
        class="hover:text-muted h-16"
        @click="handleDropdown"
      >
        <span>{{ item.text }}</span>
        <span class="ml-0.5 inline-block">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            :class="
              clsx(
                'inline h-[14px] w-[14px]',
                'transition-transform duration-300',
                'group-hover:rotate-180'
              )
            "
          >
            <path
              d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"
            ></path>
          </svg>
        </span>
      </button>
    </slot>

    <ul
      :class="
        clsx(
          !open && 'invisible opacity-0',
          'bg-default p-3',
          'max-h-[calc(100vh-4rem)] min-w-[128px] overflow-y-auto rounded-md shadow',
          'absolute right-0 top-[calc(100%-12px)]',
          'border-default border',
          'transition-[opacity,visibility] duration-300',
          'group-hover:!visible group-hover:!opacity-100'
        )
      "
    >
      <li
        v-for="child in item.children"
        :key="child.text"
        :class="clsx((child as any).children && 'border-b-default border-b py-3 first:pt-0 last:border-b-0 last:pb-0')"
      >
        <template v-if="(child as any).children">
          <h4 class="px-3 leading-8">
            <AutoLink
              v-if="(child as any).link"
              :item="child as NavbarItem"
              active-classes="text-theme bg-contrast"
              @focusout="
                isLastItemOfArray(child, item.children) &&
                  (child as NavGroup<ResolvedNavbarItem>).children.length ===
                    0 &&
                  (open = false)
              "
            />

            <span v-else class="text-muted font-medium">{{ child.text }}</span>
          </h4>

          <ul>
            <li
              v-for="grandchild in (child as NavGroup<ResolvedNavbarItem>).children"
              :key="(grandchild as NavbarItem).link"
            >
              <AutoLink
                :item="grandchild as NavbarItem"
                :class="
                  clsx(
                    'inline-block w-full whitespace-nowrap rounded px-3 leading-8',
                    'transition-colors',
                    'hover:text-theme hover:bg-contrast'
                  )
                "
                active-classes="text-theme bg-contrast"
                @focusout="
                  isLastItemOfArray(
                    grandchild,
                    (child as NavGroup<ResolvedNavbarItem>).children
                  ) &&
                    isLastItemOfArray(child, item.children) &&
                    (open = false)
                "
              />
            </li>
          </ul>
        </template>

        <template v-else>
          <AutoLink
            :item="child as NavbarItem"
            :class="
              clsx(
                'inline-block w-full whitespace-nowrap rounded px-3 leading-8',
                'transition-colors',
                'hover:text-theme hover:bg-contrast'
              )
            "
            active-classes="text-theme bg-contrast"
            @focusout="
              isLastItemOfArray(child, item.children) && (open = false)
            "
          />
        </template>
      </li>
    </ul>
  </div>
</template>
