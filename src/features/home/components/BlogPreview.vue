<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

defineOptions({
  name: 'BlogPreview'
})

const { t } = useI18n()

// 这里可以通过 API 获取或者静态定义博客文章
const blogPosts = computed(() => [
  {
    id: 1,
    title: 'Vue 3 + TypeScript 最佳实践',
    summary: '探索 Vue 3 与 TypeScript 结合使用的各种技巧与模式，提升开发效率与代码质量...',
    date: '2024-03-15',
    author: '张三',
    image: '/blog/vue3-typescript.jpg',
    slug: 'vue3-typescript-best-practices'
  },
  {
    id: 2,
    title: 'Tailwind CSS 在大型项目中的应用',
    summary: '如何在企业级项目中高效地使用 Tailwind CSS，包括组件设计、主题定制与性能优化...',
    date: '2024-03-10',
    author: '李四',
    image: '/blog/tailwind-enterprise.jpg',
    slug: 'tailwind-in-enterprise'
  },
  {
    id: 3,
    title: '现代前端工程化实践',
    summary: '从项目搭建、开发规范到自动化部署，全方位了解现代前端工程化体系...',
    date: '2024-03-05',
    author: '王五',
    image: '/blog/modern-frontend.jpg',
    slug: 'modern-frontend-engineering'
  }
])
</script>

<template>
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl font-bold">{{ t('home.blog.title') }}</h2>
        <router-link
          to="/blog"
          class="btn btn-primary"
        >
          {{ t('home.blog.viewAll') }}
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="post in blogPosts"
          :key="post.id"
          class="card bg-base-200 shadow-xl"
        >
          <figure>
            <img
              :src="post.image"
              :alt="post.title"
              class="h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="text-base-content/70 line-clamp-2">{{ post.summary }}</p>
            <div class="flex justify-between items-center mt-4">
              <div class="flex items-center gap-2">
                <div class="avatar">
                  <div class="w-8 rounded-full">
                    <img
                      :src="`/avatars/${post.author.toLowerCase().replace(' ', '-')}.jpg`"
                      :alt="post.author"
                    />
                  </div>
                </div>
                <span class="text-sm">{{ post.author }}</span>
              </div>
              <span class="text-sm text-base-content/60">{{ post.date }}</span>
            </div>
            <div class="card-actions justify-end mt-4">
              <router-link
                :to="`/blog/${post.slug}`"
                class="btn btn-ghost btn-sm"
              >
                {{ t('common.readMore') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 