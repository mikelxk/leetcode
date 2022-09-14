function isValid(s: string): boolean {
  const m = {
    "}": "{",
    "]": "[",
    ")": "(",
  }
  let stack: string[] = []
  for (const str of s) {
    if (str in m) {
      if (stack.length != 0 && stack.at(-1) === m[str]) {
        stack.pop()
      } else return false
    } else {
      stack.push(str)
    }
  }
  return stack.length === 0
}
