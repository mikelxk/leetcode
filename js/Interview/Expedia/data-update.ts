function getFinalData(data: number[], updates: [number, number][]) {
  let m = new Map<number, number>()
  function incOccur(k: number) {
    if (m.has(k)) {
      m.set(k, m.get(k) + 1)
    } else {
      m.set(k, 1)
    }
  }
  for (let [l, r] of updates) {
    incOccur(l)
    incOccur(r)
  }
  let finalUpdate: number[] = []
  for (let [k, v] of m.entries()) {
    if (v % 2) {
      finalUpdate.push(k)
    }
  }
  for (let n of finalUpdate) {
    data[n - 1] = -data[n - 1]
  }
  return data
}
console.log(
  getFinalData(
    [1, -4, -5, 2],
    [
      [2, 4],
      [1, 2],
    ]
  )
)
