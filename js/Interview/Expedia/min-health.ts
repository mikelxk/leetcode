function getMinimumHealth(
  initPlayers: number[],
  newPlayers: number[],
  rank: number
) {
  let stack = [...initPlayers]
  let maxHealth = stack[stack.length - rank]
  for (let i = 0; i < newPlayers.length; ++i) {
    stack.push(newPlayers[i])
    maxHealth += stack[stack.length - rank]
  }
  return maxHealth
}
console.log(getMinimumHealth([1, 2], [3, 4], 2))
