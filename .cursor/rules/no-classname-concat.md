# Tailwind 与 DaisyUI 类名拼接规范

本规则规范 Tailwind CSS 和 DaisyUI 类名的使用方式，避免使用字符串拼接导致的样式丢失问题。

## ❌ 错误示例

```vue
<template>
  <!-- 不要使用字符串拼接 -->
  <div :class="'btn-' + size">
  <div :class="`card-${type}`">
  <div :class="['badge-' + status]">
</template>

<script>
// 不要在计算属性中拼接
const buttonClass = computed(() => 'btn-' + props.variant)
</script>
```

## ✅ 正确示例

```vue
<template>
  <!-- 使用完整的类名 -->
  <div :class="{ 'btn-lg': size === 'large', 'btn-sm': size === 'small' }">
  <div :class="{ 'card-normal': type === 'normal', 'card-compact': type === 'compact' }">
  <div :class="{ 'badge-success': status === 'success', 'badge-error': status === 'error' }">
</template>

<script>
// 使用对象语法或预定义的类名
const buttonClass = computed(() => ({
  'btn-primary': props.variant === 'primary',
  'btn-secondary': props.variant === 'secondary'
}))
</script>
```

## 📝 规则说明

1. 为什么要避免拼接？
   - Tailwind 在构建时会扫描文件中的完整类名
   - 动态拼接的类名可能无法被正确识别
   - 导致产物中缺少所需样式

2. 推荐做法：
   - 使用对象语法（`:class="{ 'class-name': condition }"）
   - 使用数组语法（`:class="['class-name-1', 'class-name-2']"）
   - 预定义所有可能的类名组合

3. 特殊情况处理：
   - 如果确实需要动态类名，请在 `tailwind.config.js` 中使用 `safelist` 选项
   - 使用 `@apply` 指令在 CSS 中定义可复用的样式组合

## 🔧 配置示例

```js
// tailwind.config.js
module.exports = {
  // 安全列表：确保动态类名被包含在构建产物中
  safelist: [
    {
      pattern: /btn-(primary|secondary|success|error)/,
      variants: ['hover', 'focus']
    },
    {
      pattern: /badge-(info|warning|error)/
    }
  ]
}
```

## 🎯 最佳实践

1. 组件属性设计：
   ```vue
   <script setup lang="ts">
   // 使用有限的枚举值
   interface Props {
     variant: 'primary' | 'secondary' | 'success' | 'error'
   }
   </script>
   ```

2. 类名管理：
   ```vue
   <script setup lang="ts">
   // 预定义类名映射
   const variantClasses = {
     primary: 'btn-primary',
     secondary: 'btn-secondary',
     success: 'btn-success',
     error: 'btn-error'
   }
   </script>
   ```

3. 条件渲染：
   ```vue
   <template>
   <!-- 使用映射对象 -->
   <button :class="variantClasses[props.variant]">
   
   <!-- 或使用条件对象 -->
   <button :class="{
     'btn-primary': variant === 'primary',
     'btn-secondary': variant === 'secondary'
   }">
   </template>
   