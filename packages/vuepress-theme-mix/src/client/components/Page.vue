<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import PageToc from '@theme/PageToc.vue'
import { pageData } from '@vuepress/client'
import { clsx } from 'clsx'
import { ref } from 'vue'

import {
  useActiveAnchor,
  useSidebarItems,
  useThemeLocaleData,
} from '../composables/index.js'
import { shouldShowPageToc } from '../utils/index.js'

const themeLocale = useThemeLocaleData()

const sidebarItems = useSidebarItems()

const container = ref()
const marker = ref()

if (shouldShowPageToc.value) {
  useActiveAnchor(container, marker)
}
</script>

<template>
  <main>
    <div
      :class="clsx('tablet:pt-16', sidebarItems.length > 0 && 'tablet:pl-80')"
    >
      <div
        :class="
          clsx(
            'mx-auto flex max-w-4xl px-6 py-10',
            shouldShowPageToc && 'mx-auto max-w-6xl'
          )
        "
      >
        <div :class="clsx('order-1', 'w-full pb-32')">
          <div
            :class="
              clsx(
                'md-container',
                'prose dark:prose-invert max-w-none',
                'prose-code:before:content-none prose-code:after:content-none',
                'prose-a:no-underline',
                'prose-a:pb-px prose-a:-mt-px prose-a:border-b prose-a:border-b-theme',
                'hover:prose-a:border-b-2',
                'prose-blockquote:not-italic prose-blockquote:text-muted prose-blockquote:font-normal',
                'before:prose-p:content-none after:prose-p:content-none'
              )
            "
          >
            <Content />
          </div>

          <PageMeta />

          <PageNav />
        </div>
        <div
          v-if="shouldShowPageToc"
          class="desktop-reverse:hidden aside relative order-2 w-full max-w-[256px] flex-grow pl-10"
        >
          <div
            class="fixed bottom-0 z-10 h-8 w-[216px] bg-[linear-gradient(transparent,rgb(var(--color-bg-default))_70%)]"
          />
          <div
            :class="
              clsx(
                'h-screen w-[216px]',
                'fixed top-0',
                'overflow-y-auto overflow-x-hidden',
                'pt-[6.5rem]'
              )
            "
          >
            <div class="flex min-h-[calc(100vh-6.5rem)] flex-col pb-8">
              <div ref="container" class="flex flex-grow flex-col">
                <div
                  class="relative border-l border-l-transparent pl-3 text-xs"
                >
                  <div
                    ref="marker"
                    class="bg-theme absolute -left-px top-8 h-[1.125rem] w-[3px] rounded opacity-0 transition-[top]"
                  />
                  <span
                    class="border-b-default mb-2 inline-block w-full border-b font-medium leading-7"
                    >{{ themeLocale.tocTitle }}</span
                  >
                  <nav>
                    <PageToc :headers="pageData.headers" />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
