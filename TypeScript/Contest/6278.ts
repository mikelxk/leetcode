function countDigits(num: number): number {
  let s = String(num)
  let res = 0
  for (let c of s.split("")) {
    if (num % Number(c) == 0) {
      ++res
    }
  }
  return res
}
console.log(countDigits(1248))