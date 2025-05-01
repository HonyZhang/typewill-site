<!-- BlogPage.vue -->
<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-12">
      博客文章
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="post in blogPosts"
        :key="post.path"
        class="card bg-base-100 shadow-xl"
      >
        <div class="card-body">
          <h2 class="card-title">
            {{ post.title }}
          </h2>
          <p class="text-base-content/70">
            {{ post.description }}
          </p>
          <div class="flex items-center gap-4 mt-4 text-sm text-base-content/60">
            <div class="flex items-center gap-2">
              <i class="i-carbon-user" />
              <span>{{ post.author }}</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="i-carbon-calendar" />
              <span>{{ formatDate(post.date) }}</span>
            </div>
          </div>
          <div class="card-actions justify-end mt-4">
            <router-link
              :to="'/blog/' + post.path"
              class="btn btn-primary"
            >
              阅读全文
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'BlogPage'
})

interface BlogPost {
  path: string
  title: string
  date: string
  author: string
  description: string
}

const blogPosts = ref<BlogPost[]>([
  {
    path: 'first-post',
    title: '拥抱 Vue 3 生态：从 Options API 到 Composition API',
    date: '2024-05-01',
    author: 'TypeWill 团队',
    description: '探讨 Vue 3 Composition API 带来的开发体验提升，以及如何更好地组织代码逻辑'
  }
])

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 