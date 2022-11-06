function exist(board: string[][], word: string): boolean {
  const [rows, cols] = [board.length, board[0].length]
  const path = new Set<string>()
  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      if (dfs(r, c, 0)) {
        return true
      }
    }
  }
  return false
  function dfs(r: number, c: number, i: number) {
    if (i === word.length) return true
    if (
      Math.min(r, c) < 0 ||
      r >= rows ||
      c >= cols ||
      word[i] !== board[r][c] ||
      path.has(`r${r}c${c}`)
    )
      return false

    path.add(`r${r}c${c}`)
    let res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1)
    path.delete(`r${r}c${c}`)
    return res
  }
}
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
)
