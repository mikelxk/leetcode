function binaryGame(
  min_length: number,
  max_length: number,
  one_group: number,
  zero_group: number
) {
  let dp = new Array(max_length + 1).fill(0)
  dp[one_group]++
  dp[zero_group]++
  for (let i = 0; i < dp.length; ++i) {
    if (i - one_group >= 0) {
      dp[i] += dp[i - one_group]
    }
    if (i - zero_group >= 0) {
      dp[i] += dp[i - zero_group]
    }
  }
  return dp.slice(min_length).reduce((a, b) => a + b, 0)
}
console.log(binaryGame(1, 3, 2, 1))
