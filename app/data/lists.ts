import type { Locale } from '~/types'

export interface LocalizedList {
  en: string[]
  es: string[]
}

/**
 * Bullets shown in the "About me" section of the homepage.
 * Kept outside the i18n message files so both SSR and client render the exact
 * same plain strings ($tm() returns a compiled AST on the client during dev).
 */
export const aboutHighlights: LocalizedList = {
  en: [
    'Architecture and system design before implementation',
    'Backend, infrastructure and CI/CD as one discipline',
    'Security by design for sensitive data',
    'AI integrated only where it adds measurable value',
  ],
  es: [
    'Arquitectura y diseño de sistemas antes de implementar',
    'Backend, infraestructura y CI/CD como una sola disciplina',
    'Seguridad por diseño para datos sensibles',
    'IA integrada solo donde aporta valor medible',
  ],
}

/**
 * Step-by-step AI-augmented software engineering workflow.
 */
export const aiWorkflow: LocalizedList = {
  en: [
    'Requirements Analysis',
    'Context Engineering',
    'Specification',
    'System Design',
    'AI-Assisted Implementation',
    'Human Code Review',
    'Automated Testing',
    'Security Validation',
    'Deployment',
    'Monitoring',
  ],
  es: [
    'Análisis de Requerimientos',
    'Ingeniería de Contexto',
    'Especificación',
    'Diseño de Sistema',
    'Implementación Asistida por IA',
    'Revisión Humana de Código',
    'Pruebas Automatizadas',
    'Validación de Seguridad',
    'Despliegue',
    'Monitoreo',
  ],
}
