function maxProduct(nums: number[]): number {
  return Math.max(getMax(nums), getMax(nums.reverse()))
  function getMax(arr: number[]) {
    let product = 1
    let max = -Infinity
    for (let n of arr) {
      product *= n
      max = Math.max(product, max)
      if (product === 0) {
        product = 1
      }
    }
    return max
  }
}
