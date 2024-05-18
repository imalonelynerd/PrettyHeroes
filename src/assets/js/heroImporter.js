import {getGenericHero, getHeroStructure} from '@/assets/js/heroFactory.js'
import JsYaml from 'js-yaml'
import {isLinksArrayValid, isValidHexColor} from '@/assets/js/commonTools.js'
import {ObjectStructure} from '@/assets/js/classTools/ObjectStructure.js'

export async function fetchData(url) {
    let res = await fetch(url)
    return (!res.ok) ? null : await res.text()
}

export function convertDataToObject(fileContent) {
    try {
        return JsYaml.load(fileContent)
    } catch (e) {
        return null
    }
}

export function convertObjectToHero(heroObject) {
    if (!new ObjectStructure(heroObject).isEqualTo(getHeroStructure())) return null
    if (!(isLinksArrayValid(heroObject.online.videos) && isLinksArrayValid(heroObject.online.links)))
        return null
    for (let e of ['background', 'widget', 'hover', 'title', 'text'])
        if (!isValidHexColor(heroObject.colors[e])) heroObject.colors[e] = getGenericHero().colors[e]
    heroObject.about.desc = heroObject.about.desc.replace(/\\n/gim, '\n')
    return heroObject
}
