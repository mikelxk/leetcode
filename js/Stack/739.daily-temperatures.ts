function dailyTemperatures(temperatures: number[]): number[] {
  let n = temperatures.length
  let res = new Array<number>(n).fill(0)
  let stack = new Array<number>()
  for (let i = 0; i < n; ++i) {
    let currTemp = temperatures[i]
    while (stack.length !== 0 && temperatures[stack.at(-1)] < currTemp) {
      let prev = stack.pop()
      res[prev] = i - prev
    }
    stack.push(i)
  }
  return res
}
