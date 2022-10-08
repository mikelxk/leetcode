function unhappyFriends(
  n: number,
  preferences: number[][],
  pairs: number[][]
): number {
  let map = new Map<number, number>()
  for (let [x, y] of pairs) {
    map.set(x, y)
    map.set(y, x)
  }
  let res = 0
  for (let [x, y] of pairs) {
    res += isUnhappy(x, y)
    res += isUnhappy(y, x)
  }
  return res
  function isUnhappy(person: number, currMate: number) {
    for (let potentialMate of preferences[person]) {
      if (potentialMate === currMate) return 0
      let matesCurr = map.get(potentialMate)
      for (let potentialMatesMate of preferences[potentialMate]) {
        if (potentialMatesMate === person) {
          return 1
        } else if (potentialMatesMate === matesCurr) {
          break 
        }
      }
    }
    return 0
  }
}
