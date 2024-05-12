import { getEmptyHero, getGenericHero } from '@/assets/js/heroFactory.js'
import JsYaml from 'js-yaml'
import { isValidHexColor, hasSameStructure, isLinksArrayValid } from '@/assets/js/commonTools.js'

export async function fetchData(url) {
  let res = await fetch(url)
  if (!res.ok) return null
  return await res.text()
}

export function convertDataToObject(fileContent) {
  let parsedFile = {}
  try {
    parsedFile = JsYaml.load(fileContent)
    return parsedFile
  } catch (e) {
    return null
  }
}

export function convertObjectToHero(heroObject) {
  if (!hasSameStructure(getEmptyHero(), heroObject)) return null
  if (!(isLinksArrayValid(heroObject.online.videos) && isLinksArrayValid(heroObject.online.links))) return null
  for (let e of ['background', 'widget', 'hover', 'title', 'text']) {
    if (!isValidHexColor(heroObject.colors[e])) {
      heroObject.colors[e] = getGenericHero().colors[e]
    }
  }
  heroObject.about.desc = heroObject.about.desc.replace(/\\n/gim, '\n')
  return heroObject
}
