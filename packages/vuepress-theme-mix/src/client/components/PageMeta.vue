<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { removeEndingSlash, removeLeadingSlash } from '@vuepress/shared'
import { clsx } from 'clsx'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

import type {
  MixThemeNormalPageFrontmatter,
  MixThemePageData,
  NavLink,
} from '../../shared/index.js'
import { useThemeLocaleData } from '../composables/index.js'

const useEditNavLink = (): ComputedRef<null | NavLink> => {
  const themeLocale = useThemeLocaleData()
  const page = usePageData<MixThemePageData>()
  const frontmatter = usePageFrontmatter<MixThemeNormalPageFrontmatter>()

  return computed(() => {
    const editLinkPattern =
      frontmatter.value.editLink === false
        ? ''
        : themeLocale.value.editLink ?? ''
    if (editLinkPattern === '') {
      return null
    }

    let editLink: string
    if (typeof editLinkPattern === 'function') {
      editLink = editLinkPattern(page.value.filePathRelative ?? '')
    } else {
      editLink = editLinkPattern.replace(
        /:path/g,
        removeLeadingSlash(removeEndingSlash(`${page.value.filePathRelative}`))
      )
    }

    const { editLinkText } = themeLocale.value

    return {
      text: editLinkText ?? 'Edit this page',
      link: editLink,
    }
  })
}

const useLastUpdated = (): ComputedRef<null | string> => {
  const themeLocale = useThemeLocaleData()
  const page = usePageData<MixThemePageData>()
  const frontmatter = usePageFrontmatter<MixThemeNormalPageFrontmatter>()

  return computed(() => {
    const showLastUpdated =
      frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true

    if (!showLastUpdated) return null

    if (!page.value.git?.updatedTime) return null

    const updatedDate = new Date(page.value.git?.updatedTime)

    return updatedDate.toLocaleString()
  })
}

const useContributors = (): ComputedRef<
  null | Required<MixThemePageData['git']>['contributors']
> => {
  const themeLocale = useThemeLocaleData()
  const page = usePageData<MixThemePageData>()
  const frontmatter = usePageFrontmatter<MixThemeNormalPageFrontmatter>()

  return computed(() => {
    const showContributors =
      frontmatter.value.contributors ?? themeLocale.value.contributors ?? true

    if (!showContributors) return null

    return page.value.git?.contributors ?? null
  })
}

const themeLocale = useThemeLocaleData()
const editNavLink = useEditNavLink()
const lastUpdated = useLastUpdated()

const isoDatetime = computed(() =>
  lastUpdated.value ? new Date(lastUpdated.value).toISOString() : ''
)
const contributors = useContributors()
</script>

<template>
  <footer class="mt-16">
    <div class="flex items-center justify-between">
      <div
        v-if="editNavLink"
        class="text-muted inline-flex items-center space-x-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M8 20l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4z"
          ></path>
          <path d="M13.5 6.5l4 4"></path>
          <path d="M16 18h4"></path>
        </svg>
        <AutoLink
          :item="editNavLink"
          class="text-muted hover:text-default text-sm font-normal no-underline"
        />
      </div>

      <div v-if="lastUpdated" class="text-muted text-sm">
        <span>{{ themeLocale.lastUpdatedText }}: </span>
        <ClientOnly>
          <time :datetime="isoDatetime">{{ lastUpdated }}</time>
        </ClientOnly>
      </div>
    </div>

    <div
      v-if="contributors && contributors.length"
      class="text-muted mt-4 text-sm"
    >
      <div class="inline-flex items-center space-x-1">
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          stroke="currentColor"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span>{{ themeLocale.contributorsText }}</span>
        <span class="bg-contrast inline-block rounded-[2em] px-1.5">{{
          contributors.length
        }}</span>
      </div>
      <div class="mt-2 flex flex-wrap space-x-1">
        <template v-for="(contributor, index) in contributors" :key="index">
          <a
            :title="`${contributor.name}`"
            :href="`mailto:${contributor.email}`"
            :class="
              clsx(
                '!text-default',
                'mb-2 h-7 w-7 overflow-hidden text-center no-underline',
                'border-default rounded-full border',
                'inline-flex items-center justify-center'
              )
            "
          >
            {{ contributor.name.substring(0, 1).toUpperCase() }}
          </a>
        </template>
      </div>
    </div>
  </footer>
</template>
