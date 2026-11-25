<template>
  <button
    type="button"
    class="btn-ghost !px-2.5 !py-2"
    :aria-label="$t('theme.toggle')"
    :title="$t('theme.toggle')"
    @click="cycle"
  >
    <ClientOnly>
      <Sun v-if="colorMode.value === 'light'" class="h-[18px] w-[18px]" />
      <Moon v-else-if="colorMode.value === 'dark'" class="h-[18px] w-[18px]" />
      <Monitor v-else class="h-[18px] w-[18px]" />
      <template #fallback>
        <Monitor class="h-[18px] w-[18px]" />
      </template>
    </ClientOnly>
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon, Monitor } from 'lucide-vue-next'

const colorMode = useColorMode()

function cycle() {
  if (colorMode.value === 'system') colorMode.preference = 'light'
  else if (colorMode.preference === 'light') colorMode.preference = 'dark'
  else colorMode.preference = 'system'
}
</script>
