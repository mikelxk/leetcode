function largestNumber(nums: number[]): string {
  let largest = nums.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`))
  return largest[0] === 0 ? "0" : largest.join("")
}
