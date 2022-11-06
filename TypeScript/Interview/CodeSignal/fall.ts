//Not correct yet!
function fall(tiles: number[][]) {
  let RowCount = tiles.length
  let ColumnCount = tiles[0].length
  for (let r = 0; r < RowCount - 1; r++) {
    for (let c = 0; c < ColumnCount; c++) {
      if (tiles[r + 1][c] == 0 && tiles[r][c] != 0) {
        tiles[r + 1][c] = tiles[r][c]
        tiles[r][c] = 0
        r = 0
        c = 0
      }
    }
  }
  return tiles
}

let r2 = fall([
  [1, 1, 5, 1, 1],
  [1, 2, 0, 0, 0],
  [0, 0, 0, 0, 2],
])
for(let a of r2){
    console.log(a)
}