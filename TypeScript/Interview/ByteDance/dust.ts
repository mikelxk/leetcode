function dust(m: number, n: number, plan: [number, number][]) {
  let tasks = new Array<number>(n + 1).fill(0)
  for (let [start, end] of plan) {
    ++tasks[start]
    --tasks[end + 1]
  }
  let res = 0
  let s = 0
  for (let i = 0; i < tasks.length - 1; ++i) {
    s += tasks[i]
    if (s == 0) {
      ++res
    }
  }
  return res
}
console.log(
  dust(2, 7, [
    [0, 3],
    [3, 5],
  ])
)
