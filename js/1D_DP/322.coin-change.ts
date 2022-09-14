function coinChange(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i < dp.length; ++i) {
    for (const coin of coins) {
      if (i < coin) {
        continue
      }
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}
console.log(coinChange([1, 2, 5], 11))
