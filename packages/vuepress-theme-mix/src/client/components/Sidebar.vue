<template>
  <aside class="sidebar">
    <NavbarLinks />

    <div class="sidebar-inner">
      <ul class="sidebar-items">
        <template v-for="sidebarItem in sidebarItems" :key="sidebarItem.link">
          <SidebarItemLink
            v-if="sidebarItem.type === 'link'"
            :item="sidebarItem"
          />
          <SidebarItemGroup v-else :item="sidebarItem" />
        </template>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSidebarItems } from '../composables'
import NavbarLinks from './NavbarLinks.vue'
import SidebarItemLink from './SidebarItemLink.vue'
import SidebarItemGroup from './SidebarItemGroup.vue'

export default defineComponent({
  name: 'Sidebar',

  components: {
    NavbarLinks,
    SidebarItemLink,
    SidebarItemGroup,
  },

  setup() {
    const sidebarItems = useSidebarItems()

    return {
      sidebarItems,
    }
  },
})
</script>
