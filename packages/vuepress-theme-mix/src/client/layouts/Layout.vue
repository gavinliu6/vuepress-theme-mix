<script setup lang="ts">
import Home from '@theme/Home.vue'
import LocalNav from '@theme/LocalNav.vue'
import Navbar from '@theme/Navbar.vue'
import NavbarScreen from '@theme/NavbarScreen.vue'
import Page from '@theme/Page.vue'
import Sidebar from '@theme/Sidebar.vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { clsx } from 'clsx'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import type { MixThemePageFrontmatter } from '../../shared/index.js'
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData,
} from '../composables/index.js'

const themeLocale = useThemeLocaleData()
const page = usePageData()
const frontmatter = usePageFrontmatter<MixThemePageFrontmatter>()

const isScreenOpen = ref(false)
const toggleScreen = (to?: boolean): void => {
  if (to === true || !isScreenOpen.value) {
    document.body.classList.add('tablet-reverse:overflow-y-hidden')
  }
  if (to === false || isScreenOpen.value) {
    document.body.classList.remove('tablet-reverse:overflow-y-hidden')
  }

  isScreenOpen.value = typeof to === 'boolean' ? to : !isScreenOpen.value
}

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  if (to === true || !isSidebarOpen.value) {
    document.body.classList.add('tablet-reverse:overflow-y-hidden')
  }
  if (to === false || isSidebarOpen.value) {
    document.body.classList.remove('tablet-reverse:overflow-y-hidden')
  }
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}

// close sidebar & screen after navigation
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
    toggleScreen(false)
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>

<template>
  <div>
    <div class="max-w-8xl mx-auto">
      <Navbar
        v-if="themeLocale.navbar !== false"
        @toggle-screen="toggleScreen"
      />
      <LocalNav
        v-if="sidebarItems.length"
        :class="clsx('tablet:hidden')"
        @toggle-sidebar="toggleSidebar"
      />
      <NavbarScreen v-if="isScreenOpen" />

      <div
        v-if="sidebarItems.length && isSidebarOpen"
        :class="
          clsx(
            'bg-overlay tablet:hidden',
            'fixed bottom-0 left-0 right-0 top-0',
            'z-30'
          )
        "
        @click="toggleSidebar(false)"
      />
      <Sidebar
        v-if="!frontmatter.home && sidebarItems.length > 0"
        :class="
          clsx(
            sidebarItems.length &&
              isSidebarOpen &&
              '!translate-x-0 !opacity-100 !transition-[opacity,transform] !duration-300'
          )
        "
      />

      <Home v-if="frontmatter.home" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path" />
      </Transition>
    </div>
  </div>
</template>
