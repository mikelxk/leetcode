function centerMatrix(matrix: number[][]) {
  let n = matrix.length
  let m = matrix[0].length
  let center: [number, number]
  let maxSize = 0
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (matrix[i][j] === 1) {
        let currSize = 1
        while (
          validOne(i - currSize, j - currSize) &&
          validOne(i + currSize, j - currSize) &&
          validOne(i - currSize, j + currSize) &&
          validOne(i + currSize, j + currSize)
        ) {
          ++currSize
        }
        if (currSize >= maxSize) {
          if (currSize === maxSize) {
            let [oldI, oldJ] = center
            if (oldI <= i && oldJ <= j) {
              continue
            }
          }
          center = [i, j]
          maxSize = currSize
        }
      }
    }
  }
  return [center, maxSize]
  function validOne(r: number, c: number) {
    return r >= 0 && r < n && c >= 0 && c < m && matrix[r][c] === 1
  }
}
function test1() {
  console.log(
    centerMatrix([
      [1, 0, 1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0, 0, 1],
    ])
  )
}
function test2() {
  console.log(
    centerMatrix([
      [1, 1],
      [1, 1],
    ])
  )
}
test2()
