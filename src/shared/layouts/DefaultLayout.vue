<!-- shared/layouts/DefaultLayout.vue -->
<script setup lang="ts">
import { defineOptions } from 'vue'

import AppFooter from '@/shared/components/AppFooter.vue'
import AppHeader from '@/shared/components/AppHeader.vue'

defineOptions({
  name: 'DefaultLayout'
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <app-header />
    <main
      class="container mx-auto flex-grow px-4 py-8"
      role="main"
      aria-label="主要内容"
    >
      <router-view />
    </main>
    <app-footer />
  </div>
</template>
