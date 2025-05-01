<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMockData } from '../composables/useMockData'

defineOptions({
  name: 'TeamIntro'
})

const { t } = useI18n()
const { teamMembers } = useMockData()
</script>

<template>
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">{{ t('home.team.title') }}</h2>
      <p class="text-xl text-center text-base-content/80 max-w-2xl mx-auto mb-12">
        {{ t('home.team.description') }}
      </p>
      
      <div class="flex flex-wrap justify-center gap-8 mb-12">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="card w-64 bg-base-200 shadow-xl"
        >
          <figure class="px-4 pt-4">
            <img
              :src="member.avatar"
              :alt="member.name"
              class="rounded-xl w-32 h-32 object-cover"
            />
          </figure>
          <div class="card-body items-center text-center pt-4">
            <h3 class="card-title">{{ member.name }}</h3>
            <p class="text-base-content/70">{{ member.role }}</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body items-center text-center">
            <h3 class="card-title">{{ t('home.team.vision.title') }}</h3>
            <p>{{ t('home.team.vision.description') }}</p>
          </div>
        </div>
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body items-center text-center">
            <h3 class="card-title">{{ t('home.team.mission.title') }}</h3>
            <p>{{ t('home.team.mission.description') }}</p>
          </div>
        </div>
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body items-center text-center">
            <h3 class="card-title">{{ t('home.team.values.title') }}</h3>
            <p>{{ t('home.team.values.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 