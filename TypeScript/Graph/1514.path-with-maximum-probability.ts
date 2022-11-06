
//bellman ford(TLE)
function maxProbabilityBF(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number
): number {
  let dist = new Array<number>(n).fill(0)
  dist[start] = 1
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < edges.length; ++j) {
      let [src, dest] = edges[j]
      dist[dest] = Math.max(dist[dest], dist[src] * succProb[j])
      dist[src] = Math.max(dist[src], dist[dest] * succProb[j])
    }
  }
  return dist[end]
}

//floyd warshall(TLE)
function maxProbabilityFW(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number
): number {
  let dist = Array.from({ length: n }, () => Array<number>(n).fill(0))
  for (let i = 0; i < edges.length; ++i) {
    let [src, dest] = edges[i]
    dist[src][dest] = succProb[i]
    dist[dest][src] = succProb[i]
  }
  for (let i = 0; i < n; ++i) {
    dist[i][i] = 1
  }
  for (let k = 0; k < n; ++k) {
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        dist[i][j] = Math.max(dist[i][j], dist[i][k] * dist[k][j])
      }
    }
  }
  return dist[start][end]
}
console.log(
  maxProbabilityBF(
    5,
    [
      [1, 4],
      [2, 4],
      [0, 4],
      [0, 3],
      [0, 2],
      [2, 3],
    ],
    [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
    3,
    4
  )
)
