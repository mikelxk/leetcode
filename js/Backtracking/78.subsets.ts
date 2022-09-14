function subsets(nums: number[]): number[][] {
  let res: number[][] = []
  let subset: number[] = []
  let n = nums.length
  dfs(0)
  return res
  function dfs(i: number) {
    if (i >= n) {
      res.push([...subset])
      return
    }
    subset.push(nums[i])
    dfs(i + 1)
    subset.pop()
    dfs(i + 1)
  }
}
