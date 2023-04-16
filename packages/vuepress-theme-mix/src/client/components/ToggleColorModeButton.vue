<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { clsx } from 'clsx'
import { ref } from 'vue'

import type { ColorMode } from '../../shared/index.js'
import { useThemeLocaleData } from '../composables/index.js'

const open = ref(false)

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

interface ColorModeOption {
  value: ColorMode
  label: string
  icon: string
}

const colorModeOptions: ColorModeOption[] = [
  {
    value: 'auto',
    label: 'System',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path></svg>',
  },
  {
    value: 'light',
    label: 'Light',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>',
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path><path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path><path d="M19 11h2m-1 -1v2"></path></svg>',
  },
]

const themeLocale = useThemeLocaleData()

const selectedColorMode = useColorMode({
  initialValue: themeLocale.value.colorMode,
  storageKey: 'vuepress-color-mode',
  emitAuto: true,
})

const toggleColorMode = (targetColorMode: ColorMode): void => {
  selectedColorMode.value = targetColorMode
}
</script>

<template>
  <div v-if="themeLocale.colorModeSwitch">
    <div class="tablet-reverse:hidden group relative flex items-center">
      <button
        :aria-label="themeLocale.toggleColorModeAriaLabel"
        class="text-muted hover:text-default flex h-16 items-center"
        @click="handleDropdown"
      >
        <span class="dark:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="clsx(selectedColorMode !== 'auto' && 'text-theme')"
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
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
            <path
              d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
            ></path>
          </svg>
        </span>
        <span class="hidden dark:inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="clsx(selectedColorMode !== 'auto' && 'text-theme')"
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
            <path
              d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
            ></path>
            <path
              d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
            ></path>
            <path d="M19 11h2m-1 -1v2"></path>
          </svg>
        </span>
      </button>

      <ul
        v-if="themeLocale.colorMode === 'auto'"
        :class="
          clsx(
            !open && 'invisible opacity-0',
            'bg-default min-w-[128px] rounded-md p-3 shadow',
            'absolute right-0 top-[calc(100%-12px)]',
            'border-default border',
            'transition-[opacity,visibility] duration-300',
            'group-hover:!visible group-hover:!opacity-100'
          )
        "
      >
        <li v-for="item in colorModeOptions" :key="item.value">
          <button
            type="button"
            :title="item.value"
            :class="
              clsx(
                'flex items-center',
                'w-full space-x-1.5 whitespace-nowrap rounded px-3 leading-8',
                'transition-colors',
                'hover:text-theme hover:bg-contrast',
                selectedColorMode === item.value && 'text-theme bg-contrast'
              )
            "
            @click="toggleColorMode(item.value)"
          >
            <span class="inline-block" v-html="item.icon" />
            <span>{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </div>

    <div class="tablet:hidden bg-contrast mt-4 rounded-full">
      <ul class="text-muted flex items-center justify-between">
        <li v-for="item in colorModeOptions" :key="item.value">
          <button
            type="button"
            :title="item.value"
            :class="
              clsx(
                'flex items-center',
                'space-x-1.5 whitespace-nowrap rounded-full px-3 py-1.5',
                'transition-colors duration-300',
                selectedColorMode === item.value &&
                  'bg-theme text-white opacity-75'
              )
            "
            @click="toggleColorMode(item.value)"
          >
            <span class="inline-block" v-html="item.icon" />
            <span>{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
