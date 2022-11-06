function merge(intervals: number[][]): number[][] {
  let sortedInt = [...intervals].sort(([a], [b]) => a - b)
  let res = [sortedInt[0]]
  for (const [start, end] of sortedInt.slice(1)) {
    let lastEnd = res.at(-1)[1]
    if (start <= lastEnd) {
      res.at(-1)[1] = Math.max(lastEnd, end)
    } else {
      res.push([start, end])
    }
  }
  return res
}
