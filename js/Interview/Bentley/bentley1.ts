function solution(S: string) {
  let m: Record<number, number> = {}
  for (let c of S) {
    m[c] = m[c] ? m[c] + 1 : 1
  }
  let oddCnt = 0
  for (const [k, v] of Object.entries(m)) {
    if (v % 2 == 1) {
      oddCnt++
    }
  }
  return Math.max(0, oddCnt - 1)
}
console.log(solution("ervervige"))
