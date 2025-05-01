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
    class="px-6 max-w-6xl mx-auto"
    aria-labelledby="projects-heading"
  >
    <h2 
      id="projects-heading" 
      class="text-2xl font-semibold mb-6 text-center text-base-content"
    >
      精选项目
    </h2>
    <div 
      class="grid gap-6 md:grid-cols-3"
      role="list"
    >
      <project-card
        v-for="project in projects"
        :key="project.id"
        v-bind="project"
      />
    </div>
  </section>
</template> 