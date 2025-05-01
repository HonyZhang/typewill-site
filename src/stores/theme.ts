import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Theme, ThemeState, ThemeActions } from '@/stores/types'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('light')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  // 初始化主题
  const initTheme = () => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = isDark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  return {
    theme,
    toggleTheme,
    initTheme
  } satisfies ThemeState & ThemeActions
}) 