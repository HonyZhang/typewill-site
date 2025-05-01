import { ref, onUnmounted } from 'vue'

interface TypewriterOptions {
  /**
   * 打字速度（毫秒）
   */
  speed?: number
  /**
   * 光标闪烁间隔（毫秒）
   */
  cursorBlinkSpeed?: number
}

export function useTypewriter(options: TypewriterOptions = {}) {
  const {
    speed = 100,
    cursorBlinkSpeed = 500
  } = options

  const text = ref('')
  const isTyping = ref(false)
  const cursorVisible = ref(true)
  let cursorInterval: NodeJS.Timer | null = null

  /**
   * 开始打字动画
   * @param content 要显示的文本内容
   */
  const typeText = async (content: string) => {
    if (isTyping.value) return

    isTyping.value = true
    text.value = ''

    try {
      for (let i = 0; i <= content.length; i++) {
        if (!isTyping.value) break
        text.value = content.slice(0, i)
        await new Promise(resolve => setTimeout(resolve, speed))
      }
    } finally {
      isTyping.value = false
    }
  }

  /**
   * 停止打字动画
   */
  const stopTyping = () => {
    isTyping.value = false
  }

  /**
   * 开始光标闪烁动画
   */
  const startCursorBlink = () => {
    if (cursorInterval) return

    cursorInterval = setInterval(() => {
      cursorVisible.value = !cursorVisible.value
    }, cursorBlinkSpeed)
  }

  // 组件卸载时清理定时器
  onUnmounted(() => {
    if (cursorInterval) {
      clearInterval(cursorInterval)
      cursorInterval = null
    }
  })

  return {
    text,
    isTyping,
    cursorVisible,
    typeText,
    stopTyping,
    startCursorBlink
  }
} 