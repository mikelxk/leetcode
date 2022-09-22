function search(nums: number[], target: number): number {
  let n = nums.length
  let [l, r] = [0, n - 1]
  while (l <= r) {
    const mid = (l + r) >> 1
    if (target === nums[mid]) {
      return mid
    }
    if (target > nums[mid]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return -1
}
