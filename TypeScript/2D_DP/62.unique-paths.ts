function uniquePaths(m: number, n: number): number {
  let grid = Array.from(Array(m), () => new Array(n))
  grid[0].fill(1)
  for (let row of grid) {
    row[0] = 1
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
    }
  }
  return grid.at(-1).at(-1)
}
console.log(uniquePaths(3, 2))
