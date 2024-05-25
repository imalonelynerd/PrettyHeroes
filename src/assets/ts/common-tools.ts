import axios from 'axios'

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

export const isValidHexColor = (clr: string) => colorChecker.test(clr)

export const isValidURL = async (url: string) => {
  let ret
  try {
    ret = await axios.get(url)
  } catch (err: any) {
    return false
  }
  return ret.status === 200
}

export const isValidString = (object: any, key: string): boolean =>
  key in object && typeof object[key] === 'string'

export const isValidBoolean = (object: any, key: string): boolean =>
  key in object && typeof object[key] === 'boolean'

export const isValidArray = (object: any, key: string): boolean =>
  key in object && Array.isArray(object[key])

export const isValidColor = (object: any, key: string): boolean =>
  key in object && isValidHexColor(object[key])