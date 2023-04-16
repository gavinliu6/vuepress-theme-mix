import type { GitPluginPageData } from '@vuepress/plugin-git'

import type { NavLink, SidebarConfig } from './nav.js'

export interface MixThemePageData extends GitPluginPageData {
  filePathRelative: string | null
}

export interface MixThemePageFrontmatter {
  home?: boolean
  navbar?: boolean
  pageClass?: string
  toc?: boolean
  tocDepth?: number
}

export interface MixThemeHomePageFrontmatter extends MixThemePageFrontmatter {
  home: true
  heroText?: string | null
  tagline?: string | null
  actions?: {
    text: string
    link: string
    type?: 'primary' | 'secondary'
  }[]
  features?: {
    title: string
    details: string
  }[]
  footer?: string
  toc?: true
}

export interface MixThemeNormalPageFrontmatter extends MixThemePageFrontmatter {
  home?: false
  editLink?: false | string | ((relativePath: string) => string)
  lastUpdated?: boolean
  contributors?: boolean
  sidebar?: 'auto' | false | SidebarConfig
  sidebarDepth?: number
  prev?: string | NavLink
  next?: string | NavLink
  toc?: false
}
