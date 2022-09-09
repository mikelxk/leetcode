function minimalKSum(nums: number[], k: number): number {
  let res = (k * (k + 1)) / 2
  let a = Array.from(new Set(nums)).sort((a, b) => a - b)
  for (const n of a) {
    if (n <= k) {
      ++k
      res = res - n + k
    }
  }
  return res
}
function minimalKSum2(nums: number[], k: number) {
  nums.sort((a, b) => a - b)
  let res = 0,
    n = nums.length
  for (let i = 0; i < n && k != 0; ++i) {
    let prev = i == 0 ? 0 : nums[i - 1]
    let cnt = Math.min(k, Math.max(0, nums[i] - prev - 1))
    k -= cnt
    res += ((prev + 1 + prev + cnt) * cnt) / 2
  }
  if (k > 0) {
    res += ((nums[n - 1] + 1 + nums[n - 1] + k) * k) / 2
  }
  return res
}

