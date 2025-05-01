import { ref, onMounted, watch } from 'vue'

const THEME_KEY = 'preferred-theme'
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

export function useTheme() {
  const currentTheme = ref(LIGHT_THEME)

  // 从 localStorage 加载主题
  const loadTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    if (savedTheme) {
      currentTheme.value = savedTheme
    } else {
      // 检查系统主题偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      currentTheme.value = prefersDark ? DARK_THEME : LIGHT_THEME
    }
    applyTheme(currentTheme.value)
  }

  // 应用主题
  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme)
  }

  // 切换主题
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === DARK_THEME ? LIGHT_THEME : DARK_THEME
  }

  // 监听主题变化并保存到 localStorage
  watch(currentTheme, (newTheme) => {
    localStorage.setItem(THEME_KEY, newTheme)
    applyTheme(newTheme)
  })

  // 监听系统主题变化
  onMounted(() => {
    loadTheme()
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        currentTheme.value = e.matches ? DARK_THEME : LIGHT_THEME
      }
    })
  })

  return {
    currentTheme,
    toggleTheme
  }
} 