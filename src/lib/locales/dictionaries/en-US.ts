const title = {
  home: 'Home',
} satisfies Record<string, any>

export const enUS = {
  title,
} as const

export type I18NData = typeof enUS
