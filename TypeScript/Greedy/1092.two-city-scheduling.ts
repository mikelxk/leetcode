function twoCitySchedCost(costs: number[][]): number {
  costs.sort(([xa, xb], [ya, yb]) => xa - xb - (ya - yb))
  let n = costs.length / 2
  let res = 0
  for (let i = 0; i < n; ++i) {
    res += costs[i][0] + costs[i + n][1]
  }
  return res
}
