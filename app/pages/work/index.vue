<template>
  <section class="section">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="section-eyebrow">Work</p>
        <h1 class="section-title">{{ $t('work.title') }}</h1>
        <p class="mt-4 text-text-secondary">{{ $t('work.subtitle') }}</p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <div
          v-for="(p, i) in projectList"
          :key="p.slug"
          class="card group overflow-hidden"
        >
          <NuxtLink
            :to="`/work/${p.slug}`"
            class="block"
            :aria-label="p.name"
          >
            <div class="relative aspect-[16/9] overflow-hidden bg-surface-2">
              <img
                v-if="p.thumbnail"
                :src="p.thumbnail"
                :alt="p.name"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                v-else
                class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 via-surface to-background"
              >
                <component :is="projectIcon(p)" class="h-12 w-12 text-accent/70 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span class="absolute left-4 top-4 rounded-md bg-black/50 px-2 py-0.5 font-mono text-[11px] font-semibold text-white/90 backdrop-blur">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>
          </NuxtLink>
          <div class="p-6">
            <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{{ loc(p.category) }}</p>
            <h2 class="mt-2 text-xl font-semibold">
              <NuxtLink :to="`/work/${p.slug}`" class="transition-colors hover:text-accent">
                {{ p.name }}
              </NuxtLink>
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ loc(p.description) }}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="tech in p.technologies"
                :key="tech"
                class="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-text-secondary"
              >
                {{ tech }}
              </span>
            </div>
            <div class="mt-5 flex items-center justify-between">
              <NuxtLink
                :to="`/work/${p.slug}`"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-accent"
              >
                {{ $t('common.viewCaseStudy') }}
                <ArrowUpRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </NuxtLink>
              <a
                v-if="p.url"
                :href="p.url"
                target="_blank"
                rel="noopener"
                class="text-xs text-text-secondary underline-offset-4 hover:text-accent hover:underline"
              >
                {{ $t('common.visitSite') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight, ShieldCheck, Radar, Bot, Store, Truck } from 'lucide-vue-next'
import { projects } from '~/data/projects'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const projectList = computed(() => projects)

usePageSeo(() => ({
  title: t('seo.work'),
  description: t('seo.workDesc'),
}))
const router = useRouter()

// Resolve the target route eagerly so the href is correct during hydration.
// Passing a raw string to NuxtLink inside a v-for can produce stale hrefs.
function projectRoute(project: any) {
  if (!project.caseStudy) return { path: '/' }
  return router.resolve({ path: `/work/${project.slug}` })
}
const localePath = useLocalizedPath()
const loc = (field: any) =>
  typeof field === 'object' && field !== null && !Array.isArray(field)
    ? (field[locale.value] ?? field.en ?? field)
    : field

function projectIcon(project: any) {
  switch (project.icon) {
    case 'health': return ShieldCheck
    case 'identity': return Radar
    case 'ai': return Bot
    case 'commerce': return Store
    default: return Truck
  }
}
</script>
