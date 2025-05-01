# Vue 3 最佳实践

本规则统一 Vue 3 项目的目录结构、脚本风格、样式系统、性能优化、安全策略等最佳实践，提升团队协作与代码质量。

## 📁 项目结构规范

```bash
src/
├── features/                # 功能模块（按业务划分）
│   └── user/
│       ├── components/      # 模块级组件
│       ├── views/          # 页面组件
│       ├── composables/    # 组合式函数
│       ├── types/         # 类型定义
│       └── services/      # API 服务
├── shared/                 # 跨模块共享资源
│   ├── components/         # 通用组件
│   ├── composables/        # 通用组合式函数
│   ├── utils/             # 工具函数
│   └── layouts/           # 布局模板
├── assets/                 # 静态资源
├── router/                 # 路由配置
├── stores/                 # 状态管理
└── plugins/               # 插件配置
```

## 🧩 组件开发规范

1. **组件定义**
```vue
<script setup lang="ts">
import { defineOptions } from 'vue'

// 显式定义组件名称
defineOptions({
  name: 'UserProfile'
})

// 类型化的 Props
interface Props {
  userId: string
  role?: 'admin' | 'user'
}

// 默认值处理
const props = withDefaults(defineProps<Props>(), {
  role: 'user'
})

// 类型化的 Emits
const emit = defineEmits<{
  'update': [id: string]
  'delete': [id: string, force: boolean]
}>()
</script>
```

2. **组件模板**
```vue
<template>
  <!-- 使用 kebab-case 组件名 -->
  <div class="user-profile">
    <user-avatar :src="avatarUrl" />
    
    <!-- v-for 必须使用 key -->
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
    
    <!-- 事件处理使用 kebab-case -->
    <button @click="handleClick">
      <slot name="action">
        默认内容
      </slot>
    </button>
  </div>
</template>
```

3. **组合式函数**
```ts
// composables/useUser.ts
export function useUser(id: string) {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchUser() {
    loading.value = true
    try {
      user.value = await userService.getUser(id)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchUser)

  return {
    user,
    loading,
    error,
    fetchUser
  }
}
```

## 🔄 状态管理

1. **Store 定义**
```ts
// stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)

  function setUser(newUser: User) {
    user.value = newUser
  }

  function logout() {
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    setUser,
    logout
  }
})
```

2. **Store 使用**
```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
// 解构保持响应性
const { user, token } = storeToRefs(userStore)
</script>
```

## 🚦 路由配置

```ts
// router/index.ts
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/shared/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/features/home/views/HomeView.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('@/shared/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/features/auth/views/LoginView.vue')
      }
    ]
  }
]
```

## 🔒 安全最佳实践

1. **XSS 防护**
```vue
<!-- 禁止使用 v-html -->
<template>
  <div>{{ safeContent }}</div>
</template>

<script setup lang="ts">
import { escapeHtml } from '@/shared/utils/security'

const safeContent = computed(() => escapeHtml(props.content))
</script>
```

2. **敏感信息处理**
```ts
// 使用环境变量
const apiKey = import.meta.env.VITE_API_KEY

// 密码等敏感信息加密
const encryptedPassword = await encrypt(password)
```

## 📦 性能优化

1. **组件懒加载**
```ts
// 路由懒加载
const UserProfile = () => import('./UserProfile.vue')

// 组件懒加载
const heavyComponent = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
)
```

2. **虚拟列表**
```vue
<template>
  <virtual-list
    :items="items"
    :height="400"
    :item-height="50"
  >
    <template #item="{ item }">
      <list-item :data="item" />
    </template>
  </virtual-list>
</template>
```

3. **资源优化**
```vue
<script setup lang="ts">
// 使用 URL 构造函数处理资源路径
const imageUrl = new URL('../assets/logo.png', import.meta.url).href

// 图片懒加载
const imgRef = ref<HTMLImageElement>()
const { stop } = useIntersectionObserver(imgRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    imgRef.value!.src = imageUrl
    stop()
  }
})
</script>
```

## 🧪 测试规范

1. **单元测试**
```ts
// user.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UserProfile from './UserProfile.vue'

describe('UserProfile', () => {
  it('renders user name correctly', () => {
    const wrapper = mount(UserProfile, {
      props: {
        name: 'John Doe'
      }
    })
    expect(wrapper.text()).toContain('John Doe')
  })
})
```

2. **组件测试**
```ts
// 使用 Testing Library
import { render, fireEvent } from '@testing-library/vue'
import UserForm from './UserForm.vue'

test('submits form with user data', async () => {
  const { getByRole, emitted } = render(UserForm)
  
  await fireEvent.click(getByRole('button'))
  expect(emitted().submit).toBeTruthy()
})
```

## 🌐 国际化

```ts
// i18n/index.ts
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'zh-CN': {
      hello: '你好，{name}！'
    },
    'en-US': {
      hello: 'Hello, {name}!'
    }
  }
})

// 组件中使用
const { t } = useI18n()
const greeting = computed(() => t('hello', { name: props.userName }))
```

## ⚡ 性能检查清单

1. **编译优化**
   - 使用 `defineAsyncComponent` 拆分大组件
   - 路由懒加载
   - 合理使用 `keep-alive`

2. **运行时优化**
   - 使用 `shallowRef` 处理大数据
   - `v-once` 处理静态内容
   - `v-memo` 缓存列表项

3. **渲染优化**
   - 避免不必要的组件嵌套
   - 合理使用计算属性
   - 使用虚拟列表处理大量数据

## 📝 代码风格

1. **命名规范**
   - 组件文件名：PascalCase
   - 组件名：PascalCase
   - 组件标签：kebab-case
   - Props：camelCase
   - 事件：kebab-case

2. **代码组织**
   - 逻辑提取到 composables
   - 类型定义放在 types 目录
   - API 调用封装在 services

3. **注释规范**
   - 组件用途
   - Props 说明
   - 复杂逻辑说明
   - TODO 标记 