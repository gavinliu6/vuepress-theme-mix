<template>
  <li class="sidebar-item" :class="{ collapsed: collapsed }">
    <a
      v-if="item.type === 'group'"
      class="sidebar-item-group"
      :aria-label="linkAriaLabel"
      @click="handleClick"
    >
      <span class="arrow">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
            stroke="currentColor"
            stroke-linecap="square"
          ></path>
        </svg>
      </span>
      <span class="sidebar-item-group-title">
        {{ item.text }}
      </span>
    </a>

    <RouterLink
      v-else-if="isRouterLink && item.type === 'link-group'"
      class="sidebar-item-link-group"
      :to="item.link"
      :rel="linkRel"
      :aria-label="linkAriaLabel"
      v-bind="$attrs"
      @click="handleClick"
    >
      <span class="arrow">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
            stroke="currentColor"
            stroke-linecap="square"
          ></path>
        </svg>
      </span>
      <span class="sidebar-item-group-link-title">
        {{ item.text }}
      </span>
    </RouterLink>
    <a
      v-else
      class="sidebar-outbound-link external"
      :href="item.link"
      :rel="linkRel"
      :target="linkTarget"
      :aria-label="linkAriaLabel"
    >
      {{ item.text }}
      <OutboundLink v-if="isBlankTarget" />
    </a>
    <ul class="sidebar-items sidebar-items-sub">
      <template v-for="sidebarItem in item.children" :key="sidebarItem.link">
        <SidebarItemLink
          v-if="sidebarItem.type === 'link'"
          :item="sidebarItem"
        />
        <SidebarItemGroup v-else :item="sidebarItem" />
      </template>
    </ul>
  </li>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  Ref,
  ref,
  toRefs,
  watch,
} from 'vue'
import type { PropType } from 'vue'
import type { ResolvedSidebarItem } from '../../shared'
import { isLinkHttp, isLinkMailto, isLinkTel } from '@vuepress/shared'
import SidebarItemLink from './SidebarItemLink.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'SidebarItemGroup',

  components: {
    SidebarItemLink,
  },

  props: {
    item: {
      type: Object as PropType<ResolvedSidebarItem>,
      required: true,
    },
  },

  setup(props) {
    const route = useRoute()
    const { item } = toRefs(props)

    // if the link has http protocol
    const hasHttpProtocol = computed(() => isLinkHttp(item.value.link))
    // if the link has non-http protocol
    const hasNonHttpProtocal = computed(
      () => isLinkMailto(item.value.link) || isLinkTel(item.value.link)
    )
    // resolve the `target` attr
    const linkTarget = computed(() => {
      if (hasNonHttpProtocal.value) return undefined
      if (item.value.target) return item.value.target
      if (hasHttpProtocol.value) return '_blank'
      return undefined
    })
    // if the `target` attr is '_blank'
    const isBlankTarget = computed(() => linkTarget.value === '_blank')
    // is `<RouterLink>` or not
    const isRouterLink = computed(
      () =>
        !hasHttpProtocol.value &&
        !hasNonHttpProtocal.value &&
        !isBlankTarget.value
    )
    // resolve the `rel` attr
    const linkRel = computed(() => {
      if (hasNonHttpProtocal.value) return undefined
      if (item.value.rel) return item.value.rel
      if (isBlankTarget.value) return 'noopener noreferrer'
      return undefined
    })
    // resolve the `aria-label` attr
    const linkAriaLabel = computed(
      () => item.value.ariaLabel || item.value.text
    )

    const isActiveSidebarItem = (item: Ref<ResolvedSidebarItem>) => {
      if (item.value.type === 'link') {
        return item.value.link === route.path
      }
      if (item.value.type === 'group') {
        return item.value.children.some((subItem) =>
          isActiveSidebarItem(ref(subItem))
        )
      }
      if (item.value.type === 'link-group') {
        return (
          item.value.link === route.path ||
          item.value.children.some((subItem) =>
            isActiveSidebarItem(ref(subItem))
          )
        )
      }
      return false
    }

    const isActive = ref(isActiveSidebarItem(item))
    const collapsed = ref(!isActive.value)
    watch(
      () => route.path,
      () => {
        isActive.value = isActiveSidebarItem(item)
        collapsed.value = !isActive.value
      }
    )

    onMounted(() => {
      if (isActive.value) {
        collapsed.value = false
      }
    })

    const handleClick = (e) => {
      e.preventDefault()

      collapsed.value = !collapsed.value
    }

    return {
      linkTarget,
      linkRel,
      linkAriaLabel,
      isRouterLink,
      collapsed,
      handleClick,
    }
  },
})
</script>
