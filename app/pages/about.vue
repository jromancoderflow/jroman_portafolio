<template>
  <section class="section">
    <div class="container-page">
      <div class="mx-auto max-w-3xl text-center">
        <p class="section-eyebrow">About</p>
        <h1 class="section-title">{{ $t('about.title') }}</h1>
        <p class="mt-4 text-text-secondary">{{ $t('about.subtitle') }}</p>
      </div>

      <!-- Profile + education -->
      <div class="mt-12 grid gap-5 md:grid-cols-2">
        <div class="card p-7">
          <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Profile</p>
          <p class="mt-3 leading-relaxed text-text-secondary">{{ loc(profile.valueProposition) }}</p>
          <ul class="mt-5 space-y-2.5">
            <li v-for="(item, i) in aboutHighlightsList" :key="i" class="flex items-start gap-3 text-sm text-text-secondary">
              <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="card p-7">
          <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Education</p>
          <p class="mt-3 font-semibold">{{ profile.education.degree }}</p>
          <p class="mt-1 text-sm text-text-secondary">{{ profile.education.institution }}</p>
          <dl class="mt-6 space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <dt><MapPin class="h-4 w-4 text-text-secondary" /></dt>
              <dd class="text-text-secondary">{{ profile.location }}</dd>
            </div>
            <div class="flex items-start gap-3">
              <dt><CircleDot class="h-4 w-4 text-text-secondary" /></dt>
              <dd class="text-text-secondary">{{ profile.availability }}</dd>
            </div>
            <div class="flex items-start gap-3">
              <dt><Cpu class="h-4 w-4 text-text-secondary" /></dt>
              <dd class="text-text-secondary">{{ profile.yearsExperience }}+ {{ $t('home.metrics.years') }}</dd>
            </div>
            <div class="flex items-start gap-3">
              <dt><Layers class="h-4 w-4 text-text-secondary" /></dt>
              <dd class="text-text-secondary">{{ profile.pythonYears }} {{ $t('home.metrics.python') }}</dd>
            </div>
            <div class="flex items-start gap-3">
              <dt><Globe class="h-4 w-4 text-text-secondary" /></dt>
              <dd class="text-text-secondary">{{ $t('about.languages') }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Experience -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight">{{ $t('home.experience.title') }}</h2>
        <div class="mt-6 grid gap-5 md:grid-cols-3">
          <div v-for="e in experience" :key="e.id" class="card p-6">
            <div class="flex items-start justify-between gap-3">
              <h3 class="text-lg font-semibold">{{ e.company }}</h3>
              <span v-if="e.period" class="shrink-0 font-mono text-[10px] uppercase tracking-wider text-text-secondary">{{ e.period }}</span>
            </div>
            <p class="mt-1 font-mono text-[10px] uppercase tracking-wider text-accent">{{ loc(e.role) }}</p>
            <p class="mt-3 text-sm leading-relaxed text-text-secondary">{{ loc(e.summary) }}</p>
            <ul class="mt-4 space-y-1.5">
              <li v-for="(r, i) in loc(e.responsibilities).slice(0, 4)" :key="i" class="flex items-start gap-2 text-xs leading-relaxed text-text-secondary">
                <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {{ r }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Teaching -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight">{{ $t('about.teaching.title') }}</h2>
        <div class="card mt-6 p-7">
          <p class="text-sm leading-relaxed text-text-secondary">{{ $t('about.teaching.body') }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="area in teachingAreas"
              :key="area"
              class="rounded-lg bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent"
            >
              {{ area }}
            </span>
          </div>
        </div>
      </div>

      <!-- Engineering capabilities / skills -->
      <div id="engineering" class="mt-20">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">Engineering</p>
          <h2 class="section-title">{{ $t('engineering.title') }}</h2>
          <p class="mt-4 text-text-secondary">{{ $t('engineering.subtitle') }}</p>
        </div>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-5 text-[11px] text-text-secondary">
          <span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-accent" /> {{ $t('engineering.legend.production') }}</span>
          <span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-[#22d3ee]" /> {{ $t('engineering.legend.practical') }}</span>
          <span class="flex items-center gap-2"><span class="h-2 w-2 rounded-full border border-border" /> {{ $t('engineering.legend.developing') }}</span>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <div v-for="cat in skillCategories" :key="cat.id" class="card p-6">
            <h3 class="font-semibold">{{ loc(cat.title) }}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-text-secondary">{{ loc(cat.description) }}</p>
            <ul class="mt-4 space-y-2">
              <li v-for="skill in cat.skills" :key="skill.name" class="flex items-center gap-3">
                <span
                  class="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[10px] font-bold"
                  :class="levelClass(skill.level)"
                >
                  {{ initials(skill.name) }}
                </span>
                <span class="flex-1 truncate text-sm text-text-secondary">{{ skill.name }}</span>
                <span class="font-mono text-[10px] uppercase tracking-wider" :class="levelTextClass(skill.level)">
                  {{ levelLabel(skill.level) }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Engineering principles -->
      <div class="mt-20">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">Principles</p>
          <h2 class="section-title">{{ $t('home.principles.title') }}</h2>
        </div>
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="pr in principles" :key="pr.id" class="card p-6">
            <h3 class="font-semibold">{{ loc(pr.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ loc(pr.description) }}</p>
          </div>
        </div>
      </div>

      <!-- AI Engineering -->
      <div id="ai" class="mt-20">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">AI</p>
          <h2 class="section-title">{{ $t('ai.title') }}</h2>
          <p class="mt-4 text-text-secondary">{{ $t('ai.subtitle') }}</p>
        </div>

        <div class="mt-10 grid gap-6">
          <div class="card p-7">
            <h3 class="text-xl font-semibold">{{ $t('ai.augmented.title') }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ $t('ai.augmented.body') }}</p>
            <ol class="mt-6 grid gap-2 sm:grid-cols-2">
              <li
                v-for="(step, i) in aiWorkflowList"
                :key="i"
                class="flex items-center gap-3 rounded-xl border border-border px-4 py-3 font-mono text-xs"
              >
                <span class="text-text-secondary">{{ String(Number(i) + 1).padStart(2, '0') }}</span>
                {{ step }}
              </li>
            </ol>
            <p class="mt-6 text-sm font-medium text-accent">
              AI accelerates implementation. Engineering judgment ensures quality.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div class="card p-7">
              <h3 class="text-xl font-semibold">{{ $t('ai.applied.title') }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ $t('ai.applied.body') }}</p>
              <NuxtLink :to="localePath('/work/apoloscan')" class="btn-ghost mt-6">
                ApoloScan
                <ArrowUpRight class="h-4 w-4" />
              </NuxtLink>
              <div class="mt-6">
                <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary">Future areas</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span
                    v-for="a in futureAreas"
                    :key="a"
                    class="rounded-lg bg-surface-2 px-3 py-1.5 text-xs text-text-secondary"
                  >
                    {{ a }}
                  </span>
                </div>
              </div>
            </div>

            <div class="card p-7">
              <h3 class="text-xl font-semibold">{{ $t('ai.governance.title') }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ $t('ai.governance.body') }}</p>
              <ul class="mt-5 space-y-2.5">
                <li
                  v-for="(g, i) in governanceItems"
                  :key="i"
                  class="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {{ g }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight, CheckCircle2, Cpu, Layers, MapPin, CircleDot, Globe } from 'lucide-vue-next'
import { profile } from '~/config/profile'
import { experience } from '~/data/experience'
import { skillCategories } from '~/data/skills'
import { engineeringPrinciples as principles } from '~/data/principles'
import { aboutHighlights, aiWorkflow } from '~/data/lists'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

usePageSeo(() => ({
  title: t('seo.about'),
  description: t('seo.aboutDesc'),
}))
const localePath = useLocalizedPath()

const loc = (field: any) =>
  typeof field === 'object' && field !== null && !Array.isArray(field)
    ? (field[locale.value as 'en' | 'es'] ?? field.en ?? field)
    : field

const aboutHighlightsList = computed(() => aboutHighlights[locale.value as 'en' | 'es'] ?? aboutHighlights.en)
const aiWorkflowList = computed(() => aiWorkflow[locale.value as 'en' | 'es'] ?? aiWorkflow.en)

const teachingAreas = ['Software Engineering', 'Full Stack', 'DevOps', 'AWS', 'Docker', 'CI/CD', 'System Design']

const futureAreas = [
  'RAG', 'Embeddings', 'Vector databases', 'Structured Outputs', 'Tool Calling',
  'AI Agents', 'MCP', 'AI Evaluations', 'AI Observability', 'Model Routing', 'Cost Optimization',
]

const governanceItems = [
  'Validation of responses and hallucinations.',
  'Prompt injection protection.',
  'Cost and latency control.',
  'Evaluations, observability and human-in-the-loop.',
  'When to use and when not to use AI.',
]

function initials(name: string) {
  const clean = name.replace(/[^a-zA-Z]/g, '')
  return (clean.length > 1 ? clean.slice(0, 2) : clean).toUpperCase()
}

function levelClass(level: string) {
  if (level === 'production') return 'bg-accent-soft text-accent'
  if (level === 'practical') return 'bg-[#22d3ee]/10 text-[#0891b2] dark:text-[#22d3ee]'
  return 'bg-surface-2 text-text-secondary'
}

function levelTextClass(level: string) {
  if (level === 'production') return 'text-accent'
  if (level === 'practical') return 'text-[#0891b2] dark:text-[#22d3ee]'
  return 'text-text-secondary'
}

function levelLabel(level: string) {
  if (level === 'production') return 'prod'
  if (level === 'practical') return 'practical'
  return 'dev'
}
</script>
