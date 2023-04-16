<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'
import PageToc from '@theme/PageToc.vue'
import { pageData } from '@vuepress/client'
import { clsx } from 'clsx'
import { ref } from 'vue'

import { useActiveAnchor, useThemeLocaleData } from '../composables/index.js'
import { shouldShowPageToc } from '../utils/index.js'

const themeLocale = useThemeLocaleData()

const container = ref()
const marker = ref()

if (shouldShowPageToc.value) {
  useActiveAnchor(container, marker)
}
</script>

<template>
  <main>
    <div :class="clsx('tablet:pt-16', 'tablet:pl-80')">
      <div :class="clsx('flex p-6')">
        <div
          :class="
            clsx(
              'order-1',
              'desktop:min-w-[640px] w-full pb-32 pr-0',
              shouldShowPageToc && 'desktop:pr-6'
            )
          "
        >
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
          class="desktop-reverse:hidden aside relative order-2 w-full max-w-[256px] flex-grow pl-6"
        >
          <div
            class="fixed bottom-0 z-10 h-8 w-[232px] bg-[linear-gradient(transparent,var(--color-bg-default)_70%)]"
          />
          <div
            :class="
              clsx(
                'h-screen w-[232px]',
                'fixed top-0',
                'overflow-y-auto overflow-x-hidden',
                'pt-[5.5rem]'
              )
            "
          >
            <div class="flex min-h-[calc(100vh-5.5rem)] flex-col pb-8">
              <div ref="container" class="flex flex-grow flex-col">
                <div class="border-l-default relative border-l pl-3 text-xs">
                  <div
                    ref="marker"
                    class="bg-theme absolute -left-px top-8 h-[1.125rem] w-px opacity-0 transition-[top]"
                  />
                  <span class="font-medium leading-7">{{
                    themeLocale.tocTitle
                  }}</span>
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
