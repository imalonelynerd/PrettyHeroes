export class ObjectStructure {
  constructor(object) {
    this.m = new Map()
    if (object !== undefined && object !== null && object.constructor === Object)
      Object.keys(object)
        .sort()
        .forEach((e) => this.m.set(String(e), new ObjectStructure(object[e])))
  }

  isLeaf() {
    return this.m.size === 0
  }

  toString() {
    return '=====\n' + this._str(0) + '====='
  }

  _arr() {
    return Array.from(this.m.keys()).sort()
  }

  _str(indent = 0) {
    let indentString = ' '.repeat(indent)
    let returnString = ''
    this.m.forEach((v, k) => {
      returnString += `${indentString}${k} => ${v.isLeaf() ? '_\n' : '\n' + v._str(indent + 1)}`
    })
    return returnString
  }

  isEqualTo(other) {
    if (other === undefined) return false
    if (other === null) return false
    let thisKeysArray = this._arr()
    let otherKeysArray = other._arr()
    for (let e in thisKeysArray) if (thisKeysArray[e] !== otherKeysArray[e]) return false
    for (let [k, v] of this.m) if (!v.isEqualTo(other.m.get(k))) return false
    return true
  }
}
