function change(amount: number, coins: number[]) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (let c of coins) {
    for (let j = c; j <= amount; ++j) {
      dp[j] += dp[j - c]
    }
  }
  return dp[amount]
}
