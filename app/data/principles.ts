import type { EngineeringPrinciple } from '~/types'

export const engineeringPrinciples: EngineeringPrinciple[] = [
  { id: 'architecture', title: { en: 'Architecture & System Design', es: 'Arquitectura y Diseño de Sistemas' }, description: { en: 'Design systems before writing code. Make decisions explicit and reversible.', es: 'Diseña sistemas antes de escribir código. Haz las decisiones explícitas y reversibles.' } },
  { id: 'reliability', title: { en: 'Reliability', es: 'Confiabilidad' }, description: { en: 'Build for failure. Test, monitor and recover.', es: 'Construye para el fallo. Prueba, monitorea y recupera.' } },
  { id: 'security', title: { en: 'Security', es: 'Seguridad' }, description: { en: 'Security by design, not as an afterthought.', es: 'Seguridad por diseño, no como añadido tardío.' } },
  { id: 'automation', title: { en: 'Automation', es: 'Automatización' }, description: { en: 'Automate repetitive work. Keep humans for judgment.', es: 'Automatiza el trabajo repetitivo. Reserva el juicio para humanos.' } },
  { id: 'dx', title: { en: 'Developer Experience', es: 'Experiencia de Desarrollo' }, description: { en: 'Readable code, clear boundaries, fast feedback loops.', es: 'Código legible, límites claros, ciclos de retroalimentación rápidos.' } },
  { id: 'ai', title: { en: 'AI-Augmented Engineering', es: 'Ingeniería Aumentada por IA' }, description: { en: 'AI accelerates implementation. Engineering judgment ensures quality.', es: 'La IA acelera la implementación. El juicio de ingeniería asegura la calidad.' } },
]
