# Jorge Román Palma — Portfolio

Professional portfolio built with Nuxt 4, TypeScript, Tailwind CSS and @nuxt/content.

## Stack

- Nuxt 4 (App Router equivalent, SSR + static generation)
- Vue 3 + TypeScript (strict)
- Tailwind CSS with CSS-variable theming (dark / light)
- @nuxtjs/i18n (English default, Spanish prefixed `/es`)
- @nuxt/content for articles, @nuxtjs/sitemap + @nuxtjs/robots for SEO
- Mermaid for architecture diagrams
- Lucide icons

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm preview
```

## Static generation

```bash
pnpm generate
```

## Docker

```bash
docker compose up --build
```

## Configuration

All professional content is centralised so it can be edited without touching components:

- Profile: `app/config/profile.ts`
- Social links, email, CV: `app/config/social.ts` (empty values are hidden from the UI)
- Navigation: `app/config/navigation.ts`
- Site metadata: `app/config/site.ts`
- Projects: `app/data/projects.ts`
- Skills: `app/data/skills.ts`
- Experience: `app/data/experience.ts`
- Engineering principles: `app/data/principles.ts`
- Lab experiments: `app/data/lab.ts`
- Translations: `i18n/locales/en.json`, `i18n/locales/es.json`

Set `NUXT_PUBLIC_SITE_URL` in `.env` for production URLs (used by sitemap, canonical and hreflang).

## Content

Articles are authored in Markdown under `content/` and managed by @nuxt/content.
Drafts (frontmatter `draft: true`) are hidden from the public site.

## Design system

| Token | Light | Dark |
| --- | --- | --- |
| Background | `#f7f8fc` | `#050b1d` |
| Surface | `#ffffff` | `#0b1226` |
| Border | `#dfe3ee` | `#1c2748` |
| Text primary | `#0b1020` | `#f4f6ff` |
| Text secondary | `#5a6480` | `#97a1c0` |
| Accent | `#5b4bff` | `#6c63ff` |

Tokens live in `app/assets/css/main.css` and are exposed to Tailwind in `tailwind.config.ts`.

## Pending content

- Confirmed email, GitHub and LinkedIn URLs.
- CV file URL.
- Verified project metrics and employment dates.
- Published technical articles.
- Additional case-study evidence (ADRs, benchmarks, load tests).
