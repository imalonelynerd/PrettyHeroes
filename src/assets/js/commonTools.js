import { Color, Solver } from '@/assets/js/classTools/FilterSolver.js'

export function isTagInObj(obj, tag) {
  return Object.prototype.hasOwnProperty.call(obj, tag)
}

export function isValidHexColor(clr) {
  return new RegExp(
    '^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{8}|[0-9a-fA-F]{3}|[0-9a-fA-F]{4})$',
    'gmi'
  ).test(clr)
}

export function isTagsInObject(obj, tags) {
  for (let e of tags) if (!isTagInObj(obj, e)) return false
  return true
}

export function isLinksArrayValid(links = []) {
  for (let e of links) if (!(isTagInObj(e, 'title') && isTagInObj(e, 'url'))) return false
  return true
}

export function getFilter(hex) {
  let solver = new Solver(new Color(hex))
  return solver.solve().filter
}
