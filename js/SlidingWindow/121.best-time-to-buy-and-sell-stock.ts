function maxProfit(prices: number[]): number {
  let low = prices[0],
    diff = 0
  for (let i = 1; i < prices.length; ++i) {
    low = Math.min(low, prices[i])
    diff = Math.max(prices[i] - low, diff)
  }
  return diff
}
function maxProfit2(prices: number[]): number {
  let [left, right, max] = [0, 1, 0]
  while (right < prices.length) {
    if (prices[right] <= prices[left]) left = right
    max = Math.max(max, prices[right] - prices[left])
    ++right
  }
  return max
}
console.log(maxProfit2([7, 1, 5, 3, 6, 4]))
