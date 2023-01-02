function generateParenthesis(n: number): string[] {
  let res: string[] = []
  let stack: string[] = []
  backtrack(0, 0)
  return res
  function backtrack(open: number, closed: number) {
    if (open == closed && closed == n) {
      res.push(stack.join(""))
      return
    }
    if (open < n) {
      stack.push("(")
      backtrack(open + 1, closed)
      stack.pop()
    }
    if (closed < open) {
      stack.push(")")
      backtrack(open, closed + 1)
      stack.pop()
    }
  }
}
