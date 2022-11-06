function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort(([aStart], [bStart]) => aStart - bStart)
  let prev = intervals.shift()
  for (const curr of intervals) {
    const [prevStart, prevEnd] = prev
    const [currStart, currEnd] = curr
    if (currStart < prevEnd) {
      return false
    }
    prev = curr
  }
  return true
}
