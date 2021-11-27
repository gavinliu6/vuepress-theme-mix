import type { NavLink } from './navbarConfig'

export interface SidebarLink extends NavLink {
  type: 'link'
}

export interface SidebarItemGroup<T> extends NavLink {
  type: 'group' | 'link-group'
  collapsible?: boolean
  collapsed?: boolean
  children: T[]
}

export type SidebarGroup = SidebarItemGroup<SidebarGroup | SidebarLink | string>

export type SidebarConfigArray = (string | SidebarLink | SidebarGroup)[]
export type SidebarCongfigObject = Record<string, SidebarConfigArray>
export type SidebarConfig = SidebarConfigArray | SidebarCongfigObject
// resolved
export type ResolvedSidebarItem = SidebarLink | SidebarItemGroup<ResolvedSidebarItem>
