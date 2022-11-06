function candyCrush(board: number[][]): number[][] {
  let r = board.length,
    c = board[0].length
  let todo = false
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j + 2 < c; ++j) {
      let v1 = Math.abs(board[i][j])
      let v2 = Math.abs(board[i][j + 1])
      let v3 = Math.abs(board[i][j + 2])
      if (v1 != 0 && v1 == v2 && v1 == v3) {
        board[i][j] = -v1
        board[i][j + 1] = -v1
        board[i][j + 2] = -v1
        todo = true
      }
    }
  }
  for (let i = 0; i + 2 < r; ++i) {
    for (let j = 0; j < c; ++j) {
      let v1 = Math.abs(board[i][j])
      let v2 = Math.abs(board[i + 1][j])
      let v3 = Math.abs(board[i + 2][j])
      if (v1 != 0 && v1 == v2 && v1 == v3) {
        board[i][j] = -v1
        board[i + 1][j] = -v1
        board[i + 2][j] = -v1
        todo = true
      }
    }
  }
  for (let j = 0; j < c; ++j) {
    let wr = r - 1
    for (let i = r - 1; i >= 0; --i)
      if (board[i][j] > 0) board[wr--][j] = board[i][j]
    while (wr >= 0) board[wr--][j] = 0
  }
  return todo ? candyCrush(board) : board
}
