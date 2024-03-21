export function getFirstIfPossible(el: any) {
  return Array.isArray(el) ? el[0] : el
}

export function toArrayIfPossible<E>(el: E) {
  return Array.isArray(el) ? el : [el]
}

export function filterSearch(search: string, props: (string | string[])[]) {
  const parts = search.trim().split(/\s+/)
  return (item: Record<string, any>) => {
    return parts.every((part) => {
      return props.some((prop) => {
        const safeProp = toArrayIfPossible(prop)
        let value: any = item[safeProp.pop()]
        while (value && safeProp.length) {
          value = value[safeProp.pop()]
        }
        if (!value) return false

        if (Array.isArray(value)) {
          return value.some((v: any) => {
            return v.toString().toLowerCase().includes(part.toLowerCase())
          })
        }
        return value.toString().toLowerCase().includes(part.toLowerCase())
      })
    })
  }
}
