import { debounce } from 'ts-debounce'
import { computed, defineComponent, h, onMounted, ref, Transition } from 'vue'

import '../styles/back-top.css'

const getScrollTop = (): number =>
  window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0
const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' })

export const BackTop = defineComponent({
  name: 'BackTop',

  setup() {
    const scrollTop = ref(0)
    const show = computed(() => scrollTop.value > 300)
    const onScroll = debounce(() => {
      scrollTop.value = getScrollTop()
    }, 100)

    onMounted(() => {
      scrollTop.value = getScrollTop()
      window.addEventListener('scroll', () => onScroll())
    })

    const backToTopEl = h(
      'div',
      { class: 'back-top', onClick: scrollToTop },
      h(
        'div',
        { class: 'box' },
        h(
          'svg',
          {
            fill: 'none',
            stroke: 'currentColor',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': '1.5',
            'shape-rendering': 'geometricPrecision',
            viewBox: '0 0 24 24',
            height: 24,
            width: 24,
            style: 'color: currentcolor',
          },
          h('path', { d: 'M18 15l-6-6-6 6' })
        )
      )
    )

    return () =>
      h(
        Transition,
        {
          name: 'back-top',
        },
        () => (show.value ? backToTopEl : null)
      )
  },
})

export default BackTop
