<script setup lang="ts">
import { defineOptions, computed } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'AppHeader'
})

const route = useRoute()
const { t } = useI18n()

const currentPath = computed(() => route.path)

const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'blog', path: '/blog' },
  { key: 'projects', path: '/projects' },
  { key: 'contact', path: '/contact' }
]
</script>

<template>
  <header class="navbar bg-base-100 transition-colors duration-300">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="item in navItems" :key="item.key">
            <RouterLink 
              :to="item.path"
              class="hover:bg-base-200"
              :class="{ 'font-semibold': currentPath === item.path }"
            >
              {{ t(`nav.${item.key}`) }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink to="/" class="btn btn-ghost text-xl">{{ t('common.logo') }}</RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="item in navItems" :key="item.key">
          <RouterLink 
            :to="item.path"
            class="hover:bg-base-200"
            :class="{ 'font-semibold': currentPath === item.path }"
          >
            {{ t(`nav.${item.key}`) }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  </header>
</template> 