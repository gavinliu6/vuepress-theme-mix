<script setup lang="ts">
import type { PageHeader } from '@vuepress/client'
import { usePageFrontmatter } from '@vuepress/client'
import { clsx } from 'clsx'
import { computed } from 'vue'

import type { MixThemePageFrontmatter } from '../../shared/index.js'
import { useThemeLocaleData } from '../composables/index.js'

const emit = defineEmits(['click-anchor'])

defineProps({
  headers: {
    type: Array<PageHeader>,
    required: true,
  },
  root: {
    type: Boolean,
    default: true,
  },
})

const tocDepth = computed<number>(() => {
  const themeLocale = useThemeLocaleData()
  const frontmatter = usePageFrontmatter<MixThemePageFrontmatter>()

  return frontmatter.value.tocDepth ?? themeLocale.value.tocDepth ?? 2
})

const handleClick = ({ target: el }: Event) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id = '#' + (el as HTMLAnchorElement).href!.split('#')[1]
  const heading = document.querySelector<HTMLAnchorElement>(
    decodeURIComponent(id)
  )
  heading?.focus()

  emit('click-anchor')
}
</script>

<template>
  <ul :class="clsx('my-0 list-none', root ? 'relative pl-0' : 'pl-3')">
    <li
      v-for="{ level, link, title, children } in headers"
      :key="link"
      class="text-muted my-0 pl-0"
    >
      <a
        :href="link"
        :aria-label="title"
        :class="
          clsx(
            'block no-underline',
            'hover:text-default leading-7',
            'overflow-hidden text-ellipsis whitespace-nowrap',
            'toc-item'
          )
        "
        @click="handleClick"
      >
        {{ title }}
      </a>
      <template v-if="children?.length && level - 1 < tocDepth">
        <!-- solved: https://github.com/vuejs/core/issues/3361 -->
        <PageToc
          :headers="children"
          :root="false"
          @click-anchor="$emit('click-anchor')"
        />
      </template>
    </li>
  </ul>
</template>
