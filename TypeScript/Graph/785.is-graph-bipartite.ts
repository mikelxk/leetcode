function isBipartite(graph: number[][]): boolean {
  let n = graph.length
  let colors = new Array<number>(n).fill(0)
  for (let i = 0; i < n; ++i) {
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false
    }
  }
  return true
  function dfs(v: number, color: number) {
    if (colors[v] !== 0) {
      return colors[v] === color
    }
    colors[v] = color
    for (let nei of graph[v]) {
      if (!dfs(nei, -color)) {
        return false
      }
    }
    return true
  }
}
console.log(
  isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ])
)
export {}