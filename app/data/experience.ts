import type { ExperienceItem } from '~/types'

export const experience: ExperienceItem[] = [
  {
    id: 'coderflow',
    company: 'CoderFlow Ltda.',
    role: { en: 'CoFounder & Lead Software Engineer', es: 'CoFounder y Lead Software Engineer' },
    period: 'Mar 2025 — Present',
    summary: {
      en: 'Leading the design and implementation of SaaS products, cloud infrastructure and technology integrations for companies across multiple sectors.',
      es: 'Lidero el diseño e implementación de productos SaaS, infraestructura cloud e integraciones tecnológicas para empresas de distintos sectores.',
    },
    responsibilities: {
      en: [
        'Designed and implemented the full architecture of multiple SaaS platforms: cloud infrastructure, backend, databases, security, automation and deployment for QA and production environments.',
        'Led backend development with Python, Django Ninja, PostgreSQL, Redis and Docker, building scalable REST APIs and integrating external services to automate business processes.',
        'Implemented Mercado Pago integrations for payments between patients and health professionals, automating billing and reconciliation flows in multi-tenant platforms.',
        'Integrated AI services via Synexa AI for automated image and 3D model generation, adding AI-assisted content creation to commercial products.',
        'Designed automated messaging systems via OpenWA and WhatsApp for appointment reminders, transactional notifications and customer communication.',
        'Managed infrastructure on AWS, DigitalOcean and OpenCloud, implementing CI/CD pipelines with GitHub Actions and automated Docker deployments. Configured Caddy as reverse proxy with domain/subdomain routing, HTTPS/TLS termination and automatic SSL certificates.',
        'Defined development standards, software architecture, code reviews and technology decisions, participating in requirements gathering, estimation and solution design.',
      ],
      es: [
        'Diseñé e implementé la arquitectura completa de múltiples plataformas SaaS: infraestructura cloud, backend, bases de datos, seguridad, automatización y despliegue para entornos de QA y Producción.',
        'Lideré el desarrollo backend con Python, Django Ninja, PostgreSQL, Redis y Docker, construyendo APIs REST escalables e integrando servicios externos para automatizar procesos de negocio.',
        'Implementé integraciones con Mercado Pago para la gestión de pagos entre pacientes y profesionales de la salud, automatizando flujos de cobro y conciliación en plataformas multi-tenant.',
        'Integré servicios de IA mediante Synexa AI para generación automatizada de imágenes y modelos 3D, incorporando creación de contenido asistida por IA en productos comerciales.',
        'Diseñé e implementé sistemas de mensajería automatizada mediante OpenWA y WhatsApp para recordatorios de citas, notificaciones transaccionales y comunicación con clientes.',
        'Administré infraestructura sobre AWS, DigitalOcean y OpenCloud, implementando pipelines CI/CD con GitHub Actions y despliegues automatizados con Docker. Configuré Caddy como reverse proxy con enrutamiento por dominios/subdominios, terminación HTTPS/TLS y certificados SSL automáticos.',
        'Definí estándares de desarrollo, arquitectura de software, revisiones de código y decisiones tecnológicas, participando en levantamiento de requerimientos, estimaciones y definición de soluciones.',
      ],
    },
    technologies: ['Python', 'Django Ninja', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'DigitalOcean', 'OpenCloud', 'GitHub Actions', 'Caddy', 'Mercado Pago', 'OpenWA', 'Synexa AI', 'Celery'],
  },
  {
    id: 'duoc',
    company: 'Duoc UC',
    role: { en: 'Part-Time Instructor', es: 'Docente Part-Time' },
    period: 'Mar 2026 — Present',
    summary: {
      en: 'Teaching Software Engineering, DevOps and Full Stack Development focused on modern industry practices.',
      es: 'Imparto asignaturas de Ingeniería de Software, DevOps y Desarrollo Full Stack, enfocadas en prácticas modernas de la industria.',
    },
    responsibilities: {
      en: [
        'Teach Software Engineering, DevOps and Full Stack Development.',
        'Cover agile methodologies, Docker, CI/CD, Git and Cloud Computing.',
        'Design hands-on practical activities aligned with industry practices.',
      ],
      es: [
        'Imparto Ingeniería de Software, DevOps y Desarrollo Full Stack.',
        'Cubro metodologías ágiles, Docker, CI/CD, Git y Cloud Computing.',
        'Diseño actividades prácticas alineadas con prácticas de la industria.',
      ],
    },
    technologies: ['Software Engineering', 'Full Stack', 'DevOps', 'AWS', 'Docker', 'CI/CD', 'Git'],
  },
  {
    id: 'wisetrack',
    company: 'Wisetrack Corp.',
    role: { en: 'Tech Lead & Software Engineer', es: 'Líder técnico y Software Engineer' },
    period: 'Apr 2022 — Feb 2025',
    summary: {
      en: 'Contributed to the development and evolution of high-availability fleet monitoring and management platforms.',
      es: 'Participé en el desarrollo y evolución de plataformas de monitoreo y gestión de flotas en entornos productivos de alta disponibilidad.',
    },
    responsibilities: {
      en: [
        'Developed and maintained critical fleet monitoring and management systems in production.',
        'Designed and implemented a dedicated Node.js application for scheduled tasks, replacing PostgreSQL-dependent processes and significantly reducing database operational load.',
        'Implemented CI/CD pipelines with GitHub Actions, reducing delivery times and improving production deployment stability.',
        'Integrated neural network models into monitoring and data analysis processes, automating previously manual tasks and improving operational anomaly detection.',
        'Performed code reviews, technical mentoring and defined development standards, promoting engineering best practices and improving application maintainability.',
        'Planned and executed database migrations from SQL Server to PostgreSQL, ensuring operational continuity and minimizing risk.',
      ],
      es: [
        'Desarrollé y mantuve sistemas críticos de monitoreo y gestión de flotas en producción.',
        'Diseñé e implementé una aplicación dedicada en Node.js para tareas programadas, reemplazando procesos dependientes de PostgreSQL y reduciendo la carga operacional de la base de datos.',
        'Implementé pipelines CI/CD con GitHub Actions, reduciendo tiempos de entrega y mejorando la estabilidad de despliegues a producción.',
        'Integré modelos de redes neuronales en procesos de monitoreo y análisis de datos, automatizando tareas manuales y mejorando la detección de anomalías operacionales.',
        'Realicé revisiones de código, mentoría técnica y definición de estándares de desarrollo, promoviendo buenas prácticas de ingeniería.',
        'Planifiqué y ejecuté migraciones de bases de datos de SQL Server a PostgreSQL, asegurando continuidad operacional y minimizando riesgos.',
      ],
    },
    technologies: ['Node.js', 'PostgreSQL', 'SQL Server', 'GitHub Actions', 'Neural Networks', 'REST'],
  },
]
