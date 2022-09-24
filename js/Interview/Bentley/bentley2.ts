function solution(A: string[]) {
  let res = [""]
  let max = 0
  for (let word of A) {
    for (let i = 0; i < res.length; ++i) {
      let newRes = res[i] + word
      let newResSet = new Set(newRes.split(""))
      if (newRes.length !== newResSet.size) {
        continue
      }
      res.push(newRes)
      max = Math.max(max, newRes.length)
    }
  }
  return max
}
console.log(solution(["co", "dil", "ity"]))
