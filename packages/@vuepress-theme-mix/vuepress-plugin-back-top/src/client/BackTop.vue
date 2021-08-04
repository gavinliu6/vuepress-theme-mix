<template>
  <Transition name="back-top">
    <div v-if="show" class="back-top" @click="scrollToTop">
      <div class="box">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          shape-rendering="geometricPrecision"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          style="color: currentcolor"
        >
          <path d="M18 15l-6-6-6 6"></path>
        </svg>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { debounce } from 'ts-debounce'
import { computed, defineComponent, onMounted, ref } from 'vue'

const getScrollTop = (): number =>
  window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0
const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' })

export default defineComponent({
  name: 'BackTop',

  setup() {
    const scrollTop = ref(0)
    const show = computed(() => scrollTop.value > 300)

    onMounted(() => {
      scrollTop.value = getScrollTop()
      window.addEventListener(
        'scroll',
        debounce(() => {
          scrollTop.value = getScrollTop()
        }, 100)
      )
    })

    return {
      show,
      scrollToTop,
    }
  },
})
</script>

<style>
:root {
  --back-top-color: #fff;
  --back-top-bg-color: #00a0ff;
}

.back-top-enter-active,
.back-top-leave-active {
  transition: opacity 0.3s;
}

.back-top-enter-from,
.back-top-leave-to {
  opacity: 0;
}

.back-top {
  position: fixed;
  right: 4rem;
  bottom: 3rem;
  box-sizing: border-box;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  z-index: 10;
  overflow: hidden;
}

.back-top .box {
  height: 2.5rem;
  width: 2.5rem;
  line-height: 2.5rem;
  border-radius: 50%;
  background-color: var(--back-top-bg-color);
  color: var(--back-top-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1199.98px) {
  .back-top {
    right: 1.5rem;
    bottom: 1.5rem;
  }
}
</style>
