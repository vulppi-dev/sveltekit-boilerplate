import { invalidateAll } from '$app/navigation'
import Cookies from 'js-cookie'
import { dictionary, init, locale } from 'svelte-i18n'
import { get } from 'svelte/store'
import { COOKIES_KEYS } from '../constants/keys'

export function setLocale(language?: string | null) {
  locale.set(language)

  if (!language)
    return () => {
      Cookies.remove(COOKIES_KEYS.locale)
      invalidateAll()
    }

  return () => {
    Cookies.set(COOKIES_KEYS.locale, language, {
      expires: 365,
      path: '/',
    })
    invalidateAll()
  }
}

export function getLocale() {
  return get(locale)
}

type InitI18nArgs = {
  locale: string
  defaultLocale: string
}

export function initI18n({
  locale: initialLocale,
  defaultLocale,
}: InitI18nArgs) {
  setLocale(initialLocale)

  init({
    fallbackLocale: defaultLocale,
    initialLocale,
  })
}

type LoadI18nArgs = {
  dictionaries: Record<string, Record<string, any>>
}

export function loadDataI18n({ dictionaries }: LoadI18nArgs) {
  dictionary.set(dictionaries)
}
