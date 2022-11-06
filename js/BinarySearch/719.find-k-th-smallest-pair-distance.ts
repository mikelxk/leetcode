function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b)
  let low = 0
  let hi = nums.at(-1) - nums[0]
  while (low < hi) {
    let mid = Math.floor((low + hi) / 2)
    let count = 0,
      left = 0,
      right = 0
    for (; right < nums.length; ++right) {
      while (nums[right] - nums[left] > mid) left++
      count += right - left
    }
    if (count >= k) hi = mid
    else low = mid + 1
  }
  return low
}
console.log(smallestDistancePair([1, 3, 1], 1))
