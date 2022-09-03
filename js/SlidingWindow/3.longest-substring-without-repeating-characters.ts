function lengthOfLongestSubstring(s: string): number {
  const set = new Set()
  let l = 0,
    max = 0
  for (let r = 0; r < s.length; ++r) {
    while (set.has(s[r])) {
      set.delete(s[l])
      ++l
    }
    set.add(s[r])
    max = Math.max(max, set.size)
  }
  return max
}   
