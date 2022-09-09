const op = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.floor(a / b),
}

function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  for (const token of tokens) {
    if (token in op) {
      const lhs = stack.pop()
      const rhs = stack.pop()
      stack.push(op[token](lhs, rhs))
    } else {
      stack.push(Number(token))
    }
  }
  return stack.pop()!
}
