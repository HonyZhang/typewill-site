<script setup lang="ts">
import { defineOptions , ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'


defineOptions({
  name: 'HeroSection'
})

const router = useRouter()
const goToProjects = () => router.push('/projects')

const slogan = ref('')
const fullSlogan = '每一行代码，铺展出智能秩序'
const typingSpeed = 150

onMounted(() => {
  let currentIndex = 0
  const typingInterval = setInterval(() => {
    if (currentIndex < fullSlogan.length) {
      slogan.value = fullSlogan.slice(0, currentIndex + 1)
      currentIndex++
    } else {
      clearInterval(typingInterval)
    }
  }, typingSpeed)
})
</script>

<template>
  <section 
    class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative"
    aria-labelledby="hero-heading"
  >
    <div class="max-w-4xl -mt-16">
      <h1 
        id="hero-heading"
        class="text-4xl md:text-6xl font-bold leading-tight text-base-content"
      >
        {{ slogan }}<span class="animate-pulse">|</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-500 mt-4 mb-8">
        Structure the world, one keystroke at a time.
      </p>
      <button 
        class="btn btn-primary transition-all duration-300 hover:scale-105 hover:brightness-110" 
        aria-label="查看所有项目"
        @click="goToProjects"
      >
        查看项目
      </button>
    </div>
    
    <!-- 装饰性背景元素 -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
      <div class="w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
    </div>
  </section>
</template>
