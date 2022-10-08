type soduSet = { [key: number]: Set<string> }
function isValidSudoku(board: string[][]): boolean {
  const rows: soduSet = {}
  const cols: soduSet = {}
  const squares: soduSet = {}

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      const num = board[i][j]
      if (num === ".") {
        continue
      }
      const grid = `${Math.floor(i / 3)}${Math.floor(j / 3)}`
      if (!cols[j]) {
        cols[j] = new Set()
      }
      if (!rows[i]) {
        rows[i] = new Set()
      }
      if (!squares[grid]) {
        squares[grid] = new Set()
      }
      if (rows[i].has(num) || cols[j].has(num) || squares[grid].has(num)) {
        return false
      }
      cols[j].add(num)
      rows[i].add(num)
      squares[grid].add(num)
    }
  }
  return true
}
