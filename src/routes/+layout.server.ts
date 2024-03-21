import { COOKIES_KEYS } from '$lib/constants/keys'
import {
  DEFAULT_LOCALE,
  LOCALES,
  dictionaries,
} from '$lib/locales/dictionaries'
import { getFirstIfPossible } from '$lib/utils/array'
import { safeLocale } from '$lib/locales/i18n'
import Negotiator from 'negotiator'

export async function load({ request, cookies }) {
  const negotiator = new Negotiator({
    headers: Object.fromEntries(request.headers),
  })
  const locale = safeLocale(
    cookies.get(COOKIES_KEYS.locale) ||
      getFirstIfPossible(negotiator.language())
  )

  return {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    locale,
    dictionaries: dictionaries,
  }
}
