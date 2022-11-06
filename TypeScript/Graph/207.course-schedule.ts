function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let preMap = Array.from({ length: numCourses }, () => [] as number[])
  for (let [crs, pre] of prerequisites) {
    preMap[crs].push(pre)
  }
  let visited = new Set<number>()
  for (let crs = 0; crs < numCourses; ++crs) {
    if (!dfs(crs)) {
      return false
    }
  }
  return true
  function dfs(crs: number) {
    if (visited.has(crs)) return false
    if (preMap[crs].length === 0) return true
    visited.add(crs)
    for (let pre of preMap[crs]) {
      if (!dfs(pre)) {
        return false
      }
    }
    visited.delete(crs)
    preMap[crs] = []
    return true
  }
}
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
)
