<script setup lang="ts">
import { defineOptions } from 'vue'

import HeroSection from '@/features/home/components/HeroSection.vue'
import ProjectPreview from '@/features/home/components/ProjectPreview.vue'

defineOptions({
  name: 'HomePage'
})
</script>

<template>
  <main class="space-y-20 py-10">
    <hero-section />
    <project-preview />
  </main>
</template>
