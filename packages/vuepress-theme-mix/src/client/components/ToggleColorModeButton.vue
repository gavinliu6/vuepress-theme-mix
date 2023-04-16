<script setup lang="ts">
import type { SVGProps } from '@tabler/icons-vue'
import { IconDeviceDesktop, IconMoonStars, IconSun } from '@tabler/icons-vue'
import { useColorMode } from '@vueuse/core'
import { clsx } from 'clsx'
import type { FunctionalComponent } from 'vue'
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
  icon: (props: SVGProps) => FunctionalComponent<SVGProps>
}

const colorModeOptions: ColorModeOption[] = [
  {
    value: 'auto',
    label: 'System',
    icon: IconDeviceDesktop,
  },
  {
    value: 'light',
    label: 'Light',
    icon: IconSun,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: IconMoonStars,
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
          <IconSun
            :size="18"
            stroke-width="1.5"
            :class="clsx(selectedColorMode !== 'auto' && 'text-theme')"
          />
        </span>
        <span class="hidden dark:inline">
          <IconMoonStars
            :size="18"
            stroke-width="1.5"
            :class="clsx(selectedColorMode !== 'auto' && 'text-theme')"
          />
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
            <component
              :is="item.icon"
              :size="18"
              :stroke-width="1.5"
              :style="{ display: 'inline-block' }"
            />
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
            <component
              :is="item.icon"
              :size="18"
              :stroke-width="1.5"
              :style="{ display: 'inline-block' }"
            />
            <span>{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
