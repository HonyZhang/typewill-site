<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'TechStack'
})

const { t } = useI18n()

const techStacks = [
  {
    category: 'Frontend',
    items: [
      { name: 'Vue.js', icon: '/icons/vue.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
      { name: 'Vite', icon: '/icons/vite.svg' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Go', icon: '/icons/go.svg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: 'Redis', icon: '/icons/redis.svg' }
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
      { name: 'GitHub Actions', icon: '/icons/github-actions.svg' },
      { name: 'AWS', icon: '/icons/aws.svg' }
    ]
  }
]
</script>

<template>
  <section class="py-20 bg-base-200">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">{{ t('home.techStack.title') }}</h2>
      <p class="text-xl text-center text-base-content/80 max-w-2xl mx-auto mb-16">
        {{ t('home.techStack.description') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          v-for="stack in techStacks"
          :key="stack.category"
          class="card bg-base-100 shadow-xl"
        >
          <div class="card-body">
            <h3 class="card-title justify-center mb-6">{{ stack.category }}</h3>
            <div class="grid grid-cols-2 gap-6">
              <div
                v-for="tech in stack.items"
                :key="tech.name"
                class="flex flex-col items-center gap-2"
              >
                <div class="w-12 h-12 flex items-center justify-center">
                  <img
                    :src="tech.icon"
                    :alt="tech.name"
                    class="w-8 h-8 object-contain"
                  />
                </div>
                <span class="text-sm">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div
          v-for="(stat) in ['projects', 'commits', 'contributors', 'stars']"
          :key="stat"
          class="stat bg-base-100 shadow-xl rounded-box"
        >
          <div class="stat-title">{{ t(`home.techStack.stats.${stat}.label`) }}</div>
          <div class="stat-value">{{ t(`home.techStack.stats.${stat}.value`) }}</div>
          <div class="stat-desc">{{ t(`home.techStack.stats.${stat}.description`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
