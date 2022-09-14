function maxArea(height: number[]): number {
  let [l, r] = [0, height.length - 1]
  let max = 0
  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l)
    max = Math.max(area, max)
    if (height[l] > height[r]) {
      --r
    } else {
      ++l
    }
  }
  return max
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
