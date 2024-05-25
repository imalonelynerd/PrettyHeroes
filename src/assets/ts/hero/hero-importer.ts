import type { Hero } from '@/assets/ts/hero/hero-factory'
import { load } from 'js-yaml'
import axios from 'axios'
import { isHero } from '@/assets/ts/hero/hero-checker'

export const fetchData = async (url: string): Promise<string> => {
  const res = await axios.get(url)
  if (res.status !== 200) throw new Error(`Axios error, ${res.status} - ${res.statusText}`)
  return (await res.data) as string
}

export const convertDataToObject = (fileContent: string): Object => load(fileContent, {}) as Object

export const convertObjectToHero = (heroObject: Object): Hero => {
  if (!isHero(heroObject)) throw new Error('The given object is not a valid Hero')
  const importedHero = heroObject as Hero
  importedHero.about.desc = importedHero.about.desc.replace(/\\n/gim, '\n')
  return importedHero
}
