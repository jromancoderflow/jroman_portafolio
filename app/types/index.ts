export type Locale = 'en' | 'es'

export interface Profile {
  name: string
  title: string
  subtitle: string
  tagline: string
  summary: string
  location: string
  availability: string
  education: {
    degree: string
    institution: string
  }
  yearsExperience: number
  pythonYears: number
  valueProposition: Record<Locale, string>
}

export type SkillLevel = 'production' | 'practical' | 'developing'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  title: Record<Locale, string>
  description: Record<Locale, string>
  skills: Skill[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: Record<Locale, string>
  period?: string
  summary: Record<Locale, string>
  responsibilities: Record<Locale, string[]>
  technologies?: string[]
}

export type ProjectStatus = 'production' | 'commercial' | 'confidential' | 'experimental'

export type ProjectIcon = 'health' | 'identity' | 'ai' | 'commerce' | 'enterprise'

export interface Project {
  slug: string
  name: string
  icon: ProjectIcon
  category: Record<Locale, string>
  description: Record<Locale, string>
  role: Record<Locale, string>
  tags: string[]
  technologies: string[]
  url?: string
  caseStudy: boolean
  status: ProjectStatus
  highlights: Record<Locale, string[]>
  problem?: Record<Locale, string>
  challenges?: Record<Locale, string[]>
  architectureMermaid?: string
  decisions?: Record<Locale, string[]>
  security?: Record<Locale, string[]>
  infra?: Record<Locale, string[]>
  results?: Record<Locale, string[]>
  tradeoffs?: Record<Locale, string[]>
  lessons?: Record<Locale, string[]>
  future?: Record<Locale, string[]>
}

export interface EngineeringPrinciple {
  id: string
  title: Record<Locale, string>
  description: Record<Locale, string>
}

export interface LabExperiment {
  slug: string
  name: string
  description: Record<Locale, string>
  problem: Record<Locale, string>
  status: 'research' | 'in-development' | 'experimental' | 'published' | 'archived'
  technologies: string[]
  competencies: Record<Locale, string[]>
  repo?: string
  demo?: string
}

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  draft?: boolean
  readingTime?: number
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}
