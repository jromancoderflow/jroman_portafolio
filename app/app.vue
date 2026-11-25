<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jorge Román Palma',
        jobTitle: 'Software Engineer & Technical Lead',
        address: { '@type': 'PostalAddress', addressLocality: 'Santiago', addressCountry: 'CL' },
        url: 'https://jorgeroman.dev',
      }),
    },
  ],
})
</script>
