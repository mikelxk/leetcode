function jump(nums: number[]): number {
  let res = 0,
    currEnd = 0,
    farthest = 0
  for (let i = 0; i < nums.length; ++i) {
    farthest = Math.max(farthest, i + nums[i])
    if (i == currEnd) {
      ++res
      currEnd = farthest
    }
  }
  return res
}
