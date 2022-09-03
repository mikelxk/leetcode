function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = Array(s.length + 1).fill(false)
  dp[s.length] = true
  for (let i = s.length - 1; i >= 0; --i) {
    for (const w of wordDict) {
      const wl = w.length
      if (i + wl <= s.length && s.slice(i, i + wl) === w) {
        dp[i] = dp[i + wl]
      }
      if (dp[i]) {
        break
      }
    }
  }
  return dp[0]
}
