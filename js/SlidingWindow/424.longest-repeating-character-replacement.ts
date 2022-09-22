function characterReplacement(s: string, k: number): number {
  let count = Array(26).fill(0)
  let res = 0
  let l = 0
  let maxF = 0
  for (let r = 0; r < s.length; ++r) {
    let c = ++count[getCode(s[r])]
    maxF = Math.max(maxF, c)
    let window = r - l + 1
    if (window - maxF > k) {
      --count[getCode(s[l])]
      ++l
    }
    window = r - l + 1
    res = Math.max(res, window)
  }
  return res
}
const getCode = (char: string) => char.charCodeAt(0) - "A".charCodeAt(0)
console.log(characterReplacement("AABABBA", 1))
