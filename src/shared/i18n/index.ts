import { createI18n } from 'vue-i18n'
import zh from './locales/zh'
import en from './locales/en'

const STORAGE_KEY = 'typewill-language'
const DEFAULT_LANG = 'zh'

type Language = 'zh' | 'en'

// 获取存储的语言或使用默认语言
const getStoredLanguage = (): Language => {
  const storedLang = localStorage.getItem(STORAGE_KEY) as Language
  return storedLang || DEFAULT_LANG
}

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getStoredLanguage(),
  fallbackLocale: DEFAULT_LANG,
  messages: {
    zh,
    en
  }
})

// 语言切换函数
export const setLanguage = (lang: Language) => {
  i18n.global.locale.value = lang
  localStorage.setItem(STORAGE_KEY, lang)
}

// 获取当前语言
export const getCurrentLanguage = () => i18n.global.locale.value as Language

export default i18n 