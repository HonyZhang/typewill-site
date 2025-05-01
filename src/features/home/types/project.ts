// 项目相关类型定义
export interface Project {
  id: string
  name: string
  description: string
  logo: string
  tags: string[]
  link?: string
}

// 默认项目数据
export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'typekit',
    name: '组件库 TypeKit',
    description: '为 Vue 3 打造的高性能 UI 组件库，支持 Tree Shaking 与主题切换。',
    logo: '/src/assets/icons/projects/typekit-logo.svg',
    tags: ['Vue 3', 'TypeScript', 'DaisyUI'],
    link: 'https://github.com/your-org/typekit'
  },
  {
    id: 'ai-agent',
    name: 'AI 代码助手',
    description: '基于 OpenAI 的代码生成与项目搭建智能化插件。',
    logo: '/src/assets/icons/projects/ai-assistant-logo.svg',
    tags: ['OpenAI', 'Node.js', 'LangChain'],
    link: 'https://typewill.ai/agent'
  },
  {
    id: 'test-platform',
    name: '自动化测试平台',
    description: '覆盖 UI、接口、任务调度的自动化测试一体化解决方案。',
    logo: '/src/assets/icons/projects/test-platform-logo.svg',
    tags: ['Playwright', 'Jest', 'Docker'],
    link: 'https://testforge.typewill.dev'
  }
] 