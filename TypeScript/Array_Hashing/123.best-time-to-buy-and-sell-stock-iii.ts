function maxProfit(prices: number[]): number {
  let t1Cost = Infinity,
    t2Cost = Infinity,
    t1Profit = 0,
    t2Profit = 0
  for (let price of prices) {
    t1Cost = Math.min(t1Cost, price)
    t1Profit = Math.max(t1Profit, price - t1Cost)
    t2Cost = Math.min(t2Cost, price - t1Profit)
    t2Profit = Math.max(t2Profit, price - t2Cost)
  }
  return t2Profit
}
