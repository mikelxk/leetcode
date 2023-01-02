function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort(([a], [b]) => a - b)
  let res = 0
  let prevEnd = intervals[0][1]
  for (let [start, end] of intervals.slice(1)) {
    if (start >= prevEnd) {
      prevEnd = end
    } else {
      ++res
      prevEnd = Math.min(end, prevEnd)
    }
  }
  return res
}
