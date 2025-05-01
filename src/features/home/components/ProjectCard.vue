<script setup lang="ts">
import { defineOptions } from 'vue'

import { useAnimationDelay } from '../composables/useAnimationDelay'

import type { Project } from '../types/project'

defineOptions({
  name: 'ProjectCard'
})

const props = defineProps<Project & { index?: number }>()
const { style } = useAnimationDelay(props.index || 0)
</script>

<template>
  <div 
    class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-up"
    :style="style"
  >
    <figure class="px-6 pt-6">
      <img
        :src="logo"
        :alt="name"
        class="h-16 w-16 object-contain"
      >
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ name }}
      </h2>
      <p class="text-base-content/70">
        {{ description }}
      </p>
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in tags"
          :key="tag"
          class="badge badge-primary badge-outline"
        >
          {{ tag }}
        </span>
      </div>
      <div class="card-actions justify-end mt-4">
        <a
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm"
          aria-label="访问项目"
        >
          访问
        </a>
      </div>
    </div>
  </div>
</template> 