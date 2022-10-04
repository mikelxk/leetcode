function numDecodingsDp(s: string) {
  let n = s.length
  let dp = new Array(n + 1).fill(0)
  dp[n] = 1
  for (let i = n - 1; i >= 0; --i) {
    if (s[i] === "0") {
      dp[i] = 0
    } else {
      dp[i] = dp[i + 1]
    }
    if (i + 1 < n && (s[i] == "1" || (s[i] == "2" && s[i + 1] < "6"))) {
      dp[i] += dp[i + 2]
    }
  }
  return dp[0]
}
function numDecodings(s: string): number {
  if (s.length === 0 || s[0] === "0") {
    return 0
  }
  let [prev, beforePrev] = [1, 1]
  for (let curr = 1; curr < s.length; ++curr) {
    let tmp = prev
    if (s[curr] === "0") {
      prev = 0
    }
    if (isTwoDigit(curr)) {
      prev += beforePrev
    }
    beforePrev = tmp
  }
  return prev
  function isTwoDigit(i: number) {
    const [prevChar, curChar] = [s[i - 1], s[i]]
    const is10 = prevChar === "1"
    const is20 = prevChar === "2" && curChar <= "6"

    return is10 || is20
  }
}

console.log(numDecodingsDp("06"))
