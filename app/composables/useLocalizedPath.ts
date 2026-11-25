/**
 * Resolves locale-aware paths for NuxtLink targets.
 *
 * `useLocalePath()` from @nuxtjs/i18n captures the current locale at setup time,
 * which produces stale hrefs when the locale changes or during hydration.
 * This composable derives the path from the reactive locale instead.
 */
export function useLocalizedPath() {
  const { locale, defaultLocale } = useI18n()

  return (path: string): string => {
    if (!path.startsWith('/')) return path
    const isDefault = locale.value === (defaultLocale ?? 'es')
    const prefix = isDefault ? '' : `/${locale.value}`
    if (path === '/') return prefix || '/'
    return `${prefix}${path}`
  }
}
