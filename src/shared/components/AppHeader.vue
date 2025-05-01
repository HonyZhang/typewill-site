<script setup lang="ts">
import { computed, defineOptions } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import Logo from './icons/Logo.vue'
import { useI18n } from 'vue-i18n'
import { useWindowScroll } from '@vueuse/core'

defineOptions({
  name: 'AppHeader'
})

const route = useRoute()
const { t } = useI18n()
const { y } = useWindowScroll()

const currentPath = computed(() => route.path)
const isScrolled = computed(() => y.value > 0)

const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'blog', path: '/blog' },
  { key: 'projects', path: '/projects' },
  { key: 'contact', path: '/contact' }
]
</script>

<template>
  <header
    class="navbar bg-base-100 transition-all duration-300 fixed top-0 left-0 right-0 z-50"
    :class="{ 'shadow-md': isScrolled }"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li
            v-for="item in navItems"
            :key="item.key"
          >
            <router-link
              :to="item.path"
              class="hover:bg-base-200"
              :class="{ 'font-semibold': currentPath === item.path }"
            >
              {{ t(`nav.${item.key}`) }}
            </router-link>
          </li>
        </ul>
      </div>
      <router-link
        to="/"
        class="btn btn-ghost gap-2 text-xl"
      >
        <logo class-list="w-8 h-8" />
        <span>{{ t('common.logo') }}</span>
      </router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li
          v-for="item in navItems"
          :key="item.key"
        >
          <router-link
            :to="item.path"
            class="hover:bg-base-200"
            :class="{ 'font-semibold': currentPath === item.path }"
          >
            {{ t(`nav.${item.key}`) }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <language-toggle />
      <theme-toggle />
    </div>
  </header>
</template>
