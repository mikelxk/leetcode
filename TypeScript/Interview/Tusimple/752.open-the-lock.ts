function mod(a, n) {
  return a - n * Math.floor(a / n)
}
function openLock(deadends: string[], target: string): number {
  let dead = new Set(deadends)
  let queue: [number, string][] = [[0, "0000"]]
  if (dead.has("0000")) return -1
  while (queue.length !== 0) {
    let [steps, code] = queue.shift()
    if (code === target) {
      return steps
    }
    for (let i = 0; i < 4; ++i) {
      let n = Number(code[i])
      for (let num of [mod(n - 1, 10), mod(n + 1, 10)]) {
        let nextCode = code.substring(0, i) + num + code.substring(i + 1)
        if (!dead.has(nextCode)) {
          dead.add(nextCode)
          queue.push([steps + 1, nextCode])
        }
      }
    }
  }
  return -1
}
console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))
