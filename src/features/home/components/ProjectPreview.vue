<script setup lang="ts">
import { defineOptions } from 'vue'

import ProjectCard from './ProjectCard.vue'
import { useProjects } from '../composables/useProjects'

defineOptions({
  name: 'ProjectPreview'
})

const { projects } = useProjects()
</script>

<template>
  <section 
    class="w-full px-4 sm:px-6"
    aria-labelledby="projects-heading"
  >
    <div class="max-w-6xl mx-auto">
      <h2 
        id="projects-heading" 
        class="text-3xl font-bold mb-12 text-center text-base-content"
      >
        精选项目
      </h2>
      <div 
        class="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        <project-card
          v-for="project in projects"
          :key="project.id"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template> 