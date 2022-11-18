function giftCard(n: number, m: number) {
  let coins = [10, 30, 50]
  let s = new Set<string>()
  dfs(0, 0, [])
  return s.size
  function dfs(route: number, sum: number, path: number[]) {
    if (sum > m || route > n) {
      return
    }
    if (route === n) {
      if (sum === m) {
        s.add(path.sort((a, b) => a - b).toString())
      }
      return
    }
    for (let c of coins) {
      dfs(route + 1, sum + c, [...path, c])
    }
  }
}
function giftCardFunction(n: number, m: number) {
  //z=n-x-y
  //10x+30y+50z=m
  //10x+30y+50n-50x-50y=m
  //-40x-20y+50n=m
  //-40x-20y=m-50n
  let res = 0
  let rhs = m - 50 * n
  for (let x = 0; x <= n; ++x) {
    for (let y = 0; y <= n; ++y) {
      let lhs = -40 * x - 20 * y
      if (lhs === rhs && x + y <= n) {
        ++res
      }
    }
  }
  return res
}
console.log(giftCard(4, 80))
