function diffBy1(A: number[]) {
  let s = new Set()
  for (let n of A) {
    if (s.has(n - 1) || s.has(n + 1)) {
      return true
    }
    s.add(n)
  }
  return false
}


