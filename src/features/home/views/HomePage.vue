<script setup lang="ts">
import { defineOptions } from 'vue'

import HeroSection from '@/features/home/components/HeroSection.vue'
import ProjectPreview from '@/features/home/components/ProjectPreview.vue'
import TeamIntro from '@/features/home/components/TeamIntro.vue'
import TechStack from '@/features/home/components/TechStack.vue'
import BlogPreview from '@/features/home/components/BlogPreview.vue'
import PartnerLogos from '@/features/home/components/PartnerLogos.vue'
import Testimonials from '@/features/home/components/Testimonials.vue'
import FeatureGrid from '@/features/home/components/FeatureGrid.vue'
import Timeline from '@/features/home/components/Timeline.vue'
import JoinUs from '@/features/home/components/JoinUs.vue'
import CommunityLinks from '@/features/home/components/CommunityLinks.vue'

defineOptions({
  name: 'HomePage'
})
</script>

<template>
  <main class="min-h-screen overflow-x-hidden">
    <div class="flex flex-col">
      <hero-section />
      <project-preview />
      <team-intro />
      <tech-stack />
      <blog-preview />
      <partner-logos />
      <testimonials />
      <feature-grid />
      <timeline />
      <join-us />
      <community-links />
    </div>
  </main>
</template>
