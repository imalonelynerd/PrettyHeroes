import hostInfo from '@/assets/data/host-info.json'

export const changeLocation = (href: string, newTab = true) => {
  const a = document.createElement('a')
  a.href = href
  if (newTab) {
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
  }
  a.click()
}

const colorChecker = new RegExp('^#(?:[0-9a-f]{6}|[0-9a-f]{8}|[0-9a-f]{3}|[0-9a-f]{4})$', 'i')

const cssChecker = new RegExp('^var\\(--[a-z0-9]+\\)$', 'i')

export const isValidHexColor = (clr: string) => colorChecker.test(clr)

export const isValidCssVariable = (clr: string) => cssChecker.test(clr)

export const isValidColorName = (clr: string) => isValidHexColor(clr) || isValidCssVariable(clr)

export const isValidString = (object: any, key: string): boolean =>
  key in object && typeof object[key] === 'string'

export const isValidBoolean = (object: any, key: string): boolean =>
  key in object && typeof object[key] === 'boolean'

export const isValidArray = (object: any, key: string): boolean =>
  key in object && Array.isArray(object[key])

export const isValidColor = (object: any, key: string): boolean =>
  key in object && isValidHexColor(object[key])

export const getEventValue = (event: any): string => (event.target ? event.target.value : '')

export const getCommonFilter = (): string => hostInfo.mainColor
