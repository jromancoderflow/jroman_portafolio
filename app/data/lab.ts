import type { LabExperiment } from '~/types'

export const labExperiments: LabExperiment[] = [
  {
    slug: 'commercecheck',
    name: 'CommerceCheck',
    description: {
      en: 'Automated auditor for Chilean online stores, combining deterministic analysis and AI to identify technical, commercial and regulatory issues.',
      es: 'Auditor automatizado de tiendas online chilenas, combinando análisis determinista e IA para identificar problemas técnicos, comerciales y normativos.',
    },
    problem: {
      en: 'Detect potential issues in e-commerce stores at scale.',
      es: 'Detectar problemas potenciales en tiendas de e-commerce a escala.',
    },
    status: 'research',
    technologies: ['Python', 'Web Crawling', 'AI', 'Structured Outputs', 'Reporting'],
    competencies: {
      en: ['Web crawling', 'Python', 'AI', 'Structured Outputs', 'Report generation', 'RegTech', 'Automation', 'Evaluations'],
      es: ['Web crawling', 'Python', 'IA', 'Structured Outputs', 'Generación de reportes', 'RegTech', 'Automatización', 'Evaluaciones'],
    },
  },
  {
    slug: 'document-intelligence-engine',
    name: 'Document Intelligence Engine',
    description: {
      en: 'Engine for querying and processing enterprise documents.',
      es: 'Motor de consulta y procesamiento de documentos empresariales.',
    },
    problem: {
      en: 'Answer questions over enterprise documents with citations.',
      es: 'Responder preguntas sobre documentos empresariales con citas.',
    },
    status: 'research',
    technologies: ['RAG', 'Embeddings', 'pgvector', 'PostgreSQL'],
    competencies: {
      en: ['RAG', 'Embeddings', 'pgvector', 'PostgreSQL', 'Document processing', 'Evaluations', 'Cited answers'],
      es: ['RAG', 'Embeddings', 'pgvector', 'PostgreSQL', 'Procesamiento documental', 'Evaluaciones', 'Respuestas con citas'],
    },
  },
  {
    slug: 'ai-incident-analyzer',
    name: 'AI Incident Analyzer',
    description: {
      en: 'Tool to analyze application and infrastructure logs using AI.',
      es: 'Herramienta para analizar registros de aplicaciones e infraestructura mediante IA.',
    },
    problem: {
      en: 'Diagnose incidents from logs faster.',
      es: 'Diagnosticar incidentes a partir de logs más rápido.',
    },
    status: 'research',
    technologies: ['DevOps', 'Observability', 'LLMs', 'Tool Calling'],
    competencies: {
      en: ['DevOps', 'Observability', 'Log analysis', 'Tool Calling', 'LLMs', 'Incident diagnosis'],
      es: ['DevOps', 'Observabilidad', 'Análisis de logs', 'Tool Calling', 'LLMs', 'Diagnóstico de incidentes'],
    },
  },
  {
    slug: 'mcp-postgresql',
    name: 'MCP Server for PostgreSQL',
    description: {
      en: 'MCP server enabling controlled database queries by AI agents.',
      es: 'Servidor MCP para permitir consultas controladas de bases de datos mediante agentes de IA.',
    },
    problem: {
      en: 'Let AI agents query databases safely.',
      es: 'Permitir que agentes de IA consulten bases de datos de forma segura.',
    },
    status: 'research',
    technologies: ['Python', 'MCP', 'SQL', 'RBAC'],
    competencies: {
      en: ['Python', 'MCP', 'SQL', 'RBAC', 'Auditing', 'Security', 'Tool integration'],
      es: ['Python', 'MCP', 'SQL', 'RBAC', 'Auditoría', 'Seguridad', 'Integración de herramientas'],
    },
  },
  {
    slug: 'llm-evaluation-platform',
    name: 'LLM Evaluation Platform',
    description: {
      en: 'Experimental platform to compare language models through reproducible evaluations.',
      es: 'Plataforma experimental para comparar modelos de lenguaje mediante evaluaciones reproducibles.',
    },
    problem: {
      en: 'Compare models on latency, accuracy and cost.',
      es: 'Comparar modelos por latencia, precisión y costo.',
    },
    status: 'research',
    technologies: ['AI Evaluations', 'Benchmarking', 'Testing'],
    competencies: {
      en: ['AI Evaluations', 'Benchmarking', 'Testing', 'Latency', 'Accuracy', 'Costs', 'Structured Outputs'],
      es: ['AI Evaluations', 'Benchmarking', 'Testing', 'Latencia', 'Precisión', 'Costos', 'Structured Outputs'],
    },
  },
]
