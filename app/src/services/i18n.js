import { createI18n } from 'vue-i18n'

const defaultLocale = ((navigator.language || 'en').split('-')[0]) || 'en'
const fallbackLocale = 'en'

const localeLoaders = {
  en: () => import('../locales/en.json'),
  fr: () => import('../locales/fr.json'),
  pt: () => import('../locales/pt.json'),
  ja: () => import('../locales/ja.json'),
  es: () => import('../locales/es.json'),
  it: () => import('../locales/it.json')
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: defaultLocale,
  fallbackLocale,
  messages: {}
})

async function loadLocaleMessages(locale) {
  if (i18n.global.availableLocales.includes(locale)) {
    return true
  }

  const loader = localeLoaders[locale]
  if (!loader) {
    return false
  }

  const messages = await loader()
  i18n.global.setLocaleMessage(locale, messages.default || messages)
  return true
}

export async function setLocale(locale) {
  const targetLocale = Object.prototype.hasOwnProperty.call(localeLoaders, locale)
    ? locale
    : fallbackLocale

  const loaded = await loadLocaleMessages(targetLocale)
  if (!loaded) {
    console.warn(`Locale ${locale} not available.`)
    return
  }

  if (i18n.global.locale && typeof i18n.global.locale === 'object') {
    i18n.global.locale.value = targetLocale
  } else {
    i18n.global.locale = targetLocale
  }
}

export async function initI18n() {
  await loadLocaleMessages(fallbackLocale)
  await setLocale(defaultLocale)
}

export default i18n
