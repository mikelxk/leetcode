function removeInvalidParentheses(s: string): string[] {
  let res: string[] = []
  dfs(s, 0, 0, "(", ")")
  return res
  function dfs(
    str: string,
    startI: number,
    startJ: number,
    open: string,
    close: string
  ) {
    let cnt = 0
    for (let i = startI; i < str.length; ++i) {
      let c = str[i]
      if (c === open) ++cnt
      if (c === close) --cnt
      if (cnt >= 0) continue
      for (let j = startJ; j <= i; ++j) {
        if (str[j] === close && (j === startJ || str[j - 1] !== close)) {
          dfs(str.substring(0, j) + str.substring(j + 1), i, j, open, close)
        }
      }
      return
    }
    let rev = str.split("").reverse().join("")
    if (open == "(") {
      dfs(rev, 0, 0, ")", "(")
    } else {
      res.push(rev)
    }
  }
}
console.log(removeInvalidParentheses("()())()"))
console.log(removeInvalidParentheses("(a)())()"))
