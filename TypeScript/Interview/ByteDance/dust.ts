function dust(m: number, n: number, plan: [number, number][]) {
  let [l, r] = plan[0]
  for (let [start, end] of plan) {
    l = Math.min(start, l)
    r = Math.max(end, r)
  }
  return l + (n - 1 - r)
}
console.log(
  dust(2, 7, [
    [0, 3],
    [3, 5],
  ])
)
