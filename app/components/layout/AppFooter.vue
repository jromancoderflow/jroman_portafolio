<template>
  <footer class="border-t border-border bg-surface">
    <div class="container-page grid gap-10 py-14 md:grid-cols-3 md:gap-8">
      <!-- CTA -->
      <div>
        <p class="section-eyebrow !text-left">{{ $t('footer.ctaEyebrow') }}</p>
        <h2 class="text-2xl font-bold leading-snug tracking-tight">
          {{ $t('footer.ctaTitle') }}
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-text-secondary">
          {{ $t('footer.ctaBody') }}
        </p>
        <NuxtLink :to="localePath('/contact')" class="btn-primary mt-6">
          {{ $t('footer.ctaButton') }}
          <ArrowUpRight class="h-4 w-4" />
        </NuxtLink>
      </div>

      <!-- Principles (replaces the fake testimonial) -->
      <div class="card p-6">
        <Quote class="h-6 w-6 text-accent" />
        <p class="mt-4 text-sm leading-relaxed text-text-secondary">
          {{ $t('footer.quote') }}
        </p>
        <div class="mt-5 flex items-center gap-3 border-t border-border pt-4">
          <div class="grid h-10 w-10 place-items-center rounded-full bg-accent-soft font-mono text-xs font-bold text-accent">
            JR
          </div>
          <div>
            <p class="text-sm font-semibold">{{ profile.name }}</p>
            <p class="text-xs text-text-secondary">{{ profile.title }}</p>
          </div>
        </div>
      </div>

      <!-- Follow me -->
      <div>
        <p class="section-eyebrow !text-left">{{ $t('footer.follow') }}</p>
        <div class="mt-4 flex items-center gap-3">
          <a
            v-for="link in visibleSocials"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-text-secondary transition-colors hover:border-accent hover:text-accent"
            :aria-label="link.label"
          >
            <Github v-if="link.icon === 'github'" class="h-4 w-4" />
            <Linkedin v-else-if="link.icon === 'linkedin'" class="h-4 w-4" />
            <span v-else class="text-[10px]">{{ link.label }}</span>
          </a>
          <a
            v-if="email"
            :href="`mailto:${email}`"
            class="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-text-secondary transition-colors hover:border-accent hover:text-accent"
            :aria-label="email"
          >
            <Mail class="h-4 w-4" />
          </a>
        </div>

        <dl class="mt-6 space-y-3 text-sm">
          <div class="flex items-start gap-3">
            <dt class="mt-0.5"><MapPin class="h-4 w-4 text-text-secondary" /></dt>
            <dd class="text-text-secondary">{{ profile.location }}</dd>
          </div>
          <div v-if="email" class="flex items-start gap-3">
            <dt class="mt-0.5"><Mail class="h-4 w-4 text-text-secondary" /></dt>
            <dd><a :href="`mailto:${email}`" class="link">{{ email }}</a></dd>
          </div>
          <div class="flex items-start gap-3">
            <dt class="mt-0.5"><CircleDot class="h-4 w-4 text-text-secondary" /></dt>
            <dd class="text-text-secondary">{{ profile.availability }}</dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="border-t border-border">
      <div class="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-text-secondary md:flex-row">
        <p>© {{ year }} {{ profile.name }}. {{ $t('footer.rights') }}</p>
        <p>{{ $t('footer.built') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRight, Quote, Github, Linkedin, Mail, MapPin, CircleDot } from 'lucide-vue-next'
import { profile } from '~/config/profile'
import { socialLinks, email } from '~/config/social'

const localePath = useLocalizedPath()
const year = new Date().getFullYear()
const visibleSocials = computed(() => socialLinks.filter((l) => l.url))
</script>
