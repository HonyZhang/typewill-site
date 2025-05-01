<!-- ContactPage.vue -->
<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-12">
      联系我们
    </h1>
    <div class="max-w-2xl mx-auto">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <form
            class="space-y-6"
            @submit.prevent="handleSubmit"
          >
            <div class="form-control">
              <label class="label">
                <span class="label-text">姓名</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                class="input input-bordered"
                required
              >
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">邮箱</span>
              </label>
              <input
                v-model="form.email"
                type="email"
                class="input input-bordered"
                required
              >
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">主题</span>
              </label>
              <input
                v-model="form.subject"
                type="text"
                class="input input-bordered"
                required
              >
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">消息</span>
              </label>
              <textarea
                v-model="form.message"
                class="textarea textarea-bordered h-32"
                required
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn btn-primary"
              >
                发送消息
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              公司地址
            </h2>
            <p>北京市朝阳区科技园区888号</p>
            <p>创新大厦 A 座 15 层</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              联系方式
            </h2>
            <p>电话：+86 10 8888 8888</p>
            <p>邮箱：contact@typewill.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'ContactPage'
})

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // 这里添加表单提交逻辑
  console.log('Form submitted:', form)
  // 重置表单
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script> 