function trap(height: number[]): number {
  if (height.length === 0) return 0
  let [l, r] = [0, height.length - 1]
  let [leftMax, rightMax] = [height[l], height[r]]
  let res = 0
  while (l < r) {
    if (leftMax < rightMax) {
      ++l
      leftMax = Math.max(leftMax, height[l])
      res += leftMax - height[l]
    } else {
      --r
      rightMax = Math.max(rightMax, height[r])
      res += rightMax - height[r]
    }
  }
  return res
}
