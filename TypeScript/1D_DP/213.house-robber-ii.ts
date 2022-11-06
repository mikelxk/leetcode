function rob(nums: number[]): number {
  if (nums.length == 1) {
    return nums[0]
  }
  return Math.max(helper(nums.slice(0, -1)), helper(nums.slice(1)))
  function helper(nums: number[]): number {
    let rob1 = 0,
      rob2 = 0
    for (let num of nums) {
      let newRob = Math.max(rob1 + num, rob2)
      rob1 = rob2
      rob2 = newRob
    }
    return rob2
  }
}
console.log(rob([1]))
