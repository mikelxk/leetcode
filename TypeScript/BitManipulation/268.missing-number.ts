function missingNumber(nums: number[]): number {
  return nums.reduce((a, b, i) => a + (i - b), nums.length)
}
