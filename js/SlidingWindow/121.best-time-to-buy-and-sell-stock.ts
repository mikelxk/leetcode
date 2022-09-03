function maxProfit(prices: number[]): number {
  let low = prices[0],
    diff = 0
    for (let i = 1; i < prices.length;++i) {
    low = Math.min(low, prices[i])
    diff = Math.max(prices[i] - low, diff)
  }
  return diff
}
console.log(maxProfit([1,2]))