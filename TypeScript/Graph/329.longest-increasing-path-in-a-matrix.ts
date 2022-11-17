function longestIncreasingPath(matrix: number[][]): number {
  let m = matrix.length
  let n = matrix[0].length
  if (m == 0) {
    return 0
  }
  let cache = Array.from({ length: m }, () => Array<number>(n).fill(0))
  let res = 1
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      res = Math.max(res, dfs(i, j))
    }
  }
  return res
  function dfs(i: number, j: number) {
    if (cache[i][j] !== 0) {
      return cache[i][j]
    }
    let max = 1
    for (let [dx, dy] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      let x = i + dx
      let y = j + dy
      if (
        Math.min(x, y) < 0 ||
        x >= m ||
        y >= n ||
        matrix[x][y] <= matrix[i][j]
      ) {
        continue
      }
      let len = 1 + dfs(x, y)
      max = Math.max(len, max)
    }
    cache[i][j] = max
    return max
  }
}
