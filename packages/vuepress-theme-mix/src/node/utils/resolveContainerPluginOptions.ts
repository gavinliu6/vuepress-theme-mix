import type {
  ContainerPluginOptions,
  MarkdownItContainerRenderFunction,
  RenderPlaceFunction,
} from '@vuepress/plugin-container'
import { ensureLeadingSlash, resolveLocalePath } from '@vuepress/shared'

import type { MixThemeData } from '../../shared/index.js'

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For custom containers default title
 */
export const resolveContainerPluginOptions = (
  localeOptions: MixThemeData,
  type: 'tip' | 'warning' | 'danger'
): ContainerPluginOptions => {
  const locales = Object.entries(localeOptions.locales || {}).reduce(
    (result, [key, value]) => {
      result[key] = {
        defaultInfo: value?.[type] ?? localeOptions[type],
      }
      return result
    },
    {}
  )

  const typeIcons = {
    tip: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ai ai-LightBulb"><path d="M10 22h4M5 9a7 7 0 0 1 14 0 6.972 6.972 0 0 1-3 5.734l-.542 2.566a2 2 0 0 1-1.977 1.7h-2.962a2 2 0 0 1-1.977-1.7L8 14.745A6.992 6.992 0 0 1 5 9z"/><path d="M8 15h8"/></svg>',
    warning:
      '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    danger:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6"></path><path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0"></path><path d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6"></path></svg>',
  }

  // custom render
  const renderBefore: RenderPlaceFunction = (info: string): string =>
    `<div class="custom-container ${type}">${
      info
        ? `<p class="custom-container-title">${typeIcons[type]} ${info}</p>`
        : ''
    }\n`
  const renderAfter: RenderPlaceFunction = (): string => '</div>\n'

  // token info stack
  const infoStack: string[] = []

  const render: MarkdownItContainerRenderFunction = (
    tokens,
    index,
    opts,
    env
  ): string => {
    const token = tokens[index]

    if (token.nesting === 1) {
      // `before` tag

      // resolve info (title)
      let info = token.info.trim().slice(type.length).trim()

      if (!info && locales) {
        // locale
        const { filePathRelative } = env
        const relativePath = ensureLeadingSlash(filePathRelative ?? '')

        const localePath = resolveLocalePath(locales, relativePath)
        const localeData = locales[localePath] ?? {}

        if (localeData.defaultInfo) {
          info = localeData.defaultInfo
        } else {
          info = type.replace(/^\S/, s => s.toUpperCase())
        }
      }

      // push the info to stack
      infoStack.push(info)

      // render
      return renderBefore(info)
    } else {
      // `after` tag

      // pop the info from stack
      const info = infoStack.pop() || ''

      // render
      return renderAfter(info)
    }
  }

  return {
    type,
    locales,
    render,
  }
}
