import type { Project } from '~/types'

export const projects: Project[] = [
  {
    slug: 'viten',
    icon: 'health',
    name: 'Viten',
    category: { en: 'Healthcare SaaS', es: 'SaaS de Salud' },
    description: {
      en: 'SaaS platform for clinics and health professionals to manage patients, clinical records, appointments, consultations, informed consents, users, payments and automations.',
      es: 'Plataforma SaaS para clínicas y profesionales de la salud para gestionar pacientes, fichas clínicas, citas, atenciones, consentimientos informados, usuarios, pagos y automatizaciones.',
    },
    role: { en: 'CTO & Lead Software Engineer', es: 'CTO y Lead Software Engineer' },
    tags: ['SaaS', 'Healthcare', 'Backend'],
    technologies: ['Django Ninja', 'Next.js', 'PostgreSQL', 'JWT', 'Celery', 'Redis', 'Docker', 'GitHub Actions', 'Caddy', 'Sentry', 'Mercado Pago'],
    url: 'https://viten.cl',
    caseStudy: true,
    status: 'commercial',
    highlights: {
      en: [
        'Multi-tenant SaaS architecture.',
        'Encrypted clinical information with AES-256.',
        'Asynchronous processing with Celery and Redis.',
        'Payments integration with Mercado Pago.',
        'Automated reminders and messaging.',
      ],
      es: [
        'Arquitectura SaaS multi-tenant.',
        'Información clínica cifrada con AES-256.',
        'Procesamiento asíncrono con Celery y Redis.',
        'Integración de pagos con Mercado Pago.',
        'Recordatorios y mensajería automatizados.',
      ],
    },
    problem: {
      en: 'Clinics and health professionals need a single, secure system to manage patients, clinical records, appointments, consents and payments.',
      es: 'Clínicas y profesionales de la salud necesitan un sistema único y seguro para gestionar pacientes, fichas clínicas, citas, consentimientos y pagos.',
    },
    challenges: {
      en: [
        'Protecting sensitive clinical information.',
        'Designing a multi-tenant SaaS model.',
        'Coordinating asynchronous jobs for reminders and payments.',
        'Integrating external payment and messaging providers.',
      ],
      es: [
        'Proteger información clínica sensible.',
        'Diseñar un modelo SaaS multi-tenant.',
        'Coordinar trabajos asíncronos para recordatorios y pagos.',
        'Integrar proveedores externos de pago y mensajería.',
      ],
    },
    architectureMermaid: `flowchart LR
  U[Users / Clinics] --> RP["Reverse Proxy (Caddy)"]
  RP --> FE["Next.js Frontend"]
  RP --> BE["Django Ninja API"]
  BE --> DB[("PostgreSQL")]
  BE --> R["Redis Broker"]
  R --> W["Celery Workers"]
  BE --> MP["Mercado Pago"]
  BE --> MSG["Messaging Services"]
  BE --> S["Sentry"]`,
    decisions: {
      en: [
        'Django Ninja for a typed, fast API layer.',
        'PostgreSQL for relational integrity.',
        'Celery + Redis for background work.',
        'AES-256 encryption for clinical data.',
      ],
      es: [
        'Django Ninja para una capa de API tipada y rápida.',
        'PostgreSQL para integridad relacional.',
        'Celery + Redis para trabajo en segundo plano.',
        'Cifrado AES-256 para datos clínicos.',
      ],
    },
    security: {
      en: [
        'JWT authentication and permission management.',
        'AES-256 encryption of clinical information.',
        'Secret management and environment isolation.',
      ],
      es: [
        'Autenticación JWT y gestión de permisos.',
        'Cifrado AES-256 de información clínica.',
        'Gestión de secretos y aislamiento de entornos.',
      ],
    },
    infra: {
      en: ['Docker', 'GitHub Actions', 'Caddy reverse proxy', 'Sentry monitoring', 'QA and production environments.'],
      es: ['Docker', 'GitHub Actions', 'Reverse proxy Caddy', 'Monitoreo con Sentry', 'Entornos QA y producción.'],
    },
    tradeoffs: {
      en: ['Monolithic backend chosen for delivery speed and maintainability over microservices.'],
      es: ['Backend monolítico elegido por velocidad de entrega y mantenibilidad sobre microservicios.'],
    },
    lessons: {
      en: ['Security must be designed into the data model from the start.'],
      es: ['La seguridad debe diseñarse en el modelo de datos desde el inicio.'],
    },
    future: {
      en: ['Additional integrations and reporting capabilities.'],
      es: ['Integraciones adicionales y capacidades de reportes.'],
    },
  },
  {
    slug: 'deuna',
    icon: 'identity',
    name: 'Deuna',
    category: { en: 'Digital Identity & NFC Platform', es: 'Plataforma de Identidad Digital y NFC' },
    description: {
      en: 'Digital identity platform based on NFC cards, customizable digital profiles, smart redirects and interaction analytics.',
      es: 'Plataforma de identidad digital basada en tarjetas NFC, perfiles digitales personalizables, redirecciones inteligentes y análisis de interacciones.',
    },
    role: { en: 'CTO & Lead Software Engineer', es: 'CTO y Lead Software Engineer' },
    tags: ['NFC', 'Identity', 'SaaS'],
    technologies: ['Nuxt', 'Django Ninja', 'PostgreSQL', 'JWT'],
    url: 'https://deuna.cl',
    caseStudy: true,
    status: 'commercial',
    highlights: {
      en: [
        'Integration between physical NFC cards and digital profiles.',
        'Unique public identifiers and dynamic redirects.',
        'Scan tracking and interaction metrics.',
        'Link management and customizable profiles.',
      ],
      es: [
        'Integración entre tarjetas NFC físicas y perfiles digitales.',
        'Identificadores públicos únicos y redirecciones dinámicas.',
        'Seguimiento de escaneos y métricas de interacción.',
        'Gestión de enlaces y perfiles personalizables.',
      ],
    },
    problem: {
      en: 'Bridge physical NFC cards with customizable digital profiles and measurable interactions.',
      es: 'Conectar tarjetas NFC físicas con perfiles digitales personalizables e interacciones medibles.',
    },
    challenges: {
      en: ['Mapping physical cards to digital identities.', 'Tracking scans reliably.', 'Designing flexible redirect logic.'],
      es: ['Mapear tarjetas físicas a identidades digitales.', 'Registrar escaneos de forma confiable.', 'Diseñar lógica de redirección flexible.'],
    },
    architectureMermaid: `flowchart LR
  Card["NFC Card"] --> Scan["Scan Event"]
  Scan --> API["Django Ninja API"]
  API --> DB[("PostgreSQL")]
  API --> Profile["Digital Profile"]
  Profile --> Redirect["Dynamic Redirect"]`,
    decisions: {
      en: ['Nuxt for the public-facing profile experience.', 'Django Ninja for the API.'],
      es: ['Nuxt para la experiencia pública de perfiles.', 'Django Ninja para la API.'],
    },
    security: {
      en: ['JWT authentication and unique public identifiers.'],
      es: ['Autenticación JWT e identificadores públicos únicos.'],
    },
  },
  {
    slug: 'clarity',
    name: 'Clarity',
    icon: 'commerce',
    category: { en: 'Accounting SaaS', es: 'SaaS Contable' },
    description: {
      en: 'SaaS platform for digitizing and automating administrative processes in accounting offices: client, document, task and internal process management.',
      es: 'Plataforma SaaS para digitalizar y automatizar procesos administrativos en oficinas contables: gestión de clientes, documentos, tareas y procesos internos.',
    },
    role: { en: 'Founder & Lead Software Engineer', es: 'Founder y Lead Software Engineer' },
    tags: ['SaaS', 'Accounting', 'Backend'],
    technologies: ['Django Ninja', 'PostgreSQL', 'Docker', 'React'],
    caseStudy: true,
    status: 'commercial',
    highlights: {
      en: [
        'Full backend and REST API development for clients, documents, tasks and internal processes.',
        'Scalable architecture based on decoupled services and automated deployments.',
        'Workflows focused on reducing operational tasks and improving information traceability.',
      ],
      es: [
        'Desarrollo completo del backend y APIs REST para clientes, documentos, tareas y procesos internos.',
        'Arquitectura escalable basada en servicios desacoplados y despliegues automatizados.',
        'Flujos de trabajo enfocados en reducir tareas operativas y mejorar la trazabilidad de la información.',
      ],
    },
    problem: {
      en: 'Digitize and automate administrative processes in accounting offices.',
      es: 'Digitalizar y automatizar procesos administrativos en oficinas contables.',
    },
    challenges: {
      en: ['Designing decoupled services.', 'Automating deployments.', 'Improving information traceability.'],
      es: ['Diseñar servicios desacoplados.', 'Automatizar despliegues.', 'Mejorar la trazabilidad de la información.'],
    },
  },
  {
    slug: 'apoloscan',
    icon: 'ai',
    name: 'ApoloScan / ProtecBionics',
    category: { en: 'AI-Powered 3D Generation', es: 'Generación 3D con IA' },
    description: {
      en: 'Platform integrating generative AI models to create three-dimensional objects and manage processing requests.',
      es: 'Plataforma que integra modelos de inteligencia artificial generativa para crear objetos tridimensionales y gestionar solicitudes de procesamiento.',
    },
    role: { en: 'Software Engineer', es: 'Software Engineer' },
    tags: ['AI', '3D', 'Realtime'],
    technologies: ['Next.js', 'Django Ninja', 'Three.js', 'WebSockets', 'Django Channels', 'Redis', 'S3-compatible storage', 'Synexa AI'],
    caseStudy: true,
    status: 'experimental',
    highlights: {
      en: [
        'Integration with external generative AI models.',
        'Long-running processing request management.',
        'Real-time communication via WebSockets.',
        'Interactive 3D visualization of results.',
      ],
      es: [
        'Integración con modelos externos de IA generativa.',
        'Gestión de solicitudes de procesamiento de larga duración.',
        'Comunicación en tiempo real mediante WebSockets.',
        'Visualización 3D interactiva de resultados.',
      ],
    },
    problem: {
      en: 'Generate 3D objects from AI models and let users track and visualize long-running jobs.',
      es: 'Generar objetos 3D a partir de modelos de IA y permitir a los usuarios seguir y visualizar trabajos de larga duración.',
    },
    challenges: {
      en: [
        'Managing long-running AI jobs and their states.',
        'Real-time status updates over WebSockets.',
        'Handling and storing generated 3D assets.',
        'Visualizing results in the browser.',
      ],
      es: [
        'Gestionar trabajos de IA de larga duración y sus estados.',
        'Actualizaciones de estado en tiempo real mediante WebSockets.',
        'Manejar y almacenar activos 3D generados.',
        'Visualizar resultados en el navegador.',
      ],
    },
    architectureMermaid: `flowchart LR
  U["User"] --> FE["Next.js + Three.js"]
  FE --> WS["WebSockets"]
  FE --> API["Django Ninja API"]
  API --> Q["Redis Queue"]
  Q --> W["Workers"]
  W --> AI["Synexa AI"]
  W --> S3[("S3 Storage")]
  WS --> U`,
    decisions: {
      en: ['WebSockets for real-time job status.', 'Redis for job queue and state.'],
      es: ['WebSockets para estado de trabajos en tiempo real.', 'Redis para cola de trabajos y estado.'],
    },
    security: {
      en: ['Input validation and controlled access to generated assets.'],
      es: ['Validación de entrada y acceso controlado a activos generados.'],
    },
  },
  {
    slug: 'bizy',
    icon: 'commerce',
    name: 'Bizy',
    category: { en: 'Multi-store E-commerce Platform', es: 'Plataforma E-commerce Multi-tienda' },
    description: {
      en: 'Platform oriented to e-commerce and the administration of multiple stores.',
      es: 'Plataforma orientada al comercio electrónico y la administración de múltiples tiendas.',
    },
    role: { en: 'Software Engineer', es: 'Software Engineer' },
    tags: ['E-commerce', 'SaaS', 'Multi-tenant'],
    technologies: ['SaaS Architecture', 'APIs', 'Reverse Proxies', 'Automation'],
    caseStudy: true,
    status: 'production',
    highlights: {
      en: [
        'Multi-store SaaS architecture.',
        'Domain and subdomain management.',
        'Infrastructure automation and deployments.',
      ],
      es: [
        'Arquitectura SaaS multi-tienda.',
        'Gestión de dominios y subdominios.',
        'Automatización de infraestructura y despliegues.',
      ],
    },
    problem: {
      en: 'Enable multiple stores to operate on a shared, scalable platform.',
      es: 'Permitir que múltiples tiendas operen sobre una plataforma compartida y escalable.',
    },
    challenges: {
      en: ['Tenant isolation and domain routing.', 'Scalable deployment automation.'],
      es: ['Aislamiento de tenants y enrutamiento de dominios.', 'Automatización escalable de despliegues.'],
    },
  },
  {
    slug: 'wisetrack',
    icon: 'enterprise',
    name: 'Wisetrack',
    category: { en: 'Enterprise Software & System Modernization', es: 'Software Empresarial y Modernización' },
    description: {
      en: 'Contributed to enterprise fleet monitoring and management systems.',
      es: 'Contribución a sistemas empresariales de monitoreo y gestión de flotas.',
    },
    role: { en: 'Software Engineer', es: 'Software Engineer' },
    tags: ['Enterprise', 'Modernization', 'Backend'],
    technologies: ['Node.js', 'PostgreSQL', 'SQL Server', 'GitHub Actions', 'REST', 'SOAP'],
    caseStudy: true,
    status: 'production',
    highlights: {
      en: [
        'Database migration from SQL Server to PostgreSQL.',
        'Modernization of SOAP services toward REST.',
        'Automated backend processes with Node.js.',
        'Deployment automation with GitHub Actions.',
        'AI integration into analysis and monitoring.',
      ],
      es: [
        'Migración de base de datos de SQL Server a PostgreSQL.',
        'Modernización de servicios SOAP hacia REST.',
        'Procesos backend automatizados con Node.js.',
        'Automatización de despliegues con GitHub Actions.',
        'Integración de IA en análisis y monitoreo.',
      ],
    },
    problem: {
      en: 'Modernize and maintain enterprise fleet monitoring systems without disrupting operations.',
      es: 'Modernizar y mantener sistemas empresariales de monitoreo de flotas sin interrumpir operaciones.',
    },
    challenges: {
      en: ['Migrating data between database engines.', 'Modernizing legacy SOAP services.', 'Improving maintainability.'],
      es: ['Migrar datos entre motores de base de datos.', 'Modernizar servicios SOAP heredados.', 'Mejorar mantenibilidad.'],
    },
    security: {
      en: ['Code review and maintainability improvements in a production environment.'],
      es: ['Revisión de código y mejoras de mantenibilidad en un entorno productivo.'],
    },
  },
]
