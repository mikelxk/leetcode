function equationsPossible(equations: string[]): boolean {
  let root = [...Array(26).keys()]
  function find(x: number) {
    while (x !== root[x]) {
      x = root[x] = root[root[x]]
    }
    return x
  }
  function findAscii(x: string) {
    return find(x.charCodeAt(0) - 97)
  }
  for (let e of equations.filter(s => s[1] === "=")) {
    let rx = findAscii(e[0])
    let ry = findAscii(e[3])
    root[rx] = ry
  }
  for (let e of equations.filter(s => s[1] === "!")) {
    let rx = findAscii(e[0])
    let ry = findAscii(e[3])
    if (rx === ry) {
      return false
    }
  }
  return true
}
equationsPossible(["a==b", "b!=c", "c==a"])
