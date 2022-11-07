function applyOperations(nums: number[]): number[] {
  let n = nums.length
  for (let i = 0; i < n - 1; ++i) {
    if (nums[i] == nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }
  let zero = nums.filter(n => n === 0)
  let notZero = nums.filter(n => n !== 0)
  return [...notZero,...zero]
}
console.log(applyOperations([1, 2, 2, 1, 1, 0]))
