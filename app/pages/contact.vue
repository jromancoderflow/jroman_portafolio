<template>
  <section class="section">
    <div class="container-page max-w-3xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="section-eyebrow">Contact</p>
        <h1 class="section-title">{{ $t('contact.title') }}</h1>
        <p class="mt-4 text-text-secondary">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-2">
        <div class="card p-6">
          <div class="flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
              <CircleDot class="h-5 w-5" />
            </span>
            <div>
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary">
                {{ $t('contact.availability') }}
              </p>
              <p class="mt-0.5 font-semibold">{{ profile.availability }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <div class="flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
              <MapPin class="h-5 w-5" />
            </span>
            <div>
              <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary">
                {{ $t('contact.location') }}
              </p>
              <p class="mt-0.5 font-semibold">{{ profile.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-5 p-7">
        <p class="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Links</p>

        <div v-if="visibleSocials.length || email" class="mt-4 flex flex-col gap-2">
          <a
            v-for="link in visibleSocials"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            {{ link.label }}
            <ArrowUpRight class="h-4 w-4" />
          </a>
          <a
            v-if="email"
            :href="`mailto:${email}`"
            class="flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            {{ email }}
            <ArrowUpRight class="h-4 w-4" />
          </a>
        </div>
        <p v-else class="mt-4 text-sm text-text-secondary">{{ $t('contact.noSocial') }}</p>

        <p v-if="!email" class="mt-4 text-sm text-text-secondary">{{ $t('contact.noEmail') }}</p>

        <a v-if="cvUrl" :href="cvUrl" target="_blank" rel="noopener" class="btn-primary mt-6">
          <Download class="h-4 w-4" />
          {{ $t('contact.downloadCv') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CircleDot, MapPin, ArrowUpRight, Download } from 'lucide-vue-next'
import { profile } from '~/config/profile'
import { socialLinks, cvUrl, email } from '~/config/social'

const visibleSocials = computed(() => socialLinks.filter((l) => l.url))

const { t } = useI18n()
usePageSeo(() => ({
  title: t('seo.contact'),
  description: t('seo.contactDesc'),
}))
</script>
