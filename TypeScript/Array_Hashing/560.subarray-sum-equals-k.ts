function subarraySum(nums: number[], k: number): number {
  let res = 0,
    sum = 0
  let map = new Map<number, number>([[0, 1]])
  for (let n of nums) {
    sum += n
    if (map.has(sum - k)) {
      res += map.get(sum - k)
    }
    map.set(sum, (map.get(sum) || 0) + 1)
  }
  return res
}
