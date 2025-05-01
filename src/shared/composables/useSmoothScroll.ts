import { ref } from 'vue'

export interface ScrollOptions {
  /**
   * 滚动目标的选择器
   */
  selector: string
  /**
   * 顶部偏移量（例如固定导航栏的高度）
   */
  offset?: number
  /**
   * 滚动动画持续时间（毫秒）
   */
  duration?: number
}

export function useSmoothScroll() {
  const isScrolling = ref(false)

  /**
   * 平滑滚动到目标元素
   */
  const scrollTo = async (options: ScrollOptions) => {
    const {
      selector,
      offset = 0,
      duration = 750
    } = options

    const targetElement = document.querySelector(selector)
    if (!targetElement || isScrolling.value) return false

    isScrolling.value = true

    try {
      const { top } = targetElement.getBoundingClientRect()
      window.scrollTo({
        top: window.scrollY + top - offset,
        behavior: 'smooth'
      })

      // 等待滚动动画完成
      await new Promise(resolve => setTimeout(resolve, duration))
      return true
    } catch (error) {
      console.error('Scroll failed:', error)
      return false
    } finally {
      isScrolling.value = false
    }
  }

  return {
    isScrolling,
    scrollTo
  }
} 