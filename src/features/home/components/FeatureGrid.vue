<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'FeatureGrid'
})

const { t } = useI18n()

const features = [
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: '高性能',
    description: '基于 Vue 3 + Vite，享受极致的开发体验与运行性能。'
  },
  {
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: '安全可靠',
    description: '内置安全最佳实践，保护您的应用免受常见威胁。'
  },
  {
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: '高度可定制',
    description: '提供丰富的配置选项，满足各类个性化需求。'
  },
  {
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: '质量保证',
    description: '完整的测试覆盖，确保每个功能的稳定性。'
  },
  {
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    title: '社区支持',
    description: '活跃的开发者社区，快速响应您的问题。'
  },
  {
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: '开发者友好',
    description: '详尽的文档和示例，助您快速上手。'
  }
]
</script>

<template>
  <section class="py-20 bg-base-200">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">{{ t('home.features.title') }}</h2>
      <p class="text-xl text-center text-base-content/80 max-w-2xl mx-auto mb-16">
        {{ t('home.features.description') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div class="card-body">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="feature.icon"
                  />
                </svg>
              </div>
              <h3 class="card-title">{{ feature.title }}</h3>
            </div>
            <p class="text-base-content/70">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 