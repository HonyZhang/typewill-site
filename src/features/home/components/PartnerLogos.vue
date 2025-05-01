<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMockData } from '../composables/useMockData'

defineOptions({
  name: 'PartnerLogos'
})

const { t } = useI18n()
const { partners } = useMockData()
</script>

<template>
  <section class="py-20 bg-base-200">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">{{ t('home.partners.title') }}</h2>
      <p class="text-xl text-center text-base-content/80 max-w-2xl mx-auto mb-16">
        {{ t('home.partners.description') }}
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="flex items-center justify-center p-4 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="h-12 w-auto grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </div>

      <div class="text-center mt-12">
        <a
          href="#contact"
          class="btn btn-primary"
        >
          {{ t('home.partners.becomePartner') }}
        </a>
      </div>
    </div>
  </section>
</template> 