function minGroup(movies: number[], diff: number) {
  movies.sort((a, b) => a - b)
  const n = movies.length
  const dp: number[] = new Array(n + 1)
  dp[n] = 0
  for (let i = n - 1; i >= 0; --i) {
    dp[i] = 1 + dp[i + 1]
    for (let j = i + 1; j < n - 1; ++j) {
      if (movies[j] > movies[i] + diff) {
        break
      } else {
        dp[i] = Math.min(dp[i], 1 + dp[j + 1])
      }
    }
  }
  return dp[0]
}
function minGroup2(movies: number[], diff: number) {
  movies.sort((a, b) => a - b)
  let ret: number[] = []
  let ans=0
  let l = 0
  for (let i = 0; i < movies.length; ++i) {
    if (movies[i] - movies[l] > diff) {
      ret.concat(movies.slice(l, i))
      ++ans
      l=i
    }
  }
  ret.concat(movies.slice(l))
  return ans
}
console.log(minGroup2([1, 5, 4, 6, 8, 9, 2], 3))
