<script setup lang="ts">
import { defineOptions } from 'vue'

import HeroSection from '@/features/home/components/HeroSection.vue'
import ProjectPreview from '@/features/home/components/ProjectPreview.vue'

defineOptions({
  name: 'HomePage'
})
</script>

<template>
  <main class="min-h-screen overflow-x-hidden bg-gradient-to-b from-base-100 to-base-200">
    <div class="flex flex-col pt-16">
      <hero-section />
      <div class="py-20">
        <project-preview />
      </div>
    </div>
  </main>
</template>
