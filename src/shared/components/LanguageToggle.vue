<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost">
      <span class="text-base">{{ currentLang === 'zh' ? '中' : 'En' }}</span>
    </div>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
    >
      <li>
        <button
          class="text-left hover:bg-primary hover:text-primary-content"
          :class="{ 'bg-primary text-primary-content': currentLang === 'zh' }"
          @click="changeLang('zh')"
        >
          {{ t('common.language.zh') }}
        </button>
      </li>
      <li>
        <button
          class="text-left hover:bg-primary hover:text-primary-content"
          :class="{ 'bg-primary text-primary-content': currentLang === 'en' }"
          @click="changeLang('en')"
        >
          {{ t('common.language.en') }}
        </button>
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

const changeLang = (lang: 'zh' | 'en') => {
  setLanguage(lang)
  currentLang.value = lang
}
</script> 