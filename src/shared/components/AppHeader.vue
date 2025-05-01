<script setup lang="ts">
import { defineOptions } from 'vue'
import { useRouter } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

defineOptions({
  name: 'AppHeader'
})

const router = useRouter()
const currentRoute = router.currentRoute

const navItems = [
  { name: '主页', path: '/' },
  { name: '项目', path: '/projects' },
  { name: '关于', path: '/about' },
  { name: '博客', path: '/blog' },
  { name: '联系', path: '/contact' }
]
</script>

<template>
  <nav class="navbar bg-base-100/80 backdrop-blur fixed top-0 z-50 px-4 h-16">
    <div class="navbar-start">
      <router-link to="/" class="text-xl font-bold">Type未来</router-link>
    </div>
    
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="item in navItems" :key="item.path">
          <router-link 
            :to="item.path"
            class="hover:bg-base-200 rounded-lg"
            :class="{ 'font-semibold': currentRoute.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
    
    <div class="navbar-end">
      <theme-toggle />
      
      <!-- 移动端菜单 -->
      <div class="dropdown dropdown-end md:hidden">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="item in navItems" :key="item.path">
            <router-link 
              :to="item.path"
              :class="{ 'font-semibold': currentRoute.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  transition: background-color var(--theme-transition-duration) ease-in-out;
}</style> 