import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useStorage } from '@vueuse/core'

export type Theme = 'light' | 'dark' | 'system'

export interface ThemeOptions {
  /**
   * 存储主题设置的 key
   */
  storageKey?: string
  /**
   * 默认主题
   */
  defaultTheme?: Theme
  /**
   * 主题切换时的过渡时间（毫秒）
   */
  transitionDuration?: number
}

export function useTheme(options: ThemeOptions = {}) {
  const {
    storageKey = 'vueuse-color-scheme',
    defaultTheme = 'system',
    transitionDuration = 300,
  } = options

  // 使用 useStorage 持久化主题设置
  const theme = useStorage<Theme>(storageKey, defaultTheme)
  
  // 系统主题监听
  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  const isSystemDark = ref(systemDarkMode.matches)

  // 计算当前是否为暗色主题
  const isDark = computed(() => {
    if (theme.value === 'system') {
      return isSystemDark.value
    }
    return theme.value === 'dark'
  })

  // 监听系统主题变化
  const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    isSystemDark.value = event.matches
    updateTheme()
  }

  // 更新文档主题
  const updateTheme = () => {
    // 添加过渡效果
    document.documentElement.style.setProperty(
      '--theme-transition-duration',
      `${transitionDuration}ms`
    )

    // 更新 data-theme 属性
    document.documentElement.setAttribute(
      'data-theme',
      isDark.value ? 'dark' : 'light'
    )

    // 更新 class
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  // 切换主题
  const toggleTheme = () => {
    if (theme.value === 'system') {
      theme.value = isSystemDark.value ? 'light' : 'dark'
    } else if (theme.value === 'light') {
      theme.value = 'dark'
    } else {
      theme.value = 'light'
    }
  }

  // 设置指定主题
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
  }

  // 监听主题变化
  watch([theme, isDark], () => {
    updateTheme()
  })

  // 生命周期钩子
  onMounted(() => {
    // 防止主题闪烁
    const styleEl = document.createElement('style')
    styleEl.textContent = `
      :root { 
        transition: background-color var(--theme-transition-duration, 0ms) ease,
                  color var(--theme-transition-duration, 0ms) ease;
      }
    `
    document.head.appendChild(styleEl)

    // 初始化主题
    updateTheme()

    // 添加系统主题变化监听
    systemDarkMode.addEventListener('change', handleSystemThemeChange)
  })

  onUnmounted(() => {
    // 清理系统主题变化监听
    systemDarkMode.removeEventListener('change', handleSystemThemeChange)
  })

  return {
    theme,
    isDark,
    isSystemDark,
    toggleTheme,
    setTheme
  }
} 