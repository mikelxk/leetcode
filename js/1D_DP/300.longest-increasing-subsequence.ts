function lengthOfLIS(nums: number[]): number {
  let n = nums.length
  let length = new Array(n).fill(1)
  for (let i = 1; i < n; ++i)
    for (let j = 0; j < i; ++j)
      if (nums[i] > nums[j]) length[i] = Math.max(length[i], 1 + length[j])

  return Math.max(...length)
}
