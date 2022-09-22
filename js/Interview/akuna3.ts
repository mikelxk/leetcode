function findMaxVisitScore(siteScores, trainRoutes) {
  let n = siteScores.length
  let adj: Array<Array<[number, number]>> = new Array(n)
  for (let i = 0; i < n; ++i) {
    adj[i] = []
  }
  for (const [start, dest] of trainRoutes) {
    adj[start].push([dest, siteScores[dest]])
  }

  let max = -1
  let visited = new Array(n).fill(false)
  for (let i = 0; i < n; ++i) {
    dfs(i, 1, siteScores[i])
  }
  function dfs(s, depth, sum) {
    visited[s] = true
    if (depth == 4) {
      max = Math.max(max, sum)
      visited.fill(false)
      return
    }
    for (const [dest] of adj[s]) {
      if (!visited[dest]) {
        ++depth
        dfs(dest, depth, sum + siteScores[dest])
        --depth
      }
    }
    visited[s] = false
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
let a = findMaxVisitScore(score, route)
console.log(a)
let s1 = [90, 90, 90, 90]
let r1 = [
  [0, 1],
  [2, 1],
  [1, 3],
  [1, 2],
]
console.log(findMaxVisitScore(s1, r1))
