function longestCommonSubsequence(text1: string, text2: string): number {
  let m = text1.length
  let n = text2.length
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      if (text1[i] == text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1]
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
  }
  return dp[0][0]
}
longestCommonSubsequence("abc","abc" )