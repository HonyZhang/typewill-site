# Vue 组件命名规范

本规则统一 Vue 3 项目中组件的命名约定，确保代码风格的一致性。

## 命名规则

1. **模板中的组件名称**
   - 必须使用 kebab-case（短横线）命名
   - 示例：`<app-header />`, `<user-profile />`, `<nav-menu />`

2. **组件文件名**
   - 使用 PascalCase（大驼峰）命名
   - 示例：`AppHeader.vue`, `UserProfile.vue`, `NavMenu.vue`

3. **组件注册名称**
   - 在 `defineOptions` 中使用 PascalCase
   - 示例：`defineOptions({ name: 'AppHeader' })`

## ESLint 配置

```json
{
  "rules": {
    "vue/component-name-in-template-casing": ["error", "kebab-case"]
  }
}
```

## 示例代码

```vue
<!-- 正确示例 -->
<template>
  <div>
    <app-header />
    <nav-menu />
    <user-profile />
  </div>
</template>

<!-- 错误示例 -->
<template>
  <div>
    <AppHeader />
    <NavMenu />
    <UserProfile />
  </div>
</template>
```

## 说明

1. 这个规范遵循 Vue.js 官方文档的建议
2. HTML 标签都是小写的，使用 kebab-case 更符合 HTML 的书写习惯
3. 文件系统中仍然使用 PascalCase 以保持与其他 Vue 最佳实践的一致性

## 注意事项

1. 内置组件（如 `<component>`, `<slot>`, `<transition>`）保持小写
2. 第三方组件库可能使用不同的命名方式，应遵循其文档说明
3. 自定义组件必须使用多单词命名，避免与 HTML 标签冲突 