function solution(knows: (a: number, b: number) => boolean) {
  return function (n: number): number {
    function isCelebrity(i: number) {
      for (let j = 0; j < n; ++j) {
        if (i === j) {
          continue
        }
        if (knows(i, j) || !knows(j, i)) {
          return false
        }
      }
      return true
    }
    let celebrityCandidate = 0
    for (let i = 0; i < n; ++i) {
      if (knows(celebrityCandidate, i)) {
        celebrityCandidate = i
      }
    }
    if (isCelebrity(celebrityCandidate)) {
      return celebrityCandidate
    }
    return -1
  }
}
