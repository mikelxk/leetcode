function minimumCost(n: number, connections: number[][]): number {
  let parent = [...Array(n + 1).keys()]
  function find(x: number) {
    if (parent[x] === x) {
      return parent[x]
    }
    parent[x] = find(parent[x])
    return parent[x]
  }
  let res = 0
  connections.sort((a, b) => a[2] - b[2])
  for (let [x, y, c] of connections) {
    let px = find(x)
    let py = find(y)
    if (px !== py) {
      res += c
      parent[px] = py
      --n
    }
  }
  return n === 1 ? res : -1
}
console.log(
  minimumCost(5, [
    [2, 1, 50459],
    [3, 2, 47477],
    [4, 2, 52585],
    [5, 3, 16477],
  ])
)
