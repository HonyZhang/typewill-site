<!-- AboutPage.vue -->
<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-12">
      关于我们
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="member in teamMembers"
        :key="member.id"
        class="card bg-base-100 shadow-xl"
      >
        <figure class="px-6 pt-6">
          <img
            :src="member.avatar"
            :alt="member.name"
            class="rounded-full w-32 h-32 object-cover"
          >
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">
            {{ member.name }}
          </h2>
          <p class="text-base-content/70">
            {{ member.title }}
          </p>
          <p class="mt-2">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutPage'
})

interface TeamMember {
  id: number
  name: string
  title: string
  description: string
  avatar: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '张三',
    title: '技术负责人',
    description: '全栈开发专家，热衷于探索新技术',
    avatar: '/images/avatar1.jpg'
  },
  {
    id: 2,
    name: '李四',
    title: 'UI/UX 设计师',
    description: '注重用户体验，追求极致设计',
    avatar: '/images/avatar2.jpg'
  },
  {
    id: 3,
    name: '王五',
    title: '前端工程师',
    description: '专注于构建高性能的 Web 应用',
    avatar: '/images/avatar3.jpg'
  }
]
</script> 