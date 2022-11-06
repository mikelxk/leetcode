//Floyd-Warshall
function networkDelayTimeFW(times: number[][], n: number, k: number): number {
  let dist = Array.from({ length: n }, () =>
    new Array<number>(n).fill(Infinity)
  )
  for (let [u, v, w] of times) {
    dist[u - 1][v - 1] = w
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
  let max = Math.max(...dist[k - 1])
  return max !== Infinity ? max : -1
}
//Bellman-Ford
function networkDelayTimeBF(times: number[][], n: number, k: number): number {
  let dist = new Array<number>(n).fill(Infinity)
  dist[k - 1] = 0
  for (let i = 1; i < n; ++i) {
    for (let [u, v, w] of times) {
      dist[v - 1] = Math.min(dist[v - 1], dist[u - 1] + w)
    }
  }
  let max = Math.max(...dist)
  return max !== Infinity ? max : -1
}
//spfa
function networkDelayTimeSPFA(times: number[][], n: number, k: number): number {
  let dist = new Array(n).fill(Infinity)
  dist[k - 1] = 0
  let weight = new Map<number, [number, number][]>()
  for (let [u, v, w] of times) {
    if (!weight.has(u - 1)) {
      weight.set(u - 1, [])
    }
    weight.get(u - 1).push([v - 1, w])
  }
  let queue = [k - 1]
  while (queue.length) {
    let u = queue.shift()
    if (weight.has(u)) {
      for (let [v, w] of weight.get(u)) {
        if (dist[v] > dist[u] + w) {
          dist[v] = dist[u] + w
          queue.push(v)
        }
      }
    }
  }
  let max = Math.max(...dist)
  return max !== Infinity ? max : -1
}
console.log(
  networkDelayTimeSPFA(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
)
