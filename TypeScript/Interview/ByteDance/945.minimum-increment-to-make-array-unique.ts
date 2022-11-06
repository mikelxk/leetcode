function minIncrementForUnique(nums: number[]): number {
  let res = nums[0],
    prev = nums[0]
  let n = nums.length
  for (let i = 1; i < n; ++i) {
    if (nums[i] === prev) {
      ++prev
      res += prev
    } else {
      res += nums[i]
      prev = nums[i]
    }
  }
  return res
}
console.log(minIncrementForUnique([1, 2, 2]))
