function minCostConnectPoints(points: number[][]): number {
  let edges: [number, number, number][] = []
  let n = points.length
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      let [ix, iy] = points[i]
      let [jx, jy] = points[j]
      let weight = Math.abs(ix - jx) + Math.abs(iy - jy)
      edges.push([weight, i, j])
    }
  }
  edges.sort(([a], [b]) => a - b)
  let parent = [...Array(n).keys()]
  function find(x: number) {
    while (x !== parent[x]) {
      x = parent[x] = parent[parent[x]]
    }
    return x
  }
  let res = 0
  let usedEdges = 0
  for (let [w, i, j] of edges) {
    if (usedEdges >= n - 1) {
      break
    }
    let pi = find(i)
    let pj = find(j)
    if (pi !== pj) {
      res += w
      parent[pi] = pj
      ++usedEdges
    }
  }
  return res
}
console.log(
  minCostConnectPoints([
    [-14, -14],
    [-18, 5],
    [18, -10],
    [18, 18],
    [10, -2],
  ])
)
