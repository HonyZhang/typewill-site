<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMockData } from '../composables/useMockData'

defineOptions({
  name: 'Timeline'
})

const { t } = useI18n()
const { timelineEvents } = useMockData()
</script>

<template>
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">{{ t('home.timeline.title') }}</h2>
      <p class="text-xl text-center text-base-content/80 max-w-2xl mx-auto mb-16">
        {{ t('home.timeline.description') }}
      </p>

      <div class="max-w-4xl mx-auto">
        <ul class="timeline timeline-vertical">
          <li
            v-for="(event, index) in timelineEvents"
            :key="event.date"
            class="timeline-item"
          >
            <div class="timeline-middle">
              <div class="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            <div
              :class="[
                'timeline-box mb-8',
                index % 2 === 0 ? 'timeline-start' : 'timeline-end'
              ]"
            >
              <div class="card bg-base-200 shadow-xl">
                <div class="card-body">
                  <time class="text-sm text-primary font-semibold">{{ event.date }}</time>
                  <h3 class="card-title mt-2">{{ event.title }}</h3>
                  <p class="text-base-content/70">{{ event.description }}</p>
                </div>
              </div>
            </div>
            <hr v-if="index !== timelineEvents.length - 1" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template> 