function sortBinaryNumbers(bitArrays: number[][]) {
  for (let i = 0; i < bitArrays.length; ++i) {
    bitArrays[i].sort((a, b) => b - a)
  }
  let iArr = bitArrays.map((val, i) => [i, ...val])
  iArr.sort((a, b) => {
    let minLen = Math.min(a.length, b.length)
    for (let i = 1; i < minLen; ++i) {
      if (a[i] > b[i]) {
        return -1
      } else if (a[i] < b[i]) {
        return 1
      }
    }
    return b.length - a.length
  })
  return iArr.map(([i]) => i)
}
console.log(
  sortBinaryNumbers([
    [0, 1, 2],
    [4, 1, 0],
    [3, 1, 0],
  ])
)
