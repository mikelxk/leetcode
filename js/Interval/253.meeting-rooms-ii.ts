function minMeetingRooms(intervals: number[][]): number {
  let start = intervals.map(i => i[0]).sort((a, b) => a - b)
  let end = intervals.map(i => i[1]).sort((a, b) => a - b)
  let [res, cnt] = [0, 0]
  let [s, e] = [0, 0]
  while (s < intervals.length) {
    if (start[s] < end[e]) {
      ++s
      ++cnt
    } else {
      ++e
      --cnt
    }
    res = Math.max(res, cnt)
  }
  return res
}
