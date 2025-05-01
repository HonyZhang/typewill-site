<script setup lang="ts">
import { defineOptions, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useTheme } from '@/shared/composables/useTheme'
import GithubIcon from '@/shared/components/icons/GithubIcon.vue'
import { useTypewriter } from '../composables/useTypewriter'
import { useSmoothScroll } from '@/shared/composables/useSmoothScroll'
import { useWatermark } from '@/shared/composables/useWatermark'

defineOptions({
  name: 'HeroSection'
})

const { t, locale } = useI18n()
const router = useRouter()
const { isDark } = useTheme()

// 初始化水印
const { fontSize: watermarkFontSize, getWatermarkClass } = useWatermark({
  widthRatio: 0.15,
  heightRatio: 0.3,
  scale: 0.8
})

const watermarkClass = getWatermarkClass(isDark)

// 初始化打字机效果
const {
  text: typewriterText,
  cursorVisible,
  typeText,
  stopTyping,
  startCursorBlink
} = useTypewriter({
  speed: 100,
  cursorBlinkSpeed: 500
})

// 监听语言变化
watch(locale, () => {
  stopTyping() // 停止当前的打字动画
  setTimeout(() => {
    typeText(t('home.hero.title')) // 开始新的打字动画
  }, 100)
})

onMounted(() => {
  typeText(t('home.hero.title'))
  startCursorBlink()
})

// 初始化平滑滚动
const { isScrolling, scrollTo } = useSmoothScroll()

// 按钮点击处理函数
const handlePrimaryCTAClick = () => {
  if (!isScrolling.value) {
    scrollTo({
      selector: '#projects',
      offset: 80,
      duration: 750
    })
  }
}

const handleSecondaryCTAClick = () => {
  router.push('/contact')
}
</script>

<template>
  <section
    class="hero min-h-[80vh] relative overflow-hidden"
    role="banner"
    aria-labelledby="hero-title"
  >
    <!-- 渐变背景 -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-base-100 via-primary/5 to-transparent dark:from-base-100 dark:via-primary/10 dark:to-transparent transition-all duration-500 ease-in-out"
      aria-hidden="true"
    ></div>

    <!-- 品牌水印 -->
    <div
      :class="watermarkClass"
      aria-hidden="true"
    >
      <span
        class="block whitespace-nowrap text-center"
        :style="{ fontSize: watermarkFontSize }"
      >
        {{ t('common.logo') }}
      </span>
    </div>

    <!-- 主要内容 -->
    <div class="hero-content text-center relative z-10 w-full">
      <div class="max-w-5xl mx-auto px-4">
        <h1
          id="hero-title"
          class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight whitespace-pre-line min-h-[3em]"
        >
          {{ typewriterText
          }}<span
            class="inline-block w-0.5 h-12 bg-primary ml-1 transition-all duration-300"
            :class="{ 'opacity-0': !cursorVisible }"
            aria-hidden="true"
          ></span>
        </h1>
        <p
          class="text-lg sm:text-xl lg:text-2xl mb-12 text-base-content/80 max-w-3xl mx-auto transition-all duration-300 ease-in-out"
        >
          {{ t('home.hero.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="btn btn-primary btn-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95 disabled:scale-100 disabled:brightness-90 disabled:hover:shadow-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-base-100 [transform-style:preserve-3d] [backface-visibility:hidden] [will-change:transform]"
            :disabled="isScrolling"
            :aria-busy="isScrolling"
            @click="handlePrimaryCTAClick"
          >
            <span class="relative z-10">{{ t('home.hero.primaryCTA') }}</span>
          </button>
          <button
            class="btn btn-ghost btn-lg group transition-all duration-300 ease-out hover:scale-105 hover:bg-base-content/5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-base-content/30 focus:ring-offset-2 dark:focus:ring-offset-base-100 [transform-style:preserve-3d] [backface-visibility:hidden] [will-change:transform]"
            @click="handleSecondaryCTAClick"
          >
            <github-icon
              class-list="h-6 w-6 mr-2 transition-transform duration-300 ease-out group-hover:rotate-12"
            />
            <span class="relative z-10">{{ t('home.hero.secondaryCTA') }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
