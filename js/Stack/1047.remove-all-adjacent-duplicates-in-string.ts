function removeDuplicates(s: string): string {
  let res: string[] = []
  for (let c of s) {
    if (res.length !== 0 && c === res.at(-1)) {
      res.pop()
    } else {
      res.push(c)
    }
  }
  return res.join("")
}
