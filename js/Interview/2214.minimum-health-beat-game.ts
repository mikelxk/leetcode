function minHealth(damage: number[], armor: number) {
  const maxProtect = Math.min(Math.max(...damage), armor)
  return 1 + damage.reduce((a, b) => a + b, 0) - maxProtect
}
console.log(minHealth([2, 7, 4, 3], 4))
