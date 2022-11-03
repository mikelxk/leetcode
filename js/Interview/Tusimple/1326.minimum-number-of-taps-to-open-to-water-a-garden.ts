function minTaps(n: number, ranges: number[]): number {
  let nums = new Array<number>(ranges.length).fill(0)
  for (let i = 0; i <= n; ++i) {
    let s = Math.max(0, i - ranges[i])
    nums[s] = Math.max(i + ranges[i],nums[s])
  }
  let res = 0,
    currEnd = 0,
    furthest = 0
  for (let i = 0; i <= n; ++i) {
    if (i > furthest) return -1
    if (i > currEnd) {
      ++res
      currEnd = furthest
    }
    furthest = Math.max(furthest, nums[i])
  }
  return res
}
console.log(minTaps(5, [3, 4, 1, 1, 0, 0]))
