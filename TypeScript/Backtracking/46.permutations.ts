function permute(nums: number[]): number[][] {
  let n = nums.length
  let res: number[][] = []
  backtrack(0)
  return res
  function backtrack(first: number) {
    if (first == n) {
      res.push([...nums])
    }
    for (let i = first; i < n; ++i) {
      ;[nums[first], nums[i]] = [nums[i], nums[first]]
      backtrack(first + 1)
      ;[nums[first], nums[i]] = [nums[i], nums[first]]
    }
  }
}
console.log(permute([0,1]))