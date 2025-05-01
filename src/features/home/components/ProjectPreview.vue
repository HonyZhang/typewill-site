<template>
  <section id="projects" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ t('home.projects.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <project-card
          v-for="project in projects"
          :key="project.id"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from './ProjectCard.vue'
import { useProjects } from '../composables/useProjects'

defineOptions({
  name: 'ProjectPreview'
})

const { t } = useI18n()
const { projects } = useProjects()
</script> 