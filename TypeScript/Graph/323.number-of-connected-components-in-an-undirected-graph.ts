function countComponents(n: number, edges: number[][]): number {
  let root = [...Array(n).keys()]
  function find(x: number) {
    while (x !== root[x]) {
      x = root[x] = root[root[x]]
    }
    return x
  }
  let res = n
  for (let [a, b] of edges) {
    let ra = find(a)
    let rb = find(b)
    console.log(ra,rb,root)
    if (ra !== rb) {
      --res
      root[ra] = rb
    }
  }
  return res
}
console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
)
