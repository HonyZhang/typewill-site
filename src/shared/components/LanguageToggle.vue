<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-sm normal-case">
      <span class="text-base">{{ currentLang === 'zh' ? '中' : 'En' }}</span>
    </label>
    <ul
      tabindex="0"
      class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-32 mt-2"
    >
      <li>
        <a
          :class="{ 'menu-active': currentLang === 'zh' }"
          @click.prevent="handleLanguageChange('zh')"
        >
          {{ t('common.language.zh') }}
        </a>
      </li>
      <li>
        <a
          :class="{ 'menu-active': currentLang === 'en' }"
          @click.prevent="handleLanguageChange('en')"
        >
          {{ t('common.language.en') }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { getCurrentLanguage, setLanguage } from '../i18n'

const { t } = useI18n()
const currentLang = ref(getCurrentLanguage())

const handleLanguageChange = (lang: 'zh' | 'en') => {
  setLanguage(lang)
  currentLang.value = lang
  // 手动关闭下拉菜单
  const dropdown = document.activeElement as HTMLElement
  if (dropdown) {
    dropdown.blur()
  }
}
</script> 