<template>
  <section class="section" v-if="project">
    <div class="container-page max-w-4xl">
      <NuxtLink :to="localePath('/work')" class="link inline-flex items-center gap-1.5 text-sm">
        <ArrowLeft class="h-3.5 w-3.5" />
        {{ $t('common.back') }}
      </NuxtLink>

      <div class="mt-6 flex flex-wrap items-center gap-3">
        <span class="eyebrow text-accent">{{ loc(project.category) }}</span>
        <span
          class="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-secondary"
        >
          {{ loc(project.role) }}
        </span>
      </div>

      <h1 class="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{{ project.name }}</h1>
      <p class="mt-4 text-lg leading-relaxed text-text-secondary">{{ loc(project.description) }}</p>

      <div class="mt-6 flex flex-wrap gap-1.5">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-md bg-surface-2 px-2.5 py-0.5 font-mono text-[10px] text-text-secondary"
        >
          {{ tag }}
        </span>
      </div>

      <div v-if="project.url" class="mt-7">
        <a :href="project.url" target="_blank" rel="noopener" class="btn-ghost">
          {{ $t('common.visitSite') }}
          <ArrowUpRight class="h-4 w-4" />
        </a>
      </div>

      <div v-if="project.thumbnail" class="mt-8 overflow-hidden rounded-2xl border border-border">
        <img :src="project.thumbnail" :alt="project.name" class="h-auto w-full object-cover" loading="lazy" />
      </div>

      <div class="mt-14 space-y-12">
        <article v-if="loc(project.problem)" class="prose-portfolio">
          <h2>{{ $t('caseStudy.problem') }}</h2>
          <p>{{ loc(project.problem) }}</p>
        </article>

        <article v-if="project.challenges && loc(project.challenges)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.challenges') }}</h2>
          <ul>
            <li v-for="(c, i) in loc(project.challenges)" :key="i">{{ c }}</li>
          </ul>
        </article>

        <article v-if="project.architectureMermaid" class="prose-portfolio">
          <h2>{{ $t('caseStudy.architecture') }}</h2>
          <div
            ref="mermaidRef"
            class="overflow-x-auto rounded-2xl border border-border bg-surface p-5"
          ></div>
        </article>

        <article class="prose-portfolio">
          <h2>{{ $t('caseStudy.stack') }}</h2>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="rounded-lg bg-surface-2 px-3 py-1 font-mono text-xs text-text-secondary"
            >
              {{ tech }}
            </span>
          </div>
        </article>

        <article v-if="project.decisions && loc(project.decisions)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.decisions') }}</h2>
          <ul>
            <li v-for="(d, i) in loc(project.decisions)" :key="i">{{ d }}</li>
          </ul>
        </article>

        <article v-if="project.highlights && loc(project.highlights)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.highlights') }}</h2>
          <ul>
            <li v-for="(h, i) in loc(project.highlights)" :key="i">{{ h }}</li>
          </ul>
        </article>

        <article v-if="project.security && loc(project.security)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.security') }}</h2>
          <ul>
            <li v-for="(s, i) in loc(project.security)" :key="i">{{ s }}</li>
          </ul>
        </article>

        <article v-if="project.infra && loc(project.infra)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.infra') }}</h2>
          <ul>
            <li v-for="(x, i) in loc(project.infra)" :key="i">{{ x }}</li>
          </ul>
        </article>

        <article v-if="project.results && loc(project.results)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.results') }}</h2>
          <ul>
            <li v-for="(r, i) in loc(project.results)" :key="i">{{ r }}</li>
          </ul>
        </article>

        <article v-if="project.tradeoffs && loc(project.tradeoffs)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.tradeoffs') }}</h2>
          <ul>
            <li v-for="(t2, i) in loc(project.tradeoffs)" :key="i">{{ t2 }}</li>
          </ul>
        </article>

        <article v-if="project.lessons && loc(project.lessons)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.lessons') }}</h2>
          <ul>
            <li v-for="(l, i) in loc(project.lessons)" :key="i">{{ l }}</li>
          </ul>
        </article>

        <article v-if="project.future && loc(project.future)?.length" class="prose-portfolio">
          <h2>{{ $t('caseStudy.future') }}</h2>
          <ul>
            <li v-for="(f, i) in loc(project.future)" :key="i">{{ f }}</li>
          </ul>
        </article>
      </div>

      <div class="mt-14 flex justify-center">
        <NuxtLink :to="localePath('/work')" class="btn-ghost">
          <ArrowLeft class="h-4 w-4" />
          {{ $t('common.back') }}
        </NuxtLink>
      </div>
    </div>
  </section>

  <section v-else class="section">
    <div class="container-page text-center">
      <p class="text-text-secondary">Project not found.</p>
      <NuxtLink :to="localePath('/work')" class="link mt-4 inline-block">← Back</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'
import { projects } from '~/data/projects'
import { useI18n } from 'vue-i18n'
import mermaid from 'mermaid'

const route = useRoute()
const { locale, t } = useI18n()

const project = computed(() => projects.find((p) => p.slug === route.params.slug))

const loc = (field: any) =>
  typeof field === 'object' && field !== null && !Array.isArray(field)
    ? (field[locale.value] ?? field.en ?? field)
    : field

usePageSeo(() => ({
  title: project.value ? t('seo.caseStudy', { name: project.value.name }) : t('seo.work'),
  description: project.value ? loc(project.value.description) : t('seo.workDesc'),
  type: 'article',
}))
const localePath = useLocalizedPath()

const mermaidRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!project.value?.architectureMermaid || !mermaidRef.value) return
  const colorMode = useColorMode()
  mermaid.initialize({
    startOnLoad: false,
    theme: colorMode.value === 'dark' ? 'dark' : 'default',
    securityLevel: 'strict',
  })
  try {
    const { svg } = await mermaid.render(`m-${project.value.slug}`, project.value.architectureMermaid)
    if (mermaidRef.value) mermaidRef.value.innerHTML = svg
  } catch (e) {
    console.error(e)
  }
})
</script>
