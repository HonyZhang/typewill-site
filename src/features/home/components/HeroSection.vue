<script setup lang="ts">
import { defineOptions, ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'HeroSection'
})

const router = useRouter()
const { t } = useI18n()
const displayText = ref('')
const typingSpeed = 150

const typeText = (text: string) => {
  let currentIndex = 0
  displayText.value = ''
  
  const typingInterval = setInterval(() => {
    if (currentIndex < text.length) {
      displayText.value = text.slice(0, currentIndex + 1)
      currentIndex++
    } else {
      clearInterval(typingInterval)
    }
  }, typingSpeed)
}

// 监听语言变化，重新触发打字效果
watch(() => t('home.hero.title'), (newTitle) => {
  typeText(newTitle)
})

onMounted(() => {
  typeText(t('home.hero.title'))
})

const goToProjects = () => router.push('/projects')

const scrollToProjects = () => {
  const projectsSection = document.querySelector('#projects')
  projectsSection?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative">
    <div class="max-w-4xl -mt-16">
      <h1 
        id="hero-heading"
        class="text-4xl md:text-6xl font-bold leading-tight text-base-content"
      >
        {{ displayText }}<span class="animate-pulse">|</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-500 mt-4 mb-8">
        {{ t('home.hero.subtitle') }}
      </p>
      <button 
        class="btn btn-primary transition-all duration-300 hover:scale-105 hover:brightness-110"
        @click="scrollToProjects"
      >
        {{ t('home.hero.cta') }}
      </button>
    </div>
    
    <!-- 装饰性背景元素 -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
      <div class="w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
    </div>
  </section>
</template>
