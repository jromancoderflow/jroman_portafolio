<template>
  <header class="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
    <div class="container-page flex h-16 items-center justify-between gap-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2 font-semibold tracking-tight">
        <span class="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white">
          <Code2 class="h-4 w-4" />
        </span>
        <span class="hidden sm:inline">Jorge&nbsp;Román</span>
        <span class="sm:hidden">JR</span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
        <NuxtLink
          v-for="item in mainNav"
          :key="item.to"
          :to="localePath(item.to)"
          class="relative rounded-lg px-3.5 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          active-class="!text-text-primary after:absolute after:-bottom-0.5 after:left-1/2 after:h-px after:w-6 after:-translate-x-1/2 after:bg-accent"
        >
          {{ $t(item.key) }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />

        <a
          v-for="link in visibleSocials"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="hidden text-text-secondary transition-colors hover:text-accent sm:inline-flex"
          :aria-label="link.label"
        >
          <Github v-if="link.icon === 'github'" class="h-[18px] w-[18px]" />
          <Linkedin v-else-if="link.icon === 'linkedin'" class="h-[18px] w-[18px]" />
          <span v-else class="text-xs">{{ link.label }}</span>
        </a>

        <NuxtLink :to="localePath('/contact')" class="btn-primary hidden !px-4 !py-2 text-[13px] lg:inline-flex">
          {{ $t('nav.hireMe') }}
          <ArrowUpRight class="h-4 w-4" />
        </NuxtLink>

        <button
          type="button"
          class="btn-ghost !px-2.5 !py-2 lg:hidden"
          :aria-label="$t('nav.menu')"
          :aria-expanded="open"
          @click="open = !open"
        >
          <Menu v-if="!open" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <div v-if="open" class="border-t border-border bg-background lg:hidden">
      <nav class="container-page flex flex-col py-3" aria-label="Mobile">
        <NuxtLink
          v-for="item in mainNav"
          :key="item.to"
          :to="localePath(item.to)"
          class="rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-2 hover:text-text-primary"
          @click="open = false"
        >
          {{ $t(item.key) }}
        </NuxtLink>
        <a
          v-if="cvUrl"
          :href="cvUrl"
          class="btn-ghost mt-2"
          target="_blank"
          rel="noopener"
        >
          {{ $t('home.hero.downloadCv') }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, X, Code2, ArrowUpRight, Github, Linkedin } from 'lucide-vue-next'
import { mainNav } from '~/config/navigation'
import { profile } from '~/config/profile'
import { socialLinks, cvUrl } from '~/config/social'

const localePath = useLocalizedPath()
const open = ref(false)

const visibleSocials = computed(() => socialLinks.filter((l) => l.url))
</script>
