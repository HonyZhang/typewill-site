# ESLint 样式建议

本规则提供配合 Tailwind CSS 与 DaisyUI 的组件样式最佳实践，包含 ESLint 风格校验与行为限制建议。

## 🎨 样式规范

1. **类名顺序**
   ```vue
   <!-- ✅ 推荐顺序 -->
   <div class="
     /* 布局类名 */
     flex flex-col items-center justify-between
     /* 尺寸类名 */
     w-full h-screen
     /* 间距类名 */
     p-4 gap-2
     /* 背景/边框 */
     bg-white border rounded-lg
     /* 文字样式 */
     text-gray-800 font-medium
     /* 交互状态 */
     hover:bg-gray-50
     /* DaisyUI 组件类 */
     btn btn-primary
   ">
   ```

2. **响应式设计**
   ```vue
   <!-- ✅ 推荐写法 -->
   <div class="
     w-full md:w-2/3 lg:w-1/2
     p-4 md:p-6 lg:p-8
   ">
   
   <!-- ❌ 避免写法 -->
   <div class="w-1/2 sm:w-full">  <!-- 移动优先原则 -->
   ```

3. **状态类名**
   ```vue
   <!-- ✅ 推荐写法 -->
   <button class="
     btn btn-primary
     hover:bg-blue-600
     focus:ring-2
     disabled:opacity-50
   ">
   ```

## 🔧 ESLint 配置

```json
{
  "rules": {
    // 强制类名顺序
    "tailwindcss/classnames-order": "error",
    
    // 禁止内联样式
    "vue/no-inline-styles": "error",
    
    // 禁止非 Tailwind/DaisyUI 类名
    "tailwindcss/no-custom-classname": "warn",
    
    // 禁止样式标签
    "vue/no-static-inline-styles": "error"
  }
}
```

## 📝 最佳实践

1. **组件样式封装**
   ```vue
   <!-- ✅ 推荐写法 -->
   <script setup lang="ts">
   interface Props {
     variant?: 'primary' | 'secondary'
     size?: 'sm' | 'md' | 'lg'
   }
   
   const props = withDefaults(defineProps<Props>(), {
     variant: 'primary',
     size: 'md'
   })
   
   const classes = computed(() => ({
     'btn-primary': props.variant === 'primary',
     'btn-secondary': props.variant === 'secondary',
     'btn-sm': props.size === 'sm',
     'btn-lg': props.size === 'lg'
   }))
   </script>
   
   <template>
     <button :class="['btn', classes]">
       <slot />
     </button>
   </template>
   ```

2. **主题变量使用**
   ```vue
   <!-- ✅ 推荐写法 -->
   <div class="bg-base-100 text-base-content">
   <div class="bg-primary text-primary-content">
   
   <!-- ❌ 避免写法 -->
   <div class="bg-white dark:bg-gray-800">  <!-- 避免硬编码颜色 -->
   ```

3. **布局组件**
   ```vue
   <!-- ✅ 推荐写法 -->
   <template>
     <div class="flex flex-col gap-4">
       <header class="sticky top-0 z-10">
         <nav class="container mx-auto px-4">
           <!-- 导航内容 -->
         </nav>
       </header>
       
       <main class="container mx-auto px-4 flex-grow">
         <slot />
       </main>
       
       <footer class="mt-auto">
         <!-- 页脚内容 -->
       </footer>
     </div>
   </template>
   ```

## ⚠️ 常见问题

1. **避免样式冲突**
   - 使用 `@apply` 时注意优先级
   - 避免使用 `!important`
   - 合理使用 `space-y-*` 和 `divide-*` 工具类

2. **性能考虑**
   - 避免过度使用响应式类名
   - 使用 `@screen` 指令组织媒体查询
   - 合理使用 `@layer` 控制样式优先级

3. **可维护性**
   - 使用语义化的组件名称
   - 保持类名的一致性
   - 适当添加注释说明复杂的样式组合 