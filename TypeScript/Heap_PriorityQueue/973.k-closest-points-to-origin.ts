function kClosest(points: number[][], k: number): number[][] {
  points.sort(([ax, ay], [bx, by]) => ax ** 2 + ay ** 2 - (bx ** 2 + by ** 2))
  return points.slice(0, k)
}
