# Tailwind CSS 与 DaisyUI 最佳实践

本规则统一 Tailwind CSS 4.1 和 DaisyUI 5.0 在 Vue 3 + Vite 项目中的配置方式、样式组织、插件使用等最佳实践。

## 📁 项目结构

```bash
src/
└── assets/
    └── styles/
        ├── main.css     # 样式入口文件
        ├── base.css     # 基础样式
        ├── components/  # 组件样式
        └── utilities/  # 工具类样式
```

## 🎨 样式入口配置

```css
/* main.css */
@import 'tailwindcss';
@plugin "daisyui" {
  themes:
    light --default,
    dark --prefersdark;
  
  include: btn, card, modal, form, input, dropdown;
  prefix: '';
  logs: false;
}

@import './base.css';
@import './components/**/*.css';
@import './utilities/**/*.css';
```

## ⚙️ Vite 配置

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss({
      // 配置选项
      prefix: '',
      darkMode: 'class',
      content: ['./src/**/*.{vue,ts}'],
    })
  ]
})
```

## 🎯 组件样式最佳实践

1. **布局组件**
```vue
<template>
  <!-- 使用 DaisyUI 提供的布局类 -->
  <div class="drawer lg:drawer-open">
    <input type="checkbox" class="drawer-toggle" />
    
    <div class="drawer-content">
      <!-- 页面主体内容 -->
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
    
    <div class="drawer-side">
      <!-- 侧边栏内容 -->
    </div>
  </div>
</template>
```

2. **表单组件**
```vue
<template>
  <div class="form-control w-full">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    
    <input 
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input input-bordered w-full"
      :class="{
        'input-error': !!error,
        'input-success': isValid
      }"
    />
    
    <label v-if="error" class="label">
      <span class="label-text-alt text-error">{{ error }}</span>
    </label>
  </div>
</template>
```

3. **卡片组件**
```vue
<template>
  <div class="card bg-base-100 shadow-xl">
    <figure v-if="$slots.image">
      <slot name="image" />
    </figure>
    
    <div class="card-body">
      <h2 v-if="title" class="card-title">{{ title }}</h2>
      <slot />
      
      <div v-if="$slots.actions" class="card-actions justify-end">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
```

## 🌈 主题配置

1. **主题变量**
```css
/* base.css */
:root {
  /* 自定义主题颜色 */
  --primary: #4f46e5;
  --primary-focus: #4338ca;
  --secondary: #0ea5e9;
  --accent: #f59e0b;
  
  /* 自定义字体 */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
}

[data-theme="dark"] {
  --primary: #818cf8;
  --primary-focus: #6366f1;
}
```

2. **主题切换**
```ts
// composables/useTheme.ts
export function useTheme() {
  const theme = ref<'light' | 'dark'>('light')
  
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme.value)
  }
  
  return {
    theme,
    toggleTheme
  }
}
```

## 🔧 工具类使用建议

1. **间距与布局**
```vue
<!-- ✅ 推荐 -->
<div class="space-y-4">  <!-- 子元素间距 -->
<div class="gap-4">      <!-- Flexbox/Grid 间距 -->
<div class="p-4 md:p-6"> <!-- 响应式内边距 -->

<!-- ❌ 避免 -->
<div class="mt-4 mb-4">  <!-- 使用 space-y 代替 -->
```

2. **响应式设计**
```vue
<!-- ✅ 推荐 -->
<div class="
  grid
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3
  gap-4
">

<!-- ❌ 避免 -->
<div class="flex flex-wrap">  <!-- 使用 grid 更灵活 -->
```

3. **状态样式**
```vue
<!-- ✅ 推荐 -->
<button class="
  btn btn-primary
  hover:brightness-110
  active:brightness-90
  disabled:opacity-50
">

<!-- ❌ 避免 -->
<button class="btn" :style="{ opacity: disabled ? 0.5 : 1 }">
```

## 📦 性能优化

1. **按需加载**
```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{vue,ts}'],
  
  // 仅包含使用的组件
  daisyui: {
    include: ['btn', 'card', 'modal'],
    logs: false,
  },
  
  // 仅包含使用的工具类
  safelist: [
    'btn-primary',
    'btn-secondary',
  ]
}
```

2. **CSS 分层**
```css
/* 使用 @layer 控制优先级 */
@layer base {
  /* 基础样式 */
}

@layer components {
  /* 组件样式 */
}

@layer utilities {
  /* 工具类 */
}
```

## ⚠️ 常见陷阱

1. **避免过度使用自定义样式**
   - 优先使用 Tailwind/DaisyUI 提供的类
   - 需要自定义时使用主题变量
   - 最后才考虑编写自定义 CSS

2. **合理使用响应式类名**
   - 遵循移动优先原则
   - 避免过多断点
   - 使用 container 类控制宽度

3. **注意性能影响**
   - 避免过度嵌套
   - 合理使用 JIT 模式
   - 及时清理未使用的样式 