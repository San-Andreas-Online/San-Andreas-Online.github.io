import { createI18n } from 'vue-i18n'

export const localeDefinitions = {
  en: {
    label: 'English',
    load: () => import('../locales/en.json')
  },
  fr: {
    label: 'Français',
    load: () => import('../locales/fr.json')
  },
  pt: {
    label: 'Português',
    load: () => import('../locales/pt.json')
  },
  ja: {
    label: '日本語',
    load: () => import('../locales/ja.json')
  },
  es: {
    label: 'Español',
    load: () => import('../locales/es.json')
  },
  it: {
    label: 'Italiano',
    load: () => import('../locales/it.json')
  }
}

const defaultLocale = ((navigator.language || 'en').split('-')[0]) || 'en'
const fallbackLocale = 'en'

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

  const loader = localeDefinitions[locale]?.load
  if (!loader) {
    return false
  }

  const messages = await loader()
  i18n.global.setLocaleMessage(locale, messages.default || messages)
  return true
}

export async function setLocale(locale) {
  const targetLocale = localeDefinitions[locale] ? locale : fallbackLocale
  const loaded = await loadLocaleMessages(targetLocale)

  if (!loaded) {
    console.warn(`Locale ${locale} not available.`)
    return
  }

  if (typeof i18n.global.locale === 'object') {
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