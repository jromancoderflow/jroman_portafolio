export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  numberFormats: {
    'en-US': { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 },
    'es-CL': { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 },
  },
}))
