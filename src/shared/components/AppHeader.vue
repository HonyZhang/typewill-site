<!-- shared/components/AppHeader.vue -->
<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({
  name: 'AppHeader'
})

const routes = [
  { path: '/', name: '主页' },
  { path: '/projects', name: '项目' },
  { path: '/about', name: '关于' },
  { path: '/blog', name: '博客' },
  { path: '/contact', name: '联系' }
]
</script>

<template>
  <header
    class="navbar bg-base-100 shadow"
    role="banner"
  >
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Logo 区域 -->
      <div class="flex items-center gap-2">
        <router-link
          to="/"
          class="text-xl font-bold tracking-wide hover:text-primary transition-colors"
        >
          TypeWill
        </router-link>
      </div>

      <!-- 桌面端导航 -->
      <nav
        class="hidden md:flex gap-4"
        role="navigation"
        aria-label="主导航"
      >
        <router-link 
          v-for="route in routes" 
          :key="route.path"
          :to="route.path"
          class="btn btn-ghost text-base hover:bg-base-200"
        >
          {{ route.name }}
        </router-link>
      </nav>

      <!-- 移动端菜单 -->
      <div class="md:hidden dropdown dropdown-end">
        <label 
          tabindex="0" 
          class="btn btn-ghost"
          role="button"
          aria-haspopup="true"
          aria-label="打开菜单"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5" 
            fill="none"
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round"
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul 
          tabindex="0" 
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          role="menu"
        >
          <li
            v-for="route in routes"
            :key="route.path"
            role="none"
          >
            <router-link 
              :to="route.path"
              class="hover:bg-base-200"
              role="menuitem"
            >
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
