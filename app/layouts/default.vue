<template>
  <div class="flex min-h-screen flex-col bg-background text-text-primary">
    <a
      href="#main"
      class="btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
    >
      {{ $t('nav.skipToContent') }}
    </a>
    <LayoutAppHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
  },
})
</script>
