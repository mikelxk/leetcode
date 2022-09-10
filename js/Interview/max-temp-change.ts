function getMaxAggreTempChange(changes: number[]) {
  const n = changes.length
  let prefix = new Array<number>(n)
  prefix[0] = changes[0]
  for (let i = 1; i < n; ++i) {
    prefix[i] = prefix[i - 1] + changes[i]
  }
  const [first, last] = [prefix[0], prefix[n - 1]]
  let maxAggre = Math.max(first, last)
  for (let i = 1; i < n; ++i) {
    const temp = Math.max(prefix[i], last - prefix[i - 1])
    maxAggre = Math.max(maxAggre, temp)
  }
  return maxAggre
}
console.log(getMaxAggreTempChange([6, -2, 5]))
