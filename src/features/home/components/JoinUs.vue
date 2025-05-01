<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMockData } from '../composables/useMockData'

defineOptions({
  name: 'JoinUs'
})

const { t } = useI18n()
const { jobPositions } = useMockData()
</script>

<template>
  <section class="py-20 bg-base-200">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">{{ t('home.joinUs.title') }}</h2>
      <p class="text-xl text-center text-base-content/80 max-w-2xl mx-auto mb-16">
        {{ t('home.joinUs.description') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div
          v-for="job in jobPositions"
          :key="job.title"
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div class="card-body">
            <div class="flex items-center justify-between mb-4">
              <h3 class="card-title">{{ job.title }}</h3>
              <div class="flex gap-2">
                <span class="badge badge-primary">{{ job.type }}</span>
                <span class="badge">{{ job.location }}</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6">
              <li
                v-for="(requirement, index) in job.requirements"
                :key="index"
                class="flex items-start gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="text-base-content/70">{{ requirement }}</span>
              </li>
            </ul>
            <div class="card-actions justify-end">
              <a
                :href="`mailto:${t('home.joinUs.email')}?subject=${encodeURIComponent(job.title)}`"
                class="btn btn-primary"
              >
                {{ t('home.joinUs.apply') }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-lg text-base-content/80 mb-4">{{ t('home.joinUs.otherPositions') }}</p>
        <a
          href="mailto:careers@example.com"
          class="btn btn-outline"
        >
          {{ t('home.joinUs.contact') }}
        </a>
      </div>
    </div>
  </section>
</template> 