<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMockData } from '../composables/useMockData'

defineOptions({
  name: 'Testimonials'
})

const { t } = useI18n()
const { testimonials } = useMockData()
</script>

<template>
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">{{ t('home.testimonials.title') }}</h2>
      <p class="text-xl text-center text-base-content/80 max-w-2xl mx-auto mb-16">
        {{ t('home.testimonials.description') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="card bg-base-200 shadow-xl"
        >
          <div class="card-body">
            <div class="flex items-center gap-4 mb-4">
              <div class="avatar">
                <div class="w-16 rounded-full">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                  />
                </div>
              </div>
              <div>
                <h3 class="font-bold">{{ testimonial.name }}</h3>
                <p class="text-sm text-base-content/70">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-base-content/80 italic">{{ testimonial.content }}</p>
            <div class="card-actions justify-end mt-4">
              <a
                :href="testimonial.sourceUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="link link-primary text-sm"
              >
                {{ t('home.testimonials.viewOn', { source: testimonial.source }) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 