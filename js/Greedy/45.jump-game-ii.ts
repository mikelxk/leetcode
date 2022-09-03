function jump(nums: number[]): number {
  let [res, l, r] = [0, 0, 0]
  for (; r < nums.length - 1; ++res) {
    let farthest = 0
    for (let i = l; i < r + 1; ++i) {
      farthest = Math.max(farthest, i + nums[i])
    }
    l = r + 1
    r = farthest
  }
  return res
}
