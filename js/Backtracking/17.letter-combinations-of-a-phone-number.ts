//O(4^N*N)
const digitMap: Record<string, string> = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
}
function letterCombinations(digits: string): string[] {
  let n = digits.length
  if (n == 0) {
    return []
  }
  let res: string[] = []
  backtrack(0, "")
  return res
  function backtrack(pos: number, str: string) {
    if (pos === n) {
      res.push(str)
      return
    }
    for (let c of digitMap[digits[pos]]) {
      backtrack(pos + 1, str + c)
    }
  }
}
