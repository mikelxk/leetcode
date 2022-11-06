function validTree(n: number, edges: number[][]): boolean {
  let parents = [...Array(n).keys()]
  function find(x: number) {
    while (parents[x] !== x) {
      x = parents[x] = parents[parents[x]]
    }
    return x
  }
  for (let [a, b] of edges) {
    let pa = find(a)
    let pb = find(b)
    //cycle
    if (pa === pb) {
      return false
    }
    parents[pa] = pb
  }
  return edges.length === n - 1
}
