import { ref } from 'vue'

import { type Project, DEFAULT_PROJECTS } from '../types/project'

export function useProjects() {
  const projects = ref<Project[]>(DEFAULT_PROJECTS)

  return {
    projects
  }
} 