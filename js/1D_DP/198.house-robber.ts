function rob(nums: number[]): number {
  let rob1 = 0,
    rob2 = 0
  for (let num of nums) {
    let newRob = Math.max(rob1 + num, rob2)
    rob1 = rob2
    rob2 = newRob
  }
  return rob2
}
