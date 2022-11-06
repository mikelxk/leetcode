function maxAreaOfIsland(grid: number[][]): number {
  let row = grid.length
  let col = grid[0].length
  let seen: boolean[][] = Array.from(Array(row), () =>
    new Array(col).fill(false)
  )
  let res = 0
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      res = Math.max(res, area(i, j))
    }
  }
  return res
  function area(r: number, c: number) {
    if (
      Math.min(r, c) < 0 ||
      r >= row ||
      c >= col ||
      seen[r][c] ||
      grid[r][c] === 0
    ) {
      return 0
    }
    seen[r][c] = true
    return 1 + area(r + 1, c) + area(r - 1, c) + area(r, c - 1) + area(r, c + 1)
  }
}
