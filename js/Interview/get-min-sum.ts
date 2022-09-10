function getMinSum(nums: number[], k: number) {
  let left = 0
  let right = 0
  let maxSum = -1
  let curSum = 0
  while (right < nums.length) {
    curSum += nums[right]
    ++right
    while (right - left === k) {
      if (curSum > maxSum) {
        maxSum = curSum
      }
      curSum -= nums[left]
      ++left
    }
  }
  return nums.reduce((a, b) => a + b, 0) - maxSum
}

console.log(getMinSum([7, 3, 6, 1], 2))
console.log(getMinSum([1, 4, 4, 6, 9, 4], 2))
