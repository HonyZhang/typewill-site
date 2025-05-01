<template>
  <section
    id="projects"
    class="container mx-auto px-4"
  >
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-8">{{ t('home.projects.title') }}</h2>
      <p class="text-xl text-base-content/80 max-w-2xl mx-auto">
        {{ t('home.projects.description') }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
      >
        <figure>
          <img
            :src="project.image"
            :alt="project.title"
            class="h-48 w-full object-cover"
          />
        </figure>
        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="text-base-content/70">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 my-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="badge badge-primary badge-outline"
            >{{ tag }}</span>
          </div>
          <div class="card-actions justify-end">
            <router-link
              :to="project.link"
              class="btn btn-primary"
            >
              {{ t('home.projects.viewDetails') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-12">
      <router-link
        to="/projects"
        class="btn btn-outline btn-lg"
      >
        {{ t('home.projects.viewAll') }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'ProjectPreview'
})

const { t } = useI18n()

const projects = [
  {
    title: '企业管理系统',
    description: '基于 Vue 3 的现代化企业管理系统，支持多租户和权限管理。',
    image: '/projects/project1.jpg',
    tags: ['Vue 3', 'TypeScript', 'DaisyUI'],
    link: '/projects/enterprise-system'
  },
  {
    title: '电商平台',
    description: '高性能电商解决方案，支持千万级商品数据和实时库存管理。',
    image: '/projects/project2.jpg',
    tags: ['微服务', 'Redis', 'PostgreSQL'],
    link: '/projects/ecommerce'
  },
  {
    title: '数据可视化平台',
    description: '强大的数据分析和可视化工具，支持多种图表类型和实时数据。',
    image: '/projects/project3.jpg',
    tags: ['Echarts', 'WebSocket', 'Canvas'],
    link: '/projects/data-vis'
  }
]
</script> 