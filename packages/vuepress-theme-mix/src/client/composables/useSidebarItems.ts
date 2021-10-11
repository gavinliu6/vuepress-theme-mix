import { inject } from 'vue'
import type { ComputedRef, InjectionKey } from 'vue'
import { useRoute } from 'vue-router'
import {
  isArray,
  isLinkHttp,
  isPlainObject,
  isString,
  resolveLocalePath,
} from '@vuepress/shared'
import type {
  MixThemeData,
  MixThemeNormalPageFrontmatter,
  ResolvedSidebarItem,
  SidebarConfigArray,
  SidebarCongfigObject,
  SidebarGroup,
  SidebarLink,
} from '../../shared'
import { useNavLink } from './useNavLink'

export type SidebarItemsRef = ComputedRef<ResolvedSidebarItem[]>

export const sidebarItemsSymbol: InjectionKey<SidebarItemsRef> =
  Symbol('sidebarItems')

/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = (): SidebarItemsRef => {
  const sidebarItems = inject(sidebarItemsSymbol)
  if (!sidebarItems) {
    throw new Error('useSidebarItems() is called without provider.')
  }
  return sidebarItems
}

/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export const resolveSidebarItems = (
  frontmatter: MixThemeNormalPageFrontmatter,
  themeLocale: MixThemeData
): ResolvedSidebarItem[] => {
  // get sidebar config from frontmatter > themeConfig
  const sidebarConfig = frontmatter.sidebar ?? themeLocale.sidebar ?? 'false'

  // resolve sidebar items according to the config
  if (frontmatter.home || sidebarConfig === false) {
    return []
  }

  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig)
  }

  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig)
  }

  return []
}

/**
 * Resolve sidebar items if the config is an array
 */
export const resolveArraySidebarItems = (
  sidebarConfig: SidebarConfigArray,
  topPrefix: string = '/'
): ResolvedSidebarItem[] => {
  const isRelative = (p: string): boolean =>
    !isLinkHttp(p) && p.substr(0, 1) !== '/'

  const handleChildItem = (prefix: string = topPrefix) => {
    return function (
      item: string | SidebarLink | SidebarGroup
    ): ResolvedSidebarItem {
      let childItem: ResolvedSidebarItem

      if (isString(item)) {
        if (isRelative(item)) {
          item = prefix.replace(/\/+$/, '') + '/' + item
        }

        const resolved = useNavLink(item)
        return {
          type: 'link',
          text: resolved.text,
          link: resolved.link,
        }
      } else {
        childItem = item as ResolvedSidebarItem
      }

      if (childItem.type === 'link') {
        if (isRelative(childItem.link)) {
          childItem.link = prefix.replace(/\/+$/, '') + '/' + childItem.link
        }

        const resolved = useNavLink(childItem.link)
        childItem.link = resolved.link
        return childItem
      }

      if (childItem.type === 'group' || childItem.type === 'link-group') {
        if (isRelative(childItem.link)) {
          childItem.link = prefix.replace(/\/+$/, '') + '/' + childItem.link
        }
        const resolved = useNavLink(childItem.link)
        childItem.link = resolved.link

        if (childItem.children.length) {
          childItem.children = childItem.children.map(handleChildItem(childItem.link))
        }

        return childItem
      }

      return childItem
    }
  }

  return sidebarConfig.map((item) => {
    if (isString(item)) {
      if (isRelative(item)) item = topPrefix + item
      const resolved = useNavLink(item)
      return {
        type: 'link',
        text: resolved.text,
        link: resolved.link,
      }
    }

    if (item.type === 'link') {
      if (isRelative(item.link)) item.link = topPrefix + item.link
      const resolved = useNavLink(item.link)
      item.link = resolved.link
      return item
    }

    if (item.type === 'group' || item.type === 'link-group') {
      if (isRelative(item.link)) item.link = topPrefix + item.link
      const resolved = useNavLink(item.link)
      item.link = resolved.link
      return {
        ...item,
        children: item.children.map(handleChildItem(item.link)),
      }
    }

    throw new Error(`Unknown sidebar item type: ${item.type}.`)
  })
}

/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export const resolveMultiSidebarItems = (
  sidebarConfig: SidebarCongfigObject
): ResolvedSidebarItem[] => {
  const route = useRoute()
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path)
  const matchedSidebarConfig = sidebarConfig[sidebarPath] ?? []

  return resolveArraySidebarItems(matchedSidebarConfig, sidebarPath)
}
