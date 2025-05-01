export type Theme = 'light' | 'dark'

export interface ThemeState {
  theme: Theme
}

export interface ThemeActions {
  toggleTheme: () => void
  initTheme: () => void
} 