function giftCardFunction(n: number, m: number) {
  //z=n-x-y
  //10x+30y+50z=m
  //10x+30y+50n-50x-50y=m
  //-40x-20y+50n=m
  //-40x-20y=m-50n
  let res = 0
  let rhs = m - 50 * n
  for (let x = 0; x < n; ++x) {
    for (let y = 0; y < n; ++y) {
      let lhs = -40 * x - 20 * y
      if (lhs === rhs) {
        ++res
      }
    }
  }
  return res
}
console.log(giftCardFunction(4, 80))
