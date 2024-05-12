export const isTagInObj = (obj, tag) => Object.prototype.hasOwnProperty.call(obj, tag)

export function isValidHexColor(clr) {
  return new RegExp(
    '^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{8}|[0-9a-fA-F]{3}|[0-9a-fA-F]{4})$',
    'gmi'
  ).test(clr)
}

export function isTagsInObject(obj, tags) {
  for (let e of tags) {
    if (!isTagInObj(obj, e)) return false
  }
  return true
}

export function hasSameStructure(o1, o2) {
  // https://stackoverflow.com/a/41802431
  if ((o1 === null && o2 === null) || (o1 instanceof Array && o2 instanceof Array)) return true
  const o1keys = o1 === null ? new Set() : new Set(Object.keys(o1))
  const o2keys = o2 === null ? new Set() : new Set(Object.keys(o2))
  if (o1keys.size !== o2keys.size) return false
  for (const key of o1keys) {
    if (!o2keys.has(key)) return false
    const v1 = o1[key]
    const v2 = o2[key]
    if (v1 instanceof Object) {
      if (v2 instanceof Object && !hasSameStructure(v1, v2)) {
        return false
      }
    } else if (v2 instanceof Object) {
      return false
    }
  }
  return true
}

export function isLinksArrayValid(links = []) {
  for (let e of links) {
    if (!(isTagInObj(e, 'title') && isTagInObj(e, 'url'))) return false
  }
  return true
}
