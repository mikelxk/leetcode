function minTaps(n: number, ranges: number[]): number {
  let nums = new Array<number>(ranges.length)
  for (let i = 0; i <= n; ++i) {
    let s = Math.max(0, i - ranges[i])
    nums[s] = Math.max(nums[s], i + ranges[i])
  }
  let res = 0,
    l = 0,
    e = 0
  for (let i = 0; i < n; ++i) {
    if (i > e) return -1
    if (i > l) {
      ++res
      l = e
    }
    e = Math.max(e, nums[i])
  }
  return res
}
