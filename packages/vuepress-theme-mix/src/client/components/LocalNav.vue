<script setup lang="ts">
import { IconAlignLeft } from '@tabler/icons-vue'
import PageToc from '@theme/PageToc.vue'
import { pageData } from '@vuepress/client'
import { clsx } from 'clsx'
import { ref } from 'vue'

import { useThemeLocaleData } from '../composables/index.js'
import { shouldShowPageToc } from '../utils/index.js'

defineEmits(['toggle-sidebar'])

const themeLocale = useThemeLocaleData()

const isTocOpen = ref(false)
</script>

<template>
  <div class="bg-default text-muted sticky left-0 top-0 z-20 text-xs">
    <div
      :class="
        clsx(
          'relative',
          'mx-6 h-12',
          'flex items-center justify-between',
          'border-b-default border-b'
        )
      "
    >
      <button
        type="button"
        class="hover:text-default inline-flex items-center"
        @click="$emit('toggle-sidebar')"
      >
        <IconAlignLeft :size="20" :stroke-width="1.5" class="mr-1.5" />
        <span>Menu</span>
      </button>

      <button
        v-if="shouldShowPageToc"
        type="button"
        class="hover:text-default"
        @click="isTocOpen = !isTocOpen"
      >
        {{ themeLocale.tocTitle }}
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
                isTocOpen && 'rotate-180'
              )
            "
          >
            <path
              d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"
            ></path>
          </svg>
        </span>
      </button>

      <div
        v-if="shouldShowPageToc"
        :class="
          clsx(
            !isTocOpen && 'invisible opacity-0',
            'absolute left-0 right-0 top-16',
            'py-4 pl-[26px] pr-4',
            'rounded-md border shadow',
            'border-default bg-default max-h-[calc(100vh-10rem)]',
            'overflow-y-scroll',
            'transition-[opacity,visibility] duration-300'
          )
        "
      >
        <PageToc
          :headers="pageData.headers"
          class="text-sm"
          @click-anchor="isTocOpen = false"
        />
      </div>
    </div>
  </div>
</template>
