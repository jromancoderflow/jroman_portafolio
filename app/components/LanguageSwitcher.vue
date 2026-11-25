<template>
  <div class="relative">
    <button
      type="button"
      class="btn-ghost !px-2.5 !py-2"
      :aria-label="$t('nav.language')"
      :aria-expanded="open"
      @click="open = !open"
    >
      <Globe class="h-[18px] w-[18px]" />
      <span class="hidden text-[11px] font-semibold uppercase sm:inline">{{ locale }}</span>
    </button>

    <div
      v-if="open"
      class="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-xl border border-border bg-surface p-1 shadow-card"
    >
      <button
        v-for="l in locales"
        :key="l.code"
        type="button"
        class="block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-surface-2"
        :class="locale === l.code ? 'font-semibold text-accent' : 'text-text-secondary'"
        @click="switchTo(l.code)"
      >
        {{ l.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Globe } from 'lucide-vue-next'

const { locale, locales, setLocale } = useI18n()
const open = ref(false)

async function switchTo(code: string) {
  await setLocale(code as any)
  open.value = false
}
</script>
