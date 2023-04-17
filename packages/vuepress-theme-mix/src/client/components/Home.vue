<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import { usePageFrontmatter, useSiteLocaleData } from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { clsx } from 'clsx'
import { computed } from 'vue'

import type { MixThemeHomePageFrontmatter } from '../../shared/index.js'

const frontmatter = usePageFrontmatter<MixThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return (
    frontmatter.value.heroText || siteLocale.value.title || 'VuePress Theme Mix'
  )
})

const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }
  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

const actions = computed(() => {
  if (!isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})

const footer = computed(() => frontmatter.value.footer)
</script>

<template>
  <div class="tablet-reverse:pt-24 px-6 pt-40">
    <h1
      v-if="heroText"
      :class="
        clsx(
          'mx-auto max-w-2xl',
          'tablet-reverse:text-3xl text-center text-6xl',
          'dark:to-theme dark:bg-gradient-to-r dark:from-white dark:bg-clip-text dark:text-transparent'
        )
      "
    >
      {{ heroText }}
    </h1>
    <p
      v-if="tagline"
      class="text-muted mx-auto mt-6 max-w-2xl text-center text-xl"
    >
      {{ tagline }}
    </p>
    <div v-if="actions.length" class="mt-8 flex justify-center space-x-4">
      <AutoLink
        v-for="action in actions"
        :key="action.text"
        :item="action"
        :class="
          action.type === 'primary'
            ? clsx(
                'inline-block px-5 py-2',
                'border-theme border',
                'bg-theme opacity-90 hover:opacity-100',
                'rounded-full shadow',
                'text-white'
              )
            : clsx(
                'inline-block px-5 py-2',
                'border-default border',
                'bg-contrast opacity-80 hover:opacity-100',
                'rounded-full shadow'
              )
        "
      />
    </div>
    <div
      v-if="features.length"
      :class="
        clsx(
          'mx-auto mt-10 grid gap-4',
          features.length === 1 && 'max-w-xs',
          features.length === 2 && 'max-w-lg',
          features.length === 3 && 'max-w-3xl',
          features.length >= 4 && 'max-w-5xl'
        )
      "
      :style="{
        'grid-template-columns': `repeat(${
          features.length <= 4 ? features.length : 4
        }, minmax(0, 1fr))`,
      }"
    >
      <div
        v-for="feature in features"
        :key="feature.title"
        class="bg-contrast rounded-md px-3 py-4"
      >
        <h2 class="text-base">{{ feature.title }}</h2>
        <p class="text-muted mt-1.5">{{ feature.details }}</p>
      </div>
    </div>
    <main
      :class="
        clsx(
          'md-container mx-auto mt-12 pb-20',
          'prose dark:prose-invert max-w-3xl',
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
    </main>
    <footer
      v-if="footer"
      class="text-muted absolute bottom-0 left-0 mx-auto flex h-16 w-full items-center justify-center"
    >
      <div class="max-w-8xl w-full px-6">
        <div
          class="border-t-default w-full flex-grow border-t py-6 text-center"
        >
          <div class="footer" v-html="footer" />
        </div>
      </div>
    </footer>
  </div>
</template>
