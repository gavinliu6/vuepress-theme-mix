import { useElementBounding } from '@vueuse/core'
import type { Ref } from 'vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'

import { shouldShowPageToc, throttleAndDebounce } from '../utils/index.js'

export function useActiveAnchor(
  container: Ref<HTMLElement>,
  marker: Ref<HTMLElement>
) {
  const onScroll = throttleAndDebounce(setActiveLink, 100)
  let prevActiveLink: HTMLAnchorElement | null = null
  onMounted(() => {
    requestAnimationFrame(setActiveLink)
    window.addEventListener('scroll', onScroll)
    onScroll()
  })
  onUpdated(() => {
    // sidebar update means a route change
    activateLink(location.hash)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  function setActiveLink() {
    if (!shouldShowPageToc.value) {
      return
    }

    const links = [].slice.call(
      container.value.querySelectorAll('.aside .toc-item')
    ) as HTMLAnchorElement[]
    const headings = [].slice
      .call(
        document.querySelectorAll(
          '.md-container h2, .md-container h3, .md-container h4, .md-container h5'
        )
      )
      .filter((head: HTMLHeadingElement) => {
        return links.some(link => {
          return (
            decodeURIComponent(link.hash) === `#${head.id}` &&
            head.offsetParent !== null
          )
        })
      }) as HTMLHeadingElement[]

    // const scrollY = window.scrollY
    // const innerHeight = window.innerHeight
    // const offsetHeight = document.body.offsetHeight
    // const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1
    // // page bottom - highlight last one
    // if (headings.length && isBottom) {
    //   activateLink(headings[headings.length - 1].id)
    //   return
    // }

    const sortedHeadings = headings.concat([]).sort((a, b) => {
      const rectA = useElementBounding(a)
      const rectB = useElementBounding(b)

      return rectA.top.value - rectB.top.value
    })

    const style = window.getComputedStyle(document.documentElement)
    let scrollMt = parseFloat(
      style.getPropertyValue('--scroll-mt').match(/[\d.]+/)?.[0] ?? '0'
    )
    const fontSize = parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? '16')
    scrollMt = scrollMt * fontSize
    const top = scrollMt + 1

    let current = sortedHeadings[0]
    for (let i = 0; i < sortedHeadings.length; i++) {
      const rect = useElementBounding(sortedHeadings[i])
      if (top >= rect.top.value) {
        current = sortedHeadings[i]
      }
    }

    current && activateLink(current.id)
  }

  function activateLink(hash: string | null) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove('text-default')
    }
    if (hash !== null) {
      prevActiveLink = container.value.querySelector(
        `a[href="#${decodeURIComponent(hash)}"]`
      )
    }
    const activeLink = prevActiveLink
    if (activeLink) {
      activeLink.classList.add('text-default')
      marker.value.style.top = activeLink.offsetTop + 40 + 'px'
      marker.value.style.opacity = '1'
    } else {
      marker.value.style.top = '40px'
      marker.value.style.opacity = '0'
    }
  }
}
