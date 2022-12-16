function isSubsequence(s: string, t: string): boolean {
  let ps = 0
  for (let c of t) {
    if (c === s[ps]) ++ps
  }
  return ps === s.length
}
