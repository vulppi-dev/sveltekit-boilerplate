import { enUS } from './en-US'
import { ptBR } from './pt-BR'

export const dictionaries = {
  enUS,
  ptBR,
} as const

export const DEFAULT_LOCALE = 'en-US'

export const LOCALES = Object.keys(dictionaries) as Locale[]

export type Locale = keyof typeof dictionaries
