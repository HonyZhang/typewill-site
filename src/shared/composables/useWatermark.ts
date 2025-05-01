import { computed, type Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

export interface WatermarkOptions {
  /**
   * 文字大小相对于窗口宽度的比例
   */
  widthRatio?: number
  /**
   * 文字大小相对于窗口高度的比例
   */
  heightRatio?: number
  /**
   * 缩放比例
   */
  scale?: number
}

export function useWatermark(options: WatermarkOptions = {}) {
  const {
    widthRatio = 0.15,
    heightRatio = 0.3,
    scale = 0.8,
  } = options

  // 使用 VueUse 的窗口相关 hooks
  const { width: windowWidth, height: windowHeight } = useWindowSize()

  // 计算水印文字大小
  const fontSize = computed(() => {
    return Math.min(windowWidth.value * widthRatio, windowHeight.value * heightRatio) + 'px'
  })

  // 生成水印样式类
  const getWatermarkClass = (isDark: Ref<boolean>) => computed(() => ({
    'absolute inset-0 font-bold select-none pointer-events-none': true,
    'flex items-center justify-center': true,
    'text-base-content opacity-5 dark:opacity-[0.03]': true,
    'transform scale-[0.8]': scale !== 1,
    'transition-all duration-500 ease-in-out': true
  }))

  return {
    fontSize,
    getWatermarkClass
  }
} 