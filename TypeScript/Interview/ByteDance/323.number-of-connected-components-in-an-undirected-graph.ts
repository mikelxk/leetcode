function countComponents(n: number, edges: number[][]): number {
  if (n == 0) {
    return 0
  }
  let adj = Array.from({ length: n }, () => [] as number[])
  let visited = new Array<boolean>(n).fill(false)
  let maxSize = 0
  for (let [src, dest] of edges) {
    adj[src].push(dest)
    adj[dest].push(src)
  }
  for (let i = 0; i < n; ++i) {
    visited.fill(false)
    dfs(i, 1)
  }
  return maxSize
  function dfs(src: number, size: number) {
    visited[src] = true
    maxSize = Math.max(maxSize, size)
    for (let peer of adj[src]) {
      if (!visited[peer]) {
        dfs(peer, size + 1)
      }
    }
  }
}

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
)
