function checkSubarraySum(nums: number[], k: number): boolean {
  let map = new Map([[0, 0]])
  let s = 0
  for (let i = 0; i < nums.length; ++i) {
    s += nums[i]
    let mod = s % k
    if (!map.has(mod)) {
      map.set(mod, i + 1)
    } else if (map.get(mod) < i) {
      return true
    }
  }
  return false
}
