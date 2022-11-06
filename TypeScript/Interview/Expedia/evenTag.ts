function evanTag(val: number[]) {
  let minOdd = Infinity
  let sum = 0
  for (let v of val) {
    if (v > 0) {
      sum += v
    }
    if (v % 2 === 1) {
      if (Math.abs(minOdd) > Math.abs(v)) {
        minOdd = v
      }
    }
  }
  if (sum % 2 === 1) {
    return sum - Math.abs(minOdd)
  } else {
    return sum
  }
}
console.log(evanTag([2, 3, 6, 10, 1, 1]))
console.log(evanTag([2, 3, 6, -5, 10, 1, 1]))
