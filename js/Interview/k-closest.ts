function kClosest(points: number[][], k: number) {
  points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2))
  let res: number[][] = []
  for (let i = 0; i < k; ++i) {
    res.push(points[i])
  }
  return res
//   return points.slice(0, k)
}
console.log(
  kClosest(
    [
      [1, 2],
      [3, 4],
      [1, -1],
    ],
    2
  )
)
