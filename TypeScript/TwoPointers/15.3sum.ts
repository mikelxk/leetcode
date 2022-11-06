function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  let res: number[][] = []
  let n = nums.length
  for (let i = 0; i < n - 2; ++i) {
    if (prevDuplicate(i)) {
      continue
    }
    let [j, k] = [i + 1, n - 1]
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]])
        ++j
        while (prevDuplicate(j) && j < k) {
          ++j
        }
      } else if (sum < 0) {
        ++j
      } else if (sum > 0) {
        --k
      }
    }
  }
  return res
  function prevDuplicate(index: number) {
    return index > 0 && nums[index] === nums[index - 1]
  }
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
