import { t as preT } from 'svelte-i18n'
import { derived } from 'svelte/store'
import type { I18NData } from './dictionaries/en-US'
import { DEFAULT_LOCALE, LOCALES, type Locale } from './dictionaries'

type I18N_Id<E extends Record<string, any>> =
  E extends Record<infer K, any>
    ? K extends string
      ? E[K] extends Record<infer KK, string | object>
        ? KK extends string
          ? E[K][KK] extends Record<infer KKK, string>
            ? KKK extends string
              ? `${K}.${KK}.${KKK}`
              : `${K}.${KK}`
            : `${K}.${KK}`
          : K
        : K
      : never
    : never

type I18N_Options = {
  locale?: string
  format?: string
  default?: Record<string, any> | undefined
  values?: Record<string, any> | undefined
}

type TFunction = (id: I18N_Id<I18NData>, opt?: I18N_Options) => string

let tFunction: TFunction

export const t = derived<typeof preT, TFunction>(preT, ($t, set) => {
  set((id, options) => $t(id, options as any))
})

export const _ = t

t.subscribe(($t) => (tFunction = $t))

export const translate: TFunction = (...args) => tFunction?.(...args)

export function safeLocale(locale: string = '*') {
  if (
    /^[a-z]{2,2}(?:\-[a-zA-Z]{2,2})?$/.test(locale) &&
    LOCALES.includes(locale as Locale)
  ) {
    return locale as Locale
  }
  return DEFAULT_LOCALE
}
