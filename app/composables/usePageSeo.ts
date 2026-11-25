interface SeoOptions {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
  image?: string
  noindex?: boolean
}

export function usePageSeo(getOpts: () => SeoOptions) {
  const { locale, defaultLocale } = useI18n()
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = computed(() => (config.public.siteUrl || 'http://localhost:3000').replace(/\/$/, ''))

  const opts = computed(getOpts)

  const cleanPath = computed(() => {
    const p = opts.value.path ?? route.path
    return p.startsWith('/') ? p : `/${p}`
  })

  const defaultLocaleCode = computed(() => (defaultLocale ?? 'es') as string)

  const localizedPaths = computed(() => {
    const out: Record<string, string> = {}
    for (const code of ['es', 'en'] as const) {
      const prefix = code === defaultLocaleCode.value ? '' : `/${code}`
      out[code] = cleanPath.value === '/' ? (prefix || '/') : `${prefix}${cleanPath.value}`
    }
    return out
  })

  const canonical = computed(() => `${siteUrl.value}${localizedPaths.value[locale.value as 'es' | 'en'] ?? cleanPath.value}`)
  const image = computed(() => {
    const img = opts.value.image
    return img ? `${siteUrl.value}${img}` : `${siteUrl.value}/og/default.png`
  })

  const title = computed(() => opts.value.title)
  const description = computed(() => opts.value.description)

  const ogLocale = computed(() => (locale.value === 'es' ? 'es_CL' : 'en_US'))
  const ogLocaleAlternate = computed(() => (locale.value === 'es' ? 'en_US' : 'es_CL'))

  useSeoMeta({
    title,
    description,
    robots: computed(() => (opts.value.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')),
    ogType: computed(() => opts.value.type ?? 'website'),
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogImage: image,
    ogSiteName: 'Jorge Román Palma',
    ogLocale,
    ogLocaleAlternate: computed(() => [ogLocaleAlternate.value]),
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  })

  useHead({
    title,
    link: computed<any[]>(() => [
      { rel: 'canonical', href: canonical.value },
      ...(['es', 'en'] as const).map((code) => ({
        rel: 'alternate',
        hreflang: code === 'es' ? 'es' : 'en',
        href: `${siteUrl.value}${localizedPaths.value[code]}`,
      })),
      { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl.value}${localizedPaths.value[defaultLocaleCode.value as 'es' | 'en']}` },
    ]),
  })
}
