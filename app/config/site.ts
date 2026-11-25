export const siteConfig = {
  name: 'Jorge Román Palma',
  url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  defaultLocale: 'es' as const,
  title: 'Jorge Román Palma — Software Engineer & Technical Lead',
  description:
    'Software Engineer, Technical Lead and Educator based in Santiago, Chile. Building reliable, scalable and AI-powered software systems.',
  ogImage: '/og/default.png',
}
