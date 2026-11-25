<template>
  <!-- HERO -->
  <section class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute -right-40 -top-56 h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
      style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 68%)"
      aria-hidden="true"
    />
    <div class="container-page relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
      <!-- Left -->
      <div class="animate-fade-up">
        <p class="eyebrow text-accent">{{ $t('home.hero.badge') }}</p>

        <h1 class="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {{ $t('home.hero.greeting') }}
          <span class="text-accent">{{ firstName }}</span>
        </h1>
        <p class="mt-3 text-2xl font-semibold leading-snug tracking-tight text-text-primary sm:text-3xl">
          {{ $t('home.hero.headline') }}
        </p>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-text-secondary">
          {{ loc(profile.valueProposition) }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink :to="localePath('/work')" class="btn-primary">
            {{ $t('home.hero.exploreWork') }}
            <ArrowUpRight class="h-4 w-4" />
          </NuxtLink>
          <a v-if="cvUrl" :href="cvUrl" class="btn-ghost" target="_blank" rel="noopener">
            <Download class="h-4 w-4" />
            {{ $t('home.hero.downloadCv') }}
          </a>
        </div>

        <div class="mt-10">
          <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            {{ $t('home.hero.stack') }}
          </p>
          <ul class="mt-4 flex flex-wrap gap-2.5">
            <li
              v-for="tech in heroStack"
              :key="tech.name"
              class="group flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-medium transition-colors hover:border-accent"
            >
              <component :is="tech.icon" class="h-4 w-4 text-accent" />
              {{ tech.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Right: code card + avatar circle -->
      <div class="relative">
        <div class="relative mx-auto max-w-md">
          <div
            class="aspect-square w-full rounded-full bg-gradient-to-br from-accent via-[#7b5cff] to-[#2b1a6b] opacity-90"
            aria-hidden="true"
          />
          <div class="absolute inset-0 grid place-items-center">
            <div class="grid h-[58%] w-[58%] place-items-center rounded-full border border-white/15 bg-[#050b1d]/40 backdrop-blur-sm">
              <span class="font-mono text-4xl font-bold text-white/90 sm:text-5xl">JR</span>
            </div>
          </div>

          <!-- floating code card -->
          <div class="absolute -bottom-8 -left-2 w-[19rem] max-w-[85%] rounded-2xl border border-border bg-surface p-4 shadow-card sm:-left-10">
            <div class="flex items-center gap-1.5 pb-3">
              <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span class="ml-auto font-mono text-[10px] text-text-secondary">profile.py</span>
            </div>
            <pre class="overflow-x-auto font-mono text-[11px] leading-relaxed"><code><span class="text-accent">const</span> <span class="text-text-primary">engineer</span> <span class="text-text-secondary">=</span> &#123;
  name: <span class="text-[#8be9fd]">'Jorge Román'</span>,
  role: <span class="text-[#8be9fd]">'Software Engineer'</span>,
  focus: <span class="text-[#8be9fd]">'Backend &amp; AI'</span>,
  years: <span class="text-[#f8f8f2]">5</span>,
  stack: [<span class="text-[#8be9fd]">'Python'</span>, <span class="text-[#8be9fd]">'Django'</span>,
          <span class="text-[#8be9fd]">'Postgres'</span>, <span class="text-[#8be9fd]">'Docker'</span>],
&#125;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT + METRICS -->
  <section class="border-t border-border bg-surface">
    <div class="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="section-eyebrow !text-left">{{ $t('home.about.eyebrow') }}</p>
        <h2 class="text-3xl font-bold leading-snug tracking-tight md:text-4xl">
          {{ $t('home.about.title') }}
        </h2>
        <p class="mt-5 max-w-lg leading-relaxed text-text-secondary">
          {{ $t('home.about.body') }}
        </p>
        <ul class="mt-6 space-y-2.5">
          <li v-for="(item, i) in aboutHighlightsList" :key="i" class="flex items-start gap-3 text-sm text-text-secondary">
            <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {{ item }}
          </li>
        </ul>
        <NuxtLink :to="localePath('/about')" class="btn-ghost mt-8">
          {{ $t('home.about.cta') }}
          <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div v-for="m in metrics" :key="m.label" class="card flex flex-col gap-4 p-6">
          <div class="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
            <component :is="m.icon" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-3xl font-bold tracking-tight">{{ m.value }}</p>
            <p class="mt-1 text-sm text-text-secondary">{{ m.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section class="border-t border-border">
    <div class="container-page py-16 md:py-24">
      <p class="section-eyebrow">{{ $t('home.skills.eyebrow') }}</p>
      <h2 class="section-title">{{ $t('home.skills.title') }}</h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-sm text-text-secondary">
        {{ $t('home.skills.subtitle') }}
      </p>

      <div class="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="cat in skillCategories" :key="cat.id">
          <h3 class="mb-4 text-sm font-semibold tracking-wide text-text-primary">{{ loc(cat.title) }}</h3>
          <ul class="space-y-3">
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

      <div class="mt-10 flex flex-wrap items-center justify-center gap-5 text-[11px] text-text-secondary">
        <span class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-accent" /> {{ $t('engineering.legend.production') }}
        </span>
        <span class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-[#22d3ee]" /> {{ $t('engineering.legend.practical') }}
        </span>
        <span class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full border border-border" /> {{ $t('engineering.legend.developing') }}
        </span>
      </div>
    </div>
  </section>

  <!-- FEATURED PROJECTS -->
  <section class="border-t border-border bg-surface">
    <div class="container-page py-16 md:py-24">
      <p class="section-eyebrow">{{ $t('home.projects.eyebrow') }}</p>
      <h2 class="section-title">{{ $t('home.projects.title') }}</h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-sm text-text-secondary">
        {{ $t('home.projects.subtitle') }}
      </p>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(p, i) in featuredProjects"
          :key="p.slug"
          class="card group overflow-hidden"
        >
          <NuxtLink :to="`/work/${p.slug}`" class="block" :aria-label="p.name">
            <div class="relative aspect-[16/10] overflow-hidden bg-surface-2">
              <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/25 via-[#0b1226] to-[#050b1d]">
                <component :is="projectIcon(p)" class="h-12 w-12 text-accent/70 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span class="absolute left-4 top-4 font-mono text-[11px] font-semibold text-white/80">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>
          </NuxtLink>
          <div class="p-6">
            <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{{ loc(p.category) }}</p>
            <h3 class="mt-2 text-lg font-semibold">
              <NuxtLink :to="`/work/${p.slug}`" class="transition-colors hover:text-accent">
                {{ p.name }}
              </NuxtLink>
            </h3>
            <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-text-secondary">{{ loc(p.description) }}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="tech in p.technologies.slice(0, 4)"
                :key="tech"
                class="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-text-secondary"
              >
                {{ tech }}
              </span>
            </div>
            <NuxtLink
              :to="`/work/${p.slug}`"
              class="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent"
            >
              {{ $t('common.viewCaseStudy') }}
              <ArrowUpRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-12 flex justify-center">
        <NuxtLink :to="localePath('/work')" class="btn-ghost">
          {{ $t('home.projects.cta') }}
          <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- ENGINEERING PRINCIPLES -->
  <section class="border-t border-border">
    <div class="container-page py-16 md:py-24">
      <p class="section-eyebrow">{{ $t('home.principles.eyebrow') }}</p>
      <h2 class="section-title">{{ $t('home.principles.title') }}</h2>
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="pr in principles" :key="pr.id" class="card p-6">
          <h3 class="font-semibold">{{ loc(pr.title) }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ loc(pr.description) }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- AI PREVIEW -->
  <section class="border-t border-border bg-surface">
    <div class="container-page grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="section-eyebrow !text-left">AI</p>
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">{{ $t('home.aiPreview.title') }}</h2>
        <p class="mt-4 leading-relaxed text-text-secondary">{{ $t('home.aiPreview.body') }}</p>
        <NuxtLink :to="`${localePath('/about')}#ai`" class="btn-ghost mt-7">
          {{ $t('home.aiPreview.cta') }}
          <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>
      <div class="card overflow-hidden">
        <div class="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span class="ml-auto font-mono text-[10px] text-text-secondary">ai-workflow</span>
        </div>
        <ol class="divide-y divide-border">
          <li
            v-for="(step, i) in aiWorkflowList"
            :key="i"
            class="flex items-center gap-4 px-4 py-2.5 font-mono text-xs"
          >
            <span class="w-5 text-text-secondary">{{ String(Number(i) + 1).padStart(2, '0') }}</span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <!-- EXPERIENCE -->
  <section class="border-t border-border">
    <div class="container-page py-16 md:py-24">
      <p class="section-eyebrow">{{ $t('home.experience.eyebrow') }}</p>
      <h2 class="section-title">{{ $t('home.experience.title') }}</h2>
      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <div v-for="e in experience" :key="e.id" class="card p-6">
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-lg font-semibold">{{ e.company }}</h3>
            <span class="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
              {{ loc(e.role) }}
            </span>
          </div>
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
  </section>

  <!-- CONTACT CTA -->
  <section class="relative overflow-hidden border-t border-border">
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
      style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%)"
      aria-hidden="true"
    />
    <div class="container-page relative py-16 text-center md:py-24">
      <p class="section-eyebrow">{{ $t('home.contactCta.eyebrow') }}</p>
      <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
        {{ $t('home.contactCta.title') }}
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-text-secondary">{{ $t('home.contactCta.body') }}</p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <NuxtLink :to="localePath('/contact')" class="btn-primary">
          {{ $t('home.contactCta.cta') }}
          <ArrowUpRight class="h-4 w-4" />
        </NuxtLink>
        <a v-if="cvUrl" :href="cvUrl" class="btn-ghost" target="_blank" rel="noopener">
          <Download class="h-4 w-4" />
          {{ $t('home.hero.downloadCv') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowUpRight, ArrowRight, Download, CheckCircle2, Quote, Cpu, Heart, Layers, Trophy, Box, ShieldCheck, Radar, Store, Truck, Bot, Gauge,
} from 'lucide-vue-next'
import { profile } from '~/config/profile'
import { projects } from '~/data/projects'
import { experience } from '~/data/experience'
import { engineeringPrinciples as principles } from '~/data/principles'
import { skillCategories } from '~/data/skills'
import { aboutHighlights, aiWorkflow } from '~/data/lists'
import { cvUrl } from '~/config/social'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const localePath = useLocalizedPath()

const firstName = computed(() => profile.name.split(' ')[0])

usePageSeo(() => ({
  title: t('seo.home'),
  description: t('seo.homeDesc'),
}))
const featuredProjects = computed(() => projects.slice(0, 3))
const aboutHighlightsList = computed(() => aboutHighlights[locale.value as 'en' | 'es'] ?? aboutHighlights.en)
const aiWorkflowList = computed(() => aiWorkflow[locale.value as 'en' | 'es'] ?? aiWorkflow.en)

const loc = (field: any) =>
  typeof field === 'object' && field !== null && !Array.isArray(field)
    ? (field[locale.value] ?? field.en ?? field)
    : field

const heroStack = [
  { name: 'Python', icon: Box },
  { name: 'Django', icon: Layers },
  { name: 'Node.js', icon: Gauge },
  { name: 'PostgreSQL', icon: Radar },
  { name: 'Docker', icon: Box },
  { name: 'AWS', icon: Bot },
]

const metrics = computed(() => [
  { value: `${profile.yearsExperience}+`, label: t('home.metrics.years'), icon: Cpu },
  { value: `${profile.pythonYears}`, label: t('home.metrics.python'), icon: Layers },
  { value: t('home.metrics.leadership'), label: t('home.metrics.leadershipLabel'), icon: Trophy },
  { value: t('home.metrics.educator'), label: t('home.metrics.educatorLabel'), icon: Heart },
])

function projectIcon(project: any) {
  switch (project.icon) {
    case 'health': return ShieldCheck
    case 'identity': return Radar
    case 'ai': return Bot
    case 'commerce': return Store
    default: return Truck
  }
}

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

// Articles removed together with the Writing section.
</script>
