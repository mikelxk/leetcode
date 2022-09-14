const MAX_DEPTH = 4
function maxScoreVisit(siteScores: number[], trainRoutes: number[][]) {
  let n = siteScores.length
  let adj: [number, number][][] = new Array(n)
  for (const [start, dest] of trainRoutes) {
    if (!adj[start]) {
      adj[start] = []
    }
    adj[start].push([dest, siteScores[dest]])
  }
  let max = -1
  let visited = new Array<boolean>(n)
  for (let i = 0; i < n; ++i) {
    function dfs(s: number, depth: number, sum: number) {
      ++depth
      sum += siteScores[s]
      visited[i] = true
      if (depth === MAX_DEPTH) {
        max = Math.max(max, sum)
        return
      }
      if (!adj[s]) {
        return
      }
      for (const [dest] of adj[s]) {
        if (!visited[dest]) {
          dfs(dest, depth, sum)
        }
      }
    }
    visited.fill(false)
    dfs(i, 0, 0)
  }
  return max
}
let score = [90, 95, 80, 85, 70]
let route = [
  [0, 4],
  [1, 2],
  [2, 3],
  [1, 0],
  [0, 2],
  [4, 3],
]
let a = maxScoreVisit(score, route)
console.log(a)
