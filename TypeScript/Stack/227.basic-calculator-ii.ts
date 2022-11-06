function calculate(s: string): number {
  let n = s.length
  if (n === 0) return 0
  let [currNum, lastNumber, result] = [0, 0, 0]
  let sign = "+"
  function isdigit(n: string) {
    return n >= "0" && n <= "9"
  }
  for (let i = 0; i < n; ++i) {
    let c = s[i]
    if (isdigit(c)) {
      currNum = currNum * 10 + Number(c)
    }
    if ((!isdigit(c) && c !== " ") || i == n - 1) {
      if (sign == "+" || sign == "-") {
        result += lastNumber
        lastNumber = sign == "+" ? currNum : -currNum
      } else if (sign == "*") {
        lastNumber = lastNumber * currNum
      } else if (sign == "/") {
        lastNumber = Math.trunc(lastNumber / currNum)
      }
      sign = c
      currNum = 0
    }
  }
  return result + lastNumber
}
console.log(calculate("14-3/2"))
