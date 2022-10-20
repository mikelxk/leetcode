function findTheCity(
  n: number,
  edges: number[][],
  distanceThreshold: number
): number {
  let dist = Array.from(Array(n), e => Array(n).fill(Infinity))
  for (let [i, j, w] of edges) {
    dist[i][j] = w
    dist[j][i] = w
  }
  for (let i = 0; i < n; ++i) {
    dist[i][i] = 0
  }
  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
      }
    }
  }
  let city = -1,
    minCity = n
  for (let i = 0; i < n; i++) {
    let count = 0
    for (let j = 0; j < n; j++) {
      if (i == j) continue
      if (dist[i][j] <= distanceThreshold) count++
    }
    if (count <= minCity) {
      minCity = count
      city = i
    }
  }
  return city
}
let res = findTheCity(
  4,
  [
    [0, 1, 3],
    [1, 2, 1],
    [1, 3, 4],
    [2, 3, 1],
  ],
  4
)
console.log(res)
