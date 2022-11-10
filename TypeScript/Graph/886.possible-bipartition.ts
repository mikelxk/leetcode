function possibleBipartition(n: number, dislikes: number[][]): boolean {
  let root = [...Array(n).keys()]
  function find(x: number) {
    while (x !== root[x]) {
      x = root[x]
    }
    return x
  }
  function union(x: number, y: number) {
    let rx = find(x)
    let ry = find(y)
    if (rx !== ry) {
      root[rx] = ry
    }
  }
  let graph = new Map<number, number[]>()
  function graphInsert(u: number, v: number) {
    if (!graph.has(u)) {
      graph.set(u, [])
    }
    graph.get(u).push(v)
  }
  for (let [a, b] of dislikes) {
    graphInsert(a - 1, b - 1)
    graphInsert(b - 1, a - 1)
  }
  for (let i = 0; i < n; ++i) {
    let pi = find(i)
    let neighbors = graph.get(pi)
    if (neighbors && neighbors.length !== 0) {
      let [first] = neighbors
      for (let nei of neighbors) {
        if (find(nei) === find(i)) {
          return false
        }
        union(first, nei)
      }
    }
  }
  return true
}
console.log(possibleBipartition(1, []))
