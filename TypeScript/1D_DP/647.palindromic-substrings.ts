function countSubstrings(s: string): number {
  let res = 0
  let n = s.length
  for (let i = 0; i < n; ++i) {
    res += countCenter(i, i)
    res += countCenter(i, i + 1)
  }
  return res
  function countCenter(low: number, high: number) {
    let cnt = 0
    while (low >= 0 && high < n) {
      if (s[low] !== s[high]) {
        break
      }
      --low
      ++high
      ++cnt
    }
    return cnt
  }
}
