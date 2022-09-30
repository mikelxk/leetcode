function numDecodings(s: string): number {
  if (s.length === 0 || s[0] === "0") {
    return 0
  }
  let [prev, beforePrev] = [1, 1]
  for (let curr = 1; curr < s.length; ++curr) {
    let tmp = prev
    if (s[curr] === "0") {
      prev = 0
    }
    if (isTwoDigit(curr)) {
      prev += beforePrev
    }
    beforePrev = tmp
  }
  return prev
  function isTwoDigit(i: number) {
    const [prevChar, curChar] = [s[i - 1], s[i]]
    const is10 = prevChar === "1"
    const is20 = prevChar === "2" && curChar <= "6"

    return is10 || is20
  }
}
