import { ref } from 'vue'

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export interface TeamMember {
  name: string
  role: string
  avatar: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
}

export interface JobPosition {
  title: string
  type: string
  location: string
  requirements: string[]
}

export interface Partner {
  name: string
  logo: string
}

export interface Testimonial {
  name: string
  role: string
  avatar: string
  content: string
  source: string
  sourceUrl: string
}

export function useMockData() {
  const projects = ref<Project[]>([
    {
      title: '企业管理系统',
      description: '基于 Vue 3 的现代化企业管理系统，支持多租户和权限管理。',
      image: '/projects/project1.jpg',
      tags: ['Vue 3', 'TypeScript', 'DaisyUI'],
      link: '/projects/enterprise-system'
    },
    {
      title: '电商平台',
      description: '高性能电商解决方案，支持千万级商品数据和实时库存管理。',
      image: '/projects/project2.jpg',
      tags: ['微服务', 'Redis', 'PostgreSQL'],
      link: '/projects/ecommerce'
    },
    {
      title: '数据可视化平台',
      description: '强大的数据分析和可视化工具，支持多种图表类型和实时数据。',
      image: '/projects/project3.jpg',
      tags: ['Echarts', 'WebSocket', 'Canvas'],
      link: '/projects/data-vis'
    }
  ])

  const teamMembers = ref<TeamMember[]>([
    {
      name: '张三',
      role: '创始人 & CEO',
      avatar: '/avatars/zhangsan.jpg'
    },
    {
      name: '李四',
      role: '技术总监',
      avatar: '/avatars/lisi.jpg'
    },
    {
      name: '王五',
      role: '产品经理',
      avatar: '/avatars/wangwu.jpg'
    }
  ])

  const features = ref<Feature[]>([
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: '高性能',
      description: '基于 Vue 3 + Vite，享受极致的开发体验与运行性能。'
    },
    {
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      title: '安全可靠',
      description: '内置安全最佳实践，保护您的应用免受常见威胁。'
    },
    {
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
      title: '高度可定制',
      description: '提供丰富的配置选项，满足各类个性化需求。'
    }
  ])

  const timelineEvents = ref<TimelineEvent[]>([
    {
      date: '2023 Q4',
      title: '项目启动',
      description: '完成核心架构设计与技术选型，建立基础开发规范。'
    },
    {
      date: '2024 Q1',
      title: '首个版本发布',
      description: '发布 v1.0.0 版本，获得社区积极反馈。'
    },
    {
      date: '2024 Q2',
      title: '社区建设',
      description: '建立开发者社区，举办首次线上技术分享会。'
    }
  ])

  const jobPositions = ref<JobPosition[]>([
    {
      title: '高级前端工程师',
      type: '全职',
      location: '远程',
      requirements: [
        '3年以上 Vue.js 开发经验',
        '熟悉 TypeScript 和现代前端工具链',
        '有大型应用开发经验',
        '良好的团队协作能力'
      ]
    },
    {
      title: '全栈开发工程师',
      type: '全职',
      location: '远程/北京',
      requirements: [
        '熟悉 Node.js 和主流数据库',
        '有微服务架构经验',
        '掌握 DevOps 相关技术',
        '优秀的问题解决能力'
      ]
    }
  ])

  const partners = ref<Partner[]>([
    { name: 'Partner 1', logo: '/logos/partner1.svg' },
    { name: 'Partner 2', logo: '/logos/partner2.svg' },
    { name: 'Partner 3', logo: '/logos/partner3.svg' },
    { name: 'Partner 4', logo: '/logos/partner4.svg' },
    { name: 'Partner 5', logo: '/logos/partner5.svg' },
    { name: 'Partner 6', logo: '/logos/partner6.svg' }
  ])

  const testimonials = ref<Testimonial[]>([
    {
      name: '张经理',
      role: '某科技公司 CTO',
      avatar: '/avatars/zhang.jpg',
      content: '使用这个框架让我们的开发效率提升了 50%，代码质量也有了显著提升。',
      source: 'GitHub',
      sourceUrl: 'https://github.com'
    },
    {
      name: '李总监',
      role: '某创业公司技术总监',
      avatar: '/avatars/li.jpg',
      content: '完善的文档和活跃的社区让我们能够快速解决开发中遇到的问题。',
      source: 'Twitter',
      sourceUrl: 'https://twitter.com'
    },
    {
      name: '王工程师',
      role: '某互联网公司高级工程师',
      avatar: '/avatars/wang.jpg',
      content: '这是我见过的最优雅的前端解决方案之一，强烈推荐给所有开发团队。',
      source: 'LinkedIn',
      sourceUrl: 'https://linkedin.com'
    }
  ])

  return {
    projects,
    teamMembers,
    features,
    timelineEvents,
    jobPositions,
    partners,
    testimonials
  }
} 