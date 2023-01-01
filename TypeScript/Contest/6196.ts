function minimumPartition(s: string, k: number): number {
  let l = 0,
    r = 0
  let res = 1
  while (r < s.length) {
    let n = Number(s.slice(l, r + 1))
    if (n <= k) {
      ++r
    } else {
      if (l === r) {
        return -1
      }
      l = r
      ++res
    }
  }
  return res
}
console.log(minimumPartition("238182", 5))
