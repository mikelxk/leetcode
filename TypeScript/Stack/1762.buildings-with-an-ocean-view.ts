function findBuildings(heights: number[]): number[] {
  let n = heights.length
  let res: number[] = []
  let maxHeight = -1
  for (let i = n - 1; i >= 0; --i) {
    if (maxHeight < heights[i]) {
      res.unshift(i)
      maxHeight = heights[i]
    }
  }
  return res
}
