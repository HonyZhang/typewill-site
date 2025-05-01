# TypeWill 官方网站

TypeWill 是一个现代化的开源项目官网，基于 Vue 3 + TypeScript + Vite 构建，具有优雅的设计和丰富的交互体验。

## ✨ 特色功能

- 🎨 **现代化设计**
  - 响应式布局，完美适配各种设备
  - 深色/浅色主题无缝切换
  - 优雅的页面过渡动画
  - 精心设计的水印和视觉元素

- 🌍 **国际化支持**
  - 内置中文和英文双语支持
  - 易扩展的多语言配置系统
  - 智能的语言切换机制

- 🚀 **交互体验**
  - 打字机效果展示
  - 平滑滚动
  - 组件懒加载
  - 优化的性能表现

## 📦 主要组件

- `HeroSection` - 引人注目的首页横幅
- `FeatureGrid` - 功能特性展示网格
- `ProjectPreview` - 项目案例展示
- `BlogPreview` - 博客文章预览
- `TechStack` - 技术栈展示
- `TeamIntro` - 团队介绍
- `Timeline` - 项目时间线
- `Testimonials` - 用户评价
- `CommunityLinks` - 社区链接
- `PartnerLogos` - 合作伙伴展示

## 🛠️ 技术栈

- **前端框架：** Vue 3
- **开发语言：** TypeScript
- **构建工具：** Vite
- **样式方案：** Tailwind CSS + DaisyUI
- **代码规范：** ESLint + Prettier
- **版本控制：** Git
- **包管理器：** pnpm

## 🔧 开发工具

- `.vscode/` - VS Code 配置
- `.husky/` - Git Hooks
- `.eslintrc` - ESLint 配置
- `.prettierrc` - Prettier 配置
- `.stylelintrc.json` - StyleLint 配置

## 📂 项目结构

```
src/
├── assets/        # 静态资源
├── features/      # 功能模块
│   ├── about/     # 关于页面
│   ├── blog/      # 博客功能
│   ├── home/      # 首页模块
│   └── projects/  # 项目展示
├── router/        # 路由配置
├── shared/        # 共享组件
│   ├── components/# 通用组件
│   ├── i18n/      # 国际化
│   └── layouts/   # 布局组件
└── stores/        # 状态管理
```

## 🚀 快速开始

1. 克隆项目
```bash
git clone https://github.com/your-username/typewill-site.git
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm dev
```

4. 构建生产版本
```bash
pnpm build
```

## 📝 开发规范

- 遵循 Vue 3 组合式 API 最佳实践
- 使用 TypeScript 进行类型检查
- 遵循 ESLint 和 Prettier 代码风格
- 组件样式采用 Tailwind CSS 工具类
- 提交信息遵循 Conventional Commits 规范

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。在贡献之前，请确保：

1. 遵循现有的代码风格
2. 添加必要的测试用例
3. 更新相关文档
4. 提交符合规范的 commit 信息

## 📄 许可证

[MIT License](LICENSE) 