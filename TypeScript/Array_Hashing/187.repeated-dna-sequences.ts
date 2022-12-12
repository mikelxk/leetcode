function findRepeatedDnaSequences(s: string): string[] {
  let n = s.length
  let l = 10
  let seen = new Set<string>(),
    res = new Set<string>()
  for (let i = 0; i < n - l + 1; ++i) {
    let tmp = s.slice(i, i + l)
    if (seen.has(tmp)) {
      res.add(tmp)
    }
    seen.add(tmp)
  }
  return Array.from(res)
}
