function getMaximumScore(arr: number[], k: number) {
  let descendingArr = [...arr].sort((a, b) => b - a)
  
  return descendingArr.slice(0, k).reduce((a, b) => a + b, 0)
}
console.log(getMaximumScore([4, 6, -10, -1, 10, -20], 4))
