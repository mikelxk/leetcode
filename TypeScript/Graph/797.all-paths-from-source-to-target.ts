function allPathsSourceTarget(graph: number[][]): number[][] {
  let target = graph.length - 1
  let res: number[][] = []
  dfs(0, [0])
  return res
  function dfs(curr: number, path: number[]) {
    if (curr === target) {
      res.push(path)
      return
    }
    for (let next of graph[curr]) {
      dfs(next, [...path, next])
    }
  }
}
console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))
