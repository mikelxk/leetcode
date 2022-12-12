function sortColors(nums: number[]): void {
  let i = 0,
    j = 0,
    k = nums.length - 1
  while (j <= k) {
    if (nums[j] < 1) {
      ;[nums[j], nums[i]] = [nums[i], nums[j]]
      ++i
      ++j
    } else if (nums[j] > 1) {
      ;[nums[j], nums[k]] = [nums[k], nums[j]]
      --k
    } else {
      ++j
    }
  }
}
