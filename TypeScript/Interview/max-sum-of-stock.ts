function maxSumOfStock(stockPrice: number[], k: number) {
  let res = 0
  const numInWindow = new Set()
  let left = 0
  let right = 0
  while (right < stockPrice.length) {
    while (numInWindow.has(stockPrice[right])) {
      numInWindow.delete(stockPrice[left])
      ++left
    }
    numInWindow.add(stockPrice[right])
    ++right
    while (right - left === k) {
    //   let curSum = 0
    //   for (let i = left; i < right; ++i) {
    //     curSum += stockPrice[i]
    //   }
      const curSum = stockPrice.slice(left, right).reduce((a, b) => a + b, 0)
      res = Math.max(res, curSum)
      ++left
    }
  }
  if (res === 0) {
    return -1
  }
  return res
}
console.log(maxSumOfStock([1, 2, 7, 7, 4, 3, 6], 3))
