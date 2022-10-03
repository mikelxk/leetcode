function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let preMap = Array.from({ length: numCourses }, () => [] as number[])
  for (let [crs, pre] of prerequisites) {
    preMap[crs].push(pre)
  }
  let visited = new Set<number>()
  let res: number[] = []
  let cycle = new Set<number>()
  for (let crs = 0; crs < numCourses; ++crs) {
    if (!dfs(crs)) return []
  }
  return res
  function dfs(crs: number) {
    if (cycle.has(crs)) return false
    if (visited.has(crs)) return true
    cycle.add(crs)
    for (let pre of preMap[crs]) {
      if (!dfs(pre)) {
        return false
      }
    }
    cycle.delete(crs)
    visited.add(crs)
    res.push(crs)
    return true
  }
}
