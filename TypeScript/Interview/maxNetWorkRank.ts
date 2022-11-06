function maxNetworkRank(starts: number[], ends: number[], n: number) {
  let m = starts.length
  const edgeCnt = new Array(m + 1).fill(0)
  for (let i = 0; i < m; ++i) {
    edgeCnt[starts[i]]++
    edgeCnt[ends[i]]++
  }
  let max = 0
  for (let i = 0; i < m; ++i) {
    let rank = edgeCnt[starts[i]] + edgeCnt[ends[i]] - 1
    max = Math.max(max, rank)
  }
  return max
}

console.log(maxNetworkRank([1, 2, 3, 3], [2, 3, 1, 4], 4))
