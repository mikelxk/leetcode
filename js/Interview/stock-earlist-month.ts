function count(number: []) {
  let prevSum: number[] = []
  let postSum: number[] = []
  const n = number.length
  for (let i = 0; i < n; ++i) {
    let prev = i > 0 ? prevSum[i - 1] : 0
    prevSum[i] = prev + number[i]
  }
  for (let i = n - 1; i >= 0; --i) {
    let post = i < number.length - 1 ? postSum[i + 1] : 0
    postSum[i] = post + number[i]
  }
  let min = 100000
  let month
  for (let i = 0; i < number.length; ++i) {
    const prevAvg = Math.floor(prevSum[i] / (i + 1))
    const postAvg = Math.floor(postSum[i] / (n - i))
    const diff = Math.abs(prevAvg - postAvg)
    if (min > diff) {
      month = i + 1
      min = diff
    }
  }
  return month
}

console.log(count([1, 3, 2, 3]))
